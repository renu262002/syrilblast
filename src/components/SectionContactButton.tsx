import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Language } from '../data/translations';
import { triggerNeonBurst } from './BurstEffect';

export interface SectionContactButtonProps {
  currentLang: Language;
  theme: 'dark' | 'light';
  className?: string;
}

export const SectionContactButton: React.FC<SectionContactButtonProps> = ({
  currentLang,
  theme,
  className = '',
}) => {
  const isTamil = currentLang === 'ta';

  // Exact prefilled WhatsApp message specified by the user
  const prefilledText =
    'Hello Syril Infotech, I am interested in your Diwali Blast Package (₹10,749). I would like to discuss the package details.';
  const whatsappUrl = `https://wa.me/917010571866?text=${encodeURIComponent(prefilledText)}`;

  // Exact button text specified by the user in both languages
  const buttonText = isTamil
    ? 'இந்த பேக்கேஜ் பற்றி பேச எங்களைத் தொடர்பு கொள்ளுங்கள்'
    : 'Contact us to discuss this package';

  const handleClick = (e: React.MouseEvent) => {
    triggerNeonBurst(e);
  };

  // Color logic strictly according to user specifications:
  // BLACK/DARK SECTIONS:
  // - Default background: WHITE (#FFFFFF)
  // - Default text: BLACK (#000000)
  // - On hover: Background NEON GREEN (#ccff00), text remains BLACK (#000000)
  // WHITE/LIGHT SECTIONS:
  // - Default background: BLACK (#000000)
  // - Default text: WHITE (#FFFFFF)
  // - On hover: Background NEON GREEN (#ccff00), text changes to BLACK (#000000)
  const variantStyles =
    theme === 'dark'
      ? 'bg-white text-black hover:bg-[#ccff00] hover:text-black border border-white/90 hover:border-[#ccff00] shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)]'
      : 'bg-black text-white hover:bg-[#ccff00] hover:text-black border border-black hover:border-black shadow-lg hover:shadow-[0_0_35px_rgba(204,255,0,0.4)]';

  const iconStyles =
    theme === 'dark'
      ? 'text-black group-hover:text-black'
      : 'text-[#ccff00] group-hover:text-black';

  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`group inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-4 sm:py-4.5 rounded-2xl font-extrabold text-sm sm:text-base tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] focus-visible:ring-offset-2 ${
          isTamil ? 'tamil-font' : 'display-font'
        } ${variantStyles}`}
        aria-label={buttonText}
        title={buttonText}
      >
        {/* WhatsApp Icon */}
        <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
          <MessageSquare className={`w-5 h-5 stroke-[2.5] ${iconStyles} transition-colors duration-300`} />
        </span>
        
        {/* Button Label */}
        <span className="text-center leading-snug">
          {buttonText}
        </span>
      </a>
    </div>
  );
};
