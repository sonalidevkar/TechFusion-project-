
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { translations } from "./translations.js";

const LanguageContext = createContext(null);

export const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("yojanasathi_language");

    return ["en", "hi", "mr"].includes(saved) ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("yojanasathi_language", language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (["en", "hi", "mr"].includes(newLanguage)) {
      setLanguage(newLanguage);
    }
  };

  const t = (key) => {
    return (
      translations[language]?.[key] ??
      translations.en?.[key] ??
      key
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        changeLanguage,
        languageOptions,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}

export default LanguageContext;
