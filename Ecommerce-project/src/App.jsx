import ChecoutPage from "./Pages/ChecoutPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<ChecoutPage />} />
      </Routes>
    </>
  );
}

export default App;
