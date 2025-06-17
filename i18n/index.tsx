"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import translations, { TranslationKeys } from "./translations";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: TranslationKeys) => translations[language][key] || key;

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "es") {
      setLanguage(stored);
    }
  }, []);

  const languageSetter = (lang: Language) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: languageSetter, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
