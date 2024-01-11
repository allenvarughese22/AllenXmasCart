package com.takeo.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.takeo.shop.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	
	void deleteById(Integer id);
}
