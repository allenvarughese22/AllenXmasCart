package com.takeo.orderdetails.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.takeo.orderdetails.model.OrderItems;
import com.takeo.orderdetails.repository.OrderItemsRepository;
import com.takeo.shop.model.Product;

@Service
public class OrderItemsService {
	
	@Autowired
	OrderItemsRepository orderItemsRepository;

	public List<OrderItems> getOrderItems() {
		
		return orderItemsRepository.findAll();
	}
	

	public ResponseEntity<String> saveOrderItems(OrderItems orderItem) {
		orderItemsRepository.save(orderItem);
		return new ResponseEntity<String>("ok.. new orderitem saved", HttpStatus.CREATED);
	}


	
	public ResponseEntity<String> deleteOrderItems(int orderItemId) {
	    Optional<OrderItems> orderItem = orderItemsRepository.findById(orderItemId);
	    
	    if (orderItem.isPresent()) {
	        orderItemsRepository.delete(orderItem.get()); // Corrected line
	        return ResponseEntity.ok("OrderItem deleted successfully");
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("OrderItem not found with ID: " + orderItemId);
	    }
	    
	    	}

	
	

}
