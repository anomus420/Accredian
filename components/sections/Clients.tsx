"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import LogoMarquee from "@/components/shared/LogoMarquee";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function Clients() {
  const { title, subtext, logos } = siteContent.clients;

  return (
    <section id="clients" className="py-20 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <RevealOnScroll>
          <SectionHeading
            kicker="Industry Trust"
            heading={title}
            subheading={subtext}
            accent="indigo"
          />
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.1}>
        <LogoMarquee logos={logos} />
      </RevealOnScroll>
    </section>
  );
}
