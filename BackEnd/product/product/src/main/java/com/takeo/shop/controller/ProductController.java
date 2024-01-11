package com.takeo.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.takeo.shop.model.Product;
import com.takeo.shop.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	ProductService productService;

	@GetMapping(value = "/allproducts")
	public List<Product> getProducts() {
		return productService.getProducts();
	}

	@PostMapping("add")
	public ResponseEntity<String> saveProducts(@RequestBody Product product) {
		return productService.saveProducts(product);
	}

	@DeleteMapping(value = "delete/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") int productId) {

		return productService.deleteProduct(productId);
	}

	@PutMapping("/edit")
	public ResponseEntity<String> editProduct(@RequestParam("id") int productId,
			@RequestParam("name") String productName, @RequestParam("desc") String productDescription,
			@RequestParam("price") Double productPrice) {

		// Assuming productService.editProduct returns ResponseEntity<String>
		return productService.editProduct(productId, productName, productDescription, productPrice);

	}

}
