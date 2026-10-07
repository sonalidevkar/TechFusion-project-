import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  FileCheck2,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


const lessons = [
  {
    id: 1,
    title: "Understanding Loans",
    category: "Loans",
    icon: <CircleDollarSign size={22} />,
    color: "green",
    short:
      "Understand principal, interest, tenure, EMI and repayment before choosing a loan.",
    points: [
      "Principal is the amount borrowed.",
      "Interest is the cost charged by the lender.",
      "Tenure is the repayment period.",
      "EMI combines principal and interest into periodic repayments.",
    ],
  },

  {
    id: 2,
    title: "How EMI Works",
    category: "Loans",
    icon: <Calculator size={22} />,
    color: "purple",
    short:
      "Learn how loan amount, interest rate and tenure influence your monthly EMI.",
    points: [
      "Higher loan amounts generally increase EMI.",
      "Higher interest rates generally increase total repayment.",
      "Longer tenure can reduce monthly EMI but may increase total interest.",
      "Compare total repayment, not only the monthly EMI.",
    ],
  },

  {
    id: 3,
    title: "Credit Score Basics",
    category: "Credit",
    icon: <ShieldCheck size={22} />,
    color: "blue",
    short:
      "Learn why responsible repayment and credit behaviour matter when seeking finance.",
    points: [
      "Repay borrowed money on time.",
      "Avoid taking unnecessary debt.",
      "Review your credit information periodically.",
      "Keep your financial records accurate.",
    ],
  },

  {
    id: 4,
    title: "Budgeting for Your Business",
    category: "Business",
    icon: <WalletCards size={22} />,
    color: "orange",
    short:
      "Separate business income, expenses and repayment commitments clearly.",
    points: [
      "Track regular business expenses.",
      "Separate personal and business money where possible.",
      "Keep funds for expected repayments.",
      "Review cash flow before taking new debt.",
    ],
  },

  {
    id: 5,
    title: "Documents You May Need",
    category: "Applications",
    icon: <FileCheck2 size={22} />,
    color: "pink",
    short:
      "Understand common document categories that may be requested during applications.",
    points: [
      "Identity and address information.",
      "Banking and financial details.",
      "Business or enterprise information.",
      "Scheme-specific supporting documents.",
    ],
  },

  {
    id: 6,
    title: "Loans vs Subsidies vs Grants",
    category: "Schemes",
    icon: <BookOpen size={22} />,
    color: "yellow",
    short:
      "Understand the basic difference between different types of support.",
    points: [
      "A loan generally has to be repaid.",
      "A subsidy may reduce an eligible cost or support component.",
      "A grant may provide support subject to the applicable programme rules.",
      "Always verify the exact conditions of the scheme.",
    ],
  },
];


const categories = [
  "All",
  "Loans",
  "Credit",
  "Business",
  "Applications",
  "Schemes",
];


function Literacy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [openLesson, setOpenLesson] = useState(null);


  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const matchesCategory =
        category === "All" || lesson.category === category;

      const query = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !query ||
        lesson.title.toLowerCase().includes(query) ||
        lesson.category.toLowerCase().includes(query) ||
        lesson.short.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);


  const toggleLesson = (id) => {
    setOpenLesson((current) =>
      current === id ? null : id
    );
  };


  return (
    <div className="literacy-page">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="literacy-topbar">

        <Link to="/" className="literacy-brand">

          <div className="literacy-brand-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <h2>YojanaSathi AI</h2>
            <p>Find • Qualify • Apply • Grow</p>
          </div>

        </Link>


        <Link to="/" className="literacy-back-home">

          <ArrowLeft size={16} />

          Back to Home

        </Link>

      </header>


      <main className="literacy-main">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="literacy-intro">

          <div className="literacy-badge">

            <BookOpen size={15} />

            Financial Literacy Hub

          </div>


          <h1>
            Learn Money.
            <br />
            <span>Make Better Decisions.</span>
          </h1>


          <p>
            Simple and practical financial learning for entrepreneurs.
            Understand loans, credit, budgeting and government support
            before making important financial decisions.
          </p>


          <div className="literacy-hero-points">

            <div>
              <CheckCircle2 size={16} />
              Easy language
            </div>

            <div>
              <CheckCircle2 size={16} />
              Practical examples
            </div>

            <div>
              <CheckCircle2 size={16} />
              Business focused
            </div>

          </div>

        </section>


        {/* =====================================================
            SEARCH
        ===================================================== */}

        <section className="literacy-search-card">

          <div className="literacy-search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search loans, EMI, credit, budget..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

          </div>


          <div className="literacy-categories">

            {categories.map((item) => (

              <button
                key={item}
                type="button"
                className={
                  category === item
                    ? "literacy-category active"
                    : "literacy-category"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>

            ))}

          </div>

        </section>


        {/* =====================================================
            LESSONS
        ===================================================== */}

        <section className="literacy-lessons">

          <div className="literacy-section-header">

            <div>

              <span>
                LEARN & GROW
              </span>

              <h2>
                Financial Basics for Entrepreneurs
              </h2>

            </div>

            <div className="literacy-count">
              {filteredLessons.length} Topics
            </div>

          </div>


          <div className="literacy-grid">

            {filteredLessons.map((lesson) => {

              const isOpen = openLesson === lesson.id;

              return (
                <article
                  className={`literacy-card ${lesson.color}`}
                  key={lesson.id}
                >

                  <div className="literacy-card-top">

                    <div className="literacy-card-icon">
                      {lesson.icon}
                    </div>

                    <span>
                      {lesson.category}
                    </span>

                  </div>


                  <h3>
                    {lesson.title}
                  </h3>


                  <p>
                    {lesson.short}
                  </p>


                  <button
                    type="button"
                    className="literacy-learn-btn"
                    onClick={() =>
                      toggleLesson(lesson.id)
                    }
                  >

                    {isOpen
                      ? "Hide Details"
                      : "Learn More"}

                    {isOpen ? (
                      <ChevronUp size={15} />
                    ) : (
                      <ChevronDown size={15} />
                    )}

                  </button>


                  {isOpen && (

                    <div className="literacy-details">

                      {lesson.points.map((point) => (

                        <div key={point}>

                          <CheckCircle2 size={14} />

                          <span>
                            {point}
                          </span>

                        </div>

                      ))}

                    </div>

                  )}

                </article>
              );
            })}

          </div>


          {filteredLessons.length === 0 && (

            <div className="literacy-empty">

              <Search size={31} />

              <h3>
                No topic found
              </h3>

              <p>
                Try another keyword or choose another category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setCategory("All");
                }}
              >
                Show All Topics
              </button>

            </div>

          )}

        </section>


        {/* =====================================================
            BORROWING SAFETY
        ===================================================== */}

        <section className="literacy-safety">

          <div className="literacy-safety-content">

            <div className="literacy-safety-icon">
              <ShieldCheck size={25} />
            </div>


            <span className="literacy-safety-label">
              SMART BORROWING CHECKLIST
            </span>


            <h2>
              Before Taking Any Loan,
              <br />
              Ask These Questions.
            </h2>


            <p>
              A lower EMI does not always mean a lower overall cost.
              Always compare the complete repayment obligation and
              understand the terms before accepting finance.
            </p>


            <div className="literacy-checklist">

              <div>
                <CheckCircle2 size={16} />
                Do I understand the total repayment amount?
              </div>

              <div>
                <CheckCircle2 size={16} />
                Can my business cash flow support the repayment?
              </div>

              <div>
                <CheckCircle2 size={16} />
                Have I checked the official scheme or lender terms?
              </div>

              <div>
                <CheckCircle2 size={16} />
                Do I know the documents and obligations involved?
              </div>

            </div>

          </div>


          <div className="literacy-safety-visual">

            <div className="safety-circle large"></div>
            <div className="safety-circle medium"></div>
            <div className="safety-circle small"></div>

            <div className="safety-center-card">

              <Brain size={30} />

              <strong>
                Think
                <br />
                Before You Borrow
              </strong>

              <span>
                Plan • Compare • Verify
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            CALCULATOR CTA
        ===================================================== */}

        <section className="literacy-calculator-cta">

          <div className="literacy-calculator-icon">
            <Calculator size={23} />
          </div>


          <div>

            <span>
              WANT TO CHECK YOUR EMI?
            </span>

            <h2>
              Calculate Before You Apply
            </h2>

            <p>
              Estimate EMI, total interest and repayment using
              YojanaSathi AI's financial calculator.
            </p>

          </div>


          <Link
            to="/calculator"
            className="literacy-calculator-btn"
          >

            Open Calculator

            <ArrowRight size={16} />

          </Link>

        </section>


        {/* =====================================================
            FINAL NOTE
        ===================================================== */}

        <section className="literacy-note">

          <Lightbulb size={19} />

          <div>

            <strong>
              Remember
            </strong>

            <p>
              Scheme eligibility, interest, limits, documents and
              terms can vary. Always verify the latest information
              on the relevant official government or lender portal
              before applying.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Literacy;