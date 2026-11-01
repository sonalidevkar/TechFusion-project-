import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, LockKeyhole, Database, UserRound, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const copy = {
  en: {
    eyebrow: "YOUR PRIVACY MATTERS", title: "Privacy Policy", intro: "This page explains how YojanaSathi AI handles information when you use our government scheme discovery and matching platform.", updated: "Last updated: 24 October 2026", back: "Back to Home", notice: "Important: This is a draft policy for a project/demo. Review it and update it to match your actual data practices before publishing.",
    sections: [
      ["Information you provide", "When you register or use matching features, you may enter your name, email address, phone number, profile, location, business details, income range and scheme preferences."],
      ["How information is used", "Information you submit is used to provide account features, suggest relevant government schemes, check potential eligibility, and support application-related tools. Recommendations are informational, not official approval decisions."],
      ["Browser storage and account security", "The current demo may store registration and session information in your browser's localStorage. Browser storage is not appropriate for protecting passwords or sensitive personal information. Do not use real passwords or sensitive details in the demo. A production deployment should use secure server-side or managed authentication."],
      ["AI matching", "Scheme suggestions are generated from the details you provide and available scheme data. Matching results may be incomplete or inaccurate. Always confirm requirements and deadlines on official government websites."],
      ["Sharing with third parties", "This demo does not automatically submit government applications for you. If you follow a link to an external website, that website's own privacy practices apply. Update this section if you add analytics, hosting, authentication, AI APIs or other third-party services."],
      ["Data retention and deletion", "In the demo, information saved in localStorage remains on that browser until it is cleared or replaced. Clearing browser site data may remove locally stored account information. Production retention and deletion procedures must be documented separately."],
      ["Cookies and similar technologies", "The current frontend may use browser storage for language preferences and demo account sessions. If cookies or tracking tools are introduced, this policy should describe them accurately."],
      ["Children's privacy", "The platform is intended for people seeking business and government scheme information. Do not knowingly collect children's personal information without an appropriate legal basis and safeguards."],
      ["Your choices", "You can avoid entering optional information and clear locally stored demo data through your browser settings. For a production service, add appropriate mechanisms to access, correct or delete personal information."],
      ["Changes to this policy", "We may revise this page as the platform changes. Any updated version should display its new effective date."],
      ["Contact", "For privacy questions, contact the YojanaSathi AI project administrator using the contact details published on the platform. Add a verified contact email before public launch."],
    ],
    note: "YojanaSathi AI is an informational platform and is not an official government portal.", terms: "Read Terms & Conditions"
  },
  hi: {
    eyebrow: "आपकी गोपनीयता महत्वपूर्ण है", title: "गोपनीयता नीति", intro: "यह पृष्ठ बताता है कि सरकारी योजनाओं की खोज और मिलान के लिए YojanaSathi AI आपकी जानकारी का उपयोग कैसे करता है।", updated: "अंतिम अपडेट: 24 अक्टूबर 2026", back: "होम पर वापस जाएँ", notice: "महत्वपूर्ण: यह प्रोजेक्ट/डेमो के लिए नीति का मसौदा है। सार्वजनिक करने से पहले वास्तविक डेटा उपयोग के अनुसार इसकी समीक्षा और संशोधन करें।",
    sections: [
      ["आपके द्वारा दी गई जानकारी", "पंजीकरण या योजना मिलान के दौरान आप अपना नाम, ईमेल, मोबाइल नंबर, प्रोफ़ाइल, स्थान, व्यवसाय विवरण, आय सीमा और योजना संबंधी प्राथमिकताएँ दर्ज कर सकते हैं।"],
      ["जानकारी का उपयोग", "आपकी जानकारी का उपयोग अकाउंट सुविधाएँ देने, उपयुक्त सरकारी योजनाएँ सुझाने, संभावित पात्रता जाँचने और आवेदन संबंधी सुविधाएँ प्रदान करने के लिए किया जाता है। सुझाव आधिकारिक स्वीकृति नहीं हैं।"],
      ["ब्राउज़र स्टोरेज और अकाउंट सुरक्षा", "वर्तमान डेमो पंजीकरण और सत्र की जानकारी ब्राउज़र के localStorage में रख सकता है। पासवर्ड या संवेदनशील जानकारी सुरक्षित रखने के लिए यह उचित नहीं है। डेमो में असली पासवर्ड या संवेदनशील जानकारी न डालें। सार्वजनिक वेबसाइट के लिए सुरक्षित प्रमाणीकरण आवश्यक है।"],
      ["AI योजना मिलान", "योजनाओं के सुझाव आपकी दी गई जानकारी और उपलब्ध योजना डेटा पर आधारित हैं। परिणाम अधूरे या गलत हो सकते हैं। पात्रता और समय-सीमा की पुष्टि आधिकारिक सरकारी वेबसाइट पर करें।"],
      ["तीसरे पक्ष के साथ जानकारी साझा करना", "यह डेमो आपकी ओर से सरकारी आवेदन अपने आप जमा नहीं करता। बाहरी वेबसाइट पर जाने पर उसकी गोपनीयता नीति लागू होती है। एनालिटिक्स, होस्टिंग, प्रमाणीकरण या AI सेवाएँ जोड़ने पर इस अनुभाग को अपडेट करें।"],
      ["जानकारी रखना और हटाना", "डेमो में localStorage में रखी जानकारी ब्राउज़र से हटाए जाने या बदले जाने तक बनी रह सकती है। ब्राउज़र का साइट डेटा साफ करने से स्थानीय अकाउंट जानकारी हट सकती है। वास्तविक सेवा के लिए अलग नीति आवश्यक है।"],
      ["कुकीज़ और अन्य तकनीक", "वर्तमान फ्रंटएंड भाषा की पसंद और डेमो सत्र के लिए ब्राउज़र स्टोरेज का उपयोग कर सकता है। कुकीज़ या ट्रैकिंग जोड़ने पर उनका सही विवरण देना होगा।"],
      ["बच्चों की गोपनीयता", "यह प्लेटफ़ॉर्म व्यवसाय और सरकारी योजनाओं की जानकारी खोजने वालों के लिए है। उचित कानूनी आधार और सुरक्षा के बिना बच्चों की निजी जानकारी एकत्र न करें।"],
      ["आपके विकल्प", "आप वैकल्पिक जानकारी न देने का विकल्प चुन सकते हैं और ब्राउज़र सेटिंग से स्थानीय डेमो डेटा हटा सकते हैं। वास्तविक सेवा में जानकारी देखने, सुधारने और हटाने की सुविधा होनी चाहिए।"],
      ["नीति में बदलाव", "प्लेटफ़ॉर्म बदलने पर यह नीति संशोधित की जा सकती है। नई नीति में अपडेट की तारीख दी जानी चाहिए।"],
      ["संपर्क", "गोपनीयता से जुड़े सवालों के लिए प्लेटफ़ॉर्म पर दिए गए YojanaSathi AI प्रोजेक्ट प्रशासक के संपर्क विवरण का उपयोग करें। सार्वजनिक लॉन्च से पहले सत्यापित ईमेल जोड़ें।"],
    ],
    note: "YojanaSathi AI केवल जानकारी प्रदान करने वाला प्लेटफ़ॉर्म है, आधिकारिक सरकारी पोर्टल नहीं।", terms: "नियम और शर्तें पढ़ें"
  },
  mr: {
    eyebrow: "तुमची गोपनीयता महत्त्वाची आहे", title: "गोपनीयता धोरण", intro: "सरकारी योजना शोधण्यासाठी आणि जुळवण्यासाठी YojanaSathi AI तुमची माहिती कशी हाताळते, हे या पानावर स्पष्ट केले आहे.", updated: "शेवटचे अद्यतन: २४ ऑक्टोबर २०२६", back: "मुख्यपृष्ठावर जा", notice: "महत्त्वाचे: हे प्रोजेक्ट/डेमोसाठी तयार केलेले धोरणाचे प्रारूप आहे. सार्वजनिक करण्यापूर्वी प्रत्यक्ष डेटा वापरानुसार त्याची तपासणी व सुधारणा करा.",
    sections: [
      ["तुम्ही दिलेली माहिती", "नोंदणी करताना किंवा योजना जुळवताना तुम्ही नाव, ईमेल, मोबाईल क्रमांक, प्रोफाइल, ठिकाण, व्यवसायाची माहिती, उत्पन्नाची श्रेणी आणि योजनांविषयी प्राधान्ये देऊ शकता."],
      ["माहितीचा वापर", "खाते सुविधा देणे, योग्य सरकारी योजना सुचवणे, संभाव्य पात्रता तपासणे आणि अर्जासंबंधी सुविधा पुरवणे यासाठी दिलेली माहिती वापरली जाते. शिफारस म्हणजे अधिकृत मंजुरी नाही."],
      ["ब्राउझर स्टोरेज आणि खाते सुरक्षा", "सध्याच्या डेमोमध्ये नोंदणी व सत्राची माहिती ब्राउझरच्या localStorage मध्ये साठवली जाऊ शकते. पासवर्ड किंवा संवेदनशील माहिती सुरक्षित ठेवण्यासाठी ही पद्धत योग्य नाही. डेमोमध्ये खरा पासवर्ड किंवा संवेदनशील माहिती वापरू नका. सार्वजनिक वेबसाइटसाठी सुरक्षित प्रमाणीकरण आवश्यक आहे."],
      ["AI योजना जुळवणी", "योजनांच्या शिफारसी तुम्ही दिलेली माहिती आणि उपलब्ध योजना डेटावर आधारित असतात. निकाल अपूर्ण किंवा चुकीचे असू शकतात. पात्रता व अंतिम तारखा अधिकृत सरकारी वेबसाइटवर तपासा."],
      ["तृतीय पक्षांसोबत माहिती", "हा डेमो तुमच्या वतीने सरकारी अर्ज आपोआप सादर करत नाही. बाहेरील वेबसाइटवर गेल्यावर त्या वेबसाइटचे गोपनीयता धोरण लागू होते. ॲनालिटिक्स, होस्टिंग, प्रमाणीकरण किंवा AI सेवा जोडल्यास हा विभाग अद्ययावत करा."],
      ["माहिती ठेवणे आणि हटवणे", "डेमोमध्ये localStorage मधील माहिती ब्राउझरमधून काढेपर्यंत किंवा बदलेपर्यंत राहू शकते. ब्राउझरमधील साइट डेटा साफ केल्यास स्थानिक खात्याची माहिती हटू शकते. प्रत्यक्ष सेवेसाठी स्वतंत्र धोरण आवश्यक आहे."],
      ["कुकीज आणि तत्सम तंत्रज्ञान", "सध्याचे फ्रंटएंड भाषेची निवड आणि डेमो सत्रासाठी ब्राउझर स्टोरेज वापरू शकते. कुकीज किंवा ट्रॅकिंग जोडल्यास त्याची अचूक माहिती या धोरणात द्यावी."],
      ["मुलांची गोपनीयता", "हे व्यासपीठ व्यवसाय व सरकारी योजनांची माहिती शोधणाऱ्यांसाठी आहे. योग्य कायदेशीर आधार आणि संरक्षणाशिवाय मुलांची वैयक्तिक माहिती गोळा करू नये."],
      ["तुमचे पर्याय", "तुम्ही ऐच्छिक माहिती न देण्याचा पर्याय निवडू शकता आणि ब्राउझर सेटिंग्जमधून स्थानिक डेमो डेटा काढू शकता. प्रत्यक्ष सेवेत माहिती पाहणे, दुरुस्त करणे आणि हटवणे यासाठी योग्य सुविधा असाव्यात."],
      ["धोरणातील बदल", "व्यासपीठात बदल झाल्यास हे धोरण सुधारले जाऊ शकते. नवीन आवृत्तीत अद्ययावत तारीख दाखवावी."],
      ["संपर्क", "गोपनीयतेबाबत प्रश्न असल्यास व्यासपीठावर दिलेल्या YojanaSathi AI प्रकल्प प्रशासकाच्या संपर्क तपशीलांचा वापर करा. सार्वजनिक लॉन्चपूर्वी पडताळलेला ईमेल जोडा."],
    ],
    note: "YojanaSathi AI हे माहिती देणारे व्यासपीठ आहे; अधिकृत सरकारी पोर्टल नाही.", terms: "नियम व अटी वाचा"
  }
};

export default function Privacy() {
  const { language } = useLanguage();
  const t = copy[language] || copy.en;

  return (
    <div className="privacy-page" style={{ minHeight: "100vh", background: "#f7faf8", padding: "48px 20px", color: "#183a2c" }}>
      <main style={{ maxWidth: 960, margin: "0 auto" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 26, color: "#167346", textDecoration: "none", fontWeight: 600 }}>
          <ArrowLeft size={18} /> {t.back}
        </Link>
        <header style={{ padding: "38px 34px", background: "linear-gradient(120deg, #0f6842, #21865d)", borderRadius: 22, color: "white", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontWeight: 700, fontSize: 13, letterSpacing: 1 }}>
            <ShieldCheck size={20} /> {t.eyebrow}
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", margin: "0 0 14px" }}>{t.title}</h1>
          <p style={{ maxWidth: 740, lineHeight: 1.75, margin: "0 0 15px", opacity: 0.95 }}>{t.intro}</p>
          <small>{t.updated}</small>
        </header>
        <div role="note" style={{ background: "#fff7e8", border: "1px solid #f1d39c", padding: "16px 20px", borderRadius: 12, lineHeight: 1.7, marginBottom: 24, color: "#74501a" }}>
          {t.notice}
        </div>
        <section style={{ background: "white", border: "1px solid #e0eae3", borderRadius: 18, padding: "16px clamp(18px, 4vw, 36px)", boxShadow: "0 10px 35px rgba(10, 65, 35, .05)" }}>
          {t.sections.map(([heading, description], index) => (
            <article key={index} style={{ padding: "24px 0", borderBottom: index === t.sections.length - 1 ? "none" : "1px solid #e8eee9" }}>
              <h2 style={{ fontSize: 19, margin: "0 0 10px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#168454", fontSize: 15 }}>{String(index + 1).padStart(2, "0")}</span>
                {heading}
              </h2>
              <p style={{ color: "#516359", fontSize: 15, lineHeight: 1.85, margin: 0 }}>{description}</p>
            </article>
          ))}
        </section>
        <footer style={{ textAlign: "center", padding: "30px 12px", lineHeight: 1.8, color: "#516359" }}>
          <p>{t.note}</p>
          <Link to="/terms" style={{ color: "#167346", fontWeight: 700 }}>{t.terms}</Link>
        </footer>
      </main>
    </div>
  );
}
