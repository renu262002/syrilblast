import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Eye, ZoomIn, ZoomOut, FileText, Check } from 'lucide-react';
import { downloadBrochureFile } from '../utils/downloadBrochure';
import { triggerNeonBurst } from './BurstEffect';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLanguage?: 'en' | 'ta';
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  initialLanguage = 'en',
}) => {
  // 1-indexed pages (1..6)
  // Pages 1-3: English, Pages 4-6: Tamil
  const [currentPage, setCurrentPage] = useState<number>(initialLanguage === 'ta' ? 4 : 1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(initialLanguage === 'ta' ? 4 : 1);
      setZoomLevel(100);
    }
  }, [isOpen, initialLanguage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentPage < 6) setCurrentPage((p) => p + 1);
      if (e.key === 'ArrowLeft' && currentPage > 1) setCurrentPage((p) => p - 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, onClose]);

  if (!isOpen) return null;

  const handleDownload = async (e: React.MouseEvent) => {
    triggerNeonBurst(e);
    setIsDownloading(true);
    await downloadBrochureFile('Syril_Infotech_Diwali_Blast_Package.pdf');
    setIsDownloading(false);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const pageTitles = [
    'Page 1 · English Cover & Pricing (₹10,749)',
    'Page 2 · English Process (Steps 01 - 05)',
    'Page 3 · English Services & 25% Off Benefit',
    'Page 4 · தமிழ் அட்டை & கட்டணம் (₹10,749)',
    'Page 5 · தமிழ் செயல்முறை (படிகள் 01 - 05)',
    'Page 6 · தமிழ் சேவைகள் & 25% தள்ளுபடி',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl h-[90vh] bg-[#0c0c10] border border-white/20 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#121218]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ccff00]/15 flex items-center justify-center text-[#ccff00]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Syril Infotech Brochure Viewer
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                {pageTitles[currentPage - 1]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            
            {/* Direct Download Button */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#ccff00] hover:bg-[#b8f000] text-black text-xs font-bold uppercase tracking-wider shadow-neon-sm transition-all cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>{isDownloading ? 'Saving...' : 'Download PDF'}</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Second Toolbar: Pagination & Quick Jump */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-2 border-b border-white/5 bg-[#09090c] text-xs">
          
          {/* Language Shortcuts */}
          <div className="flex items-center gap-1 font-mono">
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                currentPage <= 3 ? 'bg-[#ccff00]/20 text-[#ccff00] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              English (P 1-3)
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setCurrentPage(4)}
              className={`px-2.5 py-1 rounded text-xs transition-colors tamil-font ${
                currentPage >= 4 ? 'bg-[#ccff00]/20 text-[#ccff00] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              தமிழ் (P 4-6)
            </button>
          </div>

          {/* Page Counter & Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-slate-300 font-bold px-2">
              Page {currentPage} of 6
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(6, p + 1))}
              disabled={currentPage === 6}
              className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <button
              onClick={() => setZoomLevel((z) => Math.max(70, z - 15))}
              className="p-1 hover:text-white"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] w-10 text-center">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(160, z + 15))}
              className="p-1 hover:text-white"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Central Page Viewer */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#070709] relative">
          <div
            style={{ width: `${zoomLevel}%`, maxWidth: '580px' }}
            className="transition-all duration-150 shadow-2xl rounded-lg overflow-hidden border border-white/10"
          >
            <img
              src={`/brochure/page_${currentPage}.png`}
              alt={`Syril Infotech Brochure - Page ${currentPage}`}
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Bottom Bar: Thumbnail Strip */}
        <div className="px-4 py-2 border-t border-white/10 bg-[#0e0e12] flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((pg) => (
              <button
                key={pg}
                onClick={() => setCurrentPage(pg)}
                className={`relative px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  currentPage === pg
                    ? 'bg-[#ccff00] text-black font-bold shadow-neon-sm'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{pg <= 3 ? `EN ${pg}` : `TA ${pg - 3}`}</span>
              </button>
            ))}
          </div>

          <div className="text-right text-[11px] font-mono text-slate-400 hidden sm:block">
            Use ← → arrows to turn pages · Verified 100% clean PDF
          </div>
        </div>

      </div>
    </div>
  );
};
