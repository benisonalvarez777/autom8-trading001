import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const TELEGRAM_LINK = "https://t.me/DontCopyMaster";
const WHATSAPP_NUMBER = "639455023449";
const PARTNER_LINK =
  "https://portal.fortuneprime.com/getview?view=register&token=0pCE0B";
const CONTACT_EMAIL = "rich@automateforextrading.com";
const USDT_WALLET = "0xbb2a9a6daf3be07e7dbf211e26c8295121767543";

const services = [
  {
    title: "Forex EA",
    desc: "Automated trading bots built for disciplined execution and easier market participation.",
    price: "Private Access Only",
    button: "View EA Products",
    link: "/buy-forex-ea",
    icon: "⚙️",
  },
  {
    title: "Telegram Signals",
    desc: "Daily trade ideas and guided entries delivered directly to Telegram.",
    price: "Exclusive Access",
    button: "Join Signals",
    link: TELEGRAM_LINK,
    icon: "📡",
  },
  {
    title: "Mentoring",
    desc: "Private 1-on-1 forex coaching covering Forex 101, Forex 102, MT5 setup, technical analysis, fundamental analysis, and broker onboarding.",
    price: "Application Required",
    button: "Apply for Mentoring",
    link: "/mentoring",
    icon: "🎯",
  },
  {
    title: "Copy Trading",
    desc: "A hands-free way to participate in the market by following disciplined trading strategies with guided access.",
    price: "Limited Trader Slots",
    button: "Request Access",
    link: "/copy-trading",
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

const testimonials = [
  {
    name: "Mark T.",
    text: "The setup was simple and the support was responsive. It feels more professional than random signals.",
  },
  {
    name: "Jason R.",
    text: "I like that the process is clear. EA access, payment steps, and contact options are all easy to follow.",
  },
  {
    name: "Kevin D.",
    text: "The website looks trustworthy and the EA pages give enough detail before buying.",
  },
];

const brokerSponsors = [
  {
    name: "Fortune Prime Global",
    desc: "Featured broker partner",
    logo: "/images/brokers/fpg.png",
    signupLink:
      "https://portal.fortuneprime.com/getview?view=register&token=0pCE0B",
    videoLink:
      "https://www.youtube.com/watch?v=U69XD2AB0WM&list=PLGfwMj_A3Mx5B4151clMAdG4XsNkS2VC4",
    badge: "Featured",
    available: false,
    primaryCta: "Open Account",
    secondaryCta: "Who We Are",
  },
  {
    name: "Markets4You",
    desc: "Flexible broker partner",
    logo: "/images/brokers/markets4you.png",
    signupLink: "https://www.markets4you.com/",
    videoLink: "https://www.youtube.com/watch?v=Cql3mC7rlu4",
    badge: "Partner",
    available: false,
    primaryCta: "Start Trading",
    secondaryCta: "Who We Are",
  },
  {
    name: "Sponsor Slot",
    desc: "Your broker brand here",
    logo: "/images/brokers/slot1.png",
    signupLink: "#",
    videoLink: "#",
    badge: "Open Slot",
    available: true,
    primaryCta: "Sponsor Here",
    secondaryCta: "Video Slot",
  },
  {
    name: "Broker Exposure",
    desc: "Open for sponsorship",
    logo: "/images/brokers/slot2.png",
    signupLink: "#",
    videoLink: "#",
    badge: "Open Slot",
    available: true,
    primaryCta: "Sponsor Here",
    secondaryCta: "Video Slot",
  },
  {
    name: "Next Broker",
    desc: "Available for brokers",
    logo: "/images/brokers/slot3.png",
    signupLink: "#",
    videoLink: "#",
    badge: "Open Slot",
    available: true,
    primaryCta: "Sponsor Here",
    secondaryCta: "Video Slot",
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

export default function App() {
  const [profit, setProfit] = useState(3200);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(getTimeLeft());
  const [viewers, setViewers] = useState(18);
  const [recentTime, setRecentTime] = useState("2 mins ago");

  const recentTimes = [
    "Just now",
    "1 min ago",
    "2 mins ago",
    "3 mins ago",
    "5 mins ago",
  ];

  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi, I want to know more about your forex services."
      )}`,
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProfit((prev) => prev + Math.floor(Math.random() * 20));
    }, 3000);

    const timer = setTimeout(() => setShowPopup(true), 3500);

    const countdownTimer = setInterval(() => {
      setCountdown(getTimeLeft());
    }, 1000);

    const viewerInterval = setInterval(() => {
      setViewers((v) => {
        let next = v + (Math.random() > 0.5 ? 1 : -1);
        if (next < 10) next = 10;
        if (next > 30) next = 30;
        return next;
      });
      setRecentTime(recentTimes[Math.floor(Math.random() * recentTimes.length)]);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      clearInterval(countdownTimer);
      clearInterval(viewerInterval);
    };
  }, []);

  const copyWallet = () => {
    navigator.clipboard.writeText(USDT_WALLET);
    alert("Wallet copied!");
  };

  return (
    <div style={page}>
      <style>{`
        @keyframes stickyGlow {
          0% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
          50% { box-shadow: 0 0 24px rgba(37, 211, 102, 0.32); }
          100% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
        }

        @keyframes videoPulse {
          0% { box-shadow: 0 0 0 rgba(56, 189, 248, 0); }
          50% { box-shadow: 0 0 18px rgba(56, 189, 248, 0.16); }
          100% { box-shadow: 0 0 0 rgba(56, 189, 248, 0); }
        }

        @media (max-width: 1200px) {
          .broker-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 1024px) {
          .broker-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 768px) {
          .app-shell {
            padding: 16px !important;
            padding-bottom: 120px !important;
          }

          .top-nav {
            margin-bottom: 18px !important;
          }

          .top-nav-links {
            gap: 10px !important;
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
            margin-bottom: 22px !important;
          }

          .hero-card {
            padding: 18px !important;
          }

          .hero-actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .hero-actions a,
          .hero-actions button {
            width: 100% !important;
          }

          .metric-wrap {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .metric-card {
            min-width: 0 !important;
            width: 100% !important;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }

          .services-grid,
          .testimonials-grid,
          .info-grid,
          .broker-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }

          .cta-actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .cta-actions a,
          .cta-actions button {
            width: 100% !important;
          }

          .contact-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .floating-whatsapp {
            right: 12px !important;
            bottom: 146px !important;
          }

          .popup-card {
            right: 12px !important;
            left: 12px !important;
            bottom: 78px !important;
            max-width: none !important;
          }

          .gold-chart-frame {
            height: 300px !important;
          }

          .home-sticky-bar {
            padding: 10px 12px !important;
          }

          .home-sticky-inner {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          .home-sticky-button {
            width: 100% !important;
          }

          .home-sticky-pill {
            justify-content: center !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .hero-title {
            font-size: 32px !important;
          }

          .hero-text {
            font-size: 15px !important;
          }

          .gold-chart-frame {
            height: 260px !important;
          }

          .top-nav-links {
            font-size: 14px !important;
          }
        }
      `}</style>

      <div className="app-shell" style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="top-nav" style={topNav}>
          <h2 style={{ margin: 0, color: "#38bdf8" }}>Autom8 Trading</h2>

          <div className="top-nav-links" style={topNavLinks}>
            <Link to="/" style={navLink}>Home</Link>
            <Link to="/buy-forex-ea" style={navLink}>EA Products</Link>
            <Link to="/mentoring" style={navLink}>Mentoring</Link>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" style={navLink}>
              Telegram
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={navLink}>
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} style={navLink}>Email</a>
          </div>
        </div>

        <div className="hero-grid" style={heroGrid}>
          <div className="hero-card" style={glassCard}>
            <div style={pill}>Forex Automation • Premium Access</div>

            <h1 className="hero-title" style={heroTitle}>
              Automate Your Income with Forex
            </h1>

            <p className="hero-text" style={heroText}>
              Premium forex tools, strategy access, mentoring, and partner
              opportunities for traders who want a cleaner and more professional
              path into the market.
            </p>

            <div style={countdownText}>⏳ Offer ends today in: {countdown}</div>
            <div style={viewerCountStyle}>👥 {viewers} people viewing now</div>
            <div style={lastPurchaseStyle}>🕒 Last purchase: {recentTime}</div>

            <div className="metric-wrap" style={metricWrap}>
              <div className="metric-card" style={metricCard}>
                <div style={metricLabel}>Live Profit</div>
                <div style={metricValue}>${profit}+</div>
              </div>

              <div className="metric-card" style={metricCard}>
                <div style={metricLabel}>Contact</div>
                <div style={metricContact}>{CONTACT_EMAIL}</div>
              </div>
            </div>

            <div className="hero-actions" style={heroActions}>
              <Link to="/buy-forex-ea">
                <button style={primaryButton}>View Forex EA Products</button>
              </Link>

              <Link to="/mentoring">
                <button style={secondaryButton}>Apply for Mentoring</button>
              </Link>

              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <button style={whatsappButton}>WhatsApp</button>
              </a>

              <button onClick={copyWallet} style={ghostButton}>
                Copy USDT Wallet
              </button>
            </div>
          </div>

          <div className="hero-card" style={glassCard}>
            <div style={chartHeader}>
              <h3 style={{ margin: 0 }}>Live Gold Chart</h3>
              <span style={chartLabel}>XAUUSD</span>
            </div>

            <div style={chartWrap}>
              <iframe
                className="gold-chart-frame"
                src="https://s.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=5&theme=dark&style=1&locale=en"
                width="100%"
                height="360"
                frameBorder="0"
                title="Live Gold Chart"
              ></iframe>
            </div>

            <p style={chartNote}>
              Monitor gold in real time while exploring our automation products.
            </p>
          </div>
        </div>

        <div className="stats-grid" style={statsGrid}>
          {stats.map((item) => (
            <div key={item.label} style={statCard}>
              <div style={statValue}>{item.value}</div>
              <div style={statLabel}>{item.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>Our Services</h2>
              <p style={sectionSubtext}>Choose the service that fits your goals.</p>
            </div>
          </div>

          <div className="services-grid" style={servicesGrid}>
            {services.map((service) => (
              <div key={service.title} style={serviceCard}>
                <div style={serviceIconWrap}>{service.icon}</div>
                <h3 style={{ marginTop: 0, marginBottom: 10 }}>{service.title}</h3>
                <p style={serviceDesc}>{service.desc}</p>
                <div style={servicePrice}>{service.price}</div>

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

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>What Clients Say</h2>
              <p style={sectionSubtext}>
                Added social proof to help buyers feel more confident.
              </p>
            </div>
          </div>

          <div className="testimonials-grid" style={testimonialsGrid}>
            {testimonials.map((item) => (
              <div key={item.name} style={testimonialCard}>
                <div style={stars}>★★★★★</div>
                <p style={testimonialText}>“{item.text}”</p>
                <div style={testimonialName}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>Trusted Broker Partners</h2>
              <p style={sectionSubtext}>
                Broker partners and sponsor slots for future collaboration.
              </p>
            </div>
          </div>

          <div className="broker-grid" style={brokerGrid}>
            {brokerSponsors.map((broker) => (
              <div
                key={broker.name}
                style={{
                  ...brokerCard,
                  ...(broker.available ? brokerCardAvailable : {}),
                }}
              >
                <div style={brokerTop}>
                  <div
                    style={{
                      ...brokerLogoWrap,
                      ...(broker.available ? brokerLogoWrapAvailable : {}),
                    }}
                  >
                    <img
                      src={broker.logo}
                      alt={broker.name}
                      style={{
                        ...brokerLogo,
                        ...(broker.available ? brokerLogoAvailable : {}),
                      }}
                    />
                  </div>

                  <div
                    style={{
                      ...brokerBadge,
                      ...(broker.available ? brokerBadgeAvailable : {}),
                    }}
                  >
                    {broker.badge}
                  </div>
                </div>

                <div>
                  <h3 style={brokerTitle}>{broker.name}</h3>
                  <p style={brokerDesc}>{broker.desc}</p>
                </div>

                <div style={brokerButtons}>
                  <a
                    href={broker.signupLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", flex: 1 }}
                  >
                    <button
                      style={
                        broker.available ? brokerGhostButton : brokerBlueButton
                      }
                      disabled={broker.available}
                    >
                      {broker.primaryCta}
                    </button>
                  </a>

                  <a
                    href={broker.videoLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", flex: 1 }}
                  >
                    <button
                      style={
                        broker.available ? brokerGhostButton : brokerVideoButton
                      }
                      disabled={broker.available}
                    >
                      {broker.available
                        ? broker.secondaryCta
                        : `▶ ${broker.secondaryCta}`}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-grid" style={infoGrid}>
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Pay via USDT (BEP20)</h2>
            <p style={bodyText}>
              Send payment to the wallet below, then message us on Telegram or
              WhatsApp with your payment proof.
            </p>

            <div style={walletBox}>{USDT_WALLET}</div>

            <button onClick={copyWallet} style={primaryButton}>
              Copy Wallet Address
            </button>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Contact Us</h2>
            <p style={bodyText}>
              For support, payment confirmation, mentoring inquiries, and partner
              concerns.
            </p>

            <div style={contactGrid}>
              <div className="contact-row" style={contactRow}>
                <span style={contactKey}>Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} style={contactLink}>
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="contact-row" style={contactRow}>
                <span style={contactKey}>Telegram</span>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  style={contactLink}
                >
                  @DontCopyMaster
                </a>
              </div>

              <div className="contact-row" style={contactRow}>
                <span style={contactKey}>WhatsApp</span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  style={contactLink}
                >
                  +639455023449
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={ctaCard}>
          <h2 style={ctaTitle}>Limited Slots Available</h2>
          <p style={ctaText}>
            Start with our EA products, join mentoring, or build an income stream
            through our partner program.
          </p>

          <div className="cta-actions" style={ctaActions}>
            <Link to="/buy-forex-ea">
              <button style={primaryButton}>Start with EA</button>
            </Link>

            <Link to="/mentoring">
              <button style={secondaryButton}>Apply for Mentoring</button>
            </Link>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button style={whatsappButton}>WhatsApp</button>
            </a>
          </div>
        </div>

        <a
          className="floating-whatsapp"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          style={floatingWhatsappWrap}
        >
          <div style={floatingWhatsappButton}>
            <div style={{ fontSize: 22 }}>💬</div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{ fontSize: 12, opacity: 0.9 }}>Chat with us</span>
              <span style={{ fontSize: 14, fontWeight: 800 }}>WhatsApp</span>
            </div>
          </div>
        </a>

        {showPopup && (
          <div className="popup-card" style={popupCard}>
            <p style={{ margin: "0 0 10px 0" }}>
              🔥 Someone just purchased an EA package
            </p>
            <Link to="/buy-forex-ea">
              <button style={blueButton}>Browse EA</button>
            </Link>
          </div>
        )}
      </div>

      <div className="home-sticky-bar" style={stickyBar}>
        <div className="home-sticky-inner" style={stickyInner}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <button className="home-sticky-button" style={stickyWhatsappButton}>
              💬 Buy via WhatsApp
            </button>
          </a>

          <div className="home-sticky-pill" style={stickyLimitedWrap}>
            🔥 Limited Slots
          </div>
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
  paddingBottom: 130,
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

const heroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 24,
  alignItems: "stretch",
  marginBottom: 28,
};

const glassCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  backdropFilter: "blur(10px)",
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
  fontSize: "clamp(32px, 6vw, 48px)",
  lineHeight: 1.06,
  margin: "12px 0",
};

const heroText = {
  color: "#cbd5e1",
  fontSize: 18,
  maxWidth: 650,
  marginTop: 0,
};

const countdownText = {
  color: "#facc15",
  fontWeight: 700,
  marginTop: 8,
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

const metricWrap = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
  marginTop: 20,
};

const metricCard = {
  background: "rgba(15, 23, 42, 0.85)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 14,
  padding: "14px 16px",
  minWidth: "min(170px, 100%)",
};

const metricLabel = {
  fontSize: 13,
  color: "#94a3b8",
};

const metricValue = {
  fontSize: 30,
  fontWeight: 800,
  color: "#22c55e",
};

const metricContact = {
  fontSize: 16,
  fontWeight: 700,
  wordBreak: "break-word",
};

const heroActions = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 22,
};

const chartHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
  gap: 10,
  flexWrap: "wrap",
};

const chartLabel = {
  color: "#22c55e",
  fontSize: 13,
};

const chartWrap = {
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid rgba(148,163,184,0.15)",
};

const chartNote = {
  margin: "12px 0 0 0",
  color: "#94a3b8",
  fontSize: 14,
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 16,
  marginBottom: 32,
};

const statCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 18,
  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
};

const statValue = {
  fontSize: 28,
  fontWeight: 800,
  color: "#38bdf8",
};

const statLabel = {
  color: "#94a3b8",
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

const servicesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: 18,
  alignItems: "stretch",
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

const serviceIconWrap = {
  width: 48,
  height: 48,
  borderRadius: 12,
  background: "rgba(56, 189, 248, 0.14)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  marginBottom: 14,
};

const serviceDesc = {
  color: "#cbd5e1",
  minHeight: 72,
  marginTop: 0,
  flex: 1,
};

const servicePrice = {
  fontWeight: 700,
  marginBottom: 16,
  color: "#f8fafc",
};

const testimonialsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 18,
};

const testimonialCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 18,
  padding: 20,
  boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
};

const stars = {
  color: "#facc15",
  fontSize: 18,
  marginBottom: 10,
};

const testimonialText = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  marginTop: 0,
};

const testimonialName = {
  color: "#7dd3fc",
  fontWeight: 700,
};

const brokerGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: 12,
};

const brokerCard = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  justifyContent: "space-between",
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 14,
  boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
  minHeight: 220,
};

const brokerCardAvailable = {
  border: "1px dashed rgba(56,189,248,0.35)",
  background: "rgba(15, 23, 42, 0.58)",
};

const brokerTop = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const brokerLogoWrap = {
  width: "100%",
  height: 56,
  borderRadius: 12,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,247,251,0.96))",
  border: "1px solid rgba(255,255,255,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), 0 8px 18px rgba(2,6,23,0.12)",
};

const brokerLogoWrapAvailable = {
  background: "rgba(255,255,255,0.08)",
  border: "1px dashed rgba(56,189,248,0.35)",
  boxShadow: "none",
};

const brokerLogo = {
  maxWidth: "80%",
  maxHeight: "70%",
  objectFit: "contain",
  display: "block",
  filter: "contrast(1.08) saturate(1.05)",
};

const brokerLogoAvailable = {
  opacity: 0.82,
  filter: "brightness(1.1)",
};

const brokerBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "flex-start",
  padding: "4px 8px",
  borderRadius: 999,
  background: "rgba(56,189,248,0.12)",
  color: "#7dd3fc",
  border: "1px solid rgba(56,189,248,0.24)",
  fontSize: 10,
  fontWeight: 800,
};

const brokerBadgeAvailable = {
  background: "rgba(250,204,21,0.10)",
  color: "#facc15",
  border: "1px solid rgba(250,204,21,0.24)",
};

const brokerTitle = {
  margin: 0,
  fontSize: 14,
  fontWeight: 800,
  lineHeight: 1.25,
};

const brokerDesc = {
  margin: "6px 0 0 0",
  color: "#94a3b8",
  fontSize: 12,
  lineHeight: 1.4,
};

const brokerButtons = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 8,
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 18,
  marginBottom: 34,
};

const bodyText = {
  color: "#cbd5e1",
};

const walletBox = {
  padding: 14,
  borderRadius: 12,
  background: "rgba(15, 23, 42, 0.7)",
  border: "1px solid rgba(148,163,184,0.18)",
  wordBreak: "break-all",
  marginBottom: 14,
};

const contactGrid = {
  display: "grid",
  gap: 12,
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

const contactKey = {
  color: "#94a3b8",
};

const contactLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
  wordBreak: "break-word",
};

const ctaCard = {
  textAlign: "center",
  background:
    "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.85))",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 22,
  padding: "34px 24px",
  marginBottom: 20,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
};

const ctaTitle = {
  marginTop: 0,
  fontSize: "clamp(28px, 5vw, 34px)",
};

const ctaText = {
  color: "#cbd5e1",
  maxWidth: 760,
  margin: "0 auto 18px auto",
};

const ctaActions = {
  display: "flex",
  justifyContent: "center",
  gap: 12,
  flexWrap: "wrap",
};

const popupCard = {
  position: "fixed",
  right: 20,
  bottom: 78,
  background: "rgba(15, 23, 42, 0.95)",
  border: "1px solid rgba(148,163,184,0.18)",
  borderRadius: 16,
  padding: 16,
  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
  maxWidth: "min(270px, calc(100vw - 40px))",
  zIndex: 1000,
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
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
  boxShadow: "0 10px 24px rgba(34,197,94,0.22)",
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

const brokerBlueButton = {
  width: "100%",
  background: "linear-gradient(135deg, #38bdf8, #2563eb)",
  color: "#ffffff",
  border: "none",
  padding: "8px 10px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
  fontSize: 12,
  boxShadow: "0 10px 20px rgba(37,99,235,0.20)",
};

const brokerVideoButton = {
  width: "100%",
  background:
    "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(30,41,59,0.96))",
  color: "#f8fafc",
  border: "1px solid rgba(56,189,248,0.28)",
  padding: "8px 10px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
  fontSize: 12,
  boxShadow: "0 10px 20px rgba(2,6,23,0.28)",
  animation: "videoPulse 2.6s infinite",
};

const brokerGhostButton = {
  width: "100%",
  background: "transparent",
  color: "#7dd3fc",
  border: "1px dashed rgba(56,189,248,0.35)",
  padding: "8px 10px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
  fontSize: 12,
};

const whatsappButton = {
  background: "#25D366",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const floatingWhatsappWrap = {
  position: "fixed",
  right: 20,
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

