import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginSingup from "./Pages/LoginSingup";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="product" element={<Product />}>
            <Route path=":producteId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
