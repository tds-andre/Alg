package kmeans_server.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class File {
	
	// Fields ----------------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;

	@Column(nullable=true)
	private String name;
	
	@Column(nullable=true)
	private String location;
	
	public String getName() {
		return name;
	}
	
	@OneToMany(targetEntity=Dimension.class, mappedBy="file")
	public List<Dimension> dimensions;
	
	@OneToMany(targetEntity=Clusterization.class, mappedBy="file")
	public List<Metric> metrics;
	
	@OneToMany(targetEntity=Clusterization.class, mappedBy="file")
	private List<Clusterization> clusterizations;

	// Getter & Setters ------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
	
	
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
	
	
	//------------------------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
}
