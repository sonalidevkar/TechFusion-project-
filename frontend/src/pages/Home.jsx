
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";

import {
  ArrowRight,
  Sparkles,
  Search,
  Calculator,
  Handshake,
  ClipboardCheck,
  BookOpen,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Landmark,
  Target,
  Users,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Star,
  ChevronRight,
  MapPin,
} from "lucide-react";

/* ================================
   FEATURE DATA
================================ */

const features = [
  {
    number: "01",
    icon: Sparkles,
    title: "AI Scheme Matcher",
    titleKey: "aiSchemeMatcher",
    description:
      "Discover government schemes based on your business, location, category and financial needs.",
    descriptionKey: "aiSchemeDescription",
    link: "/match-scheme",
    action: "Find Your Match",
    actionKey: "findYourMatch",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Financial Calculator",
    titleKey: "financialCalculator",
    description:
      "Calculate loan EMI, interest and repayment amounts to plan your finances.",
    descriptionKey: "calculatorDescription",
    link: "/calculator",
    action: "Calculate Now",
    actionKey: "calculateNow",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Find a Partner",
    titleKey: "findPartner",
    description:
      "Find banks, support centres and organizations that can guide your journey.",
    descriptionKey: "partnerDescription",
    link: "/partner",
    action: "Find Support",
    actionKey: "findSupport",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Apply & Track",
    titleKey: "applyTrack",
    description:
      "Organize your scheme applications and follow their progress easily.",
    descriptionKey: "trackingDescription",
    link: "/track",
    action: "Track Application",
    actionKey: "trackApplication",
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Financial Literacy",
    titleKey: "financialLiteracy",
    description:
      "Learn about loans, savings, credit, budgeting and financial planning.",
    descriptionKey: "literacyDescription",
    link: "/literacy",
    action: "Start Learning",
    actionKey: "startLearning",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Eligibility Checker",
    titleKey: "eligibilityChecker",
    description:
      "Check whether your profile may meet government scheme requirements.",
    descriptionKey: "eligibilityDescription",
    link: "/eligibility-checker",
    action: "Check Eligibility",
    actionKey: "step3",
  },
];

/* ================================
   HOW IT WORKS
================================ */

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Tell Us About You",
    titleKey: "step1",
    description:
      "Enter your location, business type, category and financial needs.",
    descriptionKey: "step1Description",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Your Match",
    titleKey: "step2",
    description:
      "Explore schemes recommended according to your profile.",
    descriptionKey: "step2Description",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Check Eligibility",
    titleKey: "step3",
    description:
      "Understand eligibility conditions and required documents.",
    descriptionKey: "step3Description",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Get Guidance",
    titleKey: "step4",
    description:
      "Find useful information and support for your application.",
    descriptionKey: "step4Description",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Apply & Grow",
    titleKey: "step5",
    description:
      "Visit official portals, apply and move towards business growth.",
    descriptionKey: "step5Description",
  },
];

/* ================================
   PROJECT VISION
================================ */

const vision = [
  {
    icon: Users,
    title: "Inclusive",
    titleKey: "inclusive",
    text: "Support for Entrepreneurs",
    textKey: "inclusiveDescription",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    titleKey: "aiPowered",
    text: "Smart Recommendations",
    textKey: "aiPoweredDescription",
  },
  {
    icon: Landmark,
    title: "Multiple Opportunities",
    titleKey: "multiple",
    text: "Government Opportunities",
    textKey: "multipleDescription",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    titleKey: "growthFocused",
    text: "Better Business Access",
    textKey: "growthDescription",
  },
];

/* ================================
   DOCUMENT TRANSLATIONS
================================ */

const documentVerificationLabels = {
  en: {
    title: "Document Verification",
    description:
      "Upload an image to extract document details and review basic checks before applying.",
    action: "Check Document",
  },
  hi: {
    title: "दस्तावेज़ जाँच",
    description:
      "आवेदन से पहले दस्तावेज़ की जानकारी निकालें और प्रारंभिक जाँच करें।",
    action: "दस्तावेज़ जाँचें",
  },
  mr: {
    title: "कागदपत्र तपासणी",
    description:
      "अर्ज करण्यापूर्वी कागदपत्रातील माहिती वाचा आणि प्राथमिक तपासणी करा.",
    action: "कागदपत्र तपासा",
  },
};

/* ================================
   FEEDBACK TRANSLATIONS
================================ */

const feedbackLabels = {
  en: {
    nav: "Feedback",
    eyebrow: "YOUR VOICE MATTERS",
    title: "Help Us Improve YojanaSathi AI",
    description:
      "Share your experience, answer five quick questions and rate our platform. Your feedback helps us make scheme discovery easier for everyone.",
    button: "Give Feedback",
  },
  mr: {
    nav: "अभिप्राय",
    eyebrow: "तुमचे मत महत्त्वाचे आहे",
    title: "योजनासाथी एआय सुधारण्यासाठी मदत करा",
    description:
      "तुमचा अनुभव सांगा, पाच सोप्या प्रश्नांची उत्तरे द्या आणि आमच्या प्लॅटफॉर्मला रेटिंग द्या.",
    button: "अभिप्राय द्या",
  },
  hi: {
    nav: "फीडबैक",
    eyebrow: "आपकी राय महत्वपूर्ण है",
    title: "योजनासाथी एआई को बेहतर बनाने में मदद करें",
    description:
      "अपना अनुभव साझा करें, पांच आसान सवालों के जवाब दें और हमारे प्लेटफॉर्म को रेटिंग दें।",
    button: "फीडबैक दें",
  },
};

/* ================================
   TRANSLATION HELPER
================================ */

function getText(t, key, fallback) {
  const translated = typeof t === "function" ? t(key) : "";
  return translated && translated !== key ? translated : fallback;
}

/* ================================
   INDIA IMAGE COMPONENT
================================ */

function IndiaMapIllustration() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="ys-india-art">
      {!imageError ? (
        <img
          className="ys-india-banner-image"
          src="/images/yojanasathi-india-home.png"
          alt="India map showing women entrepreneurs, farmers and young innovators"
          loading="eager"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="ys-image-fallback">
          <div className="ys-fallback-heading">
            <span>🇮🇳</span>
            <div>
              <strong>Empowering India's Entrepreneurs</strong>
              <small>Opportunities for every corner of India</small>
            </div>
          </div>

          <div className="ys-fallback-map">
            <div className="ys-fallback-circle circle-one" />
            <div className="ys-fallback-circle circle-two" />

            <div className="ys-fallback-india">
              <span>🇮🇳</span>
              <strong>INDIA</strong>
              <small>One Nation, Many Opportunities</small>
            </div>

            <div className="ys-fallback-person person-one">
              <span>👩🏻‍💼</span>
              <strong>Women Entrepreneurs</strong>
              <small>Business Opportunities</small>
            </div>

            <div className="ys-fallback-person person-two">
              <span>👨🏽‍🌾</span>
              <strong>Farmers</strong>
              <small>Financial Support</small>
            </div>

            <div className="ys-fallback-person person-three">
              <span>👨🏻‍💻</span>
              <strong>Young Innovators</strong>
              <small>Startup Growth</small>
            </div>

            <div className="ys-fallback-location">
              <MapPin size={16} />
              Across India
            </div>
          </div>
        </div>
      )}

      <div className="ys-image-caption">
        <span>🇮🇳</span>
        <div>
          <strong>Empowering India's Entrepreneurs</strong>
          <small>Opportunities for every corner of India</small>
        </div>
      </div>
    </div>
  );
}

/* ================================
   HOME PAGE
================================ */

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  const documentText =
    documentVerificationLabels[language] ||
    documentVerificationLabels.en;

  const feedbackText =
    feedbackLabels[language] || feedbackLabels.en;

  const benefits = [
    "benefit1",
    "benefit2",
    "benefit3",
    "benefit4",
  ];

  const navTranslations = {
    Home: "home",
    Schemes: "schemes",
    "AI Match": "aiMatch",
    "Eligibility Checker": "eligibility",
    Calculator: "calculator",
    "Find a Partner": "partner",
    "Track Application": "tracking",
    "Financial Literacy": "literacy",
    About: "about",
  };

  const navigationItems = [
    ["Home", "/"],
    ["Schemes", "/schemes"],
    ["AI Match", "/match-scheme"],
    ["Eligibility Checker", "/eligibility-checker"],
    ["Calculator", "/calculator"],
    ["Find a Partner", "/partner"],
    ["Track Application", "/track"],
    ["Financial Literacy", "/literacy"],
    ["About", "/about"],
    ["Feedback", "/feedback"],
  ];

  return (
    <main className="ys-home">
      <style>{`

        /* ================= NAVBAR ================= */

        .ys-feature-navbar {
          background: #ffffff;
          border-top: 4px solid #ff9933;
          border-bottom: 3px solid #183b68;
          position: relative;
          z-index: 100;
        }

        .ys-feature-navbar-inner {
          width: 100%;
          max-width: none;
          margin: auto;
          padding: 12px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: nowrap;
        }

        .ys-navbar-brand {
          font-weight: 850;
          color: #183b68;
          white-space: nowrap;
          font-size: 19px;
          text-decoration: none;
        }

        .ys-navbar-brand span {
          color: #e77f16;
        }

        .ys-navbar-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 2px;
          margin-left: auto;
          min-width: 0;
          flex: 1 1 auto;
          overflow-x: auto;
          flex-wrap: nowrap;
          scrollbar-width: thin;
        }

        .ys-navbar-link {
          padding: 10px 7px;
          color: #35445a;
          font-size: 13px;
          font-weight: 650;
          white-space: nowrap;
          text-decoration: none;
          border-radius: 7px;
        }

        .ys-navbar-link:hover,
        .ys-navbar-active {
          background: #fff1e2;
          color: #b9600b;
        }

        .ys-navbar-account {
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ys-navbar-account a {
          text-decoration: none;
          color: #183b68;
          font-weight: 700;
          font-size: 14px;
        }

        .ys-navbar-account .ys-navbar-register {
          background: #183b68;
          color: #ffffff;
          padding: 10px 13px;
          border-radius: 7px;
        }

        .ys-language-picker select {
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          color: #183b68;
          background: #ffffff;
          border: 1px solid #dce3ec;
          border-radius: 8px;
          padding: 9px 5px;
          max-width: 95px;
          cursor: pointer;
        }

        /* LOGIN BUTTON */

        .ys-home-login-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 17px;
          background: #ffffff;
          color: #07845b !important;
          border: 1.5px solid #07845b;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 750;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .ys-home-login-link:hover {
          background: #07845b;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 14px rgba(7, 132, 91, 0.18);
        }

        /* ================= INDIA IMAGE ================= */

        .ys-hero-visual {
          width: 100%;
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ys-india-art {
          width: 100%;
          max-width: 650px;
          min-height: 500px;
          position: relative;
          overflow: hidden;
          border: 1px solid #f0dfcb;
          border-radius: 26px;
          background: linear-gradient(
            135deg,
            #fffaf3,
            #ffffff 55%,
            #edf8f1
          );
          box-shadow: 0 22px 55px rgba(24, 59, 104, .13);
        }

        .ys-india-banner-image {
          display: block;
          width: 100%;
          height: 500px;
          object-fit: cover;
          object-position: center;
          border-radius: 25px;
        }

        .ys-image-caption {
          position: absolute;
          left: 18px;
          top: 18px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, .94);
          border: 1px solid rgba(255, 153, 51, .35);
          border-radius: 13px;
          box-shadow: 0 8px 24px rgba(24, 59, 104, .1);
          backdrop-filter: blur(8px);
          color: #183b68;
        }

        .ys-image-caption > span {
          font-size: 25px;
        }

        .ys-image-caption strong,
        .ys-image-caption small {
          display: block;
        }

        .ys-image-caption strong {
          font-size: 14px;
        }

        .ys-image-caption small {
          font-size: 11px;
          margin-top: 3px;
          color: #64748b;
        }

        /* ================= IMAGE FALLBACK ================= */

        .ys-image-fallback {
          min-height: 500px;
          padding: 20px;
          background: linear-gradient(
            135deg,
            #fff7eb,
            #ffffff,
            #edf8f1
          );
        }

        .ys-fallback-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #183b68;
        }

        .ys-fallback-heading > span {
          font-size: 30px;
        }

        .ys-fallback-heading strong,
        .ys-fallback-heading small {
          display: block;
        }

        .ys-fallback-heading small {
          color: #64748b;
          margin-top: 5px;
        }

        .ys-fallback-map {
          position: relative;
          min-height: 390px;
          margin-top: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            #fff7eb,
            #edf8f1
          );
        }

        .ys-fallback-india {
          z-index: 2;
          width: 190px;
          height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 3px solid #183b68;
          border-radius: 48% 38% 55% 40%;
          background: linear-gradient(
            150deg,
            #ff9933 0%,
            #ffffff 48%,
            #138808 100%
          );
          color: #183b68;
          transform: rotate(-8deg);
          box-shadow: 0 15px 30px rgba(24, 59, 104, .15);
        }

        .ys-fallback-india span {
          font-size: 48px;
        }

        .ys-fallback-india strong {
          font-size: 23px;
        }

        .ys-fallback-india small {
          font-size: 10px;
          text-align: center;
        }

        .ys-fallback-circle {
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          filter: blur(2px);
        }

        .circle-one {
          top: 15px;
          right: 15px;
          background: rgba(255, 153, 51, .2);
        }

        .circle-two {
          bottom: 10px;
          left: 10px;
          background: rgba(19, 136, 8, .13);
        }

        .ys-fallback-person {
          position: absolute;
          z-index: 3;
          width: 140px;
          padding: 12px 7px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          text-align: center;
          background: #ffffff;
          border: 1px solid #f0dfcb;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(24, 59, 104, .1);
        }

        .ys-fallback-person span {
          font-size: 27px;
        }

        .ys-fallback-person strong {
          font-size: 11px;
          color: #183b68;
        }

        .ys-fallback-person small {
          font-size: 10px;
          color: #64748b;
        }

        .ys-fallback-person.person-one {
          top: 15px;
          left: 10px;
        }

        .ys-fallback-person.person-two {
          top: 42%;
          right: 10px;
        }

        .ys-fallback-person.person-three {
          bottom: 12px;
          left: 10px;
        }

        .ys-fallback-location {
          position: absolute;
          right: 12px;
          bottom: 12px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 13px;
          color: #ffffff;
          background: #183b68;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 700;
        }

        /* ================= CTA ================= */

        .ys-cta-box {
          background: linear-gradient(
            120deg,
            #17345f 0%,
            #234b78 58%,
            #52677e 100%
          ) !important;
        }

        /* ================= FEEDBACK ================= */

        .ys-home-feedback {
          padding: 85px 0;
          background: linear-gradient(
            135deg,
            #fff7ed 0%,
            #ffffff 50%,
            #eff6ff 100%
          );
        }

        .ys-home-feedback-card {
          max-width: 850px;
          margin: 0 auto;
          padding: 55px 45px;
          text-align: center;
          background: #ffffff;
          border: 1px solid #f1dfcc;
          border-radius: 25px;
          box-shadow: 0 18px 50px rgba(24, 59, 104, 0.10);
          position: relative;
          overflow: hidden;
        }

        .ys-home-feedback-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(
            90deg,
            #ff9933 0%,
            #ffffff 50%,
            #138808 100%
          );
        }

        .ys-home-feedback-icon {
          width: 68px;
          height: 68px;
          margin: 0 auto 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e87920;
          background: #fff1df;
          border-radius: 20px;
        }

        .ys-home-feedback-eyebrow {
          display: inline-block;
          margin-bottom: 13px;
          color: #e87920;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .ys-home-feedback-card h2 {
          margin: 0 auto 15px;
          max-width: 650px;
          color: #183b68;
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.25;
          font-weight: 850;
        }

        .ys-home-feedback-card p {
          max-width: 650px;
          margin: 0 auto 28px;
          color: #64748b;
          font-size: 16px;
          line-height: 1.8;
        }

        .ys-home-feedback-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 14px 27px;
          color: #ffffff;
          background: #e87920;
          border-radius: 10px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 750;
          box-shadow: 0 8px 20px rgba(232, 121, 32, 0.22);
          transition: all 0.25s ease;
        }

        .ys-home-feedback-button:hover {
          background: #183b68;
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(24, 59, 104, 0.2);
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width: 1100px) {
          .ys-feature-navbar-inner {
            gap: 8px;
          }

          .ys-navbar-links {
            justify-content: flex-start;
          }
        }

        @media(max-width: 700px) {
          .ys-feature-navbar-inner {
            padding: 12px 14px;
            flex-wrap: wrap;
          }

          .ys-navbar-links {
            order: 3;
            flex-basis: 100%;
          }

          .ys-navbar-account {
            margin-left: auto;
          }

          .ys-india-art {
            min-height: 350px;
          }

          .ys-india-banner-image {
            min-height: 350px;
            height: 350px;
          }

          .ys-image-fallback {
            min-height: 350px;
            padding: 12px;
          }

          .ys-fallback-map {
            min-height: 270px;
          }

          .ys-fallback-india {
            width: 130px;
            height: 190px;
          }

          .ys-fallback-person {
            width: 105px;
          }

          .ys-image-caption {
            left: 10px;
            top: 10px;
            padding: 8px;
          }

          .ys-image-caption strong {
            font-size: 12px;
          }

          .ys-home-feedback {
            padding: 55px 0;
          }

          .ys-home-feedback-card {
            padding: 40px 20px;
          }

          .ys-home-feedback-card p {
            font-size: 14px;
          }

          .ys-home-feedback-button {
            width: 100%;
          }
        }

      `}</style>

      {/* ================= NAVIGATION ================= */}

      <nav className="ys-feature-navbar" aria-label="Main navigation">
        <div className="ys-feature-navbar-inner">

          <Link to="/" className="ys-navbar-brand">
            YojanaSathi <span>AI</span>
          </Link>

          <div className="ys-navbar-links">
            {navigationItems.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `ys-navbar-link ${isActive ? "ys-navbar-active" : ""}`
                }
              >
                {label === "Feedback"
                  ? feedbackText.nav
                  : getText(t, navTranslations[label], label)}
              </NavLink>
            ))}
          </div>

          {/* LANGUAGE + LOGIN + PROFILE */}

          <div className="ys-navbar-account">
            <label className="ys-language-picker">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Choose language"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
              </select>
            </label>

            {/* Always visible Login button */}

            <Link to="/login" className="ys-home-login-link">
              Login
            </Link>

            {/* Profile dropdown */}

            <ProfileMenu />
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="ys-hero">
        <div className="ys-container ys-hero-grid">

          <div className="ys-hero-content">
            <div className="ys-eyebrow">
              <Sparkles size={16} />
              {getText(t, "heroBadge", "AI-Powered Scheme Discovery")}
            </div>

            <h1>
              {getText(t, "heroTitle1", "Discover Government")}
              <span>
                {getText(t, "heroTitle2", "Schemes Made for You")}
              </span>
            </h1>

            <p className="ys-hero-description">
              {getText(
                t,
                "heroDescription",
                "Find government schemes, understand eligibility and discover financial support for your business with YojanaSathi AI."
              )}
            </p>

            <div className="ys-hero-actions">
              <Link to="/match-scheme" className="ys-btn ys-btn-primary">
                {getText(t, "findScheme", "Explore Schemes")}
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/eligibility-checker"
                className="ys-btn ys-btn-outline"
              >
                {getText(t, "step3", "Check Eligibility")}
                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="ys-hero-highlights">
              <span>
                <CheckCircle2 size={17} />
                {getText(t, "smartMatching", "Smart Matching")}
              </span>

              <span>
                <CheckCircle2 size={17} />
                {getText(t, "easyEligibility", "Easy Eligibility")}
              </span>

              <span>
                <CheckCircle2 size={17} />
                {getText(t, "businessSupport", "Business Support")}
              </span>
            </div>
          </div>

          <div className="ys-hero-visual">
            <IndiaMapIllustration />
          </div>

        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}

      <section className="ys-trust-strip">
        <div className="ys-container ys-trust-grid">
          <div>
            <Sparkles size={22} />
            <span>AI-Based Matching</span>
          </div>

          <div>
            <ShieldCheck size={22} />
            <span>Eligibility Guidance</span>
          </div>

          <div>
            <Landmark size={22} />
            <span>Government Schemes</span>
          </div>

          <div>
            <Users size={22} />
            <span>Entrepreneur Support</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="ys-section ys-features-section">
        <div className="ys-container">

          <div className="ys-section-heading">
            <span className="ys-section-label">
              {getText(t, "whyYojanaSathi", "WHY YOJANASATHI")}
            </span>

            <h2>
              {getText(t, "everythingTitle", "Everything You Need in One Place")}
            </h2>

            <p>
              {getText(
                t,
                "everythingDescription",
                "Explore tools designed to make government scheme discovery easier."
              )}
            </p>
          </div>

          <div className="ys-feature-grid">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Link
                  to={feature.link}
                  className="ys-feature-card"
                  key={feature.number}
                >
                  <div className="ys-feature-top">
                    <div className="ys-feature-icon">
                      <Icon size={25} />
                    </div>

                    <span className="ys-feature-number">
                      {feature.number}
                    </span>
                  </div>

                  <h3>
                    {getText(t, feature.titleKey, feature.title)}
                  </h3>

                  <p>
                    {getText(
                      t,
                      feature.descriptionKey,
                      feature.description
                    )}
                  </p>

                  <span className="ys-feature-action">
                    {getText(t, feature.actionKey, feature.action)}
                    <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}

            <Link
              to="/document-verification"
              className="ys-feature-card"
              key="document-verification"
            >
              <div className="ys-feature-top">
                <div className="ys-feature-icon">
                  <FileCheck2 size={25} />
                </div>

                <span className="ys-feature-number">07</span>
              </div>

              <h3>{documentText.title}</h3>
              <p>{documentText.description}</p>

              <span className="ys-feature-action">
                {documentText.action}
                <ArrowRight size={17} />
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="ys-section ys-process-section">
        <div className="ys-container">

          <div className="ys-section-heading">
            <span className="ys-section-label">
              {getText(t, "simpleProcess", "SIMPLE PROCESS")}
            </span>

            <h2>
              {getText(t, "processTitle", "How YojanaSathi Works")}
            </h2>

            <p>
              {getText(
                t,
                "processDescription",
                "Follow these simple steps to discover and explore suitable schemes."
              )}
            </p>
          </div>

          <div className="ys-steps-grid">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div className="ys-step-card" key={step.number}>
                  <div className="ys-step-icon">
                    <Icon size={25} />
                  </div>

                  <span className="ys-step-number">
                    {step.number}
                  </span>

                  <h3>
                    {getText(t, step.titleKey, step.title)}
                  </h3>

                  <p>
                    {getText(t, step.descriptionKey, step.description)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="ys-center-action">
            <Link to="/match-scheme" className="ys-btn ys-btn-primary">
              {getText(t, "getStarted", "Get Started")}
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}

      <section className="ys-section ys-benefits-section">
        <div className="ys-container ys-benefits-grid">

          <div className="ys-benefits-content">
            <span className="ys-section-label">
              {getText(t, "difference", "WHY CHOOSE US")}
            </span>

            <h2>
              {getText(t, "supportSimple", "Making Government Support Simple")}
            </h2>

            <p>
              {getText(
                t,
                "supportDescription",
                "We help entrepreneurs discover opportunities and understand available support."
              )}
            </p>

            <div className="ys-benefits-list">
              {benefits.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={21} />
                  <span>{getText(t, item, item)}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="ys-btn ys-btn-primary">
              {getText(t, "learnMore", "Learn More")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ys-benefits-visual">
            <div className="ys-support-panel">

              <div className="ys-support-header">
                <div className="ys-support-logo">
                  <Lightbulb size={24} />
                </div>

                <div>
                  <strong>Smart Support Journey</strong>
                  <span>AI-Assisted Guidance</span>
                </div>
              </div>

              <div className="ys-support-items">
                <div>
                  <Users size={20} />
                  <span>Profile</span>
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <Sparkles size={20} />
                  <span>AI Match</span>
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <FileCheck2 size={20} />
                  <span>Eligibility</span>
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <TrendingUp size={20} />
                  <span>Growth</span>
                  <ArrowRight size={18} />
                </div>
              </div>

              <div className="ys-support-bottom">
                <Target size={24} />

                <div>
                  <strong>Smart Support</strong>
                  <p>Discover opportunities with confidence.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= VISION ================= */}

      <section className="ys-section ys-vision-section">
        <div className="ys-container">

          <div className="ys-section-heading">
            <span className="ys-section-label">
              {getText(t, "ourVision", "OUR VISION")}
            </span>

            <h2>
              {getText(t, "visionTitle", "Empowering Every Entrepreneur")}
            </h2>

            <p>
              {getText(
                t,
                "visionDescription",
                "Building a more accessible and inclusive business support ecosystem."
              )}
            </p>
          </div>

          <div className="ys-vision-grid">
            {vision.map((item) => {
              const Icon = item.icon;

              return (
                <div className="ys-vision-card" key={item.titleKey}>
                  <div className="ys-vision-icon">
                    <Icon size={26} />
                  </div>

                  <h3>
                    {getText(t, item.titleKey, item.title)}
                  </h3>

                  <p>
                    {getText(t, item.textKey, item.text)}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="ys-cta-section">
        <div className="ys-container">

          <div className="ys-cta-box">
            <div className="ys-cta-glow" />

            <div className="ys-cta-content">
              <span className="ys-cta-label">
                🇮🇳 YOUR OPPORTUNITY, YOUR FUTURE
              </span>

              <h2>
                Unlock Government Support.
                <span>Grow Your Business.</span>
              </h2>

              <p>
                Discover suitable government schemes, check your
                eligibility and take the next step towards building
                a successful business. YojanaSathi AI is here to guide you.
              </p>

              <div className="ys-cta-actions">
                <Link
                  to="/match-scheme"
                  className="ys-btn ys-btn-white"
                >
                  Explore Schemes
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/register"
                  className="ys-btn ys-btn-ghost"
                >
                  Create Free Account
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEEDBACK ================= */}

      <section
        className="ys-home-feedback"
        aria-labelledby="ys-feedback-title"
      >
        <div className="ys-container">

          <div className="ys-home-feedback-card">

            <div className="ys-home-feedback-icon">
              <Star size={30} fill="currentColor" />
            </div>

            <span className="ys-home-feedback-eyebrow">
              {feedbackText.eyebrow}
            </span>

            <h2 id="ys-feedback-title">
              {feedbackText.title}
            </h2>

            <p>
              {feedbackText.description}
            </p>

            <Link
              to="/feedback"
              className="ys-home-feedback-button"
            >
              <Star size={19} />
              {feedbackText.button}
              <ArrowRight size={19} />
            </Link>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="ys-footer">
        <div className="ys-container">

          <div className="ys-footer-grid">

            <div className="ys-footer-brand">
              <Link to="/" className="ys-footer-logo">
                <span className="ys-footer-logo-icon">
                  <Sparkles size={21} />
                </span>
                YojanaSathi AI
              </Link>

              <p>
                {getText(
                  t,
                  "footerDescription",
                  "Your companion for discovering government schemes and business opportunities."
                )}
              </p>

              <span className="ys-footer-tagline">
                Find • Qualify • Apply • Grow
              </span>
            </div>

            <div className="ys-footer-column">
              <h4>Discover</h4>
              <Link to="/schemes">Government Schemes</Link>
              <Link to="/match-scheme">AI Scheme Matcher</Link>
              <Link to="/calculator">Financial Calculator</Link>
              <Link to="/eligibility-checker">Eligibility Checker</Link>
            </div>

            <div className="ys-footer-column">
              <h4>Support</h4>
              <Link to="/partner">Find a Partner</Link>
              <Link to="/track">Track Application</Link>
              <Link to="/literacy">Financial Literacy</Link>
              <Link to="/about">About YojanaSathi</Link>
              <Link to="/feedback">{feedbackText.nav}</Link>
            </div>

            <div className="ys-footer-column">
              <h4>Account</h4>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>

          </div>

          <div className="ys-footer-bottom">
            <span>
              © {new Date().getFullYear()} YojanaSathi AI. All rights reserved.
            </span>

            <span>Find • Qualify • Apply • Grow</span>
          </div>

        </div>
      </footer>

    </main>
  );
}
