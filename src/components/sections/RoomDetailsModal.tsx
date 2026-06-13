import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function RoomDetailsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { lang } = useLanguage();

  const tableDataRo = [
    { service: "Zugrăveli interioare", category: "Zugrăveli", description: "Zugrăveli pentru pereți și tavane. Include pregătire, reparații glet și aplicare lavabilă premium.", details: "Protejare completă mobilier, curățenie inclusă" },
    { service: "Reparații pereți și tavane", category: "Reparații", description: "Refacem suprafețe deteriorate: fisuri, infiltrații, denivelări, colțuri lovite.", details: "Glet de încărcare, armare cu plasă, finisare" },
    { service: "Tavane din rigips", category: "Gips-Carton", description: "Tavane suspendate simple, drepte, coborâte sau decorative cu zone tehnice.", details: "Mascări conducte, instalații, spoturi integrate" },
    { service: "Scafe LED", category: "Amenajări Decorative", description: "Scafe estetice din rigips pentru iluminare ambientală în living, dormitor, hol.", details: "Aliniere perfectă, pregătite pentru bandă LED" },
    { service: "Pereți despărțitori", category: "Gips-Carton", description: "Compartimentări interioare rapide din gips-carton pentru izolarea camerelor.", details: "Izolare fonică cu vată minerală, structură metalică" },
    { service: "Nișe și elemente decorative", category: "Amenajări Decorative", description: "Bespoke: rafturi rigips integrate, pereți TV decorați, nișe iluminate.", details: "Design customizat, finisare premium a colțurilor" },
    { service: "Finisaje interioare", category: "Pregătire & Finisaje", description: "Gletuire fină de finisaj, șlefuire mecanică curată (cu aspirator), amorsare.", details: "Planeitate perfectă, șlefuire cu aspirare integrată" },
    { service: "Amenajări spații comerciale", category: "Amenajări Complete", description: "Renovare, reîmprospătare și compartimentare rapidă pentru magazine, saloane, birouri.", details: "Execuție rapidă pentru deschidere la termen" },
  ];

  const tableDataEn = [
    { service: "Interior Painting", category: "Painting", description: "Painting for walls and ceilings. Includes surface prep, plaster patching, and premium coat application.", details: "Complete furniture protection, final cleaning included" },
    { service: "Wall & Ceiling Repairs", category: "Repairs", description: "Restoring damaged surfaces: cracks, holes, water leaks, uneven areas, or post-installation repair.", details: "Base coat plastering, joint mesh reinforcement, skim coat" },
    { service: "Drywall Ceilings", category: "Drywall Systems", description: "Standard or decorative suspended ceilings, pipe concealments, and technical voids.", details: "Integrated spotlights, duct masking" },
    { service: "LED Coves", category: "Decorative Details", description: "Drywall coves for ambient lighting in living rooms, bedrooms, hallways, or office spaces.", details: "Perfect alignment, ready for LED strip integration" },
    { service: "Drywall Partitions", category: "Drywall Systems", description: "Fast drywall partition wall framing to split rooms or create separate areas.", details: "Soundproofing with rockwool insulation, metallic stud framing" },
    { service: "Niches & Decorative Elements", category: "Decorative Details", description: "Custom integrated shelving, television accent walls, and illuminated niches.", details: "Bespoke design, premium corner finishing" },
    { service: "Interior Finishes", category: "Prep & Finishing", description: "Skim coating, dustless mechanical sanding, priming, and precise joint reinforcing.", details: "Perfect flatness, dustless sanding with vacuum extraction" },
    { service: "Commercial Fit-outs", category: "Complete Fittings", description: "Rapid layout modification, painting, partition framing, and lighting setups tailored for businesses.", details: "Fast execution for on-time business opening" },
  ];

  const tableData = lang === 'ro' ? tableDataRo : tableDataEn;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ivory/95 backdrop-blur-sm p-4 md:p-12 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-brand-charcoal hover:opacity-50 transition-opacity z-50"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="w-full max-w-6xl max-h-full overflow-y-auto pr-4 thin-scrollbar pb-16"
          >
            <div className="text-center mb-12 mt-12">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">{lang === 'ro' ? 'Ghid de Servicii' : 'Services Directory'}</h2>
              <p className="text-brand-charcoal/60 uppercase tracking-widest text-xs">{lang === 'ro' ? 'N&D Construct Servicii' : 'N&D Construct Services'}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-brand-charcoal/20 text-xs tracking-widest uppercase opacity-60">
                    <th className="py-4 px-4 font-normal">{lang === 'ro' ? 'Serviciu' : 'Service'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'ro' ? 'Categorie' : 'Category'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'ro' ? 'Descriere' : 'Description'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'ro' ? 'Detalii Cheie' : 'Key Details'}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {tableData.map((row, i) => (
                    <tr key={i} className="border-b border-brand-charcoal/10 hover:bg-white/40 transition-colors">
                      <td className="py-4 px-4 font-serif text-lg">{row.service}</td>
                      <td className="py-4 px-4 opacity-85 font-semibold text-xs tracking-wider uppercase">{row.category}</td>
                      <td className="py-4 px-4 opacity-80 max-w-md leading-relaxed">{row.description}</td>
                      <td className="py-4 px-4 opacity-80 italic text-brand-charcoal/70">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
