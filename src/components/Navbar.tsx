import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Globe, Download } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { triggerNeonBurst } from './BurstEffect';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBrochure: () => void;
  t: TranslationContent['nav'];
  isExpired: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBrochure,
  t,
  isExpired,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    onLanguageChange(currentLang === 'en' ? 'ta' : 'en');
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    triggerNeonBurst(e);
    const target = document.getElementById('final-cta') || document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070709]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* ZONE 1: BRAND LOGO */}
        <a
          href="https://syrilinfotech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] rounded-lg"
          title="Syril Infotech Official Website"
        >
          <img
            src="/syril_logo_preview.png"
            alt="Syril Infotech Logo"
            className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* ZONE 2: NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0"
          >
            {t.about}
          </a>
          <a
            href="#process"
            className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0"
          >
            {t.process}
          </a>
          <a
            href="#services"
            className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0"
          >
            {t.services}
          </a>
          <a
            href="#discount"
            className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0"
          >
            {t.discount}
          </a>
          <a
            href="#pricing"
            className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0"
          >
            {t.pricing}
          </a>
          <a
            href="#final-cta"
            className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0"
          >
            {t.contact}
          </a>
        </nav>

        {/* ZONE 3: SINGLE LANGUAGE TOGGLE & PRIMARY CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Single Language Toggle Button: Shows 'தமிழ்' when in English, 'English' when in Tamil */}
          <button
            onClick={toggleLanguage}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#ccff00]/40 hover:border-[#ccff00] bg-[#121217] hover:bg-[#181820] text-xs font-bold text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]"
            aria-label={currentLang === 'en' ? 'Switch to Tamil language' : 'Switch to English language'}
            title={currentLang === 'en' ? 'Switch to தமிழ்' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-[#ccff00]" />
            <span className={currentLang === 'en' ? 'tamil-font font-bold text-[#ccff00] text-xs' : 'font-bold text-[#ccff00] text-xs'}>
              {currentLang === 'en' ? 'தமிழ்' : 'English'}
            </span>
          </button>

          {/* Brochure Quick View / Download Button */}
          <button
            onClick={(e) => {
              triggerNeonBurst(e);
              onOpenBrochure();
            }}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 hover:border-[#ccff00]/40 text-xs font-semibold text-white bg-transparent hover:bg-white/5 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            title="View or Download Brochure PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#ccff00]" />
            <span className="hidden xl:inline">Brochure PDF</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#ccff00] hover:bg-[#b8f000] rounded-lg shadow-neon-sm hover:shadow-neon transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{isExpired ? t.contact : t.enquireNow}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#141418] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0d] border-b border-white/10 px-5 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              {t.about}
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              {t.process}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              {t.services}
            </a>
            <a
              href="#discount"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              {t.discount}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              {t.pricing}
            </a>
            <a
              href="#final-cta"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              {t.contact}
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            {/* Mobile Single Language Toggle Button */}
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              type="button"
              className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-[#ccff00]/40 bg-[#14141c] text-sm font-bold text-white hover:text-[#ccff00] cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#ccff00]" />
                <span className="text-slate-300">Language:</span>
              </div>
              <span className={`px-2.5 py-0.5 rounded bg-[#ccff00] text-black font-extrabold text-xs ${currentLang === 'en' ? 'tamil-font' : ''}`}>
                Switch to {currentLang === 'en' ? 'தமிழ்' : 'English'}
              </span>
            </button>

            <button
              onClick={(e) => {
                triggerNeonBurst(e);
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/15 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#ccff00]" />
              <span>View & Download Brochure PDF</span>
            </button>

            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleCtaClick(e);
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-black bg-[#ccff00] rounded-lg shadow-neon-sm"
            >
              {isExpired ? t.contact : t.enquireNow}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
