import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { DataContext } from "../../context/DataProvider";
import "./Products.css";

const Products = () => {
  const { products, isLoading, error } = useContext(DataContext);
  const navigate = useNavigate();

  if (isLoading) {
    return <h1 className="products__main-title">Is Loading...</h1>;
  }

  if (error) {
    return <h1 className="products__main-title">Something went wrong</h1>;
  }

  return (
    <div className="products__container">
      <h1 className="products__main-title">Productos</h1>
      <div className="products__products-container">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            isNew={product.isNew}
            onClick={() => navigate(`/productos/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export { Products };
