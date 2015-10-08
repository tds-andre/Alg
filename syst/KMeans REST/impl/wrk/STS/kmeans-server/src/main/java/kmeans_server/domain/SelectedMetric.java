package kmeans_server.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SelectedMetric {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@ManyToOne(optional=false, targetEntity=Clusterization.class)
	private Clusterization clusterization;
	
	@ManyToOne(optional=false, targetEntity=Metric.class)
	private Metric metric;

	public Clusterization getClusterization() {
		return clusterization;
	}

	public void setClusterization(Clusterization clusterization) {
		this.clusterization = clusterization;
	}

	public Metric getMetric() {
		return metric;
	}

	public void setMetric(Metric metric) {
		this.metric = metric;
	}
	
	
}
