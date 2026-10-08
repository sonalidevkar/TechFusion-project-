import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  IndianRupee,
  Landmark,
  MapPin,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

function SchemeDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const scheme = location.state?.scheme;

  /* ================= NO SCHEME ================= */

  if (!scheme) {
    return (
      <div className="scheme-details-page">
        <div className="scheme-details-container">

          <button
            className="back-button"
            onClick={() =>
              navigate("/schemes")
            }
          >
            <ArrowLeft size={17} />
            Back to Schemes
          </button>

          <div className="no-results">

            <div className="scheme-details-empty-icon">
              🔍
            </div>

            <h2>
              Scheme Details Not Found
            </h2>

            <p>
              Please go back to the schemes
              page and select a scheme again.
            </p>

            <button
              className="view-scheme-button"
              onClick={() =>
                navigate("/schemes")
              }
            >
              Explore Schemes
            </button>

          </div>

        </div>
      </div>
    );
  }

  /* ================= DATA ================= */

  const eligibility =
    scheme.eligibility || {};

  const states =
    Array.isArray(eligibility.states)
      ? eligibility.states
      : [];

  const categories =
    Array.isArray(scheme.category)
      ? scheme.category
      : scheme.category
      ? [scheme.category]
      : [];

  const businessTypes =
    Array.isArray(scheme.businessType)
      ? scheme.businessType
      : scheme.businessType
      ? [scheme.businessType]
      : [];

  const financialSupport =
    Array.isArray(scheme.financialSupport)
      ? scheme.financialSupport
      : scheme.financialSupport
      ? [scheme.financialSupport]
      : [];

  const documents =
    Array.isArray(scheme.documents)
      ? scheme.documents
      : [];

  const tags =
    Array.isArray(scheme.tags)
      ? scheme.tags
      : [];

  /* ================= APPLY ================= */

  const handleApply = () => {
    if (
      scheme.applyLink &&
      scheme.applyLink !== "#"
    ) {
      window.open(
        scheme.applyLink,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      alert(
        "Official application link is not available yet."
      );
    }
  };

  return (
    <div className="scheme-details-page">

      <div className="scheme-details-container">

        {/* ================= BACK ================= */}

        <button
          className="back-button"
          onClick={() =>
            navigate("/schemes")
          }
        >
          <ArrowLeft size={17} />
          Back to Schemes
        </button>

        {/* ================= HERO ================= */}

        <section className="scheme-details-hero">

          <div className="scheme-details-hero-icon">
            {scheme.icon || "🤝"}
          </div>

          <div className="scheme-details-hero-content">

            <div className="scheme-details-top-row">

              <p className="scheme-details-label">
                YOJANASATHI AI
              </p>

              <span className="active-status">
                <CheckCircle2 size={14} />
                {scheme.status || "Active"}
              </span>

            </div>

            <h1>
              {scheme.name}
            </h1>

            <p className="scheme-details-short-name">
              {scheme.shortName ||
                "Government Support Scheme"}
            </p>

            <div className="scheme-details-ministry">

              <Landmark size={16} />

              <span>
                {scheme.ministry ||
                  "Government of India"}
              </span>

            </div>

          </div>

        </section>

        {/* ================= QUICK INFO ================= */}

        <section className="scheme-quick-info">

          <div className="quick-info-item">

            <div className="quick-info-icon">
              <IndianRupee size={19} />
            </div>

            <div>
              <span>
                FINANCIAL SUPPORT
              </span>

              <strong>
                {financialSupport.length > 0
                  ? financialSupport.join(", ")
                  : "Support Available"}
              </strong>
            </div>

          </div>

          <div className="quick-info-item">

            <div className="quick-info-icon">
              <MapPin size={19} />
            </div>

            <div>
              <span>
                AVAILABILITY
              </span>

              <strong>
                {states.length === 1 &&
                states[0] === "All"
                  ? "All States"
                  : states.length > 0
                  ? states.join(", ")
                  : "Check Official Portal"}
              </strong>
            </div>

          </div>

          <div className="quick-info-item">

            <div className="quick-info-icon">
              <BriefcaseBusiness size={19} />
            </div>

            <div>
              <span>
                BUSINESS TYPE
              </span>

              <strong>
                {businessTypes.length > 0
                  ? businessTypes
                      .slice(0, 2)
                      .join(", ")
                  : "Various"}
              </strong>
            </div>

          </div>

        </section>

        {/* ================= MAIN GRID ================= */}

        <div className="scheme-details-grid">

          {/* ================= LEFT ================= */}

          <div className="scheme-details-left">

            {/* ABOUT */}

            <section className="details-section">

              <div className="details-section-heading">

                <div className="section-heading-icon">
                  📋
                </div>

                <div>
                  <span>
                    OVERVIEW
                  </span>

                  <h2>
                    About the Scheme
                  </h2>
                </div>

              </div>

              <p className="details-main-text">
                {scheme.description ||
                  "This government scheme provides support to eligible applicants."}
              </p>

            </section>

            {/* KEY BENEFIT */}

            <section className="details-section">

              <div className="details-section-heading">

                <div className="section-heading-icon">
                  💰
                </div>

                <div>
                  <span>
                    KEY INFORMATION
                  </span>

                  <h2>
                    Main Benefit
                  </h2>
                </div>

              </div>

              <div className="main-benefit-box">

                <div className="main-benefit-icon">
                  <WalletCards size={25} />
                </div>

                <div>

                  <span>
                    BENEFIT / SUPPORT
                  </span>

                  <strong>
                    {scheme.benefit ||
                      "Financial and business support may be available for eligible applicants."}
                  </strong>

                </div>

              </div>

            </section>

            {/* ELIGIBILITY */}

            <section className="details-section">

              <div className="details-section-heading">

                <div className="section-heading-icon">
                  ✓
                </div>

                <div>
                  <span>
                    REQUIREMENTS
                  </span>

                  <h2>
                    Eligibility Information
                  </h2>
                </div>

              </div>

              <div className="details-grid">

                <div className="detail-box">

                  <span>
                    Category
                  </span>

                  <strong>
                    {categories.length > 0
                      ? categories.join(", ")
                      : "Check official guidelines"}
                  </strong>

                </div>

                <div className="detail-box">

                  <span>
                    Business Type
                  </span>

                  <strong>
                    {businessTypes.length > 0
                      ? businessTypes.join(", ")
                      : "Various"}
                  </strong>

                </div>

                <div className="detail-box">

                  <span>
                    Eligible States
                  </span>

                  <strong>
                    {states.length > 0
                      ? states[0] === "All"
                        ? "All States"
                        : states.join(", ")
                      : "Check official portal"}
                  </strong>

                </div>

                <div className="detail-box">

                  <span>
                    Income Requirement
                  </span>

                  <strong>
                    {eligibility.maxIncome
                      ? `Up to ₹${Number(
                          eligibility.maxIncome
                        ).toLocaleString(
                          "en-IN"
                        )}`
                      : "No limit specified"}
                  </strong>

                </div>

              </div>

              {eligibility.notes && (

                <div className="eligibility-note">

                  <ShieldCheck size={18} />

                  <p>
                    {eligibility.notes}
                  </p>

                </div>

              )}

            </section>

            {/* SUPPORT */}

            <section className="details-section">

              <div className="details-section-heading">

                <div className="section-heading-icon">
                  💳
                </div>

                <div>
                  <span>
                    SUPPORT TYPE
                  </span>

                  <h2>
                    Financial Support
                  </h2>
                </div>

              </div>

              <div className="support-tags">

                {financialSupport.length > 0 ? (

                  financialSupport.map(
                    (item) => (
                      <span key={item}>
                        <CheckCircle2
                          size={14}
                        />
                        {item}
                      </span>
                    )
                  )

                ) : (

                  <span>
                    Financial support available
                  </span>

                )}

              </div>

            </section>

            {/* TAGS */}

            {tags.length > 0 && (

              <section className="details-section">

                <div className="details-section-heading">

                  <div className="section-heading-icon">
                    🏷️
                  </div>

                  <div>
                    <span>
                      KEYWORDS
                    </span>

                    <h2>
                      Scheme Tags
                    </h2>
                  </div>

                </div>

                <div className="details-tags">

                  {tags.map(
                    (tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    )
                  )}

                </div>

              </section>

            )}

            {/* DOCUMENTS */}

            <section className="details-section">

              <div className="details-section-heading">

                <div className="section-heading-icon">
                  📄
                </div>

                <div>
                  <span>
                    PREPARATION
                  </span>

                  <h2>
                    Documents
                  </h2>
                </div>

              </div>

              {documents.length > 0 ? (

                <div className="document-list">

                  {documents.map(
                    (document, index) => (

                      <div
                        className="document-item"
                        key={document}
                      >

                        <div className="document-number">
                          {index + 1}
                        </div>

                        <span>
                          {document}
                        </span>

                        <CheckCircle2
                          size={16}
                        />

                      </div>

                    )
                  )}

                </div>

              ) : (

                <div className="guidance-box">

                  <p>
                    Document requirements are
                    scheme-specific. Please verify
                    the exact requirements on the
                    official portal before applying.
                  </p>

                </div>

              )}

            </section>

          </div>

          {/* ================= RIGHT ================= */}

          <aside className="scheme-details-right">

            {/* APPLICATION CARD */}

            <div className="application-card">

              <div className="application-card-icon">
                🚀
              </div>

              <p className="application-label">
                READY TO EXPLORE?
              </p>

              <h2>
                Start Your Application
              </h2>

              <p>
                Review the official scheme
                guidelines and check your
                eligibility before applying.
              </p>

              <button
                className="apply-button"
                onClick={handleApply}
              >
                Open Official Portal
                <ExternalLink size={17} />
              </button>

              <button
                className="details-back-action"
                onClick={() =>
                  navigate("/match-scheme")
                }
              >
                Find Another Scheme
              </button>

            </div>

            {/* VERIFICATION */}

            <div className="verification-card">

              <ShieldCheck size={25} />

              <div>

                <strong>
                  Verify Before Applying
                </strong>

                <p>
                  Scheme eligibility,
                  documents, benefits and
                  application rules can change.
                  Always verify the latest
                  information on the official
                  government portal.
                </p>

              </div>

            </div>

            {/* OFFICIAL LINK */}

            {scheme.officialLink &&
              scheme.officialLink !== "#" && (

                <a
                  href={scheme.officialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="official-link-card"
                >

                  <Landmark size={21} />

                  <div>

                    <strong>
                      Official Scheme Portal
                    </strong>

                    <span>
                      Open government website
                    </span>

                  </div>

                  <ExternalLink
                    size={16}
                  />

                </a>

              )}

          </aside>

        </div>

      </div>

    </div>
  );
}

export default SchemeDetails;