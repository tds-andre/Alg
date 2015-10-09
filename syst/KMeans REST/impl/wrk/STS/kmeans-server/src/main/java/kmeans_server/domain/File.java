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
import javax.persistence.OneToMany;

@Entity
public class File {

	// ------------------------------------------------------------------------------------------//
	// ------------------------------------------------------------------------------------------//
	// Fields

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(nullable = true)
	private String name;

	@Column(nullable = true)
	private String location;

	@Enumerated(EnumType.STRING)
	private FileStatus status = FileStatus.CREATED;
	
	@OneToMany(cascade=CascadeType.REMOVE, targetEntity = Dimension.class, mappedBy = "file")
	public List<Dimension> dimensions;

	@OneToMany(cascade=CascadeType.REMOVE, targetEntity = Metric.class, mappedBy = "file")
	public List<Metric> metrics;

	@OneToMany(cascade=CascadeType.REMOVE, targetEntity = Clusterization.class, mappedBy = "file")
	private List<Clusterization> clusterizations;

	// ------------------------------------------------------------------------------------------//
	// ------------------------------------------------------------------------------------------//
	// Getter & Setters

	public String getName() {
		return name;
	}

	public FileStatus getStatus() {
		return status;
	}

	public void setStatus(FileStatus status) {
		this.status = status;
	}



	public void setName(String name) {
		this.name = name;
	}

	public List<Dimension> getDimensions() {
		return dimensions;
	}

	public void setDimensions(List<Dimension> dimensions) {
		this.dimensions = dimensions;
	}

	public List<Metric> getMetrics() {
		return metrics;
	}

	public void setMetrics(List<Metric> metrics) {
		this.metrics = metrics;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<Clusterization> getClusterizations() {
		return clusterizations;
	}

	public void setClusterizations(List<Clusterization> clusterizations) {
		this.clusterizations = clusterizations;
	}

	// ------------------------------------------------------------------------------------------//
	// ------------------------------------------------------------------------------------------//

}
