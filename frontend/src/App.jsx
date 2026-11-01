
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { useLanguage } from "./context/LanguageContext.jsx";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Schemes from "./pages/Schemes";
import Calculator from "./pages/Calculator";
import Partner from "./pages/Partner";
import Track from "./pages/Track";
import Literacy from "./pages/Literacy";
import MatchScheme from "./pages/MatchScheme";
import SchemeDetails from "./pages/SchemeDetails";
import EligibilityChecker from "./pages/EligibilityChecker";
import DocumentVerification from "./pages/DocumentVerification";
import Feedback from "./pages/Feedback";

// COMMON FEATURE PAGE
function FeaturePage({ title, description, icon }) {
  const { language } = useLanguage();

  const labels = {
    en: {
      back: "← Back to Home",
      explore: "Explore YojanaSathi AI",
    },
    hi: {
      back: "← होम पर वापस जाएं",
      explore: "योजनासाथी एआई देखें",
    },
    mr: {
      back: "← मुख्यपृष्ठावर परत जा",
      explore: "योजनासाथी एआय पाहा",
    },
  };

  const text = labels[language] || labels.en;

  return (
    <div className="feature-page">
      <Link to="/" className="feature-back">
        {text.back}
      </Link>

      <div className="feature-page-card">
        <div className="feature-page-icon">
          {icon}
        </div>

        <p className="feature-page-label">
          YOJANASATHI AI
        </p>

        <h1>{title}</h1>

        <p className="feature-page-description">
          {description}
        </p>

        <Link to="/" className="feature-home-btn">
          {text.explore}
        </Link>
      </div>
    </div>
  );
}

// MAIN APPLICATION
function App() {
  const { language } = useLanguage();

  const pageContent = {
    en: {
      forgotTitle: "Forgot Password",
      forgotDescription:
        "Password recovery will be connected with the secure authentication system.",

      termsTitle: "Terms & Conditions",
      termsDescription:
        "Read the terms and conditions for using the YojanaSathi AI platform.",

      privacyTitle: "Privacy Policy",
      privacyDescription:
        "Learn how YojanaSathi AI handles, uses and protects user information.",

      notFoundTitle: "Page Not Found",
      notFoundDescription:
        "The page you are looking for does not exist.",
    },

    hi: {
      forgotTitle: "पासवर्ड भूल गए",
      forgotDescription:
        "पासवर्ड पुनर्प्राप्ति को सुरक्षित प्रमाणीकरण प्रणाली से जोड़ा जाएगा।",

      termsTitle: "नियम और शर्तें",
      termsDescription:
        "योजनासाथी एआई प्लेटफॉर्म के उपयोग के नियम और शर्तें पढ़ें।",

      privacyTitle: "गोपनीयता नीति",
      privacyDescription:
        "जानें कि योजनासाथी एआई उपयोगकर्ता की जानकारी को कैसे संभालता और सुरक्षित रखता है।",

      notFoundTitle: "पेज नहीं मिला",
      notFoundDescription:
        "आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है।",
    },

    mr: {
      forgotTitle: "पासवर्ड विसरलात",
      forgotDescription:
        "पासवर्ड पुनर्प्राप्ती सुरक्षित प्रमाणीकरण प्रणालीशी जोडली जाईल.",

      termsTitle: "नियम आणि अटी",
      termsDescription:
        "योजनासाथी एआय प्लॅटफॉर्म वापरण्याचे नियम आणि अटी वाचा.",

      privacyTitle: "गोपनीयता धोरण",
      privacyDescription:
        "योजनासाथी एआय वापरकर्त्यांची माहिती कशी हाताळते आणि सुरक्षित ठेवते ते जाणून घ्या.",

      notFoundTitle: "पृष्ठ सापडले नाही",
      notFoundDescription:
        "तुम्ही शोधत असलेले पृष्ठ उपलब्ध नाही.",
    },
  };

  const content = pageContent[language] || pageContent.en;

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* AUTHENTICATION */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* GOVERNMENT SCHEMES */}
        <Route path="/schemes" element={<Schemes />} />

        {/* SCHEME DETAILS */}
        <Route
          path="/schemes/:id"
          element={<SchemeDetails />}
        />

        <Route
          path="/scheme-details"
          element={<SchemeDetails />}
        />

        {/* CALCULATOR */}
        <Route
          path="/calculator"
          element={<Calculator />}
        />

        {/* ELIGIBILITY CHECKER */}
        <Route
          path="/eligibility-checker"
          element={<EligibilityChecker />}
        />

        {/* AI MATCHING */}
        <Route
          path="/match-scheme"
          element={<MatchScheme />}
        />

        {/* DOCUMENT VERIFICATION */}
        <Route
          path="/document-verification"
          element={<DocumentVerification />}
        />

        {/* PARTNER FINDER */}
        <Route
          path="/partner"
          element={<Partner />}
        />

        {/* APPLICATION TRACKING */}
        <Route
          path="/track"
          element={<Track />}
        />

        {/* FINANCIAL LITERACY */}
        <Route
          path="/literacy"
          element={<Literacy />}
        />

        {/* FEEDBACK */}
        <Route
          path="/feedback"
          element={<Feedback />}
        />

        {/* FORGOT PASSWORD */}
        <Route
          path="/forgot-password"
          element={
            <FeaturePage
              title={content.forgotTitle}
              description={content.forgotDescription}
              icon="🔐"
            />
          }
        />

        {/* TERMS */}
        <Route
          path="/terms"
          element={
            <FeaturePage
              title={content.termsTitle}
              description={content.termsDescription}
              icon="📜"
            />
          }
        />

        {/* PRIVACY */}
        <Route
          path="/privacy"
          element={
            <FeaturePage
              title={content.privacyTitle}
              description={content.privacyDescription}
              icon="🛡️"
            />
          }
        />

        {/* PAGE NOT FOUND */}
        <Route
          path="*"
          element={
            <FeaturePage
              title={content.notFoundTitle}
              description={content.notFoundDescription}
              icon="🔎"
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
