import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Landmark,
  MapPin,
  Navigation,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

function Partner() {
  const [location, setLocation] = useState("");
  const [partnerType, setPartnerType] = useState("All");
  const [service, setService] = useState("Scheme Support");
  const [searched, setSearched] = useState(false);

  const partnerOptions = [
    {
      id: 1,
      name: "Banks & Lending Partners",
      description:
        "Find nearby banks and financial institutions that may provide eligible credit or loan support.",
      icon: <Building2 size={23} />,
      category: "Bank",
      color: "green",
      mapsText: "banks and government scheme loan centres",
    },
    {
      id: 2,
      name: "District Industry Support",
      description:
        "Locate district-level business support offices and entrepreneurship assistance.",
      icon: <Landmark size={23} />,
      category: "Government Office",
      color: "purple",
      mapsText: "District Industries Centre",
    },
    {
      id: 3,
      name: "CSC & Digital Support",
      description:
        "Find nearby Common Service Centres and digital assistance points.",
      icon: <Store size={23} />,
      category: "Digital Support",
      color: "blue",
      mapsText: "Common Service Centre CSC",
    },
    {
      id: 4,
      name: "Entrepreneurship Support",
      description:
        "Search for MSME support organisations, incubators and entrepreneurship assistance.",
      icon: <Users size={23} />,
      category: "Business Support",
      color: "orange",
      mapsText: "MSME support centre entrepreneurship",
    },
  ];

  const visiblePartners =
    partnerType === "All"
      ? partnerOptions
      : partnerOptions.filter(
          (partner) => partner.category === partnerType
        );

  const searchOnMaps = (searchText) => {
    const query = location.trim()
      ? `${searchText} near ${location}`
      : `${searchText} near me`;

    const url =
      `https://www.google.com/maps/search/?api=1&query=` +
      encodeURIComponent(query);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearched(true);
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Location detection is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const mapsUrl =
          `https://www.google.com/maps/search/?api=1&query=` +
          encodeURIComponent(`${latitude},${longitude}`);

        window.open(mapsUrl, "_blank", "noopener,noreferrer");
      },
      () => {
        alert(
          "Location permission was not available. Please enter your city or district manually."
        );
      }
    );
  };

  return (
    <div className="partner-page">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="partner-topbar">

        <Link to="/" className="partner-brand">

          <div className="partner-brand-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <h2>YojanaSathi AI</h2>
            <p>Find • Qualify • Apply • Grow</p>
          </div>

        </Link>

        <Link to="/" className="partner-back-home">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="partner-main">

        {/* INTRO */}

        <section className="partner-intro">

          <div className="partner-badge">
            <MapPin size={15} />
            Support Partner Finder
          </div>

          <h1>
            Find the Right
            <br />
            <span>Support Near You</span>
          </h1>

          <p>
            Search for banks, government support offices, digital service
            centres and entrepreneurship support based on your location
            and business needs.
          </p>

        </section>


        {/* =====================================================
            SEARCH PANEL
        ===================================================== */}

        <section className="partner-search-card">

          <div className="partner-search-heading">

            <div>

              <span>
                FIND SUPPORT
              </span>

              <h2>
                Where Do You Need Help?
              </h2>

            </div>

            <div className="partner-search-icon">
              <Navigation size={21} />
            </div>

          </div>


          <form
            className="partner-form"
            onSubmit={handleSearch}
          >

            {/* LOCATION */}

            <div className="partner-field">

              <label>
                City / District / PIN Code
              </label>

              <div className="partner-input">

                <MapPin size={17} />

                <input
                  type="text"
                  placeholder="Example: Solapur, Maharashtra"
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                />

              </div>

            </div>


            {/* TYPE */}

            <div className="partner-field">

              <label>
                Partner Type
              </label>

              <div className="partner-input">

                <Building2 size={17} />

                <select
                  value={partnerType}
                  onChange={(event) =>
                    setPartnerType(event.target.value)
                  }
                >

                  <option value="All">
                    All Support Partners
                  </option>

                  <option value="Bank">
                    Banks
                  </option>

                  <option value="Government Office">
                    Government Offices
                  </option>

                  <option value="Digital Support">
                    CSC / Digital Support
                  </option>

                  <option value="Business Support">
                    Business / MSME Support
                  </option>

                </select>

              </div>

            </div>


            {/* SERVICE */}

            <div className="partner-field">

              <label>
                What Do You Need?
              </label>

              <div className="partner-input">

                <ShieldCheck size={17} />

                <select
                  value={service}
                  onChange={(event) =>
                    setService(event.target.value)
                  }
                >

                  <option>
                    Scheme Support
                  </option>

                  <option>
                    Loan / Credit
                  </option>

                  <option>
                    Subsidy / Grant
                  </option>

                  <option>
                    Business Registration
                  </option>

                  <option>
                    Application Assistance
                  </option>

                  <option>
                    Digital Services
                  </option>

                </select>

              </div>

            </div>


            {/* BUTTONS */}

            <div className="partner-search-actions">

              <button
                type="submit"
                className="partner-search-btn"
              >

                <Search size={17} />

                Find Support

                <ArrowRight size={16} />

              </button>


              <button
                type="button"
                className="partner-location-btn"
                onClick={detectLocation}
              >

                <Navigation size={16} />

                Use My Location

              </button>

            </div>

          </form>


          <div className="partner-search-note">

            <ShieldCheck size={14} />

            <span>
              We do not display unverified partner addresses.
              Search results are opened through map/location services.
            </span>

          </div>

        </section>


        {/* =====================================================
            RESULTS
        ===================================================== */}

        <section className="partner-results">

          <div className="partner-results-header">

            <div>

              <span>
                SUPPORT OPTIONS
              </span>

              <h2>
                {searched
                  ? "Support Options Near Your Search"
                  : "Choose the Support You Need"}
              </h2>

            </div>

            <div className="partner-result-status">

              <span></span>

              Location Based Search

            </div>

          </div>


          {/* CARDS */}

          <div className="partner-grid">

            {visiblePartners.map((partner) => (

              <article
                className={`partner-card ${partner.color}`}
                key={partner.id}
              >

                <div className="partner-card-top">

                  <div className="partner-card-icon">
                    {partner.icon}
                  </div>

                  <span className="partner-type">
                    {partner.category}
                  </span>

                </div>


                <h3>
                  {partner.name}
                </h3>


                <p>
                  {partner.description}
                </p>


                <div className="partner-service">

                  <CheckCircle2 size={15} />

                  <span>
                    Useful for: {service}
                  </span>

                </div>


                <button
                  type="button"
                  className="partner-map-btn"
                  onClick={() =>
                    searchOnMaps(partner.mapsText)
                  }
                >

                  <MapPin size={15} />

                  Search Near {location || "Me"}

                  <ExternalLink size={14} />

                </button>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            OFFICIAL SUPPORT CHANNELS
        ===================================================== */}

        <section className="official-partner-section">

          <div className="official-partner-heading">

            <span>
              OFFICIAL SUPPORT CHANNELS
            </span>

            <h2>
              Useful Government & Financial Portals
            </h2>

            <p>
              These resources can help users continue their journey
              after discovering a suitable scheme.
            </p>

          </div>


          <div className="official-partner-grid">

            {/* JAN SAMARTH */}

            <a
              href="https://www.jansamarth.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="official-partner-card"
            >

              <div className="official-partner-icon green">
                <Globe2 size={21} />
              </div>

              <div>

                <span>
                  OFFICIAL PORTAL
                </span>

                <h3>
                  JanSamarth
                </h3>

                <p>
                  Government credit-linked scheme discovery and
                  application platform.
                </p>

                <strong>
                  Open Portal
                  <ExternalLink size={13} />
                </strong>

              </div>

            </a>


            {/* SIDBI */}

            <a
              href="https://www.sidbi.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="official-partner-card"
            >

              <div className="official-partner-icon purple">
                <Building2 size={21} />
              </div>

              <div>

                <span>
                  FINANCIAL SUPPORT
                </span>

                <h3>
                  SIDBI
                </h3>

                <p>
                  Financial and development support for eligible
                  micro, small and medium enterprises.
                </p>

                <strong>
                  Visit SIDBI
                  <ExternalLink size={13} />
                </strong>

              </div>

            </a>


            {/* MSME CHAMPIONS */}

            <a
              href="https://champions.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="official-partner-card"
            >

              <div className="official-partner-icon blue">
                <Users size={21} />
              </div>

              <div>

                <span>
                  MSME SUPPORT
                </span>

                <h3>
                  MSME CHAMPIONS
                </h3>

                <p>
                  MSME support, guidance and grievance assistance
                  through the government platform.
                </p>

                <strong>
                  Visit MSME CHAMPIONS
                  <ExternalLink size={13} />
                </strong>

              </div>

            </a>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="partner-cta">

          <div className="partner-cta-icon">
            <Sparkles size={22} />
          </div>

          <div>

            <span>
              NEXT STEP
            </span>

            <h2>
              Found a scheme but need help applying?
            </h2>

            <p>
              Use YojanaSathi AI's scheme information and application
              guidance to understand what to do next.
            </p>

          </div>

          <Link
            to="/schemes"
            className="partner-cta-btn"
          >

            Explore Schemes

            <ArrowRight size={16} />

          </Link>

        </section>

      </main>

    </div>
  );
}

export default Partner;