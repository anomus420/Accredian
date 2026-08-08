import React from "react";

interface LogoMarqueeProps {
  logos: string[];
}

export default function LogoMarquee({ logos }: LogoMarqueeProps) {
  // Duplicate elements to ensure a continuous loop without whitespace gaps
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-900">
      {/* Left and Right Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-16 md:gap-28 items-center">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-lg md:text-2xl font-black tracking-wider text-slate-400/70 dark:text-slate-600/70 hover:text-brand-indigo dark:hover:text-brand-indigo transition-colors duration-300 select-none py-2"
          >
            <span className="italic font-serif opacity-70 hover:opacity-100">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
