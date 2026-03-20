import React from "react";
import { useParams, Link } from "react-router-dom";

const TELEGRAM_USERNAME = "DontCopyMaster";
const WALLET = "0xbb2a9a6daf3be07e7dbf211e26c8295121767543";

const eaProducts = {
  "gold-digger-scalping-ea": {
    title: "Gold Digger Scalping EA",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=900&q=80",
    desc: "A fast-paced XAUUSD scalping EA designed for active market sessions and frequent entry opportunities.",
    bestFor: "Best for small to medium accounts",
    features: [
      "Fast XAUUSD scalping logic",
      "Optimized for active sessions",
      "Quick-entry model",
      "Beginner-friendly setup",
    ],
  },
  "all-buy-pending-ea": {
    title: "All Buy Pending EA",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80",
    desc: "A trend-following EA that uses buy pending entries for smoother position building in bullish market conditions.",
    bestFor: "Best for trend-following traders",
    features: [
      "Buy pending strategy",
      "Trend-following logic",
      "Structured entries",
      "Best seller setup",
    ],
  },
  "pacmac-ea": {
    title: "PACMAC EA",
    price: "$399",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=900&q=80",
    desc: "An advanced multi-strategy EA built for traders who want a more balanced and powerful automation model.",
    bestFor: "Best for medium to large accounts",
    features: [
      "Multi-strategy execution",
      "Better control logic",
      "Advanced setup",
      "Premium support feel",
    ],
  },
  "break-out-ea": {
    title: "Break Out EA",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=900&q=80",
    desc: "A breakout-focused EA that aims to capture strong momentum when price breaks key levels.",
    bestFor: "Best for volatility traders",
    features: [
      "Breakout detection",
      "Momentum entry style",
      "Volatility focused",
      "Simple execution flow",
    ],
  },
};

export default function BuyEAProduct() {
  const { productSlug } = useParams();
  const product = eaProducts[productSlug];

  if (!product) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#071120",
          color: "white",
          padding: 40,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>Product not found</h1>
        <Link to="/buy-forex-ea" style={{ color: "#38bdf8" }}>
          Back to EA Products
        </Link>
      </div>
    );
  }

  const copyWallet = () => {
    navigator.clipboard.writeText(WALLET);
    alert("Wallet copied!");
  };

  const message = `Hi, I want to buy ${product.title}`;
  const telegramLink = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #071120 0%, #0b1730 55%, #09101f 100%)",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
            padding: "12px 16px",
            borderRadius: 14,
            background: "rgba(15, 23, 42, 0.72)",
            border: "1px solid rgba(148,163,184,0.14)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#38bdf8" }}>
            Autom8 Trading
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/" style={navLink}>
              Home
            </a>
            <a href="/buy-forex-ea" style={navLink}>
              EA Products
            </a>
            <a href={telegramLink} target="_blank" rel="noreferrer" style={navLink}>
              Telegram
            </a>
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <Link
            to="/buy-forex-ea"
            style={{ color: "#7dd3fc", textDecoration: "none" }}
          >
            ← Back to EA Products
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <div style={glassCard}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                borderRadius: 14,
              }}
            />
          </div>

          <div style={glassCard}>
            <div style={pill}>Selected EA Product</div>
            <h1
              style={{
                margin: "12px 0 8px 0",
                fontSize: "clamp(30px, 5vw, 40px)",
              }}
            >
              {product.title}
            </h1>
            <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 12 }}>
              {product.price}
            </div>
            <p style={{ color: "#cbd5e1", fontSize: 17, lineHeight: 1.7 }}>
              {product.desc}
            </p>
            <div style={{ color: "#7dd3fc", fontWeight: 700, marginTop: 14 }}>
              {product.bestFor}
            </div>

            <h3 style={{ marginTop: 22 }}>Included Features</h3>
            <div style={{ display: "grid", gap: 10 }}>
              {product.features.map((feature) => (
                <div key={feature} style={{ color: "#cbd5e1" }}>
                  ✔ {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Pay via USDT (BEP20)</h2>
            <p style={{ color: "#cbd5e1" }}>
              Send payment for <strong>{product.title}</strong> to the wallet
              below.
            </p>
            <div style={walletBox}>{WALLET}</div>
            <button onClick={copyWallet} style={primaryButton}>
              Copy Wallet Address
            </button>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>After Payment</h2>
            <ol style={{ color: "#cbd5e1", lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Pay the exact amount for {product.title}.</li>
              <li>Take a screenshot of your payment proof.</li>
              <li>Click the Telegram button below.</li>
              <li>Your message opens with the selected EA already filled in.</li>
            </ol>

            <a href={telegramLink} target="_blank" rel="noreferrer">
              <button style={blueButton}>Contact Telegram</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const glassCard = {
  background: "rgba(15, 23, 42, 0.78)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
};

const pill = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(56, 189, 248, 0.12)",
  color: "#7dd3fc",
  fontSize: 13,
};

const walletBox = {
  padding: 14,
  borderRadius: 12,
  background: "rgba(15, 23, 42, 0.7)",
  border: "1px solid rgba(148,163,184,0.18)",
  wordBreak: "break-all",
  marginBottom: 14,
};

const primaryButton = {
  padding: "12px 18px",
  borderRadius: 10,
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
};

const blueButton = {
  padding: "12px 18px",
  borderRadius: 10,
  border: "none",
  background: "#38bdf8",
  color: "#081226",
  fontWeight: 700,
  cursor: "pointer",
};

const navLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
};