package com.takeo.shop.service;

import java.math.BigDecimal;
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


    public ResponseEntity<String> editProduct(int id, String name, String description, Double price) {
        // First, check if a product with the given id exists
        Optional<Product> productOptional = productRepository.findById(id);
        if (!productOptional.isPresent()) {
            // Product not found, return 404
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product with ID " + id + " not found.");
        }

        // If the product exists, update its details
        Product product = productOptional.get();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        
        

        // Save the updated product
        productRepository.save(product);
        
        // Return a success response
        return ResponseEntity.ok("Product with ID " + id + " was updated successfully.");
    }

}
