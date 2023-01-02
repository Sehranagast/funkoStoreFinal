import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./screens/Home/Home";
import { Products } from "./screens/Products/Products";
import { ProductDetail } from "./screens/ProductDetail/ProductDetail";
import { DataContext, DataProvider } from "./context/DataProvider";
import { Cart } from "./screens/Cart/Cart";
import { Checkout } from "./screens/Checkout/Checkout";
import { useContext } from "react";

function App() {
  const { cart } = useContext(DataContext);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/productos" exact element={<Products />} />
        <Route path="/productos/:id" exact element={<ProductDetail />} />
        <Route path="/carrito" exact element={<Cart />} />
        {cart.length > 0 && (
          <Route path="/checkout" exact element={<Checkout />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
