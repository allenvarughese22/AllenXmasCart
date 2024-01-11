package com.takeo.shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.takeo.shop.model.Product;
import com.takeo.shop.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;

	public List<Product> getProducts() {

		return productRepository.findAll();
	}

	public ResponseEntity<String> saveProducts(Product product) {

		productRepository.save(product);

		return new ResponseEntity<String>("ok", HttpStatus.CREATED);
	}

	public ResponseEntity<String> deleteProduct(int productId) {

		Optional<Product> product = productRepository.findById(productId);
		if (product.isPresent()) {
			productRepository.deleteById(productId);
			return ResponseEntity.ok("Product deleted successfully");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found with ID: " + productId);
		}
	}

}
