
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Brain,
  Sparkles,
  UserRound,
  Wallet,
  Target,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Mic,
  MicOff,
  Square,
  Volume2,
} from "lucide-react";

import schemesData from "../data/schemes.json";
import { useLanguage } from "../context/LanguageContext.jsx";

const emptyForm = {
  age: "",
  state: "",
  district: "",
  gender: "",
  category: "",
  occupation: "",
  income: "",
  purpose: "",
  businessType: "",
  businessStage: "",
  registered: "",
  amount: "",
  assistance: "",
  description: "",
};

const words = {
  en: {
    title: "Find Your Perfect Government Scheme",
    subtitle:
      "Tell us about yourself and your goals. Our smart matching system will recommend suitable schemes.",
    badge: "Smart Government Scheme Matching",
    personal: "Personal Information",
    financial: "Financial Information",
    needs: "Your Requirements",
    age: "Age",
    state: "State",
    district: "District",
    gender: "Gender",
    category: "Social Category",
    occupation: "Occupation",
    income: "Annual Family Income (₹)",
    amount: "Funding Required (₹)",
    purpose: "Primary Goal",
    businessType: "Business Type",
    businessStage: "Business Stage",
    registered: "Business Registered?",
    assistance: "Preferred Support",
    description: "Describe Your Requirements",
    placeholder:
      "Explain your business idea or the support you need...",
    select: "Select an option",
    analyse: "Find My Matching Schemes",
    reset: "Reset Form",
    results: "Your Personalised Recommendations",
    matches: "Match Score",
    reasons: "Why This Scheme Matches",
    warnings: "Eligibility Checks Required",
    benefit: "Key Benefits",
    details: "Official Scheme Website",
    top: "Top Recommendation",
    empty:
      "No strong matches found. Try changing your requirements.",
    disclaimer:
      "Scores measure relevance only, not eligibility or approval probability. Always verify official government rules.",
    total: "Schemes Analysed",
    found: "Recommendations Found",
    mandatory: "Please select your primary goal.",
    caution: "Further eligibility verification is required.",
    incomeWarning:
      "Check any income limits on the official website.",
    amountWarning:
      "Confirm funding limits and lending conditions.",
    stateWarning:
      "Confirm that the scheme is available in your state.",
    ageWarning: "Age restrictions may apply.",
    categoryWarning:
      "Confirm category-specific eligibility.",
    voiceStart: "Start Voice Input",
    voiceStop: "Stop Recording",
    listening: "Listening... Speak now",
    voiceHint:
      "Speak in English, Marathi or Hindi based on your Home page language.",
    voiceUnsupported:
      "Speech recognition is not supported in this browser. Try Chrome or Edge.",
    voiceDenied:
      "Microphone permission denied. Allow microphone access in browser settings.",
    voiceNoSpeech:
      "No speech detected. Please try again.",
    voiceError:
      "Unable to recognise speech. Please try again.",
  },

  mr: {
    title: "तुमच्यासाठी योग्य सरकारी योजना शोधा",
    subtitle:
      "तुमची माहिती आणि गरजा भरा. आमची स्मार्ट प्रणाली योग्य सरकारी योजना सुचवेल.",
    badge: "स्मार्ट सरकारी योजना जुळणी",
    personal: "वैयक्तिक माहिती",
    financial: "आर्थिक माहिती",
    needs: "तुमच्या गरजा",
    age: "वय",
    state: "राज्य",
    district: "जिल्हा",
    gender: "लिंग",
    category: "सामाजिक प्रवर्ग",
    occupation: "सध्याचा व्यवसाय",
    income: "वार्षिक कौटुंबिक उत्पन्न (₹)",
    amount: "आवश्यक निधी (₹)",
    purpose: "मुख्य उद्देश",
    businessType: "व्यवसायाचा प्रकार",
    businessStage: "व्यवसायाची स्थिती",
    registered: "व्यवसाय नोंदणीकृत आहे?",
    assistance: "अपेक्षित मदत",
    description: "तुमच्या गरजा सविस्तर लिहा",
    placeholder:
      "तुमची व्यवसाय कल्पना किंवा आवश्यक मदत लिहा...",
    select: "पर्याय निवडा",
    analyse: "माझ्यासाठी योग्य योजना शोधा",
    reset: "पुन्हा सुरू करा",
    results: "तुमच्यासाठी सुचवलेल्या योजना",
    matches: "जुळणी गुण",
    reasons: "ही योजना का सुचवली?",
    warnings: "पात्रता तपासणे आवश्यक",
    benefit: "मुख्य लाभ",
    details: "अधिकृत योजना वेबसाइट",
    top: "सर्वोत्तम शिफारस",
    empty:
      "योग्य योजना सापडली नाही. गरजा बदलून पुन्हा प्रयत्न करा.",
    disclaimer:
      "जुळणी गुण म्हणजे पात्रता किंवा मंजुरीची हमी नाही. अधिकृत सरकारी नियम तपासा.",
    total: "तपासलेल्या योजना",
    found: "सुचवलेल्या योजना",
    mandatory: "कृपया मुख्य उद्देश निवडा.",
    caution:
      "अतिरिक्त पात्रता तपासणी आवश्यक आहे.",
    incomeWarning:
      "अधिकृत वेबसाइटवर उत्पन्न मर्यादा तपासा.",
    amountWarning:
      "कर्जाची मर्यादा आणि अटी तपासा.",
    stateWarning:
      "तुमच्या राज्यात योजना उपलब्ध आहे का तपासा.",
    ageWarning: "वयाची अट लागू असू शकते.",
    categoryWarning:
      "प्रवर्गानुसार पात्रता तपासा.",
    voiceStart: "बोलून माहिती भरा",
    voiceStop: "रेकॉर्डिंग थांबवा",
    listening: "ऐकत आहे... आता बोला",
    voiceHint:
      "मायक्रोफोनवर क्लिक करून मराठीत तुमच्या गरजा सांगा.",
    voiceUnsupported:
      "या ब्राउझरमध्ये व्हॉइस सुविधा उपलब्ध नाही. Chrome किंवा Edge वापरा.",
    voiceDenied:
      "मायक्रोफोनची परवानगी मिळाली नाही. ब्राउझर सेटिंगमध्ये परवानगी द्या.",
    voiceNoSpeech:
      "आवाज ऐकू आला नाही. पुन्हा प्रयत्न करा.",
    voiceError:
      "आवाजाचे मजकुरात रूपांतर झाले नाही. पुन्हा प्रयत्न करा.",
  },

  hi: {
    title: "अपने लिए सही सरकारी योजना खोजें",
    subtitle:
      "अपनी जानकारी और जरूरतें भरें। हमारी स्मार्ट प्रणाली उपयुक्त सरकारी योजनाएँ सुझाएगी।",
    badge: "स्मार्ट सरकारी योजना मिलान",
    personal: "व्यक्तिगत जानकारी",
    financial: "वित्तीय जानकारी",
    needs: "आपकी आवश्यकताएँ",
    age: "आयु",
    state: "राज्य",
    district: "जिला",
    gender: "लिंग",
    category: "सामाजिक श्रेणी",
    occupation: "वर्तमान व्यवसाय",
    income: "वार्षिक पारिवारिक आय (₹)",
    amount: "आवश्यक धनराशि (₹)",
    purpose: "मुख्य उद्देश्य",
    businessType: "व्यवसाय का प्रकार",
    businessStage: "व्यवसाय की स्थिति",
    registered: "व्यवसाय पंजीकृत है?",
    assistance: "वांछित सहायता",
    description: "अपनी आवश्यकता बताएँ",
    placeholder:
      "अपने व्यवसाय या आवश्यक सहायता के बारे में लिखें...",
    select: "विकल्प चुनें",
    analyse: "मेरे लिए योजनाएँ खोजें",
    reset: "रीसेट करें",
    results: "आपके लिए सुझाई गई योजनाएँ",
    matches: "मिलान अंक",
    reasons: "यह योजना क्यों सुझाई गई?",
    warnings: "पात्रता जाँच आवश्यक",
    benefit: "मुख्य लाभ",
    details: "आधिकारिक योजना वेबसाइट",
    top: "सर्वश्रेष्ठ सुझाव",
    empty:
      "उपयुक्त योजनाएँ नहीं मिलीं। आवश्यकताएँ बदलकर फिर प्रयास करें।",
    disclaimer:
      "मिलान अंक पात्रता या स्वीकृति की गारंटी नहीं हैं। आधिकारिक सरकारी नियम जाँचें।",
    total: "जाँची गई योजनाएँ",
    found: "सुझाई गई योजनाएँ",
    mandatory: "कृपया मुख्य उद्देश्य चुनें।",
    caution: "अतिरिक्त पात्रता जाँच आवश्यक है।",
    incomeWarning:
      "आधिकारिक वेबसाइट पर आय सीमा जाँचें।",
    amountWarning:
      "ऋण सीमा और शर्तें जाँचें।",
    stateWarning:
      "अपने राज्य में योजना की उपलब्धता जाँचें।",
    ageWarning: "आयु सीमा लागू हो सकती है।",
    categoryWarning:
      "श्रेणी के अनुसार पात्रता जाँचें।",
    voiceStart: "बोलकर जानकारी भरें",
    voiceStop: "रिकॉर्डिंग बंद करें",
    listening: "सुन रहे हैं... अब बोलें",
    voiceHint:
      "माइक्रोफोन पर क्लिक करके हिंदी में अपनी जरूरत बताएँ।",
    voiceUnsupported:
      "इस ब्राउज़र में वॉइस सुविधा उपलब्ध नहीं है। Chrome या Edge इस्तेमाल करें।",
    voiceDenied:
      "माइक्रोफोन की अनुमति नहीं मिली। ब्राउज़र सेटिंग में अनुमति दें।",
    voiceNoSpeech:
      "आवाज नहीं मिली। फिर कोशिश करें।",
    voiceError:
      "आवाज को टेक्स्ट में बदलने में समस्या हुई। फिर कोशिश करें।",
  },
};

const options = {
  state: [
    "Maharashtra",
    "Karnataka",
    "Gujarat",
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Andhra Pradesh",
    "Kerala",
    "Delhi",
    "Bihar",
    "West Bengal",
    "Other",
  ],
  gender: [
    "Female",
    "Male",
    "Other",
    "Prefer not to say",
  ],
  category: [
    "General",
    "OBC",
    "SC",
    "ST",
    "EWS",
    "Minority",
    "Other",
  ],
  occupation: [
    "Student",
    "Farmer",
    "Entrepreneur",
    "Employed",
    "Unemployed",
    "Artisan",
    "Street Vendor",
    "Homemaker",
    "Other",
  ],
  purpose: [
    "Business",
    "Agriculture",
    "Education",
    "Healthcare",
    "Housing",
    "Skill Development",
    "Women Welfare",
    "Savings",
  ],
  businessType: [
    "Manufacturing",
    "Services",
    "Trading",
    "Technology",
    "Food Processing",
    "Agriculture",
    "Handicrafts",
    "Street Vending",
    "Other",
  ],
  businessStage: [
    "Planning to start",
    "Already operating",
  ],
  registered: [
    "Yes",
    "No",
    "Not sure",
  ],
  assistance: [
    "Loan",
    "Subsidy",
    "Training",
    "Scholarship",
    "Insurance",
    "Income Support",
    "Housing Assistance",
    "Other",
  ],
};

const translatedOptions = {
  mr: {
    Maharashtra: "महाराष्ट्र",
    Karnataka: "कर्नाटक",
    Gujarat: "गुजरात",
    Female: "महिला",
    Male: "पुरुष",
    Student: "विद्यार्थी",
    Farmer: "शेतकरी",
    Entrepreneur: "उद्योजक",
    Employed: "नोकरी",
    Unemployed: "बेरोजगार",
    Artisan: "कारागीर",
    "Street Vendor": "फेरीवाला",
    Homemaker: "गृहिणी",
    Business: "व्यवसाय",
    Agriculture: "शेती",
    Education: "शिक्षण",
    Healthcare: "आरोग्य",
    Housing: "गृहनिर्माण",
    "Skill Development": "कौशल्य विकास",
    "Women Welfare": "महिला कल्याण",
    Savings: "बचत",
    Manufacturing: "उत्पादन",
    Services: "सेवा",
    Trading: "व्यापार",
    Technology: "तंत्रज्ञान",
    "Food Processing": "अन्नप्रक्रिया",
    Handicrafts: "हस्तकला",
    "Street Vending": "फेरी व्यवसाय",
    "Planning to start": "नवीन सुरू करणार",
    "Already operating": "सुरू असलेला",
    Yes: "होय",
    No: "नाही",
    "Not sure": "माहित नाही",
    Loan: "कर्ज",
    Subsidy: "अनुदान",
    Training: "प्रशिक्षण",
    Scholarship: "शिष्यवृत्ती",
    Insurance: "विमा",
    "Income Support": "उत्पन्न सहाय्य",
    "Housing Assistance": "घरकुल मदत",
    Other: "इतर",
  },
  hi: {
    Maharashtra: "महाराष्ट्र",
    Karnataka: "कर्नाटक",
    Gujarat: "गुजरात",
    Female: "महिला",
    Male: "पुरुष",
    Student: "विद्यार्थी",
    Farmer: "किसान",
    Entrepreneur: "उद्यमी",
    Employed: "नौकरीपेशा",
    Unemployed: "बेरोजगार",
    Artisan: "कारीगर",
    "Street Vendor": "रेहड़ी विक्रेता",
    Homemaker: "गृहिणी",
    Business: "व्यवसाय",
    Agriculture: "कृषि",
    Education: "शिक्षा",
    Healthcare: "स्वास्थ्य",
    Housing: "आवास",
    "Skill Development": "कौशल विकास",
    "Women Welfare": "महिला कल्याण",
    Savings: "बचत",
    Manufacturing: "विनिर्माण",
    Services: "सेवाएँ",
    Trading: "व्यापार",
    Technology: "तकनीक",
    "Food Processing": "खाद्य प्रसंस्करण",
    Handicrafts: "हस्तशिल्प",
    "Street Vending": "स्ट्रीट वेंडिंग",
    "Planning to start": "शुरू करने वाले हैं",
    "Already operating": "पहले से चल रहा",
    Yes: "हाँ",
    No: "नहीं",
    "Not sure": "पता नहीं",
    Loan: "ऋण",
    Subsidy: "सब्सिडी",
    Training: "प्रशिक्षण",
    Scholarship: "छात्रवृत्ति",
    Insurance: "बीमा",
    "Income Support": "आय सहायता",
    "Housing Assistance": "आवास सहायता",
    Other: "अन्य",
  },
};

const goalKeywords = {
  Business: [
    "business",
    "startup",
    "entrepreneurship",
    "msme",
    "loan",
    "micro-enterprise",
    "vendor",
  ],
  Agriculture: [
    "agriculture",
    "farmer",
    "crop",
    "soil",
    "kisan",
    "farming",
  ],
  Education: [
    "education",
    "student",
    "scholarship",
  ],
  Healthcare: [
    "health",
    "hospital",
    "medical",
    "pm-jay",
  ],
  Housing: [
    "housing",
    "home",
    "awas",
  ],
  "Skill Development": [
    "skill",
    "training",
    "certification",
    "employment",
  ],
  "Women Welfare": [
    "women",
    "girl",
    "maternity",
    "mother",
  ],
  Savings: [
    "savings",
    "deposit",
    "interest",
  ],
};

const supportKeywords = {
  Loan: ["loan", "credit", "bank", "finance"],
  Subsidy: ["subsidy", "margin money", "incentive"],
  Training: ["training", "skill", "certification"],
  Scholarship: ["scholarship"],
  Insurance: ["insurance", "coverage", "hospital"],
  "Income Support": [
    "income support",
    "financial assistance",
  ],
  "Housing Assistance": [
    "housing",
    "home",
    "awas",
  ],
};

function getSchemeText(scheme) {
  return [
    scheme.name,
    scheme.shortName,
    scheme.description,
    scheme.benefit,
    ...(scheme.tags || []),
    ...(scheme.category || []),
    ...(scheme.businessType || []),
    ...(scheme.financialSupport || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function calculateMatch(scheme, user, t, label) {
  const text = getSchemeText(scheme);
  const reasons = [];
  const warnings = [];

  let points = 0;
  let possible = 0;

  function addMatch(condition, weight, reason) {
    possible += weight;

    if (condition) {
      points += weight;
      reasons.push(reason);
    }
  }

  const goalMatches = (
    goalKeywords[user.purpose] || []
  ).some((word) => text.includes(word));

  if (!goalMatches) return null;

  addMatch(
    goalMatches,
    50,
    `${t.purpose}: ${label(user.purpose)}`
  );

  if (user.assistance) {
    const keywords =
      supportKeywords[user.assistance] || [];

    addMatch(
      keywords.some((word) => text.includes(word)),
      20,
      `${t.assistance}: ${label(user.assistance)}`
    );
  }

  if (
    user.businessType &&
    ["Business", "Agriculture"].includes(user.purpose)
  ) {
    const type = user.businessType.toLowerCase();

    addMatch(
      text.includes(type) ||
        (type === "technology" &&
          text.includes("startup")),
      12,
      `${t.businessType}: ${label(user.businessType)}`
    );
  }

  if (user.category) {
    const categories = (scheme.category || []).map(
      (item) => String(item).toLowerCase()
    );

    const exact = categories.includes(
      user.category.toLowerCase()
    );

    const general =
      categories.includes("general") ||
      categories.includes("all");

    if (categories.length > 0) {
      addMatch(
        exact || general,
        10,
        `${t.category}: ${user.category}`
      );

      if (!exact && !general) {
        warnings.push(t.categoryWarning);
      }
    }
  }

  if (user.gender === "Female") {
    addMatch(
      text.includes("women") ||
        text.includes("girl"),
      5,
      `${t.gender}: ${label("Female")}`
    );
  }

  if (user.occupation) {
    const occupation =
      user.occupation.toLowerCase();

    addMatch(
      text.includes(occupation) ||
        (occupation === "entrepreneur" &&
          text.includes("business")) ||
        (occupation === "student" &&
          text.includes("education")),
      5,
      `${t.occupation}: ${label(user.occupation)}`
    );
  }

  const states = scheme.eligibility?.states || [];

  if (
    user.state &&
    states.length > 0 &&
    !states.includes("All") &&
    !states.includes(user.state)
  ) {
    warnings.push(t.stateWarning);
  }

  if (
    user.income &&
    scheme.eligibility?.maxIncome &&
    Number(user.income) >
      Number(scheme.eligibility.maxIncome)
  ) {
    warnings.push(t.incomeWarning);
  }

  if (
    user.age &&
    Number(user.age) < 18 &&
    user.purpose === "Business"
  ) {
    warnings.push(t.ageWarning);
  }

  if (user.amount) {
    warnings.push(t.amountWarning);
  }

  warnings.push(t.caution);

  return {
    scheme,
    score: Math.round(
      (points / Math.max(possible, 1)) * 100
    ),
    reasons,
    warnings: [...new Set(warnings)],
  };
}

export default function MatchScheme() {
  const languageContext = useLanguage();

  const lang = ["en", "mr", "hi"].includes(
    languageContext?.language
  )
    ? languageContext.language
    : ["en", "mr", "hi"].includes(
        languageContext?.lang
      )
    ? languageContext.lang
    : "en";

  const t = words[lang];

  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState("");

  // Voice-to-text state
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const [interimText, setInterimText] = useState("");

  const recognitionRef = useRef(null);
  const descriptionRef = useRef("");
  const activeLangRef = useRef(lang);

  const label = (value) =>
    translatedOptions[lang]?.[value] || value;

  useEffect(() => {
    activeLangRef.current = lang;
  }, [lang]);

  useEffect(() => {
    descriptionRef.current = form.description;
  }, [form.description]);

  // Clean up microphone when component unmounts.
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.abort();
        recognitionRef.current = null;
      }
    };
  }, []);

  function stopVoiceInput() {
    const recognition = recognitionRef.current;

    if (recognition) {
      recognition.stop();
    }

    setIsListening(false);
    setInterimText("");
  }

  function startVoiceInput() {
    if (isListening) {
      stopVoiceInput();
      return;
    }

    setVoiceError("");
    setInterimText("");

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceError(t.voiceUnsupported);
      return;
    }

    // Stop any previous recognition instance.
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }

    const recognition = new SpeechRecognition();

    recognition.lang =
      lang === "mr"
        ? "mr-IN"
        : lang === "hi"
        ? "hi-IN"
        : "en-IN";

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceError("");
    };

    recognition.onresult = (event) => {
      let finalTranscript = "";
      let interimTranscript = "";

      for (
        let index = event.resultIndex;
        index < event.results.length;
        index++
      ) {
        const result = event.results[index];
        const transcript =
          result[0]?.transcript || "";

        if (result.isFinal) {
          finalTranscript += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }

      if (finalTranscript.trim()) {
        setForm((previous) => {
          const currentDescription =
            previous.description.trim();

          const updatedDescription = [
            currentDescription,
            finalTranscript.trim(),
          ]
            .filter(Boolean)
            .join(" ");

          descriptionRef.current = updatedDescription;

          return {
            ...previous,
            description: updatedDescription,
          };
        });

        setSubmitted(null);
      }

      setInterimText(interimTranscript);
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed") {
        setVoiceError(
          words[activeLangRef.current].voiceDenied
        );
      } else if (event.error === "no-speech") {
        setVoiceError(
          words[activeLangRef.current].voiceNoSpeech
        );
      } else if (
        event.error !== "aborted" &&
        event.error !== "no-speech"
      ) {
        setVoiceError(
          words[activeLangRef.current].voiceError
        );
      }

      setIsListening(false);
      setInterimText("");
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimText("");
    };

    try {
      recognition.start();
    } catch {
      setVoiceError(t.voiceError);
      setIsListening(false);
    }
  }

  const results = useMemo(() => {
    if (!submitted) return [];

    return schemesData
      .map((scheme) =>
        calculateMatch(scheme, submitted, t, label)
      )
      .filter(Boolean)
      .filter((item) => item.score >= 35)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [submitted, lang]);

  function updateField(name, value) {
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(null);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.purpose) {
      setError(t.mandatory);
      return;
    }

    if (isListening) {
      stopVoiceInput();
    }

    setError("");
    setSubmitted({ ...form });

    setTimeout(() => {
      document
        .getElementById("matching-results")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }

  function resetForm() {
    if (isListening) {
      stopVoiceInput();
    }

    setForm(emptyForm);
    setSubmitted(null);
    setError("");
    setVoiceError("");
    setInterimText("");
  }

  function inputField(name, type = "text") {
    return (
      <label
        className="advanced-field"
        key={name}
      >
        <span>{t[name]}</span>

        <input
          type={type}
          min={
            type === "number" ? 0 : undefined
          }
          max={
            name === "age" ? 120 : undefined
          }
          value={form[name]}
          placeholder={t[name]}
          onChange={(event) =>
            updateField(
              name,
              event.target.value
            )
          }
        />
      </label>
    );
  }

  function selectField(name) {
    return (
      <label
        className="advanced-field"
        key={name}
      >
        <span>
          {t[name]}
          {name === "purpose" && <b> *</b>}
        </span>

        <select
          value={form[name]}
          required={name === "purpose"}
          onChange={(event) =>
            updateField(
              name,
              event.target.value
            )
          }
        >
          <option value="">
            {t.select}
          </option>

          {options[name].map((option) => (
            <option
              value={option}
              key={option}
            >
              {label(option)}
            </option>
          ))}
        </select>
      </label>
    );
  }

  function localized(scheme, field) {
    return (
      scheme.translations?.[lang]?.[field] ||
      scheme[field] ||
      ""
    );
  }

  return (
    <main className="advanced-match-page">
      <div className="advanced-match-container">

        {/* HERO */}
        <section className="advanced-match-hero">
          <div className="advanced-hero-icon">
            <Brain size={35} />
          </div>

          <span className="advanced-hero-badge">
            <Sparkles size={15} />
            {t.badge}
          </span>

          <h1>{t.title}</h1>

          <p>{t.subtitle}</p>

          <div className="advanced-hero-stats">
            <div>
              <ShieldCheck size={18} />
              <strong>
                {schemesData.length}
              </strong>
              <span>{t.total}</span>
            </div>

            <div>
              <Target size={18} />
              <span>
                Personalised Matching
              </span>
            </div>
          </div>
        </section>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="advanced-match-form"
        >

          {/* PERSONAL INFORMATION */}
          <section className="advanced-form-section">
            <div className="advanced-section-heading">
              <div className="advanced-section-icon">
                <UserRound size={24} />
              </div>

              <div>
                <small>STEP 01</small>
                <h2>{t.personal}</h2>
              </div>
            </div>

            <div className="advanced-fields-grid">
              {inputField("age", "number")}
              {selectField("state")}
              {inputField("district")}
              {selectField("gender")}
              {selectField("category")}
              {selectField("occupation")}
            </div>
          </section>

          {/* FINANCIAL INFORMATION */}
          <section className="advanced-form-section">
            <div className="advanced-section-heading">
              <div className="advanced-section-icon">
                <Wallet size={24} />
              </div>

              <div>
                <small>STEP 02</small>
                <h2>{t.financial}</h2>
              </div>
            </div>

            <div className="advanced-fields-grid">
              {inputField("income", "number")}
              {inputField("amount", "number")}
              {selectField("businessStage")}
              {selectField("registered")}
            </div>
          </section>

          {/* USER REQUIREMENTS */}
          <section className="advanced-form-section">
            <div className="advanced-section-heading">
              <div className="advanced-section-icon">
                <Target size={24} />
              </div>

              <div>
                <small>STEP 03</small>
                <h2>{t.needs}</h2>
              </div>
            </div>

            <div className="advanced-fields-grid">
              {selectField("purpose")}
              {selectField("assistance")}
              {selectField("businessType")}

              {/* VOICE-TO-TEXT DESCRIPTION */}
              <div className="advanced-field advanced-full">
                <span>{t.description}</span>

                <div className="voice-description-box">
                  <textarea
                    rows={5}
                    maxLength={1000}
                    value={form.description}
                    placeholder={t.placeholder}
                    onChange={(event) =>
                      updateField(
                        "description",
                        event.target.value
                      )
                    }
                  />

                  <div className="voice-controls">
                    <div className="voice-status">
                      {isListening ? (
                        <>
                          <span className="voice-live-dot" />
                          <Volume2 size={16} />
                          <span>
                            {t.listening}
                          </span>
                        </>
                      ) : (
                        <>
                          <Mic size={16} />
                          <span>
                            {t.voiceHint}
                          </span>
                        </>
                      )}
                    </div>

                    <button
                      type="button"
                      className={`voice-mic-button ${
                        isListening
                          ? "recording"
                          : ""
                      }`}
                      onClick={
                        isListening
                          ? stopVoiceInput
                          : startVoiceInput
                      }
                      aria-label={
                        isListening
                          ? t.voiceStop
                          : t.voiceStart
                      }
                    >
                      {isListening ? (
                        <>
                          <Square size={16} />
                          {t.voiceStop}
                        </>
                      ) : (
                        <>
                          <Mic size={17} />
                          {t.voiceStart}
                        </>
                      )}
                    </button>
                  </div>

                  {interimText && (
                    <p className="voice-interim-text">
                      {interimText}
                    </p>
                  )}

                  {voiceError && (
                    <p className="voice-error-message">
                      <MicOff size={15} />
                      {voiceError}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {error && (
            <p className="advanced-error">
              {error}
            </p>
          )}

          <div className="advanced-form-actions">
            <button
              type="button"
              className="advanced-reset-button"
              onClick={resetForm}
            >
              <RotateCcw size={17} />
              {t.reset}
            </button>

            <button
              type="submit"
              className="advanced-submit-button"
            >
              <Sparkles size={19} />
              {t.analyse}
              <ArrowRight size={19} />
            </button>
          </div>
        </form>

        {/* MATCHING RESULTS */}
        {submitted && (
          <section
            className="advanced-results"
            id="matching-results"
          >
            <div className="advanced-results-heading">
              <span>
                <Sparkles size={16} />
                YOJANASATHI RECOMMENDATIONS
              </span>

              <h2>{t.results}</h2>

              <div className="advanced-results-stats">
                <div>
                  <strong>
                    {schemesData.length}
                  </strong>
                  <small>{t.total}</small>
                </div>

                <div>
                  <strong>
                    {results.length}
                  </strong>
                  <small>{t.found}</small>
                </div>
              </div>
            </div>

            {results.length === 0 ? (
              <div className="advanced-no-results">
                <Target size={40} />
                <p>{t.empty}</p>
              </div>
            ) : (
              <div className="advanced-results-grid">
                {results.map((item, index) => {
                  const scheme = item.scheme;

                  return (
                    <article
                      className="advanced-result-card"
                      key={scheme.id}
                    >
                      <div className="advanced-result-top">
                        <span className="advanced-rank">
                          {index === 0 ? (
                            <>
                              <Sparkles size={15} />
                              {t.top}
                            </>
                          ) : (
                            `#${index + 1}`
                          )}
                        </span>

                        <div className="advanced-score">
                          <strong>
                            {item.score}%
                          </strong>
                          <small>{t.matches}</small>
                        </div>
                      </div>

                      <h3>
                        {localized(scheme, "name")}
                      </h3>

                      <p className="advanced-ministry">
                        <MapPin size={14} />
                        {scheme.ministry}
                      </p>

                      <p className="advanced-description">
                        {localized(
                          scheme,
                          "description"
                        )}
                      </p>

                      <div className="advanced-benefit">
                        <h4>
                          <CheckCircle2 size={17} />
                          {t.benefit}
                        </h4>

                        <p>
                          {localized(
                            scheme,
                            "benefit"
                          )}
                        </p>
                      </div>

                      <div className="advanced-reasons">
                        <h4>
                          <CheckCircle2 size={17} />
                          {t.reasons}
                        </h4>

                        {item.reasons.map(
                          (reason, i) => (
                            <p key={i}>
                              <CheckCircle2 size={14} />
                              {reason}
                            </p>
                          )
                        )}
                      </div>

                      <div className="advanced-warnings">
                        <h4>
                          <AlertTriangle size={17} />
                          {t.warnings}
                        </h4>

                        {item.warnings.map(
                          (warning, i) => (
                            <p key={i}>
                              {warning}
                            </p>
                          )
                        )}
                      </div>

                      {scheme.officialLink && (
                        <a
                          href={scheme.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="advanced-official-link"
                        >
                          {t.details}
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </article>
                  );
                })}
              </div>
            )}

            <div className="advanced-disclaimer">
              <ShieldCheck size={20} />
              <p>{t.disclaimer}</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
