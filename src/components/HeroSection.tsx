import React, { useState } from 'react';
import { ArrowUpRight, Download, MessageSquare, Check, Sparkles, Shield, Clock, Eye } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { Hero3DScene } from './Hero3DScene';
import { CountdownTimer } from './CountdownTimer';
import { triggerNeonBurst } from './BurstEffect';
import { downloadBrochureFile } from '../utils/downloadBrochure';
import { SectionContactButton } from './SectionContactButton';

interface HeroSectionProps {
  currentLang: Language;
  t: TranslationContent['hero'];
  countdownT: TranslationContent['countdown'];
  isExpired: boolean;
  onOpenBrochure: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  t,
  countdownT,
  isExpired,
  onOpenBrochure,
}) => {
  const isTamil = currentLang === 'ta';
  const [downloading, setDownloading] = useState(false);

  const handleStartGrowingClick = (e: React.MouseEvent) => {
    triggerNeonBurst(e);
    const target = document.getElementById('final-cta') || document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    triggerNeonBurst(e);
    setDownloading(true);
    await downloadBrochureFile('Syril_Infotech_Diwali_Blast_Package.pdf');
    setDownloading(false);
  };

  const whatsappMessage = isTamil
    ? encodeURIComponent(
        'வணக்கம் Syril Infotech, தீபாவளி பிளாஸ்ட் பேக்கேஜ் (₹10,749) பற்றி மேலும் விவரங்கள் அறிய விரும்புகிறேன்.'
      )
    : encodeURIComponent(
        'Hi Syril Infotech, I am interested in the Diwali Blast Package (₹10,749). Please share more details.'
      );

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070709] border-b border-white/[0.08] pt-8 pb-16 lg:py-24">
      {/* 3D Interactive Three.js Background Canvas */}
      <Hero3DScene className="opacity-70 md:opacity-90" />

      {/* Futuristic Background Mesh & Glow Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ccff00]/[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT (COVERS 7 COLS ON DESKTOP) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Syril Infotech Official Monogram & Brand Lockup */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#121217] border border-white/10 mb-6">
              <img
                src="/syril_logo_preview.png"
                alt="Syril Infotech"
                className="h-5 w-auto object-contain"
              />
              <span className="text-xs font-mono uppercase tracking-widest text-[#ccff00]">
                {t.diwaliSpecial}
              </span>
            </div>

            {/* Sub-Eyebrow */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-slate-400 mb-3">
              {t.subEyebrow}
            </p>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] ${
                isTamil ? 'tamil-font' : 'display-font'
              }`}
            >
              <span className="block">{t.headlinePart1}</span>
              <span className="text-[#ccff00] drop-shadow-[0_0_35px_rgba(204,255,0,0.4)]">
                {t.headlineHighlight}
              </span>
            </h1>

            {/* Approved PDF Intro copy */}
            <p
              className={`text-base sm:text-lg text-slate-300 font-medium max-w-2xl mb-4 leading-relaxed ${
                isTamil ? 'tamil-font' : ''
              }`}
            >
              {t.intro}
            </p>

            <p
              className={`text-sm sm:text-base text-slate-400 max-w-xl mb-8 leading-relaxed ${
                isTamil ? 'tamil-font' : ''
              }`}
            >
              {t.subIntro}
            </p>

            {/* Prominent Offer Deadline Notice */}
            <div
              className={`w-full max-w-xl p-3.5 rounded-xl border mb-8 flex items-center gap-3 transition-all ${
                isExpired
                  ? 'bg-red-950/30 border-red-500/40 text-red-200'
                  : 'bg-[#0f120e] border-[#ccff00]/40 text-[#ccff00] shadow-neon-sm'
              }`}
            >
              <Clock className="w-5 h-5 shrink-0" />
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                {isExpired ? t.deadlineExpired : t.deadlineNotice}
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              {!isExpired ? (
                <button
                  onClick={handleStartGrowingClick}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#ccff00] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#b8f000] shadow-neon hover:shadow-[0_0_45px_rgba(204,255,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  <span>{t.getStartedBtn}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </button>
              ) : (
                <a
                  href="#final-cta"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-800 text-white font-extrabold text-sm uppercase tracking-wider hover:bg-slate-700 transition-all"
                >
                  <span>{t.taglineHighlight}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </a>
              )}

              {/* Reliable Blob PDF Download */}
              <button
                onClick={handleDownloadClick}
                disabled={downloading}
                type="button"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#14141a] hover:bg-[#1a1a24] text-white font-bold text-sm uppercase tracking-wider border border-white/15 hover:border-[#ccff00]/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-neon-sm"
              >
                <Download className="w-4 h-4 text-[#ccff00]" />
                <span>{downloading ? 'Downloading...' : t.downloadBrochureBtn}</span>
              </button>

              {/* In-app Brochure Viewer trigger */}
              <button
                onClick={(e) => {
                  triggerNeonBurst(e);
                  onOpenBrochure();
                }}
                type="button"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-4 rounded-xl bg-[#14141a]/60 hover:bg-[#1a1a24] text-slate-300 hover:text-white font-semibold text-xs uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                title="Preview Brochure Pages"
              >
                <Eye className="w-4 h-4 text-[#ccff00]" />
                <span className="hidden sm:inline">Preview</span>
              </button>
            </div>

            {/* Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#ccff00]/15 flex items-center justify-center text-[#ccff00]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{t.noHiddenCharges}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#ccff00]/15 flex items-center justify-center text-[#ccff00]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{t.noCommitment}</span>
              </div>
              <div className="flex items-center gap-2 text-[#ccff00]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.webDiscountPill}</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: PRICE HERO CARD & LIVE COUNTDOWN (5 COLS ON DESKTOP) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:max-w-none">
            
            {/* Signature Fluorescent Lime Price Card (Faithful to approved PDF page 1 & 4) */}
            <div className="relative rounded-3xl bg-[#ccff00] text-black p-8 sm:p-10 shadow-[0_0_50px_rgba(204,255,0,0.3)] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              {/* Decorative background watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <Sparkles className="w-48 h-48 text-black" />
              </div>

              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black text-[#ccff00] px-3 py-1 rounded-md">
                  {t.packageTitle}
                </span>
                <span className="text-xs font-bold text-black/70 uppercase">
                  Syril Infotech
                </span>
              </div>

              {/* Main Price */}
              <div className="my-3">
                <div className="text-6xl sm:text-7xl font-extrabold tracking-tight font-mono">
                  {t.price}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-black uppercase tracking-widest text-black/90">
                  {t.pricePeriod}
                </div>
                <div className="text-xs font-semibold text-black/75 mt-0.5">
                  {t.priceSub}
                </div>
              </div>

              {/* Card Divider */}
              <div className="h-[1.5px] bg-black/15 my-6" />

              {/* Highlights Inside Card */}
              <div className="space-y-2 text-xs sm:text-sm font-bold text-black">
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>{t.noHiddenCharges}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>{t.noCommitment}</span>
                </div>
                <div className="mt-3 p-2.5 rounded-lg bg-black/10 text-xs font-bold">
                  {t.webDiscountPill}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[11px] font-mono font-semibold uppercase text-black/70">
                <span>SYRILINFOTECH.COM</span>
                <span>01 / 03</span>
              </div>
            </div>

            {/* Live Real-Time Countdown Component */}
            <CountdownTimer t={countdownT} variant="card" />

            {/* Confidence Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium py-1">
              <Shield className="w-4 h-4 text-[#ccff00]" />
              <span>Full agency support · No lock-in contracts</span>
            </div>

          </div>

        </div>

        {/* BOTTOM TAGLINE STRIP */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p
            className={`text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-slate-400 ${
              isTamil ? 'tamil-font' : ''
            }`}
          >
            {t.tagline}{' '}
            <span className="text-[#ccff00] font-bold underline decoration-[#ccff00]/40 underline-offset-4">
              {t.taglineHighlight}
            </span>
          </p>

          {/* Centered WhatsApp Contact Button at Hero Section End (Dark Background -> White button) */}
          <div className="mt-10 sm:mt-12">
            <SectionContactButton currentLang={currentLang} theme="dark" />
          </div>
        </div>

      </div>
    </section>
  );
};
