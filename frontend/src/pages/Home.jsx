import {
  ArrowRight,
  Brain,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="nav-container">

          <Link to="/" className="brand">

            <div className="brand-logo">
              <Sparkles size={22} />
            </div>

            <div>
              <h2>YojanaSathi AI</h2>
              <p>Find • Qualify • Apply • Grow</p>
            </div>

          </Link>

          <nav className="nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/schemes">
              Schemes
            </Link>

            <Link to="/calculator">
              Calculator
            </Link>

            <Link to="/partner">
              Find a Partner
            </Link>

            <Link to="/track">
              Track Application
            </Link>

            <Link to="/literacy">
              Financial Literacy
            </Link>

            <Link to="/about">
              About
            </Link>

          </nav>

          <div className="nav-actions">

            <button className="language-btn">
              <Globe2 size={16} />
              English
            </button>

            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>

          </div>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section className="hero-section">

          <div className="hero-container">

            <div className="hero-content">

              <div className="initiative-badge">
                <Landmark size={16} />
                AI-Powered Government Scheme Discovery
              </div>

              <h1>

                The Right Scheme
                <br />

                <span>
                  Starts With You.
                </span>

              </h1>

              <p className="hero-description">

                YojanaSathi AI helps small and marginalized entrepreneurs
                discover government schemes, loans, subsidies, grants and
                business support based on their needs and eligibility.

              </p>

              <div className="hero-buttons">

                <Link
                  to="/schemes"
                  className="primary-btn"
                >

                  <Sparkles size={18} />

                  Find My Scheme

                  <ArrowRight size={18} />

                </Link>

                <Link
                  to="/calculator"
                  className="secondary-btn"
                >

                  <Calculator size={18} />

                  Calculate Loan

                </Link>

              </div>

              <div className="trust-row">

                <div>
                  <ShieldCheck size={18} />
                  <span>Government Scheme Support</span>
                </div>

                <div>
                  <Brain size={18} />
                  <span>AI-Based Matching</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Easy Eligibility Check</span>
                </div>

                <div>
                  <Users size={18} />
                  <span>Built for Entrepreneurs</span>
                </div>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="hero-visual">

              <div className="hero-circle"></div>

              <div className="hero-person-card">

                <div className="person-placeholder">

                  <UserRound
                    size={108}
                    strokeWidth={1.1}
                  />

                </div>

                <div className="dream-text">

                  <strong>
                    Your Idea
                  </strong>

                  <strong>
                    Your Future
                  </strong>

                </div>

              </div>


              {/* AI RECOMMENDATION */}

              <div className="recommendation-card">

                <div className="recommendation-header">

                  <div>
                    <Sparkles size={17} />
                    <span>AI Recommendation</span>
                  </div>

                  <small>
                    94% Match
                  </small>

                </div>

                <h3>
                  Best Match Found
                </h3>


                <div className="recommendation-highlight">

                  <div className="recommendation-main-icon">
                    <WalletCards size={20} />
                  </div>

                  <div>

                    <strong>
                      Micro Finance Support
                    </strong>

                    <span>
                      Suitable for your profile
                    </span>

                  </div>

                </div>


                <div className="recommendation-item">

                  <span>
                    <WalletCards size={17} />
                    Support
                  </span>

                  <strong>
                    Up to ₹1.40 Lakh
                  </strong>

                </div>

                <div className="recommendation-item">

                  <span>
                    <Calculator size={17} />
                    Interest
                  </span>

                  <strong>
                    6.5% – 8%
                  </strong>

                </div>

                <div className="recommendation-item">

                  <span>
                    <FileCheck2 size={17} />
                    Status
                  </span>

                  <strong className="eligible-text">
                    You May Qualify
                  </strong>

                </div>


                <Link
                  to="/schemes"
                  className="recommendation-btn"
                >

                  View Scheme

                  <ArrowRight size={16} />

                </Link>

              </div>


              {/* FLOATING CARD */}

              <div className="floating-ai-card">

                <Zap size={17} />

                <div>
                  <strong>AI Powered</strong>
                  <span>Smart Matching</span>
                </div>

              </div>


              <div className="floating-growth-card">

                <TrendingUp size={17} />

                <div>
                  <strong>Business Growth</strong>
                  <span>Better Opportunities</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="quick-stats-section">

          <div className="quick-stats">

            <div className="quick-stat">

              <div className="quick-stat-icon">
                <Landmark size={22} />
              </div>

              <div>
                <strong>Government Schemes</strong>
                <span>Loans • Subsidies • Grants</span>
              </div>

            </div>


            <div className="quick-stat">

              <div className="quick-stat-icon">
                <Brain size={22} />
              </div>

              <div>
                <strong>AI Matching</strong>
                <span>Personalized Recommendations</span>
              </div>

            </div>


            <div className="quick-stat">

              <div className="quick-stat-icon">
                <FileCheck2 size={22} />
              </div>

              <div>
                <strong>Easy Eligibility</strong>
                <span>Understand Before Applying</span>
              </div>

            </div>


            <div className="quick-stat">

              <div className="quick-stat-icon">
                <Handshake size={22} />
              </div>

              <div>
                <strong>Business Support</strong>
                <span>Partners & Guidance</span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURES
        ===================================================== */}

        <section className="offer-section">

          <div className="section-heading">

            <span>
              WHY YOJANASATHI AI
            </span>

            <h2>
              Everything You Need
              <br />
              in One Place
            </h2>

            <p>
              From discovering schemes to tracking your application,
              YojanaSathi AI keeps the complete journey simple.
            </p>

          </div>


          <div className="offer-grid">


            <Link
              to="/schemes"
              className="offer-card purple"
            >

              <div className="offer-icon">
                <Brain size={24} />
              </div>

              <div className="offer-number">
                01
              </div>

              <h3>
                AI Scheme Matcher
              </h3>

              <p>
                Discover schemes that match your business,
                location, category and financial needs.
              </p>

              <span className="card-link">
                Explore Schemes
                <ChevronRight size={16} />
              </span>

            </Link>


            <Link
              to="/calculator"
              className="offer-card green"
            >

              <div className="offer-icon">
                <Calculator size={24} />
              </div>

              <div className="offer-number">
                02
              </div>

              <h3>
                Financial Calculator
              </h3>

              <p>
                Estimate EMI, interest, loan amount and repayment
                before choosing financial support.
              </p>

              <span className="card-link">
                Calculate Now
                <ChevronRight size={16} />
              </span>

            </Link>


            <Link
              to="/partner"
              className="offer-card pink"
            >

              <div className="offer-icon">
                <MapPin size={24} />
              </div>

              <div className="offer-number">
                03
              </div>

              <h3>
                Find a Partner
              </h3>

              <p>
                Find nearby banks, support centers and organizations
                that can guide your application.
              </p>

              <span className="card-link">
                Find Nearby
                <ChevronRight size={16} />
              </span>

            </Link>


            <Link
              to="/track"
              className="offer-card blue"
            >

              <div className="offer-icon">
                <FileText size={24} />
              </div>

              <div className="offer-number">
                04
              </div>

              <h3>
                Apply & Track
              </h3>

              <p>
                Track your application from submission to final
                approval and stay informed.
              </p>

              <span className="card-link">
                Track Application
                <ChevronRight size={16} />
              </span>

            </Link>


            <Link
              to="/literacy"
              className="offer-card yellow"
            >

              <div className="offer-icon">
                <WalletCards size={24} />
              </div>

              <div className="offer-number">
                05
              </div>

              <h3>
                Financial Literacy
              </h3>

              <p>
                Learn about loans, interest, credit, budgeting
                and responsible financial decisions.
              </p>

              <span className="card-link">
                Learn More
                <ChevronRight size={16} />
              </span>

            </Link>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="works-section">

          <div className="section-heading center">

            <span>
              SIMPLE PROCESS
            </span>

            <h2>
              How YojanaSathi AI Works
            </h2>

            <p>
              Find the right support through a simple five-step journey.
            </p>

          </div>


          <div className="steps-container">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                <UserRound size={27} />
              </div>

              <h3>
                Tell Us About You
              </h3>

              <p>
                Share your location, business type, category
                and financial requirement.
              </p>

            </div>


            <div className="step-line"></div>


            <div className="step">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                <Brain size={27} />
              </div>

              <h3>
                AI Finds Your Match
              </h3>

              <p>
                Our AI analyzes your information and finds
                suitable government opportunities.
              </p>

            </div>


            <div className="step-line"></div>


            <div className="step">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                <CheckCircle2 size={27} />
              </div>

              <h3>
                Check Eligibility
              </h3>

              <p>
                Understand eligibility rules and required documents
                before applying.
              </p>

            </div>


            <div className="step-line"></div>


            <div className="step">

              <div className="step-number">
                04
              </div>

              <div className="step-icon">
                <Handshake size={27} />
              </div>

              <h3>
                Get Guidance
              </h3>

              <p>
                Find support partners and follow clear application
                guidance.
              </p>

            </div>


            <div className="step-line"></div>


            <div className="step">

              <div className="step-number">
                05
              </div>

              <div className="step-icon">
                <TrendingUp size={27} />
              </div>

              <h3>
                Apply & Grow
              </h3>

              <p>
                Apply confidently, track progress and grow
                your business.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY SECTION
        ===================================================== */}

        <section className="why-section">

          <div className="why-container">


            <div className="why-content">

              <span className="why-label">
                THE YOJANASATHI DIFFERENCE
              </span>

              <h2>

                Government Support
                <br />

                Made
                <span> Simple.</span>

              </h2>

              <p>
                Entrepreneurs often know they need financial support,
                but finding the right scheme and understanding its
                requirements can be difficult. YojanaSathi AI brings
                discovery, eligibility, guidance and tracking together.
              </p>


              <div className="why-list">

                <div>
                  <CheckCircle2 size={19} />
                  <span>Personalized scheme recommendations</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Easy eligibility understanding</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Required document guidance</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Application tracking and updates</span>
                </div>

              </div>


              <Link
                to="/about"
                className="why-button"
              >

                Learn More

                <ArrowRight size={17} />

              </Link>

            </div>


            <div className="why-visual">

              <div className="why-main-card">

                <div className="why-card-top">

                  <span>
                    Your Support Journey
                  </span>

                  <span className="live-badge">
                    AI Assisted
                  </span>

                </div>


                <div className="journey-line">

                  <div className="journey-step active">

                    <div className="journey-dot">
                      <UserRound size={15} />
                    </div>

                    <span>
                      Profile
                    </span>

                  </div>


                  <div className="journey-connector"></div>


                  <div className="journey-step active">

                    <div className="journey-dot">
                      <Brain size={15} />
                    </div>

                    <span>
                      AI Match
                    </span>

                  </div>


                  <div className="journey-connector"></div>


                  <div className="journey-step">

                    <div className="journey-dot">
                      <FileCheck2 size={15} />
                    </div>

                    <span>
                      Eligibility
                    </span>

                  </div>


                  <div className="journey-connector"></div>


                  <div className="journey-step">

                    <div className="journey-dot">
                      <TrendingUp size={15} />
                    </div>

                    <span>
                      Growth
                    </span>

                  </div>

                </div>


                <div className="journey-message">

                  <Sparkles size={18} />

                  <div>

                    <strong>
                      Smart Support, Simplified
                    </strong>

                    <p>
                      Discover the right opportunity
                      without complicated searching.
                    </p>

                  </div>

                </div>

              </div>


              <div className="why-floating-card">

                <ShieldCheck size={17} />

                <div>

                  <strong>
                    Transparent
                  </strong>

                  <span>
                    Clear guidance
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            IMPACT
        ===================================================== */}

        <section className="impact-section">

          <div className="impact-content">

            <div className="impact-main">

              <p className="impact-title">
                OUR VISION
              </p>

              <h2>
                Making Opportunity
                <br />
                Easier to Reach
              </h2>

              <p className="impact-description">
                Better information, smarter matching and simpler
                access to financial opportunities for entrepreneurs.
              </p>

            </div>


            <div className="impact-stat">

              <Users size={26} />

              <div>

                <strong>
                  Inclusive
                </strong>

                <span>
                  Entrepreneur Support
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <Brain size={26} />

              <div>

                <strong>
                  AI Powered
                </strong>

                <span>
                  Smart Recommendations
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <Landmark size={26} />

              <div>

                <strong>
                  Multiple
                </strong>

                <span>
                  Support Opportunities
                </span>

              </div>

            </div>


            <div className="impact-stat">

              <TrendingUp size={26} />

              <div>

                <strong>
                  Growth Focused
                </strong>

                <span>
                  Better Business Access
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="final-cta-section">

          <div className="final-cta-card">

            <div className="cta-icon">
              <Sparkles size={27} />
            </div>

            <span className="cta-label">
              READY TO START?
            </span>

            <h2>
              Your Next Opportunity
              <br />
              Could Be One Search Away.
            </h2>

            <p>
              Let YojanaSathi AI help you find suitable government
              support and take the next step with confidence.
            </p>


            <div className="cta-buttons">

              <Link
                to="/schemes"
                className="cta-primary"
              >

                Find My Scheme

                <ArrowRight size={18} />

              </Link>


              <Link
                to="/register"
                className="cta-secondary"
              >

                Create Free Account

              </Link>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-content">

          <div>

            <Link
              to="/"
              className="footer-brand"
            >

              <div className="footer-brand-icon">
                <Sparkles size={19} />
              </div>

              <strong>
                YojanaSathi AI
              </strong>

            </Link>


            <p>
              AI-powered scheme discovery and support for
              small and marginalized entrepreneurs.
            </p>

          </div>


          <div>

            <h4>
              Discover
            </h4>

            <Link to="/schemes">
              Government Schemes
            </Link>

            <Link to="/calculator">
              Financial Calculator
            </Link>

            <Link to="/partner">
              Find a Partner
            </Link>

          </div>


          <div>

            <h4>
              Support
            </h4>

            <Link to="/track">
              Track Application
            </Link>

            <Link to="/literacy">
              Financial Literacy
            </Link>

            <Link to="/about">
              About YojanaSathi
            </Link>

          </div>


          <div>

            <h4>
              Account
            </h4>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 YojanaSathi AI
          </span>

          <span>
            Find • Qualify • Apply • Grow
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;