package kmeans_server.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Clusterization {

	// Fields
	// ------------------------------------------------------------------------//
	// ------------------------------------------------------------------------------------------//

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(nullable = true)
	private String name;

	@ManyToOne(optional = false, targetEntity = File.class)
	private File file;

	@OneToMany(cascade=CascadeType.REMOVE, targetEntity = SelectedMetric.class, mappedBy = "clusterization")
	private List<SelectedMetric> selection;
	
	@OneToMany(cascade=CascadeType.REMOVE, targetEntity = Cluster.class, mappedBy = "clusterization")
	private List<Cluster> clusters;

	private int initial = 5;

	private double quality = 0.1;


	@Enumerated(EnumType.STRING)
	private ClusterizationStatus status = ClusterizationStatus.CREATED;
	
	private Boolean normalize = false;

	// Getter & Setters
	// ------------------------------------------------------------------------//
	// ------------------------------------------------------------------------------------------//
	
	

	public List<SelectedMetric> getSelection() {
		return selection;
	}

	



	public List<Cluster> getClusters() {
		return clusters;
	}


	public void setClusters(List<Cluster> clusters) {
		this.clusters = clusters;
	}


	public Boolean getNormalize() {
		return normalize;
	}

	public void setNormalize(Boolean normalize) {
		this.normalize = normalize;
	}

	public ClusterizationStatus getStatus() {
		return status;
	}

	public void setStatus(ClusterizationStatus status) {
		this.status = status;
	}

	

	public int getInitial() {
		return initial;
	}

	public void setInitial(int initial) {
		this.initial = initial;
	}

	public double getQuality() {
		return quality;
	}

	public void setQuality(double quality) {
		this.quality = quality;
	}

	public long getId() {
		return id;
	}

	public void setSelection(List<SelectedMetric> selection) {
		this.selection = selection;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	// ------------------------------------------------------------------------------------------//
	// ------------------------------------------------------------------------------------------//

}
