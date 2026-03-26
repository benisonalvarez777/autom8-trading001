import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const TELEGRAM_LINK = "https://t.me/DontCopyMaster";
const WHATSAPP_NUMBER = "639455023449";
const CONTACT_EMAIL = "rich@automateforextrading.com";

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

function getYoutubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get("v");
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    return url;
  } catch {
    return url;
  }
}

export default function CopyTrading() {
  const [countdown, setCountdown] = useState(getTimeLeft());
  const [viewers, setViewers] = useState(14);
  const [showPopup, setShowPopup] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeProof, setActiveProof] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi, I want more details about your copy trading service."
      )}`,
    []
  );

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown(getTimeLeft());
    }, 1000);

    const viewerInterval = setInterval(() => {
      setViewers((v) => {
        let next = v + (Math.random() > 0.5 ? 1 : -1);
        if (next < 8) next = 8;
        if (next > 22) next = 22;
        return next;
      });
    }, 4000);

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 3500);

    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        setActiveProof(null);
        setShowVideoModal(false);
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      clearInterval(countdownTimer);
      clearInterval(viewerInterval);
      clearTimeout(popupTimer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const benefits = [
    {
      title: "Simpler Market Access",
      text: "Stay connected to the market without handling every detail manually.",
      icon: "🤖",
    },
    {
      title: "Calmer Decision Flow",
      text: "A more structured approach helps reduce hesitation and emotional pressure.",
      icon: "🧠",
    },
    {
      title: "Less Time on Charts",
      text: "Designed for people who want a more practical trading routine.",
      icon: "⏱",
    },
    {
      title: "Smooth Setup Experience",
      text: "The process is explained clearly so everything feels easier from the start.",
      icon: "🤝",
    },
  ];

  const bestFor = [
    { icon: "💼", text: "Busy professionals" },
    { icon: "🌱", text: "Newer traders" },
    { icon: "⏱", text: "Less screen time" },
    { icon: "🤝", text: "Easy onboarding" },
    { icon: "🛡", text: "Simple workflow" },
    { icon: "📈", text: "Practical setup" },
  ];

  const whatToExpect = [
    "A simpler starting point",
    "Clearer setup instructions",
    "Less manual pressure",
    "A more practical routine",
  ];

  const proofImages = [
    {
      src: "/images/copy-proof-1.png",
      title: "Performance Overview",
    },
    {
      src: "/images/copy-proof-2.png",
      title: "Growth Snapshot",
    },
    {
      src: "/images/copy-proof-3.png",
      title: "Account Proof",
    },
  ];

  const tutorialVideos = [
    {
      id: 1,
      title: "Copy Trading Setup Walkthrough FPG",
      subtitle: "Main Video",
      description: "Watch the guide before requesting access.",
      type: "video",
      src: "/videos/copytrading.mp4",
      badge: "Video Tutorial",
    },
    {
      id: 2,
      title: "Copy Trading M4U",
      subtitle: "YouTube Video",
      description: "Watch the second copy trading video here.",
      type: "youtube",
      src: getYoutubeEmbedUrl("https://www.youtube.com/watch?v=0qqyK9ok-DY"),
      badge: "Video Tutorial",
    },
    {
      id: 3,
      title: "Sponsor Video Slot 1",
      subtitle: "Reserved for Sponsor",
      description: "This video slot is available for sponsor placement.",
      type: "sponsor",
      badge: "Sponsor Slot",
    },
    {
      id: 4,
      title: "Sponsor Video Slot 2",
      subtitle: "Reserved for Sponsor",
      description: "This video slot is available for sponsor placement.",
      type: "sponsor",
      badge: "Sponsor Slot",
    },
    {
      id: 5,
      title: "Sponsor Video Slot 3",
      subtitle: "Reserved for Sponsor",
      description: "This video slot is available for sponsor placement.",
      type: "sponsor",
      badge: "Sponsor Slot",
    },
  ];

  const faqs = [
    {
      q: "Who is this best for?",
      a: "It is best for people who want a simpler and more practical way to stay involved in trading without spending long hours on charts.",
    },
    {
      q: "Do I need experience first?",
      a: "No. The process is designed to feel more approachable than fully manual trading, and setup help is included.",
    },
    {
      q: "How do I start?",
      a: "Message us on Telegram or WhatsApp and we will guide you through the next step.",
    },
    {
      q: "Why is onboarding done privately?",
      a: "A private setup flow keeps the process smoother, clearer, and easier to support properly.",
    },
  ];

  const openVideo = (video) => {
    if (video.type === "video" || video.type === "youtube") {
      setActiveVideo(video);
      setShowVideoModal(true);
    }
  };

  return (
    <div style={page}>
      <style>{`
        @keyframes stickyGlow {
          0% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
          50% { box-shadow: 0 0 24px rgba(37, 211, 102, 0.32); }
          100% { box-shadow: 0 0 0 rgba(37, 211, 102, 0); }
        }

        @keyframes ctaPulse {
          0% { box-shadow: 0 0 0 rgba(34,197,94,0); transform: translateY(0px); }
          50% { box-shadow: 0 0 24px rgba(34,197,94,0.25); transform: translateY(-1px); }
          100% { box-shadow: 0 0 0 rgba(34,197,94,0); transform: translateY(0px); }
        }

        @keyframes proofGlow {
          0% { box-shadow: 0 0 0 rgba(56,189,248,0); }
          50% { box-shadow: 0 0 20px rgba(56,189,248,0.18); }
          100% { box-shadow: 0 0 0 rgba(56,189,248,0); }
        }

        @keyframes playPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(56,189,248,0); }
          50% { transform: scale(1.04); box-shadow: 0 0 22px rgba(56,189,248,0.22); }
          100% { transform: scale(1); box-shadow: 0 0 0 rgba(56,189,248,0); }
        }

        @media (max-width: 1100px) {
          .copy-hero-grid,
          .copy-benefits-grid,
          .copy-bottom-grid,
          .copy-compare-grid {
            grid-template-columns: 1fr !important;
          }

          .copy-bestfor-row {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }

          .copy-proof-grid,
          .copy-expect-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .copy-video-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 768px) {
          .copy-shell {
            padding: 16px !important;
            padding-bottom: 120px !important;
          }

          .copy-hero-actions,
          .copy-cta-actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .copy-hero-actions a,
          .copy-hero-actions button,
          .copy-cta-actions a,
          .copy-cta-actions button {
            width: 100% !important;
          }

          .copy-bestfor-row,
          .copy-proof-grid,
          .copy-expect-grid,
          .copy-video-grid {
            grid-template-columns: 1fr !important;
          }

          .copy-floating-whatsapp {
            right: 12px !important;
            bottom: 146px !important;
          }

          .copy-popup {
            right: 12px !important;
            left: 12px !important;
            bottom: 78px !important;
            max-width: none !important;
          }

          .copy-sticky-bar {
            padding: 10px 12px !important;
          }

          .copy-sticky-inner {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          .copy-sticky-button {
            width: 100% !important;
          }

          .copy-sticky-pill {
            justify-content: center !important;
            text-align: center !important;
          }

          .copy-modal-image {
            max-width: calc(100vw - 24px) !important;
            max-height: 78vh !important;
          }

          .copy-video-frame {
            height: 180px !important;
          }

          .copy-video-preview {
            min-height: 220px !important;
          }
        }
      `}</style>

      <div className="copy-shell" style={{ maxWidth: 1240, margin: "0 auto" }}>
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
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={navLink}>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="copy-hero-grid" style={heroGrid}>
          <div style={heroWatermarkCard}>
            <div style={heroOverlay}></div>

            <div style={heroInnerContent}>
              <div style={pill}>Copy Trading</div>

              <h1 style={heroTitle}>
                Copy Trading Without the Stress of Manual Execution
              </h1>

              <p style={heroText}>
                A more practical way to stay involved in the market through a
                smoother experience, without the pressure of managing everything
                yourself.
              </p>

              <div style={countdownText}>
                ⏳ Access review closes today in: {countdown}
              </div>
              <div style={viewerCountStyle}>👥 {viewers} people viewing now</div>

              <div className="copy-hero-actions" style={heroActions}>
                <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                  <button style={primaryButtonGlow}>Request Access</button>
                </a>

                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <button style={whatsappButton}>Chat on WhatsApp</button>
                </a>

                <Link to="/">
                  <button style={ghostButton}>Back Home</button>
                </Link>
              </div>
            </div>
          </div>

          <div style={glassCard}>
            <div style={highlightBox}>
              <div style={highlightTitle}>A More Practical Way to Start</div>
              <div style={highlightText}>
                This page is built for people who want a straightforward process,
                lighter chart time, and a smoother setup flow.
              </div>
            </div>

            <div style={miniTrustGrid}>
              <div style={miniTrustCard}>✓ Simple onboarding flow</div>
              <div style={miniTrustCard}>✓ Clear setup guidance</div>
              <div style={miniTrustCard}>✓ Telegram support available</div>
              <div style={miniTrustCard}>✓ WhatsApp support available</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>Proof & Overview</h2>
              <p style={sectionSubtext}>
                Visual proof to help build confidence faster.
              </p>
            </div>
          </div>

          <div className="copy-proof-grid" style={proofGrid}>
            {proofImages.map((item) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveProof(item)}
                style={proofCardButton}
              >
                <div style={proofCardEqual}>
                  <div style={proofImageFixedWrap}>
                    <img
                      src={item.src}
                      alt={item.title}
                      style={proofImageFixed}
                    />
                  </div>
                  <div style={proofLabelRow}>
                    <span style={proofLabel}>{item.title}</span>
                    <span style={proofZoom}>Click to enlarge</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>Why People Choose This</h2>
              <p style={sectionSubtext}>
                Built for simplicity, ease, and a smoother experience.
              </p>
            </div>
          </div>

          <div className="copy-benefits-grid" style={benefitsGrid}>
            {benefits.map((item) => (
              <div key={item.title} style={benefitCard}>
                <div style={benefitIcon}>{item.icon}</div>
                <h3 style={{ marginTop: 0, marginBottom: 10 }}>{item.title}</h3>
                <p style={benefitText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>Who This Fits Best</h2>
              <p style={sectionSubtext}>
                Ideal for people who want a more efficient path.
              </p>
            </div>
          </div>

          <div className="copy-bestfor-row" style={bestForRow}>
            {bestFor.map((item) => (
              <div key={item.text} style={bestForPillCard}>
                <span style={bestForIcon}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>What You Can Expect</h2>
              <p style={sectionSubtext}>
                A smoother path from first inquiry to final setup.
              </p>
            </div>
          </div>

          <div className="copy-expect-grid" style={expectGrid}>
            {whatToExpect.map((item) => (
              <div key={item} style={expectCard}>
                <span style={expectCheck}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>How It Works</h2>
              <p style={sectionSubtext}>
                5 video slots. Slots 3, 4, and 5 are reserved for sponsor videos.
              </p>
            </div>
          </div>

          <div className="copy-video-grid" style={tutorialGrid}>
            {tutorialVideos.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openVideo(item)}
                style={{
                  ...tutorialCardButton,
                  cursor:
                    item.type === "video" || item.type === "youtube"
                      ? "pointer"
                      : "default",
                }}
              >
                <div style={tutorialCard}>
                  {item.type === "video" ? (
                    <div className="copy-video-preview" style={videoPreviewWrapSmall}>
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        style={videoPreview}
                      />
                      <div style={videoPreviewOverlay}></div>
                      <div style={videoPreviewContentSmall}>
                        <div style={videoPreviewPlaySmall}>▶</div>
                        <div style={videoPreviewBadge}>{item.badge}</div>
                      </div>
                    </div>
                  ) : item.type === "youtube" ? (
                    <div className="copy-video-preview" style={videoPreviewWrapSmall}>
                      <div style={youtubePreviewBox}>
                        <div style={youtubePreviewIcon}>▶</div>
                        <div style={youtubePreviewText}>YouTube Preview</div>
                      </div>
                      <div style={videoPreviewOverlay}></div>
                      <div style={videoPreviewContentSmall}>
                        <div style={videoPreviewPlaySmall}>▶</div>
                        <div style={videoPreviewBadge}>{item.badge}</div>
                      </div>
                    </div>
                  ) : (
                    <div style={sponsorCardPreview}>
                      <div style={sponsorBadge}>{item.badge}</div>
                      <div style={sponsorIcon}>🎥</div>
                      <div style={sponsorTitleSmall}>{item.subtitle}</div>
                    </div>
                  )}

                  <div style={tutorialTextWrap}>
                    <h3 style={tutorialTitle}>{item.title}</h3>
                    <p style={tutorialText}>{item.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 34 }}>
          <div style={sectionHeader}>
            <div>
              <h2 style={{ margin: 0 }}>Manual Trading vs Copy Trading</h2>
              <p style={sectionSubtext}>
                Why many traders prefer a more guided route.
              </p>
            </div>
          </div>

          <div className="copy-compare-grid" style={compareGrid}>
            <div style={compareCardBad}>
              <h3 style={{ marginTop: 0 }}>Manual Trading</h3>
              <div style={compareLine}>✖ More screen time</div>
              <div style={compareLine}>✖ More emotional pressure</div>
              <div style={compareLine}>✖ More decision fatigue</div>
              <div style={compareLine}>✖ Harder for busy schedules</div>
            </div>

            <div style={compareCardGood}>
              <h3 style={{ marginTop: 0 }}>Copy Trading</h3>
              <div style={compareLine}>✔ More practical flow</div>
              <div style={compareLine}>✔ Less emotional pressure</div>
              <div style={compareLine}>✔ Easier onboarding path</div>
              <div style={compareLine}>✔ Better for limited time</div>
            </div>
          </div>
        </div>

        <div className="copy-bottom-grid" style={bottomGrid}>
          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Why Traders Prefer This</h2>
            <p style={bodyText}>
              Many people want a more practical way to stay involved in the market
              without spending long hours on charts. Copy trading offers a smoother
              path for those who value ease, clarity, and a more manageable routine.
            </p>

            <div style={trustPanel}>
              <div style={trustPanelTitle}>What Makes It Appealing</div>
              <div style={trustLine}>• Less pressure on every decision</div>
              <div style={trustLine}>• More suitable for busy schedules</div>
              <div style={trustLine}>• Easier onboarding experience</div>
              <div style={trustLine}>• Simpler daily routine</div>
            </div>

            <div style={featuredTestimonial}>
              <div style={featuredStars}>★★★★★</div>
              <div style={featuredQuote}>
                “This feels much easier than handling everything manually because I
                do not need to stay on charts all day.”
              </div>
              <div style={featuredName}>— Copy Trading Client</div>
            </div>
          </div>

          <div style={glassCard}>
            <h2 style={{ marginTop: 0 }}>Frequently Asked Questions</h2>

            <div style={{ display: "grid", gap: 12 }}>
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.q} style={faqCard}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      style={faqButton}
                    >
                      <span style={faqQ}>{item.q}</span>
                      <span style={faqToggle}>{isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && <div style={faqA}>{item.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={ctaCard}>
          <div style={ctaMiniBadge}>Priority Access</div>
          <h2 style={ctaTitle}>Ready for a More Practical Trading Flow?</h2>

          <p style={ctaText}>
            Message us now and we will walk you through the next step clearly.
          </p>

          <div style={finalTrustBox}>
            <div style={finalTrustLine}>✓ Clear onboarding</div>
            <div style={finalTrustLine}>✓ Telegram support</div>
            <div style={finalTrustLine}>✓ WhatsApp support</div>
            <div style={finalTrustLine}>✓ Simple process</div>
          </div>

          <div className="copy-cta-actions" style={ctaActions}>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
              <button style={primaryButtonGlow}>Request Access</button>
            </a>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button style={whatsappButton}>Chat on WhatsApp</button>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`}>
              <button style={ghostButton}>Email Us</button>
            </a>
          </div>
        </div>

        <a
          className="copy-floating-whatsapp"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          style={floatingWhatsappWrap}
        >
          <div style={floatingWhatsappButton}>
            <div style={{ fontSize: 22 }}>💬</div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{ fontSize: 12, opacity: 0.9 }}>Need help?</span>
              <span style={{ fontSize: 14, fontWeight: 800 }}>WhatsApp</span>
            </div>
          </div>
        </a>

        {showPopup && (
          <div className="copy-popup" style={popupCard}>
            <p style={{ margin: "0 0 10px 0" }}>
              🔥 A trader just requested priority access
            </p>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
              <button style={blueButton}>Request Access</button>
            </a>
          </div>
        )}
      </div>

      <div className="copy-sticky-bar" style={stickyBar}>
        <div className="copy-sticky-inner" style={stickyInner}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <button className="copy-sticky-button" style={stickyWhatsappButton}>
              💬 Request Access on WhatsApp
            </button>
          </a>

          <div className="copy-sticky-pill" style={stickyLimitedWrap}>
            🔥 Copy Trading
          </div>
        </div>
      </div>

      {activeProof && (
        <div style={modalBackdrop} onClick={() => setActiveProof(null)}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setActiveProof(null)} style={modalClose}>
              ×
            </button>
            <img
              className="copy-modal-image"
              src={activeProof.src}
              alt={activeProof.title}
              style={modalImage}
            />
            <div style={modalCaption}>{activeProof.title}</div>
          </div>
        </div>
      )}

      {showVideoModal && activeVideo && (
        <div style={modalBackdrop} onClick={() => setShowVideoModal(false)}>
          <div style={videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              style={modalClose}
            >
              ×
            </button>

            {activeVideo.type === "youtube" ? (
              <iframe
                className="copy-video-frame"
                src={activeVideo.src}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  ...videoFrame,
                  width: "100%",
                  height: "180px",
                  border: "none",
                }}
              />
            ) : (
              <video
                className="copy-video-frame"
                src={activeVideo.src}
                controls
                playsInline
                preload="metadata"
                style={{
                  ...videoFrame,
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
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
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: 24,
  alignItems: "stretch",
  marginBottom: 20,
};

const glassCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 20,
  padding: 22,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  backdropFilter: "blur(10px)",
};

const heroWatermarkCard = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 20,
  border: "1px solid rgba(148,163,184,0.14)",
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  background:
    "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(11,23,48,0.92))",
  minHeight: 440,
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  backgroundImage: `url("/images/copytrading-watermark.png")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
  backgroundSize: "contain",
  opacity: 0.12,
  pointerEvents: "none",
};

const heroInnerContent = {
  position: "relative",
  zIndex: 2,
  padding: 22,
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
  maxWidth: 680,
  marginTop: 0,
  lineHeight: 1.7,
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

const heroActions = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 22,
};

const highlightBox = {
  background: "rgba(56,189,248,0.08)",
  border: "1px solid rgba(56,189,248,0.18)",
  borderRadius: 16,
  padding: 16,
  marginBottom: 16,
};

const highlightTitle = {
  fontSize: 18,
  fontWeight: 800,
  marginBottom: 8,
};

const highlightText = {
  color: "#cbd5e1",
  lineHeight: 1.7,
};

const miniTrustGrid = {
  display: "grid",
  gap: 10,
};

const miniTrustCard = {
  background: "rgba(15, 23, 42, 0.85)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 14,
  padding: 12,
  color: "#f8fafc",
  fontWeight: 700,
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

const proofGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 14,
  marginBottom: 18,
};

const proofCardButton = {
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  textAlign: "left",
};

const proofCardEqual = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 10,
  boxShadow: "0 10px 24px rgba(0,0,0,0.16)",
  animation: "proofGlow 3.2s infinite",
};

const proofImageFixedWrap = {
  borderRadius: 12,
  overflow: "hidden",
  border: "1px solid rgba(148,163,184,0.12)",
  background: "rgba(2,6,23,0.35)",
  aspectRatio: "16 / 10",
};

const proofImageFixed = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const proofLabelRow = {
  marginTop: 8,
  display: "flex",
  justifyContent: "space-between",
  gap: 8,
  alignItems: "center",
  flexWrap: "wrap",
};

const proofLabel = {
  color: "#cbd5e1",
  fontWeight: 700,
  fontSize: 13,
};

const proofZoom = {
  color: "#7dd3fc",
  fontSize: 12,
  fontWeight: 700,
};

const benefitsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 18,
};

const benefitCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 18,
  padding: 20,
  boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
};

const benefitIcon = {
  fontSize: 24,
  marginBottom: 10,
};

const benefitText = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  marginTop: 0,
};

const bestForRow = {
  display: "grid",
  gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
  gap: 12,
};

const bestForPillCard = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background:
    "linear-gradient(135deg, rgba(56,189,248,0.10), rgba(15,23,42,0.78))",
  border: "1px solid rgba(56,189,248,0.18)",
  borderRadius: 999,
  padding: "14px 12px",
  color: "#f8fafc",
  fontWeight: 800,
  textAlign: "center",
  minHeight: 54,
  boxShadow: "0 10px 24px rgba(0,0,0,0.16)",
};

const bestForIcon = {
  fontSize: 18,
};

const expectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 14,
};

const expectCard = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 16,
  padding: 16,
  fontWeight: 700,
};

const expectCheck = {
  color: "#22c55e",
  fontWeight: 900,
  fontSize: 18,
};

const tutorialGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: 14,
};

const tutorialCardButton = {
  background: "transparent",
  border: "none",
  padding: 0,
  textAlign: "left",
};

const tutorialCard = {
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148,163,184,0.14)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
  height: "100%",
};

const videoPreviewWrapSmall = {
  position: "relative",
  minHeight: 180,
  borderBottom: "1px solid rgba(148,163,184,0.14)",
  overflow: "hidden",
};

const videoPreview = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const videoPreviewOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(2,6,23,0.20) 0%, rgba(2,6,23,0.45) 50%, rgba(2,6,23,0.82) 100%)",
};

const videoPreviewContentSmall = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
};

const videoPreviewPlaySmall = {
  width: 54,
  height: 54,
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(56,189,248,0.16)",
  border: "1px solid rgba(56,189,248,0.30)",
  color: "#ffffff",
  fontSize: 22,
  fontWeight: 900,
  marginBottom: 12,
  animation: "playPulse 2.4s infinite",
  backdropFilter: "blur(6px)",
};

const videoPreviewBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(15,23,42,0.70)",
  border: "1px solid rgba(148,163,184,0.16)",
  color: "#7dd3fc",
  fontWeight: 800,
  fontSize: 12,
};

const youtubePreviewBox = {
  width: "100%",
  height: "100%",
  minHeight: 180,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, rgba(220,38,38,0.88), rgba(15,23,42,0.96))",
  color: "#fff",
};

const youtubePreviewIcon = {
  fontSize: 40,
  fontWeight: 900,
  marginBottom: 10,
};

const youtubePreviewText = {
  fontWeight: 800,
  fontSize: 18,
};

const sponsorCardPreview = {
  minHeight: 180,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  background:
    "linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.96))",
  borderBottom: "1px solid rgba(148,163,184,0.14)",
  textAlign: "center",
};

const sponsorBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(250,204,21,0.12)",
  color: "#facc15",
  border: "1px solid rgba(250,204,21,0.22)",
  fontWeight: 800,
  fontSize: 12,
  marginBottom: 12,
};

const sponsorIcon = {
  fontSize: 34,
  marginBottom: 10,
};

const sponsorTitleSmall = {
  color: "#cbd5e1",
  fontWeight: 800,
  fontSize: 14,
};

const tutorialTextWrap = {
  padding: 14,
};

const tutorialTitle = {
  margin: "0 0 8px 0",
  fontSize: 16,
  color: "#ffffff",
};

const tutorialText = {
  margin: 0,
  color: "#cbd5e1",
  fontSize: 13,
  lineHeight: 1.6,
};

const compareGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
};

const compareCardBad = {
  background: "rgba(127, 29, 29, 0.18)",
  border: "1px solid rgba(248,113,113,0.20)",
  borderRadius: 18,
  padding: 20,
};

const compareCardGood = {
  background: "rgba(20, 83, 45, 0.18)",
  border: "1px solid rgba(74,222,128,0.20)",
  borderRadius: 18,
  padding: 20,
};

const compareLine = {
  color: "#e2e8f0",
  lineHeight: 1.8,
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
  marginBottom: 34,
};

const bodyText = {
  color: "#cbd5e1",
  lineHeight: 1.8,
};

const trustPanel = {
  background: "rgba(15, 23, 42, 0.85)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 16,
  padding: 16,
  marginTop: 16,
};

const trustPanelTitle = {
  fontWeight: 800,
  marginBottom: 10,
};

const trustLine = {
  color: "#cbd5e1",
  lineHeight: 1.8,
};

const featuredTestimonial = {
  marginTop: 18,
  background: "rgba(56,189,248,0.07)",
  border: "1px solid rgba(56,189,248,0.18)",
  borderRadius: 16,
  padding: 16,
};

const featuredStars = {
  color: "#facc15",
  marginBottom: 8,
};

const featuredQuote = {
  color: "#e2e8f0",
  lineHeight: 1.7,
  fontStyle: "italic",
};

const featuredName = {
  color: "#7dd3fc",
  fontWeight: 700,
  marginTop: 10,
};

const faqCard = {
  background: "rgba(15, 23, 42, 0.85)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 14,
  padding: 0,
  overflow: "hidden",
};

const faqButton = {
  width: "100%",
  background: "transparent",
  border: "none",
  color: "#f8fafc",
  padding: "14px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  cursor: "pointer",
  textAlign: "left",
};

const faqQ = {
  fontWeight: 800,
};

const faqToggle = {
  fontSize: 22,
  lineHeight: 1,
  color: "#7dd3fc",
};

const faqA = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  padding: "0 16px 16px 16px",
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

const ctaMiniBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(250,204,21,0.12)",
  color: "#facc15",
  border: "1px solid rgba(250,204,21,0.22)",
  fontWeight: 800,
  marginBottom: 14,
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

const finalTrustBox = {
  maxWidth: 760,
  margin: "0 auto 18px auto",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 10,
};

const finalTrustLine = {
  background: "rgba(15, 23, 42, 0.58)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 12,
  padding: 12,
  color: "#e2e8f0",
  fontWeight: 700,
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

const primaryButtonGlow = {
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
  boxShadow: "0 10px 24px rgba(34,197,94,0.22)",
  animation: "ctaPulse 2.4s infinite",
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

const whatsappButton = {
  background: "#25D366",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
};

const floatingWhatsappWrap = {
  position: "fixed",
  right: 20,
  bottom: 142,
  zIndex: 1001,
  textDecoration: "none",
};

const floatingWhatsappButton = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "#25D366",
  color: "#fff",
  borderRadius: 999,
  padding: "12px 14px",
  boxShadow: "0 16px 34px rgba(0,0,0,0.28)",
  animation: "stickyGlow 2.8s infinite",
};

const stickyBar = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
  padding: "12px 18px",
  background: "rgba(2,6,23,0.92)",
  backdropFilter: "blur(10px)",
  borderTop: "1px solid rgba(148,163,184,0.14)",
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
  background: "#25D366",
  color: "#fff",
  border: "none",
  padding: "14px 18px",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: 800,
};

const stickyLimitedWrap = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(250,204,21,0.12)",
  color: "#facc15",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: 999,
  padding: "12px 16px",
  fontWeight: 800,
  whiteSpace: "nowrap",
};

const modalBackdrop = {
  position: "fixed",
  inset: 0,
  background: "rgba(2,6,23,0.78)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1200,
  padding: 16,
};

const modalContent = {
  position: "relative",
  maxWidth: "min(1000px, 100%)",
};

const videoModalContent = {
  position: "relative",
  width: "min(700px, 100%)",
  background: "#020617",
  borderRadius: 16,
  padding: 14,
  border: "1px solid rgba(148,163,184,0.14)",
};

const modalClose = {
  position: "absolute",
  top: 8,
  right: 8,
  width: 34,
  height: 34,
  borderRadius: 999,
  border: "none",
  background: "rgba(15,23,42,0.86)",
  color: "#fff",
  cursor: "pointer",
  fontSize: 22,
  zIndex: 2,
};

const modalImage = {
  display: "block",
  maxWidth: "min(1000px, calc(100vw - 32px))",
  maxHeight: "84vh",
  borderRadius: 14,
};

const modalCaption = {
  textAlign: "center",
  color: "#cbd5e1",
  marginTop: 10,
  fontWeight: 700,
};

const videoFrame = {
  borderRadius: 12,
  overflow: "hidden",
  background: "#000",
};