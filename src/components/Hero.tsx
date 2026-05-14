"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FaPhone } from "react-icons/fa";

const heroImages = [
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 parallax-bg"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === currentImg ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-gray-custom text-xs sm:text-sm font-medium uppercase tracking-wider">
              Wylie, TX
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            {t.hero.title.split(" ").map((word: string, i: number, arr: string[]) =>
              word === "Tires" || word === "Muffler" ? (
                <span key={i}>
                  <span className="text-primary">{word[0]}</span>
                  {word.slice(1)}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              ) : (
                <span key={i}>
                  {word}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              )
            )}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-custom/90 mb-8 max-w-2xl mx-auto font-light">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-colors shadow-lg shadow-primary/30"
            >
              <FaPhone className="text-sm" />
              {t.hero.cta}
            </motion.button>
            <a
              href="tel:+19724428395"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              +1 (972) 442-8395
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
