"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaCar,
  FaFilter,
  FaWrench,
  FaStopCircle,
  FaCogs,
  FaOilCan,
  FaRoad,
} from "react-icons/fa";

const iconMap = [FaCar, FaFilter, FaWrench, FaStopCircle, FaCogs, FaOilCan, FaRoad];

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 md:py-28 bg-dark" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(182,21,22,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Premium Auto Care
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t.services.title}
          </h2>
          <div className="mx-auto mt-4 w-20 h-0.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {t.services.items.map((service: { name: string; description: string }, i: number) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-secondary/60 backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 group-hover:bg-primary/10" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary/25">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-custom/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
