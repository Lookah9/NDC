"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../Typography";
import { Button } from "../Button";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InquirySection() {
  const { lang } = useLanguage();
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !serviceType || !message) {
      alert(lang === 'ro' ? 'Vă rugăm să completați câmpurile obligatorii.' : 'Please fill in all required fields.');
      return;
    }

    let text = "";
    if (lang === "ro") {
      text = `Bună ziua! Aș dori o evaluare / ofertă pentru proiectul meu.\n\n` +
             `Nume: ${name}\n` +
             `Telefon: ${phone || 'Nespecificat'}\n` +
             `Tip Serviciu: ${serviceType}\n` +
             `Detalii lucrare: ${message}`;
    } else {
      text = `Hello! I would like to request a quote for my project.\n\n` +
             `Name: ${name}\n` +
             `Phone: ${phone || 'Not specified'}\n` +
             `Service Type: ${serviceType}\n` +
             `Job details: ${message}`;
    }

    const whatsappUrl = `https://wa.me/40733764866?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inquiry" className="py-20 md:py-32 px-4 sm:px-8 bg-brand-stone/40">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-brand-charcoal/50 uppercase tracking-widest text-xs font-semibold block mb-4">
            {lang === 'ro' ? 'Contact WhatsApp' : 'WhatsApp Contact'}
          </span>
          <SectionHeading className="mb-6">
            {lang === 'ro' ? 'Solicită o Evaluare Rapidă' : 'Request a Quick Estimate'}
          </SectionHeading>
          <p className="text-brand-charcoal/70 text-sm leading-relaxed max-w-xl mx-auto">
            {lang === 'ro' 
              ? 'Trimite-ne detaliile proiectului tău prin formularul de mai jos și continuăm discuția direct pe WhatsApp pentru o evaluare tehnică.' 
              : 'Send us your project details using the form below and we will continue the conversation directly on WhatsApp for a technical estimate.'}
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest opacity-60 mb-2 font-medium">
                {lang === 'ro' ? 'Nume Complet *' : 'Full Name *'}
              </label>
              <Input 
                id="name" 
                placeholder={lang === 'ro' ? 'ex. Andrei Popescu' : 'e.g. John Doe'} 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest opacity-60 mb-2 font-medium">
                {lang === 'ro' ? 'Număr Telefon (Opțional)' : 'Phone Number (Optional)'}
              </label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder={lang === 'ro' ? 'ex. 07xx xxx xxx' : 'e.g. +40 7xx xxx xxx'} 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-12">
            <div>
              <label htmlFor="service-type" className="block text-xs uppercase tracking-widest opacity-60 mb-2 font-medium">
                {lang === 'ro' ? 'Tip Serviciu *' : 'Service Type *'}
              </label>
              <div className="relative group">
                <select 
                  id="service-type" 
                  className="flex h-12 w-full appearance-none border-b border-brand-charcoal/30 bg-transparent px-3 py-2 text-sm transition-colors text-brand-charcoal focus-visible:outline-none focus-visible:border-brand-charcoal cursor-pointer"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  required
                >
                  <option value="" disabled className="text-brand-charcoal/40">{lang === 'ro' ? 'Selectează o opțiune' : 'Select an option'}</option>
                  <option value={lang === 'ro' ? 'Zugrăveli interioare' : 'Interior Painting'}>
                    {lang === 'ro' ? 'Zugrăveli interioare' : 'Interior Painting'}
                  </option>
                  <option value={lang === 'ro' ? 'Reparații pereți și tavane' : 'Wall & Ceiling Repairs'}>
                    {lang === 'ro' ? 'Reparații pereți și tavane' : 'Wall & Ceiling Repairs'}
                  </option>
                  <option value={lang === 'ro' ? 'Tavane din rigips' : 'Drywall Ceilings'}>
                    {lang === 'ro' ? 'Tavane din rigips' : 'Drywall Ceilings'}
                  </option>
                  <option value={lang === 'ro' ? 'Scafe LED' : 'LED Coves'}>
                    {lang === 'ro' ? 'Scafe LED' : 'LED Coves'}
                  </option>
                  <option value={lang === 'ro' ? 'Pereți despărțitori' : 'Drywall Partitions'}>
                    {lang === 'ro' ? 'Pereți despărțitori' : 'Drywall Partitions'}
                  </option>
                  <option value={lang === 'ro' ? 'Nișe și elemente decorative' : 'Niches & Decorative Elements'}>
                    {lang === 'ro' ? 'Nișe și elemente decorative' : 'Niches & Decorative Elements'}
                  </option>
                  <option value={lang === 'ro' ? 'Finisaje interioare' : 'Interior Finishes'}>
                    {lang === 'ro' ? 'Finisaje interioare' : 'Interior Finishes'}
                  </option>
                  <option value={lang === 'ro' ? 'Amenajări spații comerciale' : 'Commercial Fit-outs'}>
                    {lang === 'ro' ? 'Amenajări spații comerciale' : 'Commercial Fit-outs'}
                  </option>
                  <option value={lang === 'ro' ? 'Altele' : 'Other'}>
                    {lang === 'ro' ? 'Altele' : 'Other'}
                  </option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-brand-charcoal opacity-50" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest opacity-60 mb-2 font-medium">
              {lang === 'ro' ? 'Detalii Lucrare (Dimensiuni, servicii dorite, locație etc.) *' : 'Job Details (Dimensions, desired services, location etc.) *'}
            </label>
            <Textarea 
              id="message" 
              placeholder={lang === 'ro' ? 'Descrieți pe scurt lucrarea dorită...' : 'Briefly describe your desired work...'} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="solid" type="submit">
              {lang === 'ro' ? 'Trimite pe WhatsApp' : 'Send to WhatsApp'}
            </Button>
            <Button 
              variant="outline" 
              type="button"
              onClick={() => {
                window.location.href = "tel:+40733764866";
              }}
            >
              {lang === 'ro' ? 'Sună Acum' : 'Call Now'}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
