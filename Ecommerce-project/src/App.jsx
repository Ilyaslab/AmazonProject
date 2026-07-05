import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const HomePage = lazy(() => import("./Pages/homme/HomePage.jsx"));
  const ChecoutPage = lazy(() => import("./Pages/checkout/CheckoutPage.jsx"));
  const Orders = lazy(() => import("./Pages/Orders.jsx"));
  const Tracking = lazy(() => import("./Pages/tracking.jsx"));
  const [cart, setCart] = useState([]);
  const getAppData = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    getAppData();
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage cart={cart}  getAppData={getAppData}/>} />
          <Route path="checkout" element={<ChecoutPage cart={cart} />} />
          <Route path="order" element={<Orders cart={cart} />} />
          <Route path="tracking" element={<Tracking />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
