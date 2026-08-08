"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { Award, Compass, Cpu, Layers, ShieldCheck, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const edgeIcons = [Target, Compass, Zap, Cpu, Layers, ShieldCheck, Award];

export default function AccredianEdge() {
  const { title, subtext, items } = siteContent.accredianEdge;

  return (
    <section
      id="edge"
      className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            kicker="Our Value Proposition"
            heading={title}
            subheading={subtext}
            accent="indigo"
            className="mb-20"
          />
        </RevealOnScroll>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative w-full mb-10">
          {/* Connector Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-[40px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-brand-indigo/35 via-brand-purple/35 to-brand-indigo/35 origin-left pointer-events-none"
          />

          {/* Timeline Grid */}
          <div className="grid grid-cols-7 gap-6 relative z-10">
            {items.map((item, idx) => {
              const Icon = edgeIcons[idx % edgeIcons.length];
              return (
                <RevealOnScroll
                  key={item.id}
                  delay={idx * 0.1}
                  yOffset={30}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Dot & Icon */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-md flex items-center justify-center text-brand-indigo hover:border-brand-indigo hover:scale-110 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <Icon className="h-7 w-7 group-hover:animate-pulse" />
                    </div>
                    {/* Floating Step Number */}
                    <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 text-[10px] font-extrabold leading-none">
                      0{item.id}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 px-2">
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-8 space-y-12 max-w-lg mx-auto">
          {/* Animated vertical connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-indigo/40 via-brand-purple/40 to-brand-indigo/40 origin-top pointer-events-none"
          />
          {items.map((item, idx) => {
            const Icon = edgeIcons[idx % edgeIcons.length];
            return (
              <RevealOnScroll
                key={item.id}
                delay={idx * 0.05}
                yOffset={15}
                className="relative"
              >
                {/* Vertical dot indicator */}
                <div className="absolute -left-[53px] top-1.5 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-indigo shadow-sm">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="absolute -bottom-2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-1 py-0.5 rounded text-[8px] font-black">
                    {item.id}
                  </span>
                </div>

                {/* Node card */}
                <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-900 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1.5">
                    {item.title}
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
