package kmeans_server.services;

import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import kmeans_server.domain.Clusterization;
import kmeans_server.domain.ClusterizationStatus;
import kmeans_server.domain.Dimension;
import kmeans_server.domain.FileStatus;
import kmeans_server.domain.Metric;
import kmeans_server.domain.SelectedMetric;
import kmeans_server.repository.ClusterizationRepo;
import kmeans_server.repository.DimensionRepo;
import kmeans_server.repository.FileRepo;
import kmeans_server.repository.MetricRepo;
import kmeans_server.services.exceptions.FlowException;
import kmeans_server.services.exceptions.ProcessingException;
import net.sf.javaml.clustering.Clusterer;
import net.sf.javaml.clustering.KMeans;
import net.sf.javaml.clustering.evaluation.ClusterEvaluation;
import net.sf.javaml.clustering.evaluation.SumOfSquaredErrors;
import net.sf.javaml.core.Dataset;
import net.sf.javaml.core.Instance;
import net.sf.javaml.filter.normalize.NormalizeMidrange;
import net.sf.javaml.tools.data.FileHandler;

import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import etl.datasets.AField;
import etl.datasets.CsvDataset;
import etl.datasets.NumericField;
import etl.datasets.Schema;
import etl.datasets.StringField;

@Service
public class DataService {
	@Autowired
	private FileRepo files;
	@Autowired
	private MetricRepo metrics;
	@Autowired
	private DimensionRepo dimensions;
	@Autowired
	private ClusterizationRepo clusterizations;

	public void processFile(long fileID) throws FlowException,ProcessingException {
		kmeans_server.domain.File file = files.findOne(fileID);
		if (!file.getStatus().equals(FileStatus.UPLOADED))
			throw new FlowException(
					"Arquivo n�o esta dispon�vel para ser processado.");
		List<Metric> metrics = new ArrayList<Metric>();
		List<Dimension> dimensions = new ArrayList<Dimension>();

		try {

			CsvDataset csv = new CsvDataset(file.getLocation());
			Schema schema = csv.getSchema();
			for (int i = 0; i < schema.getFields().size(); i++) {
				AField field = schema.getField(i);
				if (field instanceof NumericField) {
					Metric metric = new Metric();
					metric.setFile(file);
					metric.setName(field.getName());
					metric.setColumnIndex(i);
					metrics.add(metric);

				} else if (field instanceof StringField) {
					Dimension dimension = new Dimension();
					dimension.setFile(file);
					dimension.setName(field.getName());
					dimension.setColumnIndex(i);
					dimensions.add(dimension);
				}
			}

		} catch (Exception e) {
			file.setStatus(FileStatus.WITH_ERROR);
			this.files.save(file);
			throw new ProcessingException("Erro ao processar arquivo. "
					+ e.getMessage());
		}
		file.setMetrics(metrics);
		file.setDimensions(dimensions);
		file.setStatus(FileStatus.READY);
		this.metrics.save(metrics);
		this.dimensions.save(dimensions);
		this.files.save(file);
	}

	public void receiveFile(long fileID, MultipartFile file) throws Exception {
		kmeans_server.domain.File ent = files.findOne(fileID);

		BufferedOutputStream stream = null;
		try {
			byte[] bytes = file.getBytes();
			File dir = new File("uploads/" + ((Long) fileID).toString());
			if (!dir.exists())
				dir.mkdir();
			String filename = dir.getAbsolutePath() + "\\"
					+ file.getOriginalFilename();
			stream = new BufferedOutputStream(new FileOutputStream(new File(
					filename)));
			stream.write(bytes);
			ent.setName(file.getOriginalFilename());
			ent.setLocation(filename);
			ent.setStatus(FileStatus.UPLOADED);
			files.save(ent);
			ent.setClusterizations(null);
			files.save(ent);
		} catch (Exception e) {
			if (stream != null)
				stream.close();

			ent.setStatus(FileStatus.WITH_ERROR);
			files.save(ent);
			throw e;
		}

		stream.close();
	}

	public void executeClusterization(long configId) throws Exception {
		//Instacia objeto com as configurações da clusterização
		Clusterization config = clusterizations.findOne(configId);
		
		//Verifica se a clusterização já está sendo executadas 
		if(config.getStatus().equals(ClusterizationStatus.RUNNING))
			return;
		
		//Define o status da clusterização para em execução
		config.setStatus(ClusterizationStatus.RUNNING);
		clusterizations.save(config);
		
		//Inicia variaveis no escopo da função
		kmeans_server.domain.File file = config.getFile();
		Double threshold = config.getQuality();
		Double score = .0;
		Double last = .0;
		Double gain = threshold + 1;
		Dataset[] clusters = null;
		int clusterCount = config.getInitial();

		//Algorítmo de clusterização
		try {
			
			//Gera outro csv  apropriado para o Javaml
			File io = new File(prepareFileForJavaml(config));
			
			//Carrega o novo csv
			Dataset data = FileHandler.loadDataset(io, 0, ";");
			
			//Normaliza de acordo com a configuração
			if(config.getNormalize()){
				NormalizeMidrange nmr=new NormalizeMidrange(0.5,1);				
				nmr.build(data);
				nmr.filter(data);
			}

			//Itera até a qualidade configurada
			while (gain > threshold) {
				//Clusteriza
				Clusterer km = new KMeans(clusterCount);
				clusters = km.cluster(data);
				
				//Avalia
				ClusterEvaluation sse = new SumOfSquaredErrors();
				score = sse.score(clusters);
				if(last>0)
					gain = 1 - score / last;
				
				//Prepara para próxima iteração
				last = score;
				clusterCount++;
			}

			//Cria tsv para ser recebido pelo javascript
			File tsv = new File(file.getLocation() + config.getId() + ".tsv");
			BufferedWriter writer = new BufferedWriter(new FileWriter(tsv));
			
			
			//Salva header no tsv;
			CsvDataset csv = new CsvDataset(file.getLocation());			
			Iterator<CSVRecord> rows = csv.open();
			for(String header:csv.getHeaders())
				writer.write(header + "\t");
			writer.write("cluster\n");
			
			//Copia linhas para o tsv adicionando o indice do cluster			
			Integer rowId = 0;			
			while(rows.hasNext()){
				CSVRecord row = rows.next();
				Instance current = null;
				Integer clusterIndex = -1;
				for (int i = 0; i < clusters.length; i++) {					
					for (int j = 0; j < clusters[i].size(); j++) {
						Instance datum = clusters[i].get(j);
						if(((String)datum.classValue()).equals(rowId.toString())){
							current = datum;
							clusterIndex = i;
							break;
						}
					}
					if(current!=null)
						break;
				}
				if(clusterIndex>-1){					
					for(int i = 0; i< row.size(); i++){
						writer.write(row.get(i) + "\t");
					}
					writer.write(clusterIndex.toString()+"\n");
				}				
				rowId++;
			}			
			writer.close();
			
			//Finaliza
			config.setStatus(ClusterizationStatus.READY);
			clusterizations.save(config);
		
		//Trata exceções
		} catch (Exception e) {
			config.setStatus(ClusterizationStatus.ERROR);
			clusterizations.save(config);
			throw e;
		}
	}

	private String prepareFileForJavaml(Clusterization config)
			throws IOException {
		kmeans_server.domain.File file = config.getFile();
		CsvDataset csv = new CsvDataset(file.getLocation());
		List<SelectedMetric> metrics = config.getSelection();// file.getMetrics();
		File logFile = new File(file.getLocation() + config.getId()  + ".javaml");
		BufferedWriter writer = new BufferedWriter(new FileWriter(logFile));
		Iterator<CSVRecord> rows = csv.open();
		Integer id = 0;
		while (rows.hasNext()) {
			CSVRecord rec = rows.next();
			writer.write(id.toString() );
			for (SelectedMetric metric : metrics) {
				writer.write(";" + rec.get(metric.getMetric().getColumnIndex()));

			}
			writer.write("\n");
			id++;
		}
		writer.close();
		return file.getLocation() + config.getId() + ".javaml";
	}

	public File getFile(long clusterizationId) {
		Clusterization config = clusterizations.findOne(clusterizationId);
		return new File(config.getFile().getLocation() + config.getId() + ".tsv");
	}

	public String getFilename(long clusterizationId) {
		Clusterization config = clusterizations.findOne(clusterizationId);
		return config.getName() + ".tsv";
	}
}
