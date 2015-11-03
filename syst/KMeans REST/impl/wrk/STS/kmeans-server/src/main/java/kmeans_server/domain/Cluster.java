package kmeans_server.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Cluster {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private int count = 0;

	private String name;
	
	private int ind;
	
	@ManyToOne(optional = false, targetEntity = Clusterization.class)
	private Clusterization clusterization;	

	public int getInd() {
		return ind;
	}

	public void setInd(int ind) {
		this.ind = ind;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Clusterization getClusterization() {
		return clusterization;
	}

	public void setClusterization(Clusterization clusterization) {
		this.clusterization = clusterization;
	}

	public long getId() {
		return id;
	}

}
