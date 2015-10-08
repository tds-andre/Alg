package kmeans_server.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Dimension {

	// ------------------------------------------------------------------------------------------//
	// Fields
	// ------------------------------------------------------------------------------------------//

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String name;

	@ManyToOne(optional = false, targetEntity = File.class)
	private File file;

	private Integer ColumnIndex;

	// ------------------------------------------------------------------------------------------//
	// Getter & Setters
	// ------------------------------------------------------------------------------------------//

	public Integer getColumnIndex() {
		return ColumnIndex;
	}

	public void setColumnIndex(Integer columnIndex) {
		ColumnIndex = columnIndex;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
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
