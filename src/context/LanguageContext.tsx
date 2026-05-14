"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { en, es, type Translations } from "@/translations";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() || "";
  if (lang.startsWith("es")) return "es";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("cm-lang") as Language | null;
      if (saved === "en" || saved === "es") {
        setLang(saved);
      } else {
        setLang(detectBrowserLanguage());
      }
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const setLanguage = (l: Language) => {
    setLang(l);
    localStorage.setItem("cm-lang", l);
  };

  const t = lang === "es" ? es : en;

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang: "en", t: en, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
