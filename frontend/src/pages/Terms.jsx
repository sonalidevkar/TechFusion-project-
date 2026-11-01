import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  en: {
    back: "Back to Home", eyebrow: "PLEASE READ CAREFULLY", title: "Terms & Conditions",
    intro: "These terms explain how you may use YojanaSathi AI. By using this website, you agree to follow these terms. If you disagree, please stop using the service.",
    updated: "Last updated: 24 October 2026", note: "Important: YojanaSathi AI is an independent information and guidance platform. It is not an official government portal.",
    sections: [
      ["1. About the Service", "YojanaSathi AI helps users discover government schemes, explore possible eligibility, estimate finances and track information they enter. Information and AI recommendations are for general guidance only."],
      ["2. Eligibility and Scheme Information", "Scheme rules, benefits, documents, deadlines and eligibility criteria can change. Always verify details on the relevant official government website or with the responsible authority before applying."],
      ["3. No Approval Guarantee", "A suggested scheme or positive eligibility result does not guarantee qualification, financial assistance, loan approval or acceptance of an application. Final decisions belong to the relevant authorities and institutions."],
      ["4. Your Responsibilities", "Provide accurate information, use the website lawfully, respect other users and do not attempt to misuse, disrupt or gain unauthorized access to the platform."],
      ["5. Accounts and Security", "Keep your login details confidential. You are responsible for activity on your account. Do not share passwords or sensitive documents with untrusted parties."],
      ["6. AI and Calculator Limitations", "AI matching, eligibility checks and financial calculations may contain errors or assumptions. They are not professional legal, financial or government advice. Verify important decisions independently."],
      ["7. Third-Party Links", "Links to government portals or other external websites are provided for convenience. We do not control their content, security, availability or policies."],
      ["8. Privacy", "Our handling of personal information is described in our Privacy Policy. Please review it before submitting personal details."],
      ["9. Service Availability and Changes", "Features may be modified, suspended or discontinued. We may revise these terms from time to time. Updated terms will be posted on this page."],
      ["10. Limitation of Responsibility", "To the extent permitted by applicable law, the platform is provided on an as-available basis without guaranteeing uninterrupted service or the accuracy of every recommendation."],
      ["11. Contact and Questions", "For questions about these terms, use the contact information published on the YojanaSathi AI website. Do not submit confidential passwords in support requests."]
    ],
    privacy: "Read Privacy Policy", home: "Return to Home", footer: "This page is a project template. Review and customize it before a public launch."
  },
  hi: {
    back: "होम पर वापस जाएँ", eyebrow: "कृपया ध्यान से पढ़ें", title: "नियम और शर्तें",
    intro: "ये शर्तें बताती हैं कि आप YojanaSathi AI का उपयोग कैसे कर सकते हैं। वेबसाइट का उपयोग करके आप इन शर्तों का पालन करने के लिए सहमत होते हैं। असहमत होने पर सेवा का उपयोग बंद करें।",
    updated: "अंतिम अपडेट: 24 अक्टूबर 2026", note: "महत्वपूर्ण: YojanaSathi AI एक स्वतंत्र सूचना और मार्गदर्शन प्लेटफ़ॉर्म है। यह आधिकारिक सरकारी पोर्टल नहीं है।",
    sections: [
      ["1. सेवा के बारे में", "YojanaSathi AI सरकारी योजनाएँ खोजने, संभावित पात्रता समझने, वित्तीय अनुमान लगाने और दर्ज की गई जानकारी को ट्रैक करने में मदद करता है। AI सुझाव केवल सामान्य मार्गदर्शन के लिए हैं।"],
      ["2. पात्रता और योजना की जानकारी", "योजनाओं के नियम, लाभ, दस्तावेज़, समय-सीमा और पात्रता बदल सकते हैं। आवेदन से पहले संबंधित आधिकारिक सरकारी वेबसाइट या प्राधिकरण से जानकारी की पुष्टि करें।"],
      ["3. मंज़ूरी की कोई गारंटी नहीं", "किसी योजना का सुझाव या सकारात्मक पात्रता परिणाम मिलने से ऋण, सहायता या आवेदन की मंज़ूरी की गारंटी नहीं होती। अंतिम निर्णय संबंधित संस्था का होता है।"],
      ["4. आपकी ज़िम्मेदारियाँ", "सही जानकारी दें, वेबसाइट का कानूनी तरीके से उपयोग करें और प्लेटफ़ॉर्म का दुरुपयोग, व्यवधान या अनधिकृत पहुँच का प्रयास न करें।"],
      ["5. खाता और सुरक्षा", "अपने लॉगिन विवरण गोपनीय रखें। खाते पर होने वाली गतिविधियों की ज़िम्मेदारी आपकी है। पासवर्ड या संवेदनशील दस्तावेज़ अविश्वसनीय लोगों से साझा न करें।"],
      ["6. AI और कैलकुलेटर की सीमाएँ", "AI मैचिंग, पात्रता जाँच और वित्तीय गणना में त्रुटियाँ या अनुमान हो सकते हैं। यह पेशेवर कानूनी, वित्तीय या सरकारी सलाह नहीं है। महत्वपूर्ण निर्णय स्वतंत्र रूप से सत्यापित करें।"],
      ["7. बाहरी वेबसाइट लिंक", "सरकारी पोर्टल या अन्य बाहरी वेबसाइटों के लिंक सुविधा के लिए दिए जाते हैं। उनकी सामग्री, सुरक्षा, उपलब्धता या नीतियों पर हमारा नियंत्रण नहीं है।"],
      ["8. गोपनीयता", "व्यक्तिगत जानकारी के उपयोग का विवरण हमारी गोपनीयता नीति में है। निजी विवरण देने से पहले इसे पढ़ें।"],
      ["9. सेवा और शर्तों में बदलाव", "सुविधाएँ बदली, रोकी या बंद की जा सकती हैं। हम समय-समय पर शर्तें संशोधित कर सकते हैं। नई शर्तें इसी पेज पर प्रकाशित होंगी।"],
      ["10. ज़िम्मेदारी की सीमा", "लागू कानून के अनुसार, सेवा उपलब्धता के आधार पर प्रदान की जाती है। निर्बाध सेवा या हर सुझाव की सटीकता की गारंटी नहीं दी जाती।"],
      ["11. संपर्क और प्रश्न", "इन शर्तों से जुड़े प्रश्नों के लिए वेबसाइट पर प्रकाशित संपर्क जानकारी का उपयोग करें। सहायता अनुरोध में अपना पासवर्ड न भेजें।"]
    ],
    privacy: "गोपनीयता नीति पढ़ें", home: "होम पर जाएँ", footer: "यह पेज प्रोजेक्ट का प्रारूप है। सार्वजनिक लॉन्च से पहले इसकी समीक्षा और आवश्यक बदलाव करें।"
  },
  mr: {
    back: "मुख्यपृष्ठावर परत जा", eyebrow: "कृपया काळजीपूर्वक वाचा", title: "नियम व अटी",
    intro: "या अटी YojanaSathi AI वेबसाइटचा वापर कसा करायचा हे स्पष्ट करतात. वेबसाइट वापरून तुम्ही या अटींचे पालन करण्यास सहमती देता. सहमत नसल्यास सेवा वापरू नका.",
    updated: "शेवटचे अद्यतन: २४ ऑक्टोबर २०२६", note: "महत्त्वाचे: YojanaSathi AI हे स्वतंत्र माहिती व मार्गदर्शन देणारे व्यासपीठ आहे. हे अधिकृत सरकारी पोर्टल नाही.",
    sections: [
      ["१. सेवेबद्दल", "YojanaSathi AI सरकारी योजना शोधणे, संभाव्य पात्रता समजून घेणे, आर्थिक अंदाज काढणे आणि भरलेली माहिती ट्रॅक करणे यासाठी मदत करते. AI सूचना केवळ सामान्य मार्गदर्शनासाठी आहेत."],
      ["२. पात्रता आणि योजनांची माहिती", "योजनांचे नियम, फायदे, कागदपत्रे, मुदती आणि पात्रतेचे निकष बदलू शकतात. अर्ज करण्यापूर्वी संबंधित अधिकृत सरकारी वेबसाइट किंवा कार्यालयाकडून माहिती तपासा."],
      ["३. मंजुरीची हमी नाही", "एखादी योजना सुचवली गेली किंवा पात्रतेचा सकारात्मक निकाल आला, तरी कर्ज, अनुदान किंवा अर्ज मंजूर होईल याची हमी नाही. अंतिम निर्णय संबंधित संस्था घेते."],
      ["४. वापरकर्त्याच्या जबाबदाऱ्या", "अचूक माहिती द्या, वेबसाइटचा कायदेशीर वापर करा आणि व्यासपीठाचा गैरवापर, अडथळा किंवा अनधिकृत प्रवेश करण्याचा प्रयत्न करू नका."],
      ["५. खाते आणि सुरक्षा", "लॉगिन माहिती गोपनीय ठेवा. तुमच्या खात्यावरील कृतींची जबाबदारी तुमची आहे. पासवर्ड किंवा संवेदनशील कागदपत्रे अविश्वसनीय व्यक्तींना देऊ नका."],
      ["६. AI आणि कॅल्क्युलेटरच्या मर्यादा", "AI मॅचिंग, पात्रता तपासणी आणि आर्थिक गणनेमध्ये चुका किंवा गृहीतके असू शकतात. हा व्यावसायिक कायदेशीर, आर्थिक किंवा सरकारी सल्ला नाही. महत्त्वाचे निर्णय स्वतंत्रपणे तपासा."],
      ["७. बाह्य वेबसाइट लिंक्स", "सरकारी पोर्टल किंवा इतर वेबसाइटच्या लिंक्स सोयीसाठी दिलेल्या आहेत. त्यांचा मजकूर, सुरक्षा, उपलब्धता किंवा धोरणांवर आमचे नियंत्रण नाही."],
      ["८. गोपनीयता", "वैयक्तिक माहितीचा वापर कसा केला जातो हे आमच्या गोपनीयता धोरणात दिले आहे. माहिती भरण्यापूर्वी ते वाचा."],
      ["९. सेवा आणि अटींमधील बदल", "सुविधा बदलल्या, थांबवल्या किंवा बंद केल्या जाऊ शकतात. या अटी वेळोवेळी सुधारल्या जाऊ शकतात. सुधारित अटी या पृष्ठावर प्रसिद्ध केल्या जातील."],
      ["१०. जबाबदारीची मर्यादा", "लागू कायद्याच्या मर्यादेत सेवा उपलब्धतेनुसार दिली जाते. सेवा अखंड चालेल किंवा प्रत्येक सूचना अचूक असेल याची हमी दिली जात नाही."],
      ["११. संपर्क आणि प्रश्न", "या अटींबाबत प्रश्न असल्यास वेबसाइटवरील संपर्क माहिती वापरा. मदतीसाठी पाठवलेल्या संदेशात पासवर्ड देऊ नका."]
    ],
    privacy: "गोपनीयता धोरण वाचा", home: "मुख्यपृष्ठावर जा", footer: "हे पृष्ठ प्रकल्पासाठी नमुना आहे. सार्वजनिक वापरापूर्वी त्याचे पुनरावलोकन करून आवश्यक बदल करा."
  }
};

function Terms() {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <main className="terms-page" style={{ minHeight: "100vh", background: "#f6faf7", padding: "36px 18px 64px", color: "#18352b" }}>
      <div style={{ maxWidth: 950, margin: "0 auto" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#187548", textDecoration: "none", fontWeight: 600, marginBottom: 28 }}>
          <ArrowLeft size={18} /> {t.back}
        </Link>
        <header style={{ background: "linear-gradient(135deg, #126c46, #229563)", color: "white", padding: "36px 30px", borderRadius: 20, marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Sparkles size={22} /> <strong>YojanaSathi AI</strong>
          </div>
          <p style={{ fontSize: 12, letterSpacing: 2, fontWeight: 700, opacity: 0.85 }}>{t.eyebrow}</p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", margin: "8px 0 16px", lineHeight: 1.2 }}>{t.title}</h1>
          <p style={{ lineHeight: 1.8, maxWidth: 750, margin: 0 }}>{t.intro}</p>
          <p style={{ fontSize: 13, marginTop: 20, opacity: 0.85 }}>{t.updated}</p>
        </header>
        <div role="note" style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#eaf5ed", border: "1px solid #b5dcc1", padding: "18px 20px", borderRadius: 12, marginBottom: 24, lineHeight: 1.7 }}>
          <ShieldCheck size={23} style={{ flexShrink: 0, marginTop: 2, color: "#177348" }} />
          <span>{t.note}</span>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e3ebe5", borderRadius: 18, padding: "12px 26px" }}>
          {t.sections.map(([heading, description], index) => (
            <section key={index} style={{ padding: "22px 0", borderBottom: index === t.sections.length - 1 ? "none" : "1px solid #edf1ee" }}>
              <h2 style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 19, margin: "0 0 10px", color: "#135e3d" }}>
                <FileText size={19} style={{ flexShrink: 0 }} /> {heading}
              </h2>
              <p style={{ margin: 0, lineHeight: 1.85, color: "#455d51" }}>{description}</p>
            </section>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 28 }}>
          <Link to="/privacy" style={{ color: "#187548", fontWeight: 700 }}>{t.privacy}</Link>
          <Link to="/" style={{ color: "#187548", fontWeight: 700 }}>{t.home}</Link>
        </div>
        <p style={{ fontSize: 13, color: "#6c8174", lineHeight: 1.7, marginTop: 28 }}>{t.footer}</p>
      </div>
    </main>
  );
}

export default Terms;
