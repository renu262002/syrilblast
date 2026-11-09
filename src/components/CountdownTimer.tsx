import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface CountdownTimerProps {
  t: TranslationContent['countdown'];
  onExpiryChange?: (isExpired: boolean) => void;
  variant?: 'banner' | 'card' | 'compact';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  t,
  onExpiryChange,
  variant = 'card',
}) => {
  // Target: November 30, 2026, 23:59:59 IST (+05:30)
  const targetDate = new Date('2026-11-30T23:59:59+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        if (onExpiryChange) onExpiryChange(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
      if (onExpiryChange) onExpiryChange(false);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate, onExpiryChange]);

  if (timeLeft.isExpired) {
    return (
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-sm">
        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
        <span className="font-semibold tracking-wide uppercase">{t.expiredTitle}</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111115] border border-[#ccff00]/30 text-xs font-mono tabular-nums text-slate-300">
        <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
        <span className="font-semibold text-white">{timeLeft.days}d</span>
        <span className="text-slate-500">:</span>
        <span className="font-semibold text-white">{String(timeLeft.hours).padStart(2, '0')}h</span>
        <span className="text-slate-500">:</span>
        <span className="font-semibold text-white">{String(timeLeft.minutes).padStart(2, '0')}m</span>
        <span className="text-slate-500">:</span>
        <span className="font-semibold text-[#ccff00]">{String(timeLeft.seconds).padStart(2, '0')}s</span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="w-full bg-[#0d0d11] border-y border-[#ccff00]/20 py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-[#ccff00] font-semibold tracking-wider uppercase">
            <Clock className="w-4 h-4 shrink-0" />
            <span>{t.offerEndsOn}</span>
          </div>
          <div className="flex items-center gap-2 font-mono tabular-nums">
            <span className="px-2 py-0.5 rounded bg-[#16161c] border border-white/10 font-bold text-white">
              {timeLeft.days} <span className="text-[10px] text-slate-400 font-sans">{t.days}</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#16161c] border border-white/10 font-bold text-white">
              {String(timeLeft.hours).padStart(2, '0')} <span className="text-[10px] text-slate-400 font-sans">{t.hours}</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#16161c] border border-white/10 font-bold text-white">
              {String(timeLeft.minutes).padStart(2, '0')} <span className="text-[10px] text-slate-400 font-sans">{t.minutes}</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#16161c] border border-[#ccff00]/30 font-bold text-[#ccff00]">
              {String(timeLeft.seconds).padStart(2, '0')} <span className="text-[10px] text-[#ccff00]/70 font-sans">{t.seconds}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Card Variant
  return (
    <div className="p-4 rounded-xl bg-[#101014]/80 border border-white/10 backdrop-blur-sm shadow-xl">
      <div className="flex items-center justify-between gap-3 mb-3 text-xs text-slate-400 font-medium">
        <div className="flex items-center gap-1.5 text-[#ccff00]">
          <Clock className="w-3.5 h-3.5" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">{t.offerEndsOn}</span>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">IST</span>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center font-mono tabular-nums">
        <div className="p-2 rounded-lg bg-[#18181f] border border-white/5">
          <div className="text-xl md:text-2xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-[10px] uppercase text-slate-400 font-sans tracking-wider mt-0.5">{t.days}</div>
        </div>
        <div className="p-2 rounded-lg bg-[#18181f] border border-white/5">
          <div className="text-xl md:text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-[10px] uppercase text-slate-400 font-sans tracking-wider mt-0.5">{t.hours}</div>
        </div>
        <div className="p-2 rounded-lg bg-[#18181f] border border-white/5">
          <div className="text-xl md:text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-[10px] uppercase text-slate-400 font-sans tracking-wider mt-0.5">{t.minutes}</div>
        </div>
        <div className="p-2 rounded-lg bg-[#18181f] border border-[#ccff00]/30 shadow-neon-sm">
          <div className="text-xl md:text-2xl font-bold text-[#ccff00]">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-[10px] uppercase text-[#ccff00]/80 font-sans tracking-wider mt-0.5">{t.seconds}</div>
        </div>
      </div>
    </div>
  );
};
