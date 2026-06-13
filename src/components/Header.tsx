"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ASSET_PREFIX } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whiteLogoOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const blackLogoOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const rawLogoScale = useTransform(scrollY, [0, 150], [1.85, 0.85]);
  const logoScale = useSpring(rawLogoScale, { stiffness: 150, damping: 30, restDelta: 0.001 });
  
  const rawLogoY = useTransform(scrollY, [0, 150], [20, 0]);
  const logoY = useSpring(rawLogoY, { stiffness: 150, damping: 30, restDelta: 0.001 });
  
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.9)", "rgba(42, 44, 43, 1)"] // White to Charcoal
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500 ease-out bg-transparent"
    >
      {/* Left */}
      <motion.div style={{ color: textColor }} className="flex-1 text-sm tracking-[0.15em] uppercase font-semibold">
        N&D Construct
      </motion.div>

      {/* Center - Logo */}
      <motion.div
        style={{ scale: logoScale, y: logoY, transformOrigin: 'top' }}
        className="flex-1 flex justify-center items-center relative pointer-events-none h-14"
      >
        <motion.img 
          src={`${ASSET_PREFIX}/Logos/Logo.png`}
          alt="N&D Construct Logo"
          style={{ opacity: whiteLogoOpacity, filter: "brightness(0) invert(1)" }}
          className="absolute h-full w-auto object-contain pointer-events-auto cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          width={300}
          height={100}
          loading="eager"
          decoding="async"
        />
        <motion.img 
          src={`${ASSET_PREFIX}/Logos/Logo.png`}
          alt="N&D Construct Logo"
          style={{ opacity: blackLogoOpacity }}
          className="absolute h-full w-auto object-contain pointer-events-auto cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          width={300}
          height={100}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* Right */}
      <motion.div style={{ color: textColor }} className="flex-1 flex justify-end items-center gap-6 text-sm tracking-wide">
        <div className={`hidden md:flex border transition-all duration-500 overflow-hidden ${isScrolled ? 'border-brand-charcoal/20' : 'border-white/30'}`}>
          <button 
            className={`px-3 py-1.5 text-[0.6rem] tracking-widest transition-all duration-300 ${lang === 'en' ? (isScrolled ? 'bg-brand-charcoal text-white' : 'bg-white text-brand-charcoal') : (isScrolled ? 'text-brand-charcoal hover:bg-brand-charcoal/5' : 'text-white hover:bg-white/10')}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <div className={`w-[1px] ${isScrolled ? 'bg-brand-charcoal/20' : 'bg-white/30'}`} />
          <button 
            className={`px-3 py-1.5 text-[0.6rem] tracking-widest transition-all duration-300 ${lang === 'ro' ? (isScrolled ? 'bg-brand-charcoal text-white' : 'bg-white text-brand-charcoal') : (isScrolled ? 'text-brand-charcoal hover:bg-brand-charcoal/5' : 'text-white hover:bg-white/10')}`}
            onClick={() => setLang('ro')}
          >
            RO
          </button>
        </div>
        <button
          className={`border px-6 py-2 rounded-none uppercase text-xs tracking-widest transition-all duration-500 ease-out ${
            isScrolled
              ? "bg-brand-charcoal text-white border-brand-charcoal hover:bg-brand-stone hover:text-brand-charcoal hover:border-brand-stone"
              : "bg-transparent text-white border-white/30 hover:bg-white/10"
          }`}
          onClick={() => {
            document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {lang === 'ro' ? 'CONTACT' : 'CONTACT'}
        </button>
      </motion.div>
    </motion.header>
  );
}
