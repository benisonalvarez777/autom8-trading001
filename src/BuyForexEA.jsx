<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const TELEGRAM_LINK = "https://t.me/DontCopyMaster";
const WHATSAPP_NUMBER = "639455023449";
const USDT_WALLET = "0xbb2a9a6daf3be07e7dbf211e26c8295121767543";

const eaProducts = [
  {
    slug: "gold-digger-scalping-ea",
    title: "Autom8 Gold Scalper (AGS)",
    price: "$499",
    description:
      "Autom8 Gold Scalper (AGS) is a fast-paced XAUUSD scalping EA designed to capture quick entries during active market sessions. Built for traders who want consistent opportunities with automated execution.",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=oe80YVy0CSg",
    bestFor: "Best for small to medium accounts",
    tag: "AI Gold Scalper",
    stock: "Only 7 copies left",
  },
  {
    slug: "all-buy-pending-ea",
    title: "Autom8 Gold Core",
    price: "$499",
    description:
      "A dual-strategy XAUUSD EA that combines retracement entries and breakout momentum trading for continuous opportunities in different market conditions.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=900&q=80",
    bestFor: "Best for aggressive and balanced traders",
    tag: "Best seller",
    featured: true,
    stock: "Only 4 copies left",
  },
  {
    slug: "pacmac-ea",
    title: "Autom8 Sniper Pro",
    price: "$299",
    description:
      "One trade cycle per day. No overtrading. Clean execution logic. Drawdown visible in dashboard. Fully automated risk handling. Designed for FTMO and disciplined trading accounts.",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=80",
    bestFor: "Best for medium to large accounts",
    tag: "Advanced strategy",
    stock: "Only 3 copies left",
  },
  {
    slug: "break-out-ea",
    title: "Autom8 PACMAN",
    price: "$299",
    description:
      "Autom8 PACMAN is a smart breakout engine designed for consistent equity growth. It adapts to any pair, uses controlled execution, and compounds profits automatically without manual intervention.",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=900&q=80",
    bestFor: "Best for beginners, prop firm traders, and passive income seekers",
    tag: "Breakout Engine",
    stock: "Only 5 copies left",
  },
];

function getTimeLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const diff = end.getTime() - now.getTime();
  if (diff <= 0) return "00:00:00";

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  return `${hours}:${minutes}:${seconds}`;
}

export default function BuyForexEA() {
  const [popup, setPopup] = useState(null);
  const [countdown, setCountdown] = useState(getTimeLeft());
  const [viewers, setViewers] = useState(12);
  const [recentTime, setRecentTime] = useState("2 mins ago");

  const testimonials = [
    "Clean trades. No stress.",
    "Very easy setup. Works well.",
    "Good for beginners and busy traders.",
    "Consistent execution. Worth it.",
  ];

  const recentTimes = ["Just now", "1 min ago", "2 mins ago", "3 mins ago", "5 mins ago"];

  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi, I want to know more about your EA products."
      )}`,
    []
  );

  const getWhatsappProductLink = (product) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi, I want to buy ${product.title} (${product.price})`
    )}`;

  useEffect(() => {
    const names = ["John", "Mike", "Alex", "David", "Chris"];
    const products = eaProducts.map((item) => item.title);

    const popupInterval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      const time = recentTimes[Math.floor(Math.random() * recentTimes.length)];

      setRecentTime(time);
      setPopup(`🔥 ${name} just purchased ${product}`);

      setTimeout(() => {
        setPopup(null);
      }, 3000);
    }, 6000);

    const countdownInterval = setInterval(() => {
      setCountdown(getTimeLeft());
    }, 1000);

    const viewerInterval = setInterval(() => {
      setViewers((v) => {
        let next = v + (Math.random() > 0.5 ? 1 : -1);
        if (next < 8) next = 8;
        if (next > 25) next = 25;
        return next;
      });
    }, 4000);

    return () => {
      clearInterval(popupInterval);
      clearInterval(countdownInterval);
      clearInterval(viewerInterval);
    };
  }, []);

  const copyWallet = () => {
    navigator.clipboard.writeText(USDT_WALLET);
    alert("USDT wallet copied!");
  };

  return (
    <div style={page}>
      <style>{`
        @keyframes pulseStock {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(248, 113, 113, 0.35); }
          70% { transform: scale(1.03); box-shadow: 0 0 0 10px rgba(248, 113, 113, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(248, 113, 113, 0); }
        }

        @keyframes stickyGlow {
          0% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
          50% { box-shadow: 0 0 24px rgba(37, 211, 102, 0.32); }
          100% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
        }

        @keyframes cardLift {
          0% { transform: translateY(0); }
          100% { transform: translateY(-6px); }
        }

        @media (max-width: 768px) {
          .buy-forex-sticky-bar {
            padding: 10px 12px !important;
          }

          .buy-forex-sticky-inner {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          .buy-forex-sticky-button {
            width: 100% !important;
          }

          .buy-forex-sticky-pill {
            justify-content: center !important;
            text-align: center !important;
          }

          .buy-forex-popup {
            bottom: 78px !important;
            left: 12px !important;
            right: 12px !important;
            font-size: 13px !important;
          }

          .buy-forex-floating {
            right: 12px !important;
            bottom: 146px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={topNav}>
          <div style={logo}>Autom8 Trading</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/" style={navLink}>
              Home
            </Link>
            <Link to="/buy-forex-ea" style={navLink}>
              EA Products
            </Link>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              style={navLink}
            >
              Telegram
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={navLink}
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div style={heroCard}>
          <div style={pill}>Forex EA Products</div>
          <h1 style={heroTitle}>
            Trade Smarter with
            <span style={{ color: "#38bdf8" }}> Proven Forex EAs</span>
          </h1>
          <p style={heroText}>
            Browse our EA collection. Click View & Buy to open the full product
            page with backtest video, product details, payment instructions, and
            contact options.
          </p>

          <div style={countdownStyle}>⏳ Offer ends today in: {countdown}</div>
          <div style={viewerCountStyle}>👥 {viewers} people viewing now</div>
          <div style={lastPurchaseStyle}>🕒 Last purchase: {recentTime}</div>

          <div style={trustRow}>
            <div style={trustBadge}>✔ Instant Delivery</div>
            <div style={trustBadge}>✔ Beginner Friendly</div>
            <div style={trustBadge}>✔ Automated Strategy</div>
            <div style={trustBadge}>✔ Support Included</div>
          </div>
        </div>

        <div style={productsGrid}>
          {eaProducts.map((product) => (
            <div
              key={product.slug}
              style={{
                ...productCard,
                ...(product.featured
                  ? {
                      border: "1px solid rgba(56,189,248,0.5)",
                      background:
                        "linear-gradient(180deg, rgba(56,189,248,0.16), rgba(15,23,42,0.94))",
                    }
                  : {}),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {product.featured && <div style={badge}>BEST SELLER</div>}

              <img src={product.image} alt={product.title} style={imageStyle} />

              <div style={cardBody}>
                <div style={tagStyle}>{product.tag}</div>

                <h3 style={titleStyle}>{product.title}</h3>

                <div style={priceRow}>
                  <span style={priceStyle}>{product.price}</span>
                  <span style={priceSmall}>one-time</span>
                </div>

                <div style={urgency}>Limited offer – price may increase</div>
                <div style={stockTextPulse}>{product.stock}</div>

                <p style={descStyle}>{product.description}</p>

                <div style={bestForStyle}>{product.bestFor}</div>

                <div style={testimonialMini}>
                  ⭐{" "}
                  {
                    testimonials[
                      Math.floor(Math.random() * testimonials.length)
                    ]
                  }
                </div>

                <div style={cardButtonsWrap}>
                  <Link
                    to={`/buy-forex-ea/${product.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button style={viewBuyButton}>View & Buy</button>
                  </Link>

                  <a
                    href={getWhatsappProductLink(product)}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button style={whatsappQuick}>
                      💬 Quick Buy (WhatsApp)
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={infoGrid}>
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Pay via USDT (BEP20)</h2>
            <p style={textStyle}>
              Send payment to the wallet below. After payment, message us on
              Telegram or WhatsApp with your selected EA and proof of payment.
            </p>
            <p style={greenStyle}>
              ✔ Fast response • ✔ Trusted seller • ✔ Support included
            </p>
            <div style={walletBox}>{USDT_WALLET}</div>
            <button onClick={copyWallet} style={primaryButton}>
              Copy Wallet Address
            </button>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>After Payment</h2>
            <ol style={listStyle}>
              <li>Select your preferred EA package.</li>
              <li>Send USDT BEP20 to the wallet address.</li>
              <li>Send your proof of payment on Telegram or WhatsApp.</li>
              <li>Receive your EA setup and activation support.</li>
            </ol>

            <div style={contactButtons}>
              <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                <button style={blueButton}>Telegram</button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <button style={whatsappButton}>WhatsApp</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        className="buy-forex-floating"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={floatingWhatsappWrap}
      >
        <div style={floatingWhatsappButton}>
          <div style={{ fontSize: 22 }}>💬</div>
          <div
            style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}
          >
            <span style={{ fontSize: 12, opacity: 0.9 }}>Need help?</span>
            <span style={{ fontSize: 14, fontWeight: 800 }}>WhatsApp</span>
          </div>
        </div>
      </a>

      <div className="buy-forex-sticky-bar" style={stickyBar}>
        <div className="buy-forex-sticky-inner" style={stickyInner}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              className="buy-forex-sticky-button"
              style={stickyWhatsappButton}
            >
              💬 Buy via WhatsApp
            </button>
          </a>

          <div
            className="buy-forex-sticky-pill"
            style={stickyLimitedWrap}
          >
            🔥 Limited Slots
          </div>
        </div>
      </div>

      {popup && (
        <div className="buy-forex-popup" style={popupStyle}>
          {popup}
        </div>
      )}
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "linear-gradient(180deg, #071120 0%, #0b1730 55%, #09101f 100%)",
  color: "#f8fafc",
  fontFamily: "Arial, sans-serif",
  padding: 24,
  paddingBottom: 110,
};

const topNav = {
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
};

const logo = {
  fontSize: 20,
  fontWeight: 700,
  color: "#38bdf8",
};

const heroCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: "20px 16px",
  boxShadow: "0 18px 60px rgba(0,0,0,0.24)",
};

const pill = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(56, 189, 248, 0.12)",
  color: "#7dd3fc",
  fontSize: 13,
  fontWeight: 700,
};

const heroTitle = {
  margin: "10px 0",
  fontSize: "clamp(32px, 6vw, 42px)",
  lineHeight: 1.1,
};

const heroText = {
  margin: 0,
  color: "#cbd5e1",
  fontSize: "clamp(14px, 4vw, 18px)",
  maxWidth: 820,
};

const countdownStyle = {
  color: "#facc15",
  fontWeight: 700,
  marginTop: 14,
};

const viewerCountStyle = {
  color: "#22c55e",
  fontWeight: 700,
  marginTop: 8,
};

const lastPurchaseStyle = {
  color: "#94a3b8",
  fontWeight: 700,
  marginTop: 8,
  fontSize: 14,
};

const trustRow = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
  marginTop: 18,
};

const trustBadge = {
  padding: "6px 12px",
  borderRadius: 999,
  border: "1px solid rgba(56,189,248,0.3)",
  background: "rgba(56,189,248,0.08)",
  color: "#7dd3fc",
  fontSize: 13,
};

const productsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
  alignItems: "stretch",
  marginTop: 20,
  marginBottom: 24,
};

const productCard = {
  position: "relative",
  background: "rgba(15, 23, 42, 0.78)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 14px 34px rgba(0,0,0,0.22)",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: "0.25s",
};

const imageStyle = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  display: "block",
};

const cardBody = {
  padding: 16,
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const tagStyle = {
  color: "#7dd3fc",
  fontSize: 13,
  marginBottom: 8,
};

const titleStyle = {
  marginTop: 0,
  marginBottom: 8,
  color: "#f8fafc",
};

const priceRow = {
  marginBottom: 8,
};

const priceStyle = {
  fontSize: 30,
  fontWeight: 800,
};

const priceSmall = {
  color: "#94a3b8",
  marginLeft: 6,
};

const urgency = {
  color: "#facc15",
  fontSize: 12,
  marginBottom: 6,
};

const stockTextPulse = {
  color: "#f87171",
  fontSize: 12,
  marginBottom: 10,
  fontWeight: 700,
  display: "inline-block",
  animation: "pulseStock 1.8s infinite",
  padding: "4px 10px",
  borderRadius: 999,
  background: "rgba(248, 113, 113, 0.08)",
  border: "1px solid rgba(248, 113, 113, 0.18)",
};

const descStyle = {
  color: "#cbd5e1",
  minHeight: 0,
  flex: 1,
  fontSize: 13,
};

const bestForStyle = {
  color: "#7dd3fc",
  fontWeight: 700,
  marginBottom: 12,
};

const testimonialMini = {
  fontSize: 12,
  color: "#fde68a",
  marginBottom: 10,
};

const cardButtonsWrap = {
  display: "grid",
  gap: 8,
  marginTop: "auto",
};

const viewBuyButton = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 10,
  border: "none",
  background: "#38bdf8",
  color: "#081226",
  fontWeight: 700,
  cursor: "pointer",
};

const whatsappQuick = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 10,
  border: "none",
  background: "#25D366",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
};

const glassCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 24,
  boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 20,
};

const textStyle = {
  color: "#cbd5e1",
};

const greenStyle = {
  color: "#22c55e",
  fontWeight: 700,
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
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
};

const listStyle = {
  color: "#cbd5e1",
  lineHeight: 1.8,
  paddingLeft: 20,
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

const whatsappButton = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  border: "none",
  background: "#25D366",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
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
  zIndex: 2,
};

const popupStyle = {
  position: "fixed",
  bottom: 78,
  left: 14,
  right: 14,
  background: "rgba(2, 6, 23, 0.95)",
  color: "#f8fafc",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.18)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.28)",
  fontSize: 13,
  zIndex: 999,
};

const contactButtons = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 10,
};

const floatingWhatsappWrap = {
  position: "fixed",
  right: 14,
  bottom: 146,
  textDecoration: "none",
  zIndex: 998,
};

const floatingWhatsappButton = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "#25D366",
  color: "white",
  padding: "12px 16px",
  borderRadius: 999,
  boxShadow: "0 16px 40px rgba(37,211,102,0.28)",
  fontWeight: 700,
};

const stickyBar = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(2, 6, 23, 0.96)",
  borderTop: "1px solid rgba(148,163,184,0.16)",
  backdropFilter: "blur(8px)",
  padding: "12px 14px",
  zIndex: 997,
};

const stickyInner = {
  maxWidth: 1240,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 12,
  alignItems: "center",
};

const stickyWhatsappButton = {
  width: "100%",
  border: "none",
  borderRadius: 12,
  padding: "14px 18px",
  background: "#25D366",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
  animation: "stickyGlow 2.2s infinite",
};

const stickyLimitedWrap = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 14px",
  borderRadius: 12,
  fontWeight: 800,
  color: "#081226",
  background: "linear-gradient(135deg, #facc15, #f97316)",
  whiteSpace: "nowrap",
};

const navLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
};
=======
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
>>>>>>> 3d9b67b2b1c881bdd5ec2794f0054e8f9429e419
