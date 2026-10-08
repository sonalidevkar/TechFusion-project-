import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  IndianRupee,
  Landmark,
  Search,
  ShieldCheck,
  Sparkles,
  WalletCards,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Schemes() {
  const navigate = useNavigate();

  const [schemes, setSchemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ================= FETCH SCHEMES ================= */

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/schemes"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch schemes");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(
            data.message || "Unable to load schemes"
          );
        }

        const formattedSchemes = (
          data.schemes || []
        ).map((scheme, index) => ({
          ...scheme,

          id: scheme.id || index + 1,

          name:
            scheme.name ||
            "Government Scheme",

          shortName:
            scheme.shortName ||
            scheme.name ||
            "Government Support Scheme",

          ministry:
            scheme.ministry ||
            "Government of India",

          category:
            Array.isArray(scheme.category)
              ? scheme.category
              : scheme.category
              ? [scheme.category]
              : [],

          tags:
            Array.isArray(scheme.tags)
              ? scheme.tags
              : [],

          description:
            scheme.description ||
            "Government support scheme for eligible applicants.",

          benefit:
            scheme.benefit ||
            "Financial and business support.",

          financialSupport:
            Array.isArray(
              scheme.financialSupport
            )
              ? scheme.financialSupport
              : scheme.financialSupport
              ? [scheme.financialSupport]
              : [],

          eligibility:
            scheme.eligibility || {},

          businessType:
            Array.isArray(scheme.businessType)
              ? scheme.businessType
              : scheme.businessType
              ? [scheme.businessType]
              : [],

          officialLink:
            scheme.officialLink || "#",

          applyLink:
            scheme.applyLink || "#",

          icon:
            scheme.icon || "🤝",

          status:
            scheme.status || "Active",
        }));

        setSchemes(formattedSchemes);
      } catch (err) {
        console.error(
          "Schemes fetch error:",
          err
        );

        setError(
          "Unable to load government schemes. Please make sure the backend server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  /* ================= CATEGORIES ================= */

  const categories = [
    "All",
    "Loans",
    "Entrepreneurship",
    "SC / ST / Women",
    "Artisans",
    "Food Processing",
    "Credit Guarantee",
    "Street Vendors",
  ];

  /* ================= HELPERS ================= */

  const getStates = (scheme) => {
    const states =
      scheme?.eligibility?.states;

    if (
      Array.isArray(states) &&
      states.length > 0
    ) {
      return states;
    }

    return ["All States"];
  };

  const getMaxIncome = (scheme) => {
    const income =
      scheme?.eligibility?.maxIncome;

    if (
      income === null ||
      income === undefined
    ) {
      return null;
    }

    return Number(income);
  };

  /* ================= CATEGORY MATCH ================= */

  const matchesCategory = (
    scheme,
    category
  ) => {
    if (category === "All") {
      return true;
    }

    const text = [
      scheme.name,
      scheme.description,
      scheme.benefit,
      ...(scheme.category || []),
      ...(scheme.tags || []),
      ...(scheme.financialSupport || []),
      ...(scheme.businessType || []),
    ]
      .join(" ")
      .toLowerCase();

    switch (category) {
      case "Loans":
        return (
          text.includes("loan") ||
          text.includes("credit")
        );

      case "Entrepreneurship":
        return (
          text.includes("entrepreneur") ||
          text.includes("startup") ||
          text.includes("business")
        );

      case "SC / ST / Women":
        return (
          text.includes("sc") ||
          text.includes("st") ||
          text.includes("women")
        );

      case "Artisans":
        return (
          text.includes("artisan") ||
          text.includes("craft")
        );

      case "Food Processing":
        return (
          text.includes("food") ||
          text.includes("processing")
        );

      case "Credit Guarantee":
        return text.includes(
          "guarantee"
        );

      case "Street Vendors":
        return (
          text.includes("vendor") ||
          text.includes(
            "street vendor"
          )
        );

      default:
        return false;
    }
  };

  /* ================= FILTER ================= */

  const filteredSchemes = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return schemes.filter((scheme) => {
      const searchableText = [
        scheme.name,
        scheme.shortName,
        scheme.ministry,
        scheme.description,
        scheme.benefit,
        ...(scheme.category || []),
        ...(scheme.tags || []),
        ...(scheme.financialSupport || []),
        ...(scheme.businessType || []),
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch =
        !search ||
        searchableText.includes(search);

      return (
        searchMatch &&
        matchesCategory(
          scheme,
          selectedCategory
        )
      );
    });
  }, [
    schemes,
    searchTerm,
    selectedCategory,
  ]);

  /* ================= VIEW DETAILS ================= */

  const handleViewDetails = (scheme) => {
    navigate("/scheme-details", {
      state: {
        scheme: scheme,
      },
    });
  };

  /* ================= JSX ================= */

  return (
    <div className="schemes-page">

      {/* ================= HEADER ================= */}

      <header className="schemes-header">
        <div className="schemes-header-inner">

          <Link
            to="/"
            className="schemes-logo"
          >
            <div className="schemes-logo-icon">
              🤖
            </div>

            <div>
              <strong>
                YojanaSathi AI
              </strong>

              <span>
                Government Scheme Discovery
              </span>
            </div>
          </Link>

          <Link
            to="/match-scheme"
            className="schemes-ai-button"
          >
            <Brain size={18} />
            AI Scheme Matcher
          </Link>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="schemes-intro">

        <div className="schemes-intro-content">

          <Link
            to="/"
            className="schemes-back-link"
          >
            ← Back to Home
          </Link>

          <div className="schemes-hero-grid">

            <div>

              <p className="schemes-label">
                GOVERNMENT SCHEMES
              </p>

              <h1>
                Find the Right
                <br />
                <span>
                  Government Support
                </span>
              </h1>

              <p className="schemes-description">
                Explore loans, subsidies,
                grants and business support
                programs designed to help
                entrepreneurs and individuals
                grow.
              </p>

              <div className="schemes-stats">

                <div>
                  <strong>
                    {schemes.length}
                  </strong>

                  <span>
                    Schemes
                  </span>
                </div>

                <div>
                  <strong>
                    8+
                  </strong>

                  <span>
                    Support Areas
                  </span>
                </div>

                <div>
                  <strong>
                    AI
                  </strong>

                  <span>
                    Smart Matching
                  </span>
                </div>

              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="schemes-hero-visual">

              <div className="hero-floating-card card-one">

                <IndianRupee size={20} />

                <div>
                  <strong>
                    Financial Support
                  </strong>

                  <span>
                    Loans & Subsidies
                  </span>
                </div>

              </div>

              <div className="hero-main-icon">
                🤝
              </div>

              <div className="hero-floating-card card-two">

                <CheckCircle2 size={20} />

                <div>
                  <strong>
                    Smart Discovery
                  </strong>

                  <span>
                    Find suitable schemes
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <section className="schemes-search-section">

        <div className="schemes-search-wrapper">

          <div className="schemes-search-box">

            <Search size={21} />

            <input
              type="text"
              placeholder="Search by scheme name, loan, subsidy, startup..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
            />

            {searchTerm && (
              <button
                onClick={() =>
                  setSearchTerm("")
                }
                className="search-clear"
              >
                ×
              </button>
            )}

          </div>

          <Link
            to="/match-scheme"
            className="search-ai-button"
          >
            <Sparkles size={18} />
            Find My Scheme
          </Link>

        </div>

        {/* CATEGORY BUTTONS */}

        <div className="schemes-category-list">

          {categories.map(
            (category) => (

              <button
                key={category}
                className={
                  selectedCategory ===
                  category
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
              >
                {category}
              </button>

            )
          )}

        </div>

      </section>

      {/* ================= MAIN ================= */}

      <main className="schemes-main">

        {/* LOADING */}

        {loading && (

          <div className="schemes-message">

            <div className="schemes-loading-icon">
              🤖
            </div>

            <h2>
              Finding Government Schemes...
            </h2>

            <p>
              YojanaSathi AI is loading
              available support programs.
            </p>

          </div>

        )}

        {/* ERROR */}

        {!loading && error && (

          <div className="schemes-message error">

            <div className="schemes-loading-icon">
              ⚠️
            </div>

            <h2>
              Unable to Load Schemes
            </h2>

            <p>
              {error}
            </p>

            <button
              className="scheme-primary-button"
              onClick={() =>
                window.location.reload()
              }
            >
              Try Again
            </button>

          </div>

        )}

        {/* SUCCESS */}

        {!loading && !error && (

          <>

            {/* RESULTS HEADER */}

            <div className="schemes-results-header">

              <div>

                <p className="schemes-label">
                  SCHEME DIRECTORY
                </p>

                <h2>
                  Explore Suitable Schemes
                </h2>

                <p className="results-subtitle">
                  Showing{" "}
                  <strong>
                    {filteredSchemes.length}
                  </strong>{" "}
                  of{" "}
                  <strong>
                    {schemes.length}
                  </strong>{" "}
                  available schemes
                </p>

              </div>

              <div className="schemes-result-info">

                <CheckCircle2 size={18} />

                Verified Directory

              </div>

            </div>

            {/* SCHEME CARDS */}

            {filteredSchemes.length > 0 ? (

              <div className="schemes-grid">

                {filteredSchemes.map(
                  (scheme) => {

                    const states =
                      getStates(
                        scheme
                      );

                    const maxIncome =
                      getMaxIncome(
                        scheme
                      );

                    return (

                      <article
                        className="scheme-card attractive-card"
                        key={scheme.id}
                      >

                        {/* CARD TOP */}

                        <div className="scheme-card-top">

                          <div className="scheme-card-icon">
                            {scheme.icon}
                          </div>

                          <div className="scheme-card-status">

                            <CheckCircle2
                              size={14}
                            />

                            {scheme.status}

                          </div>

                        </div>

                        {/* CARD CONTENT */}

                        <div className="scheme-card-content">

                          <p className="scheme-ministry">

                            <Landmark
                              size={14}
                            />

                            {scheme.ministry}

                          </p>

                          <h3>
                            {scheme.name}
                          </h3>

                          <p className="scheme-short-name">
                            {scheme.shortName}
                          </p>

                          <p className="scheme-description">
                            {scheme.description}
                          </p>

                          {/* BENEFIT */}

                          <div className="scheme-benefit">

                            <div className="scheme-benefit-icon">

                              <IndianRupee
                                size={19}
                              />

                            </div>

                            <div>

                              <span>
                                KEY BENEFIT
                              </span>

                              <strong>
                                {scheme.benefit}
                              </strong>

                            </div>

                          </div>

                          {/* TAGS */}

                          <div className="scheme-tags">

                            {scheme.category
                              .slice(0, 3)
                              .map(
                                (item) => (

                                  <span
                                    key={item}
                                  >
                                    {item}
                                  </span>

                                )
                              )}

                            {scheme.financialSupport
                              .slice(0, 2)
                              .map(
                                (item) => (

                                  <span
                                    key={item}
                                  >
                                    {item}
                                  </span>

                                )
                              )}

                          </div>

                          {/* ELIGIBILITY */}

                          <div className="scheme-eligibility-box">

                            <div className="eligibility-heading">

                              <FileCheck2
                                size={17}
                              />

                              <strong>
                                Eligibility
                              </strong>

                            </div>

                            <div className="eligibility-items">

                              <div>

                                <MapPin
                                  size={15}
                                />

                                <span>

                                  {states.length ===
                                  1
                                    ? states[0]
                                    : `${states.length} eligible states`}

                                </span>

                              </div>

                              <div>

                                <BriefcaseBusiness
                                  size={15}
                                />

                                <span>

                                  {maxIncome
                                    ? `Income up to ₹${maxIncome.toLocaleString(
                                        "en-IN"
                                      )}`
                                    : "Income limit varies"}

                                </span>

                              </div>

                            </div>

                          </div>

                        </div>

                        {/* ACTION BUTTONS */}

                        <div className="scheme-card-actions">

                          {/* VIEW DETAILS */}

                          <button
                            type="button"
                            className="scheme-secondary-button"
                            onClick={() =>
                              handleViewDetails(
                                scheme
                              )
                            }
                          >
                            View Details
                            <ArrowRight
                              size={16}
                            />
                          </button>

                          {/* APPLY */}

                          {scheme.applyLink &&
                          scheme.applyLink !==
                            "#" ? (

                            <a
                              href={
                                scheme.applyLink
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="scheme-primary-button"
                            >
                              Apply Now

                              <ExternalLink
                                size={15}
                              />

                            </a>

                          ) : (

                            <button
                              type="button"
                              className="scheme-primary-button"
                              onClick={() =>
                                alert(
                                  "Application link will be added after official verification."
                                )
                              }
                            >
                              Apply Now
                            </button>

                          )}

                        </div>

                      </article>

                    );
                  }
                )}

              </div>

            ) : (

              /* NO RESULTS */

              <div className="schemes-message">

                <div className="schemes-loading-icon">
                  🔍
                </div>

                <h2>
                  No Matching Schemes
                </h2>

                <p>
                  Try another keyword or
                  category.
                </p>

                <button
                  className="scheme-primary-button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(
                      "All"
                    );
                  }}
                >
                  Clear Filters
                </button>

              </div>

            )}

          </>

        )}

      </main>

      {/* ================= AI SECTION ================= */}

      <section className="schemes-ai-section">

        <div className="schemes-ai-card">

          <div className="schemes-ai-icon">
            <Sparkles size={30} />
          </div>

          <div className="schemes-ai-content">

            <p className="schemes-label">
              YOJANASATHI AI
            </p>

            <h2>
              Not sure which scheme
              is right for you?
            </h2>

            <p>
              Tell us your state,
              category, business type,
              income and financial need.
              Our AI matcher will identify
              suitable schemes for you.
            </p>

            <Link
              to="/match-scheme"
              className="scheme-primary-button"
            >
              Find My Scheme
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="schemes-ai-visual">

            <Brain size={72} />

            <div className="ai-visual-badge">
              AI Powered
            </div>

          </div>

        </div>

      </section>

      {/* ================= JAN SAMARTH ================= */}

      <section className="schemes-platform-section">

        <div className="platform-icon">
          <WalletCards size={30} />
        </div>

        <div className="platform-content">

          <p className="schemes-label">
            OFFICIAL PLATFORM
          </p>

          <h2>
            Explore through JanSamarth
          </h2>

          <p>
            Use the official JanSamarth
            platform to explore eligible
            credit-linked government
            schemes.
          </p>

        </div>

        <a
          href="https://www.jansamarth.in/"
          target="_blank"
          rel="noreferrer"
          className="scheme-secondary-button"
        >
          Visit JanSamarth
          <ExternalLink size={16} />
        </a>

      </section>

      {/* ================= TRUST ================= */}

      <section className="schemes-trust-section">

        <div className="trust-item">

          <ShieldCheck size={28} />

          <div>

            <strong>
              Government-focused
            </strong>

            <span>
              Discover relevant public
              support programs.
            </span>

          </div>

        </div>

        <div className="trust-item">

          <FileCheck2 size={28} />

          <div>

            <strong>
              Easy Eligibility
            </strong>

            <span>
              Understand basic eligibility
              before applying.
            </span>

          </div>

        </div>

        <div className="trust-item">

          <WalletCards size={28} />

          <div>

            <strong>
              Multiple Support Types
            </strong>

            <span>
              Loans, subsidies, credit
              and entrepreneurship support.
            </span>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="schemes-footer">

        <div>

          <strong>
            YojanaSathi AI
          </strong>

          <p>
            AI-powered government scheme
            discovery platform.
          </p>

        </div>

        <div className="schemes-footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/match-scheme">
            AI Matcher
          </Link>

          <Link to="/calculator">
            Calculator
          </Link>

          <Link to="/partner">
            Partner
          </Link>

        </div>

      </footer>

    </div>
  );
}

export default Schemes;