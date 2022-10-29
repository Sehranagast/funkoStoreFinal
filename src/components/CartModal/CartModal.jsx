import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartModal.css";

const CartModal = () => {
  const { cart, isModalVisible, toggleModalVisibility, resetCart } =
    useContext(DataContext);

  if (!isModalVisible) return null;

  const handleBuy = () => {
    const confirmed = window.confirm(
      "Estas a tan solo un click de comprar los funkos que elegiste"
    );
    if (confirmed) {
      toggleModalVisibility();
      resetCart();
    }
  };

  return (
    <div className="cartModal__container">
      <div className="cartModal__box">
        <div className="cartModal_title-container">
          <h2 className="cartModal__title">Lista de productos</h2>
          <div
            className="cartModal__close-button"
            onClick={toggleModalVisibility}
          >
            <box-icon name="x-circle" size="md" />
          </div>
        </div>
        <div className="cartModal__products-container">
          {cart.map((product) => (
            <CartItem id={product.id} product={product} />
          ))}
          {cart.length === 0 && (
            <p className="cartModal__empty-cart-message">
              No hay productos en el carrito
            </p>
          )}
        </div>
        {cart.length > 0 && (
          <Button
            text="Finalizar compra"
            className="cartModal__submit-button"
            onClick={handleBuy}
          />
        )}
      </div>
    </div>
  );
};

export default CartModal;
