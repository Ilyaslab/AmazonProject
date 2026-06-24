import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const HomePage = lazy(()=>import("./Pages/HomePage.jsx"));
  const ChecoutPage = lazy(()=>import("./Pages/ChecoutPage.jsx"));
  const Orders = lazy(()=>import("./Pages/Orders.jsx"));
  const Tracking = lazy(()=>import("./Pages/tracking.jsx"));
  const [cart,setCart]= useState([])
    useEffect(()=>{
       axios.get('/api/cart-items')
     .then((response)=>{
        setCart(response.data)
     })
    },[])
  return (
   
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<HomePage  cart={cart}/>} />
        <Route path="checkout" element={<ChecoutPage   cart={cart}/>} />
        <Route path="order" element={<Orders />} />
        <Route path="tracking" element={<Tracking />} />

      </Routes>
      </Suspense>
    </>
  );
}

export default App;
