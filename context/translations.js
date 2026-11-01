
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { translations } from "./translations.js";

const LanguageContext = createContext(null);

const supportedLanguages = ["en", "hi", "mr"];

export const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(
      "yojanasathi_language"
    );

    return supportedLanguages.includes(savedLanguage)
      ? savedLanguage
      : "en";
  });

  useEffect(() => {
    localStorage.setItem("yojanasathi_language", language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (supportedLanguages.includes(newLanguage)) {
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
