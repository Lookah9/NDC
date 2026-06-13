"use client";

import { motion } from "framer-motion";
import { SectionHeading, TextPairing } from "../Typography";
import { Button } from "../Button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LocationSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 md:py-32 px-8 max-w-[100rem] mx-auto border-t border-brand-charcoal/10 bg-brand-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pl-0 lg:pl-12">
        
        {/* Text Col */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <TextPairing
            label={lang === 'ro' ? 'Locație' : 'Location'}
            heading={<SectionHeading>{lang === 'ro' ? 'București & Ilfov' : 'Bucharest & Ilfov'}</SectionHeading>}
            body={
              <div className="space-y-6 text-brand-charcoal/70">
                <p>
                  {lang === 'ro' 
                    ? "Echipa noastră oferă servicii de finisaje și amenajări interioare pe tot teritoriul municipiului București (Sectoarele 1-6) și în județul Ilfov. Ne deplasăm la fața locului pentru măsurători precise și oferirea unei evaluări tehnice realiste."
                    : "Our team provides finishing and interior setup services throughout Bucharest (Sectors 1-6) and Ilfov County. We travel on-site for precise measurements and a realistic technical estimate."}
                </p>
                <ul className="space-y-3 pt-4 border-t border-brand-charcoal/10 text-sm font-medium">
                  <li className="flex justify-between">
                    <span>{lang === 'ro' ? 'Zonă de acoperire' : 'Coverage Area'}</span> 
                    <span className="opacity-60">{lang === 'ro' ? 'București (Sectoarele 1-6)' : 'Bucharest (Sectors 1-6)'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{lang === 'ro' ? 'Județul Ilfov' : 'Ilfov County'}</span> 
                    <span className="opacity-60">{lang === 'ro' ? 'Toate localitățile' : 'All surrounding towns'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{lang === 'ro' ? 'Evaluare la fața locului' : 'On-site Assessment'}</span> 
                    <span className="opacity-60 text-brand-charcoal font-semibold">{lang === 'ro' ? 'Gratuit' : 'Free'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{lang === 'ro' ? 'Consultanță inițială' : 'Initial Consultation'}</span> 
                    <span className="opacity-60">{lang === 'ro' ? 'Rapidă, pe WhatsApp' : 'Quick, via WhatsApp'}</span>
                  </li>
                </ul>
              </div>
            }
          />
          <div className="pt-10">
            <Button variant="outline" onClick={() => window.open("https://maps.google.com/?q=Bucharest", "_blank")}>
              {lang === 'ro' ? 'Deschide în Hărți' : 'Open in Maps'}
            </Button>
          </div>
        </motion.div>

        {/* Live Map Embed */}
        <motion.div 
          className="aspect-[4/3] md:aspect-[3/2] bg-brand-stone flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <iframe 
            src="https://www.google.com/maps?q=44.4268,26.1025&z=11&output=embed"
            className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-50 opacity-90 border-0 contrast-125"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none border border-brand-charcoal/20 z-10" />
        </motion.div>

        {/* Change French translation to Romanian translation in label button */}
      </div>
    </section>
  );
}
