"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { SectionHeading, TextPairing } from "../Typography";
import { Button } from "../Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSET_PREFIX } from "@/lib/utils";
import { GalleryModal } from "../GalleryModal";

const detailsGallery = [
  `${ASSET_PREFIX}/projects/led-1.webp`,
  `${ASSET_PREFIX}/projects/led-2.webp`,
  `${ASSET_PREFIX}/projects/led-3.webp`,
  `${ASSET_PREFIX}/projects/led-4.webp`,
  `${ASSET_PREFIX}/projects/led-5.webp`,
  `${ASSET_PREFIX}/projects/led-6.webp`,
];

const viewsGallery = [
  `${ASSET_PREFIX}/projects/led-7.webp`,
  `${ASSET_PREFIX}/projects/led-8.webp`,
  `${ASSET_PREFIX}/projects/led-9.webp`,
  `${ASSET_PREFIX}/projects/led-10.webp`,
  `${ASSET_PREFIX}/projects/led-11.webp`,
  `${ASSET_PREFIX}/projects/led-12.webp`,
];

function EditorialScrollySection({ 
  label, 
  heading, 
  body, 
  images, 
  imagePosition = "right" 
}: { 
  label: string; 
  heading: React.ReactNode; 
  body: React.ReactNode; 
  images: string[]; 
  imagePosition?: "left" | "right"; 
}) {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.25 && activeIndex !== 1) {
      setDirection(1);
      setActiveIndex(1);
    } else if (latest < 0.25 && activeIndex !== 0) {
      setDirection(-1);
      setActiveIndex(0);
    }
  });

  const handleTabClick = (index: number) => {
    if (index !== activeIndex) {
      setDirection(index > activeIndex ? 1 : -1);
    }
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const height = rect.height;
    const scrollableDistance = height - window.innerHeight;
    
    // Scroll to either the beginning or the end of the scrollable sticky area
    const targetY = top + (index === 0 ? 0 : scrollableDistance);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? "10%" : "-10%",
    }),
    center: {
      opacity: 1,
      y: "0%",
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? "-10%" : "10%",
    })
  };

  const textOrderCls = imagePosition === "left" 
    ? "order-1 md:order-2" 
    : "order-1 md:order-1";
    
  const imageOrderCls = imagePosition === "left" 
    ? "order-2 md:order-1" 
    : "order-2 md:order-2";

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-[150vh] bg-brand-ivory">
      <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center px-8 py-16 md:py-0 max-w-[100rem] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center w-full">
          
          {/* Text Col */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className={`${textOrderCls} max-w-md mx-auto md:mx-0 w-full`}
          >
            <TextPairing
              label={label}
              heading={<SectionHeading className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">{heading}</SectionHeading>}
              body={body}
            />
          </motion.div>

          {/* Image Col */}
          <motion.div 
            className={`${imageOrderCls} h-[60vh] md:h-[75vh] min-h-[500px] md:min-h-[600px] max-h-[800px] overflow-hidden relative w-full`}
          >
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.img
                key={images[activeIndex]}
                src={encodeURI(images[activeIndex])}
                alt={lang === 'ro' ? 'N&D Construct Portofoliu' : 'N&D Construct Portfolio'}
                className="w-full h-full object-cover absolute inset-0 bg-brand-charcoal/10"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
              />
            </AnimatePresence>

            {/* Tabs Overlay on Image */}
            <div className={`absolute bottom-6 md:bottom-10 z-20 flex gap-6 text-[0.65rem] tracking-[0.2em] uppercase text-white/50 font-medium ${imagePosition === 'left' ? 'right-6 md:right-10' : 'left-6 md:left-10'}`}>
              <button 
                onClick={() => handleTabClick(0)}
                className={`transition-all duration-500 flex items-center gap-2 ${activeIndex === 0 ? 'text-white' : 'hover:text-white/80'}`}
              >
                <span className={`h-[1px] transition-all duration-500 ${activeIndex === 0 ? 'w-6 bg-white' : 'w-0 bg-transparent'}`}></span>
                01
              </button>
              <button 
                onClick={() => handleTabClick(1)}
                className={`transition-all duration-500 flex items-center gap-2 ${activeIndex === 1 ? 'text-white' : 'hover:text-white/80'}`}
              >
                <span className={`h-[1px] transition-all duration-500 ${activeIndex === 1 ? 'w-6 bg-white' : 'w-0 bg-transparent'}`}></span>
                02
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function IntroSection() {
  const { lang } = useLanguage();
  
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);
  const [detailsDir, setDetailsDir] = useState(0);

  const [viewsIndex, setViewsIndex] = useState<number | null>(null);
  const [viewsDir, setViewsDir] = useState(0);

  return (
    <div className="flex flex-col">
      {/* 1st Block */}
      <EditorialScrollySection
        label={lang === 'ro' ? "Amenajări Rezidențiale" : "Residential Fit-outs"}
        heading={lang === 'ro' ? "Atenție la Detalii" : "Attention to Detail"}
        body={
          <div className="space-y-6">
            <p>
              {lang === 'ro'
                ? "Fie că este vorba despre zugrăvirea unui apartament sau despre finisaje complexe într-o vilă nouă, tratăm fiecare casă cu respect. Ne asigurăm că toate suprafețele, pardoselile și mobilierul existent sunt protejate complet pe parcursul execuției lucrărilor."
                : "Whether it is painting an apartment or executing complex finishes in a new villa, we treat every home with respect. We ensure that all existing surfaces, floors, and furniture are fully protected during the execution of our work."}
            </p>
            <div className="pt-8">
              <Button variant="outline" onClick={() => {
                setDetailsDir(0);
                setDetailsIndex(0);
              }}>
                {lang === 'ro' ? "Mai multe detalii" : "Explore Details"}
              </Button>
            </div>
          </div>
        }
        images={[
          `${ASSET_PREFIX}/projects/led-13.webp`,
          `${ASSET_PREFIX}/projects/led-14.webp`
        ]}
        imagePosition="right"
      />

      {/* 2nd Block */}
      <EditorialScrollySection
        label={lang === 'ro' ? "Spații Comerciale" : "Commercial Spaces"}
        heading={lang === 'ro' ? "Durabilitate & Design" : "Durability & Design"}
        body={
          <div className="space-y-6">
            <p>
              {lang === 'ro'
                ? "Pentru magazine, birouri, saloane, showroom-uri sau clinici, oferim servicii rapide de finisaje interioare pentru a asigura deschiderea la termen. Structuri rezistente din rigips, vopsele rezistente la trafic intens și scafe LED spectaculoase."
                : "For shops, offices, salons, showrooms, or clinics, we offer rapid interior finishing services to ensure on-time openings. Sturdy drywall systems, high-traffic resistant paints, and spectacular LED coves."}
            </p>
            <div className="pt-8">
              <Button variant="outline" onClick={() => {
                setViewsDir(0);
                setViewsIndex(0);
              }}>
                {lang === 'ro' ? "Vezi galeria" : "View Gallery"}
              </Button>
            </div>
          </div>
        }
        images={[
          `${ASSET_PREFIX}/projects/led-15.webp`,
          `${ASSET_PREFIX}/projects/led-16.webp`
        ]}
        imagePosition="left"
      />

      {/* Modals */}
      <GalleryModal
        images={detailsGallery}
        activeIndex={detailsIndex}
        onClose={() => setDetailsIndex(null)}
        onNext={() => {
          setDetailsDir(1);
          setDetailsIndex((detailsIndex! + 1) % detailsGallery.length);
        }}
        onPrev={() => {
          setDetailsDir(-1);
          setDetailsIndex((detailsIndex! - 1 + detailsGallery.length) % detailsGallery.length);
        }}
        direction={detailsDir}
      />

      <GalleryModal
        images={viewsGallery}
        activeIndex={viewsIndex}
        onClose={() => setViewsIndex(null)}
        onNext={() => {
          setViewsDir(1);
          setViewsIndex((viewsIndex! + 1) % viewsGallery.length);
        }}
        onPrev={() => {
          setViewsDir(-1);
          setViewsIndex((viewsIndex! - 1 + viewsGallery.length) % viewsGallery.length);
        }}
        direction={viewsDir}
      />
    </div>
  );
}
