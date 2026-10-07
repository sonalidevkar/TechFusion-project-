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
import { Link } from "react-router-dom";

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
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.068 5.303l.003-.002 6.447 5.465C37.228 39.125 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Registration form submitted");
  };

  const handleGoogleRegister = () => {
    console.log("Google registration clicked");
  };

  return (
    <div className="register-page">

      {/* =====================================================
          LEFT SIDE
      ====================================================== */}

      <div className="register-visual">

        <div className="register-glow register-glow-one"></div>
        <div className="register-glow register-glow-two"></div>

        {/* BRAND */}

        <Link to="/" className="register-brand">

          <div className="register-brand-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <h2>YojanaSathi AI</h2>

            <p>
              Find • Qualify • Apply • Grow
            </p>
          </div>

        </Link>


        {/* MAIN MESSAGE */}

        <div className="register-message">

          <span className="register-badge">

            <ShieldCheck size={15} />

            Join the YojanaSathi Community

          </span>


          <h1>

            Start Your
            <br />

            <span>Journey Today.</span>

          </h1>


          <p>
            Create your free account and get personalized access
            to government schemes, eligibility guidance, financial
            support and application tracking.
          </p>


          {/* BENEFITS */}

          <div className="register-benefits">

            <div>

              <div className="register-benefit-icon">
                <BrainIcon />
              </div>

              <div>

                <strong>
                  Personalized Matching
                </strong>

                <span>
                  Get recommendations based on your profile.
                </span>

              </div>

            </div>


            <div>

              <div className="register-benefit-icon">
                <FileIcon />
              </div>

              <div>

                <strong>
                  Easier Applications
                </strong>

                <span>
                  Understand eligibility and documents clearly.
                </span>

              </div>

            </div>


            <div>

              <div className="register-benefit-icon">
                <TrendingIcon />
              </div>

              <div>

                <strong>
                  Track Your Progress
                </strong>

                <span>
                  Stay updated throughout your journey.
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT SIDE
      ====================================================== */}

      <div className="register-form-section">

        <div className="register-form-wrapper">

          {/* BACK */}

          <Link
            to="/"
            className="register-back-home"
          >

            <ArrowLeft size={17} />

            Back to Home

          </Link>


          {/* MOBILE BRAND */}

          <div className="register-mobile-logo">

            <div className="register-brand-icon">
              <Sparkles size={20} />
            </div>

            <strong>
              YojanaSathi AI
            </strong>

          </div>


          {/* HEADING */}

          <div className="register-heading">

            <span>
              Create Account
            </span>

            <h2>
              Join YojanaSathi AI
            </h2>

            <p>
              Create your account to unlock personalized support.
            </p>

          </div>


          {/* FORM */}

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="register-input-group">

              <label>
                Full Name
              </label>

              <div className="register-input-wrapper">

                <UserRound size={17} />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="register-input-group">

              <label>
                Email Address
              </label>

              <div className="register-input-wrapper">

                <Mail size={17} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />

              </div>

            </div>


            {/* MOBILE */}

            <div className="register-input-group">

              <label>
                Mobile Number
              </label>

              <div className="register-input-wrapper">

                <Phone size={17} />

                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  autoComplete="tel"
                  required
                />

              </div>

            </div>


            {/* USER TYPE */}

            <div className="register-input-group">

              <label>
                I am a
              </label>

              <div className="register-input-wrapper">

                <BriefcaseBusiness size={17} />

                <select
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select your profile
                  </option>

                  <option value="entrepreneur">
                    Entrepreneur
                  </option>

                  <option value="business-owner">
                    Small Business Owner
                  </option>

                  <option value="student">
                    Student / Aspiring Entrepreneur
                  </option>

                  <option value="self-employed">
                    Self Employed
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* PASSWORD */}

            <div className="register-input-group">

              <label>
                Password
              </label>

              <div className="register-input-wrapper">

                <LockKeyhole size={17} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}

                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="register-input-group">

              <label>
                Confirm Password
              </label>

              <div className="register-input-wrapper">

                <LockKeyhole size={17} />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >

                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}

                </button>

              </div>

            </div>


            {/* TERMS */}

            <label className="register-terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the{" "}
                <a href="/terms">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy">
                  Privacy Policy
                </a>.
              </span>

            </label>


            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="register-submit-btn"
            >

              Create My Account

              <ArrowRightIcon />

            </button>


            {/* DIVIDER */}

            <div className="register-divider">

              <span></span>

              <p>
                OR
              </p>

              <span></span>

            </div>


            {/* GOOGLE */}

            <button
              type="button"
              className="register-google-btn"
              onClick={handleGoogleRegister}
            >

              <GoogleIcon />

              <span>
                Continue with Google
              </span>

            </button>


            {/* LOGIN */}

            <div className="register-login-text">

              <span>
                Already have an account?
              </span>

              <Link to="/login">
                Login here
              </Link>

            </div>

          </form>


          {/* SECURITY */}

          <div className="register-security">

            <ShieldCheck size={15} />

            <span>
              Your personal information is protected
              with secure authentication.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =====================================================
   SMALL INLINE ICONS
===================================================== */

function BrainIcon() {
  return (
    <Sparkles size={17} />
  );
}

function FileIcon() {
  return (
    <FileCheckIcon />
  );
}

function FileCheckIcon() {
  return (
    <ShieldCheck size={17} />
  );
}

function TrendingIcon() {
  return (
    <TrendingSmall />
  );
}

function TrendingSmall() {
  return (
    <TrendingUpIcon />
  );
}

function TrendingUpIcon() {
  return (
    <Sparkles size={17} />
  );
}

function ArrowRightIcon() {
  return (
    <span className="register-arrow">
      →
    </span>
  );
}

export default Register;