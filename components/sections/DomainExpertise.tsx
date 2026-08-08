"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { Lightbulb, Sparkles, TrendingUp, Database, BarChart2, Globe, Wallet } from "lucide-react";

const domainIcons = [Lightbulb, Sparkles, TrendingUp, Database, BarChart2, Globe, Wallet];

export default function DomainExpertise() {
  const { title, subtext, items } = siteContent.domainExpertise;

  return (
    <section
      id="domains"
      className="py-24 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            kicker="Domain Intelligence"
            heading={title}
            subheading={subtext}
            accent="coral"
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => {
            const Icon = domainIcons[idx % domainIcons.length];

            return (
              <RevealOnScroll
                key={item.id}
                delay={idx * 0.08}
                yOffset={20}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] flex"
              >
                <div
                  className="group flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900/50 dark:backdrop-blur-md border border-slate-200/80 dark:border-slate-800/50 shadow-sm hover:shadow-md hover:border-brand-coral/35 dark:hover:border-brand-coral/35 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-brand-coral/5 transition-all duration-300 cursor-default relative overflow-hidden"
                >
                  {/* Spotlight Center Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-[circle_at_center,rgba(255,122,89,0.06)_0%,transparent_60%] pointer-events-none" />

                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-brand-coral/5 text-brand-coral flex items-center justify-center mb-6 group-hover:bg-brand-coral/10 group-hover:scale-110 transition-all duration-300 relative z-10">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-slate-950 dark:text-white mb-2 group-hover:text-brand-coral transition-colors duration-300">
                    {item.title}
                  </h4>

                  {/* Description */}
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
