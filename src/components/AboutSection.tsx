import { Target, Compass, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { SectionContactButton } from './SectionContactButton';

interface AboutSectionProps {
  currentLang: Language;
  t: TranslationContent['about'];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, t }) => {
  const isTamil = currentLang === 'ta';

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      {/* Background Subtle Geometric Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[450px] h-[450px] bg-[#ccff00]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#ccff00] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6 ${
              isTamil ? 'tamil-font' : 'display-font'
            }`}
          >
            {t.headingMain}{' '}
            <span className="relative inline-block text-black bg-[#ccff00] px-3 py-0.5 rounded-lg shadow-sm">
              {t.headingHighlight}
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-slate-900 font-bold mb-4 leading-relaxed ${
              isTamil ? 'tamil-font' : ''
            }`}
          >
            {t.intro}
          </p>

          <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
            {t.p1}
          </p>

          <p className="text-slate-600 text-base leading-relaxed font-normal">
            {t.p2}
          </p>
        </div>

        {/* 2-Column Showcase: High-Contrast Dark Goal Box + Clean Light Metric Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Goal Callout Box - High Contrast Dark Agency Box */}
          <div className="lg:col-span-7 rounded-3xl bg-[#09090d] border border-black p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/10 blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ccff00] uppercase mb-6 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Target className="w-3.5 h-3.5" />
                <span>{t.goalEyebrow}</span>
              </div>

              <blockquote
                className={`text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-8 ${
                  isTamil ? 'tamil-font' : 'display-font'
                }`}
              >
                "{t.goalText}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <span className="text-[#ccff00] font-bold tracking-wider">SYRIL INFOTECH STRATEGY</span>
              <span className="text-slate-300 font-medium">NO ONE-SIZE-FITS-ALL</span>
            </div>
          </div>

          {/* 3 Metric Pillars - Crisp Light Cards with Neon Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-all duration-300 flex items-center gap-5 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 rounded-xl bg-black text-[#ccff00] flex items-center justify-center shrink-0 shadow-sm">
                <Layers className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl font-mono font-black text-slate-950 tracking-tight">
                  {t.stat1Number}
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-0.5">
                  {t.stat1Label}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-all duration-300 flex items-center gap-5 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 rounded-xl bg-[#ccff00] text-black flex items-center justify-center shrink-0 shadow-sm font-black">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl font-mono font-black text-slate-950 tracking-tight">
                  {t.stat2Number}
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-0.5">
                  {t.stat2Label}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-all duration-300 flex items-center gap-5 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 rounded-xl bg-black text-[#ccff00] flex items-center justify-center shrink-0 shadow-sm">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl font-mono font-black text-slate-950 tracking-tight">
                  {t.stat3Number}
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-0.5">
                  {t.stat3Label}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Centered WhatsApp Contact Button at About Section End (Light Background -> Black button) */}
        <div className="mt-14 sm:mt-16 text-center">
          <SectionContactButton currentLang={currentLang} theme="light" />
        </div>

      </div>
    </section>
  );
};
