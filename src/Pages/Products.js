import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products")
      .then(response => {
        if (response.data && response.data.data) {
          setProducts(response.data.data);
        } else {
          setError("No data found");
        }
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <h2>{product.attributes.Name}</h2>
            <p>Price: {product.attributes.Price}</p>
            <div>
              <h3>Description:</h3>
              {product.attributes.Description.map((desc, index) => (
                <p key={index}>
                  {desc.children.map(child => child.text).join(" ")}
                </p>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Products;
