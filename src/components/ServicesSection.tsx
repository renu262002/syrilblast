import React, { useRef } from 'react';
import { Megaphone, MousePointerClick, MapPin, Store, Users, Palette, Info, ArrowUpRight, Sparkles } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { SectionContactButton } from './SectionContactButton';

interface ServicesSectionProps {
  currentLang: Language;
  t: TranslationContent['services'];
}

// Interactive 3D Tilt Card Component on Light Background
const ServiceCard3D: React.FC<{
  item: TranslationContent['services']['items'][0];
  index: number;
  icon: React.ElementType;
  isTamil: boolean;
}> = ({ item, index, icon: IconComponent, isTamil }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

    if (sheenRef.current) {
      sheenRef.current.style.opacity = '1';
      sheenRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(204, 255, 0, 0.35), transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    if (sheenRef.current) {
      sheenRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
      className="group relative rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-black hover:bg-white p-7 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-colors duration-200"
    >
      {/* 3D Specular Sheen Layer */}
      <div
        ref={sheenRef}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-200"
      />

      {/* Top Header inside Card */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-13 h-13 rounded-xl bg-black text-[#ccff00] flex items-center justify-center group-hover:bg-[#ccff00] group-hover:text-black group-hover:shadow-md transition-all duration-300 shrink-0">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>

          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded group-hover:bg-black group-hover:text-[#ccff00] transition-colors">
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-extrabold text-slate-950 mb-3 group-hover:text-black transition-colors leading-snug ${
            isTamil ? 'tamil-font' : 'display-font'
          }`}
        >
          {item.title}
        </h3>

        {/* Exact Approved Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          {item.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-800 transition-colors">
        <span>0{index + 1} / 06</span>
        <div className="flex items-center gap-1 text-black font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <span className="text-[10px] uppercase tracking-wider">Explore</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-black" />
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, t }) => {
  const isTamil = currentLang === 'ta';

  const icons = [Megaphone, MousePointerClick, MapPin, Store, Users, Palette];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-[450px] h-[450px] bg-[#ccff00]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#ccff00] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-6 ${
              isTamil ? 'tamil-font' : 'display-font'
            }`}
          >
            {t.headingMain}{' '}
            <span className="relative inline-block text-black bg-[#ccff00] px-3 py-0.5 rounded-lg shadow-sm">
              {t.headingHighlight}
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed ${
              isTamil ? 'tamil-font' : ''
            }`}
          >
            {t.intro}
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {t.items.map((item, index) => (
            <ServiceCard3D
              key={item.id}
              item={item}
              index={index}
              icon={icons[index] || Megaphone}
              isTamil={isTamil}
            />
          ))}
        </div>

        {/* PDF Transparency Disclaimer Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-100 border border-slate-300 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-black text-[#ccff00] flex items-center justify-center shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono font-extrabold tracking-wider text-black uppercase mb-1">
              {t.disclaimerStrong}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {t.disclaimerText}
            </p>
          </div>
        </div>

        {/* Centered WhatsApp Contact Button at Services Section End (Light Background -> Black button) */}
        <div className="mt-14 sm:mt-16 text-center">
          <SectionContactButton currentLang={currentLang} theme="light" />
        </div>

      </div>
    </section>
  );
};
