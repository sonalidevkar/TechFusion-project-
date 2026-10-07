import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  XCircle,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";


function Track() {
  const [applicationId, setApplicationId] = useState("");
  const [searched, setSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);


  const demoApplications = {
    YSA2026001: {
      applicant: "Demo Entrepreneur",
      scheme: "PM MUDRA Yojana",
      amount: "₹2,50,000",
      submitted: "05 October 2026",
      lastUpdated: "07 October 2026",
      currentStep: 3,
      status: "Under Processing",
    },

    YSA2026002: {
      applicant: "Demo Business Owner",
      scheme: "PM Vishwakarma",
      amount: "₹1,40,000",
      submitted: "02 October 2026",
      lastUpdated: "07 October 2026",
      currentStep: 4,
      status: "Approved",
    },
  };


  const [application, setApplication] = useState(null);


  const handleSearch = (event) => {
    event.preventDefault();

    const id = applicationId.trim().toUpperCase();

    if (!id) {
      setSearched(false);
      setNotFound(false);
      setApplication(null);
      return;
    }

    const result = demoApplications[id];

    setSearched(true);

    if (result) {
      setApplication(result);
      setNotFound(false);
    } else {
      setApplication(null);
      setNotFound(true);
    }
  };


  const steps = [
    {
      title: "Application Submitted",
      description:
        "Your application has been successfully submitted.",
      icon: <FileText size={19} />,
    },

    {
      title: "Initial Review",
      description:
        "Your profile and eligibility information are being checked.",
      icon: <UserRound size={19} />,
    },

    {
      title: "Documents Verified",
      description:
        "Submitted documents are being reviewed and verified.",
      icon: <FileCheck2 size={19} />,
    },

    {
      title: "Under Processing",
      description:
        "Your application is being processed by the concerned institution.",
      icon: <Clock3 size={19} />,
    },

    {
      title: "Decision",
      description:
        "Final decision or next action will be updated here.",
      icon: <CheckCircle2 size={19} />,
    },
  ];


  return (
    <div className="track-page">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="track-topbar">

        <Link
          to="/"
          className="track-brand"
        >

          <div className="track-brand-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <h2>
              YojanaSathi AI
            </h2>

            <p>
              Find • Qualify • Apply • Grow
            </p>
          </div>

        </Link>


        <Link
          to="/"
          className="track-back-home"
        >

          <ArrowLeft size={16} />

          Back to Home

        </Link>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="track-main">

        {/* INTRO */}

        <section className="track-intro">

          <div className="track-badge">

            <Clock3 size={15} />

            Application Tracking

          </div>


          <h1>

            Know Where
            <br />

            <span>Your Application Stands.</span>

          </h1>


          <p>
            Enter your application ID to view the current stage,
            latest update and application journey.
          </p>

        </section>


        {/* =====================================================
            SEARCH
        ===================================================== */}

        <section className="track-search-card">

          <div className="track-search-heading">

            <div>

              <span>
                APPLICATION ID
              </span>

              <h2>
                Track Your Application
              </h2>

            </div>


            <div className="track-search-icon">

              <Search size={21} />

            </div>

          </div>


          <form
            className="track-form"
            onSubmit={handleSearch}
          >

            <div className="track-input-wrapper">

              <FileText size={18} />

              <input
                type="text"
                placeholder="Example: YSA2026001"
                value={applicationId}
                onChange={(event) =>
                  setApplicationId(event.target.value)
                }
              />

            </div>


            <button
              type="submit"
              className="track-search-btn"
            >

              <Search size={17} />

              Track Application

              <ArrowRight size={16} />

            </button>

          </form>


          <div className="track-demo-note">

            <Sparkles size={14} />

            <span>
              Demo IDs:
              <strong> YSA2026001 </strong>
              or
              <strong> YSA2026002</strong>
            </span>

          </div>

        </section>


        {/* =====================================================
            NOT FOUND
        ===================================================== */}

        {notFound && (

          <section className="track-not-found">

            <div className="track-not-found-icon">
              <XCircle size={28} />
            </div>

            <h2>
              Application Not Found
            </h2>

            <p>
              We could not find an application with ID
              <strong> {applicationId}</strong>.
              Please check the ID and try again.
            </p>

            <button
              type="button"
              onClick={() => {
                setApplicationId("");
                setSearched(false);
                setNotFound(false);
              }}
            >
              Try Again
            </button>

          </section>

        )}


        {/* =====================================================
            APPLICATION RESULT
        ===================================================== */}

        {searched && application && (

          <section className="track-result">


            {/* APPLICATION SUMMARY */}

            <div className="track-summary-card">

              <div className="track-summary-top">

                <div>

                  <span>
                    APPLICATION FOUND
                  </span>

                  <h2>
                    {applicationId.toUpperCase()}
                  </h2>

                </div>


                <div className="track-status-badge">

                  <span></span>

                  {application.status}

                </div>

              </div>


              <div className="track-summary-grid">

                <div>

                  <span>
                    Applicant
                  </span>

                  <strong>
                    {application.applicant}
                  </strong>

                </div>


                <div>

                  <span>
                    Scheme
                  </span>

                  <strong>
                    {application.scheme}
                  </strong>

                </div>


                <div>

                  <span>
                    Requested Support
                  </span>

                  <strong>
                    {application.amount}
                  </strong>

                </div>


                <div>

                  <span>
                    Submitted On
                  </span>

                  <strong>
                    {application.submitted}
                  </strong>

                </div>

              </div>

            </div>


            {/* CURRENT STATUS */}

            <div className="track-current-card">

              <div className="track-current-icon">
                <Clock3 size={22} />
              </div>


              <div>

                <span>
                  CURRENT STATUS
                </span>

                <h2>
                  {application.status}
                </h2>

                <p>
                  Last updated on {application.lastUpdated}
                </p>

              </div>

            </div>


            {/* =================================================
                TIMELINE
            ================================================== */}

            <div className="track-timeline-card">

              <div className="track-timeline-header">

                <div>

                  <span>
                    APPLICATION JOURNEY
                  </span>

                  <h2>
                    Track Every Step
                  </h2>

                </div>


                <div className="track-secure">

                  <ShieldCheck size={15} />

                  Secure Tracking

                </div>

              </div>


              <div className="track-timeline">

                {steps.map((step, index) => {

                  const stepNumber = index + 1;

                  const completed =
                    application.currentStep >= stepNumber;

                  const current =
                    application.currentStep === stepNumber;

                  return (
                    <div
                      className={
                        completed
                          ? "track-step completed"
                          : "track-step"
                      }
                      key={step.title}
                    >

                      <div className="track-step-left">

                        <div className="track-step-number">

                          {completed ? (
                            <Check size={16} />
                          ) : (
                            stepNumber
                          )}

                        </div>


                        {index < steps.length - 1 && (
                          <div
                            className={
                              application.currentStep >
                              stepNumber
                                ? "track-step-line completed"
                                : "track-step-line"
                            }
                          ></div>
                        )}

                      </div>


                      <div className="track-step-content">

                        <div className="track-step-icon">
                          {step.icon}
                        </div>


                        <div>

                          <div className="track-step-title">

                            <h3>
                              {step.title}
                            </h3>

                            {current && (
                              <span>
                                Current
                              </span>
                            )}

                          </div>

                          <p>
                            {step.description}
                          </p>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>


            {/* NEXT ACTION */}

            <div className="track-next-card">

              <div className="track-next-icon">
                <Sparkles size={21} />
              </div>


              <div>

                <span>
                  NEXT STEP
                </span>

                <h3>
                  Keep your documents ready
                </h3>

                <p>
                  The concerned institution may request
                  additional information or verification.
                </p>

              </div>

            </div>


          </section>

        )}


        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {!searched && (

          <section className="track-empty">

            <div className="track-empty-icon">
              <Search size={28} />
            </div>

            <h2>
              Enter Your Application ID
            </h2>

            <p>
              Your application progress will appear here
              after you search.
            </p>

          </section>

        )}


        {/* =====================================================
            FOOTER CTA
        ===================================================== */}

        <section className="track-footer-cta">

          <div>

            <ShieldCheck size={22} />

            <div>

              <strong>
                Need help with a scheme?
              </strong>

              <span>
                Explore government schemes and application guidance.
              </span>

            </div>

          </div>


          <Link
            to="/schemes"
            className="track-footer-btn"
          >

            Explore Schemes

            <ArrowRight size={16} />

          </Link>

        </section>

      </main>

    </div>
  );
}

export default Track;