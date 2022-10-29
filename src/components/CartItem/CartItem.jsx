import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Button from "../Button/Button";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { removeFromCart } = useContext(DataContext);
  return (
    <div className="cartItem__container">
      <img
        src={product.image}
        alt={product.title}
        className="cartItem__image"
      />
      <div className="cartItem__content-container">
        <div>
          <h4 className="cartItem__title">{product.title}</h4>
          <h4 className="cartItem__price">${product.price}</h4>
        </div>
        <Button
          text="Eliminar"
          type="secondary"
          className="cartItem__remove-button"
          onClick={() => removeFromCart(product.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
