import { HomePage } from "./pages/Home/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await axios.get("/api/cart-items?expand=product");
        setCart(res.data); // dữ liệu JSON đã được parse sẵn
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    }
    fetchCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrderPage cart={cart} />} />
    </Routes>
  );
}

export default App;
