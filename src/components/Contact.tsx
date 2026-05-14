"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";

export default function Contact() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappUrl = "https://wa.me/19724428395";
  const facebookUrl = "https://www.facebook.com/cmtireswylie";
  const phoneUrl = "tel:+19724428395";
  const mapsUrl =
    "https://www.google.com/maps/place/C%26M+Tires+%26+Muffler/@33.0016611,-96.5545909,17z";

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-bg-light overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            {t.contact.title}
          </h2>
          <div className="mx-auto mt-4 w-20 h-0.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-gray-custom/20 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-dark mb-5">
                {t.contact.title}
              </h3>
              <div className="space-y-4">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary/20">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-medium text-dark text-sm">
                      {t.contact.address}
                    </p>
                    <p className="text-gray-medium text-xs mt-0.5">
                      2C2W+M5 Wylie, Texas, {lang === "es" ? "EE. UU." : "USA"}
                    </p>
                  </div>
                </a>

                <a
                  href={phoneUrl}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary/20">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-medium text-dark text-sm">
                      {t.contact.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366] text-white font-semibold transition-all hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/30"
              >
                <FaWhatsapp className="text-xl" />
                {t.contact.whatsapp}
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#1877F2] text-white font-semibold transition-all hover:bg-[#166fe5] hover:shadow-lg hover:shadow-[#1877F2]/30"
              >
                <FaFacebook className="text-xl" />
                {t.contact.facebook}
              </a>
            </div>

            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/5 border border-primary/10">
              <FaHeart className="text-primary text-sm" />
              <span className="text-sm font-medium text-dark">
                {t.contact.lgbtq}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-custom/20 h-[350px] md:h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4173.886494633766!2d-96.5545909!3d33.0016611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c049f26bc0001%3A0x4b467e9e3ff83e36!2sC%26M%20Tires%20%26%20Muffler!5e1!3m2!1ses!2scu!4v1778726678471!5m2!1ses!2scu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="C&M Tires and Muffler Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
