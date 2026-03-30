import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ApplicationForm from "./ApplicationForm.jsx";
import BuyForexEA from "./BuyForexEA.jsx";
import BuyEAProduct from "./BuyEAProduct.jsx";
import Mentoring from "./Mentoring.jsx";
import CopyTrading from "./CopyTrading.jsx";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#08111f",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ marginBottom: "10px" }}>404</h1>
        <p style={{ marginBottom: "20px", color: "#cbd5e1" }}>Page not found.</p>
        <a
          href="/"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/buy-forex-ea" element={<BuyForexEA />} />
        <Route path="/buy-forex-ea/:productSlug" element={<BuyEAProduct />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/copy-trading" element={<CopyTrading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

