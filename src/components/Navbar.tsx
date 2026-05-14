"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaBars, FaTimes } from "react-icons/fa";

const flags = {
  en: "https://flagcdn.com/w20/us.png",
  es: "https://flagcdn.com/w20/es.png",
};

const sectionIds = ["home", "services", "gallery", "schedule", "contact"];

export default function Navbar() {
  const { lang, t, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm md:text-base transition-transform group-hover:scale-105">
              CM
            </div>
            <span className="text-white font-bold text-sm md:text-lg tracking-tight">
              C&M Tires & Muffler
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === id
                    ? "text-primary bg-white/10"
                    : "text-gray-custom hover:text-white hover:bg-white/5"
                }`}
              >
                {t.nav[id as keyof typeof t.nav]}
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-white/20 flex items-center gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "en"
                    ? "bg-primary text-white"
                    : "text-gray-custom hover:text-white"
                }`}
              >
                <Image
                  src={flags.en}
                  alt="EN"
                  width={20}
                  height={15}
                  className="rounded-sm object-cover"
                  unoptimized
                />
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "es"
                    ? "bg-primary text-white"
                    : "text-gray-custom hover:text-white"
                }`}
              >
                <Image
                  src={flags.es}
                  alt="ES"
                  width={20}
                  height={15}
                  className="rounded-sm object-cover"
                  unoptimized
                />
                ES
              </button>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {sectionIds.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "text-primary bg-white/10"
                      : "text-gray-custom hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t.nav[id as keyof typeof t.nav]}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-3">
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    lang === "en"
                      ? "bg-primary text-white"
                      : "text-gray-custom border border-white/20"
                  }`}
                >
                  <Image
                    src={flags.en}
                    alt="EN"
                    width={16}
                    height={12}
                    className="rounded-sm object-cover"
                    unoptimized
                  />
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    lang === "es"
                      ? "bg-primary text-white"
                      : "text-gray-custom border border-white/20"
                  }`}
                >
                  <Image
                    src={flags.es}
                    alt="ES"
                    width={16}
                    height={12}
                    className="rounded-sm object-cover"
                    unoptimized
                  />
                  ES
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
