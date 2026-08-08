"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { Award, Presentation, Users } from "lucide-react";

const statIcons = [Users, Presentation, Award];

export default function Stats() {
  const { title, subtext, items } = siteContent.stats;

  return (
    <section
      id="stats"
      className="relative py-24 bg-[#f1fcf8] dark:bg-[#0a111a] text-slate-900 dark:text-[#F5F6FA] overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Teal Radial glow to give that 5% teal tint */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(20,198,165,0.04),transparent_70%]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <SectionHeading
            kicker="Proven Success"
            heading={title}
            subheading={subtext}
            accent="teal"
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => {
            const Icon = statIcons[idx % statIcons.length];

            return (
              <RevealOnScroll key={idx} delay={idx * 0.1} yOffset={20}>
                <div
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 hover:border-brand-teal/30 dark:hover:border-brand-teal/30 shadow-md hover:shadow-xl hover:shadow-brand-teal/5 dark:hover:shadow-brand-teal/5 transition-all duration-300 group relative"
                >
                  {/* Icon Badge */}
                  <div className="p-4 rounded-2xl bg-brand-teal/5 text-brand-teal mb-6 group-hover:bg-brand-teal/10 transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Animated Number Counter */}
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-brand-teal to-brand-mint bg-clip-text text-transparent mb-3 tracking-tight">
                    <AnimatedCounter value={item.number} suffix={item.suffix} />
                  </div>

                  {/* Description */}
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
