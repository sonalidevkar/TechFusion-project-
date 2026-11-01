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
import { useLanguage } from "../context/LanguageContext.jsx";


const trackTranslations = {
  "en": {
    "tagline": "Find • Qualify • Apply • Grow",
    "back": "Back to Home",
    "badge": "Application Tracking",
    "hero1": "Know Where",
    "hero2": "Your Application Stands.",
    "intro": "Enter your application ID to view the current stage, latest update and application journey.",
    "applicationId": "APPLICATION ID",
    "trackYour": "Track Your Application",
    "trackButton": "Track Application",
    "demoIds": "Demo IDs:",
    "or": "or",
    "notFound": "Application Not Found",
    "notFound1": "No application was found for this ID:",
    "notFound2": "Please check the ID and try again.",
    "tryAgain": "Try Again",
    "found": "APPLICATION FOUND",
    "applicant": "Applicant",
    "scheme": "Scheme",
    "requested": "Requested Support",
    "submittedOn": "Submitted On",
    "currentStatus": "CURRENT STATUS",
    "lastUpdated": "Last updated on",
    "journey": "APPLICATION JOURNEY",
    "everyStep": "Track Every Step",
    "secure": "Secure Tracking",
    "current": "Current",
    "nextStep": "NEXT STEP",
    "documentsReady": "Keep your documents ready",
    "documentsInfo": "The concerned institution may request additional information or verification.",
    "enterId": "Enter Your Application ID",
    "emptyInfo": "Your application progress will appear here after you search.",
    "needHelp": "Need help with a scheme?",
    "exploreInfo": "Explore government schemes and application guidance.",
    "explore": "Explore Schemes",
    "statusProcessing": "Under Processing",
    "statusApproved": "Approved",
    "step1": "Application Submitted",
    "step1desc": "Your application has been successfully submitted.",
    "step2": "Initial Review",
    "step2desc": "Your profile and eligibility information are being reviewed.",
    "step3": "Documents Verified",
    "step3desc": "Your submitted documents are being checked and verified.",
    "step4": "Under Processing",
    "step4desc": "The concerned institution is processing your application.",
    "step5": "Decision",
    "step5desc": "The final decision or next action will be updated here.",
    "demoEntrepreneur": "Demo Entrepreneur",
    "demoOwner": "Demo Business Owner",
    "oct5": "05 October 2026",
    "oct2": "02 October 2026",
    "oct7": "07 October 2026"
  },
  "hi": {
    "tagline": "खोजें • पात्रता जानें • आवेदन करें • आगे बढ़ें",
    "back": "होम पर वापस जाएँ",
    "badge": "आवेदन ट्रैकिंग",
    "hero1": "जानें आपका",
    "hero2": "आवेदन कहाँ पहुँचा है।",
    "intro": "वर्तमान चरण, नवीनतम अपडेट और आवेदन की प्रगति देखने के लिए आवेदन आईडी दर्ज करें।",
    "applicationId": "आवेदन आईडी",
    "trackYour": "अपना आवेदन ट्रैक करें",
    "trackButton": "आवेदन ट्रैक करें",
    "demoIds": "डेमो आईडी:",
    "or": "या",
    "notFound": "आवेदन नहीं मिला",
    "notFound1": "इस आईडी का आवेदन नहीं मिला:",
    "notFound2": "आईडी जाँचें और फिर कोशिश करें।",
    "tryAgain": "फिर से कोशिश करें",
    "found": "आवेदन मिल गया",
    "applicant": "आवेदक",
    "scheme": "योजना",
    "requested": "अनुरोधित सहायता",
    "submittedOn": "जमा करने की तारीख",
    "currentStatus": "वर्तमान स्थिति",
    "lastUpdated": "अंतिम अपडेट:",
    "journey": "आवेदन की प्रगति",
    "everyStep": "हर चरण देखें",
    "secure": "सुरक्षित ट्रैकिंग",
    "current": "वर्तमान",
    "nextStep": "अगला कदम",
    "documentsReady": "अपने दस्तावेज तैयार रखें",
    "documentsInfo": "संबंधित संस्था अतिरिक्त जानकारी या सत्यापन माँग सकती है।",
    "enterId": "अपनी आवेदन आईडी दर्ज करें",
    "emptyInfo": "खोजने के बाद आपके आवेदन की प्रगति यहाँ दिखाई देगी।",
    "needHelp": "योजना के लिए मदद चाहिए?",
    "exploreInfo": "सरकारी योजनाएँ और आवेदन मार्गदर्शन देखें।",
    "explore": "योजनाएँ देखें",
    "statusProcessing": "प्रक्रिया में",
    "statusApproved": "स्वीकृत",
    "step1": "आवेदन जमा किया गया",
    "step1desc": "आपका आवेदन सफलतापूर्वक जमा हो गया है।",
    "step2": "प्रारंभिक जाँच",
    "step2desc": "आपकी प्रोफ़ाइल और पात्रता जानकारी जाँची जा रही है।",
    "step3": "दस्तावेज़ सत्यापित",
    "step3desc": "जमा किए गए दस्तावेज़ों की जाँच और पुष्टि की जा रही है।",
    "step4": "प्रक्रिया में",
    "step4desc": "संबंधित संस्था आपके आवेदन पर प्रक्रिया कर रही है।",
    "step5": "निर्णय",
    "step5desc": "अंतिम निर्णय या अगला कदम यहाँ अपडेट होगा।",
    "demoEntrepreneur": "डेमो उद्यमी",
    "demoOwner": "डेमो व्यवसाय मालिक",
    "oct5": "05 अक्टूबर 2026",
    "oct2": "02 अक्टूबर 2026",
    "oct7": "07 अक्टूबर 2026"
  },
  "mr": {
    "tagline": "शोधा • पात्रता तपासा • अर्ज करा • प्रगती करा",
    "back": "मुख्यपृष्ठावर परत जा",
    "badge": "अर्जाचा मागोवा",
    "hero1": "जाणून घ्या",
    "hero2": "तुमच्या अर्जाची स्थिती.",
    "intro": "सध्याचा टप्पा, नवीनतम अपडेट आणि अर्जाचा प्रवास पाहण्यासाठी अर्ज आयडी टाका.",
    "applicationId": "अर्ज आयडी",
    "trackYour": "तुमच्या अर्जाचा मागोवा घ्या",
    "trackButton": "अर्जाचा मागोवा घ्या",
    "demoIds": "डेमो आयडी:",
    "or": "किंवा",
    "notFound": "अर्ज सापडला नाही",
    "notFound1": "या आयडीचा अर्ज सापडला नाही:",
    "notFound2": "आयडी तपासून पुन्हा प्रयत्न करा.",
    "tryAgain": "पुन्हा प्रयत्न करा",
    "found": "अर्ज सापडला",
    "applicant": "अर्जदार",
    "scheme": "योजना",
    "requested": "मागितलेली मदत",
    "submittedOn": "सादर केल्याची तारीख",
    "currentStatus": "सध्याची स्थिती",
    "lastUpdated": "शेवटचे अपडेट:",
    "journey": "अर्जाचा प्रवास",
    "everyStep": "प्रत्येक टप्पा पाहा",
    "secure": "सुरक्षित मागोवा",
    "current": "सध्याचा",
    "nextStep": "पुढील पाऊल",
    "documentsReady": "तुमची कागदपत्रे तयार ठेवा",
    "documentsInfo": "संबंधित संस्था अतिरिक्त माहिती किंवा पडताळणी मागू शकते.",
    "enterId": "तुमचा अर्ज आयडी टाका",
    "emptyInfo": "शोधल्यानंतर तुमच्या अर्जाची प्रगती येथे दिसेल.",
    "needHelp": "योजनेसाठी मदत हवी आहे का?",
    "exploreInfo": "सरकारी योजना आणि अर्ज मार्गदर्शन पाहा.",
    "explore": "योजना पाहा",
    "statusProcessing": "प्रक्रिया सुरू आहे",
    "statusApproved": "मंजूर",
    "step1": "अर्ज सादर झाला",
    "step1desc": "तुमचा अर्ज यशस्वीपणे सादर झाला आहे.",
    "step2": "प्राथमिक तपासणी",
    "step2desc": "तुमची माहिती आणि पात्रता तपासली जात आहे.",
    "step3": "कागदपत्रांची पडताळणी",
    "step3desc": "सादर केलेल्या कागदपत्रांची तपासणी आणि पडताळणी होत आहे.",
    "step4": "प्रक्रिया सुरू आहे",
    "step4desc": "संबंधित संस्था तुमच्या अर्जावर प्रक्रिया करत आहे.",
    "step5": "निर्णय",
    "step5desc": "अंतिम निर्णय किंवा पुढील कृती येथे अपडेट होईल.",
    "demoEntrepreneur": "डेमो उद्योजक",
    "demoOwner": "डेमो व्यवसाय मालक",
    "oct5": "05 ऑक्टोबर 2026",
    "oct2": "02 ऑक्टोबर 2026",
    "oct7": "07 ऑक्टोबर 2026"
  }
};

function Track() {
  const { language } = useLanguage();
  const tr = (key) => trackTranslations[language]?.[key] ?? trackTranslations.en[key] ?? key;
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
      title: tr("step1"),
      description:
        tr("step1desc"),
      icon: <FileText size={19} />,
    },

    {
      title: tr("step2"),
      description:
        tr("step2desc"),
      icon: <UserRound size={19} />,
    },

    {
      title: tr("step3"),
      description:
        tr("step3desc"),
      icon: <FileCheck2 size={19} />,
    },

    {
      title: tr("step4"),
      description:
        tr("step4desc"),
      icon: <Clock3 size={19} />,
    },

    {
      title: tr("step5"),
      description:
        tr("step5desc"),
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

            <p>{tr("tagline")}</p>
          </div>

        </Link>


        <Link
          to="/"
          className="track-back-home"
        >

          <ArrowLeft size={16} />{tr("back")}</Link>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="track-main">

        {/* INTRO */}

        <section className="track-intro">

          <div className="track-badge">

            <Clock3 size={15} />{tr("badge")}</div>


          <h1>{tr("hero1")}<br />

            <span>{tr("hero2")}</span>

          </h1>


          <p>{tr("intro")}</p>

        </section>


        {/* =====================================================
            SEARCH
        ===================================================== */}

        <section className="track-search-card">

          <div className="track-search-heading">

            <div>

              <span>{tr("applicationId")}</span>

              <h2>{tr("trackYour")}</h2>

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

              <Search size={17} />{tr("trackButton")}<ArrowRight size={16} />

            </button>

          </form>


          <div className="track-demo-note">

            <Sparkles size={14} />

            <span>{tr("demoIds")}<strong> YSA2026001 </strong>
              {tr("or")}
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

            <h2>{tr("notFound")}</h2>

            <p>{tr("notFound1")}<strong> {applicationId}</strong>.
              {tr("notFound2")}
            </p>

            <button
              type="button"
              onClick={() => {
                setApplicationId("");
                setSearched(false);
                setNotFound(false);
              }}
            >{tr("tryAgain")}</button>

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

                  <span>{tr("found")}</span>

                  <h2>
                    {applicationId.toUpperCase()}
                  </h2>

                </div>


                <div className="track-status-badge">

                  <span></span>

                  {(application.status === "Approved" ? tr("statusApproved") : application.status === "Under Processing" ? tr("statusProcessing") : application.status)}

                </div>

              </div>


              <div className="track-summary-grid">

                <div>

                  <span>{tr("applicant")}</span>

                  <strong>
                    {(application.applicant === "Demo Entrepreneur" ? tr("demoEntrepreneur") : application.applicant === "Demo Business Owner" ? tr("demoOwner") : application.applicant)}
                  </strong>

                </div>


                <div>

                  <span>{tr("scheme")}</span>

                  <strong>
                    {application.scheme}
                  </strong>

                </div>


                <div>

                  <span>{tr("requested")}</span>

                  <strong>
                    {application.amount}
                  </strong>

                </div>


                <div>

                  <span>{tr("submittedOn")}</span>

                  <strong>
                    {(application.submitted === "05 October 2026" ? tr("oct5") : application.submitted === "02 October 2026" ? tr("oct2") : application.submitted)}
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

                <span>{tr("currentStatus")}</span>

                <h2>
                  {(application.status === "Approved" ? tr("statusApproved") : application.status === "Under Processing" ? tr("statusProcessing") : application.status)}
                </h2>

                <p>
                  {tr("lastUpdated")} {(application.lastUpdated === "07 October 2026" ? tr("oct7") : application.lastUpdated)}
                </p>

              </div>

            </div>


            {/* =================================================
                TIMELINE
            ================================================== */}

            <div className="track-timeline-card">

              <div className="track-timeline-header">

                <div>

                  <span>{tr("journey")}</span>

                  <h2>{tr("everyStep")}</h2>

                </div>


                <div className="track-secure">

                  <ShieldCheck size={15} />{tr("secure")}</div>

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
                              <span>{tr("current")}</span>
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

                <span>{tr("nextStep")}</span>

                <h3>{tr("documentsReady")}</h3>

                <p>{tr("documentsInfo")}</p>

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

            <h2>{tr("enterId")}</h2>

            <p>{tr("emptyInfo")}</p>

          </section>

        )}


        {/* =====================================================
            FOOTER CTA
        ===================================================== */}

        <section className="track-footer-cta">

          <div>

            <ShieldCheck size={22} />

            <div>

              <strong>{tr("needHelp")}</strong>

              <span>{tr("exploreInfo")}</span>

            </div>

          </div>


          <Link
            to="/schemes"
            className="track-footer-btn"
          >{tr("explore")}<ArrowRight size={16} />

          </Link>

        </section>

      </main>

    </div>
  );
}

export default Track;