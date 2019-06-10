package com.projechat.bmotest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;

@RepositoryRestResource(collectionResourceRel = "persons", path = "persons")
public interface PersonsRepo extends PagingAndSortingRepository<Person, Long> {

	List<Person> findByLastName(@Param("name") String lastName);
	
	List<Person> findByFirstName(@Param("name") String firstName);
	
	List<Person> findByFirstNameOrLastName(@Param("firstName") String firstName, @Param("lastName") String lastName);

}
