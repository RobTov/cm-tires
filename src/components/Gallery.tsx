"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Tire replacement",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    alt: "Wheel alignment",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
    alt: "Brake repair",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80",
    alt: "Engine diagnostic",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
    alt: "Auto repair",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&q=80",
    alt: "Muffler exhaust",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80",
    alt: "Tire shop",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 bg-bg-light"
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            {t.gallery.title}
          </h2>
          <div className="mx-auto mt-4 w-20 h-0.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[180px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
