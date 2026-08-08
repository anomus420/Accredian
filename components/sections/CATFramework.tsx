"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { BookOpen, Award, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const catIcons = [BookOpen, Award, Wrench];
const catLetters = ["C", "A", "T"];

export default function CATFramework() {
  const { title, subtext, items } = siteContent.catFramework;

  return (
    <section
      id="cat"
      className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <RevealOnScroll>
          <SectionHeading
            kicker="Learning Methodology"
            heading={title}
            subheading={subtext}
            accent="violet"
            className="mb-20"
          />
        </RevealOnScroll>

        {/* Outer container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop SVG Line Connector */}
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-1 pointer-events-none">
            <svg className="w-full h-10 overflow-visible" fill="none">
              <motion.path
                d="M 0 10 Q 250 50 500 10 T 1000 10"
                stroke="url(#violet-gradient)"
                strokeWidth="3"
                strokeDasharray="8,8"
                className="opacity-50"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="violet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#D946A0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Concentric ripples layer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none hidden md:block z-0 select-none">
            <div className="absolute inset-0 rounded-full border border-brand-violet/5 dark:border-brand-violet/5 animate-pulse duration-[6000ms]" />
            <div className="absolute inset-20 rounded-full border border-brand-purple/5 dark:border-brand-purple/5 animate-pulse duration-[8000ms] delay-1000" />
            <div className="absolute inset-40 rounded-full border border-brand-indigo/5 dark:border-brand-indigo/5 animate-pulse duration-[10000ms] delay-2000" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {items.map((item, idx) => {
              const Icon = catIcons[idx % catIcons.length];
              const letter = catLetters[idx % catLetters.length];

              return (
                <RevealOnScroll
                  key={item.id}
                  delay={idx * 0.15}
                  yOffset={30}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Large Framework Circle */}
                  <div className="relative mb-8">
                    {/* Ring glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-violet to-brand-magenta opacity-0 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 blur-md" />
                    
                    {/* Main Circle */}
                    <div className="w-40 h-40 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col items-center justify-center relative z-10 group-hover:border-brand-violet transition-colors duration-300">
                      <span className="text-4xl font-black bg-gradient-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent leading-none">
                        {letter}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">
                        {item.title}
                      </span>
                    </div>

                    {/* Floating Icon badge */}
                    <div className="absolute -bottom-2 -right-2 p-2.5 rounded-full bg-gradient-to-tr from-brand-violet to-brand-magenta text-white shadow-md z-20 group-hover:scale-110 transition-transform">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="max-w-xs">
                    <h4 className="text-base font-bold text-slate-950 dark:text-white mb-2 group-hover:text-brand-violet transition-colors">
                      {item.title} Phase
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
      </div>
    </section>
  );
}
