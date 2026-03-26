import React, { useState } from "react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    telegram: "",
    experience_level: "Beginner",
    knowledge: [],
  });

  const [result, setResult] = useState(null);

  const topics = [
    "Forex Basics",
    "Technical Analysis",
    "Fundamental Analysis",
    "MT5 Usage",
    "Risk Management",
  ];

  const toggleKnowledge = (item) => {
    setForm((prev) => ({
      ...prev,
      knowledge: prev.knowledge.includes(item)
        ? prev.knowledge.filter((k) => k !== item)
        : [...prev.knowledge, item],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.full_name || !form.email) {
      setResult({
        recommendedTier: "Incomplete",
        guidance: "Please fill in your full name and email first.",
      });
      return;
    }

    const knowledgeCount = form.knowledge.length;
    let recommendedTier = "Basic";
    let guidance =
      "You need to start with the Basic tier to build your foundation before moving to Advanced and then VIP.";

    if (form.experience_level === "Intermediate" && knowledgeCount >= 3) {
      recommendedTier = "Basic (Fast-track to Advanced)";
      guidance =
        "You have a workable starting point. You still begin with Basic, then you may progress faster to Advanced after review.";
    }

    if (form.experience_level === "Advanced" && knowledgeCount >= 4) {
      recommendedTier = "Basic (Advanced path later)";
      guidance =
        "You show strong knowledge, but all students must still begin with Basic first, then move to Advanced, and later VIP.";
    }

    setResult({ recommendedTier, guidance });

    const message =
      `Mentoring Application\n` +
      `Name: ${form.full_name}\n` +
      `Email: ${form.email}\n` +
      `Telegram: ${form.telegram}\n` +
      `Experience: ${form.experience_level}\n` +
      `Knowledge: ${form.knowledge.join(", ")}\n` +
      `Recommended Tier: ${recommendedTier}\n` +
      `Guidance: ${guidance}`;

    const telegramUrl =
      `https://t.me/DontCopyMaster?text=${encodeURIComponent(message)}`;

    const emailUrl =
      `mailto:rich@automateforextrading.com?subject=${encodeURIComponent(
        "Mentoring Application"
      )}&body=${encodeURIComponent(message)}`;

    window.open(telegramUrl, "_blank");
    window.location.href = emailUrl;
  };

  return (
    <div style={page}>
      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <div style={container}>
        <div style={topBar}>
          <a href="/" style={navLink}>Home</a>
          <a href="/mentoring" style={navLink}>Mentoring</a>
        </div>

        <div style={card}>
          <div style={pill}>Mentoring Application</div>
          <h1 style={title}>Apply for Mentoring</h1>
          <p style={subtitle}>
            Fill out the form below so we can assess your level and guide you to
            the correct starting path.
          </p>

          <form onSubmit={handleSubmit} style={formGrid}>
            <input
              style={input}
              placeholder="Full Name"
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            />

            <input
              style={input}
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              style={input}
              placeholder="Telegram Username"
              value={form.telegram}
              onChange={(e) => setForm({ ...form, telegram: e.target.value })}
            />

            <select
              style={input}
              value={form.experience_level}
              onChange={(e) =>
                setForm({ ...form, experience_level: e.target.value })
              }
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <div style={checkCard}>
              <div style={checkTitle}>Forex Knowledge Checklist</div>
              <div style={checkSubtitle}>
                Select the areas you already understand.
              </div>

              <div style={checkGrid}>
                {topics.map((topic) => (
                  <label key={topic} style={checkLabel}>
                    <input
                      type="checkbox"
                      checked={form.knowledge.includes(topic)}
                      onChange={() => toggleKnowledge(topic)}
                      style={checkbox}
                    />
                    <span>{topic}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" style={button}>
              Submit Application
            </button>
          </form>

          {result && (
            <div style={messageBox}>
              <div style={{ color: "#7dd3fc", fontWeight: 700, marginBottom: 8 }}>
                Recommended Tier: {result.recommendedTier}
              </div>
              <div style={{ color: "#cbd5e1", lineHeight: 1.6 }}>
                {result.guidance}
              </div>
            </div>
          )}
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
  width: 340,
  height: 340,
  borderRadius: "50%",
  background: "rgba(56, 189, 248, 0.10)",
  filter: "blur(80px)",
  top: 40,
  left: 80,
};

const glowTwo = {
  position: "absolute",
  width: 300,
  height: 300,
  borderRadius: "50%",
  background: "rgba(34, 197, 94, 0.08)",
  filter: "blur(80px)",
  bottom: 40,
  right: 80,
};

const container = {
  maxWidth: 760,
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

const card = {
  background: "rgba(15, 23, 42, 0.82)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 22,
  padding: 28,
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
  marginBottom: 14,
};

const title = {
  color: "#f8fafc",
  margin: "0 0 10px 0",
  fontSize: "clamp(28px, 5vw, 38px)",
};

const subtitle = {
  color: "#cbd5e1",
  marginTop: 0,
  marginBottom: 22,
  lineHeight: 1.6,
};

const formGrid = {
  display: "grid",
  gap: 14,
};

const input = {
  width: "100%",
  padding: 14,
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.18)",
  backgroundColor: "#020617",
  color: "#ffffff",
  outline: "none",
  boxSizing: "border-box",
};

const checkCard = {
  background: "rgba(2, 6, 23, 0.9)",
  padding: 16,
  borderRadius: 16,
  border: "1px solid rgba(148,163,184,0.18)",
};

const checkTitle = {
  color: "#7dd3fc",
  fontWeight: 700,
  marginBottom: 6,
};

const checkSubtitle = {
  color: "#94a3b8",
  fontSize: 14,
  marginBottom: 12,
};

const checkGrid = {
  display: "grid",
  gap: 10,
};

const checkLabel = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "#cbd5e1",
};

const checkbox = {
  accentColor: "#38bdf8",
};

const button = {
  width: "100%",
  padding: 14,
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "#ffffff",
  fontWeight: 700,
  cursor: "pointer",
  marginTop: 4,
  boxShadow: "0 10px 24px rgba(34,197,94,0.22)",
};

const messageBox = {
  marginTop: 16,
  padding: 14,
  borderRadius: 12,
  background: "rgba(15, 23, 42, 0.7)",
  border: "1px solid rgba(56,189,248,0.25)",
};