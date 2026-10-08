
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  Calculator,
  CheckCircle2,
  FileText,
  Landmark,
  Search,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [schemeCount, setSchemeCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/schemes"
        );

        const data = await response.json();

        if (data.success) {
          setSchemeCount(data.count || 0);
        }
      } catch (error) {
        console.error(
          "Dashboard scheme fetch error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* HEADER */}
        <section className="dashboard-welcome">

          <div>
            <p className="dashboard-label">
              YOJANASATHI AI
            </p>

            <h1>
              Your Entrepreneur Dashboard
            </h1>

            <p>
              Discover government schemes, check eligibility,
              get AI recommendations and manage your journey.
            </p>
          </div>

          <div className="dashboard-ai-icon">
            <Brain size={32} />
          </div>

        </section>

        {/* MAIN AI CARD */}
        <section className="dashboard-main-card">

          <div className="dashboard-main-content">

            <div className="dashboard-main-icon">
              <Sparkles size={28} />
            </div>

            <p className="dashboard-card-label">
              AI-POWERED RECOMMENDATION
            </p>

            <h2>
              Find schemes made for your needs
            </h2>

            <p>
              Tell YojanaSathi AI about your category,
              business type and financial requirement.
              We will identify suitable government schemes.
            </p>

            <Link
              to="/match-scheme"
              className="dashboard-primary-btn"
            >
              Find My Matching Schemes
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="dashboard-main-visual">
            <div className="dashboard-visual-circle">
              <Brain size={55} />
            </div>

            <div className="dashboard-floating-card">
              <CheckCircle2 size={18} />
              <span>AI Matching Ready</span>
            </div>
          </div>

        </section>

        {/* STATS */}
        <section className="dashboard-stats">

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              <Landmark size={22} />
            </div>

            <div>
              <span>Available Schemes</span>

              <strong>
                {loading ? "..." : schemeCount}
              </strong>
            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              <Brain size={22} />
            </div>

            <div>
              <span>AI Matching</span>
              <strong>Ready</strong>
            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              <FileText size={22} />
            </div>

            <div>
              <span>Application Tracking</span>
              <strong>Available</strong>
            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              <WalletCards size={22} />
            </div>

            <div>
              <span>Financial Tools</span>
              <strong>Available</strong>
            </div>

          </div>

        </section>

        {/* QUICK ACTIONS */}
        <section className="dashboard-section">

          <div className="dashboard-section-heading">
            <div>
              <p>EXPLORE</p>
              <h2>Quick Actions</h2>
            </div>

            <TrendingUp size={25} />
          </div>

          <div className="dashboard-actions-grid">

            <Link
              to="/schemes"
              className="dashboard-action-card"
            >
              <div className="action-icon">
                <Search size={23} />
              </div>

              <h3>
                Browse Schemes
              </h3>

              <p>
                Explore government schemes,
                loans, subsidies and support.
              </p>

              <span>
                Explore
                <ArrowRight size={15} />
              </span>
            </Link>

            <Link
              to="/match-scheme"
              className="dashboard-action-card"
            >
              <div className="action-icon">
                <Brain size={23} />
              </div>

              <h3>
                AI Scheme Matching
              </h3>

              <p>
                Get personalized recommendations
                based on your profile.
              </p>

              <span>
                Find Match
                <ArrowRight size={15} />
              </span>
            </Link>

            <Link
              to="/calculator"
              className="dashboard-action-card"
            >
              <div className="action-icon">
                <Calculator size={23} />
              </div>

              <h3>
                Financial Calculator
              </h3>

              <p>
                Estimate loan payments and
                understand your financial needs.
              </p>

              <span>
                Calculate
                <ArrowRight size={15} />
              </span>
            </Link>

            <Link
              to="/track"
              className="dashboard-action-card"
            >
              <div className="action-icon">
                <FileText size={23} />
              </div>

              <h3>
                Track Application
              </h3>

              <p>
                Follow your application journey
                and check its current status.
              </p>

              <span>
                Track
                <ArrowRight size={15} />
              </span>
            </Link>

          </div>

        </section>

        {/* JOURNEY */}
        <section className="dashboard-journey">

          <div className="dashboard-section-heading">
            <div>
              <p>YOUR JOURNEY</p>
              <h2>
                From Discovery to Growth
              </h2>
            </div>
          </div>

          <div className="journey-grid">

            <div className="journey-step">
              <div className="journey-number">
                01
              </div>

              <Search size={21} />

              <h3>
                Discover
              </h3>

              <p>
                Explore relevant government
                opportunities.
              </p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-step">
              <div className="journey-number">
                02
              </div>

              <Brain size={21} />

              <h3>
                Match
              </h3>

              <p>
                Let AI identify schemes suitable
                for your needs.
              </p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-step">
              <div className="journey-number">
                03
              </div>

              <CheckCircle2 size={21} />

              <h3>
                Qualify
              </h3>

              <p>
                Understand eligibility and
                required documents.
              </p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-step">
              <div className="journey-number">
                04
              </div>

              <TrendingUp size={21} />

              <h3>
                Grow
              </h3>

              <p>
                Apply confidently and build
                your business.
              </p>
            </div>

          </div>

        </section>

        {/* BOTTOM CTA */}
        <section className="dashboard-bottom-cta">

          <div>
            <p>
              READY TO GET STARTED?
            </p>

            <h2>
              Find the support your business deserves.
            </h2>

            <span>
              YojanaSathi AI helps you move from
              searching to taking action.
            </span>
          </div>

          <Link
            to="/match-scheme"
            className="dashboard-cta-btn"
          >
            Start AI Matching
            <ArrowRight size={18} />
          </Link>

        </section>

      </div>
    </div>
  );
}

export default Dashboard;

