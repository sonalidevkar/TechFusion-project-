import {
  LayoutDashboard,
  Bell,
  User,
  Search,
  Calculator,
  FileCheck,
  MapPin,
  Bookmark,
  ArrowRight,
  Clock3,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Sparkles,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Applications",
      value: "4",
      icon: <FileCheck size={22} />,
      className: "dashboard-stat-blue",
    },
    {
      title: "Saved Schemes",
      value: "7",
      icon: <Bookmark size={22} />,
      className: "dashboard-stat-purple",
    },
    {
      title: "AI Matches",
      value: "12",
      icon: <Sparkles size={22} />,
      className: "dashboard-stat-green",
    },
    {
      title: "Active Alerts",
      value: "3",
      icon: <Bell size={22} />,
      className: "dashboard-stat-orange",
    },
  ];

  const recommendations = [
    {
      name: "PM MUDRA Yojana",
      category: "Business Loan",
      benefit: "Loans for micro enterprises",
      match: "94%",
      icon: "🏦",
    },
    {
      name: "PMEGP",
      category: "Credit Linked Subsidy",
      benefit: "Support for new micro enterprises",
      match: "91%",
      icon: "🚀",
    },
    {
      name: "PM Vishwakarma",
      category: "Artisan Support",
      benefit: "Skill, credit and market support",
      match: "87%",
      icon: "🛠️",
    },
  ];

  const applications = [
    {
      id: "YSA2026001",
      scheme: "PM MUDRA Yojana",
      status: "Under Processing",
      date: "28 Sep 2026",
      statusClass: "processing",
    },
    {
      id: "YSA2026002",
      scheme: "PM Vishwakarma",
      status: "Approved",
      date: "24 Sep 2026",
      statusClass: "approved",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* TOP NAVBAR */}
      <header className="dashboard-navbar">
        <div className="dashboard-nav-left">
          <Link to="/" className="dashboard-brand">
            <div className="dashboard-brand-icon">🤖</div>

            <div>
              <strong>YojanaSathi AI</strong>
              <span>Smart Scheme Matching</span>
            </div>
          </Link>
        </div>

        <div className="dashboard-nav-right">

          <Link to="/schemes" className="dashboard-nav-link">
            Schemes
          </Link>

          <Link to="/calculator" className="dashboard-nav-link">
            Calculator
          </Link>

          <div className="dashboard-notification">
            <Bell size={20} />
            <span>3</span>
          </div>

          <div className="dashboard-user">
            <div className="dashboard-user-avatar">
              S
            </div>

            <div className="dashboard-user-info">
              <strong>Sonali</strong>
              <span>Entrepreneur</span>
            </div>
          </div>

        </div>
      </header>


      <main className="dashboard-container">

        {/* WELCOME SECTION */}
        <section className="dashboard-welcome">

          <div>
            <p className="dashboard-small-label">
              👋 Welcome back
            </p>

            <h1>
              Hello, Sonali!
            </h1>

            <p>
              Here’s your personalized YojanaSathi AI overview.
              Discover schemes that can help your business grow.
            </p>
          </div>

          <Link
            to="/schemes"
            className="dashboard-primary-btn"
          >
            <Search size={19} />
            Find New Schemes
          </Link>

        </section>


        {/* STATS */}
        <section className="dashboard-stats-grid">

          {stats.map((stat, index) => (
            <div
              className={`dashboard-stat-card ${stat.className}`}
              key={index}
            >
              <div className="dashboard-stat-top">
                <div className="dashboard-stat-icon">
                  {stat.icon}
                </div>

                <TrendingUp size={17} />
              </div>

              <div className="dashboard-stat-value">
                {stat.value}
              </div>

              <div className="dashboard-stat-title">
                {stat.title}
              </div>
            </div>
          ))}

        </section>


        {/* MAIN GRID */}
        <section className="dashboard-main-grid">

          {/* AI RECOMMENDATIONS */}
          <div className="dashboard-panel dashboard-recommendations">

            <div className="dashboard-panel-header">

              <div>
                <div className="dashboard-heading-with-icon">
                  <Sparkles size={21} />
                  <h2>AI Recommended Schemes</h2>
                </div>

                <p>
                  Based on your profile and business needs
                </p>
              </div>

              <Link to="/schemes">
                View All
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="dashboard-recommendation-list">

              {recommendations.map((scheme, index) => (
                <div
                  className="dashboard-recommendation-card"
                  key={index}
                >

                  <div className="dashboard-rec-icon">
                    {scheme.icon}
                  </div>

                  <div className="dashboard-rec-content">

                    <div className="dashboard-rec-title-row">
                      <h3>{scheme.name}</h3>

                      <span className="dashboard-match-badge">
                        {scheme.match} Match
                      </span>
                    </div>

                    <span className="dashboard-rec-category">
                      {scheme.category}
                    </span>

                    <p>{scheme.benefit}</p>

                    <Link
                      to="/schemes"
                      className="dashboard-rec-btn"
                    >
                      View Scheme
                      <ChevronRight size={16} />
                    </Link>

                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* PROFILE */}
          <div className="dashboard-panel dashboard-profile-panel">

            <div className="dashboard-panel-header">
              <div>
                <div className="dashboard-heading-with-icon">
                  <User size={21} />
                  <h2>Your Profile</h2>
                </div>

                <p>Complete your profile for better matches</p>
              </div>
            </div>


            <div className="dashboard-profile-avatar-large">
              S
            </div>

            <h3 className="dashboard-profile-name">
              Sonali Devkar
            </h3>

            <span className="dashboard-profile-type">
              Small Entrepreneur
            </span>


            <div className="dashboard-profile-details">

              <div>
                <MapPin size={17} />
                <span>Solapur, Maharashtra</span>
              </div>

              <div>
                <BriefcaseBusiness size={17} />
                <span>Business & Services</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Profile 80% complete</span>
              </div>

            </div>


            <div className="dashboard-progress">
              <div className="dashboard-progress-bar">
                <span></span>
              </div>

              <strong>80%</strong>
            </div>


            <button className="dashboard-outline-btn">
              Complete Profile
              <ArrowRight size={17} />
            </button>

          </div>

        </section>


        {/* SECOND ROW */}
        <section className="dashboard-secondary-grid">

          {/* APPLICATIONS */}
          <div className="dashboard-panel">

            <div className="dashboard-panel-header">

              <div>
                <div className="dashboard-heading-with-icon">
                  <FileCheck size={21} />
                  <h2>Recent Applications</h2>
                </div>

                <p>Track your scheme applications</p>
              </div>

              <Link to="/track">
                Track All
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="dashboard-application-list">

              {applications.map((application, index) => (
                <div
                  className="dashboard-application-card"
                  key={index}
                >

                  <div className="dashboard-application-icon">
                    📄
                  </div>

                  <div className="dashboard-application-info">

                    <h3>
                      {application.scheme}
                    </h3>

                    <span>
                      ID: {application.id}
                    </span>

                    <small>
                      Applied on {application.date}
                    </small>

                  </div>

                  <div
                    className={`dashboard-application-status ${application.statusClass}`}
                  >
                    {application.statusClass === "approved" ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Clock3 size={16} />
                    )}

                    {application.status}
                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="dashboard-panel">

            <div className="dashboard-panel-header">

              <div>
                <div className="dashboard-heading-with-icon">
                  <Sparkles size={21} />
                  <h2>Quick Actions</h2>
                </div>

                <p>Useful tools for your business</p>
              </div>

            </div>


            <div className="dashboard-quick-actions">

              <Link
                to="/schemes"
                className="dashboard-action-card"
              >
                <div className="dashboard-action-icon">
                  <Search size={21} />
                </div>

                <div>
                  <strong>Find Schemes</strong>
                  <span>Discover suitable government schemes</span>
                </div>

                <ArrowRight size={18} />
              </Link>


              <Link
                to="/calculator"
                className="dashboard-action-card"
              >
                <div className="dashboard-action-icon">
                  <Calculator size={21} />
                </div>

                <div>
                  <strong>EMI Calculator</strong>
                  <span>Estimate your monthly repayment</span>
                </div>

                <ArrowRight size={18} />
              </Link>


              <Link
                to="/partner"
                className="dashboard-action-card"
              >
                <div className="dashboard-action-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <strong>Find Support</strong>
                  <span>Locate nearby business support</span>
                </div>

                <ArrowRight size={18} />
              </Link>


              <Link
                to="/literacy"
                className="dashboard-action-card"
              >
                <div className="dashboard-action-icon">
                  <BriefcaseBusiness size={21} />
                </div>

                <div>
                  <strong>Financial Learning</strong>
                  <span>Learn smart borrowing basics</span>
                </div>

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </section>


        {/* ALERT SECTION */}
        <section className="dashboard-alert-section">

          <div className="dashboard-alert-icon">
            <AlertCircle size={22} />
          </div>

          <div>
            <strong>3 Important Alerts</strong>

            <p>
              Your profile is incomplete and 2 recommended
              schemes have upcoming application deadlines.
            </p>
          </div>

          <Link
            to="/schemes"
            className="dashboard-alert-btn"
          >
            Review Now
            <ArrowRight size={17} />
          </Link>

        </section>


        {/* MOTIVATION */}
        <section className="dashboard-motivation">

          <div>
            <span>💡 YojanaSathi Tip</span>

            <h2>
              Better profile = Better AI recommendations
            </h2>

            <p>
              Add your business category, location, financial need
              and entrepreneur details to improve scheme matching.
            </p>
          </div>

          <div className="dashboard-motivation-graphic">
            🤖
          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;