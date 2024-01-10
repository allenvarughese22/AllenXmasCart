package com.takeo.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	public List<Product> getCourse() {
		return productService.getProducts();
	}
	

}
