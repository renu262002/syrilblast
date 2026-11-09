import { Percent, Check, ShieldCheck, ArrowRight, Sparkles, Code2, Globe } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { SectionContactButton } from './SectionContactButton';

interface WebsiteDiscountSectionProps {
  currentLang: Language;
  t: TranslationContent['discount'];
}

export const WebsiteDiscountSection: React.FC<WebsiteDiscountSectionProps> = ({
  currentLang,
  t,
}) => {
  const isTamil = currentLang === 'ta';

  return (
    <section id="discount" className="relative py-24 lg:py-32 bg-[#070709] border-b border-white/[0.08] overflow-hidden">
      {/* Background Neon Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ccff00]/[0.05] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ccff00] uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{t.eyebrow}</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 ${
              isTamil ? 'tamil-font' : 'display-font'
            }`}
          >
            {t.headingMain}{' '}
            <span className="text-[#ccff00] drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]">
              {t.headingHighlight}
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed ${
              isTamil ? 'tamil-font' : ''
            }`}
          >
            {t.subheading}
          </p>
        </div>

        {/* 25% OFF Hero Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#121217] via-[#16161f] to-[#121217] border border-[#ccff00]/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(204,255,0,0.15)] relative overflow-hidden mb-16">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ccff00]/[0.12] rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Giant 25% OFF Graphic */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ccff00]/15 border border-[#ccff00]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#ccff00] mb-4">
                <Percent className="w-3.5 h-3.5" />
                <span>{t.featureTag}</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-7xl sm:text-8xl font-black font-mono tracking-tight text-[#ccff00] drop-shadow-[0_0_30px_rgba(204,255,0,0.4)]">
                  {t.discountPercent}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                  {t.discountLabel}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 uppercase tracking-wider">
                {t.discountSublabel}
              </p>
            </div>

            {/* Right Col: Details */}
            <div className="md:col-span-7 flex flex-col items-start border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] mb-2">
                <Globe className="w-4 h-4" />
                <span className="font-bold uppercase tracking-widest">MODERN RESPONSIVE SITES</span>
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight ${
                  isTamil ? 'tamil-font' : 'display-font'
                }`}
              >
                {t.cardHeading}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {t.cardDesc}
              </p>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs font-medium text-slate-300 w-full flex items-center gap-3">
                <Code2 className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>{t.cardHighlight}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Supporting Advantages: No Hidden Charges & No Long-Term Commitment */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ccff00] uppercase">
              {t.benefitsTitle}
            </span>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight ${
                isTamil ? 'tamil-font' : 'display-font'
              }`}
            >
              {t.benefitsHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Advantage 1 */}
            <div className="p-7 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] shrink-0 mt-1">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h4
                  className={`text-lg font-bold text-white mb-2 leading-snug ${
                    isTamil ? 'tamil-font' : 'display-font'
                  }`}
                >
                  {t.benefit1Title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t.benefit1Desc}
                </p>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="p-7 rounded-2xl bg-[#0f0f14] border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h4
                  className={`text-lg font-bold text-white mb-2 leading-snug ${
                    isTamil ? 'tamil-font' : 'display-font'
                  }`}
                >
                  {t.benefit2Title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t.benefit2Desc}
                </p>
              </div>
            </div>

          </div>

          {/* Confidence Callout */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#121812] to-[#0d120d] border border-[#00ff66]/30 text-center">
            <h4
              className={`text-xl sm:text-2xl font-bold text-white mb-2 leading-snug ${
                isTamil ? 'tamil-font' : 'display-font'
              }`}
            >
              {t.confidenceHeading}
            </h4>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              {t.confidenceSub}
            </p>
          </div>

          {/* Centered WhatsApp Contact Button at Website Discount Section End (Dark Background -> White button) */}
          <div className="mt-14 sm:mt-16 text-center">
            <SectionContactButton currentLang={currentLang} theme="dark" />
          </div>

        </div>

      </div>
    </section>
  );
};
