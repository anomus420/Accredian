"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { ClipboardCheck, Route, GraduationCap } from "lucide-react";

const stepIcons = [ClipboardCheck, Route, GraduationCap];

export default function HowItWorks() {
  const { title, subtext, items } = siteContent.howItWorks;

  return (
    <section
      id="how-it-works"
      className="py-24 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            kicker="Process Flow"
            heading={title}
            subheading={subtext}
            accent="indigo"
            className="mb-20"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];

            return (
              <RevealOnScroll
                key={item.id}
                delay={idx * 0.12}
                yOffset={25}
              >
                <div
                  className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-indigo/20 transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  {/* Oversized Step Number Background */}
                  <span
                    className="absolute -right-4 -bottom-6 text-8xl font-black text-slate-100 dark:text-slate-950/40 select-none group-hover:scale-110 transition-transform duration-300"
                  >
                    0{item.id}
                  </span>

                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-brand-indigo/5 text-brand-indigo flex items-center justify-center mb-6 group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-300 relative z-10">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Step Title */}
                  <h4 className="text-base font-bold text-slate-950 dark:text-white mb-3 relative z-10">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xs relative z-10">
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
