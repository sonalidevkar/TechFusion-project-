
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Sparkles,
  X,
  Landmark,
  Sprout,
  Users,
  GraduationCap,
  HeartPulse,
  BriefcaseBusiness,
  Factory,
  HandHeart,
  LayoutGrid,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext.jsx";
import schemesData from "../data/schemes.json";

const schemes = Array.isArray(schemesData) ? schemesData : [];

const categoryConfig = [
  {
    id: "all",
    icon: LayoutGrid,
    label: {
      en: "All Schemes",
      mr: "सर्व योजना",
      hi: "सभी योजनाएँ",
    },
    ids: [],
  },
  {
    id: "business",
    icon: BriefcaseBusiness,
    label: {
      en: "Business & Startups",
      mr: "व्यवसाय व स्टार्टअप",
      hi: "व्यवसाय और स्टार्टअप",
    },
    ids: [1, 2, 3, 7],
  },
  {
    id: "msme",
    icon: Factory,
    label: {
      en: "MSME & Small Business",
      mr: "सूक्ष्म व लघुउद्योग",
      hi: "सूक्ष्म और लघु उद्योग",
    },
    ids: [6],
  },
  {
    id: "agriculture",
    icon: Sprout,
    label: {
      en: "Agriculture & Farmers",
      mr: "शेती व शेतकरी",
      hi: "कृषि और किसान",
    },
    ids: [9, 10, 11, 12],
  },
  {
    id: "women",
    icon: Users,
    label: {
      en: "Women & Girls",
      mr: "महिला व मुली",
      hi: "महिलाएँ और बालिकाएँ",
    },
    ids: [8, 14, 15, 21],
  },
  {
    id: "scst",
    icon: HandHeart,
    label: {
      en: "SC/ST Empowerment",
      mr: "SC/ST सक्षमीकरण",
      hi: "SC/ST सशक्तिकरण",
    },
    ids: [4],
  },
  {
    id: "livelihood",
    icon: Building2,
    label: {
      en: "Artisans & Livelihood",
      mr: "कारागीर व उपजीविका",
      hi: "कारीगर और आजीविका",
    },
    ids: [5, 19, 20],
  },
  {
    id: "education",
    icon: GraduationCap,
    label: {
      en: "Education & Skills",
      mr: "शिक्षण व कौशल्य",
      hi: "शिक्षा और कौशल",
    },
    ids: [13, 18],
  },
  {
    id: "health",
    icon: HeartPulse,
    label: {
      en: "Housing & Healthcare",
      mr: "गृहनिर्माण व आरोग्य",
      hi: "आवास और स्वास्थ्य",
    },
    ids: [16, 17],
  },
];

const translations = {
  en: {
    eyebrow: "Government Scheme Discovery",
    title: "Explore Government Schemes",
    subtitle:
      "Discover government support for business, education, agriculture, healthcare and your financial goals.",
    search: "Search schemes by name, category or benefit...",
    totalSchemes: "Government Schemes",
    categories: "Categories",
    categoryHint: "Choose a category to explore schemes",
    heading: "Government Schemes",
    showing: "Showing",
    schemes: "schemes",
    matching: "Find My Matching Scheme",
    benefits: "Key Benefits",
    details: "View Details",
    ministry: "Ministry",
    eligibility: "Eligibility",
    documents: "Required Documents",
    support: "Financial Support",
    website: "Visit Official Website",
    apply: "Apply / Check Details",
    close: "Close",
    noResults: "No schemes found",
    noResultsText: "Try another keyword or choose a different category.",
    clear: "Clear Filters",
    disclaimer:
      "Scheme eligibility and benefits may change. Always verify details on the official government portal.",
  },

  mr: {
    eyebrow: "सरकारी योजना शोध",
    title: "सरकारी योजना शोधा",
    subtitle:
      "व्यवसाय, शिक्षण, शेती, आरोग्य आणि आर्थिक गरजांसाठी सरकारी योजनांची माहिती मिळवा.",
    search: "योजनेचे नाव, प्रवर्ग किंवा लाभ शोधा...",
    totalSchemes: "सरकारी योजना",
    categories: "योजनांचे प्रकार",
    categoryHint: "योजना शोधण्यासाठी प्रकार निवडा",
    heading: "सरकारी योजना",
    showing: "दाखवत आहोत",
    schemes: "योजना",
    matching: "माझ्यासाठी योग्य योजना शोधा",
    benefits: "मुख्य लाभ",
    details: "सविस्तर माहिती",
    ministry: "मंत्रालय",
    eligibility: "पात्रता",
    documents: "आवश्यक कागदपत्रे",
    support: "आर्थिक सहाय्य",
    website: "अधिकृत वेबसाइट",
    apply: "अर्ज / अधिक माहिती",
    close: "बंद करा",
    noResults: "कोणतीही योजना सापडली नाही",
    noResultsText: "दुसरा शब्द शोधा किंवा वेगळा प्रकार निवडा.",
    clear: "फिल्टर काढा",
    disclaimer:
      "योजनांची पात्रता आणि लाभ बदलू शकतात. अधिकृत सरकारी वेबसाइटवर माहिती तपासा.",
  },

  hi: {
    eyebrow: "सरकारी योजना खोज",
    title: "सरकारी योजनाएँ खोजें",
    subtitle:
      "व्यवसाय, शिक्षा, कृषि, स्वास्थ्य और वित्तीय आवश्यकताओं के लिए सरकारी योजनाएँ खोजें।",
    search: "योजना का नाम, श्रेणी या लाभ खोजें...",
    totalSchemes: "सरकारी योजनाएँ",
    categories: "योजना श्रेणियाँ",
    categoryHint: "योजनाएँ देखने के लिए श्रेणी चुनें",
    heading: "सरकारी योजनाएँ",
    showing: "दिखा रहे हैं",
    schemes: "योजनाएँ",
    matching: "मेरे लिए सही योजना खोजें",
    benefits: "मुख्य लाभ",
    details: "विस्तृत जानकारी",
    ministry: "मंत्रालय",
    eligibility: "पात्रता",
    documents: "आवश्यक दस्तावेज",
    support: "वित्तीय सहायता",
    website: "आधिकारिक वेबसाइट",
    apply: "आवेदन / अधिक जानकारी",
    close: "बंद करें",
    noResults: "कोई योजना नहीं मिली",
    noResultsText: "दूसरा शब्द खोजें या अलग श्रेणी चुनें।",
    clear: "फ़िल्टर हटाएँ",
    disclaimer:
      "योजनाओं की पात्रता और लाभ बदल सकते हैं। आधिकारिक सरकारी वेबसाइट पर जानकारी जाँचें।",
  },
};

function getLocalized(scheme, language, field) {
  if (language === "en") {
    return scheme[field] || "";
  }

  return (
    scheme.translations?.[language]?.[field] ||
    scheme[field] ||
    ""
  );
}

function getEligibility(scheme, language) {
  if (language !== "en") {
    const translated = scheme.translations?.[language];

    if (translated?.eligibilityNotes) {
      return translated.eligibilityNotes;
    }

    if (translated?.eligibility?.notes) {
      return translated.eligibility.notes;
    }
  }

  return scheme.eligibility?.notes || "";
}

export default function Schemes() {
  const languageContext = useLanguage();

  const rawLanguage =
    languageContext?.language ||
    languageContext?.lang ||
    "en";

  const language = ["en", "mr", "hi"].includes(rawLanguage)
    ? rawLanguage
    : "en";

  const t = translations[language];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedScheme, setSelectedScheme] = useState(null);

  const filteredSchemes = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const currentCategory = categoryConfig.find(
      (category) => category.id === selectedCategory
    );

    return schemes.filter((scheme) => {
      const matchesCategory =
        selectedCategory === "all" ||
        currentCategory?.ids.includes(Number(scheme.id));

      const searchableText = [
        scheme.name,
        scheme.shortName,
        scheme.description,
        scheme.benefit,
        scheme.ministry,
        ...(scheme.tags || []),
        ...(scheme.category || []),
        ...(scheme.businessType || []),
        scheme.translations?.mr?.name,
        scheme.translations?.mr?.description,
        scheme.translations?.mr?.benefit,
        scheme.translations?.hi?.name,
        scheme.translations?.hi?.description,
        scheme.translations?.hi?.benefit,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        keyword === "" || searchableText.includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const getCategoryForScheme = (scheme) => {
    return (
      categoryConfig.find(
        (category) =>
          category.id !== "all" &&
          category.ids.includes(Number(scheme.id))
      ) || categoryConfig[0]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("all");
  };

  return (
    <main className="ys-schemes-page">
      <section className="ys-schemes-hero">
        <div className="ys-schemes-container">

          <div className="ys-schemes-eyebrow">
            <Sparkles size={15} />
            <span>{t.eyebrow}</span>
          </div>

          <h1>{t.title}</h1>

          <p className="ys-schemes-subtitle">
            {t.subtitle}
          </p>

          <div className="ys-schemes-search">
            <Search size={21} />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder={t.search}
              aria-label={t.search}
            />

            {search && (
              <button
                type="button"
                className="ys-search-clear"
                onClick={() => setSearch("")}
                aria-label={t.clear}
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="ys-categories-area">

            <div className="ys-categories-heading">
              <span>{t.categories}</span>
              <small>{t.categoryHint}</small>
            </div>

            <div className="ys-category-pills">
              {categoryConfig.map((category) => {
                const Icon = category.icon;
                const isActive =
                  selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(category.id)
                    }
                    className={`ys-category-pill category-${category.id} ${
                      isActive ? "active" : ""
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon size={16} strokeWidth={2.2} />

                    <span>
                      {category.label[language]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="ys-hero-bottom">
            <div className="ys-total-stat">
              <div className="ys-total-stat-icon">
                <Landmark size={22} />
              </div>

              <div>
                <strong>{schemes.length}</strong>
                <span>{t.totalSchemes}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="ys-schemes-content">
        <div className="ys-schemes-container">

          <div className="ys-schemes-section-head">
            <div>
              <h2>{t.heading}</h2>

              <p>
                {t.showing}{" "}
                <strong>{filteredSchemes.length}</strong>{" "}
                {t.schemes}
              </p>
            </div>

            <Link
              to="/ai-matching"
              className="ys-match-button"
            >
              <Sparkles size={18} />
              <span>{t.matching}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {filteredSchemes.length === 0 ? (
            <div className="ys-no-results">
              <Search size={38} />

              <h3>{t.noResults}</h3>
              <p>{t.noResultsText}</p>

              <button
                type="button"
                onClick={resetFilters}
              >
                {t.clear}
              </button>
            </div>
          ) : (
            <div className="ys-schemes-grid">
              {filteredSchemes.map((scheme) => {
                const category =
                  getCategoryForScheme(scheme);

                const Icon = category.icon;

                return (
                  <article
                    className="ys-scheme-card"
                    key={scheme.id}
                  >
                    <div className="ys-card-top">
                      <span className="ys-scheme-category">
                        <Icon size={14} />
                        {category.label[language]}
                      </span>

                      <span className="ys-card-scheme-id">
                        #{String(scheme.id).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="ys-scheme-card-main">
                      <div className="ys-scheme-icon">
                        <Icon size={24} />
                      </div>

                      <h3>
                        {getLocalized(
                          scheme,
                          language,
                          "name"
                        )}
                      </h3>

                      <p className="ys-scheme-ministry">
                        <Landmark size={14} />
                        {scheme.ministry}
                      </p>

                      <p className="ys-scheme-description">
                        {getLocalized(
                          scheme,
                          language,
                          "description"
                        )}
                      </p>
                    </div>

                    <div className="ys-scheme-benefits">
                      <div className="ys-benefit-title">
                        <CheckCircle2 size={16} />
                        <span>{t.benefits}</span>
                      </div>

                      <p>
                        {getLocalized(
                          scheme,
                          language,
                          "benefit"
                        )}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="ys-view-details"
                      onClick={() =>
                        setSelectedScheme(scheme)
                      }
                    >
                      <span>{t.details}</span>
                      <ArrowRight size={18} />
                    </button>
                  </article>
                );
              })}
            </div>
          )}

          <div className="ys-schemes-disclaimer">
            <ShieldCheck size={18} />
            <p>{t.disclaimer}</p>
          </div>

        </div>
      </section>

      {selectedScheme && (
        <div
          className="ys-modal-overlay"
          onClick={() => setSelectedScheme(null)}
        >
          <div
            className="ys-modal"
            role="dialog"
            aria-modal="true"
            aria-label={getLocalized(
              selectedScheme,
              language,
              "name"
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="ys-modal-close"
              onClick={() => setSelectedScheme(null)}
              aria-label={t.close}
            >
              <X size={21} />
            </button>

            <div className="ys-modal-header">
              <span className="ys-modal-tag">
                <Landmark size={15} />
                {
                  getCategoryForScheme(selectedScheme)
                    .label[language]
                }
              </span>

              <h2>
                {getLocalized(
                  selectedScheme,
                  language,
                  "name"
                )}
              </h2>

              <p>{selectedScheme.ministry}</p>
            </div>

            <div className="ys-modal-body">
              <p className="ys-modal-description">
                {getLocalized(
                  selectedScheme,
                  language,
                  "description"
                )}
              </p>

              <div className="ys-modal-info-card">
                <h3>
                  <CheckCircle2 size={19} />
                  {t.benefits}
                </h3>

                <p>
                  {getLocalized(
                    selectedScheme,
                    language,
                    "benefit"
                  )}
                </p>
              </div>

              <div className="ys-modal-info-card">
                <h3>
                  <ShieldCheck size={19} />
                  {t.eligibility}
                </h3>

                <p>
                  {getEligibility(
                    selectedScheme,
                    language
                  )}
                </p>
              </div>

              {selectedScheme.financialSupport?.length > 0 && (
                <div className="ys-modal-info-card">
                  <h3>
                    <Landmark size={19} />
                    {t.support}
                  </h3>

                  <ul>
                    {selectedScheme.financialSupport.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {selectedScheme.documents?.length > 0 && (
                <div className="ys-modal-info-card">
                  <h3>
                    <FileText size={19} />
                    {t.documents}
                  </h3>

                  <ul>
                    {selectedScheme.documents.map(
                      (document, index) => (
                        <li key={index}>{document}</li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <div className="ys-modal-actions">
                {selectedScheme.officialLink && (
                  <a
                    href={selectedScheme.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ys-modal-official"
                  >
                    {t.website}
                    <ExternalLink size={17} />
                  </a>
                )}

                {selectedScheme.applyLink && (
                  <a
                    href={selectedScheme.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ys-modal-apply"
                  >
                    {t.apply}
                    <ArrowRight size={17} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
