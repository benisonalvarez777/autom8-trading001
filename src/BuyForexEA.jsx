buyEaproducts.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TELEGRAM_USERNAME = "DontCopyMaster";
const WHATSAPP_NUMBER = "639455023449";
const WALLET = "0xbb2a9a6daf3be07e7dbf211e26c8295121767543";

const eaProducts = {
  "gold-digger-scalping-ea": {
    title: "Autom8 Gold Scalper (AGS)",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=oe80YVy0CSg",
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
    title: "Autom8 Gold Breaker Pro",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
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
      "Autom8 Gold Breaker Pro is built for consistency, smart entries, and controlled risk. It combines a Buy Limit grid to capture retracements at better prices with Buy Stop breakout orders to capture strong upward momentum. This dual-strategy setup creates continuous opportunities across different market conditions while managing risk through smart spacing and automated profit protection.",
    tag: "Best seller",
    stock: "Only 4 copies left",
    featured: true,
  },
  "pacmac-ea": {
    title: "Autom8 Sniper Pro",
    price: "$399",
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
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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

  const message = `Hi, I want to buy ${product.title} for ${product.price}. Please send me the next step.`;
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

        <div style={heroGrid}>
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

                  <div style={proofImagesGrid}>
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

          <div style={glassCard}>
            <div style={pill}>Selected EA Product</div>

            <h1 style={mainTitle}>{product.title}</h1>

            <div style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 40, fontWeight: 900 }}>{product.price}</span>
              <span style={{ color: "#94a3b8", marginLeft: 8 }}>
                one-time payment
              </span>
            </div>

            <div style={greenLine}>✔ Instant access after payment</div>
            <div style={countdown}>⏳ Limited-time pricing available today</div>
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
              <div style={salesTrustList}>• One-time payment only</div>
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
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button style={bigCTA}>🚀 Buy via Telegram</button>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button style={whatsappCTA}>💬 Buy via WhatsApp</button>
              </a>
            </div>

            <p style={subNote}>
              Both buttons automatically open your message with the selected product.
            </p>
          </div>
        </div>

        <div style={infoGrid}>
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Secure Payment via USDT (BEP20)</h2>

            <p style={bodyText}>
              Secure your access by sending <strong>USDT (BEP20)</strong> to the
              wallet below. After payment, send your proof on Telegram or WhatsApp
              and you will receive your EA with setup guidance.
            </p>

            <p style={greenLine}>
              ✔ Fast response • ✔ Trusted seller • ✔ Support included
            </p>

            <div style={walletBox}>{WALLET}</div>

            <button onClick={copyWallet} style={primaryButton}>
              Copy Wallet Address
            </button>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>After Payment</h2>
            <ol style={orderedList}>
              <li>Pay the exact amount for {product.title}.</li>
              <li>Take a screenshot of your payment proof.</li>
              <li>Click Telegram or WhatsApp below.</li>
              <li>Send the screenshot and wait for confirmation.</li>
              <li>Receive your EA file and setup guidance.</li>
            </ol>

            <div style={smallCtaGroup}>
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button style={blueButton}>Contact Telegram</button>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button style={whatsappSmallButton}>Contact WhatsApp</button>
              </a>
            </div>
          </div>
        </div>

        <div style={infoGrid}>
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Why Traders Buy This</h2>
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
            <h4 style={faqQ}>Is this a one-time payment?</h4>
            <p style={faqA}>
              Yes. The price shown on the page is a one-time payment for the product.
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

      <div style={stickyBar}>
        <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: 14 }}>
          {product.title} — {product.price}
        </div>

        <div style={stickyButtons}>
          <a
            href={telegramLink}
            target="_blank"
            rel="noreferrer"
            style={{ width: "100%" }}
          >
            <button style={stickyCTA}>Telegram</button>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{ width: "100%" }}
          >
            <button style={stickyWhatsappCTA}>WhatsApp</button>
          </a>
        </div>
      </div>

      <a
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
            <span style={{ fontSize: 12, opacity: 0.9 }}>Questions?</span>
            <span style={{ fontSize: 14, fontWeight: 800 }}>WhatsApp</span>
          </div>
        </div>
      </a>

      {popup && <div style={popupStyle}>🔥 {popup}</div>}
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(56,189,248,0.14), transparent 24%), linear-gradient(180deg, #071120 0%, #0b1730 55%, #09101f 100%)",
  color: "#f8fafc",
  fontFamily: "Arial, sans-serif",
  padding: 24,
  paddingBottom: 120,
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

const offerBar = {
  background: "linear-gradient(90deg,#facc15,#f97316)",
  color: "#081226",
  padding: "12px 14px",
  borderRadius: 12,
  fontWeight: 800,
  marginBottom: 20,
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
};

const heroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 24,
  marginBottom: 24,
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 20,
  marginBottom: 20,
};

const glassCard = {
  background: "rgba(15, 23, 42, 0.78)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 22,
  padding: 22,
  boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
  backdropFilter: "blur(8px)",
};

const imageWrap = {
  position: "relative",
};

const productImage = {
  width: "100%",
  height: 340,
  objectFit: "cover",
  borderRadius: 16,
  display: "block",
};

const floatingTag = {
  position: "absolute",
  left: 14,
  bottom: 14,
  background: "rgba(8,18,38,0.9)",
  color: "#7dd3fc",
  border: "1px solid rgba(56,189,248,0.35)",
  padding: "8px 12px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 700,
};

const mostPopularBadge = {
  position: "absolute",
  top: 14,
  right: 14,
  background: "linear-gradient(135deg,#facc15,#f97316)",
  color: "#081226",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 900,
};

const videoWrap = {
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid rgba(148,163,184,0.15)",
  background: "#000",
};

const proofSection = {
  marginTop: 12,
};

const proofSectionTitle = {
  color: "#7dd3fc",
  fontSize: 13,
  fontWeight: 700,
  marginBottom: 10,
};

const proofImagesGrid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 14,
};

const proofImageCard = {
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid rgba(148,163,184,0.15)",
  background: "rgba(255,255,255,0.02)",
  boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
};

const proofImage = {
  width: "100%",
  display: "block",
  borderRadius: 14,
  transition: "transform 0.35s ease",
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

const mainTitle = {
  margin: "12px 0 8px 0",
  fontSize: "clamp(30px, 5vw, 42px)",
  lineHeight: 1.12,
};

const greenLine = {
  color: "#22c55e",
  fontWeight: 700,
  marginBottom: 4,
};

const countdown = {
  color: "#facc15",
  fontWeight: 700,
  marginTop: 10,
  marginBottom: 6,
};

const stockText = {
  color: "#f87171",
  fontSize: 13,
  fontWeight: 700,
  marginBottom: 8,
};

const mainDesc = {
  color: "#cbd5e1",
  fontSize: 17,
  lineHeight: 1.7,
  marginTop: 16,
  marginBottom: 0,
};

const trustGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 10,
  marginTop: 18,
};

const trustBox = {
  background: "rgba(56,189,248,0.08)",
  border: "1px solid rgba(56,189,248,0.18)",
  borderRadius: 12,
  padding: "10px 12px",
  color: "#cbd5e1",
  fontSize: 14,
  textAlign: "center",
};

const salesTrustBox = {
  marginTop: 14,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: 14,
  padding: 16,
};

const salesTrustTitle = {
  color: "#fde68a",
  fontWeight: 800,
  marginBottom: 10,
};

const salesTrustList = {
  color: "#f8fafc",
  marginBottom: 8,
  lineHeight: 1.6,
};

const sectionTitle = {
  marginTop: 24,
  marginBottom: 12,
  color: "#f8fafc",
};

const bodyText = {
  color: "#cbd5e1",
  lineHeight: 1.7,
};

const featureRow = {
  color: "#cbd5e1",
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(148,163,184,0.08)",
  borderRadius: 12,
  padding: "10px 12px",
};

const whatYouGetBox = {
  display: "grid",
  gap: 10,
  color: "#cbd5e1",
  lineHeight: 1.8,
  background: "rgba(34,197,94,0.06)",
  border: "1px solid rgba(34,197,94,0.18)",
  borderRadius: 14,
  padding: 16,
};

const ctaGroup = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
  marginTop: 18,
};

const smallCtaGroup = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
};

const walletBox = {
  padding: 14,
  borderRadius: 12,
  background: "rgba(15, 23, 42, 0.7)",
  border: "1px solid rgba(148,163,184,0.18)",
  wordBreak: "break-all",
  marginBottom: 14,
  color: "#f8fafc",
};

const orderedList = {
  color: "#cbd5e1",
  lineHeight: 1.9,
  paddingLeft: 20,
};

const testimonialCard = {
  padding: 16,
  borderRadius: 14,
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(148,163,184,0.1)",
  color: "#cbd5e1",
  marginBottom: 12,
  lineHeight: 1.7,
};

const compareGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 14,
};

const compareBoxBad = {
  padding: 16,
  borderRadius: 16,
  background: "rgba(239,68,68,0.08)",
  border: "1px solid rgba(239,68,68,0.18)",
};

const compareBoxGood = {
  padding: 16,
  borderRadius: 16,
  background: "rgba(34,197,94,0.08)",
  border: "1px solid rgba(34,197,94,0.18)",
};

const compareTitle = {
  marginTop: 0,
  marginBottom: 12,
};

const compareItem = {
  color: "#cbd5e1",
  marginBottom: 10,
};

const faqItem = {
  padding: "16px 0",
  borderBottom: "1px solid rgba(148,163,184,0.12)",
};

const faqQ = {
  margin: 0,
  color: "#f8fafc",
};

const faqA = {
  color: "#cbd5e1",
  marginTop: 8,
  lineHeight: 1.7,
};

const riskNote = {
  marginTop: 20,
  padding: 14,
  borderRadius: 12,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.18)",
  color: "#fde68a",
  lineHeight: 1.6,
};

const primaryButton = {
  width: "100%",
  padding: "13px 18px",
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
  fontSize: 15,
};

const blueButton = {
  width: "100%",
  padding: "13px 18px",
  borderRadius: 12,
  border: "none",
  background: "#38bdf8",
  color: "#081226",
  fontWeight: 800,
  cursor: "pointer",
  fontSize: 15,
};

const whatsappSmallButton = {
  width: "100%",
  padding: "13px 18px",
  borderRadius: 12,
  border: "none",
  background: "#25D366",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
  fontSize: 15,
};

const bigCTA = {
  width: "100%",
  padding: "16px",
  borderRadius: 14,
  border: "none",
  background: "linear-gradient(135deg,#facc15,#f97316)",
  color: "#081226",
  fontWeight: 900,
  fontSize: 16,
  cursor: "pointer",
  boxShadow: "0 14px 30px rgba(249,115,22,0.25)",
};

const whatsappCTA = {
  width: "100%",
  padding: "16px",
  borderRadius: 14,
  border: "none",
  background: "#25D366",
  color: "white",
  fontWeight: 900,
  fontSize: 16,
  cursor: "pointer",
  boxShadow: "0 14px 30px rgba(37,211,102,0.22)",
};

const subNote = {
  color: "#94a3b8",
  fontSize: 13,
  marginTop: 10,
  marginBottom: 0,
};

const stickyBar = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(2, 6, 23, 0.95)",
  borderTop: "1px solid rgba(148,163,184,0.14)",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 14,
  zIndex: 999,
  flexWrap: "wrap",
  backdropFilter: "blur(8px)",
};

const stickyButtons = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 10,
  width: "100%",
  maxWidth: 420,
};

const stickyCTA = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(135deg,#facc15,#f97316)",
  color: "#081226",
  fontWeight: 900,
  fontSize: 15,
  cursor: "pointer",
};

const stickyWhatsappCTA = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "none",
  background: "#25D366",
  color: "white",
  fontWeight: 900,
  fontSize: 15,
  cursor: "pointer",
};

const popupStyle = {
  position: "fixed",
  bottom: 84,
  left: 20,
  background: "rgba(2, 6, 23, 0.95)",
  color: "#f8fafc",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.18)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.28)",
  fontSize: 14,
  zIndex: 999,
};

const floatingWhatsappWrap = {
  position: "fixed",
  right: 20,
  bottom: 98,
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

const navLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
};

