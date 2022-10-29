import React from "react";
import "./CardProduct.css";

const CardProduct = ({ product, onClick }) => {
  return (
    <div className="card-product__product-container" onClick={onClick}>
      <img
        src={product.image}
        alt={product.title}
        className="card-product__image"
      />
      <div className="card-product__body-container">
        <h4 className="card-product__title">{product.title}</h4>
        <p className="card-product__price">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export { CardProduct };
