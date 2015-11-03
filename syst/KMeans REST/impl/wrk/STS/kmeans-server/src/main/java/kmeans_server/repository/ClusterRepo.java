package kmeans_server.repository;

import kmeans_server.domain.Cluster;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "cluster", path = "cluster")
public interface ClusterRepo extends CrudRepository<Cluster, Long>{
	
}
