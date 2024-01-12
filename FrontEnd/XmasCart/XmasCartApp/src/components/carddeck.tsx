import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface Post {
  id: number;
  name: string;
  description: string;
  price: number;
  imagesrc: string;
}

const CardDeck: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:8557/products/allproducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Post[]) => {
        setPosts(data.slice(0, 1000));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "path_to_default_image.jpg"; // Path to your default or placeholder image
  };

  return (
    <div className="container my-5">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm" style={{ border: "none" }}>
              <img
                src={post.imagesrc}
                alt={post.name}
                // className="cardimg"
                onError={handleImageError}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/products/${post.id}`}>{post.name}</Link>
                </h5>
                <p className="card-text">{post.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${post.price}
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(post)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDeck;
