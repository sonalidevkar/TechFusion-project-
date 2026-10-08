import React, { useState } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function MatchScheme() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    state: "",
    category: "",
    businessType: "",
    income: "",
    financialNeed: "",
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const findMatchingSchemes = async () => {
    setLoading(true);
    setError("");
    setSearched(true);
    setResults([]);

    try {
      const response = await fetch(
        "http://localhost:5000/api/match",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to match schemes");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message || "Unable to find matching schemes"
        );
      }

      setResults(data.schemes || []);
    } catch (error) {
      console.error("Matching error:", error);

      setError(
        "Unable to connect with YojanaSathi AI. Please make sure the backend server is running."
      );

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      state: "",
      category: "",
      businessType: "",
      income: "",
      financialNeed: "",
    });

    setResults([]);
    setSearched(false);
    setError("");
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return "Excellent Match";
    if (score >= 60) return "Strong Match";
    if (score >= 40) return "Good Match";
    return "Possible Match";
  };

  const getScoreClass = (score) => {
    if (score >= 80) return "excellent";
    if (score >= 60) return "strong";
    if (score >= 40) return "good";
    return "possible";
  };

  const openDetails = (scheme) => {
    navigate("/scheme-details", {
      state: {
        scheme,
      },
    });
  };

  return (
    <div className="match-page">
      <div className="match-container">

        {/* HERO */}
        <div className="match-hero">
          <div className="match-hero-icon">
            <Brain size={34} />
          </div>

          <p className="match-label">
            YOJANASATHI AI
          </p>

          <h1>
            Find the Right Government Scheme
          </h1>

          <p className="match-description">
            Tell us about your business and requirements.
            Our intelligent matching system will identify
            suitable government schemes for you.
          </p>

          <div className="match-ai-badge">
            <Sparkles size={16} />
            AI-Powered Scheme Matching
          </div>
        </div>

        {/* FORM */}
        <div className="match-form-card">

          <div className="match-form-header">
            <div>
              <p className="form-section-label">
                YOUR INFORMATION
              </p>

              <h2>
                Help us understand your needs
              </h2>
            </div>

            <Target size={30} />
          </div>

          <div className="match-form">

            <div className="form-group">
              <label>State</label>

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">
                  Select State
                </option>

                <option value="Maharashtra">
                  Maharashtra
                </option>

                <option value="Karnataka">
                  Karnataka
                </option>

                <option value="Gujarat">
                  Gujarat
                </option>

                <option value="Madhya Pradesh">
                  Madhya Pradesh
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">
                  Select Category
                </option>

                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="EWS">EWS</option>
                <option value="Minority">
                  Minority
                </option>
                <option value="Women">
                  Women
                </option>
                <option value="General">
                  General
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Business Type</label>

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
              >
                <option value="">
                  Select Business Type
                </option>

                <option value="Manufacturing">
                  Manufacturing
                </option>

                <option value="Retail">
                  Retail
                </option>

                <option value="Service">
                  Service
                </option>

                <option value="Food">
                  Food
                </option>

                <option value="Technology">
                  Technology
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Annual Family Income</label>

              <select
                name="income"
                value={formData.income}
                onChange={handleChange}
              >
                <option value="">
                  Select Income Range
                </option>

                <option value="below-1">
                  Below ₹1 Lakh
                </option>

                <option value="1-3">
                  ₹1 - ₹3 Lakh
                </option>

                <option value="3-5">
                  ₹3 - ₹5 Lakh
                </option>

                <option value="above-5">
                  Above ₹5 Lakh
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Financial Support Need
              </label>

              <select
                name="financialNeed"
                value={formData.financialNeed}
                onChange={handleChange}
              >
                <option value="">
                  Select Support
                </option>

                <option value="loan">
                  Loan
                </option>

                <option value="subsidy">
                  Subsidy
                </option>

                <option value="startup">
                  Startup Support
                </option>

                <option value="equipment">
                  Equipment Support
                </option>
              </select>
            </div>
          </div>

          <div className="match-actions">

            <button
              className="match-button"
              onClick={findMatchingSchemes}
              disabled={loading}
            >
              <Brain size={19} />

              {loading
                ? "Finding Best Matches..."
                : "Find My Matching Schemes"}

              {!loading && (
                <ArrowRight size={18} />
              )}
            </button>

            <button
              className="reset-button"
              onClick={resetForm}
              disabled={loading}
            >
              <RotateCcw size={17} />
              Reset
            </button>

          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="match-error">
            ⚠️ {error}
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="match-loading">
            <div className="loading-icon">
              <Brain size={30} />
            </div>

            <h3>
              YojanaSathi AI is analyzing your profile...
            </h3>

            <p>
              Checking category, business type,
              financial needs and eligibility.
            </p>
          </div>
        )}

        {/* RESULTS */}
        {searched && !loading && !error && (
          <div className="matching-results">

            <div className="results-header">

              <div>
                <p className="results-label">
                  AI RECOMMENDATIONS
                </p>

                <h2>
                  Schemes matched for you
                </h2>
              </div>

              <div className="results-count">
                <strong>
                  {results.length}
                </strong>

                <span>
                  {results.length === 1
                    ? "scheme found"
                    : "schemes found"}
                </span>
              </div>

            </div>

            {results.length > 0 ? (
              <div className="scheme-results">

                {results.map((scheme, index) => {

                  const score =
                    scheme.matchScore || 0;

                  const scoreClass =
                    getScoreClass(score);

                  return (
                    <div
                      className="scheme-result-card"
                      key={scheme.id}
                    >

                      {/* TOP */}
                      <div className="result-card-top">

                        <div className="scheme-icon">
                          {index === 0
                            ? "🏆"
                            : "🤝"}
                        </div>

                        {index === 0 && (
                          <span className="top-match-badge">
                            <Sparkles size={13} />
                            Top Recommendation
                          </span>
                        )}

                      </div>

                      {/* CONTENT */}
                      <div className="scheme-result-content">

                        <div className="scheme-title-row">

                          <div>
                            <h3>
                              {scheme.name}
                            </h3>

                            <p className="scheme-ministry">
                              {scheme.ministry}
                            </p>
                          </div>

                          <div
                            className={`match-score ${scoreClass}`}
                          >
                            <strong>
                              {score}%
                            </strong>

                            <span>
                              {getScoreLabel(score)}
                            </span>
                          </div>

                        </div>

                        <p className="scheme-description">
                          {scheme.description}
                        </p>

                        {/* WHY MATCH */}
                        {scheme.matchReasons?.length > 0 && (
                          <div className="match-reasons">

                            <div className="match-reasons-title">
                              <CheckCircle2 size={17} />
                              Why this scheme matches you
                            </div>

                            <div className="match-reasons-list">

                              {scheme.matchReasons
                                .slice(0, 4)
                                .map((reason, reasonIndex) => (
                                  <span
                                    key={reasonIndex}
                                  >
                                    <CheckCircle2 size={14} />
                                    {reason}
                                  </span>
                                ))}

                            </div>

                          </div>
                        )}

                        {/* TAGS */}
                        <div className="scheme-tags">

                          <span>
                            {scheme.status}
                          </span>

                          {(scheme.category || [])
                            .slice(0, 3)
                            .map((item) => (
                              <span key={item}>
                                {item}
                              </span>
                            ))}

                        </div>

                        {/* BENEFIT */}
                        {scheme.benefit && (
                          <div className="result-benefit">

                            <WalletCards size={18} />

                            <div>
                              <strong>
                                Key Benefit
                              </strong>

                              <p>
                                {scheme.benefit}
                              </p>
                            </div>

                          </div>
                        )}

                        {/* ACTION */}
                        <button
                          className="view-scheme-button"
                          onClick={() =>
                            openDetails(scheme)
                          }
                        >
                          View Complete Scheme Details
                          <ArrowRight size={17} />
                        </button>

                      </div>
                    </div>
                  );
                })}

              </div>
            ) : (
              <div className="no-results">

                <div className="no-results-icon">
                  🔍
                </div>

                <h3>
                  No matching schemes found
                </h3>

                <p>
                  Try changing your category,
                  business type or financial
                  support requirement.
                </p>

                <button
                  onClick={resetForm}
                  className="try-again-button"
                >
                  Try Different Details
                </button>

              </div>
            )}
          </div>
        )}

        {/* INFO */}
        {!searched && (
          <div className="match-info-grid">

            <div className="match-info-card">
              <Brain size={25} />
              <h3>AI Matching</h3>
              <p>
                Your profile is compared with
                available government schemes.
              </p>
            </div>

            <div className="match-info-card">
              <TrendingUp size={25} />
              <h3>Match Score</h3>
              <p>
                See which schemes are the
                strongest match for your needs.
              </p>
            </div>

            <div className="match-info-card">
              <CheckCircle2 size={25} />
              <h3>Clear Reasons</h3>
              <p>
                Understand why each scheme
                has been recommended.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default MatchScheme;