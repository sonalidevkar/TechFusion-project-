import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import {
  HeartHandshake, Target, Eye, BrainCircuit, MapPin, FileCheck2,
  BellRing, ArrowRight, CheckCircle2, Users, Landmark,
  Lightbulb, ShieldCheck,
} from "lucide-react";

const content = {
  en: {
    eyebrow: "ABOUT YOJANAMITRA AI", hero1: "The right scheme.", hero2: "The right opportunity.",
    heroDesc: "YojanaMitra AI helps people discover relevant government schemes, understand eligibility requirements, and navigate the application process with greater confidence.",
    explore: "Explore Schemes", discover: "Discover Our Mission", trust: "Designed for accessible and informed scheme discovery",
    smart: "Smart Discovery", smartSub: "AI-assisted recommendations", eligibility: "Know Your Eligibility", eligibilitySub: "Clear guidance, better decisions",
    who: "WHO WE ARE", introTitle: "Making opportunities easier to find", introDesc: "Government schemes can offer important support, but finding the right information is not always easy. YojanaMitra AI aims to make scheme discovery simpler, clearer, and more accessible.",
    mission: "Our Mission", missionDesc: "To help individuals, students, farmers, and entrepreneurs discover potentially relevant government support through personalized scheme recommendations and understandable guidance.",
    vision: "Our Vision", visionDesc: "To build a future where people can access reliable scheme information more easily and make informed decisions about opportunities available to them.",
    promise: "Our Promise", promiseDesc: "To prioritize clarity, accessibility, responsible use of AI, and links to official information wherever available.",
    offer: "WHAT WE OFFER", offerTitle: "One platform, helpful possibilities", offerDesc: "Tools designed to make the process of discovering and understanding government schemes easier.",
    features: [
      ["AI-Powered Matching", "Discover schemes that match your profile, interests, business type, and eligibility."],
      ["Eligibility Guidance", "Understand eligibility requirements and the documents you may need before applying."],
      ["Location-Based Discovery", "Explore relevant central and state government schemes based on your location."],
      ["Application Assistance", "Stay organized with application guidance, important dates, and scheme information."],
    ],
    how: "HOW IT WORKS", howTitle: "Your journey, made simpler", howDesc: "Four straightforward steps to explore relevant schemes.",
    steps: [
      ["Create Your Profile", "Enter relevant details such as your location, occupation, and purpose."],
      ["Find Matching Schemes", "Explore schemes that may suit your profile and requirements."],
      ["Check Eligibility", "Review the official eligibility conditions and required documents."],
      ["Apply with Confidence", "Follow the official application process and track important next steps."],
    ],
    values: "OUR VALUES", valuesTitle: "Technology with a human purpose", valuesDesc: "We believe technology should help people understand their options, not make the process more complicated.",
    valueItems: ["Clear and accessible information", "Responsible AI-assisted recommendations", "User-focused and inclusive design", "Encouragement to verify official scheme requirements"],
    valuesCaption: "Better information. Better-informed decisions.",
    ctaEyebrow: "YOUR NEXT OPPORTUNITY STARTS HERE", ctaTitle: "Ready to discover what you may be eligible for?", ctaDesc: "Start exploring schemes and take the next step toward understanding the support available to you.",
    disclaimer: "YojanaMitra AI is intended to assist with scheme discovery. Recommendations do not guarantee eligibility, approval, or benefits. Always verify current rules and application details through the relevant official government department or portal.",
  },
  hi: {
    eyebrow: "योजनामित्र AI के बारे में", hero1: "सही योजना।", hero2: "सही अवसर।",
    heroDesc: "YojanaMitra AI लोगों को उपयुक्त सरकारी योजनाएँ खोजने, पात्रता समझने और आवेदन प्रक्रिया को अधिक आत्मविश्वास के साथ पूरा करने में मदद करता है।",
    explore: "योजनाएँ देखें", discover: "हमारा मिशन जानें", trust: "सरल और जानकारीपूर्ण योजना खोज के लिए बनाया गया",
    smart: "स्मार्ट खोज", smartSub: "AI की सहायता से सुझाव", eligibility: "अपनी पात्रता जानें", eligibilitySub: "स्पष्ट मार्गदर्शन, बेहतर निर्णय",
    who: "हम कौन हैं", introTitle: "अवसरों को खोजना आसान बनाना", introDesc: "सरकारी योजनाएँ महत्वपूर्ण सहायता दे सकती हैं, लेकिन सही जानकारी ढूँढना हमेशा आसान नहीं होता। YojanaMitra AI योजना खोज को सरल, स्पष्ट और सुलभ बनाना चाहता है।",
    mission: "हमारा मिशन", missionDesc: "व्यक्तियों, छात्रों, किसानों और उद्यमियों को उनकी जानकारी के अनुसार संभावित सरकारी सहायता और समझने योग्य मार्गदर्शन उपलब्ध कराना।",
    vision: "हमारा विज़न", visionDesc: "ऐसा भविष्य बनाना जहाँ लोग विश्वसनीय योजना जानकारी आसानी से प्राप्त कर सकें और उपलब्ध अवसरों पर सोच-समझकर निर्णय ले सकें।",
    promise: "हमारा वादा", promiseDesc: "स्पष्टता, सुलभता, AI के जिम्मेदार उपयोग और जहाँ उपलब्ध हों वहाँ आधिकारिक जानकारी के लिंक को प्राथमिकता देना।",
    offer: "हम क्या प्रदान करते हैं", offerTitle: "एक मंच, अनेक उपयोगी संभावनाएँ", offerDesc: "सरकारी योजनाओं को खोजना और समझना आसान बनाने वाले उपकरण।",
    features: [
      ["AI आधारित मिलान", "अपनी प्रोफ़ाइल, रुचि, व्यवसाय के प्रकार और पात्रता के अनुसार योजनाएँ खोजें।"],
      ["पात्रता मार्गदर्शन", "आवेदन से पहले पात्रता की शर्तें और आवश्यक दस्तावेज़ समझें।"],
      ["स्थान आधारित खोज", "अपने स्थान के अनुसार केंद्र और राज्य सरकार की प्रासंगिक योजनाएँ देखें।"],
      ["आवेदन सहायता", "आवेदन मार्गदर्शन, महत्वपूर्ण तिथियों और योजना जानकारी को व्यवस्थित रखें।"],
    ],
    how: "यह कैसे काम करता है", howTitle: "आपकी यात्रा अब और आसान", howDesc: "उपयुक्त योजनाएँ खोजने के चार आसान चरण।",
    steps: [
      ["अपनी प्रोफ़ाइल बनाएँ", "स्थान, व्यवसाय और उद्देश्य जैसी आवश्यक जानकारी भरें।"],
      ["उपयुक्त योजनाएँ खोजें", "अपनी प्रोफ़ाइल और ज़रूरतों के अनुसार योजनाएँ देखें।"],
      ["पात्रता जाँचें", "आधिकारिक पात्रता शर्तें और आवश्यक दस्तावेज़ देखें।"],
      ["आत्मविश्वास से आवेदन करें", "आधिकारिक आवेदन प्रक्रिया का पालन करें और अगले महत्वपूर्ण चरण जानें।"],
    ],
    values: "हमारे मूल्य", valuesTitle: "मानव हित के लिए तकनीक", valuesDesc: "हम मानते हैं कि तकनीक लोगों को विकल्प समझने में मदद करे, प्रक्रिया को और जटिल न बनाए।",
    valueItems: ["स्पष्ट और सुलभ जानकारी", "AI की सहायता से जिम्मेदार सुझाव", "उपयोगकर्ता-केंद्रित और समावेशी डिज़ाइन", "आधिकारिक योजना शर्तों की पुष्टि के लिए प्रोत्साहन"],
    valuesCaption: "बेहतर जानकारी। अधिक समझदारी भरे निर्णय।",
    ctaEyebrow: "आपका अगला अवसर यहीं से शुरू होता है", ctaTitle: "जानना चाहते हैं कि आप किन योजनाओं के पात्र हो सकते हैं?", ctaDesc: "योजनाएँ खोजना शुरू करें और उपलब्ध सहायता को समझने की दिशा में अगला कदम बढ़ाएँ।",
    disclaimer: "YojanaMitra AI का उद्देश्य योजना खोज में सहायता करना है। सुझाव पात्रता, स्वीकृति या लाभ की गारंटी नहीं देते। आवेदन से पहले संबंधित आधिकारिक सरकारी विभाग या पोर्टल पर वर्तमान नियमों और विवरणों की पुष्टि करें।",
  },
  mr: {
    eyebrow: "योजनामित्र AI बद्दल", hero1: "योग्य योजना.", hero2: "योग्य संधी.",
    heroDesc: "YojanaMitra AI लोकांना उपयुक्त सरकारी योजना शोधण्यासाठी, पात्रतेच्या अटी समजून घेण्यासाठी आणि अर्ज प्रक्रिया अधिक आत्मविश्वासाने पूर्ण करण्यासाठी मदत करते.",
    explore: "योजना पाहा", discover: "आमचे ध्येय जाणून घ्या", trust: "सुलभ आणि माहितीपूर्ण योजना शोधासाठी तयार केलेले",
    smart: "स्मार्ट शोध", smartSub: "AI च्या मदतीने शिफारसी", eligibility: "तुमची पात्रता जाणून घ्या", eligibilitySub: "स्पष्ट मार्गदर्शन, चांगले निर्णय",
    who: "आम्ही कोण आहोत", introTitle: "संधी शोधणे अधिक सोपे करणे", introDesc: "सरकारी योजना महत्त्वाची मदत देऊ शकतात; मात्र योग्य माहिती शोधणे नेहमी सोपे नसते. YojanaMitra AI योजना शोध अधिक सोपा, स्पष्ट आणि सर्वांसाठी सुलभ करण्याचा प्रयत्न करते.",
    mission: "आमचे ध्येय", missionDesc: "व्यक्ती, विद्यार्थी, शेतकरी आणि उद्योजकांना त्यांच्या माहितीनुसार उपयुक्त ठरू शकणाऱ्या सरकारी योजना शोधण्यासाठी आणि सोपे मार्गदर्शन मिळवण्यासाठी मदत करणे.",
    vision: "आमची दृष्टी", visionDesc: "विश्वासार्ह योजनांची माहिती सर्वांना सहज मिळावी आणि उपलब्ध संधींबाबत माहितीपूर्ण निर्णय घेता यावेत, असे भविष्य घडवणे.",
    promise: "आमचे वचन", promiseDesc: "स्पष्टता, सुलभता, AI चा जबाबदार वापर आणि उपलब्ध असल्यास अधिकृत माहितीच्या लिंक यांना प्राधान्य देणे.",
    offer: "आम्ही काय देतो", offerTitle: "एक व्यासपीठ, अनेक उपयुक्त संधी", offerDesc: "सरकारी योजना शोधणे आणि समजून घेणे सोपे करणारी साधने.",
    features: [
      ["AI आधारित योजना जुळवणी", "तुमची प्रोफाइल, आवडी, व्यवसायाचा प्रकार आणि पात्रतेनुसार योजना शोधा."],
      ["पात्रता मार्गदर्शन", "अर्ज करण्यापूर्वी पात्रतेच्या अटी आणि आवश्यक कागदपत्रे समजून घ्या."],
      ["स्थानानुसार योजना शोध", "तुमच्या स्थानानुसार केंद्र व राज्य सरकारच्या संबंधित योजना पाहा."],
      ["अर्जासाठी मदत", "अर्ज मार्गदर्शन, महत्त्वाच्या तारखा आणि योजनांची माहिती व्यवस्थित ठेवा."],
    ],
    how: "हे कसे काम करते", howTitle: "तुमचा प्रवास अधिक सोपा", howDesc: "योग्य योजना शोधण्यासाठी चार सोप्या पायऱ्या.",
    steps: [
      ["तुमची प्रोफाइल तयार करा", "स्थान, व्यवसाय आणि उद्देश यांसारखी आवश्यक माहिती भरा."],
      ["जुळणाऱ्या योजना शोधा", "तुमच्या प्रोफाइल आणि गरजांनुसार योजना पाहा."],
      ["पात्रता तपासा", "अधिकृत पात्रतेच्या अटी आणि आवश्यक कागदपत्रे तपासा."],
      ["आत्मविश्वासाने अर्ज करा", "अधिकृत अर्ज प्रक्रियेचे पालन करा आणि पुढील महत्त्वाच्या टप्प्यांची माहिती घ्या."],
    ],
    values: "आमची मूल्ये", valuesTitle: "माणसांच्या हितासाठी तंत्रज्ञान", valuesDesc: "तंत्रज्ञानाने लोकांना त्यांचे पर्याय समजण्यास मदत केली पाहिजे; प्रक्रिया अधिक गुंतागुंतीची होऊ नये, असा आमचा विश्वास आहे.",
    valueItems: ["स्पष्ट आणि सहज उपलब्ध माहिती", "AI च्या मदतीने जबाबदार शिफारसी", "वापरकर्ताकेंद्रित आणि सर्वसमावेशक डिझाइन", "अधिकृत योजनेच्या अटी तपासण्यासाठी प्रोत्साहन"],
    valuesCaption: "चांगली माहिती. अधिक माहितीपूर्ण निर्णय.",
    ctaEyebrow: "तुमची पुढची संधी इथून सुरू होते", ctaTitle: "तुम्ही कोणत्या योजनांसाठी पात्र असू शकता ते शोधायचे आहे?", ctaDesc: "योजना शोधायला सुरुवात करा आणि उपलब्ध मदत समजून घेण्यासाठी पुढचे पाऊल टाका.",
    disclaimer: "YojanaMitra AI हे योजना शोधण्यासाठी मदत करणारे व्यासपीठ आहे. शिफारसींमुळे पात्रता, मंजुरी किंवा लाभाची हमी मिळत नाही. अर्ज करण्यापूर्वी संबंधित अधिकृत सरकारी विभाग किंवा पोर्टलवर सध्याचे नियम आणि अर्जाचा तपशील तपासा.",
  },
};

const featureIcons = [BrainCircuit, FileCheck2, MapPin, BellRing];

export default function About() {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <main className="ym-about">
      <section className="ym-about-hero">
        <div className="ym-about-hero-inner">
          <div className="ym-about-hero-content">
            <span className="ym-eyebrow">{t.eyebrow}</span>
            <h1>{t.hero1}<br /><span>{t.hero2}</span></h1>
            <p>{t.heroDesc}</p>
            <div className="ym-hero-actions">
              <Link to="/schemes" className="ym-btn ym-btn-primary">{t.explore} <ArrowRight size={18} /></Link>
              <a href="#our-mission" className="ym-btn ym-btn-outline">{t.discover}</a>
            </div>
            <div className="ym-trust-note"><ShieldCheck size={19} /><span>{t.trust}</span></div>
          </div>
          <div className="ym-hero-visual">
            <div className="ym-orbit ym-orbit-one" />
            <div className="ym-orbit ym-orbit-two" />
            <div className="ym-hero-icon"><Landmark size={66} strokeWidth={1.5} /></div>
            <div className="ym-float-card ym-float-top">
              <span className="ym-float-icon"><BrainCircuit size={21} /></span>
              <div><strong>{t.smart}</strong><small>{t.smartSub}</small></div>
            </div>
            <div className="ym-float-card ym-float-bottom">
              <span className="ym-float-icon ym-green"><CheckCircle2 size={21} /></span>
              <div><strong>{t.eligibility}</strong><small>{t.eligibilitySub}</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ym-about-intro" id="our-mission">
        <div className="ym-section-heading"><span className="ym-eyebrow">{t.who}</span><h2>{t.introTitle}</h2><p>{t.introDesc}</p></div>
        <div className="ym-purpose-grid">
          <article className="ym-purpose-card"><div className="ym-purpose-icon"><Target size={27} /></div><h3>{t.mission}</h3><p>{t.missionDesc}</p></article>
          <article className="ym-purpose-card"><div className="ym-purpose-icon ym-purpose-green"><Eye size={27} /></div><h3>{t.vision}</h3><p>{t.visionDesc}</p></article>
          <article className="ym-purpose-card"><div className="ym-purpose-icon ym-purpose-orange"><HeartHandshake size={27} /></div><h3>{t.promise}</h3><p>{t.promiseDesc}</p></article>
        </div>
      </section>

      <section className="ym-features-section">
        <div className="ym-section-heading"><span className="ym-eyebrow">{t.offer}</span><h2>{t.offerTitle}</h2><p>{t.offerDesc}</p></div>
        <div className="ym-features-grid">
          {t.features.map(([title, description], index) => {
            const Icon = featureIcons[index];
            return <article className="ym-feature-card" key={index}><div className="ym-feature-icon"><Icon size={26} /></div><h3>{title}</h3><p>{description}</p></article>;
          })}
        </div>
      </section>

      <section className="ym-process-section">
        <div className="ym-section-heading"><span className="ym-eyebrow">{t.how}</span><h2>{t.howTitle}</h2><p>{t.howDesc}</p></div>
        <div className="ym-steps-grid">
          {t.steps.map(([title, description], index) => <article className="ym-step-card" key={index}><span className="ym-step-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="ym-values-section">
        <div className="ym-values-content">
          <span className="ym-eyebrow">{t.values}</span><h2>{t.valuesTitle}</h2><p>{t.valuesDesc}</p>
          <ul className="ym-values-list">{t.valueItems.map((item, index) => <li key={index}><CheckCircle2 size={20} />{item}</li>)}</ul>
        </div>
        <div className="ym-values-art">
          <div className="ym-values-art-circle"><Users size={60} strokeWidth={1.4} /></div>
          <div className="ym-values-art-caption"><Lightbulb size={22} /><span>{t.valuesCaption}</span></div>
        </div>
      </section>

      <section className="ym-about-cta">
        <div><span className="ym-eyebrow">{t.ctaEyebrow}</span><h2>{t.ctaTitle}</h2><p>{t.ctaDesc}</p></div>
        <Link to="/schemes" className="ym-btn ym-cta-btn">{t.explore} <ArrowRight size={18} /></Link>
      </section>
      <p className="ym-about-disclaimer">{t.disclaimer}</p>
    </main>
  );
}
