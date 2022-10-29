import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./screens/Home/Home";
import { Products } from "./screens/Products/Products";
import { ProductDetail } from "./screens/ProductDetail/ProductDetail";
import { DataProvider } from "./context/DataProvider";
import CartModal from "./components/CartModal/CartModal";

function App() {
  return (
    <DataProvider>
      <Router>
        <CartModal />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/productos" exact element={<Products />} />
          <Route path="/productos/:id" exact element={<ProductDetail />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
