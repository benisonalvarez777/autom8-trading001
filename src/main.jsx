import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import BuyForexEA from "./BuyForexEA.jsx";
import BuyEAProduct from "./BuyEAProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/buy-forex-ea" element={<BuyForexEA />} />
        <Route path="/buy-forex-ea/:productSlug" element={<BuyEAProduct />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);