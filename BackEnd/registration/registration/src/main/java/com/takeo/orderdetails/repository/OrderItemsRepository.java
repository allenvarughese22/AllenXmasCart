package com.takeo.orderdetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.takeo.orderdetails.model.OrderItems;

public interface OrderItemsRepository extends JpaRepository<OrderItems, Integer> {
	
}
