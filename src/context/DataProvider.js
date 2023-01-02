import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const queryDb = getFirestore();
      const funkos = collection(queryDb, "Products");

      const response = await getDocs(funkos);
      const data = response.docs.map((funko) => {
        return { id: funko.id, ...funko.data() };
      });
      setProducts(data);
    } catch (error) {
      setError("No se pueden obtener los productos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const value = {
    products,
    isLoading,
    error,
    cart,
    addToCart,
    removeFromCart,
    resetCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
