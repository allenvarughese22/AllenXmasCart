package com.takeo.orderdetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.takeo.orderdetails.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

}
