import React from "react";

const TELEGRAM_LINK =
  "https://t.me/DontCopyMaster?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Mentoring%20Program";

const BROKER_LINK =
  "https://portal.fortuneprime.com/getview?view=register&token=0pCE0B";

const VIDEO_LINKS = [
  { title: "Introduction To Forex", url: "/videos/Introduction to Forex.MP4" },
  { title: "Understanding Currency Pairs", url: "/videos/The Basics of Forex and Understanding Currency Pairs.MP4" },
  { title: "How to Open & Close Trades", url: "/videos/How to Open & Close Trades.MP4" },
  { title: "The Art of Technical Analysis", url: "/videos/The Art Of Technical Analysis.MP4" },
  { title: "The Art of Fundamental Analysis", url: "/videos/Technical And Fundamental Analysis.MP4" },
  { title: "Risk Management", url: "/videos/Mastering Forex Trading Essential Risk Management Strategies for Every Trader.MP4" },
  { title: "The Ultimate Trading Plan (Blueprint)", url: "/videos/Master the Market The Ultimate Trading Plan Blueprint.MP4" },
  { title: "5 Styles of Forex Trading Strategies", url: "/videos/5 Styles of Forex Trading Strategies.mp4" },
];

const BROKER_VIDEOS = [
  { title: "How to Deposit FPG", url: "https://www.youtube.com/watch?v=yMhZ-QZJ8_A" },
  { title: "How to Deposit M4U", url: "https://www.youtube.com/watch?v=kq31M4C6ZBw" },
  
];

const EBOOK_LINKS = {
  "Forex 101": "/ebooks/forex-101.pdf",
  "Forex 102": "/ebooks/forex-102.pdf",
  "MT5 Walkthrough": "/ebooks/mt5-walkthrough.pdf",
  "Technical Analysis": "/ebooks/technical-analysis.pdf",
  "Fundamental Analysis": "/ebooks/fundamental-analysis.pdf",
  "Complete Guide": "/ebooks/complete-guide.pdf",
};

const lessons = [
  {
    title: "Forex 101",
    desc: "Foundation level",
    points: [
      "What Forex is and how the market works",
      "Currency pairs, pips, lots, leverage",
      "Risk management basics",
      "Trading sessions and volatility",
    ],
  },
  {
    title: "Forex 102",
    desc: "Intermediate level",
    points: [
      "Market structure: trend, range, reversal",
      "Entry and exit planning",
      "Trade execution discipline",
      "Common beginner mistakes",
    ],
  },
  
  {
    title: "Technical Analysis",
    desc: "Chart-based strategy",
    points: [
      "Support and resistance",
      "Trendlines and direction",
      "Candlestick confirmations",
      "Entry timing and structure",
    ],
  },
  {
    title: "Fundamental Analysis",
    desc: "News and events",
    points: [
      "Economic calendar usage",
      "CPI, NFP, interest rates",
      "Gold (XAUUSD) reactions",
      "Combining fundamentals + technicals",
    ],
  },
];

const pricingTiers = [
  {
    title: "Basic",
    price: "$300",
    features: [
      "Full video access",
      "Downloadable eBooks",
      "Telegram support",
      "Self-paced learning",
    ],
  },
  {
    title: "Advanced",
    price: "$700",
    featured: true,
    features: [
      "Everything in Basic",
      "Live webinar access",
      "Chart breakdown sessions",
      "Priority Telegram support",
    ],
  },
  {
    title: "VIP",
    price: "$1,200",
    features: [
      "Everything in Advanced",
      "1-on-1 mentoring",
      "Priority support",
      "Trading plan guidance",
    ],
  },
];

const testimonials = [
  {
    name: "Trader PH",
    text: "The videos and ebooks made everything simple. I finally understand MT5 and gold trading.",
  },
  {
    name: "Client UAE",
    text: "Very structured program. The webinar helped me execute trades properly.",
  },
  {
    name: "Gold Trader MY",
    text: "Combination of video, ebook, and live session is perfect. Not confusing at all.",
  },
];

export default function Mentoring() {
  return (
    <div style={page}>
      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <div style={container}>
        <div style={topBar}>
          <a href="/" style={navLink}>Home</a>
          <a href="/buy-forex-ea" style={navLink}>EA</a>
          <a href="/apply" style={navLink}>Apply</a>
        </div>

        <div style={heroCard}>
          <div style={pill}>Mentoring Program</div>
          <h1 style={heroTitle}>Forex Learning System</h1>
          <p style={heroText}>
            This program combines self-learning through video tutorials,
            downloadable eBooks, and live webinar options for deeper support.
          </p>
          <a href="/apply" style={{ textDecoration: "none" }}>
            <button style={applyButton}>Apply for Mentoring</button>
          </a>
        </div>

        <div style={glassCard}>
          <div style={pill}>How It Works</div>
          <h2 style={sectionTitle}>Simple Student Flow</h2>
          <div style={stepGrid}>
            <div style={miniCard}>
              <h3 style={miniTitle}>Step 1</h3>
              <p style={miniText}>Submit your mentoring application.</p>
            </div>
            <div style={miniCard}>
              <h3 style={miniTitle}>Step 2</h3>
              <p style={miniText}>We review your level and recommend your path.</p>
            </div>
            <div style={miniCard}>
              <h3 style={miniTitle}>Step 3</h3>
              <p style={miniText}>You send payment and receive onboarding guidance.</p>
            </div>
          </div>
        </div>

        <div style={glassCard}>
          <div style={pill}>Mentoring Plans</div>
          <h2 style={sectionTitle}>Choose Your Access Tier</h2>

          <div style={cardGrid}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                style={{
                  ...tierCard,
                  ...(tier.featured
                    ? {
                        border: "1px solid rgba(56,189,248,0.5)",
                        background:
                          "linear-gradient(180deg, rgba(56,189,248,0.16), rgba(15,23,42,0.94))",
                      }
                    : {}),
                }}
              >
                {tier.featured && <div style={badge}>MOST POPULAR</div>}
                <h3 style={{ marginTop: 0, color: "#f8fafc" }}>{tier.title}</h3>
                <div style={price}>{tier.price}</div>

                <div style={{ display: "grid", gap: 10, marginBottom: 18 }}>
                  {tier.features.map((f) => (
                    <div key={f} style={featureText}>✔ {f}</div>
                  ))}
                </div>

                <a href="/apply" style={{ textDecoration: "none" }}>
                  <button style={tier.featured ? primaryButton : blueButton}>
                    Apply
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={glassCard}>
          <div style={pill}>Lesson Categories</div>
          <h2 style={sectionTitle}>Video + eBook Learning Modules</h2>

          <div style={cardGrid}>
            {lessons.map((lesson) => (
              <div key={lesson.title} style={tierCard}>
                <h3 style={{ marginTop: 0, color: "#f8fafc" }}>{lesson.title}</h3>
                <div style={lessonDesc}>{lesson.desc}</div>

                <div style={{ display: "grid", gap: 8 }}>
                  {lesson.points.map((p) => (
                    <div key={p} style={featureText}>✔ {p}</div>
                  ))}
                </div>

                <div style={{ marginTop: 14 }}>
                  <a href={EBOOK_LINKS[lesson.title]} download>
                    <button style={blueButton}>Download eBook</button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <a href={EBOOK_LINKS["Complete Guide"]} download>
              <button style={primaryButton}>Download Full Course Guide</button>
            </a>
          </div>
        </div>

        <div style={glassCard}>
          <div style={pill}>Video Library</div>
          <h2 style={sectionTitle}>Self-Learning Tutorials</h2>
          <p style={sectionText}>
            Replace these placeholder links with your real lesson videos anytime.
          </p>

          <div style={videoGrid}>
            {VIDEO_LINKS.map((video) => (
              <div key={video.title} style={miniCard}>
                <div style={videoTitle}>{video.title}</div>
                <iframe
                  width="100%"
                  height="200"
                  src={video.url.replace("watch?v=", "embed/")}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  style={{ borderRadius: 10 }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        <div style={glassCard}>
          <div style={pill}>Broker Setup</div>
          <h2 style={sectionTitle}>Fortune Prime Global Onboarding</h2>
          <p style={sectionText}>
            Open your account and learn the deposit, withdrawal, and broker
            background process through the guides below.
          </p>

          <a href={BROKER_LINK} target="_blank" rel="noreferrer">
            <button style={blueButton}>Open Broker Account</button>
          </a>

          <div style={videoGrid}>
            {BROKER_VIDEOS.map((video) => (
              <div key={video.title} style={miniCard}>
                <div style={videoTitle}>{video.title}</div>
                <iframe
                  width="100%"
                  height="200"
                  src={video.url.replace("watch?v=", "embed/")}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  style={{ borderRadius: 10 }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        <div style={glassCard}>
          <div style={pill}>Testimonials</div>
          <h2 style={sectionTitle}>What Students Say</h2>

          <div style={cardGrid}>
            {testimonials.map((t) => (
              <div key={t.name} style={tierCard}>
                <p style={testimonialText}>“{t.text}”</p>
                <b style={studentName}>{t.name}</b>
              </div>
            ))}
          </div>
        </div>

        <div style={glassCard}>
          <div style={pill}>Webinar Option</div>
          <h2 style={sectionTitle}>Join Live Sessions</h2>
          <p style={sectionText}>
            Advanced and VIP plans include live webinar support for chart review,
            execution guidance, and Q&A.
          </p>
          <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
            <button style={primaryButton}>Contact for Webinar</button>
          </a>
        </div>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #071120 0%, #0b1730 55%, #09101f 100%)",
  padding: 24,
  fontFamily: "Arial, sans-serif",
  position: "relative",
  overflow: "hidden",
};

const glowOne = {
  position: "absolute",
  width: 360,
  height: 360,
  borderRadius: "50%",
  background: "rgba(56, 189, 248, 0.10)",
  filter: "blur(90px)",
  top: 40,
  left: 60,
};

const glowTwo = {
  position: "absolute",
  width: 320,
  height: 320,
  borderRadius: "50%",
  background: "rgba(34, 197, 94, 0.08)",
  filter: "blur(90px)",
  bottom: 40,
  right: 60,
};

const container = {
  maxWidth: 1180,
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
};

const topBar = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
  marginBottom: 18,
};

const navLink = {
  color: "#7dd3fc",
  textDecoration: "none",
  fontWeight: 700,
};

const heroCard = {
  background: "rgba(15, 23, 42, 0.82)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 22,
  padding: 28,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  backdropFilter: "blur(10px)",
};

const glassCard = {
  background: "rgba(15, 23, 42, 0.82)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 22,
  padding: 28,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  backdropFilter: "blur(10px)",
  marginTop: 22,
};

const heroTitle = {
  color: "#f8fafc",
  margin: "10px 0",
  fontSize: "clamp(32px, 6vw, 42px)",
};

const heroText = {
  color: "#cbd5e1",
  fontSize: 18,
  margin: 0,
  maxWidth: 820,
  lineHeight: 1.6,
};

const sectionTitle = {
  color: "#f8fafc",
  marginTop: 12,
  marginBottom: 10,
};

const sectionText = {
  color: "#cbd5e1",
  lineHeight: 1.6,
  marginTop: 0,
};

const pill = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(56, 189, 248, 0.12)",
  color: "#7dd3fc",
  fontSize: 13,
};

const stepGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
  marginTop: 18,
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 16,
  marginTop: 18,
};

const videoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 18,
  marginTop: 16,
};

const miniCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 18,
  boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
  color: "#f8fafc",
};

const miniTitle = {
  color: "#f8fafc",
  marginTop: 0,
};

const miniText = {
  color: "#cbd5e1",
  marginBottom: 0,
  lineHeight: 1.5,
};

const tierCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 18,
  padding: 20,
  boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
  position: "relative",
  color: "#f8fafc",
};

const price = {
  fontSize: 32,
  fontWeight: 800,
  marginBottom: 14,
  color: "#f8fafc",
};

const featureText = {
  color: "#cbd5e1",
  lineHeight: 1.5,
};

const lessonDesc = {
  color: "#7dd3fc",
  marginBottom: 10,
};

const testimonialText = {
  color: "#cbd5e1",
  lineHeight: 1.6,
  marginTop: 0,
};

const studentName = {
  color: "#7dd3fc",
};

const videoTitle = {
  marginBottom: 8,
  color: "#7dd3fc",
  fontWeight: 700,
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

const primaryButton = {
  padding: "12px 18px",
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 10px 24px rgba(34,197,94,0.22)",
};

const blueButton = {
  padding: "12px 18px",
  borderRadius: 12,
  border: "none",
  background: "#38bdf8",
  color: "#081226",
  fontWeight: 700,
  cursor: "pointer",
};

const applyButton = {
  padding: "14px 20px",
  borderRadius: 12,
  border: "none",
  background: "#38bdf8",
  color: "#081226",
  fontWeight: 700,
  cursor: "pointer",
  marginTop: 18,
};