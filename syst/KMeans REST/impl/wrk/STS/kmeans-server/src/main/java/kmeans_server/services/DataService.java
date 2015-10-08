package kmeans_server.services;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import kmeans_server.domain.Clusterization;
import kmeans_server.domain.Dimension;
import kmeans_server.domain.FileStatus;
import kmeans_server.domain.Metric;
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
import net.sf.javaml.tools.data.FileHandler;

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

	public void processFile(long fileID) throws FlowException,
			ProcessingException {
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
					metric.setOrder(i);
					metrics.add(metric);

				} else if (field instanceof StringField) {
					Dimension dimension = new Dimension();
					dimension.setFile(file);
					dimension.setName(field.getName());
					dimension.setOrder(i);
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

	public void executeClusterization(long configId) {
		Clusterization config = clusterizations.findOne(configId);
		kmeans_server.domain.File file = config.getFile();
		Double threshold = 0.1;
		Double score = .0;
		Double last = .0;
		Double gain = threshold + 1;
		Dataset[] clusters = null;
		int clusterCount = 3;

		try {
			File io = new File(file.getLocation());
			Dataset data = FileHandler.loadDataset(io, 4, ",");

			while (gain > threshold) {
				Clusterer km = new KMeans(clusterCount);
				clusters = km.cluster(data);
				ClusterEvaluation sse = new SumOfSquaredErrors();
				score = sse.score(clusters);
				gain = 1 - score / last;
				clusterCount++;
			}

			String json = "";
			for (int i = 0; i < clusters.length; i++) {
				for (int j = 0; j < clusters[i].size(); j++) {
					Instance datum = clusters[i].get(j);
					//for()
				}
			}
		} catch (Exception e) {

		}

	}
}
