"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { ASSET_PREFIX } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { GalleryModal } from "../GalleryModal";

const heroGallery = [
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
];

export default function HeroSection() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const { lang } = useLanguage();

  const nextImage = () => {
    if (galleryIndex !== null) {
      setDirection(1);
      setGalleryIndex((galleryIndex + 1) % heroGallery.length);
    }
  };

  const prevImage = () => {
    if (galleryIndex !== null) {
      setDirection(-1);
      setGalleryIndex((galleryIndex - 1 + heroGallery.length) % heroGallery.length);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden pb-24 md:pb-36">
      {/* Background Image / Optimized for LCP */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet={`${ASSET_PREFIX}/HeroND_converted.webp`}
          />
          <motion.img
            src={`${ASSET_PREFIX}/HeroND_converted.webp`}
            alt="N&D Construct Premium Interior Finishes"
            className="w-full h-full object-cover object-[center_35%] md:object-center"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            // @ts-ignore
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1920}
            height={1080}
          />
        </picture>
        {/* Subtle dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-brand-ivory text-center px-4 max-w-4xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-wide leading-tight mb-6 max-w-3xl">
          {lang === 'ro' 
            ? "Specialiști în Finisaje Premium și Amenajări Decorative" 
            : "Specialists in Premium Finishes & Decorative Details"}
        </h1>
        <p className="text-[0.75rem] md:text-sm tracking-[0.2em] uppercase opacity-90 mb-12 max-w-2xl leading-relaxed font-light">
          {lang === 'ro' 
            ? "Zugrăveli, reparații și lucrări profesionale cu rigips în București și Ilfov."
            : "Painting, repairs, and professional drywall work in Bucharest and Ilfov."}
        </p>
        <div className="flex justify-center w-full gap-4">
          <Button 
            className="border-white text-white hover:bg-white hover:text-brand-charcoal"
            onClick={() => {
              setDirection(0);
              setGalleryIndex(0);
            }}
          >
            {lang === 'ro' ? 'Vezi Proiecte' : 'View Projects'}
          </Button>
          <Button 
            className="bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10"
            onClick={() => {
              document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {lang === 'ro' ? 'Cere Ofertă' : 'Get Quote'}
          </Button>
        </div>
      </motion.div>

      {/* Fullscreen Gallery Overlay */}
      <GalleryModal
        images={heroGallery}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onNext={nextImage}
        onPrev={prevImage}
        direction={direction}
      />
    </section>
  );
}
