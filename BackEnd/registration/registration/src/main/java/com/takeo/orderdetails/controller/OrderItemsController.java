package com.takeo.orderdetails.controller;

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

import com.takeo.orderdetails.model.OrderItems;
import com.takeo.orderdetails.service.OrderItemsService;


@RestController
@RequestMapping("/orders")
public class OrderItemsController {
	
	@Autowired
	OrderItemsService orderItemService;
	
	@GetMapping(value = "/all")
	public List<OrderItems> getOrderItems() {
		return orderItemService.getOrderItems();
	}
	
	

	@PostMapping("add")
	public ResponseEntity<String> saveOrderItems(@RequestBody OrderItems orderItem) {
		return orderItemService.saveOrderItems(orderItem);
	}

	@DeleteMapping(value = "delete/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") int productId) {

		return orderItemService.deleteOrderItems(productId);
	}

	@PutMapping("/edit")
	public ResponseEntity<String> editProduct(@RequestParam("oitemid") int orderItemId,
			@RequestParam("oid") int orderId,
			@RequestParam("pid") String productId, @RequestParam("qt") int quantity,
			@RequestParam("status") String status)
			 {

		
		return orderItemService.editOrderItems(orderItemId, orderId, productId, quantity, status);

	}

}
