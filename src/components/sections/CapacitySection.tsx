"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { RoomDetailsModal } from "./RoomDetailsModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSET_PREFIX } from "@/lib/utils";

const serviceImages = [
  `${ASSET_PREFIX}/projects/led-1.webp`,
  `${ASSET_PREFIX}/projects/led-2.webp`,
  `${ASSET_PREFIX}/projects/led-3.webp`,
  `${ASSET_PREFIX}/projects/led-4.webp`,
  `${ASSET_PREFIX}/projects/led-5.webp`,
  `${ASSET_PREFIX}/projects/led-6.webp`,
  `${ASSET_PREFIX}/projects/led-7.webp`,
  `${ASSET_PREFIX}/projects/led-8.webp`,
  `${ASSET_PREFIX}/projects/led-9.webp`,
  `${ASSET_PREFIX}/projects/led-10.webp`,
  `${ASSET_PREFIX}/projects/led-11.webp`,
  `${ASSET_PREFIX}/projects/led-12.webp`,
  `${ASSET_PREFIX}/projects/led-13.webp`,
  `${ASSET_PREFIX}/projects/led-14.webp`,
  `${ASSET_PREFIX}/projects/led-15.webp`,
  `${ASSET_PREFIX}/projects/led-16.webp`,
  `${ASSET_PREFIX}/projects/led-17.webp`,
  `${ASSET_PREFIX}/projects/led-18.webp`,
  `${ASSET_PREFIX}/projects/led-19.webp`,
  `${ASSET_PREFIX}/projects/led-20.webp`,
  `${ASSET_PREFIX}/projects/led-21.webp`,
  `${ASSET_PREFIX}/projects/led-22.webp`,
  `${ASSET_PREFIX}/projects/led-23.webp`,
];

export default function CapacitySection() {
  const { lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!hasInteracted) setHasInteracted(true);
  };

  const scrollLeft = () => {
    if (!hasInteracted) setHasInteracted(true);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (!hasInteracted) setHasInteracted(true);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-32 px-4 md:px-8 max-w-[100rem] mx-auto text-center flex flex-col items-center justify-center bg-brand-ivory">
      
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="max-w-3xl mb-16"
      >
        <h2 className="font-serif text-4xl md:text-6xl mb-8">
          {lang === 'ro' ? 'Servicii & Amenajări' : 'Services & Fitting'}
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed text-sm md:text-base font-light mb-12">
          {lang === 'ro'
            ? "Oferim servicii complete de finisaje și renovări interioare, executate cu atenție sporită la detalii. De la zugrăveli rapide și uniforme până la compartimentări complexe din gips-carton (rigips) și scafe LED decorative."
            : "We offer complete interior finishing and renovation services, executed with high attention to detail. From rapid and uniform painting to complex drywall partition walls and decorative LED coves."}
        </p>
        
        <div className="flex items-center justify-center gap-4 text-[0.65rem] md:text-xs tracking-[0.2em] uppercase opacity-60 mb-12 flex-wrap">
          <span>{lang === 'ro' ? 'Zugrăveli Profesionale' : 'Professional Painting'}</span>
          <span className="hidden sm:inline">·</span>
          <span>{lang === 'ro' ? 'Sisteme Rigips' : 'Drywall Systems'}</span>
          <span className="hidden sm:inline">·</span>
          <span>{lang === 'ro' ? 'Scafe LED decorative' : 'Decorative LED Coves'}</span>
          <span className="hidden sm:inline">·</span>
          <span>{lang === 'ro' ? 'Finisaje de Precizie' : 'Precision Finishes'}</span>
        </div>

        <Button onClick={() => setIsModalOpen(true)}>
          {lang === 'ro' ? 'Vezi Detalii Servicii' : 'View Service Details'}
        </Button>
      </motion.div>

      {/* Services Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="w-full relative max-w-7xl mx-auto mb-16"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:-ml-6">
          <button onClick={scrollLeft} className="bg-white/80 p-2 border border-brand-charcoal/10 hover:bg-white transition-colors shadow-sm">
            <ChevronLeft size={24} className="text-brand-charcoal" strokeWidth={1} />
          </button>
        </div>
        
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory thin-scrollbar pb-6 px-4 md:px-0"
        >
          {serviceImages.map((src, idx) => (
            <div key={idx} className="shrink-0 w-[280px] md:w-[400px] aspect-[4/5] snap-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand-charcoal/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {(hasInteracted || idx < 3) ? (
                <img 
                  src={src} 
                  alt={`Service work ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading={idx < 3 ? "eager" : "lazy"}
                  decoding="async"
                  width={400}
                  height={500}
                />
              ) : (
                <div className="w-full h-full bg-brand-charcoal/5" />
              )}
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:-mr-6">
          <button onClick={scrollRight} className="bg-white/80 p-2 border border-brand-charcoal/10 hover:bg-white transition-colors shadow-sm">
            <ChevronRight size={24} className="text-brand-charcoal" strokeWidth={1} />
          </button>
        </div>
      </motion.div>

      <RoomDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}
