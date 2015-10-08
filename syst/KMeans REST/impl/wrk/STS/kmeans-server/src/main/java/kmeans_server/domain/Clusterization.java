package kmeans_server.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

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
	
	@OneToMany(targetEntity = SelectedMetric.class, mappedBy = "clusterization")
	private List<SelectedMetric> selection;
	
	private int inital = 5;
	
	private double quality = .1;
	
	

	// Getter & Setters ------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
	
	
	public List<SelectedMetric> getSelection() {
		return selection;
	}

	public int getInital() {
		return inital;
	}

	public void setInital(int inital) {
		this.inital = inital;
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
	
	
	//------------------------------------------------------------------------------------------//
	//------------------------------------------------------------------------------------------//
	
}
