import { AlertCircle, CheckCircle, Shield, FileText, ArrowRight } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { SectionContactButton } from './SectionContactButton';

interface PricingTransparencySectionProps {
  currentLang: Language;
  t: TranslationContent['transparency'];
  heroT: TranslationContent['hero'];
}

export const PricingTransparencySection: React.FC<PricingTransparencySectionProps> = ({
  currentLang,
  t,
  heroT,
}) => {
  const isTamil = currentLang === 'ta';

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#09090c] border-b border-white/[0.08] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#ccff00]/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ccff00] uppercase mb-4">
            <Shield className="w-4 h-4" />
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
            {t.intro}
          </p>
        </div>

        {/* 2-Column Grid: Pricing Summary Box + Essential Transparency Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: ₹10,749 Pricing Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#121217] border border-white/10 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#ccff00]/40 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ccff00]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#ccff00] text-black text-xs font-mono font-bold uppercase tracking-wider mb-4">
                {heroT.diwaliSpecial}
              </div>

              <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                {heroT.packageTitle}
              </div>

              <div className="text-5xl sm:text-6xl font-black font-mono text-white tracking-tight my-2">
                {heroT.price}
              </div>

              <div className="text-xs font-bold text-[#ccff00] uppercase tracking-widest font-mono">
                {heroT.pricePeriod}
              </div>

              <div className="h-[1px] bg-white/10 my-6" />

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#ccff00] shrink-0" />
                  <span>{heroT.noHiddenCharges}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#ccff00] shrink-0" />
                  <span>{heroT.noCommitment}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#ccff00] shrink-0" />
                  <span>{heroT.webDiscountPill}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-slate-500">
              <span className="text-[#ccff00]">{t.guaranteeTitle}: </span>
              <span>{t.guaranteeText}</span>
            </div>
          </div>

          {/* Right Column: Required Legal & Operational Transparency Points */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0f0f14] border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">
                <FileText className="w-4 h-4 text-[#ccff00]" />
                <span>{t.termsTitle}</span>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] text-xs font-mono font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {t.term1}
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] text-xs font-mono font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {t.term2}
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] text-xs font-mono font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {t.term3}
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#14141c] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-[#ccff00] shrink-0" />
              <span>
                All services and deliverables are customized to fit your exact business goals before work starts.
              </span>
            </div>
          </div>

        </div>

        {/* Centered WhatsApp Contact Button at Pricing & Transparency Section End (Dark Background -> White button) */}
        <div className="mt-14 sm:mt-16 text-center">
          <SectionContactButton currentLang={currentLang} theme="dark" />
        </div>

      </div>
    </section>
  );
};
