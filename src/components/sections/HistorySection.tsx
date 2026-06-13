"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSET_PREFIX } from "@/lib/utils";

export default function HistorySection() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-8 flex flex-col items-center text-center z-10 relative bg-brand-ivory">
      <motion.img 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        src={`${ASSET_PREFIX}/Logos/Logo.png`}
        alt="N&D Construct Logo" 
        className="w-40 md:w-56 mb-12 opacity-90 object-contain"
        loading="lazy"
        width={224}
        height={100}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl text-brand-charcoal/80 font-light leading-[1.8] text-[0.95rem] md:text-[1.05rem]"
      >
        <p>
          {lang === 'ro' 
            ? "Suntem o echipă dedicată lucrărilor de amenajări interioare și finisaje de înaltă precizie în București și Ilfov. Specializați în zugrăveli profesionale, montaj sisteme de gips-carton (rigips), finisare gleturi și detalii decorative premium, ne asumăm responsabilitatea de a transforma orice spațiu într-un ambient rafinat, durabil și curat. Folosim exclusiv materiale calitative și tehnici moderne de execuție, garantând planeitate impecabilă a suprafețelor și respectarea termenelor promise."
            : "We are a dedicated team providing high-precision interior fit-outs and premium finishes in Bucharest and Ilfov. Specialized in professional painting, drywall systems installation, plaster finishing, and premium decorative details, we take responsibility for transforming any space into a refined, durable, and clean environment. We use only high-quality materials and modern execution techniques, guaranteeing impeccable surface flatness and strict adherence to agreed deadlines."}
        </p>
      </motion.div>
    </section>
  );
}
