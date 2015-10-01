package kmeans_server.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import kmeans_server.domain.*;

@RepositoryRestResource(collectionResourceRel = "clusterization", path = "clusterization")
public interface ClusterizationRepo extends CrudRepository<Clusterization, Long>{
	
}
