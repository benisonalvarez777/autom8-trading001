import React from "react";
import { Link, useParams } from "react-router-dom";

const TELEGRAM_LINK = "https://t.me/DontCopyMaster";
const WHATSAPP_NUMBER = "639455023449";
const CONTACT_EMAIL = "rich@automateforextrading.com";

const PRODUCTS = [
  {
    slug: "autom8-gold-scalper-ags",
    name: "Autom8 Gold Scalper (AGS)",
    price: "$299",
    pair: "XAUUSD",
    timeframe: "M5 / M15",
    image: "/images/products/ags.jpg",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/oe80YVy0CSg",
    summary:
      "A gold-focused scalping EA built for cleaner entries, faster execution flow, and a simpler automation experience.",
    longDescription:
      "Autom8 Gold Scalper (AGS) is designed for traders who want a more practical and disciplined way to approach gold market automation. It focuses on cleaner execution flow and a streamlined product experience, making it easier for buyers to understand the offer and take action.",
    features: [
      "Gold-focused automation",
      "Designed for disciplined execution",
      "Cleaner product flow for buyers",
      "Guided onboarding support",
      "Mobile-friendly product page experience",
    ],
    proofImages: ["/images/backtest1.png", "/images/backtest2.png"],
  },
  {
    slug: "autom8-gold-breaker-pro",
    name: "Autom8 Gold Breaker Pro",
    price: "$349",
    pair: "XAUUSD",
    timeframe: "M15 / H1",
    image: "/images/products/gold-breaker-pro.jpg",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/oe80YVy0CSg",
    summary:
      "A structured breakout-style EA for traders who want a stronger gold automation setup with guided onboarding.",
    longDescription:
      "Autom8 Gold Breaker Pro is positioned for traders looking for a more powerful and structured gold-focused automation product. The page is designed to convert cleanly with direct CTA access, supporting video, and clear product details.",
    features: [
      "Breakout-style EA concept",
      "Gold market focus",
      "Structured automated workflow",
      "Built for clean buyer conversion",
      "Telegram and WhatsApp support",
    ],
    proofImages: ["/images/backtest1.png", "/images/backtest2.png"],
  },
  {
    slug: "autom8-pacman",
    name: "Autom8 PACMAN",
    price: "$399",
    pair: "XAUUSD / Multi Pair",
    timeframe: "Adaptive",
    image: "/images/products/pacman.jpg",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/oe80YVy0CSg",
    summary:
      "A smart breakout engine built for traders who want a more advanced automation workflow.",
    longDescription:
      "Autom8 PACMAN is presented as a more advanced EA offer for traders who prefer a stronger automation concept and a more serious product positioning. The detail page keeps the flow clean while still focusing on trust and conversion.",
    features: [
      "Advanced automation concept",
      "Clean and structured product detail page",
      "High-conversion CTA layout",
      "Private access model",
      "Support through Telegram and WhatsApp",
    ],
    proofImages: ["/images/backtest1.png", "/images/backtest2.png"],
  },
  {
    slug: "autom8-sniper-pro",
    name: "Autom8 Sniper Pro",
    price: "$349",
    pair: "GBPJPY",
    timeframe: "H1",
    image: "/images/products/sniper-pro.jpg",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/oe80YVy0CSg",
    summary:
      "A precision breakout EA with wick-based logic and disciplined daily execution structure.",
    longDescription:
      "Autom8 Sniper Pro is positioned for traders who want a cleaner precision-style EA with stronger product appeal and a prop-firm-ready angle. This page keeps the offer clear, direct, and mobile-friendly.",
    features: [
      "GBPJPY H1 focus",
      "Precision breakout concept",
      "Wick-based logic angle",
      "Prop-firm-ready positioning",
      "Simple direct contact CTA flow",
    ],
    proofImages: ["/images/backtest1.png", "/images/backtest2.png"],
  },
];

function getWhatsAppLink(productName) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I want to buy ${productName}.`
  )}`;
}

export default function BuyEAProduct() {
  const { productSlug } = useParams();

  const product = PRODUCTS.find((item) => item.slug === productSlug);

  if (!product) {
    return (
      <div style={page}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={glassCard}>
            <h1 style={{ marginTop: 0 }}>Product not found</h1>
            <p style={bodyText}>Slug received: {String(productSlug)}</p>

            <div style={buttonRow}>
              <Link to="/buy-forex-ea" style={{ flex: 1 }}>
                <button style={blueButtonFull}>Back to EA Products</button>
              </Link>

              <Link to="/" style={{ flex: 1 }}>
                <button style={ghostButtonFull}>Back Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={page}>
      <style>{`
        @media (max-width: 980px) {
          .product-main-grid,
          .product-bottom-grid {
            grid-template-columns: 1fr !important;
          }

          .product-cta-grid {
            grid-template-columns: 1fr !important;
          }

          .product-proof-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .product-shell {
            padding: 16px !important;
            padding-bottom: 120px !important;
          }

          .product-top-actions,
          .product-contact-actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .product-top-actions a,
          .product-top-actions button,
          .product-contact-actions a,
          .product-contact-actions button {
            width: 100% !important;
          }

          .product-video-frame {
            height: 220px !important;
          }

          .product-sticky-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="product-shell" style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={topNav}>
          <h2 style={{ margin: 0, color: "#38bdf8" }}>Autom8 Trading</h2>

          <div style={topNavLinks}>
            <Link to="/" style={navLink}>
              Home
            </Link>
            <Link to="/buy-forex-ea" style={navLink}>
              EA Products
            </Link>
            <Link to="/mentoring" style={navLink}>
              Mentoring
            </Link>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" style={navLink}>
              Telegram
            </a>
          </div>
        </div>

        <div className="product-main-grid" style={mainGrid}>
          <div style={glassCard}>
            <div style={imageWrap}>
              <img src={product.image} alt={product.name} style={heroImage} />
            </div>
          </div>

          <div style={glassCard}>
            <div style={pill}>EA Product Detail</div>
            <h1 style={heroTitle}>{product.name}</h1>
            <p style={subtitle}>{product.summary}</p>

            <div style={metaRow}>
              <span style={metaPill}>{product.pair}</span>
              <span style={metaPill}>{product.timeframe}</span>
              <span style={metaPill}>Private Access</span>
            </div>

            <div style={price}>{product.price}</div>

            <div style={trustBox}>
              <div style={trustTitle}>Why buyers like this page</div>
              <div style={trustLine}>✓ Clear product explanation</div>
              <div style={trustLine}>✓ Direct video preview below</div>
              <div style={trustLine}>✓ Fast CTA to Telegram and WhatsApp</div>
              <div style={trustLine}>✓ Mobile-friendly layout</div>
            </div>

            <div className="product-top-actions" style={buttonRow}>
              <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" style={{ flex: 1 }}>
                <button style={primaryButtonFull}>Buy via Telegram</button>
              </a>

              <a
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noreferrer"
                style={{ flex: 1 }}
              >
                <button style={whatsappButtonFull}>Buy via WhatsApp</button>
              </a>
            </div>

            <div className="product-top-actions" style={buttonRow}>
              <Link to="/buy-forex-ea" style={{ flex: 1 }}>
                <button style={blueButtonFull}>Back to EA Products</button>
              </Link>

              <a href={`mailto:${CONTACT_EMAIL}`} style={{ flex: 1 }}>
                <button style={ghostButtonFull}>Email Us</button>
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>How It Works</h2>
              <p style={sectionSubtext}>
                Watch the product video and review the proof images below.
              </p>
            </div>
          </div>

          <div style={glassCard}>
            {product.videoType === "youtube" ? (
              <iframe
                className="product-video-frame"
                src={product.videoUrl}
                title={product.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={videoFrame}
              />
            ) : (
              <video
                className="product-video-frame"
                src={product.videoUrl}
                controls
                playsInline
                style={videoFrame}
              />
            )}
          </div>
        </div>

        <div className="product-bottom-grid" style={bottomGrid}>
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>About This EA</h2>
            <p style={bodyText}>{product.longDescription}</p>

            <div style={featureGrid}>
              {product.features.map((feature) => (
                <div key={feature} style={featureCard}>
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Backtest / Proof Images</h2>

            <div className="product-proof-grid" style={proofGrid}>
              {product.proofImages.map((image, index) => (
                <div key={image + index} style={proofCard}>
                  <img
                    src={image}
                    alt={`${product.name} proof ${index + 1}`}
                    style={proofImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={ctaCard}>
          <div style={pill}>Ready to get access?</div>
          <h2 style={ctaTitle}>Start with {product.name}</h2>
          <p style={ctaText}>
            Message us directly to confirm access, payment instructions, and the
            next onboarding step.
          </p>

          <div className="product-contact-actions product-cta-grid" style={ctaGrid}>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
              <button style={primaryButton}>Telegram</button>
            </a>

            <a href={getWhatsAppLink(product.name)} target="_blank" rel="noreferrer">
              <button style={whatsappButton}>WhatsApp</button>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`}>
              <button style={ghostButton}>Email</button>
            </a>
          </div>
        </div>
      </div>

      <div style={stickyBar}>
        <div className="product-sticky-inner" style={stickyInner}>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <button style={stickyWhatsappButton}>💬 Buy {product.name} via WhatsApp</button>
          </a>

          <div style={stickyPill}>🔥 Private Access</div>
        </div>
      </div>
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
  paddingBottom: 120,
};

const topNav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 24,
  flexWrap: "wrap",
  gap: 12,
};

const topNavLinks = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
};

const navLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
};

const mainGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 22,
  marginBottom: 34,
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
  marginBottom: 34,
};

const glassCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  backdropFilter: "blur(10px)",
};

const imageWrap = {
  borderRadius: 18,
  overflow: "hidden",
  background: "rgba(2,6,23,0.35)",
};

const heroImage = {
  width: "100%",
  height: 420,
  objectFit: "cover",
  display: "block",
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
  fontSize: "clamp(30px, 5vw, 42px)",
  lineHeight: 1.08,
  margin: "14px 0",
};

const subtitle = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  fontSize: 17,
};

const metaRow = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
  margin: "14px 0 18px 0",
};

const metaPill = {
  padding: "7px 12px",
  borderRadius: 999,
  background: "rgba(15,23,42,0.9)",
  border: "1px solid rgba(148,163,184,0.14)",
  color: "#7dd3fc",
  fontWeight: 700,
  fontSize: 12,
};

const price = {
  fontSize: 36,
  fontWeight: 900,
  color: "#22c55e",
  marginBottom: 18,
};

const trustBox = {
  background: "rgba(15, 23, 42, 0.85)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 16,
  padding: 16,
  marginBottom: 18,
};

const trustTitle = {
  fontWeight: 800,
  color: "#f8fafc",
  marginBottom: 10,
};

const trustLine = {
  color: "#e2e8f0",
  lineHeight: 1.8,
};

const buttonRow = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
  marginTop: 10,
};

const sectionHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  gap: 12,
  marginBottom: 18,
  flexWrap: "wrap",
};

const sectionSubtext = {
  margin: "6px 0 0 0",
  color: "#94a3b8",
};

const videoFrame = {
  width: "100%",
  height: 420,
  border: "none",
  borderRadius: 16,
  background: "#000",
};

const bodyText = {
  color: "#cbd5e1",
  lineHeight: 1.8,
};

const featureGrid = {
  display: "grid",
  gap: 10,
  marginTop: 18,
};

const featureCard = {
  background: "rgba(15, 23, 42, 0.82)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 14,
  padding: 14,
  color: "#e2e8f0",
  fontWeight: 700,
};

const proofGrid = {
  display: "grid",
  gap: 14,
};

const proofCard = {
  borderRadius: 16,
  overflow: "hidden",
  background: "rgba(2,6,23,0.35)",
  border: "1px solid rgba(148,163,184,0.12)",
};

const proofImage = {
  width: "100%",
  height: 220,
  objectFit: "cover",
  display: "block",
};

const ctaCard = {
  textAlign: "center",
  background:
    "linear-gradient(135deg, rgba(15,23,42,0.94), rgba(30,41,59,0.90))",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 22,
  padding: "34px 24px",
  marginBottom: 20,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
};

const ctaTitle = {
  marginTop: 14,
  fontSize: "clamp(28px, 5vw, 34px)",
};

const ctaText = {
  color: "#cbd5e1",
  maxWidth: 760,
  margin: "0 auto 18px auto",
};

const ctaGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 12,
  maxWidth: 860,
  margin: "0 auto",
};

const primaryButton = {
  width: "100%",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
};

const whatsappButton = {
  width: "100%",
  background: "#25D366",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
};

const ghostButton = {
  width: "100%",
  background: "rgba(15, 23, 42, 0.72)",
  color: "white",
  border: "1px solid rgba(148,163,184,0.18)",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const primaryButtonFull = {
  width: "100%",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "#fff",
  border: "none",
  padding: "12px 14px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
};

const whatsappButtonFull = {
  width: "100%",
  background: "#25D366",
  color: "#fff",
  border: "none",
  padding: "12px 14px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
};

const blueButtonFull = {
  width: "100%",
  background: "#38bdf8",
  color: "#081226",
  border: "none",
  padding: "12px 14px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
};

const ghostButtonFull = {
  width: "100%",
  background: "rgba(15,23,42,0.9)",
  color: "#f8fafc",
  border: "1px solid rgba(148,163,184,0.18)",
  padding: "12px 14px",
  borderRadius: 10,
  cursor: "pointer",
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
};

const stickyPill = {
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