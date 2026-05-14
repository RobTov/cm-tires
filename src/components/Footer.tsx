"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(182,21,22,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm">
                CM
              </div>
              <span className="text-white font-bold text-lg">
                C&M Tires & Muffler
              </span>
            </div>
            <p className="text-gray-custom/60 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {lang === "es" ? "Enlaces" : "Links"}
            </h4>
            <ul className="space-y-2.5">
              {["home", "services", "gallery", "schedule", "contact"].map(
                (id) => (
                  <li key={id}>
                    <button
                      onClick={() =>
                        document
                          .getElementById(id)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-gray-custom/60 hover:text-primary text-sm transition-colors"
                    >
                      {t.nav[id as keyof typeof t.nav]}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {lang === "es" ? "Contacto" : "Contact"}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps/place/C%26M+Tires+%26+Muffler/@33.0016611,-96.5545909,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-custom/60 hover:text-primary text-sm transition-colors"
                >
                  <FaMapMarkerAlt className="shrink-0" />
                  {t.contact.address}
                </a>
              </li>
              <li>
                <a
                  href="tel:+19724428395"
                  className="flex items-center gap-2 text-gray-custom/60 hover:text-primary text-sm transition-colors"
                >
                  <FaPhoneAlt className="shrink-0" />
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/19724428395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-custom/60 hover:text-primary text-sm transition-colors"
                >
                  <FaWhatsapp className="shrink-0" />
                  {t.contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/cmtireswylie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-custom/60 hover:text-primary text-sm transition-colors"
                >
                  <FaFacebook className="shrink-0" />
                  {t.contact.facebook}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-custom/40 text-xs">
            &copy; {new Date().getFullYear()} C&M Tires and Muffler.{" "}
            {t.footer.rights}
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
