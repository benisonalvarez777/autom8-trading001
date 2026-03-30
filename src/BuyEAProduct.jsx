import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TELEGRAM_USERNAME = "DontCopyMaster";
const WHATSAPP_NUMBER = "639455023449";
const WALLET = "0xbb2a9a6daf3be07e7dbf211e26c8295121767543";

const eaProducts = {
  "gold-digger-scalping-ea": {
    title: "Autom8 Gold Scalper (AGS)",
    price: "Private Access Only",
    accessLabel: "Fast-entry gold release",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=eqrNqrkyZF8",
    proofImages: ["/images/ags-1.png", "/images/ags-2.png"],
    bestFor: "Best for small to medium accounts",
    features: [
      "Fast XAUUSD scalping logic",
      "Quick-entry structure",
      "Simple automated execution",
      "Beginner-friendly setup",
    ],
    proof:
      "Autom8 Gold Scalper (AGS) is designed for traders who want faster opportunities on gold with a more automated execution style. The backtest video and screenshots help buyers understand how the strategy behaves before purchasing.",
    tag: "AI Gold Scalper",
    stock: "Only 7 copies left",
  },
  "all-buy-pending-ea": {
    title: "Autom8 Gold Core",
    price: "Exclusive Access",
    accessLabel: "Best seller release",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=Dwgj56Y4Mwg",
    proofImages: ["/images/gbp-1.png", "/images/gbp-2.png"],
    bestFor: "Best for aggressive and balanced traders",
    features: [
      "Buy Limit Grid for retracement entries",
      "Buy Stop Breakouts for momentum capture",
      "ATR-based smart entry spacing",
      "Dynamic grid system with widening distance",
      "Global Take Profit (equity-based)",
      "Break-even protection",
      "Trailing stop for profit locking",
      "Spread filter protection",
      "Auto or manual restart mode",
      "Auto refill of pending orders",
    ],
    proof:
      "Autom8 Gold Core is built for consistency, smart entries, and controlled risk. It combines a Buy Limit grid to capture retracements at better prices with Buy Stop breakout orders to capture strong upward momentum. This dual-strategy setup creates continuous opportunities across different market conditions while managing risk through smart spacing and automated profit protection.",
    tag: "Best seller",
    stock: "Only 4 copies left",
    featured: true,
  },
  "pacmac-ea": {
    title: "Autom8 Sniper Pro",
    price: "Application Priority",
    accessLabel: "Prop-firm focused setup",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=hXZ4OSp81eU",
    proofImages: ["/images/sniper-1.png", "/images/sniper-2.png"],
    bestFor: "Best for disciplined traders / prop firm accounts",
    features: [
      "Trades GBPJPY H1",
      "Uses first 4 candle breakout",
      "Wick-based precision entries",
      "One trade per day",
      "Prop firm ready",
    ],
    proof:
      "👉One trade cycle per day 👉No overtrading 👉Clean execution logic 👉Drawdown visible in dashboard 👉Fully automated risk handling 👉Designed for: FTMO / prop firm challenges disciplined trading accounts",
    tag: "Sniper Strategy",
    stock: "Only 3 copies left",
  },
  "break-out-ea": {
    title: "Autom8 PACMAN",
    price: "Limited Slots Available",
    accessLabel: "Breakout engine release",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=sI9NQleMtCo",
    proofImages: ["/images/pacman-1.png", "/images/pacman-2.png"],
    bestFor: "Smart Breakout Engine for Consistent Equity Growth",
    features: [
      "Auto Symbol Detection (Gold, Forex, Indices)",
      "One-Set Smart Execution (no overtrading)",
      "Hidden Take Profit (broker can't track strategy)",
      "Equity Target System (auto profit lock)",
      "Auto Restart for compounding",
      "Anti-Duplicate Engine (no double entries)",
      "Smart Buy Stop & Sell Stop entries",
      "Professional dashboard with real-time control",
    ],
    proof:
      "Autom8 PACMAN is a fully automated breakout EA built for controlled and consistent equity growth. It places Buy Stop and Sell Stop orders from a fixed anchor point to capture momentum moves without chasing price. The system uses a smart cycle logic with one active setup at a time, combined with hidden take profit and equity targeting to protect profits and maintain discipline. Designed for stability, scalability, and prop firm compatibility.",
    tag: "Breakout Engine",
    stock: "Only 5 copies left",
  },
};

export default function BuyEAProduct() {
  const { productSlug } = useParams();
  const product = eaProducts[productSlug];
  const [popup, setPopup] = useState(null);

  const testimonials = [
    "“Easy to understand and setup. The buying process was simple.”",
    "“Looks professional and feels more structured than manual trading.”",
    "“I like that the backtest video is there before buying.”",
    "“The support is responsive and the setup guidance is clear.”",
  ];

  useEffect(() => {
    if (!product) return;

    const names = ["John", "Mike", "Alex", "David", "Chris"];

    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      setPopup(`${name} just viewed ${product.title}`);

      setTimeout(() => {
        setPopup(null);
      }, 3000);
    }, 7000);

    return () => clearInterval(interval);
  }, [product]);

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
        <p>Slug received: {String(productSlug)}</p>
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

  const message = `Hi, I want more details about ${product.title}. Please send me the next step.`;
  const telegramLink = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
    message
  )}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  const embeddedVideo = product.video.includes("watch?v=")
    ? product.video.replace("watch?v=", "embed/")
    : product.video;

  return (
    <div style={page}>
      <style>{`
        @keyframes stickyGlow {
          0% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
          50% { box-shadow: 0 0 24px rgba(37, 211, 102, 0.32); }
          100% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
        }

        @media (max-width: 900px) {
          .buy-product-grid {
            grid-template-columns: 1fr !important;
          }

          .buy-product-proof-grid {
            grid-template-columns: 1fr !important;
          }

          .buy-product-sticky {
            position: static !important;
          }
        }

        @media (max-width: 768px) {
          .buy-product-floating {
            right: 12px !important;
            bottom: 146px !important;
          }

          .buy-product-popup {
            right: 12px !important;
            left: 12px !important;
            bottom: 78px !important;
            max-width: none !important;
          }

          .buy-product-sticky-bar {
            padding: 10px 12px !important;
          }

          .buy-product-sticky-inner {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          .buy-product-sticky-button {
            width: 100% !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={topNav}>
          <div style={logo}>Autom8 Trading</div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/" style={navLink}>
              Home
            </Link>
            <Link to="/buy-forex-ea" style={navLink}>
              EA Products
            </Link>
            <a href={telegramLink} target="_blank" rel="noreferrer" style={navLink}>
              Telegram
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={navLink}>
              WhatsApp
            </a>
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <Link
            to="/buy-forex-ea"
            style={{ color: "#7dd3fc", textDecoration: "none", fontWeight: 700 }}
          >
            ← Back to EA Products
          </Link>
        </div>

        <div style={offerBar}>
          🔥 Limited Offer — premium automation package with support included
        </div>

        <div className="buy-product-grid" style={heroGrid}>
          <div style={glassCard}>
            <div style={imageWrap}>
              <img src={product.image} alt={product.title} style={productImage} />
              <div style={floatingTag}>{product.tag}</div>

              {product.featured && (
                <div style={mostPopularBadge}>🔥 MOST POPULAR</div>
              )}
            </div>

            <div style={{ marginTop: 18 }}>
              <h3 style={{ marginTop: 0, marginBottom: 12 }}>
                📊 Real Backtest Preview
              </h3>
              <div style={videoWrap}>
                <iframe
                  width="100%"
                  height="280"
                  src={embeddedVideo}
                  title={product.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              {product.proofImages && product.proofImages.length > 0 && (
                <div style={proofSection}>
                  <div style={proofSectionTitle}>📸 Additional Backtest Results</div>

                  <div className="buy-product-proof-grid" style={proofImagesGrid}>
                    {product.proofImages.map((img, index) => (
                      <div key={index} style={proofImageCard}>
                        <img
                          src={img}
                          alt={`${product.title} backtest ${index + 1}`}
                          style={proofImage}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="buy-product-sticky" style={stickyRight}>
            <div style={glassCard}>
              <div style={pill}>Selected EA Product</div>

              <h1 style={mainTitle}>{product.title}</h1>

              <div style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 30, fontWeight: 900 }}>{product.price}</span>
              </div>

              <div style={accessLabel}>{product.accessLabel}</div>
              <div style={greenLine}>✔ Instant access after payment</div>
              <div style={countdown}>⏳ Priority access available today</div>
              <div style={stockText}>{product.stock}</div>

              <p style={mainDesc}>
                This EA is built for traders who want a more structured and disciplined
                way to trade the market. Instead of relying on emotion or manual
                execution, it follows predefined logic to identify opportunities and
                manage trades more efficiently.
              </p>

              <div style={{ color: "#7dd3fc", fontWeight: 700, marginTop: 14 }}>
                {product.bestFor}
              </div>

              <div style={trustGrid}>
                <div style={trustBox}>Instant delivery</div>
                <div style={trustBox}>Beginner friendly</div>
                <div style={trustBox}>Support included</div>
                <div style={trustBox}>Rule-based logic</div>
              </div>

              <div style={salesTrustBox}>
                <div style={salesTrustTitle}>Why buyers act fast</div>
                <div style={salesTrustList}>• {product.stock}</div>
                <div style={salesTrustList}>• Private access flow</div>
                <div style={salesTrustList}>
                  • Backtest video available before purchase
                </div>
                <div style={salesTrustList}>
                  • Direct Telegram and WhatsApp support
                </div>
              </div>

              <h3 style={sectionTitle}>Why Buy This EA</h3>
              <p style={bodyText}>{product.proof}</p>
              <p style={{ color: "#facc15", marginTop: 10, lineHeight: 1.7 }}>
                Many traders choose this EA to simplify decision-making and reduce
                emotional mistakes during live market conditions.
              </p>

              <h3 style={sectionTitle}>Included Features</h3>
              <div style={{ display: "grid", gap: 10 }}>
                {product.features.map((feature) => (
                  <div key={feature} style={featureRow}>
                    ✔ {feature}
                  </div>
                ))}
              </div>

              <h3 style={sectionTitle}>What You Get</h3>
              <div style={whatYouGetBox}>
                <div>✔ Full EA access</div>
                <div>✔ Instant delivery after payment</div>
                <div>✔ Easy setup guidance</div>
                <div>✔ Lifetime access</div>
                <div>✔ Support included</div>
              </div>

              <div style={ctaGroup}>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", flex: 1 }}
                >
                  <button style={buyButton}>Buy on Telegram</button>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", flex: 1 }}
                >
                  <button style={whatsappButton}>Buy on WhatsApp</button>
                </a>
              </div>

              <div style={{ marginTop: 12 }}>
                <button onClick={copyWallet} style={secondaryButton}>
                  Copy USDT Wallet
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={bottomGrid}>
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Manual Trading vs Using This EA</h2>

            <div style={compareGrid}>
              <div style={compareBoxBad}>
                <h4 style={compareTitle}>Manual Trading</h4>
                <div style={compareItem}>✖ Emotional entries</div>
                <div style={compareItem}>✖ Missed setups</div>
                <div style={compareItem}>✖ Time-consuming</div>
                <div style={compareItem}>✖ Inconsistent execution</div>
              </div>

              <div style={compareBoxGood}>
                <h4 style={compareTitle}>Using This EA</h4>
                <div style={compareItem}>✔ Rule-based execution</div>
                <div style={compareItem}>✔ Faster decision flow</div>
                <div style={compareItem}>✔ Better consistency</div>
                <div style={compareItem}>✔ More convenient workflow</div>
              </div>
            </div>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Trader Feedback</h2>

            {testimonials.map((item, index) => (
              <div key={index} style={testimonialCard}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={glassCard}>
          <h2 style={{ marginTop: 0, marginBottom: 18 }}>
            Frequently Asked Questions
          </h2>

          <div style={faqItem}>
            <h4 style={faqQ}>Is this beginner friendly?</h4>
            <p style={faqA}>
              Yes. The setup is designed to be simple enough for traders who are new
              to Expert Advisors.
            </p>
          </div>

          <div style={faqItem}>
            <h4 style={faqQ}>How do I receive the EA after payment?</h4>
            <p style={faqA}>
              After payment, send your proof on Telegram or WhatsApp. You will then
              receive the EA file and setup guidance.
            </p>
          </div>

          <div style={faqItem}>
            <h4 style={faqQ}>How do I get the full details?</h4>
            <p style={faqA}>
              Message us directly on Telegram or WhatsApp and we will send you the
              next step, payment process, and access details.
            </p>
          </div>

          <div style={faqItem}>
            <h4 style={faqQ}>Why is the backtest video included?</h4>
            <p style={faqA}>
              It helps buyers understand the strategy style and get more confidence
              before purchasing.
            </p>
          </div>

          <div style={riskNote}>
            Trading involves risk. Backtest results and past performance do not
            guarantee future results.
          </div>
        </div>
      </div>

      {popup && (
        <div className="buy-product-popup" style={popupStyle}>
          {popup}
        </div>
      )}

      <a
        className="buy-product-floating"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={floatingWhatsapp}
      >
        WhatsApp
      </a>

      <div className="buy-product-sticky-bar" style={stickyBar}>
        <div className="buy-product-sticky-inner" style={stickyInner}>
          <div style={stickyPill}>🔥 Ready to unlock {product.title}?</div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href={telegramLink} target="_blank" rel="noreferrer">
              <button className="buy-product-sticky-button" style={buyButton}>
                Telegram
              </button>
            </a>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button className="buy-product-sticky-button" style={whatsappButton}>
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(56,189,248,0.14), transparent 28%), linear-gradient(180deg, #020617 0%, #071120 38%, #020617 100%)",
  color: "#f8fafc",
  fontFamily: "Arial, sans-serif",
  padding: "22px 18px 120px",
};

const topNav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 16,
  flexWrap: "wrap",
  marginBottom: 26,
};

const logo = {
  fontSize: 28,
  fontWeight: 900,
  color: "#38bdf8",
};

const navLink = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 15,
};

const offerBar = {
  marginBottom: 18,
  background: "rgba(250,204,21,0.10)",
  border: "1px solid rgba(250,204,21,0.22)",
  color: "#facc15",
  padding: "12px 16px",
  borderRadius: 16,
  fontWeight: 800,
};

const heroGrid = {
  display: "grid",
  gridTemplateColumns: "1.08fr 0.92fr",
  gap: 20,
  alignItems: "start",
  marginBottom: 24,
};

const glassCard = {
  background: "rgba(15,23,42,0.78)",
  border: "1px solid rgba(148,163,184,0.16)",
  borderRadius: 22,
  boxShadow: "0 20px 60px rgba(2,6,23,0.35)",
  backdropFilter: "blur(8px)",
  padding: 24,
};

const imageWrap = {
  position: "relative",
};

const productImage = {
  width: "100%",
  borderRadius: 18,
  display: "block",
  objectFit: "cover",
  maxHeight: 380,
};

const floatingTag = {
  position: "absolute",
  top: 14,
  left: 14,
  background: "rgba(2,6,23,0.82)",
  border: "1px solid rgba(56,189,248,0.22)",
  color: "#7dd3fc",
  borderRadius: 999,
  padding: "8px 12px",
  fontWeight: 800,
  fontSize: 12,
};

const mostPopularBadge = {
  position: "absolute",
  top: 14,
  right: 14,
  background: "#38bdf8",
  color: "#062033",
  borderRadius: 999,
  padding: "8px 12px",
  fontWeight: 900,
  fontSize: 12,
};

const videoWrap = {
  borderRadius: 18,
  overflow: "hidden",
  border: "1px solid rgba(148,163,184,0.12)",
};

const proofSection = {
  marginTop: 16,
};

const proofSectionTitle = {
  marginBottom: 12,
  color: "#f8fafc",
  fontWeight: 800,
};

const proofImagesGrid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 14,
};

const proofImageCard = {
  borderRadius: 18,
  overflow: "hidden",
  border: "1px solid rgba(148,163,184,0.12)",
  background: "rgba(2,6,23,0.4)",
};

const proofImage = {
  width: "100%",
  display: "block",
};

const stickyRight = {
  position: "sticky",
  top: 20,
};

const pill = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "rgba(56,189,248,0.12)",
  color: "#7dd3fc",
  border: "1px solid rgba(56,189,248,0.24)",
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 13,
  fontWeight: 800,
  marginBottom: 16,
};

const mainTitle = {
  margin: "0 0 12px",
  fontSize: 38,
  lineHeight: 1.08,
  fontWeight: 900,
};

const accessLabel = {
  color: "#94a3b8",
  fontWeight: 700,
  marginBottom: 12,
};

const greenLine = {
  color: "#4ade80",
  fontWeight: 800,
  marginBottom: 10,
};

const countdown = {
  color: "#facc15",
  fontWeight: 800,
  marginBottom: 10,
};

const stockText = {
  display: "inline-flex",
  background: "rgba(239,68,68,0.12)",
  color: "#fca5a5",
  border: "1px solid rgba(239,68,68,0.22)",
  borderRadius: 999,
  padding: "8px 12px",
  fontWeight: 900,
  fontSize: 13,
  marginBottom: 14,
};

const mainDesc = {
  color: "#cbd5e1",
  lineHeight: 1.8,
  marginBottom: 16,
};

const trustGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 10,
  marginTop: 16,
  marginBottom: 18,
};

const trustBox = {
  background: "rgba(2,6,23,0.55)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 14,
  padding: 12,
  textAlign: "center",
  fontWeight: 800,
  color: "#f8fafc",
};

const salesTrustBox = {
  background: "rgba(2,6,23,0.42)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 16,
  marginBottom: 18,
};

const salesTrustTitle = {
  fontWeight: 900,
  marginBottom: 10,
  color: "#f8fafc",
};

const salesTrustList = {
  color: "#cbd5e1",
  lineHeight: 1.8,
};

const sectionTitle = {
  marginTop: 22,
  marginBottom: 12,
  color: "#f8fafc",
};

const bodyText = {
  color: "#cbd5e1",
  lineHeight: 1.8,
  marginTop: 0,
};

const featureRow = {
  background: "rgba(2,6,23,0.42)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 14,
  padding: 12,
  color: "#f8fafc",
  fontWeight: 700,
};

const whatYouGetBox = {
  display: "grid",
  gap: 10,
  background: "rgba(2,6,23,0.42)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 16,
  color: "#f8fafc",
  fontWeight: 700,
};

const ctaGroup = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
  marginTop: 18,
};

const baseButton = {
  width: "100%",
  border: "none",
  borderRadius: 14,
  padding: "14px 18px",
  fontWeight: 800,
  fontSize: 15,
  cursor: "pointer",
};

const buyButton = {
  ...baseButton,
  background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
  color: "#ffffff",
};

const whatsappButton = {
  ...baseButton,
  background: "#25D366",
  color: "#052e16",
};

const secondaryButton = {
  ...baseButton,
  background: "rgba(15,23,42,0.9)",
  color: "#f8fafc",
  border: "1px solid rgba(148,163,184,0.18)",
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: 16,
  marginBottom: 24,
};

const compareGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 14,
};

const compareBoxBad = {
  background: "rgba(127,29,29,0.18)",
  border: "1px solid rgba(248,113,113,0.20)",
  borderRadius: 18,
  padding: 18,
};

const compareBoxGood = {
  background: "rgba(20,83,45,0.18)",
  border: "1px solid rgba(74,222,128,0.20)",
  borderRadius: 18,
  padding: 18,
};

const compareTitle = {
  marginTop: 0,
  marginBottom: 12,
};

const compareItem = {
  marginBottom: 10,
  color: "#e2e8f0",
};

const testimonialCard = {
  background: "rgba(2,6,23,0.42)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 14,
  padding: 14,
  color: "#e2e8f0",
  lineHeight: 1.75,
  marginBottom: 12,
};

const faqItem = {
  marginBottom: 18,
};

const faqQ = {
  margin: "0 0 8px",
};

const faqA = {
  margin: 0,
  color: "#cbd5e1",
  lineHeight: 1.8,
};

const riskNote = {
  marginTop: 18,
  color: "#94a3b8",
  lineHeight: 1.7,
};

const popupStyle = {
  position: "fixed",
  right: 20,
  bottom: 84,
  zIndex: 1000,
  background: "rgba(2,6,23,0.94)",
  border: "1px solid rgba(56,189,248,0.22)",
  borderRadius: 16,
  padding: 16,
  maxWidth: 320,
  boxShadow: "0 18px 40px rgba(2,6,23,0.45)",
};

const floatingWhatsapp = {
  position: "fixed",
  right: 20,
  bottom: 154,
  zIndex: 1000,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 120,
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: 999,
  fontWeight: 900,
  background: "#25D366",
  color: "#052e16",
  animation: "stickyGlow 2.2s infinite",
};

const stickyBar = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
  padding: "12px 16px",
  background: "rgba(2,6,23,0.84)",
  borderTop: "1px solid rgba(148,163,184,0.12)",
  backdropFilter: "blur(10px)",
};

const stickyInner = {
  maxWidth: 1180,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 12,
  alignItems: "center",
};

const stickyPill = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  color: "#f8fafc",
  fontWeight: 800,
};

