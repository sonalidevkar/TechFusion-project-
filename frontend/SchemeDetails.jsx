import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SchemeDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const scheme = location.state?.scheme;

  if (!scheme) {
    return (
      <div className="scheme-details-page">
        <div className="scheme-details-container">
          <h1>Scheme Not Found</h1>

          <p>
            Please select a scheme from the AI matching results.
          </p>

          <button
            className="back-button"
            onClick={() => navigate("/match-scheme")}
          >
            ← Back to AI Match
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scheme-details-page">

      <div className="scheme-details-container">

        {/* Back Button */}
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Matching Results
        </button>

        {/* Header */}
        <div className="scheme-details-header">

          <div className="scheme-details-icon">
            🤝
          </div>

          <div>
            <p className="scheme-details-label">
              YOJANASATHI AI
            </p>

            <h1>{scheme.name}</h1>

            <span className="active-status">
              ✓ {scheme.status}
            </span>
          </div>

        </div>

        {/* Description */}
        <div className="details-section">

          <h2>About the Scheme</h2>

          <p>
            {scheme.description}
          </p>

        </div>

        {/* Eligibility */}
        <div className="details-section">

          <h2>Eligibility Information</h2>

          <div className="details-grid">

            <div className="detail-box">
              <span>👤 Category</span>

              <strong>
                {scheme.category?.join(", ") || "Not specified"}
              </strong>
            </div>

            <div className="detail-box">
              <span>💼 Business Type</span>

              <strong>
                {scheme.businessType?.join(", ") ||
                  "Not specified"}
              </strong>
            </div>

            <div className="detail-box">
              <span>📍 Eligible States</span>

              <strong>
                {scheme.eligibility?.states?.join(", ") ||
                  "All States"}
              </strong>
            </div>

            <div className="detail-box">
              <span>💰 Maximum Income</span>

              <strong>
                {scheme.eligibility?.maxIncome
                  ? `₹${scheme.eligibility.maxIncome.toLocaleString("en-IN")}`
                  : "No income limit specified"}
              </strong>
            </div>

          </div>

        </div>

        {/* Financial Support */}
        <div className="details-section">

          <h2>Financial Support</h2>

          <div className="support-tags">

            {scheme.financialSupport?.map((support) => (
              <span key={support}>
                ✓ {support}
              </span>
            ))}

          </div>

        </div>

        {/* Application Guidance */}
        <div className="details-section">

          <h2>Application Guidance</h2>

          <div className="guidance-box">

            <div>
              <strong>Step 1</strong>
              <p>Check your eligibility for the scheme.</p>
            </div>

            <div>
              <strong>Step 2</strong>
              <p>Keep the required documents ready.</p>
            </div>

            <div>
              <strong>Step 3</strong>
              <p>Visit the official scheme portal.</p>
            </div>

            <div>
              <strong>Step 4</strong>
              <p>Submit your application and track its status.</p>
            </div>

          </div>

        </div>

        {/* Documents */}
        <div className="details-section">

          <h2>Common Documents</h2>

          <ul className="document-list">
            <li>✓ Aadhaar Card</li>
            <li>✓ PAN Card</li>
            <li>✓ Bank Account Details</li>
            <li>✓ Address Proof</li>
            <li>✓ Business / Enterprise Documents</li>
          </ul>

          <p className="document-note">
            Document requirements may vary depending on the
            scheme and applicant.
          </p>

        </div>

        {/* Bottom Actions */}
        <div className="details-actions">

          <button
            className="apply-button"
            onClick={() =>
              alert(
                "Application guidance will be available here."
              )
            }
          >
            🚀 Start Application
          </button>

          <button
            className="back-button secondary"
            onClick={() => navigate("/match-scheme")}
          >
            Find Another Scheme
          </button>

        </div>

      </div>

    </div>
  );
}

export default SchemeDetails;