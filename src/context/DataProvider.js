import React, { createContext, useState, useEffect } from "react";
import funkoData from "../data/funkoData.json";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addToCart = (product) => {
    const alreadyInCart = cart.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!alreadyInCart) {
      const formattedProduct = { ...product, quantity: 1 };

      setCart([...cart, formattedProduct]);
    } else {
      const productInCart = cart.find(
        (cartProduct) => cartProduct.id === product.id
      );

      const formattedProduct = {
        ...productInCart,
        quantity: productInCart.quantity + 1,
      };

      const newCart = cart.filter(
        (cartProduct) => cartProduct.id !== product.id
      );

      setCart([...newCart, formattedProduct]);
    }
  };

  const removeFromCart = (productId) => {
    const filteredCart = cart.filter((product) => product.id !== productId);
    setCart(filteredCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const fetchProducts = async () => {
    try {
      setProducts(funkoData.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 2000);
  }, []);

  const value = {
    products,
    isLoading,
    error,
    cart,
    addToCart,
    removeFromCart,
    isModalVisible,
    toggleModalVisibility,
    resetCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
