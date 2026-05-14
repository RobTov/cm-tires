"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FaClock } from "react-icons/fa";

const days = [
  { key: "mon", en: "Monday", es: "Lunes", hours: "8:00 AM – 6:00 PM" },
  { key: "tue", en: "Tuesday", es: "Martes", hours: "8:00 AM – 6:00 PM" },
  { key: "wed", en: "Wednesday", es: "Miércoles", hours: "8:00 AM – 6:00 PM" },
  { key: "thu", en: "Thursday", es: "Jueves", hours: "8:00 AM – 6:00 PM" },
  { key: "fri", en: "Friday", es: "Viernes", hours: "8:00 AM – 6:00 PM" },
  { key: "sat", en: "Saturday", es: "Sábado", hours: "8:00 AM – 6:00 PM" },
  { key: "sun", en: "Sunday", es: "Domingo", hours: "10:00 AM – 5:00 PM" },
];

function getCurrentDayIndex(): number {
  const jsDay = new Date().getDay();
  const map: Record<number, number> = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    0: 6,
  };
  return map[jsDay] ?? -1;
}

export default function Schedule() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const todayIdx = getCurrentDayIndex();

  return (
    <section
      id="schedule"
      className="relative py-20 md:py-28 bg-dark overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(182,21,22,0.06),transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <FaClock className="inline-block text-primary text-2xl mb-3" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t.schedule.title}
          </h2>
          <div className="mx-auto mt-4 w-20 h-0.5 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-dark-secondary/40 backdrop-blur-sm overflow-hidden"
        >
          <div className="divide-y divide-white/5">
            {days.map((day, i) => {
              const isToday = i === todayIdx;
              const dayName = lang === "es" ? day.es : day.en;

              return (
                <motion.div
                  key={day.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className={`flex items-center justify-between px-5 md:px-8 py-4 md:py-5 transition-colors ${
                    isToday
                      ? "bg-primary/10 border-l-2 border-primary"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse hidden sm:block" />
                    )}
                    <span
                      className={`text-sm md:text-base font-medium ${
                        isToday ? "text-primary" : "text-gray-custom"
                      }`}
                    >
                      {dayName}
                    </span>
                    {isToday && (
                      <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-primary/70 font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                        {lang === "es" ? "Hoy" : "Today"}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm md:text-base font-semibold ${
                      isToday ? "text-white" : "text-gray-custom/80"
                    }`}
                  >
                    {day.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
