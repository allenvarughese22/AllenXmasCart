import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(({ product, quantity }) => (
            <li key={product.id}>
              {product.name} - ${product.price} x {quantity} = $
              {product.price * quantity}
              <button onClick={() => updateQuantity(product.id, quantity + 1)}>
                +
              </button>
              <button onClick={() => updateQuantity(product.id, quantity - 1)}>
                -
              </button>
            </li>
          ))}
        </ul>
      )}
      <div>
        Total: $
        {cartItems.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )}
      </div>
    </div>
  );
};

export default CartPage;
