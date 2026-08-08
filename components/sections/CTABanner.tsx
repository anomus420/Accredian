"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import { useModal } from "@/lib/store";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function CTABanner() {
  const { openModal } = useModal();
  const { title, subtitle, buttonText } = siteContent.ctaBanner;

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0B0F19] overflow-hidden"
    >
      {/* Blurred mesh gradient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-tr from-brand-indigo/15 to-brand-purple/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll className="space-y-8 flex flex-col items-center">
          <div className="p-3 bg-brand-indigo/5 border border-brand-indigo/10 rounded-2xl w-max text-brand-indigo">
            <HelpCircle className="h-6 w-6 animate-bounce" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-light max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-indigo font-bold rounded-xl hover:shadow-xl hover:shadow-white/5 hover:scale-[1.02] active:scale-100 transition-all cursor-pointer group"
            >
              {buttonText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
