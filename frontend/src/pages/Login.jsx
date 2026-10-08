
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

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    const savedUser = localStorage.getItem("yojanaUser");

    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );
      return;
    }

    try {
      const user = JSON.parse(savedUser);

      if (
        user.email?.toLowerCase() !== email.trim().toLowerCase() ||
        user.password !== password
      ) {
        setError("Invalid email or password.");
        return;
      }

      localStorage.setItem(
        "yojanaLoggedInUser",
        JSON.stringify({
          name: user.name,
          email: user.email,
        })
      );

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    setError(
      "Google login will be connected when Google OAuth is added."
    );
  };

  return (
    <div className="login-page">

      {/* =====================================================
          LEFT SIDE
      ====================================================== */}

      <div className="login-visual">

        <div className="login-glow glow-one"></div>
        <div className="login-glow glow-two"></div>

        <div className="login-brand">

          <div className="login-brand-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <h2>SchemeMatch AI</h2>

            <p>
              Empowering Dreams • Building a Stronger India
            </p>
          </div>

        </div>

        <div className="login-message">

          <span className="login-badge">
            <ShieldCheck size={15} />
            Secure Government Support Platform
          </span>

          <h1>
            Welcome
            <br />
            <span>Back!</span>
          </h1>

          <p>
            Access personalized government schemes, financial support,
            eligibility recommendations and application tracking from
            one simple platform.
          </p>

          <div className="login-points">

            <div>
              <div className="point-icon">
                <UserRound size={17} />
              </div>

              <span>
                Personalized Scheme Recommendations
              </span>
            </div>

            <div>
              <div className="point-icon">
                <ShieldCheck size={17} />
              </div>

              <span>
                Secure & Transparent Process
              </span>
            </div>

            <div>
              <div className="point-icon">
                <LockKeyhole size={17} />
              </div>

              <span>
                Your Information Stays Protected
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          RIGHT SIDE
      ====================================================== */}

      <div className="login-form-section">

        <div className="login-form-wrapper">

          <Link to="/" className="back-home">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="mobile-logo">

            <div className="login-brand-icon">
              <Sparkles size={20} />
            </div>

            <strong>
              SchemeMatch AI
            </strong>

          </div>

          <div className="login-form-heading">

            <span>
              Welcome back
            </span>

            <h2>
              Login to your account
            </h2>

            <p>
              Access your personalized scheme dashboard.
            </p>

          </div>

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            {/* EMAIL */}

            <div className="input-group">

              <label>
                Email Address
              </label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <div className="password-label-row">

                <label>
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>

              <div className="input-wrapper">

                <LockKeyhole size={18} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
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
                style={{
                  marginTop: "-6px",
                  marginBottom: "8px",
                  padding: "11px 13px",
                  borderRadius: "10px",
                  background: "#fff1f2",
                  border: "1px solid #fecdd3",
                  color: "#be123c",
                  fontSize: "14px",
                  lineHeight: "1.4",
                }}
              >
                {error}
              </div>
            )}

            {/* REMEMBER ME */}

            <div className="remember-row">

              <label className="remember-label">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit-btn"
            >
              Login to SchemeMatch
            </button>

            {/* DIVIDER */}

            <div className="login-divider">

              <span></span>

              <p>
                OR
              </p>

              <span></span>

            </div>

            {/* GOOGLE LOGIN */}

            <button
              type="button"
              className="google-login-btn"
              onClick={handleGoogleLogin}
            >

              <GoogleIcon />

              <span>
                Continue with Google
              </span>

            </button>

            {/* REGISTER */}

            <div className="register-text">

              <span>
                Don't have an account?
              </span>

              <Link to="/register">
                Create an account
              </Link>

            </div>

          </form>

          <div className="login-security">

            <ShieldCheck size={16} />

            <span>
              Your information is protected with secure authentication.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;

