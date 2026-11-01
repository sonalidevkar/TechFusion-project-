import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  en: {
    back: "Back to Login",
    badge: "ACCOUNT RECOVERY",
    heading: "Forgot your password?",
    description: "Enter your registered email and create a new password for your account.",
    email: "Email Address",
    emailPlaceholder: "Enter your registered email",
    password: "New Password",
    passwordPlaceholder: "Create a new password",
    confirm: "Confirm New Password",
    confirmPlaceholder: "Enter the new password again",
    reset: "Reset Password",
    resetting: "Updating...",
    success: "Password updated successfully! You can now log in with your new password.",
    login: "Go to Login",
    required: "Please fill in all fields.",
    invalidEmail: "Please enter a valid email address.",
    shortPassword: "Password must contain at least 6 characters.",
    mismatch: "New password and confirm password do not match.",
    notFound: "No registered account was found with this email.",
    storageError: "Unable to access your saved account. Please try again.",
    show: "Show password",
    hide: "Hide password",
    note: "Demo mode: This updates an account stored in this browser only. No reset email is sent.",
    brandTagline: "Find • Qualify • Apply • Grow",
  },
  hi: {
    back: "लॉगिन पर वापस जाएँ",
    badge: "खाता पुनर्प्राप्ति",
    heading: "पासवर्ड भूल गए?",
    description: "अपना पंजीकृत ईमेल दर्ज करें और अपने खाते के लिए नया पासवर्ड बनाएँ।",
    email: "ईमेल पता",
    emailPlaceholder: "अपना पंजीकृत ईमेल दर्ज करें",
    password: "नया पासवर्ड",
    passwordPlaceholder: "नया पासवर्ड बनाएँ",
    confirm: "नए पासवर्ड की पुष्टि करें",
    confirmPlaceholder: "नया पासवर्ड फिर से दर्ज करें",
    reset: "पासवर्ड रीसेट करें",
    resetting: "अपडेट हो रहा है...",
    success: "पासवर्ड सफलतापूर्वक अपडेट हो गया! अब आप नए पासवर्ड से लॉगिन कर सकते हैं।",
    login: "लॉगिन पर जाएँ",
    required: "कृपया सभी फ़ील्ड भरें।",
    invalidEmail: "कृपया सही ईमेल पता दर्ज करें।",
    shortPassword: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
    mismatch: "नया पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते।",
    notFound: "इस ईमेल से कोई पंजीकृत खाता नहीं मिला।",
    storageError: "सहेजे गए खाते तक पहुँच नहीं हो सकी। कृपया फिर प्रयास करें।",
    show: "पासवर्ड दिखाएँ",
    hide: "पासवर्ड छिपाएँ",
    note: "डेमो मोड: यह केवल इसी ब्राउज़र में सहेजे गए खाते का पासवर्ड बदलता है। कोई ईमेल नहीं भेजा जाता।",
    brandTagline: "खोजें • पात्रता जाँचें • आवेदन करें • आगे बढ़ें",
  },
  mr: {
    back: "लॉगिनवर परत जा",
    badge: "खाते पुनर्प्राप्ती",
    heading: "पासवर्ड विसरलात?",
    description: "नोंदणीकृत ईमेल टाका आणि तुमच्या खात्यासाठी नवीन पासवर्ड तयार करा.",
    email: "ईमेल पत्ता",
    emailPlaceholder: "तुमचा नोंदणीकृत ईमेल टाका",
    password: "नवीन पासवर्ड",
    passwordPlaceholder: "नवीन पासवर्ड तयार करा",
    confirm: "नवीन पासवर्डची पुष्टी करा",
    confirmPlaceholder: "नवीन पासवर्ड पुन्हा टाका",
    reset: "पासवर्ड रीसेट करा",
    resetting: "अपडेट होत आहे...",
    success: "पासवर्ड यशस्वीपणे अपडेट झाला! आता नवीन पासवर्ड वापरून लॉगिन करा.",
    login: "लॉगिनवर जा",
    required: "कृपया सर्व माहिती भरा.",
    invalidEmail: "कृपया योग्य ईमेल पत्ता टाका.",
    shortPassword: "पासवर्ड किमान 6 अक्षरांचा असावा.",
    mismatch: "नवीन पासवर्ड आणि पुष्टी पासवर्ड जुळत नाहीत.",
    notFound: "या ईमेलसाठी नोंदणीकृत खाते सापडले नाही.",
    storageError: "सेव्ह केलेले खाते उघडता आले नाही. कृपया पुन्हा प्रयत्न करा.",
    show: "पासवर्ड दाखवा",
    hide: "पासवर्ड लपवा",
    note: "डेमो मोड: फक्त या ब्राउझरमध्ये सेव्ह केलेल्या खात्याचा पासवर्ड बदलतो. ईमेल पाठवला जात नाही.",
    brandTagline: "शोधा • पात्रता तपासा • अर्ज करा • प्रगती करा",
  },
};

export default function ForgotPassword() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || !password || !confirmPassword) {
      setError(t.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError(t.invalidEmail);
      return;
    }
    if (password.length < 6) {
      setError(t.shortPassword);
      return;
    }
    if (password !== confirmPassword) {
      setError(t.mismatch);
      return;
    }

    try {
      const raw = localStorage.getItem("yojanaUser");
      const user = raw ? JSON.parse(raw) : null;
      if (!user || String(user.email || "").toLowerCase() !== normalizedEmail) {
        setError(t.notFound);
        return;
      }
      localStorage.setItem("yojanaUser", JSON.stringify({ ...user, password }));
      setPassword("");
      setConfirmPassword("");
      setSuccess(true);
    } catch (err) {
      console.error("Password reset error:", err);
      setError(t.storageError);
    }
  };

  return (
    <div className="login-page">
      <div className="login-visual">
        <Link to="/" className="login-brand">
          <Sparkles size={24} />
          <div>
            <h2>YojanaSathi AI</h2>
            <p>{t.brandTagline}</p>
          </div>
        </Link>
        <div className="login-message">
          <span className="login-badge"><ShieldCheck size={16} /> {t.badge}</span>
          <h1>{t.heading}</h1>
          <p>{t.description}</p>
        </div>
      </div>

      <div className="login-form-section">
        <div className="login-form-wrapper">
          <Link to="/login" className="login-back-home">
            <ArrowLeft size={17} /> {t.back}
          </Link>
          <div className="login-heading">
            <span>{t.badge}</span>
            <h2>{t.heading}</h2>
            <p>{t.description}</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label htmlFor="reset-email">{t.email}</label>
              <div className="login-input-wrapper">
                <Mail size={18} />
                <input id="reset-email" type="email" autoComplete="email"
                  placeholder={t.emailPlaceholder} value={email}
                  onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="login-input-group">
              <label htmlFor="reset-password">{t.password}</label>
              <div className="login-input-wrapper">
                <LockKeyhole size={18} />
                <input id="reset-password" type={showPassword ? "text" : "password"}
                  autoComplete="new-password" placeholder={t.passwordPlaceholder}
                  value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="button" className="login-password-toggle"
                  aria-label={showPassword ? t.hide : t.show}
                  onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="login-input-group">
              <label htmlFor="reset-confirm">{t.confirm}</label>
              <div className="login-input-wrapper">
                <LockKeyhole size={18} />
                <input id="reset-confirm" type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password" placeholder={t.confirmPlaceholder}
                  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="button" className="login-password-toggle"
                  aria-label={showConfirmPassword ? t.hide : t.show}
                  onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p role="alert" style={{ color: "#be123c", marginBottom: 12 }}>{error}</p>}
            {success && <p role="status" style={{ color: "#15803d", marginBottom: 12 }}>{t.success}</p>}

            <button type="submit" className="login-submit-btn">
              {t.reset} <ArrowRight size={18} />
            </button>
          </form>

          {success && (
            <button type="button" className="login-submit-btn"
              style={{ marginTop: 12 }} onClick={() => navigate("/login")}>
              {t.login} <ArrowRight size={18} />
            </button>
          )}
          <p style={{ marginTop: 18, fontSize: 13, opacity: 0.75, lineHeight: 1.6 }}>
            <ShieldCheck size={14} style={{ verticalAlign: "middle", marginRight: 5 }} />
            {t.note}
          </p>
        </div>
      </div>
    </div>
  );
}
