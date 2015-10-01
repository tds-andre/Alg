package kmeans_server.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Clusterization {
	
	// Fields ------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;

	@Column(nullable=true)
	private String name;
	
	@ManyToOne(optional=false, targetEntity=File.class)
	private File file;
	
	


	// Getter & Setters ------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
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
	
	
	//------------------------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
}
