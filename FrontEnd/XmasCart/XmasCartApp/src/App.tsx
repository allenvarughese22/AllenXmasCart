import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "../src/context/CartContext";

import Navbar from "./components/navbar";
import HomePageImage from "./components/homepageImage";
import Products from "./components/Products";
import Deals from "./components/Deals";
import CartPage from "./components/cartpage";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageImage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<Deals />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
