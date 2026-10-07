import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  IndianRupee,
  Landmark,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


/* =========================================================
   REAL GOVERNMENT SCHEMES
   Official portals / official Government pages
========================================================= */

const governmentSchemes = [
  {
    id: 1,

    name: "Prime Minister's Employment Generation Programme",
    shortName: "PMEGP",

    ministry: "Ministry of Micro, Small & Medium Enterprises",

    category: "Entrepreneurship",

    tags: [
      "Micro Enterprise",
      "New Business",
      "Employment",
      "Rural",
    ],

    description:
      "A Government of India programme supporting aspiring entrepreneurs to establish new micro enterprises in the non-farm sector.",

    benefit:
      "Credit-linked margin money subsidy support",

    eligibility:
      "Suitable for eligible individuals and entities establishing new micro enterprises, subject to scheme guidelines.",

    officialLink:
      "https://ia-pmegp.msme.gov.in/",

    applyLink:
      "https://kviconline.gov.in/pmegpeportal/jsp/loginPage.jsp",

    icon: "🏭",

    color: "orange",
  },


  {
    id: 2,

    name: "Pradhan Mantri MUDRA Yojana",
    shortName: "PMMY",

    ministry: "Department of Financial Services, Ministry of Finance",

    category: "Loans",

    tags: [
      "Micro Business",
      "Working Capital",
      "Manufacturing",
      "Trading",
      "Services",
    ],

    description:
      "Collateral-free institutional credit support for micro enterprises engaged in income-generating activities.",

    benefit:
      "Shishu up to ₹50,000 • Kishor up to ₹5 lakh • Tarun up to ₹10 lakh • Tarun Plus up to ₹20 lakh for eligible previous Tarun borrowers",

    eligibility:
      "For eligible micro enterprises and entrepreneurs undertaking income-generating activities covered under PMMY.",

    officialLink:
      "https://financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy",

    applyLink:
      "https://www.jansamarth.in/home",

    icon: "💰",

    color: "green",
  },


  {
    id: 3,

    name: "Stand-Up India Scheme",
    shortName: "Stand-Up India",

    ministry: "Department of Financial Services, Ministry of Finance",

    category: "SC / ST / Women",

    tags: [
      "SC",
      "ST",
      "Women",
      "Greenfield Enterprise",
      "Loan",
    ],

    description:
      "Supports entrepreneurship among Scheduled Castes, Scheduled Tribes and women by facilitating bank credit for eligible greenfield enterprises.",

    benefit:
      "Composite loans from ₹10 lakh to ₹1 crore for eligible greenfield enterprises",

    eligibility:
      "Entrepreneurs above 18 years from eligible SC/ST categories or women entrepreneurs, subject to scheme conditions.",

    officialLink:
      "https://financialservices.gov.in/stand-india-scheme-supi",

    applyLink:
      "https://www.standupmitra.in/",

    icon: "🚀",

    color: "purple",
  },


  {
    id: 4,

    name: "PM Vishwakarma",
    shortName: "PM Vishwakarma",

    ministry: "Ministry of Micro, Small & Medium Enterprises",

    category: "Artisans",

    tags: [
      "Artisan",
      "Craftsperson",
      "Traditional Trade",
      "Skill",
      "Toolkit",
    ],

    description:
      "A Central Sector Scheme providing end-to-end support to artisans and craftspeople through recognition, training, toolkit support, credit and market linkage.",

    benefit:
      "Skill training • ₹15,000 toolkit incentive • collateral-free credit support • digital transaction incentive • marketing support",

    eligibility:
      "For eligible artisans and craftspeople working with hands and tools in one of the covered traditional trades.",

    officialLink:
      "https://www.myscheme.gov.in/schemes/pmv",

    applyLink:
      "https://pmvishwakarma.gov.in/",

    icon: "🛠️",

    color: "blue",
  },


  {
    id: 5,

    name: "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
    shortName: "PMFME",

    ministry: "Ministry of Food Processing Industries",

    category: "Food Processing",

    tags: [
      "Food",
      "Micro Enterprise",
      "ODOP",
      "SHG",
      "FPO",
    ],

    description:
      "Government support for formalisation and upgrading of micro food-processing enterprises, with a focus on individual units and groups.",

    benefit:
      "Credit-linked capital subsidy and other support components subject to scheme guidelines",

    eligibility:
      "Support is available to eligible individual and group food-processing enterprises under the applicable scheme components.",

    officialLink:
      "https://pmfme.mofpi.gov.in/pmfme/",

    applyLink:
      "https://pmfme.mofpi.gov.in/pmfme/",

    icon: "🍱",

    color: "yellow",
  },


  {
    id: 6,

    name: "Credit Guarantee Scheme for Micro & Small Enterprises",
    shortName: "CGTMSE",

    ministry: "Ministry of Micro, Small & Medium Enterprises",

    category: "Credit Guarantee",

    tags: [
      "MSME",
      "Collateral-Free",
      "Credit",
      "Business Loan",
    ],

    description:
      "Provides credit guarantee support for eligible credit facilities extended to micro and small enterprises by participating lending institutions.",

    benefit:
      "Credit guarantee support for eligible facilities; current scheme framework supports credit facilities up to ₹10 crore",

    eligibility:
      "Eligible micro and small enterprises obtaining qualifying credit through participating lending institutions.",

    officialLink:
      "https://www.cgtmse.in/",

    applyLink:
      "https://www.cgtmse.in/",

    icon: "🛡️",

    color: "teal",
  },


  {
    id: 7,

    name: "PM Street Vendor's AtmaNirbhar Nidhi",
    shortName: "PM SVANidhi",

    ministry: "Ministry of Housing & Urban Affairs",

    category: "Street Vendors",

    tags: [
      "Street Vendor",
      "Working Capital",
      "Urban",
      "Digital",
    ],

    description:
      "A Government scheme providing working-capital support and other interventions for eligible street vendors.",

    benefit:
      "Working-capital loan support with digital adoption and other scheme benefits subject to current guidelines",

    eligibility:
      "For eligible street vendors under PM SVANidhi guidelines.",

    officialLink:
      "https://pmsvanidhi.mohua.gov.in/",

    applyLink:
      "https://pmsvanidhi.mohua.gov.in/",

    icon: "🛒",

    color: "pink",
  },


  {
    id: 8,

    name: "National SC-ST Hub",
    shortName: "NSSH",

    ministry: "Ministry of Micro, Small & Medium Enterprises",

    category: "SC / ST Entrepreneurs",

    tags: [
      "SC",
      "ST",
      "Market Access",
      "Capacity Building",
      "Procurement",
    ],

    description:
      "A focused MSME initiative supporting SC/ST entrepreneurs through capacity building, market access, procurement support and business development.",

    benefit:
      "Business support, capacity building, market linkage and procurement-related assistance",

    eligibility:
      "Designed for eligible SC/ST entrepreneurs and enterprises under applicable National SC-ST Hub components.",

    officialLink:
      "https://www.scsthub.in/",

    applyLink:
      "https://www.scsthub.in/",

    icon: "🤝",

    color: "red",
  },
];


/* =========================================================
   SCHEMES PAGE
========================================================= */

function Schemes() {

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");


  /* =====================================================
     FILTER SCHEMES
  ===================================================== */

  const filteredSchemes = useMemo(() => {

    return governmentSchemes.filter((scheme) => {

      const matchesSearch =
        scheme.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        scheme.shortName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        scheme.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        scheme.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );


      const matchesCategory =
        selectedCategory === "All" ||
        scheme.category === selectedCategory;


      return matchesSearch && matchesCategory;

    });

  }, [searchTerm, selectedCategory]);


  const categories = [
    "All",
    "Loans",
    "Entrepreneurship",
    "SC / ST / Women",
    "Artisans",
    "Food Processing",
    "Credit Guarantee",
    "Street Vendors",
    "SC / ST Entrepreneurs",
  ];


  return (
    <div className="schemes-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="schemes-topbar">

        <Link
          to="/"
          className="schemes-brand"
        >

          <div className="schemes-brand-icon">
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
          className="schemes-back-home"
        >

          <ArrowLeft size={16} />

          Back to Home

        </Link>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="schemes-main">


        {/* =================================================
            INTRO
        ================================================= */}

        <section className="schemes-intro">

          <div className="scheme-ai-badge">

            <Brain size={15} />

            Real Government Schemes

          </div>


          <h1>

            Find the Right

            <br />

            <span>
              Government Support for You
            </span>

          </h1>


          <p>

            Explore real Government of India schemes for loans,
            subsidies, credit support, entrepreneurship, artisans,
            street vendors and marginalized entrepreneurs.

          </p>


          <div className="official-notice">

            <ShieldCheck size={16} />

            <span>
              Scheme information and links are connected to
              official government portals.
            </span>

          </div>

        </section>


        {/* =================================================
            SEARCH + FILTER
        ================================================= */}

        <section className="scheme-search-section">


          {/* SEARCH */}

          <div className="scheme-search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search scheme, loan, artisan, SC, women, food..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

          </div>


          {/* CATEGORIES */}

          <div className="scheme-categories">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "scheme-category active"
                    : "scheme-category"
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>

        </section>


        {/* =================================================
            RESULTS
        ================================================= */}

        <section className="scheme-results-section">

          <div className="scheme-results-header">

            <div>

              <span>
                GOVERNMENT SCHEMES
              </span>

              <h2>
                {filteredSchemes.length} Schemes Found
              </h2>

            </div>


            <div className="scheme-live-indicator">

              <span></span>

              Live Official Links

            </div>

          </div>


          {/* =================================================
              CARD GRID
          ================================================= */}

          <div className="scheme-card-grid">


            {filteredSchemes.map((scheme) => (

              <article
                className={`government-scheme-card ${scheme.color}`}
                key={scheme.id}
              >


                {/* CARD TOP */}

                <div className="scheme-card-top">

                  <div className="scheme-icon-box">
                    {scheme.icon}
                  </div>


                  <span className="scheme-category-label">
                    {scheme.category}
                  </span>

                </div>


                {/* TITLE */}

                <div className="scheme-title-area">

                  <span className="scheme-short-name">
                    {scheme.shortName}
                  </span>

                  <h3>
                    {scheme.name}
                  </h3>

                </div>


                {/* MINISTRY */}

                <div className="scheme-ministry">

                  <Landmark size={14} />

                  <span>
                    {scheme.ministry}
                  </span>

                </div>


                {/* DESCRIPTION */}

                <p className="scheme-description">
                  {scheme.description}
                </p>


                {/* BENEFIT */}

                <div className="scheme-benefit-box">

                  <div className="scheme-benefit-icon">
                    <WalletCards size={16} />
                  </div>

                  <div>

                    <span>
                      Key Support
                    </span>

                    <strong>
                      {scheme.benefit}
                    </strong>

                  </div>

                </div>


                {/* TAGS */}

                <div className="scheme-tags">

                  {scheme.tags.slice(0, 4).map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>


                {/* ELIGIBILITY */}

                <div className="scheme-eligibility">

                  <FileCheck2 size={15} />

                  <div>

                    <span>
                      Eligibility
                    </span>

                    <p>
                      {scheme.eligibility}
                    </p>

                  </div>

                </div>


                {/* ACTIONS */}

                <div className="scheme-actions">


                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scheme-details-btn"
                  >

                    Official Details

                    <ExternalLink size={14} />

                  </a>


                  <a
                    href={scheme.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scheme-apply-btn"
                  >

                    Apply / Portal

                    <ArrowRight size={15} />

                  </a>

                </div>


                {/* GOVERNMENT NOTICE */}

                <div className="scheme-official-label">

                  <CheckCircle2 size={13} />

                  Official Government Source

                </div>

              </article>

            ))}

          </div>


          {/* =================================================
              NO RESULT
          ================================================= */}

          {filteredSchemes.length === 0 && (

            <div className="no-schemes">

              <Search size={35} />

              <h3>
                No matching schemes found
              </h3>

              <p>
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Show All Schemes
              </button>

            </div>

          )}

        </section>


        {/* =================================================
            JAN SAMARTH
        ================================================= */}

        <section className="jansamarth-card">

          <div className="jansamarth-icon">

            <IndianRupee size={25} />

          </div>


          <div className="jansamarth-content">

            <span>
              OFFICIAL FINANCIAL SCHEME DISCOVERY
            </span>

            <h2>
              Explore eligible credit schemes through JanSamarth
            </h2>

            <p>
              JanSamarth is the Government of India's unified portal
              that onboards multiple credit-linked schemes and connects
              applicants with lenders and government stakeholders.
            </p>

          </div>


          <a
            href="https://www.jansamarth.in/home"
            target="_blank"
            rel="noopener noreferrer"
            className="jansamarth-btn"
          >

            Open JanSamarth

            <ExternalLink size={15} />

          </a>

        </section>


        {/* =================================================
            TRUST
        ================================================= */}

        <section className="scheme-trust-section">

          <div>

            <ShieldCheck size={20} />

            <strong>
              Use Official Government Links
            </strong>

            <span>
              Always verify eligibility, documents, terms and
              application status on the official portal before applying.
            </span>

          </div>


          <Link to="/">
            Back to YojanaSathi AI
            <ArrowRight size={15} />
          </Link>

        </section>

      </main>

    </div>
  );
}


export default Schemes;