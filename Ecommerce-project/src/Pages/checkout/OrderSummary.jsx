import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import { useState } from "react";
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";
export function OrderSummary({ deliveryOptions, cart, getAppData}) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [updateQuantity,setUpdateQuantity] = useState({})
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const quantity =
          updateQuantity[cartItem.productId] ?? cartItem.quantity;
          const currentDeliveryOptionId =
            selectedOptions[cartItem.productId] || cartItem.deliveryOptionId;
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === currentDeliveryOptionId;
            },
          );

          const deleteCartItem = async () => {
            await axios.delete(`api/cart-items/${cartItem.productId}`);
            getAppData();
          };

          const upDateCartItem = async () => {
            await axios.put(`api/cart-items/${cartItem.productId}`, {
              quantity:  updateQuantity[cartItem.productId] ?? cartItem.quantity,
            });
            getAppData();
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
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
                      Quantity:{" "}
                      <span className="quantity-label">
                     <select value={quantity}
                            onChange={(e) => {
                        setUpdateQuantity({
                          ...updateQuantity,
                          [cartItem.productId]: Number(e.target.value),
                        });
                      }}
                                            >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                        
                      </span>
                    </span>
                    <span
                      className="update-quantity-link link-primary"
                      onClick={upDateCartItem}
                    >
                      
                     
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

                <DeliveryOptions
                  setSelectedOptions={setSelectedOptions}
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  getAppData={getAppData}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
