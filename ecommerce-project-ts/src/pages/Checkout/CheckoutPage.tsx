import "./checkout-header.css";
import "./CheckoutPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import type { CartItem, LoadCart, PaymentSummaryData } from "../../types";

interface CheckoutPageProps {
  cart: CartItem[];
  loadCart: LoadCart;
}

export function CheckoutPage({ cart, loadCart }: CheckoutPageProps) {
  const [paymentSummary, setPaymentSummary] = useState<PaymentSummaryData | null>(null);

  useEffect(() => {
    async function fetchPaymentData() {
      try {
        const res = await axios.get<PaymentSummaryData>("/api/payment-summary");
        setPaymentSummary(res.data);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    }

    void fetchPaymentData();
  }, []);

  return (
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} loadCart={loadCart} />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}