
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const registerTranslations = {
  mr: {
    "Find • Qualify • Apply • Grow": "शोधा • पात्रता तपासा • अर्ज करा • प्रगती करा",
    "Join the YojanaSathi Community": "योजनासाथी समुदायात सामील व्हा",
    "Start Your": "आजच तुमचा",
    "Journey Today.": "प्रवास सुरू करा.",
    "Create your free account and get personalized access to government schemes, eligibility guidance, financial support and application tracking.": "मोफत खाते तयार करा आणि सरकारी योजना, पात्रता मार्गदर्शन, आर्थिक मदत व अर्ज ट्रॅकिंगचा लाभ घ्या.",
    "Personalized Matching": "वैयक्तिक योजना जुळवणी",
    "Get recommendations based on your profile.": "तुमच्या प्रोफाइलनुसार योजना सूचना मिळवा.",
    "Easier Applications": "सोपे अर्ज",
    "Understand eligibility and documents clearly.": "पात्रता आणि कागदपत्रे स्पष्टपणे समजून घ्या.",
    "Track Your Progress": "तुमची प्रगती तपासा",
    "Stay updated throughout your journey.": "प्रत्येक टप्प्यावर माहिती मिळवत राहा.",
    "Back to Home": "मुख्यपृष्ठावर परत",
    "Create Account": "खाते तयार करा",
    "Join YojanaSathi AI": "योजनासाथी AI मध्ये सामील व्हा",
    "Create your account to unlock personalized support.": "वैयक्तिक मदतीसाठी तुमचे खाते तयार करा.",
    "Full Name": "पूर्ण नाव",
    "Enter your full name": "तुमचे पूर्ण नाव लिहा",
    "Email Address": "ईमेल पत्ता",
    "Enter your email": "तुमचा ईमेल लिहा",
    "Mobile Number": "मोबाइल क्रमांक",
    "Enter your mobile number": "तुमचा मोबाइल क्रमांक लिहा",
    "I am a": "मी आहे",
    "Select your profile": "तुमचा प्रकार निवडा",
    Entrepreneur: "उद्योजक",
    "Small Business Owner": "लघु व्यवसाय मालक",
    "Student / Aspiring Entrepreneur": "विद्यार्थी / भावी उद्योजक",
    "Self Employed": "स्वयंरोजगार करणारे",
    Other: "इतर",
    Password: "पासवर्ड",
    "Create a password": "पासवर्ड तयार करा",
    "Confirm Password": "पासवर्डची पुष्टी करा",
    "Confirm your password": "पासवर्ड पुन्हा लिहा",
    "Hide password": "पासवर्ड लपवा",
    "Show password": "पासवर्ड दाखवा",
    "Hide confirm password": "पुष्टीकरण पासवर्ड लपवा",
    "Show confirm password": "पुष्टीकरण पासवर्ड दाखवा",
    "I agree to the": "मी सहमत आहे",
    "Terms & Conditions": "अटी व शर्ती",
    and: "आणि",
    "Privacy Policy": "गोपनीयता धोरण",
    "Create My Account": "माझे खाते तयार करा",
    OR: "किंवा",
    "Continue with Google": "Google सह पुढे जा",
    "Already have an account?": "आधीपासून खाते आहे?",
    "Login here": "येथे लॉगिन करा",
    "Your personal information is protected with secure authentication.": "सुरक्षित प्रमाणीकरणाद्वारे तुमची वैयक्तिक माहिती संरक्षित केली जाते.",
    "Please fill in all required fields.": "सर्व आवश्यक माहिती भरा.",
    "Please select your profile.": "कृपया तुमचा प्रकार निवडा.",
    "Password must contain at least 6 characters.": "पासवर्ड किमान ६ अक्षरांचा असावा.",
    "Password and confirm password do not match.": "पासवर्ड आणि पुष्टीकरण जुळत नाही.",
    "An account with this email already exists. Please login.": "या ईमेलवर आधीच खाते आहे. कृपया लॉगिन करा.",
    "Google registration will be connected when Google OAuth is added.": "Google OAuth जोडल्यानंतर Google नोंदणी उपलब्ध होईल."
  },

  hi: {
    "Find • Qualify • Apply • Grow": "खोजें • पात्रता जांचें • आवेदन करें • आगे बढ़ें",
    "Join the YojanaSathi Community": "योजनासाथी समुदाय से जुड़ें",
    "Start Your": "आज ही अपनी",
    "Journey Today.": "यात्रा शुरू करें।",
    "Create your free account and get personalized access to government schemes, eligibility guidance, financial support and application tracking.": "मुफ्त खाता बनाएं और सरकारी योजनाओं, पात्रता मार्गदर्शन, वित्तीय सहायता और आवेदन ट्रैकिंग का लाभ लें।",
    "Personalized Matching": "व्यक्तिगत योजना मिलान",
    "Get recommendations based on your profile.": "अपनी प्रोफ़ाइल के अनुसार योजना सुझाव पाएं।",
    "Easier Applications": "आसान आवेदन",
    "Understand eligibility and documents clearly.": "पात्रता और दस्तावेज़ स्पष्ट रूप से समझें।",
    "Track Your Progress": "अपनी प्रगति देखें",
    "Stay updated throughout your journey.": "हर चरण में अपडेट रहें।",
    "Back to Home": "होम पर वापस",
    "Create Account": "खाता बनाएं",
    "Join YojanaSathi AI": "योजनासाथी AI से जुड़ें",
    "Create your account to unlock personalized support.": "व्यक्तिगत सहायता पाने के लिए खाता बनाएं।",
    "Full Name": "पूरा नाम",
    "Enter your full name": "अपना पूरा नाम दर्ज करें",
    "Email Address": "ईमेल पता",
    "Enter your email": "अपना ईमेल दर्ज करें",
    "Mobile Number": "मोबाइल नंबर",
    "Enter your mobile number": "अपना मोबाइल नंबर दर्ज करें",
    "I am a": "मैं हूँ",
    "Select your profile": "अपनी प्रोफ़ाइल चुनें",
    Entrepreneur: "उद्यमी",
    "Small Business Owner": "छोटे व्यवसाय के मालिक",
    "Student / Aspiring Entrepreneur": "छात्र / भावी उद्यमी",
    "Self Employed": "स्वरोज़गार करने वाले",
    Other: "अन्य",
    Password: "पासवर्ड",
    "Create a password": "पासवर्ड बनाएं",
    "Confirm Password": "पासवर्ड की पुष्टि करें",
    "Confirm your password": "पासवर्ड दोबारा दर्ज करें",
    "Hide password": "पासवर्ड छिपाएं",
    "Show password": "पासवर्ड दिखाएं",
    "Hide confirm password": "पुष्टि पासवर्ड छिपाएं",
    "Show confirm password": "पुष्टि पासवर्ड दिखाएं",
    "I agree to the": "मैं सहमत हूँ",
    "Terms & Conditions": "नियम एवं शर्तें",
    and: "और",
    "Privacy Policy": "गोपनीयता नीति",
    "Create My Account": "मेरा खाता बनाएं",
    OR: "या",
    "Continue with Google": "Google से आगे बढ़ें",
    "Already have an account?": "पहले से खाता है?",
    "Login here": "यहाँ लॉगिन करें",
    "Your personal information is protected with secure authentication.": "सुरक्षित प्रमाणीकरण से आपकी व्यक्तिगत जानकारी संरक्षित की जाती है।",
    "Please fill in all required fields.": "सभी आवश्यक जानकारी भरें।",
    "Please select your profile.": "कृपया अपनी प्रोफ़ाइल चुनें।",
    "Password must contain at least 6 characters.": "पासवर्ड कम से कम ६ अक्षरों का होना चाहिए।",
    "Password and confirm password do not match.": "पासवर्ड और पुष्टि मेल नहीं खाते।",
    "An account with this email already exists. Please login.": "इस ईमेल पर पहले से खाता है। कृपया लॉगिन करें।",
    "Google registration will be connected when Google OAuth is added.": "Google OAuth जुड़ने पर Google पंजीकरण उपलब्ध होगा।"
  }
};

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
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

function Register() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const tr = (text) => registerTranslations[language]?.[text] ?? text;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMobile = mobile.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMobile) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!profile) {
      setError("Please select your profile.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    // Check all registered demo accounts by email.
    let users = [];

    try {
      const savedUsers = JSON.parse(
        localStorage.getItem("yojanaUsers") || "[]"
      );

      users = Array.isArray(savedUsers) ? savedUsers : [];

      // Support the previous single-user registration format.
      const oldUser = JSON.parse(
        localStorage.getItem("yojanaUser") || "null"
      );

      if (
        oldUser &&
        oldUser.email &&
        !users.some(
          (user) =>
            user.email?.toLowerCase() === oldUser.email.toLowerCase()
        )
      ) {
        users.push(oldUser);
      }
    } catch (storageError) {
      console.error("Could not read saved users:", storageError);
      setError("Unable to access saved account data. Please try again.");
      return;
    }

    const existingUser = users.find(
      (user) => user.email?.toLowerCase() === trimmedEmail
    );

    if (existingUser) {
      setError("An account with this email already exists. Please login.");
      return;
    }

    // Store all profile information.
    const newUser = {
      name: trimmedName,
      email: trimmedEmail,
      mobile: trimmedMobile,
      profile,
      createdAt: new Date().toISOString(),
      profilePhoto: "",
      password
    };

    users.push(newUser);

    try {
      localStorage.setItem("yojanaUsers", JSON.stringify(users));
      localStorage.setItem("yojanaUser", JSON.stringify(newUser));

      // Session data contains profile details but not the password.
      const sessionUser = {
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
        profile: newUser.profile,
        createdAt: newUser.createdAt,
        profilePhoto: newUser.profilePhoto
      };

      localStorage.setItem(
        "yojanaLoggedInUser",
        JSON.stringify(sessionUser)
      );

      navigate("/", { replace: true });
    } catch (storageError) {
      console.error("Could not save registration:", storageError);
      setError("Unable to save your account. Your browser storage may be full.");
    }
  };

  const handleGoogleRegister = () => {
    setError(
      "Google registration will be connected when Google OAuth is added."
    );
  };

  return (
    <div className="register-page">
      {/* LEFT SIDE */}
      <div className="register-visual">
        <div className="register-glow register-glow-one"></div>
        <div className="register-glow register-glow-two"></div>

        <Link to="/" className="register-brand">
          <div className="register-brand-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <h2>YojanaSathi AI</h2>
            <p>{tr("Find • Qualify • Apply • Grow")}</p>
          </div>
        </Link>

        <div className="register-message">
          <span className="register-badge">
            <ShieldCheck size={15} />
            {tr("Join the YojanaSathi Community")}
          </span>

          <h1>
            {tr("Start Your")}
            <br />
            <span>{tr("Journey Today.")}</span>
          </h1>

          <p>
            {tr("Create your free account and get personalized access to government schemes, eligibility guidance, financial support and application tracking.")}
          </p>

          <div className="register-benefits">
            <div>
              <div className="register-benefit-icon">
                <BrainIcon />
              </div>
              <div>
                <strong>{tr("Personalized Matching")}</strong>
                <span>{tr("Get recommendations based on your profile.")}</span>
              </div>
            </div>

            <div>
              <div className="register-benefit-icon">
                <FileIcon />
              </div>
              <div>
                <strong>{tr("Easier Applications")}</strong>
                <span>{tr("Understand eligibility and documents clearly.")}</span>
              </div>
            </div>

            <div>
              <div className="register-benefit-icon">
                <TrendingIcon />
              </div>
              <div>
                <strong>{tr("Track Your Progress")}</strong>
                <span>{tr("Stay updated throughout your journey.")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="register-form-section">
        <div className="register-form-wrapper">
          <Link to="/" className="register-back-home">
            <ArrowLeft size={17} />
            {tr("Back to Home")}
          </Link>

          <div className="register-mobile-logo">
            <div className="register-brand-icon">
              <Sparkles size={20} />
            </div>
            <strong>YojanaSathi AI</strong>
          </div>

          <div className="register-heading">
            <span>{tr("Create Account")}</span>
            <h2>{tr("Join YojanaSathi AI")}</h2>
            <p>{tr("Create your account to unlock personalized support.")}</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="register-input-group">
              <label>{tr("Full Name")}</label>
              <div className="register-input-wrapper">
                <UserRound size={17} />
                <input
                  type="text"
                  placeholder={tr("Enter your full name")}
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="register-input-group">
              <label>{tr("Email Address")}</label>
              <div className="register-input-wrapper">
                <Mail size={17} />
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

            {/* MOBILE */}
            <div className="register-input-group">
              <label>{tr("Mobile Number")}</label>
              <div className="register-input-wrapper">
                <Phone size={17} />
                <input
                  type="tel"
                  placeholder={tr("Enter your mobile number")}
                  autoComplete="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  required
                />
              </div>
            </div>

            {/* USER TYPE */}
            <div className="register-input-group">
              <label>{tr("I am a")}</label>
              <div className="register-input-wrapper">
                <BriefcaseBusiness size={17} />
                <select
                  value={profile}
                  onChange={(event) => setProfile(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    {tr("Select your profile")}
                  </option>
                  <option value="entrepreneur">{tr("Entrepreneur")}</option>
                  <option value="business-owner">{tr("Small Business Owner")}</option>
                  <option value="student">{tr("Student / Aspiring Entrepreneur")}</option>
                  <option value="self-employed">{tr("Self Employed")}</option>
                  <option value="other">{tr("Other")}</option>
                </select>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="register-input-group">
              <label>{tr("Password")}</label>
              <div className="register-input-wrapper">
                <LockKeyhole size={17} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={tr("Create a password")}
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="register-password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="register-input-group">
              <label>{tr("Confirm Password")}</label>
              <div className="register-input-wrapper">
                <LockKeyhole size={17} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={tr("Confirm your password")}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
                <button
                  type="button"
                  className="register-password-toggle"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div
                role="alert"
                style={{
                  padding: "11px 13px",
                  borderRadius: "10px",
                  background: "#fff1f2",
                  border: "1px solid #fecdd3",
                  color: "#be123c",
                  fontSize: "14px",
                  lineHeight: "1.4"
                }}
              >
                {tr(error)}
              </div>
            )}

            {/* TERMS */}
            <label className="register-terms">
              <input type="checkbox" required />
              <span>
                {tr("I agree to the")}{" "}
                <Link to="/terms">Terms &amp; Conditions</Link>{" "}
                {tr("and")} <Link to="/privacy">{tr("Privacy Policy")}</Link>.
              </span>
            </label>

            {/* CREATE ACCOUNT */}
            <button type="submit" className="register-submit-btn">
              {tr("Create My Account")}
              <ArrowRightIcon />
            </button>

            {/* DIVIDER */}
            <div className="register-divider">
              <span></span>
              <p>{tr("OR")}</p>
              <span></span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="register-google-btn"
              onClick={handleGoogleRegister}
            >
              <GoogleIcon />
              <span>{tr("Continue with Google")}</span>
            </button>

            {/* LOGIN */}
            <div className="register-login-text">
              <span>{tr("Already have an account?")}</span>
              <Link to="/login">{tr("Login here")}</Link>
            </div>
          </form>

          <div className="register-security">
            <ShieldCheck size={15} />
            <span>
              {tr("Your personal information is protected with secure authentication.")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrainIcon() {
  return <Sparkles size={17} />;
}

function FileIcon() {
  return <ShieldCheck size={17} />;
}

function TrendingIcon() {
  return <Sparkles size={17} />;
}

function ArrowRightIcon() {
  return <span className="register-arrow">→</span>;
}

export default Register;
