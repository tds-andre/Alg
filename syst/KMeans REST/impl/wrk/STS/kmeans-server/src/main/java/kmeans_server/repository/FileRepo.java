package kmeans_server.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import kmeans_server.domain.*;

@RepositoryRestResource(collectionResourceRel = "file", path = "file")
public interface FileRepo extends CrudRepository<File, Long>{
	
}
