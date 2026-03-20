import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TELEGRAM_LINK = "https://t.me/DontCopyMaster";
const PARTNER_LINK =
  "https://portal.fortuneprime.com/getview?view=register&token=0pCE0B";
const CONTACT_EMAIL = "rich@automateforextrading.com";
const USDT_WALLET = "0xbb2a9a6daf3be07e7dbf211e26c8295121767543";

const services = [
  {
    title: "Forex EA",
    desc: "Automated trading bots built for disciplined execution and easier market participation.",
    price: "From $149",
    button: "View EA Products",
    link: "/buy-forex-ea",
    icon: "⚙️",
  },
  {
    title: "Telegram Signals",
    desc: "Daily trade ideas and guided entries delivered directly to Telegram.",
    price: "$50/month",
    button: "Join Signals",
    link: TELEGRAM_LINK,
    icon: "📡",
  },
  {
    title: "Mentoring",
    desc: "1-on-1 trading guidance focused on execution, structure, and risk control.",
    price: "$300",
    button: "Start Mentoring",
    link: TELEGRAM_LINK,
    icon: "🎯",
  },
  {
    title: "Copy Trading",
    desc: "A simpler way to participate by following structured strategies.",
    price: "Varies",
    button: "Get Started",
    link: TELEGRAM_LINK,
    icon: "📈",
  },
  {
    title: "Become a Partner",
    desc: "Earn commissions by referring traders to our broker partner.",
    price: "Unlimited Earnings",
    button: "Sign Up",
    link: PARTNER_LINK,
    icon: "🤝",
  },
];

const stats = [
  { label: "Win Rate", value: "95%" },
  { label: "Clients", value: "500+" },
  { label: "Support", value: "24/7" },
  { label: "Market Focus", value: "XAUUSD" },
];

export default function App() {
  const [profit, setProfit] = useState(3200);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfit((prev) => prev + Math.floor(Math.random() * 20));
    }, 3000);

    const timer = setTimeout(() => setShowPopup(true), 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const copyWallet = () => {
    navigator.clipboard.writeText(USDT_WALLET);
    alert("Wallet copied!");
  };

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
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <h2 style={{ margin: 0, color: "#38bdf8" }}>Autom8 Trading</h2>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/" style={navLink}>Home</Link>
            <Link to="/buy-forex-ea" style={navLink}>EA Products</Link>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" style={navLink}>
              Telegram
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} style={navLink}>
              Email
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            alignItems: "stretch",
            marginBottom: 28,
          }}
        >
          <div style={glassCard}>
            <div style={pill}>Forex Automation • Premium Access</div>
            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 48px)",
                lineHeight: 1.06,
                margin: "12px 0",
              }}
            >
              Automate Your Income with Forex
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: 18, maxWidth: 650, marginTop: 0 }}>
              Premium forex tools, strategy access, mentoring, and partner
              opportunities for traders who want a cleaner and more professional
              path into the market.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 20 }}>
              <div style={metricCard}>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>Live Profit</div>
                <div style={{ fontSize: 30, fontWeight: 800, color: "#22c55e" }}>
                  ${profit}+
                </div>
              </div>

              <div style={metricCard}>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>Contact</div>
                <div style={{ fontSize: 16, fontWeight: 700, wordBreak: "break-word" }}>
                  {CONTACT_EMAIL}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
              <Link to="/buy-forex-ea">
                <button style={primaryButton}>View Forex EA Products</button>
              </Link>
              <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                <button style={secondaryButton}>Join Telegram</button>
              </a>
              <button onClick={copyWallet} style={ghostButton}>
                Copy USDT Wallet
              </button>
            </div>
          </div>

          <div style={glassCard}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <h3 style={{ margin: 0 }}>Live Gold Chart</h3>
              <span style={{ color: "#22c55e", fontSize: 13 }}>XAUUSD</span>
            </div>

            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(148,163,184,0.15)",
              }}
            >
              <iframe
                src="https://s.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=5&theme=dark&style=1&locale=en"
                width="100%"
                height="360"
                frameBorder="0"
                title="Live Gold Chart"
              ></iframe>
            </div>

            <p style={{ margin: "12px 0 0 0", color: "#94a3b8", fontSize: 14 }}>
              Monitor gold in real time while exploring our automation products.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {stats.map((item) => (
            <div key={item.label} style={statCard}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#38bdf8" }}>
                {item.value}
              </div>
              <div style={{ color: "#94a3b8" }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 34 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: 12,
              marginBottom: 18,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2 style={{ margin: 0 }}>Our Services</h2>
              <p style={{ margin: "6px 0 0 0", color: "#94a3b8" }}>
                Choose the service that fits your goals.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 18,
              alignItems: "stretch",
            }}
          >
            {services.map((service) => (
              <div key={service.title} style={serviceCard}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(56, 189, 248, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    marginBottom: 14,
                  }}
                >
                  {service.icon}
                </div>

                <h3 style={{ marginTop: 0, marginBottom: 10 }}>{service.title}</h3>
                <p style={{ color: "#cbd5e1", minHeight: 72, marginTop: 0, flex: 1 }}>
                  {service.desc}
                </p>
                <div style={{ fontWeight: 700, marginBottom: 16, color: "#f8fafc" }}>
                  {service.price}
                </div>

                {service.link.startsWith("/") ? (
                  <Link to={service.link} style={{ marginTop: "auto" }}>
                    <button style={blueButton}>{service.button}</button>
                  </Link>
                ) : (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginTop: "auto" }}
                  >
                    <button style={blueButton}>{service.button}</button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
            marginBottom: 34,
          }}
        >
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Pay via USDT (BEP20)</h2>
            <p style={{ color: "#cbd5e1" }}>
              Send payment to the wallet below, then message us on Telegram with
              your payment proof.
            </p>
            <div style={walletBox}>{USDT_WALLET}</div>
            <button onClick={copyWallet} style={primaryButton}>
              Copy Wallet Address
            </button>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Contact Us</h2>
            <p style={{ color: "#cbd5e1" }}>
              For support, payment confirmation, mentoring inquiries, and partner
              concerns.
            </p>

            <div style={{ display: "grid", gap: 12 }}>
              <div style={contactRow}>
                <span style={{ color: "#94a3b8" }}>Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} style={contactLink}>
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div style={contactRow}>
                <span style={{ color: "#94a3b8" }}>Telegram</span>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  style={contactLink}
                >
                  @DontCopyMaster
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={ctaCard}>
          <h2 style={{ marginTop: 0, fontSize: "clamp(28px, 5vw, 34px)" }}>
            Limited Slots Available
          </h2>
          <p style={{ color: "#cbd5e1", maxWidth: 760, margin: "0 auto 18px auto" }}>
            Start with our EA products, join signals, or build an income stream
            through our partner program.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link to="/buy-forex-ea">
              <button style={primaryButton}>Start Now</button>
            </Link>
            <a href={PARTNER_LINK} target="_blank" rel="noreferrer">
              <button style={secondaryButton}>Become a Partner</button>
            </a>
          </div>
        </div>

        {showPopup && (
          <div style={popupCard}>
            <p style={{ margin: "0 0 10px 0" }}>
              🔥 Someone just viewed our EA products
            </p>
            <Link to="/buy-forex-ea">
              <button style={blueButton}>Browse EA</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

const glassCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  backdropFilter: "blur(10px)",
};

const metricCard = {
  background: "rgba(15, 23, 42, 0.85)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 14,
  padding: "14px 16px",
  minWidth: "min(170px, 100%)",
};

const statCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 18,
  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
};

const serviceCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 18,
  padding: 20,
  boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
  display: "flex",
  flexDirection: "column",
};

const ctaCard = {
  textAlign: "center",
  background: "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.85))",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 22,
  padding: "34px 24px",
  marginBottom: 20,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
};

const popupCard = {
  position: "fixed",
  right: 20,
  bottom: 20,
  background: "rgba(15, 23, 42, 0.95)",
  border: "1px solid rgba(148,163,184,0.18)",
  borderRadius: 16,
  padding: 16,
  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
  maxWidth: "min(270px, calc(100vw - 40px))",
};

const primaryButton = {
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
  boxShadow: "0 10px 24px rgba(34,197,94,0.22)",
};

const secondaryButton = {
  background: "transparent",
  color: "white",
  border: "1px solid rgba(148,163,184,0.35)",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const ghostButton = {
  background: "rgba(15, 23, 42, 0.72)",
  color: "white",
  border: "1px solid rgba(148,163,184,0.18)",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const blueButton = {
  background: "#38bdf8",
  color: "#081226",
  border: "none",
  padding: "10px 14px",
  borderRadius: 10,
  cursor: "pointer",
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

const contactRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  padding: "12px 14px",
  borderRadius: 12,
  background: "rgba(15, 23, 42, 0.7)",
  border: "1px solid rgba(148,163,184,0.12)",
};

const contactLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
  wordBreak: "break-word",
};

const navLink = {
  color: "#7dd3fc",
  textDecoration: "none",
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