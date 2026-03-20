import React from "react";

const TELEGRAM_LINK = "https://t.me/DontCopyMaster";
const USDT_WALLET = "0xbb2a9a6daf3be07e7dbf211e26c8295121767543";

const eaProducts = [
  {
    slug: "gold-digger-scalping-ea",
    title: "Gold Digger Scalping EA",
    price: "$149",
    description:
      "A fast-paced XAUUSD scalping expert advisor built to capture quick entries during active market sessions. Ideal for traders who want frequent setups and aggressive opportunity capture.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=900&q=80",
    bestFor: "Best for small to medium accounts",
    tag: "Fast entry strategy",
  },
  {
    slug: "all-buy-pending-ea",
    title: "All Buy Pending EA",
    price: "$249",
    description:
      "A trend-focused EA that layers buy pending entries in bullish conditions. Built for traders who want structured entries, smoother positioning, and strong upside potential in trending markets.",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80",
    bestFor: "Best for trend-following traders",
    tag: "Best seller",
    featured: true,
  },
  {
    slug: "pacmac-ea",
    title: "PACMAC EA",
    price: "$399",
    description:
      "A premium multi-strategy EA combining momentum logic, trend filtering, and automated risk control. Designed for traders who want a more advanced and balanced trading system.",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=900&q=80",
    bestFor: "Best for medium to large accounts",
    tag: "Advanced strategy",
  },
  {
    slug: "break-out-ea",
    title: "Break Out EA",
    price: "$299",
    description:
      "A breakout-driven EA that targets explosive moves when price breaks major levels. Great for traders looking to catch momentum bursts during high-volatility sessions.",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=900&q=80",
    bestFor: "Best for volatility traders",
    tag: "Momentum breakout",
  },
];

export default function BuyForexEA() {
  const copyWallet = () => {
    navigator.clipboard.writeText(USDT_WALLET);
    alert("USDT wallet copied!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #071120 0%, #0b1730 55%, #09101f 100%)",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
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
          <div style={{ fontSize: 20, fontWeight: 700, color: "#38bdf8" }}>Autom8 Trading</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/" style={navLink}>Home</a>
            <a href="/buy-forex-ea" style={navLink}>EA Products</a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" style={navLink}>
              Telegram
            </a>
          </div>
        </div>

        <div style={heroCard}>
          <div style={pill}>Forex EA Checkout</div>
          <h1 style={{ margin: "10px 0", fontSize: "clamp(32px, 6vw, 42px)" }}>Buy Forex EA</h1>
          <p style={{ margin: 0, color: "#cbd5e1", fontSize: 18, maxWidth: 780 }}>
            Choose your EA package, pay via USDT BEP20, then send your proof of payment to Telegram for activation and setup support.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            alignItems: "stretch",
            marginTop: 28,
            marginBottom: 30,
          }}
        >
          {eaProducts.map((product) => (
            <div
              key={product.slug}
              style={{
                ...productCard,
                ...(product.featured
                  ? {
                      border: "1px solid rgba(56,189,248,0.5)",
                      background: "linear-gradient(180deg, rgba(56,189,248,0.16), rgba(15,23,42,0.94))",
                    }
                  : {}),
              }}
            >
              {product.featured && <div style={badge}>BEST SELLER</div>}

              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
              />

              <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ color: "#7dd3fc", fontSize: 13, marginBottom: 8 }}>{product.tag}</div>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>{product.title}</h3>
                <div style={{ fontSize: 30, fontWeight: 800, marginBottom: 10 }}>{product.price}</div>
                <p style={{ color: "#cbd5e1", minHeight: 96, flex: 1 }}>{product.description}</p>
                <div style={{ color: "#7dd3fc", fontWeight: 700, marginBottom: 16 }}>{product.bestFor}</div>
                <a href={`/buy-forex-ea/${product.slug}`} style={{ marginTop: "auto" }}>
                  <button style={product.featured ? primaryButton : blueButton}>Buy Now</button>
                </a>
              </div>
            </div>
          ))}
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
              Send payment to the wallet below. After payment, message us on Telegram with your selected EA and payment proof.
            </p>
            <div style={walletBox}>{USDT_WALLET}</div>
            <button onClick={copyWallet} style={primaryButton}>Copy Wallet Address</button>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>After Payment</h2>
            <ol style={{ color: "#cbd5e1", lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Select your preferred EA package.</li>
              <li>Send USDT BEP20 to the wallet address.</li>
              <li>Send your proof of payment on Telegram.</li>
              <li>Receive your EA setup and activation support.</li>
            </ol>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
              <button style={blueButton}>Contact @DontCopyMaster</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const heroCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 24,
  boxShadow: "0 18px 60px rgba(0,0,0,0.24)",
};

const glassCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 24,
  boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
};

const productCard = {
  position: "relative",
  background: "rgba(15, 23, 42, 0.78)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 14px 34px rgba(0,0,0,0.22)",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const walletBox = {
  padding: 14,
  borderRadius: 12,
  background: "rgba(15, 23, 42, 0.7)",
  border: "1px solid rgba(148,163,184,0.18)",
  wordBreak: "break-all",
  marginBottom: 14,
};

const badge = {
  position: "absolute",
  top: 14,
  right: 14,
  padding: "6px 10px",
  borderRadius: 999,
  background: "#38bdf8",
  color: "#081226",
  fontSize: 12,
  fontWeight: 700,
};

const pill = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(56, 189, 248, 0.12)",
  color: "#7dd3fc",
  fontSize: 13,
};

const navLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
};

const blueButton = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  border: "none",
  background: "#38bdf8",
  color: "#081226",
  fontWeight: 700,
  cursor: "pointer",
};

const primaryButton = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
};
