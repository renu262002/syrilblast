/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { WebsiteDiscountSection } from './components/WebsiteDiscountSection';
import { PricingTransparencySection } from './components/PricingTransparencySection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { CountdownTimer } from './components/CountdownTimer';
import { BrochureModal } from './components/BrochureModal';
import { MessageSquare, Phone } from 'lucide-react';
import { triggerNeonBurst } from './components/BurstEffect';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('syril_diwali_lang');
      if (saved === 'ta' || saved === 'en') return saved;
    }
    return 'en';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('syril_diwali_lang', lang);
    }
  };

  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);

  const t = translations[currentLang];
  const isTamil = currentLang === 'ta';

  const whatsappMessage = isTamil
    ? encodeURIComponent(
        'வணக்கம் Syril Infotech, தீபாவளி பிளாஸ்ட் பேக்கேஜ் (₹10,749) பற்றி மேலும் விவரங்கள் அறிய விரும்புகிறேன்.'
      )
    : encodeURIComponent(
        'Hi Syril Infotech, I am interested in the Diwali Blast Package (₹10,749). Please share more details.'
      );

  return (
    <div className={`min-h-screen bg-[#070709] text-white selection:bg-[#ccff00] selection:text-black font-preset-space-grotesk ${isTamil ? 'tamil-font' : ''}`}>
      
      {/* Top Deadline Announcement Banner with Countdown */}
      <CountdownTimer
        t={t.countdown}
        variant="banner"
        onExpiryChange={setIsExpired}
      />

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        t={t.nav}
        isExpired={isExpired}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. HERO SECTION WITH 3D INTERACTIVE SCENE & PRICING CARD */}
        <HeroSection
          currentLang={currentLang}
          t={t.hero}
          countdownT={t.countdown}
          isExpired={isExpired}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 2. ABOUT THE PACKAGE */}
        <AboutSection
          currentLang={currentLang}
          t={t.about}
        />

        {/* 3. OUR PROCESS (5 STEPS TIMELINE) */}
        <ProcessSection
          currentLang={currentLang}
          t={t.process}
        />

        {/* 4. SERVICES AND BENEFITS (6 3D INTERACTIVE CARDS) */}
        <ServicesSection
          currentLang={currentLang}
          t={t.services}
        />

        {/* 5. WEBSITE DEVELOPMENT DISCOUNT (25% OFF) */}
        <WebsiteDiscountSection
          currentLang={currentLang}
          t={t.discount}
        />

        {/* 6. PRICING AND TRANSPARENCY */}
        <PricingTransparencySection
          currentLang={currentLang}
          t={t.transparency}
          heroT={t.hero}
        />

        {/* 7. FINAL CALL TO ACTION */}
        <FinalCTASection
          currentLang={currentLang}
          t={t.finalCta}
          deadlineNotice={t.hero.deadlineNotice}
          isExpired={isExpired}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />
      </main>

      {/* Interactive In-App Brochure Modal (All 6 Pages in English & Tamil) */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        initialLanguage={currentLang}
      />

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t.finalCta}
      />

      {/* Floating Bottom Quick Action Dock for Mobile Devices */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 sm:hidden">
        <a
          href="tel:+917010571866"
          onClick={(e) => triggerNeonBurst(e)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#16161c] border border-white/20 text-white shadow-xl active:scale-95 transition-transform"
          aria-label="Call Syril Infotech"
          title="Call Now"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={`https://wa.me/917010571866?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => triggerNeonBurst(e)}
          className="flex items-center justify-center w-13 h-13 rounded-full bg-[#ccff00] text-black shadow-neon active:scale-95 transition-transform"
          aria-label="WhatsApp Syril Infotech"
          title="WhatsApp Enquiry"
        >
          <MessageSquare className="w-6 h-6 stroke-[2.5]" />
        </a>
      </div>

    </div>
  );
}
