import React from "react";
import { products } from "../../data";
import Card from "../Card/Card";
import "./Products.scss";

const Products = ({ addToCart }) => {
  return (
    <div className="product-section">
      {products.map((item) => (
        <Card key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
