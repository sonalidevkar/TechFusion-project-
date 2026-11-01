
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useLanguage } from "../context/LanguageContext.jsx";

const loginTranslations = {
  hi: {
    "Empowering Dreams • Building a Stronger India": "सपनों को सशक्त बनाएं • मजबूत भारत बनाएं",
    "Secure Government Support Platform": "सुरक्षित सरकारी सहायता मंच",
    Welcome: "स्वागत है",
    "Back!": "वापसी पर!",
    "Access personalized government schemes, financial support, eligibility recommendations and application tracking from one simple platform.": "एक ही मंच पर व्यक्तिगत सरकारी योजनाओं, वित्तीय सहायता, पात्रता सुझाव और आवेदन की स्थिति की जानकारी पाएं।",
    "Personalized Scheme Recommendations": "व्यक्तिगत योजना सुझाव",
    "Secure & Transparent Process": "सुरक्षित और पारदर्शी प्रक्रिया",
    "Your Information Stays Protected": "आपकी जानकारी सुरक्षित रहती है",
    "Back to Home": "होम पर वापस जाएं",
    "Welcome back": "वापसी पर स्वागत है",
    "Login to your account": "अपने खाते में लॉगिन करें",
    "Access your personalized scheme dashboard.": "अपने व्यक्तिगत योजना डैशबोर्ड पर जाएं।",
    "Email Address": "ईमेल पता",
    "Enter your email": "अपना ईमेल दर्ज करें",
    Password: "पासवर्ड",
    "Forgot Password?": "पासवर्ड भूल गए?",
    "Enter your password": "अपना पासवर्ड दर्ज करें",
    "Hide password": "पासवर्ड छिपाएं",
    "Show password": "पासवर्ड दिखाएं",
    "Remember me": "मुझे याद रखें",
    "Login to SchemeMatch": "SchemeMatch में लॉगिन करें",
    OR: "या",
    "Connecting to Google...": "Google से जुड़ रहा है...",
    "Continue with Google": "Google से जारी रखें",
    "Don't have an account?": "खाता नहीं है?",
    "Create an account": "खाता बनाएं",
    "Your information is protected with secure authentication.": "सुरक्षित प्रमाणीकरण से आपकी जानकारी संरक्षित है।",
    "No account found. Please create an account first.": "कोई खाता नहीं मिला। पहले खाता बनाएं।",
    "Invalid email or password.": "गलत ईमेल या पासवर्ड।",
    "Something went wrong. Please try again.": "कुछ गलत हो गया। फिर से प्रयास करें।",
    "Google sign-in was cancelled. Please try again.": "Google लॉगिन रद्द कर दिया गया। फिर से प्रयास करें।",
    "Your browser blocked the Google sign-in popup. Allow popups and try again.": "आपके ब्राउज़र ने Google लॉगिन पॉपअप रोक दिया। पॉपअप की अनुमति देकर फिर प्रयास करें।",
    "This website domain is not authorized in Firebase Authentication settings.": "यह वेबसाइट डोमेन Firebase Authentication सेटिंग में अधिकृत नहीं है।",
    "Google login failed. Please try again.": "Google लॉगिन विफल हुआ। फिर से प्रयास करें।"
  },

  mr: {
    "Empowering Dreams • Building a Stronger India": "स्वप्नांना बळ देऊया • सक्षम भारत घडवूया",
    "Secure Government Support Platform": "सुरक्षित सरकारी सहाय्य मंच",
    Welcome: "स्वागत आहे",
    "Back!": "पुन्हा!",
    "Access personalized government schemes, financial support, eligibility recommendations and application tracking from one simple platform.": "एकाच मंचावर वैयक्तिक सरकारी योजना, आर्थिक मदत, पात्रता शिफारसी आणि अर्जाची स्थिती जाणून घ्या.",
    "Personalized Scheme Recommendations": "वैयक्तिक योजना शिफारसी",
    "Secure & Transparent Process": "सुरक्षित आणि पारदर्शक प्रक्रिया",
    "Your Information Stays Protected": "तुमची माहिती सुरक्षित राहते",
    "Back to Home": "मुख्यपृष्ठावर परत जा",
    "Welcome back": "पुन्हा स्वागत आहे",
    "Login to your account": "तुमच्या खात्यात लॉगिन करा",
    "Access your personalized scheme dashboard.": "तुमच्या वैयक्तिक योजना डॅशबोर्डवर जा.",
    "Email Address": "ईमेल पत्ता",
    "Enter your email": "तुमचा ईमेल टाका",
    Password: "पासवर्ड",
    "Forgot Password?": "पासवर्ड विसरलात?",
    "Enter your password": "तुमचा पासवर्ड टाका",
    "Hide password": "पासवर्ड लपवा",
    "Show password": "पासवर्ड दाखवा",
    "Remember me": "मला लक्षात ठेवा",
    "Login to SchemeMatch": "SchemeMatch मध्ये लॉगिन करा",
    OR: "किंवा",
    "Connecting to Google...": "Google शी जोडत आहे...",
    "Continue with Google": "Google सह पुढे जा",
    "Don't have an account?": "खाते नाही?",
    "Create an account": "खाते तयार करा",
    "Your information is protected with secure authentication.": "सुरक्षित प्रमाणीकरणामुळे तुमची माहिती संरक्षित आहे.",
    "No account found. Please create an account first.": "खाते सापडले नाही. आधी खाते तयार करा.",
    "Invalid email or password.": "चुकीचा ईमेल किंवा पासवर्ड.",
    "Something went wrong. Please try again.": "काहीतरी चूक झाली. पुन्हा प्रयत्न करा.",
    "Google sign-in was cancelled. Please try again.": "Google लॉगिन रद्द झाले. पुन्हा प्रयत्न करा.",
    "Your browser blocked the Google sign-in popup. Allow popups and try again.": "तुमच्या ब्राउझरने Google लॉगिन पॉपअप अडवला. पॉपअपला परवानगी देऊन पुन्हा प्रयत्न करा.",
    "This website domain is not authorized in Firebase Authentication settings.": "हे वेबसाइट डोमेन Firebase Authentication सेटिंगमध्ये अधिकृत नाही.",
    "Google login failed. Please try again.": "Google लॉगिन अयशस्वी झाले. पुन्हा प्रयत्न करा."
  }
};

function GoogleIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.653 32.657 29.224 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.153 7.957 3.043L37.657 9.343C34.526 6.43 29.54 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.153 7.957 3.043L37.657 9.343C34.526 6.43 29.54 4 24 4c-7.682 0-14.36 4.337-17.694 10.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.441 0 10.278-1.987 13.982-5.232l-6.447-5.465C29.472 34.488 26.883 36 24 36c-5.202 0-9.617-3.317-11.283-7.946l-6.522 5.025C9.586 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.068 5.303l6.447 5.465C37.228 39.125 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function Login() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const tr = (key) => loginTranslations[language]?.[key] || key;

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    const trimmedEmail = email.trim().toLowerCase();
    const savedUser = localStorage.getItem("yojanaUser");

    if (!savedUser) {
      setError(tr("No account found. Please create an account first."));
      return;
    }

    try {
      const user = JSON.parse(savedUser);

      if (
        user.email?.toLowerCase() !== trimmedEmail ||
        user.password !== password
      ) {
        setError(tr("Invalid email or password."));
        return;
      }

      localStorage.setItem(
        "yojanaLoggedInUser",
        JSON.stringify({
          name: user.name || "",
          email: user.email || "",
          profile: user.profile || "",
        })
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      setError(tr("Something went wrong. Please try again."));
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      localStorage.setItem(
        "yojanaLoggedInUser",
        JSON.stringify({
          name: user.displayName || "",
          email: user.email || "",
          profile: user.photoURL || "",
        })
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Google login error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        setError(tr("Google sign-in was cancelled. Please try again."));
      } else if (error.code === "auth/popup-blocked") {
        setError(tr("Your browser blocked the Google sign-in popup. Allow popups and try again."));
      } else if (error.code === "auth/unauthorized-domain") {
        setError(tr("This website domain is not authorized in Firebase Authentication settings."));
      } else {
        setError(tr("Google login failed. Please try again."));
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="login-page login-tricolour-theme">

      {/* LEFT PANEL */}
      <div className="login-visual">
        <div className="login-glow glow-one"></div>
        <div className="login-glow glow-two"></div>

        <Link to="/" className="login-brand">
          <div className="login-brand-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <h2>SchemeMatch AI</h2>
            <p>{tr("Empowering Dreams • Building a Stronger India")}</p>
          </div>
        </Link>

        <div className="login-message">
          <span className="login-badge">
            <ShieldCheck size={15} />
            {tr("Secure Government Support Platform")}
          </span>

          <h1>
            {tr("Welcome")}
            <br />
            <span>{tr("Back!")}</span>
          </h1>

          <p>
            {tr("Access personalized government schemes, financial support, eligibility recommendations and application tracking from one simple platform.")}
          </p>

          <div className="login-points">
            <div>
              <div className="point-icon">
                <UserRound size={17} />
              </div>
              <span>{tr("Personalized Scheme Recommendations")}</span>
            </div>

            <div>
              <div className="point-icon">
                <ShieldCheck size={17} />
              </div>
              <span>{tr("Secure & Transparent Process")}</span>
            </div>

            <div>
              <div className="point-icon">
                <LockKeyhole size={17} />
              </div>
              <span>{tr("Your Information Stays Protected")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="login-form-section">
        <div className="login-form-wrapper">

          <Link to="/" className="back-home">
            <ArrowLeft size={17} />
            {tr("Back to Home")}
          </Link>

          <div className="mobile-logo">
            <div className="login-brand-icon">
              <Sparkles size={20} />
            </div>
            <strong>SchemeMatch AI</strong>
          </div>

          <div className="login-form-heading">
            <span>{tr("Welcome back")}</span>
            <h2>{tr("Login to your account")}</h2>
            <p>{tr("Access your personalized scheme dashboard.")}</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="input-group">
              <label>{tr("Email Address")}</label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  type="email"
                  placeholder={tr("Enter your email")}
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <div className="password-label-row">
                <label>{tr("Password")}</label>
                <Link to="/forgot-password">
                  {tr("Forgot Password?")}
                </Link>
              </div>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={tr("Enter your password")}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? tr("Hide password")
                      : tr("Show password")
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div
                role="alert"
                className="login-error-message"
              >
                {error}
              </div>
            )}

            {/* REMEMBER ME */}
            <div className="remember-row">
              <label className="remember-label">
                <input type="checkbox" />
                <span>{tr("Remember me")}</span>
              </label>
            </div>

            {/* LOGIN BUTTON */}
            <button type="submit" className="login-submit-btn">
              {tr("Login to SchemeMatch")}
            </button>

            {/* DIVIDER */}
            <div className="login-divider">
              <span></span>
              <p>{tr("OR")}</p>
              <span></span>
            </div>

            {/* GOOGLE LOGIN */}
            <button
              type="button"
              className="google-login-btn"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
            >
              <GoogleIcon />
              <span>
                {googleLoading
                  ? tr("Connecting to Google...")
                  : tr("Continue with Google")}
              </span>
            </button>

            {/* REGISTER */}
            <div className="register-text">
              <span>{tr("Don't have an account?")}</span>
              <Link to="/register">
                {tr("Create an account")}
              </Link>
            </div>
          </form>

          {/* SECURITY */}
          <div className="login-security">
            <ShieldCheck size={16} />
            <span>
              {tr("Your information is protected with secure authentication.")}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
