import React, { useState } from 'react';
import { Search, MonitorCheck, Lightbulb, ClipboardList, Rocket, ArrowRight } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { SectionContactButton } from './SectionContactButton';

interface ProcessSectionProps {
  currentLang: Language;
  t: TranslationContent['process'];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ currentLang, t }) => {
  const isTamil = currentLang === 'ta';
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Search, MonitorCheck, Lightbulb, ClipboardList, Rocket];

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#070709] border-b border-white/[0.08] overflow-hidden">
      {/* Background Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#ccff00]/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ccff00] uppercase mb-4">
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

          <div className="w-16 h-1 bg-[#ccff00] mx-auto mt-6 rounded-full shadow-neon-sm" />
        </div>

        {/* Process Steps Timeline (Grid of 5 Steps) */}
        <div className="relative">
          
          {/* Subtle Horizontal Connector Bar on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-transparent via-[#ccff00]/40 to-transparent pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {t.steps.map((step, index) => {
              const IconComponent = stepIcons[index] || Search;
              const isSelected = activeStep === index;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-[#14141a] border-[#ccff00] shadow-neon-sm -translate-y-2'
                      : 'bg-[#0f0f14]/80 border-white/10 hover:border-[#ccff00]/50 hover:bg-[#121218] hover:-translate-y-1'
                  }`}
                >
                  {/* Top Step Pill & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#ccff00] text-black shadow-neon-sm'
                            : 'bg-[#181822] text-[#ccff00] group-hover:bg-[#ccff00] group-hover:text-black border border-white/10'
                        }`}
                      >
                        <IconComponent className="w-5 h-5 stroke-[2]" />
                      </div>

                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                          isSelected
                            ? 'bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/40'
                            : 'bg-white/5 text-slate-400 group-hover:text-white'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-base font-bold text-white mb-3 group-hover:text-[#ccff00] transition-colors leading-snug ${
                        isTamil ? 'tamil-font' : 'display-font'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Active Step Indicator Footer */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>STEP {step.number}</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isSelected ? 'text-[#ccff00] translate-x-1' : 'text-slate-600'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Process Footer Signoff */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#121217] border border-white/10 text-xs font-mono tracking-widest uppercase text-slate-300">
            <span className="text-[#ccff00]">✦</span>
            <span>{t.footerText}</span>
            <span className="text-[#ccff00]">✦</span>
          </div>
        </div>

        {/* Centered WhatsApp Contact Button at Process Section End (Dark Background -> White button) */}
        <div className="mt-12 sm:mt-14 text-center">
          <SectionContactButton currentLang={currentLang} theme="dark" />
        </div>

      </div>
    </section>
  );
};
