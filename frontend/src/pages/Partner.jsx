import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Landmark,
  MapPin,
  Navigation,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const partnerTranslations = {
  "hi": {
    "Find • Qualify • Apply • Grow": "खोजें • पात्रता जाँचें • आवेदन करें • आगे बढ़ें",
    "Back to Home": "होम पर वापस जाएँ",
    "Support Partner Finder": "सहायता भागीदार खोजें",
    "Find the Right": "सही विकल्प खोजें",
    "Support Near You": "आपके पास सहायता",
    "Search for banks, government support offices, digital service centres and entrepreneurship support based on your location and business needs.": "अपने स्थान और व्यवसाय की जरूरतों के अनुसार बैंक, सरकारी कार्यालय, डिजिटल सेवा केंद्र और उद्यमिता सहायता खोजें।",
    "FIND SUPPORT": "सहायता खोजें",
    "Where Do You Need Help?": "आपको कहाँ सहायता चाहिए?",
    "City / District / PIN Code": "शहर / जिला / पिन कोड",
    "Example: Solapur, Maharashtra": "उदाहरण: सोलापुर, महाराष्ट्र",
    "Partner Type": "भागीदार का प्रकार",
    "All Support Partners": "सभी सहायता भागीदार",
    "Banks": "बैंक",
    "Government Offices": "सरकारी कार्यालय",
    "CSC / Digital Support": "सीएससी / डिजिटल सहायता",
    "Business / MSME Support": "व्यवसाय / एमएसएमई सहायता",
    "What Do You Need?": "आपको क्या चाहिए?",
    "Scheme Support": "योजना सहायता",
    "Loan / Credit": "ऋण / क्रेडिट",
    "Subsidy / Grant": "सब्सिडी / अनुदान",
    "Business Registration": "व्यवसाय पंजीकरण",
    "Application Assistance": "आवेदन सहायता",
    "Digital Services": "डिजिटल सेवाएँ",
    "Find Support": "सहायता खोजें",
    "Use My Location": "मेरी लोकेशन का उपयोग करें",
    "We do not display unverified partner addresses. Search results are opened through map/location services.": "हम अप्रमाणित भागीदारों के पते नहीं दिखाते। खोज के परिणाम मानचित्र सेवाओं में खुलते हैं।",
    "SUPPORT OPTIONS": "सहायता विकल्प",
    "Support Options Near Your Search": "आपकी खोज के पास सहायता विकल्प",
    "Choose the Support You Need": "अपनी जरूरत की सहायता चुनें",
    "Location Based Search": "स्थान आधारित खोज",
    "Useful for:": "इसके लिए उपयोगी:",
    "Search Near": "पास में खोजें",
    "Me": "मेरे",
    "OFFICIAL SUPPORT CHANNELS": "आधिकारिक सहायता माध्यम",
    "Useful Government & Financial Portals": "उपयोगी सरकारी और वित्तीय पोर्टल",
    "These resources can help users continue their journey after discovering a suitable scheme.": "ये संसाधन उपयुक्त योजना मिलने के बाद आगे बढ़ने में मदद करते हैं।",
    "OFFICIAL PORTAL": "आधिकारिक पोर्टल",
    "Government credit-linked scheme discovery and application platform.": "सरकारी ऋण-संबंधित योजनाओं की खोज और आवेदन का मंच।",
    "Open Portal": "पोर्टल खोलें",
    "FINANCIAL SUPPORT": "वित्तीय सहायता",
    "Financial and development support for eligible micro, small and medium enterprises.": "पात्र सूक्ष्म, लघु और मध्यम उद्यमों के लिए वित्तीय और विकास सहायता।",
    "Visit SIDBI": "सिडबी देखें",
    "MSME SUPPORT": "एमएसएमई सहायता",
    "MSME support, guidance and grievance assistance through the government platform.": "सरकारी मंच से एमएसएमई सहायता, मार्गदर्शन और शिकायत समाधान।",
    "Visit MSME CHAMPIONS": "एमएसएमई चैंपियंस देखें",
    "NEXT STEP": "अगला कदम",
    "Found a scheme but need help applying?": "योजना मिली, लेकिन आवेदन में मदद चाहिए?",
    "Use YojanaSathi AI's scheme information and application guidance to understand what to do next.": "अगला कदम समझने के लिए योजना साथी एआई की योजना जानकारी और आवेदन मार्गदर्शन का उपयोग करें.",
    "Explore Schemes": "योजनाएँ देखें",
    "Banks & Lending Partners": "बैंक और ऋण भागीदार",
    "Find nearby banks and financial institutions that may provide eligible credit or loan support.": "पास के बैंक और वित्तीय संस्थान खोजें जो पात्र ऋण सहायता दे सकते हैं।",
    "District Industry Support": "जिला उद्योग सहायता",
    "Locate district-level business support offices and entrepreneurship assistance.": "जिला स्तरीय व्यवसाय सहायता कार्यालय और उद्यमिता मदद खोजें।",
    "CSC & Digital Support": "सीएससी और डिजिटल सहायता",
    "Find nearby Common Service Centres and digital assistance points.": "नजदीकी कॉमन सर्विस सेंटर और डिजिटल सहायता केंद्र खोजें।",
    "Entrepreneurship Support": "उद्यमिता सहायता",
    "Search for MSME support organisations, incubators and entrepreneurship assistance.": "एमएसएमई सहायता संगठन, इनक्यूबेटर और उद्यमिता सहायता खोजें।",
    "Bank": "बैंक",
    "Government Office": "सरकारी कार्यालय",
    "Digital Support": "डिजिटल सहायता",
    "Business Support": "व्यवसाय सहायता",
    "Location detection is not supported by this browser.": "यह ब्राउज़र स्थान पहचान का समर्थन नहीं करता।",
    "Location permission was not available. Please enter your city or district manually.": "स्थान की अनुमति नहीं मिली। कृपया शहर या जिला स्वयं दर्ज करें।"
  },
  "mr": {
    "Find • Qualify • Apply • Grow": "शोधा • पात्रता तपासा • अर्ज करा • प्रगती करा",
    "Back to Home": "मुख्यपृष्ठावर परत जा",
    "Support Partner Finder": "सहाय्य भागीदार शोधा",
    "Find the Right": "योग्य पर्याय शोधा",
    "Support Near You": "तुमच्या जवळचे सहाय्य",
    "Search for banks, government support offices, digital service centres and entrepreneurship support based on your location and business needs.": "तुमचे ठिकाण आणि व्यवसायाच्या गरजेनुसार बँका, सरकारी कार्यालये, डिजिटल सेवा केंद्रे आणि उद्योजकता सहाय्य शोधा.",
    "FIND SUPPORT": "सहाय्य शोधा",
    "Where Do You Need Help?": "तुम्हाला कुठे मदत हवी आहे?",
    "City / District / PIN Code": "शहर / जिल्हा / पिन कोड",
    "Example: Solapur, Maharashtra": "उदाहरण: सोलापूर, महाराष्ट्र",
    "Partner Type": "भागीदार प्रकार",
    "All Support Partners": "सर्व सहाय्य भागीदार",
    "Banks": "बँका",
    "Government Offices": "सरकारी कार्यालये",
    "CSC / Digital Support": "सीएससी / डिजिटल सहाय्य",
    "Business / MSME Support": "व्यवसाय / एमएसएमई सहाय्य",
    "What Do You Need?": "तुम्हाला काय हवे आहे?",
    "Scheme Support": "योजना सहाय्य",
    "Loan / Credit": "कर्ज / पत",
    "Subsidy / Grant": "अनुदान / अर्थसहाय्य",
    "Business Registration": "व्यवसाय नोंदणी",
    "Application Assistance": "अर्ज सहाय्य",
    "Digital Services": "डिजिटल सेवा",
    "Find Support": "सहाय्य शोधा",
    "Use My Location": "माझे स्थान वापरा",
    "We do not display unverified partner addresses. Search results are opened through map/location services.": "आम्ही पडताळणी न केलेले भागीदार पत्ते दाखवत नाही. शोध परिणाम नकाशा सेवांमध्ये उघडतात.",
    "SUPPORT OPTIONS": "सहाय्य पर्याय",
    "Support Options Near Your Search": "तुमच्या शोधाजवळील सहाय्य पर्याय",
    "Choose the Support You Need": "हवे असलेले सहाय्य निवडा",
    "Location Based Search": "स्थानावर आधारित शोध",
    "Useful for:": "यासाठी उपयुक्त:",
    "Search Near": "जवळ शोधा",
    "Me": "माझ्या",
    "OFFICIAL SUPPORT CHANNELS": "अधिकृत सहाय्य माध्यमे",
    "Useful Government & Financial Portals": "उपयुक्त सरकारी आणि आर्थिक पोर्टल",
    "These resources can help users continue their journey after discovering a suitable scheme.": "योग्य योजना मिळाल्यानंतर पुढील प्रक्रिया करण्यासाठी ही साधने मदत करतात.",
    "OFFICIAL PORTAL": "अधिकृत पोर्टल",
    "Government credit-linked scheme discovery and application platform.": "सरकारी कर्ज-संबंधित योजना शोध आणि अर्ज करण्याचे व्यासपीठ.",
    "Open Portal": "पोर्टल उघडा",
    "FINANCIAL SUPPORT": "आर्थिक सहाय्य",
    "Financial and development support for eligible micro, small and medium enterprises.": "पात्र सूक्ष्म, लघु आणि मध्यम उद्योगांसाठी आर्थिक व विकास सहाय्य.",
    "Visit SIDBI": "सिडबीला भेट द्या",
    "MSME SUPPORT": "एमएसएमई सहाय्य",
    "MSME support, guidance and grievance assistance through the government platform.": "सरकारी व्यासपीठाद्वारे एमएसएमई सहाय्य, मार्गदर्शन आणि तक्रार निवारण.",
    "Visit MSME CHAMPIONS": "एमएसएमई चॅम्पियन्सला भेट द्या",
    "NEXT STEP": "पुढील पाऊल",
    "Found a scheme but need help applying?": "योजना सापडली, पण अर्जासाठी मदत हवी आहे?",
    "Use YojanaSathi AI's scheme information and application guidance to understand what to do next.": "पुढे काय करायचे हे समजण्यासाठी योजनासाथी एआयची योजना माहिती आणि अर्ज मार्गदर्शन वापरा.",
    "Explore Schemes": "योजना पाहा",
    "Banks & Lending Partners": "बँका आणि कर्ज भागीदार",
    "Find nearby banks and financial institutions that may provide eligible credit or loan support.": "पात्र कर्ज सहाय्य देऊ शकणाऱ्या जवळच्या बँका आणि वित्तीय संस्था शोधा.",
    "District Industry Support": "जिल्हा उद्योग सहाय्य",
    "Locate district-level business support offices and entrepreneurship assistance.": "जिल्हास्तरीय व्यवसाय सहाय्य कार्यालये आणि उद्योजकता मदत शोधा.",
    "CSC & Digital Support": "सीएससी आणि डिजिटल सहाय्य",
    "Find nearby Common Service Centres and digital assistance points.": "जवळची कॉमन सर्व्हिस सेंटर आणि डिजिटल मदत केंद्रे शोधा.",
    "Entrepreneurship Support": "उद्योजकता सहाय्य",
    "Search for MSME support organisations, incubators and entrepreneurship assistance.": "एमएसएमई सहाय्य संस्था, इनक्युबेटर आणि उद्योजकता मदत शोधा.",
    "Bank": "बँक",
    "Government Office": "सरकारी कार्यालय",
    "Digital Support": "डिजिटल सहाय्य",
    "Business Support": "व्यवसाय सहाय्य",
    "Location detection is not supported by this browser.": "हा ब्राउझर स्थान शोधण्यास समर्थन देत नाही.",
    "Location permission was not available. Please enter your city or district manually.": "स्थानाची परवानगी मिळाली नाही. कृपया शहर किंवा जिल्हा स्वतः लिहा."
  }
};



function Partner() {
  const { language } = useLanguage();
  const tr = (value) => partnerTranslations[language]?.[value] || value;
  const [location, setLocation] = useState("");
  const [partnerType, setPartnerType] = useState("All");
  const [service, setService] = useState("Scheme Support");
  const [searched, setSearched] = useState(false);

  const partnerOptions = [
    {
      id: 1,
      name: tr("Banks & Lending Partners"),
      description:
        tr("Find nearby banks and financial institutions that may provide eligible credit or loan support."),
      icon: <Building2 size={23} />,
      category: "Bank",
      color: "green",
      mapsText: "banks and government scheme loan centres",
    },
    {
      id: 2,
      name: tr("District Industry Support"),
      description:
        tr("Locate district-level business support offices and entrepreneurship assistance."),
      icon: <Landmark size={23} />,
      category: "Government Office",
      color: "purple",
      mapsText: "District Industries Centre",
    },
    {
      id: 3,
      name: tr("CSC & Digital Support"),
      description:
        tr("Find nearby Common Service Centres and digital assistance points."),
      icon: <Store size={23} />,
      category: "Digital Support",
      color: "blue",
      mapsText: "Common Service Centre CSC",
    },
    {
      id: 4,
      name: tr("Entrepreneurship Support"),
      description:
        tr("Search for MSME support organisations, incubators and entrepreneurship assistance."),
      icon: <Users size={23} />,
      category: "Business Support",
      color: "orange",
      mapsText: "MSME support centre entrepreneurship",
    },
  ];

  const visiblePartners =
    partnerType === "All"
      ? partnerOptions
      : partnerOptions.filter(
          (partner) => partner.category === partnerType
        );

  const searchOnMaps = (searchText) => {
    const query = location.trim()
      ? `${searchText} near ${location}`
      : `${searchText} near me`;

    const url =
      `https://www.google.com/maps/search/?api=1&query=` +
      encodeURIComponent(query);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearched(true);
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert(tr("Location detection is not supported by this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const mapsUrl =
          `https://www.google.com/maps/search/?api=1&query=` +
          encodeURIComponent(`${latitude},${longitude}`);

        window.open(mapsUrl, "_blank", "noopener,noreferrer");
      },
      () => {
        alert(
          tr("Location permission was not available. Please enter your city or district manually.")
        );
      }
    );
  };

  return (
    <div className="partner-page">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="partner-topbar">

        <Link to="/" className="partner-brand">

          <div className="partner-brand-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <h2>YojanaSathi AI</h2>
            <p>{tr("Find • Qualify • Apply • Grow")}</p>
          </div>

        </Link>

        <Link to="/" className="partner-back-home">
          <ArrowLeft size={16} />
          {tr("Back to Home")}
        </Link>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="partner-main">

        {/* INTRO */}

        <section className="partner-intro">

          <div className="partner-badge">
            <MapPin size={15} />
            {tr("Support Partner Finder")}
          </div>

          <h1>
            {tr("Find the Right")}
            <br />
            <span>{tr("Support Near You")}</span>
          </h1>

          <p>
            {tr("Search for banks, government support offices, digital service centres and entrepreneurship support based on your location and business needs.")}
          </p>

        </section>


        {/* =====================================================
            SEARCH PANEL
        ===================================================== */}

        <section className="partner-search-card">

          <div className="partner-search-heading">

            <div>

              <span>
                {tr("FIND SUPPORT")}
              </span>

              <h2>
                {tr("Where Do You Need Help?")}
              </h2>

            </div>

            <div className="partner-search-icon">
              <Navigation size={21} />
            </div>

          </div>


          <form
            className="partner-form"
            onSubmit={handleSearch}
          >

            {/* LOCATION */}

            <div className="partner-field">

              <label>
                {tr("City / District / PIN Code")}
              </label>

              <div className="partner-input">

                <MapPin size={17} />

                <input
                  type="text"
                  placeholder={tr("Example: Solapur, Maharashtra")}
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                />

              </div>

            </div>


            {/* TYPE */}

            <div className="partner-field">

              <label>
                {tr("Partner Type")}
              </label>

              <div className="partner-input">

                <Building2 size={17} />

                <select
                  value={partnerType}
                  onChange={(event) =>
                    setPartnerType(event.target.value)
                  }
                >

                  <option value="All">
                    {tr("All Support Partners")}
                  </option>

                  <option value="Bank">
                    {tr("Banks")}
                  </option>

                  <option value="Government Office">
                    {tr("Government Offices")}
                  </option>

                  <option value="Digital Support">
                    {tr("CSC / Digital Support")}
                  </option>

                  <option value="Business Support">
                    {tr("Business / MSME Support")}
                  </option>

                </select>

              </div>

            </div>


            {/* SERVICE */}

            <div className="partner-field">

              <label>
                {tr("What Do You Need?")}
              </label>

              <div className="partner-input">

                <ShieldCheck size={17} />

                <select
                  value={service}
                  onChange={(event) =>
                    setService(event.target.value)
                  }
                >

                  <option value="Scheme Support">
                    {tr("Scheme Support")}
                  </option>

                  <option value="Loan / Credit">
                    {tr("Loan / Credit")}
                  </option>

                  <option value="Subsidy / Grant">
                    {tr("Subsidy / Grant")}
                  </option>

                  <option value="Business Registration">
                    {tr("Business Registration")}
                  </option>

                  <option value="Application Assistance">
                    {tr("Application Assistance")}
                  </option>

                  <option value="Digital Services">
                    {tr("Digital Services")}
                  </option>

                </select>

              </div>

            </div>


            {/* BUTTONS */}

            <div className="partner-search-actions">

              <button
                type="submit"
                className="partner-search-btn"
              >

                <Search size={17} />

                {tr("Find Support")}

                <ArrowRight size={16} />

              </button>


              <button
                type="button"
                className="partner-location-btn"
                onClick={detectLocation}
              >

                <Navigation size={16} />

                {tr("Use My Location")}

              </button>

            </div>

          </form>


          <div className="partner-search-note">

            <ShieldCheck size={14} />

            <span>
              {tr("We do not display unverified partner addresses. Search results are opened through map/location services.")}
            </span>

          </div>

        </section>


        {/* =====================================================
            RESULTS
        ===================================================== */}

        <section className="partner-results">

          <div className="partner-results-header">

            <div>

              <span>
                {tr("SUPPORT OPTIONS")}
              </span>

              <h2>
                {searched
                  ? tr("Support Options Near Your Search")
                  : tr("Choose the Support You Need")}
              </h2>

            </div>

            <div className="partner-result-status">

              <span></span>

              {tr("Location Based Search")}

            </div>

          </div>


          {/* CARDS */}

          <div className="partner-grid">

            {visiblePartners.map((partner) => (

              <article
                className={`partner-card ${partner.color}`}
                key={partner.id}
              >

                <div className="partner-card-top">

                  <div className="partner-card-icon">
                    {partner.icon}
                  </div>

                  <span className="partner-type">
                    {tr(partner.category)}
                  </span>

                </div>


                <h3>
                  {partner.name}
                </h3>


                <p>
                  {partner.description}
                </p>


                <div className="partner-service">

                  <CheckCircle2 size={15} />

                  <span>
                    {tr("Useful for:")} {tr(service)}
                  </span>

                </div>


                <button
                  type="button"
                  className="partner-map-btn"
                  onClick={() =>
                    searchOnMaps(partner.mapsText)
                  }
                >

                  <MapPin size={15} />

                  {tr("Search Near")} {location || tr("Me")}

                  <ExternalLink size={14} />

                </button>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            OFFICIAL SUPPORT CHANNELS
        ===================================================== */}

        <section className="official-partner-section">

          <div className="official-partner-heading">

            <span>
              {tr("OFFICIAL SUPPORT CHANNELS")}
            </span>

            <h2>
              {tr("Useful Government & Financial Portals")}
            </h2>

            <p>
              {tr("These resources can help users continue their journey after discovering a suitable scheme.")}
            </p>

          </div>


          <div className="official-partner-grid">

            {/* JAN SAMARTH */}

            <a
              href="https://www.jansamarth.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="official-partner-card"
            >

              <div className="official-partner-icon green">
                <Globe2 size={21} />
              </div>

              <div>

                <span>
                  {tr("OFFICIAL PORTAL")}
                </span>

                <h3>
                  JanSamarth
                </h3>

                <p>
                  {tr("Government credit-linked scheme discovery and application platform.")}
                </p>

                <strong>
                  {tr("Open Portal")}
                  <ExternalLink size={13} />
                </strong>

              </div>

            </a>


            {/* SIDBI */}

            <a
              href="https://www.sidbi.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="official-partner-card"
            >

              <div className="official-partner-icon purple">
                <Building2 size={21} />
              </div>

              <div>

                <span>
                  {tr("FINANCIAL SUPPORT")}
                </span>

                <h3>
                  SIDBI
                </h3>

                <p>
                  {tr("Financial and development support for eligible micro, small and medium enterprises.")}
                </p>

                <strong>
                  {tr("Visit SIDBI")}
                  <ExternalLink size={13} />
                </strong>

              </div>

            </a>


            {/* MSME CHAMPIONS */}

            <a
              href="https://champions.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="official-partner-card"
            >

              <div className="official-partner-icon blue">
                <Users size={21} />
              </div>

              <div>

                <span>
                  {tr("MSME SUPPORT")}
                </span>

                <h3>
                  MSME CHAMPIONS
                </h3>

                <p>
                  {tr("MSME support, guidance and grievance assistance through the government platform.")}
                </p>

                <strong>
                  {tr("Visit MSME CHAMPIONS")}
                  <ExternalLink size={13} />
                </strong>

              </div>

            </a>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="partner-cta">

          <div className="partner-cta-icon">
            <Sparkles size={22} />
          </div>

          <div>

            <span>
              {tr("NEXT STEP")}
            </span>

            <h2>
              {tr("Found a scheme but need help applying?")}
            </h2>

            <p>
              {tr("Use YojanaSathi AI's scheme information and application guidance to understand what to do next.")}
            </p>

          </div>

          <Link
            to="/schemes"
            className="partner-cta-btn"
          >

            {tr("Explore Schemes")}

            <ArrowRight size={16} />

          </Link>

        </section>

      </main>

    </div>
  );
}

export default Partner;