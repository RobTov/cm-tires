"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export function LangSetter() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es" : "en";
  }, [lang]);

  return null;
}
