
import {
  ArrowLeft, ArrowRight, BookOpen, Brain, Calculator, CheckCircle2,
  ChevronDown, ChevronUp, CircleDollarSign, FileCheck2, Lightbulb,
  Search, ShieldCheck, Sparkles, WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

// English values remain the stable category/search keys; only labels are translated.
const translations = {
  hi: {
    "Find • Qualify • Apply • Grow": "खोजें • पात्रता जानें • आवेदन करें • आगे बढ़ें",
    "Back to Home": "होम पर वापस जाएं",
    "Financial Literacy Hub": "वित्तीय साक्षरता केंद्र",
    "Learn Money.": "पैसे को समझें।",
    "Make Better Decisions.": "बेहतर निर्णय लें।",
    "Simple and practical financial learning for entrepreneurs. Understand loans, credit, budgeting and government support before making important financial decisions.": "उद्यमियों के लिए सरल और व्यावहारिक वित्तीय शिक्षा। महत्वपूर्ण वित्तीय निर्णय लेने से पहले ऋण, क्रेडिट, बजट और सरकारी सहायता समझें।",
    "Easy language": "सरल भाषा", "Practical examples": "व्यावहारिक उदाहरण", "Business focused": "व्यवसाय पर केंद्रित",
    "Search loans, EMI, credit, budget...": "ऋण, EMI, क्रेडिट, बजट खोजें...",
    "All": "सभी", "Loans": "ऋण", "Credit": "क्रेडिट", "Business": "व्यवसाय", "Applications": "आवेदन", "Schemes": "योजनाएं",
    "LEARN & GROW": "सीखें और आगे बढ़ें", "Financial Basics for Entrepreneurs": "उद्यमियों के लिए वित्तीय जानकारी", "Topics": "विषय",
    "Understanding Loans": "ऋण को समझें", "How EMI Works": "EMI कैसे काम करती है", "Credit Score Basics": "क्रेडिट स्कोर की मूल बातें",
    "Budgeting for Your Business": "अपने व्यवसाय के लिए बजट", "Documents You May Need": "आवश्यक दस्तावेज",
    "Loans vs Subsidies vs Grants": "ऋण, सब्सिडी और अनुदान में अंतर",
    "Understand principal, interest, tenure, EMI and repayment before choosing a loan.": "ऋण लेने से पहले मूलधन, ब्याज, अवधि, EMI और पुनर्भुगतान समझें।",
    "Principal is the amount borrowed.": "मूलधन वह राशि है जो उधार ली जाती है।",
    "Interest is the cost charged by the lender.": "ब्याज वह शुल्क है जो ऋणदाता लेता है।",
    "Tenure is the repayment period.": "अवधि वह समय है जिसमें ऋण चुकाया जाता है।",
    "EMI combines principal and interest into periodic repayments.": "EMI में मूलधन और ब्याज की नियमित किस्तें शामिल होती हैं।",
    "Learn how loan amount, interest rate and tenure influence your monthly EMI.": "जानें कि ऋण राशि, ब्याज दर और अवधि आपकी मासिक EMI को कैसे प्रभावित करती हैं।",
    "Higher loan amounts generally increase EMI.": "अधिक ऋण राशि से आम तौर पर EMI बढ़ती है।",
    "Higher interest rates generally increase total repayment.": "अधिक ब्याज दर से आम तौर पर कुल भुगतान बढ़ता है।",
    "Longer tenure can reduce monthly EMI but may increase total interest.": "लंबी अवधि से मासिक EMI कम हो सकती है, लेकिन कुल ब्याज बढ़ सकता है।",
    "Compare total repayment, not only the monthly EMI.": "केवल मासिक EMI नहीं, कुल भुगतान की तुलना करें।",
    "Learn why responsible repayment and credit behaviour matter when seeking finance.": "जानें कि वित्त प्राप्त करते समय समय पर भुगतान और सही क्रेडिट व्यवहार क्यों महत्वपूर्ण हैं।",
    "Repay borrowed money on time.": "उधार लिया पैसा समय पर चुकाएं।",
    "Avoid taking unnecessary debt.": "अनावश्यक कर्ज लेने से बचें।",
    "Review your credit information periodically.": "अपनी क्रेडिट जानकारी समय-समय पर जांचें।",
    "Keep your financial records accurate.": "अपने वित्तीय रिकॉर्ड सही रखें।",
    "Separate business income, expenses and repayment commitments clearly.": "व्यवसाय की आय, खर्च और ऋण भुगतान को अलग-अलग रखें।",
    "Track regular business expenses.": "नियमित व्यावसायिक खर्चों का रिकॉर्ड रखें।",
    "Separate personal and business money where possible.": "जहां संभव हो, व्यक्तिगत और व्यवसाय के पैसे अलग रखें।",
    "Keep funds for expected repayments.": "आगामी किस्तों के लिए पैसे सुरक्षित रखें।",
    "Review cash flow before taking new debt.": "नया ऋण लेने से पहले नकदी प्रवाह जांचें।",
    "Understand common document categories that may be requested during applications.": "आवेदन के दौरान मांगे जाने वाले सामान्य दस्तावेज समझें।",
    "Identity and address information.": "पहचान और पते की जानकारी।",
    "Banking and financial details.": "बैंक और वित्तीय विवरण।",
    "Business or enterprise information.": "व्यवसाय या उद्यम की जानकारी।",
    "Scheme-specific supporting documents.": "योजना के अनुसार सहायक दस्तावेज।",
    "Understand the basic difference between different types of support.": "विभिन्न प्रकार की वित्तीय सहायता के बीच मूल अंतर समझें।",
    "A loan generally has to be repaid.": "ऋण आम तौर पर वापस चुकाना होता है।",
    "A subsidy may reduce an eligible cost or support component.": "सब्सिडी पात्र खर्च या लागत को कम कर सकती है।",
    "A grant may provide support subject to the applicable programme rules.": "अनुदान कार्यक्रम के नियमों के अनुसार सहायता दे सकता है।",
    "Always verify the exact conditions of the scheme.": "योजना की सटीक शर्तें हमेशा जांचें।",
    "Learn More": "और जानें", "Hide Details": "विवरण छिपाएं", "No topic found": "कोई विषय नहीं मिला",
    "Try another keyword or choose another category.": "दूसरा शब्द खोजें या दूसरी श्रेणी चुनें।", "Show All Topics": "सभी विषय दिखाएं",
    "SMART BORROWING CHECKLIST": "समझदारी से ऋण लेने की सूची",
    "Before Taking Any Loan,": "कोई भी ऋण लेने से पहले,", "Ask These Questions.": "ये प्रश्न पूछें।",
    "A lower EMI does not always mean a lower overall cost. Always compare the complete repayment obligation and understand the terms before accepting finance.": "कम EMI का मतलब हमेशा कम कुल खर्च नहीं होता। ऋण स्वीकार करने से पहले कुल भुगतान और सभी शर्तें समझें।",
    "Do I understand the total repayment amount?": "क्या मुझे कुल भुगतान राशि समझ में आती है?",
    "Can my business cash flow support the repayment?": "क्या मेरे व्यवसाय की आय से किस्तें चुकाई जा सकती हैं?",
    "Have I checked the official scheme or lender terms?": "क्या मैंने योजना या ऋणदाता की आधिकारिक शर्तें जांची हैं?",
    "Do I know the documents and obligations involved?": "क्या मुझे आवश्यक दस्तावेज और जिम्मेदारियां पता हैं?",
    "Think": "सोचें", "Before You Borrow": "ऋण लेने से पहले", "Plan • Compare • Verify": "योजना • तुलना • सत्यापन",
    "WANT TO CHECK YOUR EMI?": "अपनी EMI जांचना चाहते हैं?", "Calculate Before You Apply": "आवेदन से पहले गणना करें",
    "Estimate EMI, total interest and repayment using YojanaSathi AI's financial calculator.": "YojanaSathi AI कैलकुलेटर से EMI, कुल ब्याज और भुगतान का अनुमान लगाएं।",
    "Open Calculator": "कैलकुलेटर खोलें", "Remember": "याद रखें",
    "Scheme eligibility, interest, limits, documents and terms can vary. Always verify the latest information on the relevant official government or lender portal before applying.": "योजना की पात्रता, ब्याज, सीमा, दस्तावेज और शर्तें अलग हो सकती हैं। आवेदन से पहले संबंधित सरकारी या ऋणदाता के आधिकारिक पोर्टल पर नवीनतम जानकारी जांचें।",
  },
  mr: {
    "Find • Qualify • Apply • Grow": "शोधा • पात्रता तपासा • अर्ज करा • प्रगती करा",
    "Back to Home": "मुख्यपृष्ठावर परत जा",
    "Financial Literacy Hub": "आर्थिक साक्षरता केंद्र",
    "Learn Money.": "पैशाचे ज्ञान मिळवा.", "Make Better Decisions.": "योग्य आर्थिक निर्णय घ्या.",
    "Simple and practical financial learning for entrepreneurs. Understand loans, credit, budgeting and government support before making important financial decisions.": "उद्योजकांसाठी सोपे आणि उपयुक्त आर्थिक शिक्षण. महत्त्वाचे निर्णय घेण्यापूर्वी कर्ज, क्रेडिट, बजेट आणि सरकारी मदत समजून घ्या.",
    "Easy language": "सोपी भाषा", "Practical examples": "व्यावहारिक उदाहरणे", "Business focused": "व्यवसाय-केंद्रित",
    "Search loans, EMI, credit, budget...": "कर्ज, EMI, क्रेडिट, बजेट शोधा...",
    "All": "सर्व", "Loans": "कर्ज", "Credit": "क्रेडिट", "Business": "व्यवसाय", "Applications": "अर्ज", "Schemes": "योजना",
    "LEARN & GROW": "शिका आणि प्रगती करा", "Financial Basics for Entrepreneurs": "उद्योजकांसाठी आर्थिक मूलतत्त्वे", "Topics": "विषय",
    "Understanding Loans": "कर्ज समजून घ्या", "How EMI Works": "EMI कशी काम करते", "Credit Score Basics": "क्रेडिट स्कोअरची मूलतत्त्वे",
    "Budgeting for Your Business": "व्यवसायासाठी बजेट नियोजन", "Documents You May Need": "लागणारी कागदपत्रे",
    "Loans vs Subsidies vs Grants": "कर्ज, अनुदान आणि सबसिडीतील फरक",
    "Understand principal, interest, tenure, EMI and repayment before choosing a loan.": "कर्ज घेण्यापूर्वी मुद्दल, व्याज, कालावधी, EMI आणि परतफेड समजून घ्या.",
    "Principal is the amount borrowed.": "मुद्दल म्हणजे घेतलेली कर्जरक्कम.",
    "Interest is the cost charged by the lender.": "व्याज म्हणजे कर्जदात्याने आकारलेली रक्कम.",
    "Tenure is the repayment period.": "कालावधी म्हणजे कर्ज फेडण्याचा वेळ.",
    "EMI combines principal and interest into periodic repayments.": "EMI मध्ये मुद्दल आणि व्याजाचे नियमित हप्ते असतात.",
    "Learn how loan amount, interest rate and tenure influence your monthly EMI.": "कर्जरक्कम, व्याजदर आणि कालावधी यांचा मासिक EMI वर कसा परिणाम होतो ते शिका.",
    "Higher loan amounts generally increase EMI.": "जास्त कर्जरक्कम असल्यास साधारणपणे EMI वाढतो.",
    "Higher interest rates generally increase total repayment.": "जास्त व्याजदरामुळे एकूण परतफेड वाढते.",
    "Longer tenure can reduce monthly EMI but may increase total interest.": "मोठ्या कालावधीमुळे मासिक EMI कमी होऊ शकतो, पण एकूण व्याज वाढू शकते.",
    "Compare total repayment, not only the monthly EMI.": "फक्त मासिक EMI नाही तर एकूण परतफेड तपासा.",
    "Learn why responsible repayment and credit behaviour matter when seeking finance.": "आर्थिक मदत घेताना वेळेवर परतफेड आणि योग्य क्रेडिट सवयी का महत्त्वाच्या आहेत ते शिका.",
    "Repay borrowed money on time.": "घेतलेले कर्ज वेळेवर फेडा.",
    "Avoid taking unnecessary debt.": "अनावश्यक कर्ज घेणे टाळा.",
    "Review your credit information periodically.": "क्रेडिट माहिती वेळोवेळी तपासा.",
    "Keep your financial records accurate.": "आर्थिक नोंदी अचूक ठेवा.",
    "Separate business income, expenses and repayment commitments clearly.": "व्यवसायाचे उत्पन्न, खर्च आणि कर्जाचे हप्ते वेगळे नोंदवा.",
    "Track regular business expenses.": "नियमित व्यवसाय खर्चाची नोंद ठेवा.",
    "Separate personal and business money where possible.": "शक्य असल्यास वैयक्तिक आणि व्यवसायाचे पैसे वेगळे ठेवा.",
    "Keep funds for expected repayments.": "आगामी हप्त्यांसाठी पैसे राखून ठेवा.",
    "Review cash flow before taking new debt.": "नवीन कर्ज घेण्यापूर्वी रोख प्रवाह तपासा.",
    "Understand common document categories that may be requested during applications.": "अर्ज करताना लागणाऱ्या सामान्य कागदपत्रांचे प्रकार समजून घ्या.",
    "Identity and address information.": "ओळख आणि पत्त्याचा पुरावा.",
    "Banking and financial details.": "बँक आणि आर्थिक तपशील.",
    "Business or enterprise information.": "व्यवसाय किंवा उद्योगाची माहिती.",
    "Scheme-specific supporting documents.": "योजनेनुसार आवश्यक पूरक कागदपत्रे.",
    "Understand the basic difference between different types of support.": "विविध प्रकारच्या आर्थिक मदतीतील मूलभूत फरक समजून घ्या.",
    "A loan generally has to be repaid.": "कर्जाची सामान्यतः परतफेड करावी लागते.",
    "A subsidy may reduce an eligible cost or support component.": "सबसिडीमुळे पात्र खर्च कमी होऊ शकतो.",
    "A grant may provide support subject to the applicable programme rules.": "अनुदान हे कार्यक्रमाच्या नियमांनुसार मिळू शकते.",
    "Always verify the exact conditions of the scheme.": "योजनेच्या अचूक अटी नेहमी तपासा.",
    "Learn More": "अधिक जाणून घ्या", "Hide Details": "तपशील लपवा", "No topic found": "विषय सापडला नाही",
    "Try another keyword or choose another category.": "दुसरा शब्द शोधा किंवा वेगळी श्रेणी निवडा.", "Show All Topics": "सर्व विषय दाखवा",
    "SMART BORROWING CHECKLIST": "जबाबदारीने कर्ज घेण्याची यादी",
    "Before Taking Any Loan,": "कोणतेही कर्ज घेण्यापूर्वी,", "Ask These Questions.": "हे प्रश्न विचारा.",
    "A lower EMI does not always mean a lower overall cost. Always compare the complete repayment obligation and understand the terms before accepting finance.": "कमी EMI म्हणजे एकूण खर्च कमी असे नाही. कर्ज स्वीकारण्यापूर्वी एकूण परतफेड आणि सर्व अटी समजून घ्या.",
    "Do I understand the total repayment amount?": "मला एकूण परतफेडीची रक्कम समजली आहे का?",
    "Can my business cash flow support the repayment?": "माझ्या व्यवसायाच्या उत्पन्नातून हप्ते भरता येतील का?",
    "Have I checked the official scheme or lender terms?": "मी योजनेच्या किंवा कर्जदात्याच्या अधिकृत अटी तपासल्या आहेत का?",
    "Do I know the documents and obligations involved?": "मला आवश्यक कागदपत्रे आणि जबाबदाऱ्या माहिती आहेत का?",
    "Think": "विचार करा", "Before You Borrow": "कर्ज घेण्यापूर्वी", "Plan • Compare • Verify": "नियोजन • तुलना • पडताळणी",
    "WANT TO CHECK YOUR EMI?": "तुमचा EMI तपासायचा आहे?", "Calculate Before You Apply": "अर्ज करण्यापूर्वी गणना करा",
    "Estimate EMI, total interest and repayment using YojanaSathi AI's financial calculator.": "YojanaSathi AI च्या कॅल्क्युलेटरने EMI, एकूण व्याज आणि परतफेडीचा अंदाज घ्या.",
    "Open Calculator": "कॅल्क्युलेटर उघडा", "Remember": "लक्षात ठेवा",
    "Scheme eligibility, interest, limits, documents and terms can vary. Always verify the latest information on the relevant official government or lender portal before applying.": "योजनेची पात्रता, व्याज, मर्यादा, कागदपत्रे आणि अटी बदलू शकतात. अर्ज करण्यापूर्वी संबंधित अधिकृत सरकारी किंवा कर्जदात्याच्या पोर्टलवर नवीनतम माहिती तपासा.",
  },
};

const lessons = [
  { id: 1, title: "Understanding Loans", category: "Loans", icon: <CircleDollarSign size={22} />, color: "green", short: "Understand principal, interest, tenure, EMI and repayment before choosing a loan.", points: ["Principal is the amount borrowed.", "Interest is the cost charged by the lender.", "Tenure is the repayment period.", "EMI combines principal and interest into periodic repayments."] },
  { id: 2, title: "How EMI Works", category: "Loans", icon: <Calculator size={22} />, color: "purple", short: "Learn how loan amount, interest rate and tenure influence your monthly EMI.", points: ["Higher loan amounts generally increase EMI.", "Higher interest rates generally increase total repayment.", "Longer tenure can reduce monthly EMI but may increase total interest.", "Compare total repayment, not only the monthly EMI."] },
  { id: 3, title: "Credit Score Basics", category: "Credit", icon: <ShieldCheck size={22} />, color: "blue", short: "Learn why responsible repayment and credit behaviour matter when seeking finance.", points: ["Repay borrowed money on time.", "Avoid taking unnecessary debt.", "Review your credit information periodically.", "Keep your financial records accurate."] },
  { id: 4, title: "Budgeting for Your Business", category: "Business", icon: <WalletCards size={22} />, color: "orange", short: "Separate business income, expenses and repayment commitments clearly.", points: ["Track regular business expenses.", "Separate personal and business money where possible.", "Keep funds for expected repayments.", "Review cash flow before taking new debt."] },
  { id: 5, title: "Documents You May Need", category: "Applications", icon: <FileCheck2 size={22} />, color: "pink", short: "Understand common document categories that may be requested during applications.", points: ["Identity and address information.", "Banking and financial details.", "Business or enterprise information.", "Scheme-specific supporting documents."] },
  { id: 6, title: "Loans vs Subsidies vs Grants", category: "Schemes", icon: <BookOpen size={22} />, color: "yellow", short: "Understand the basic difference between different types of support.", points: ["A loan generally has to be repaid.", "A subsidy may reduce an eligible cost or support component.", "A grant may provide support subject to the applicable programme rules.", "Always verify the exact conditions of the scheme."] },
];

const categories = ["All", "Loans", "Credit", "Business", "Applications", "Schemes"];

function Literacy() {
  const { language } = useLanguage();
  const tr = (value) => translations[language]?.[value] || value;
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [openLesson, setOpenLesson] = useState(null);

  const filteredLessons = useMemo(() => {
    const query = searchTerm.toLocaleLowerCase().trim();
    return lessons.filter((lesson) => {
      const matchesCategory = category === "All" || lesson.category === category;
      const searchable = [
        lesson.title, lesson.category, lesson.short, ...lesson.points,
        tr(lesson.title), tr(lesson.category), tr(lesson.short), ...lesson.points.map(tr)
      ].join(" ").toLocaleLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [category, searchTerm, language]);

  const toggleLesson = (id) => {
    setOpenLesson((current) => current === id ? null : id);
  };

  return (
    <div className="literacy-page">
      <header className="literacy-topbar">
        <Link to="/" className="literacy-brand">
          <div className="literacy-brand-icon"><Sparkles size={21} /></div>
          <div>
            <h2>YojanaSathi AI</h2>
            <p>{tr("Find • Qualify • Apply • Grow")}</p>
          </div>
        </Link>
        <Link to="/" className="literacy-back-home">
          <ArrowLeft size={16} />{tr("Back to Home")}
        </Link>
      </header>

      <main className="literacy-main">
        <section className="literacy-intro">
          <div className="literacy-badge"><BookOpen size={15} />{tr("Financial Literacy Hub")}</div>
          <h1>{tr("Learn Money.")}<br /><span>{tr("Make Better Decisions.")}</span></h1>
          <p>{tr("Simple and practical financial learning for entrepreneurs. Understand loans, credit, budgeting and government support before making important financial decisions.")}</p>
          <div className="literacy-hero-points">
            {["Easy language", "Practical examples", "Business focused"].map((item) => (
              <div key={item}><CheckCircle2 size={16} />{tr(item)}</div>
            ))}
          </div>
        </section>

        <section className="literacy-search-card">
          <div className="literacy-search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder={tr("Search loans, EMI, credit, budget...")}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="literacy-categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "literacy-category active" : "literacy-category"}
                onClick={() => setCategory(item)}
              >
                {tr(item)}
              </button>
            ))}
          </div>
        </section>

        <section className="literacy-lessons">
          <div className="literacy-section-header">
            <div>
              <span>{tr("LEARN & GROW")}</span>
              <h2>{tr("Financial Basics for Entrepreneurs")}</h2>
            </div>
            <div className="literacy-count">{filteredLessons.length} {tr("Topics")}</div>
          </div>

          <div className="literacy-grid">
            {filteredLessons.map((lesson) => {
              const isOpen = openLesson === lesson.id;
              return (
                <article className={`literacy-card ${lesson.color}`} key={lesson.id}>
                  <div className="literacy-card-top">
                    <div className="literacy-card-icon">{lesson.icon}</div>
                    <span>{tr(lesson.category)}</span>
                  </div>
                  <h3>{tr(lesson.title)}</h3>
                  <p>{tr(lesson.short)}</p>
                  <button type="button" className="literacy-learn-btn" onClick={() => toggleLesson(lesson.id)}>
                    {tr(isOpen ? "Hide Details" : "Learn More")}
                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {isOpen && (
                    <div className="literacy-details">
                      {lesson.points.map((point) => (
                        <div key={point}><CheckCircle2 size={14} /><span>{tr(point)}</span></div>
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
              <h3>{tr("No topic found")}</h3>
              <p>{tr("Try another keyword or choose another category.")}</p>
              <button type="button" onClick={() => { setSearchTerm(""); setCategory("All"); }}>
                {tr("Show All Topics")}
              </button>
            </div>
          )}
        </section>

        {/* SMART BORROWING CHECKLIST - INDIAN TRICOLOUR DESIGN */}
        <section className="literacy-safety literacy-safety-tricolour">
          <div className="literacy-safety-content">
            <div className="literacy-safety-icon"><ShieldCheck size={27} /></div>
            <span className="literacy-safety-label">{tr("SMART BORROWING CHECKLIST")}</span>
            <h2>
              <span className="loan-heading-saffron">{tr("Before Taking Any Loan,")}</span>
              <br />
              <span className="loan-heading-green">{tr("Ask These Questions.")}</span>
            </h2>
            <p>{tr("A lower EMI does not always mean a lower overall cost. Always compare the complete repayment obligation and understand the terms before accepting finance.")}</p>

            <div className="literacy-checklist">
              {[
                "Do I understand the total repayment amount?",
                "Can my business cash flow support the repayment?",
                "Have I checked the official scheme or lender terms?",
                "Do I know the documents and obligations involved?"
              ].map((item) => (
                <div key={item}>
                  <CheckCircle2 size={18} />
                  <span>{tr(item)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="literacy-safety-visual">
            <div className="safety-circle large"></div>
            <div className="safety-circle medium"></div>
            <div className="safety-circle small"></div>
            <div className="safety-center-card">
              <Brain size={32} />
              <strong>{tr("Think")}<br />{tr("Before You Borrow")}</strong>
              <span>{tr("Plan • Compare • Verify")}</span>
            </div>
          </div>
        </section>

        <section className="literacy-calculator-cta">
          <div className="literacy-calculator-icon"><Calculator size={23} /></div>
          <div>
            <span>{tr("WANT TO CHECK YOUR EMI?")}</span>
            <h2>{tr("Calculate Before You Apply")}</h2>
            <p>{tr("Estimate EMI, total interest and repayment using YojanaSathi AI's financial calculator.")}</p>
          </div>
          <Link to="/calculator" className="literacy-calculator-btn">
            {tr("Open Calculator")}<ArrowRight size={16} />
          </Link>
        </section>

        <section className="literacy-note">
          <Lightbulb size={19} />
          <div>
            <strong>{tr("Remember")}</strong>
            <p>{tr("Scheme eligibility, interest, limits, documents and terms can vary. Always verify the latest information on the relevant official government or lender portal before applying.")}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Literacy;
