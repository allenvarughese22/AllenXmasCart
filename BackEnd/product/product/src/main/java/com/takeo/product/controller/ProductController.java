package com.takeo.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.takeo.product.model.Product;
import com.takeo.product.service.ProductService;




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
	public  ResponseEntity<String> saveProducts(@RequestBody Product product) {
		 return productService.saveProducts(product);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public  ResponseEntity<String> deleteProduct(@PathVariable("id") int productId) {

		return productService.deleteProduct(productId);

}
	
}
