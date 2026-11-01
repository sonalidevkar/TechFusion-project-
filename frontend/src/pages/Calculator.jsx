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
import { useLanguage } from "../context/LanguageContext.jsx";

const calculatorTranslations = {
  hi: {
    'Find • Qualify • Apply • Grow': 'खोजें • पात्रता • आवेदन • विकास',
    'Back to Home': 'होम पर वापस जाएं',
    'Smart Financial Calculator': 'स्मार्ट वित्तीय कैलकुलेटर',
    'Know Your Loan': 'अपने ऋण को समझें',
    'Before You Apply': 'आवेदन करने से पहले',
    'Estimate your monthly EMI, total interest and repayment\n            amount before choosing a loan or financial support option.': 'ऋण या वित्तीय सहायता चुनने से पहले मासिक ईएमआई, कुल ब्याज और भुगतान का अनुमान लगाएं।',
    'LOAN DETAILS': 'ऋण विवरण',
    'Enter Your Requirement': 'अपनी आवश्यकता दर्ज करें',
    'Loan Amount': 'ऋण राशि',
    'Annual Interest Rate': 'वार्षिक ब्याज दर',
    'Loan Tenure': 'ऋण अवधि',
    'Year': 'वर्ष',
    'Years': 'वर्ष',
    '1 Year': '1 वर्ष',
    '20 Years': '20 वर्ष',
    'Use the calculator for an estimate. Actual EMI,\n                interest and loan terms depend on the lender and\n                applicable scheme conditions.': 'यह कैलकुलेटर केवल अनुमान देता है। वास्तविक ईएमआई, ब्याज और ऋण शर्तें ऋणदाता तथा योजना पर निर्भर करती हैं।',
    'ESTIMATED RESULT': 'अनुमानित परिणाम',
    'Your Loan Summary': 'आपके ऋण का सारांश',
    'Estimated Monthly EMI': 'अनुमानित मासिक ईएमआई',
    'per month': 'प्रति माह',
    'Principal': 'मूलधन',
    'Total Interest': 'कुल ब्याज',
    'Total Repayment': 'कुल भुगतान',
    'Interest Rate': 'ब्याज दर',
    'Repayment Breakdown': 'भुगतान का विवरण',
    'Interest': 'ब्याज',
    'Find Suitable Government Schemes': 'उपयुक्त सरकारी योजनाएं खोजें',
    'Compare your estimated repayment with\n                available government-supported financing options.': 'अपने अनुमानित भुगतान की तुलना उपलब्ध सरकारी वित्तीय सहायता विकल्पों से करें।',
    'Compare rates before selecting a loan.': 'ऋण चुनने से पहले ब्याज दरों की तुलना करें।',
    'Choose a tenure that fits your monthly cash flow.': 'अपने मासिक बजट के अनुसार ऋण अवधि चुनें।',
    'Check scheme eligibility before applying.': 'आवेदन करने से पहले योजना की पात्रता जांचें।',
  },
  mr: {
    'Find • Qualify • Apply • Grow': 'शोधा • पात्रता • अर्ज • प्रगती',
    'Back to Home': 'मुख्यपृष्ठावर परत जा',
    'Smart Financial Calculator': 'स्मार्ट आर्थिक कॅल्क्युलेटर',
    'Know Your Loan': 'तुमचे कर्ज समजून घ्या',
    'Before You Apply': 'अर्ज करण्यापूर्वी',
    'Estimate your monthly EMI, total interest and repayment\n            amount before choosing a loan or financial support option.': 'कर्ज किंवा आर्थिक मदत निवडण्यापूर्वी मासिक EMI, एकूण व्याज आणि परतफेडीचा अंदाज घ्या.',
    'LOAN DETAILS': 'कर्जाचा तपशील',
    'Enter Your Requirement': 'तुमची गरज नोंदवा',
    'Loan Amount': 'कर्जाची रक्कम',
    'Annual Interest Rate': 'वार्षिक व्याजदर',
    'Loan Tenure': 'कर्जाचा कालावधी',
    'Year': 'वर्ष',
    'Years': 'वर्षे',
    '1 Year': '1 वर्ष',
    '20 Years': '20 वर्षे',
    'Use the calculator for an estimate. Actual EMI,\n                interest and loan terms depend on the lender and\n                applicable scheme conditions.': 'हा कॅल्क्युलेटर फक्त अंदाज देतो. वास्तविक EMI, व्याज आणि कर्जाच्या अटी कर्जदाता व योजनेवर अवलंबून असतात.',
    'ESTIMATED RESULT': 'अंदाजित निकाल',
    'Your Loan Summary': 'तुमच्या कर्जाचा सारांश',
    'Estimated Monthly EMI': 'अंदाजित मासिक EMI',
    'per month': 'दरमहा',
    'Principal': 'मुद्दल',
    'Total Interest': 'एकूण व्याज',
    'Total Repayment': 'एकूण परतफेड',
    'Interest Rate': 'व्याजदर',
    'Repayment Breakdown': 'परतफेडीचे विभाजन',
    'Interest': 'व्याज',
    'Find Suitable Government Schemes': 'योग्य सरकारी योजना शोधा',
    'Compare your estimated repayment with\n                available government-supported financing options.': 'तुमच्या अंदाजित परतफेडीची तुलना उपलब्ध सरकारी आर्थिक मदतीच्या पर्यायांशी करा.',
    'Compare rates before selecting a loan.': 'कर्ज निवडण्यापूर्वी व्याजदरांची तुलना करा.',
    'Choose a tenure that fits your monthly cash flow.': 'तुमच्या मासिक उत्पन्न-खर्चानुसार कर्जाचा कालावधी निवडा.',
    'Check scheme eligibility before applying.': 'अर्ज करण्यापूर्वी योजनेची पात्रता तपासा.',
  },
};

function Calculator() {
  const { language } = useLanguage();
  const tr = (key) => calculatorTranslations[language]?.[key] || key;
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
    return new Intl.NumberFormat(language === "mr" ? "mr-IN" : language === "hi" ? "hi-IN" : "en-IN", {
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
            <p>{tr('Find • Qualify • Apply • Grow')}</p>
          </div>

        </Link>

        <Link
          to="/"
          className="calculator-back-home"
        >
          <ArrowLeft size={16} />
          {tr('Back to Home')}
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
            {tr('Smart Financial Calculator')}
          </div>

          <h1>
            {tr('Know Your Loan')}
            <br />
            <span>{tr('Before You Apply')}</span>
          </h1>

          <p>
            {tr('Estimate your monthly EMI, total interest and repayment\n            amount before choosing a loan or financial support option.')}
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
                <span>{tr('LOAN DETAILS')}</span>

                <h2>
                  {tr('Enter Your Requirement')}
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
                  {tr('Loan Amount')}
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
                  {tr('Annual Interest Rate')}
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
                  {tr('Loan Tenure')}
                </label>

                <strong>
                  {tenure} {tenure === 1 ? tr("Year") : tr("Years")}
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
                  {tr('Years')}
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
                <span>{tr('1 Year')}</span>
                <span>{tr('20 Years')}</span>
              </div>

            </div>


            {/* INFO */}

            <div className="calculator-info-box">

              <Sparkles size={17} />

              <p>
                {tr('Use the calculator for an estimate. Actual EMI,\n                interest and loan terms depend on the lender and\n                applicable scheme conditions.')}
              </p>

            </div>

          </div>


          {/* RIGHT RESULT */}

          <div className="calculator-result-card">

            <div className="calculator-result-header">

              <div>

                <span>
                  {tr('ESTIMATED RESULT')}
                </span>

                <h2>
                  {tr('Your Loan Summary')}
                </h2>

              </div>

              <div className="calculator-result-icon">
                <CalculatorIcon size={23} />
              </div>

            </div>


            {/* EMI */}

            <div className="emi-highlight">

              <span>
                {tr('Estimated Monthly EMI')}
              </span>

              <strong>
                {formatCurrency(calculation.emi)}
              </strong>

              <small>
                {tr('per month')}
              </small>

            </div>


            {/* SUMMARY */}

            <div className="calculator-summary-grid">

              <div className="summary-box">

                <span>
                  {tr('Principal')}
                </span>

                <strong>
                  {formatCurrency(loanAmount)}
                </strong>

              </div>


              <div className="summary-box">

                <span>
                  {tr('Total Interest')}
                </span>

                <strong>
                  {formatCurrency(
                    calculation.totalInterest
                  )}
                </strong>

              </div>


              <div className="summary-box">

                <span>
                  {tr('Total Repayment')}
                </span>

                <strong>
                  {formatCurrency(
                    calculation.totalPayment
                  )}
                </strong>

              </div>


              <div className="summary-box">

                <span>
                  {tr('Interest Rate')}
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
                  {tr('Repayment Breakdown')}
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
                  {tr('Principal')}
                </span>

                <span>
                  <i className="interest-dot"></i>
                  {tr('Interest')}
                </span>

              </div>

            </div>


            {/* CTA */}

            <Link
              to="/schemes"
              className="calculator-find-scheme"
            >

              {tr('Find Suitable Government Schemes')}

              <ArrowRight size={17} />

            </Link>


            {/* NOTE */}

            <div className="calculator-result-note">

              <WalletCards size={15} />

              <span>
                {tr('Compare your estimated repayment with\n                available government-supported financing options.')}
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
              {tr('Compare rates before selecting a loan.')}
            </span>

          </div>

          <div className="calculator-tip">

            <div>
              02
            </div>

            <span>
              {tr('Choose a tenure that fits your monthly cash flow.')}
            </span>

          </div>

          <div className="calculator-tip">

            <div>
              03
            </div>

            <span>
              {tr('Check scheme eligibility before applying.')}
            </span>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Calculator;