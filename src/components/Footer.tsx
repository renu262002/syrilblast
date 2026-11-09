import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationContent['finalCta'];
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  t,
}) => {
  return (
    <footer className="w-full bg-[#050507] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Monogram */}
        <div className="flex items-center gap-4">
          <a
            href="https://syrilinfotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <img
              src="/syril_logo_preview.png"
              alt="Syril Infotech"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <span className="hidden sm:inline text-xs font-mono text-slate-500">|</span>
          <span className="hidden sm:inline text-xs font-mono text-slate-400">
            Digital Marketing Agency
          </span>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <a href="#about" className="hover:text-[#ccff00] transition-colors">
            About
          </a>
          <a href="#process" className="hover:text-[#ccff00] transition-colors">
            Process
          </a>
          <a href="#services" className="hover:text-[#ccff00] transition-colors">
            Services
          </a>
          <a href="#discount" className="hover:text-[#ccff00] transition-colors">
            25% Discount
          </a>
          <a href="#pricing" className="hover:text-[#ccff00] transition-colors">
            Pricing
          </a>
          <a
            href="https://syrilinfotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors inline-flex items-center gap-1"
          >
            <span>syrilinfotech.com</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Language & Copyright */}
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <button
            onClick={() => onLanguageChange(currentLang === 'en' ? 'ta' : 'en')}
            className="flex items-center gap-1 text-slate-400 hover:text-[#ccff00] transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>
          <span>·</span>
          <span>{t.copyright}</span>
        </div>

      </div>
    </footer>
  );
};
