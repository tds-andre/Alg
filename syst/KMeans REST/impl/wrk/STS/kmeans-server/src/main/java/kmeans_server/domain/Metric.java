package kmeans_server.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Metric {
	
	// Fields ----------------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	public String name;
	
	public Integer Order;
	
	@ManyToOne(optional=false, targetEntity=File.class)
	public File file;

	// Getter & Setters ------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
	
	
	public String getName() {
		return name;
	}

	public Integer getOrder() {
		return Order;
	}

	public void setOrder(Integer order) {
		Order = order;
	}

	public void setName(String name) {
		this.name = name;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}
}
