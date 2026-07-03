import "./checkout-header.css";
import "./CheckoutPage.css";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function OrderSummary({ cart, loadCart }) {
  return (
    <>
      <div className="order-summary">
        {cart.map((cartItem) => {
          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date: Wednesday, June 15
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>

                  <div className="delivery-option">
                    <input
                      type="radio"
                      className="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div className="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div className="delivery-option-price">FREE Shipping</div>
                    </div>
                  </div>
                  <div className="delivery-option">
                    <input
                      type="radio"
                      defaultChecked
                      className="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div className="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div className="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div className="delivery-option">
                    <input
                      type="radio"
                      className="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div className="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div className="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
