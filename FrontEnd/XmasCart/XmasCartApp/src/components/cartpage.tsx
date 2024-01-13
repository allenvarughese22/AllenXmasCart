import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="container mt-4">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ product, quantity }, index) => (
                <tr key={product.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={product.imagesrc}
                      alt={product.name}
                      style={{
                        width: "50px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                    {product.name}
                  </td>
                  <td>{quantity}</td>
                  <td>${product.price}</td>
                  <td>${product.price * quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary mr-2"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary mr-2"
                      onClick={() =>
                        quantity > 1
                          ? updateQuantity(product.id, quantity - 1)
                          : null
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <strong>Total:</strong> $
            {cartItems.reduce(
              (total, item) => total + item.product.price * item.quantity,
              0
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
