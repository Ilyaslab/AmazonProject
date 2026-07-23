
import { useEffect, useState } from "react";
import "./checkout-header.css";
import "./CheckoutPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { OrderSummary } from "./OrderSummary";
import { PaymmentSummary } from "./PaymmentSummary";
function ChecoutPage({ cart,getAppData }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const[paymentSummary,setPaymentSummary]=useState(null)
  useEffect(() => {
    const getCheckoutPage = async ()=>{
      const response = await axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      setDeliveryOptions(response.data);

      const res = await  axios 
      .get('/api/payment-summary')
      setPaymentSummary(res.data)
    }
    getCheckoutPage()
      
  }, [cart]);

  return (
    <>
      <title>Checout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
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
         <OrderSummary deliveryOptions={deliveryOptions} cart={cart} getAppData={getAppData}
          />
            {paymentSummary && 
            (
              <>
              <PaymmentSummary paymentSummary={paymentSummary}  getAppData={getAppData} />
              </>
            )
            }
          
        </div>
      </div>
    </>
  );
}

export default ChecoutPage;
