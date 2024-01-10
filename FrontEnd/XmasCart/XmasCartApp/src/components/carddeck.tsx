import React, { useState, useEffect } from "react";
import styles from "./cardeck.module.css";

interface Post {
  id: number;
  name: string;
  description: string; // Add description field
  price: number; // Change type to number
}

function CardDeck() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8557/products/allproducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Post[]) => setPosts(data.slice(0, 100)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="row mt-4">
      {posts.map((post) => (
        <div key={post.id} className="col-md-4 mb-4">
          {" "}
          {/* Use post.id as key */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{post.name}</h5>
              <p className="card-text">{post.description}</p>{" "}
              {/* Display description */}
              <p className="card-text">Price: ${post.price}</p>{" "}
              {/* Display price */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDeck;
