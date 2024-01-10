package com.takeo.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.takeo.product.model.Product;
import com.takeo.product.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;

	public List<Product> getProducts() {
		
		return productRepository.findAll();
	}
	
	

}
