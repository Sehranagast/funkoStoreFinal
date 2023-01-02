import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { DataContext } from "../../context/DataProvider";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { products, isLoading, addToCart, removeFromCart, cart } =
    useContext(DataContext);
  const params = useParams();
  const productId = params.id;

  if (isLoading) return <h1>Is Loading</h1>;

  const product = products.find((product) => String(product.id) === productId);
  const alreadyInCart = cart.some(
    (product) => String(product.id) === productId
  );

  return (
    <div className="product-detail__product-detail-container">
      <h1 className="product-detail__main-title">Detalle del Funko</h1>
      <div className="product-detail__product-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail__image"
        />
        <div className="product-detail__body-container">
          <h4 className="product-detail__title">{product.title}</h4>
          <p className="product-detail__price">Precio: ${product.price}</p>
          <h4 className="product-detail__description">Descripción</h4>
          <p className="product-detail__description">{product.description}</p>
          <div className="product-detail__actions-container">
            {alreadyInCart && (
              <Button
                text="Eliminar del carrito"
                type="secondary"
                className="product-detail__buy-button"
                onClick={() => removeFromCart(product.id)}
              />
            )}
            <Button
              text="Agregar al carrito"
              type="secondary"
              className="product-detail__buy-button"
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDetail };
