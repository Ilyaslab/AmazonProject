import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const HomePage = lazy(()=>import("./Pages/HomePage.jsx"));
  const ChecoutPage = lazy(()=>import("./Pages/ChecoutPage.jsx"));
  const Orders = lazy(()=>import("./Pages/Orders.jsx"));
  const Tracking = lazy(()=>import("./Pages/tracking.jsx"));
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<ChecoutPage />} />
        <Route path="order" element={<Orders />} />
        <Route path="tracking" element={<Tracking />} />

      </Routes>
      </Suspense>
    </>
  );
}

export default App;
