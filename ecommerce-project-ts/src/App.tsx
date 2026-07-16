import { HomePage } from "./pages/Home/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import type { CartItem, LoadCart } from "./types";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = useCallback<LoadCart>(async () => {
    const res = await axios.get<CartItem[]>("/api/cart-items?expand=product");
    setCart(res.data);
  }, []);

  useEffect(() => {
    void loadCart();
  }, [loadCart]);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="/checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route path="/orders" element={<OrderPage cart={cart} />} />
    </Routes>
  );
}

export default App;
