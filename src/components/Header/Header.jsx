import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.jpg";
import { DataContext } from "../../context/DataProvider";
import "./Header.css";

export const Header = () => {
  const { cart } = useContext(DataContext);

  return (
    <header className="header__header-container">
      <Link to="/">
        <img src={Logo} alt="Funko-store" className="header__logo" />
      </Link>
      <ul className="header__links-container">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <Link to="/carrito">
        <div className="header__cart">
          <box-icon name="cart" />
          {cart.length > 0 && (
            <p className="header__cart-count">{cart.length}</p>
          )}
        </div>
      </Link>
    </header>
  );
};
