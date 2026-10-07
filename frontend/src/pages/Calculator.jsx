import {
  ArrowLeft,
  ArrowRight,
  Calculator as CalculatorIcon,
  IndianRupee,
  Percent,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8);
  const [tenure, setTenure] = useState(3);

  const calculation = useMemo(() => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(tenure);

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    let emi = 0;

    if (monthlyRate === 0) {
      emi = principal / months;
    } else {
      emi =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="calculator-page">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="calculator-topbar">

        <Link to="/" className="calculator-brand">

          <div className="calculator-brand-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <h2>YojanaSathi AI</h2>
            <p>Find • Qualify • Apply • Grow</p>
          </div>

        </Link>

        <Link
          to="/"
          className="calculator-back-home"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="calculator-main">

        {/* INTRO */}

        <section className="calculator-intro">

          <div className="calculator-badge">
            <CalculatorIcon size={15} />
            Smart Financial Calculator
          </div>

          <h1>
            Know Your Loan
            <br />
            <span>Before You Apply</span>
          </h1>

          <p>
            Estimate your monthly EMI, total interest and repayment
            amount before choosing a loan or financial support option.
          </p>

        </section>


        {/* =====================================================
            CALCULATOR LAYOUT
        ====================================================== */}

        <section className="calculator-layout">

          {/* LEFT FORM */}

          <div className="calculator-form-card">

            <div className="calculator-card-heading">

              <div>
                <span>LOAN DETAILS</span>

                <h2>
                  Enter Your Requirement
                </h2>
              </div>

              <div className="calculator-mini-icon">
                <WalletCards size={21} />
              </div>

            </div>


            {/* LOAN AMOUNT */}

            <div className="calculator-field">

              <div className="calculator-label-row">

                <label>
                  Loan Amount
                </label>

                <strong>
                  {formatCurrency(loanAmount)}
                </strong>

              </div>

              <div className="calculator-input-box">

                <IndianRupee size={17} />

                <input
                  type="number"
                  min="1000"
                  value={loanAmount}
                  onChange={(event) =>
                    setLoanAmount(
                      Math.max(
                        1000,
                        Number(event.target.value)
                      )
                    )
                  }
                />

              </div>

              <input
                type="range"
                min="10000"
                max="5000000"
                step="5000"
                value={loanAmount}
                onChange={(event) =>
                  setLoanAmount(
                    Number(event.target.value)
                  )
                }
                className="calculator-range"
              />

              <div className="calculator-range-labels">
                <span>₹10K</span>
                <span>₹50L</span>
              </div>

            </div>


            {/* INTEREST */}

            <div className="calculator-field">

              <div className="calculator-label-row">

                <label>
                  Annual Interest Rate
                </label>

                <strong>
                  {interestRate}%
                </strong>

              </div>

              <div className="calculator-input-box">

                <Percent size={17} />

                <input
                  type="number"
                  min="0"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(event) =>
                    setInterestRate(
                      Math.max(
                        0,
                        Number(event.target.value)
                      )
                    )
                  }
                />

                <span>
                  %
                </span>

              </div>

              <input
                type="range"
                min="0"
                max="30"
                step="0.1"
                value={interestRate}
                onChange={(event) =>
                  setInterestRate(
                    Number(event.target.value)
                  )
                }
                className="calculator-range"
              />

              <div className="calculator-range-labels">
                <span>0%</span>
                <span>30%</span>
              </div>

            </div>


            {/* TENURE */}

            <div className="calculator-field">

              <div className="calculator-label-row">

                <label>
                  Loan Tenure
                </label>

                <strong>
                  {tenure} {tenure === 1 ? "Year" : "Years"}
                </strong>

              </div>

              <div className="calculator-input-box">

                <CalculatorIcon size={17} />

                <input
                  type="number"
                  min="1"
                  max="20"
                  value={tenure}
                  onChange={(event) =>
                    setTenure(
                      Math.min(
                        20,
                        Math.max(
                          1,
                          Number(event.target.value)
                        )
                      )
                    )
                  }
                />

                <span>
                  Years
                </span>

              </div>

              <input
                type="range"
                min="1"
                max="20"
                value={tenure}
                onChange={(event) =>
                  setTenure(
                    Number(event.target.value)
                  )
                }
                className="calculator-range"
              />

              <div className="calculator-range-labels">
                <span>1 Year</span>
                <span>20 Years</span>
              </div>

            </div>


            {/* INFO */}

            <div className="calculator-info-box">

              <Sparkles size={17} />

              <p>
                Use the calculator for an estimate. Actual EMI,
                interest and loan terms depend on the lender and
                applicable scheme conditions.
              </p>

            </div>

          </div>


          {/* RIGHT RESULT */}

          <div className="calculator-result-card">

            <div className="calculator-result-header">

              <div>

                <span>
                  ESTIMATED RESULT
                </span>

                <h2>
                  Your Loan Summary
                </h2>

              </div>

              <div className="calculator-result-icon">
                <CalculatorIcon size={23} />
              </div>

            </div>


            {/* EMI */}

            <div className="emi-highlight">

              <span>
                Estimated Monthly EMI
              </span>

              <strong>
                {formatCurrency(calculation.emi)}
              </strong>

              <small>
                per month
              </small>

            </div>


            {/* SUMMARY */}

            <div className="calculator-summary-grid">

              <div className="summary-box">

                <span>
                  Principal
                </span>

                <strong>
                  {formatCurrency(loanAmount)}
                </strong>

              </div>


              <div className="summary-box">

                <span>
                  Total Interest
                </span>

                <strong>
                  {formatCurrency(
                    calculation.totalInterest
                  )}
                </strong>

              </div>


              <div className="summary-box">

                <span>
                  Total Repayment
                </span>

                <strong>
                  {formatCurrency(
                    calculation.totalPayment
                  )}
                </strong>

              </div>


              <div className="summary-box">

                <span>
                  Interest Rate
                </span>

                <strong>
                  {interestRate}%
                </strong>

              </div>

            </div>


            {/* VISUAL BAR */}

            <div className="repayment-visual">

              <div className="repayment-visual-header">

                <span>
                  Repayment Breakdown
                </span>

                <span>
                  {formatCurrency(
                    calculation.totalPayment
                  )}
                </span>

              </div>

              <div className="repayment-bar">

                <div
                  className="repayment-principal"
                  style={{
                    width: `${
                      calculation.totalPayment > 0
                        ? (loanAmount /
                            calculation.totalPayment) *
                          100
                        : 0
                    }%`,
                  }}
                ></div>

                <div
                  className="repayment-interest"
                  style={{
                    width: `${
                      calculation.totalPayment > 0
                        ? (calculation.totalInterest /
                            calculation.totalPayment) *
                          100
                        : 0
                    }%`,
                  }}
                ></div>

              </div>

              <div className="repayment-legend">

                <span>
                  <i className="principal-dot"></i>
                  Principal
                </span>

                <span>
                  <i className="interest-dot"></i>
                  Interest
                </span>

              </div>

            </div>


            {/* CTA */}

            <Link
              to="/schemes"
              className="calculator-find-scheme"
            >

              Find Suitable Government Schemes

              <ArrowRight size={17} />

            </Link>


            {/* NOTE */}

            <div className="calculator-result-note">

              <WalletCards size={15} />

              <span>
                Compare your estimated repayment with
                available government-supported financing options.
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK TIPS
        ====================================================== */}

        <section className="calculator-tips">

          <div className="calculator-tip">

            <div>
              01
            </div>

            <span>
              Compare rates before selecting a loan.
            </span>

          </div>

          <div className="calculator-tip">

            <div>
              02
            </div>

            <span>
              Choose a tenure that fits your monthly cash flow.
            </span>

          </div>

          <div className="calculator-tip">

            <div>
              03
            </div>

            <span>
              Check scheme eligibility before applying.
            </span>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Calculator;