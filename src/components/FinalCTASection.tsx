import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Download, ArrowUpRight, Globe, MapPin, Sparkles, Clock, AlertTriangle, Eye, Loader2 } from 'lucide-react';
import { Language, TranslationContent } from '../data/translations';
import { triggerNeonBurst } from './BurstEffect';
import { downloadBrochureFile } from '../utils/downloadBrochure';
import { SectionContactButton } from './SectionContactButton';

interface FinalCTASectionProps {
  currentLang: Language;
  t: TranslationContent['finalCta'];
  deadlineNotice: string;
  isExpired: boolean;
  onOpenBrochure?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  currentLang,
  t,
  deadlineNotice,
  isExpired,
  onOpenBrochure,
}) => {
  const isTamil = currentLang === 'ta';
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    triggerNeonBurst(e);
    setDownloading(true);
    try {
      await downloadBrochureFile('Syril_Infotech_Diwali_Blast_Package.pdf');
    } finally {
      setDownloading(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    triggerNeonBurst(e);
  };

  const whatsappMessage = isTamil
    ? encodeURIComponent(
        'வணக்கம் Syril Infotech, தீபாவளி பிளாஸ்ட் பேக்கேஜ் (₹10,749) சலுகை பற்றி பேச விரும்புகிறேன்.'
      )
    : encodeURIComponent(
        'Hi Syril Infotech, I would like to enquire about the Diwali Blast Package (₹10,749).'
      );

  return (
    <section id="final-cta" className="relative py-24 lg:py-36 bg-white text-slate-900 border-t border-slate-200 overflow-hidden text-center">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ccff00]/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-[#ccff00] border border-black mb-6 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.eyebrow}</span>
        </div>

        {/* Main Title */}
        <h2
          className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.05] mb-6 uppercase ${
            isTamil ? 'tamil-font' : 'display-font'
          }`}
        >
          {t.headingMain}{' '}
          <span className="block mt-2">
            <span className="relative inline-block text-black bg-[#ccff00] px-4 py-1 rounded-xl shadow-sm">
              {t.headingHighlight}
            </span>
          </span>
        </h2>

        {/* Intro */}
        <div className="max-w-2xl mx-auto mb-12">
          <p
            className={`text-base sm:text-lg font-bold text-slate-900 mb-2 leading-relaxed ${
              isTamil ? 'tamil-font' : ''
            }`}
          >
            {t.introLead}
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t.introBody}
          </p>
        </div>

        {/* Central Festive Offer Box - High Impact Dark Agency Box with Glowing Price */}
        <div className="max-w-xl mx-auto rounded-3xl bg-[#09090d] border border-black p-8 sm:p-10 shadow-2xl mb-12 relative overflow-hidden text-center">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ccff00]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#ccff00] mb-2">
            {t.offerBadge}
          </div>

          <div
            className={`text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3 ${
              isTamil ? 'tamil-font' : 'display-font'
            }`}
          >
            {t.packageName}
          </div>

          <div className="text-6xl sm:text-7xl font-black font-mono text-[#ccff00] tracking-tight my-2 drop-shadow-[0_0_25px_rgba(204,255,0,0.5)]">
            {t.price}
          </div>

          <div className="inline-block mt-1 px-4 py-1 rounded bg-[#ccff00] text-black text-xs font-mono font-black uppercase tracking-widest shadow-sm">
            {t.pricePeriod}
          </div>

          {/* Offer Deadline Banner */}
          <div
            className={`mt-6 p-3.5 rounded-xl border text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${
              isExpired
                ? 'bg-red-950/40 border-red-500/40 text-red-300'
                : 'bg-[#181d14] border-[#ccff00]/40 text-[#ccff00]'
            }`}
          >
            {isExpired ? (
              <>
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                <span>SPECIAL OFFER PERIOD HAS ENDED</span>
              </>
            ) : (
              <>
                <Clock className="w-4 h-4 shrink-0" />
                <span>{deadlineNotice}</span>
              </>
            )}
          </div>
        </div>

        {/* Ready Heading */}
        <h3
          className={`text-2xl sm:text-3xl font-extrabold text-slate-950 uppercase tracking-tight mb-8 ${
            isTamil ? 'tamil-font' : 'display-font'
          }`}
        >
          {t.readyHeading}{' '}
          <span className="relative inline-block text-black bg-[#ccff00] px-2.5 py-0.5 rounded-md shadow-sm">
            {t.readyHighlight}
          </span>
        </h3>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          
          {/* Functional Call Now Button */}
          <a
            href="tel:+917010571866"
            onClick={handleButtonClick}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-black text-white hover:bg-slate-900 font-extrabold text-sm uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#ccff00] stroke-[2.5]" />
            <span>{t.callNowBtn}</span>
          </a>

          {/* Functional Email Button */}
          <a
            href="mailto:info@syrilinfotech.com?subject=Diwali%20Blast%20Package%20Enquiry"
            onClick={handleButtonClick}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm uppercase tracking-wider border border-slate-300 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-slate-700" />
            <span>{t.emailBtn}</span>
          </a>

          {/* Working High-Reliability Brochure Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:opacity-60"
            title="Download Syril Infotech Diwali Blast Brochure PDF"
          >
            {downloading ? (
              <Loader2 className="w-4 h-4 text-[#ccff00] animate-spin" />
            ) : (
              <Download className="w-4 h-4 text-[#ccff00]" />
            )}
            <span>{downloading ? (isTamil ? 'பதிவிறக்குகிறது...' : 'Downloading...') : t.downloadBtn}</span>
          </button>

          {/* Interactive In-App PDF Preview Button */}
          {onOpenBrochure && (
            <button
              type="button"
              onClick={(e) => {
                triggerNeonBurst(e);
                onOpenBrochure();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm uppercase tracking-wider border border-slate-300 hover:border-black hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              title="Preview Brochure Online"
            >
              <Eye className="w-4 h-4 text-black" />
              <span>{isTamil ? 'சிற்றேடு காண்க' : 'Preview Online'}</span>
            </button>
          )}

        </div>

        {/* Direct Phone Number Link */}
        <p className="text-sm text-slate-600 mb-8 font-mono">
          <span>{t.directCallLabel} </span>
          <a
            href="tel:+917010571866"
            className="text-slate-950 hover:text-black font-extrabold underline decoration-black/40 transition-colors"
          >
            +91 7010571866
          </a>
        </p>

        {/* Motivational Together Callout */}
        <div
          className={`text-3xl sm:text-4xl font-extrabold text-slate-950 uppercase tracking-wide mb-14 ${
            isTamil ? 'tamil-font' : 'display-font'
          }`}
        >
          <span className="relative inline-block text-black bg-[#ccff00] px-4 py-1 rounded-xl shadow-sm">
            {t.togetherText}
          </span>
        </div>

        {/* Contact Info Grid */}
        <div className="pt-10 border-t border-slate-200 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Website */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-colors shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-black uppercase tracking-wider mb-2">
                <Globe className="w-3.5 h-3.5 text-black" />
                <span>{t.websiteLabel}</span>
              </div>
              <a
                href="https://syrilinfotech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-900 hover:text-black transition-colors break-all flex items-center gap-1"
              >
                <span>syrilinfotech.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-colors shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-black uppercase tracking-wider mb-2">
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>{t.emailLabel}</span>
              </div>
              <a
                href="mailto:info@syrilinfotech.com"
                className="text-sm font-bold text-slate-900 hover:text-black transition-colors break-all"
              >
                info@syrilinfotech.com
              </a>
            </div>

            {/* Phone */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-colors shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-black uppercase tracking-wider mb-2">
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>{t.phoneLabel}</span>
              </div>
              <a
                href="tel:+917010571866"
                className="text-sm font-bold text-slate-900 hover:text-black transition-colors"
              >
                +91 7010571866
              </a>
            </div>

            {/* Office */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-colors shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-black uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-black" />
                <span>{t.addressLabel}</span>
              </div>
              <span className="text-sm font-semibold text-slate-800">
                Tenkasi, Tamil Nadu, India
              </span>
            </div>

          </div>
        </div>

        {/* Centered WhatsApp Contact Button at Final Section End (Light Background -> Black button) */}
        <div className="mt-14 sm:mt-16 text-center">
          <SectionContactButton currentLang={currentLang} theme="light" />
        </div>

        {/* Disclaimer Note */}
        <p className="mt-10 text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed">
          {t.disclaimer}
        </p>

      </div>
    </section>
  );
};
