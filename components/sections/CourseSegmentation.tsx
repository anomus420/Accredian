"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function CourseSegmentation() {
  const { title, subtext, items } = siteContent.courseSegmentation;

  return (
    <section
      id="segmentation"
      className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            kicker="Targeted Learning"
            heading={title}
            subheading={subtext}
            accent="coral"
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <RevealOnScroll
              key={item.id}
              delay={idx * 0.1}
              yOffset={25}
            >
              <div
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-200/80 dark:border-slate-800"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />

                {/* Dark Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/95 group-hover:via-slate-950/50 transition-colors duration-300 pointer-events-none"
                />

                {/* Card Content (Stays at the bottom) */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full text-white pointer-events-none"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber mb-1 group-hover:text-brand-coral transition-colors duration-300">
                    Category {item.id}
                  </span>
                  
                  <h4 className="text-xl font-bold tracking-tight mb-2">
                    {item.title}
                  </h4>

                  <p
                    className="text-xs text-slate-300 font-light leading-relaxed max-w-md opacity-90
                               translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
