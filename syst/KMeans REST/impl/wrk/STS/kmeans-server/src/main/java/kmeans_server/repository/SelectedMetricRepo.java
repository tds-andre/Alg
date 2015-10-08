package kmeans_server.repository;

import kmeans_server.domain.SelectedMetric;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "selected", path = "selected")
public interface SelectedMetricRepo extends CrudRepository<SelectedMetric, Long>{

}
