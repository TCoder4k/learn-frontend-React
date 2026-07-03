import { HomePage } from "./pages/Home/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import { Routes, Route } from "react-router";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = useCallback(async () => {
    const res = await axios.get("/api/cart-items?expand=product");
    setCart(res.data); // dữ liệu JSON đã được parse sẵn
  }, []);

  useEffect(() => {
    setTimeout(loadCart, 0);
  }, [loadCart]);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="/checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="/orders"
        element={<OrderPage cart={cart} loadCart={loadCart} />}
      />
    </Routes>
  );
}

export default App;
