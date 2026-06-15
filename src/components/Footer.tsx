export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-24 pb-12 px-8 flex flex-col items-center text-center">
      <h2 className="font-serif text-3xl mb-8 tracking-wide">N&D Construct</h2>
      <div className="text-sm tracking-widest uppercase opacity-70 mb-16 font-medium space-y-2">
        <p>Finisaje Premium & Amenajări Decorative</p>
        <p>București & Ilfov, România</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 opacity-60 text-sm mb-16">
        <a href="https://wa.me/40733764866" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">WhatsApp: +40 733 764 866</a>
        <a href="mailto:N.Dpremiumdesign@gmail.com" className="hover:opacity-100 transition-opacity">Email: N.Dpremiumdesign@gmail.com</a>
      </div>

      <div className="w-full max-w-4xl border-t border-brand-stone/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
        <p>&copy; {new Date().getFullYear()} N&D Construct. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
