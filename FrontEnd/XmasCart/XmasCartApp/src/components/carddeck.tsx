import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imagesrc: string;
}

const CardDeck: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cartItems, addToCart, updateQuantity } = useCart();

  useEffect(() => {
    fetch("http://localhost:8557/products/allproducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.slice(0, 1000)); // Assuming 'data' is an array of products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "path_to_default_image.jpg"; // Fallback image URL
  };

  const findQuantity = (productId: number) => {
    const item = cartItems.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="container my-5">
      <div className="row">
        {products.map((product) => {
          const quantity = findQuantity(product.id);

          return (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.imagesrc}
                  alt={product.name}
                  onError={handleImageError}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <div className="d-flex align-items-center button-spacing">
                    <button
                      className="btn btn-outline-secondary btn-sm mr-2"
                      onClick={() =>
                        updateQuantity(product.id, Math.max(quantity - 1, 0))
                      }
                      disabled={quantity === 0}
                    >
                      -
                    </button>
                    <span
                      className="aaspan"
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                    >
                      {quantity}
                    </span>

                    <button
                      className="btn btn-outline-primary btn-sm ml-2"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardDeck;
