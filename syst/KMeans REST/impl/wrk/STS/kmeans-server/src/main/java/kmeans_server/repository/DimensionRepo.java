package kmeans_server.repository;

import kmeans_server.domain.*;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "dimension", path = "dimension")
public interface DimensionRepo extends CrudRepository<Dimension, Long>{
	
}