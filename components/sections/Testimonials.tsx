"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteContent } from "@/lib/content";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const { title, subtext, items } = siteContent.testimonials;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-play timer
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      slideNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, items.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-[#f8f5fc] dark:bg-[#0c0a13] text-slate-900 dark:text-[#F5F6FA] overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Violet tint in navy background */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(139,92,246,0.03),transparent_70%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <SectionHeading
            kicker="Partner Feedback"
            heading={title}
            subheading={subtext}
            accent="violet"
            className="mb-16"
          />
        </RevealOnScroll>

        {/* Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto min-h-[280px] md:min-h-[220px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center text-center px-4 md:px-12 py-8 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-3xl relative shadow-md"
            >
              {/* Quote Mark */}
              <Quote className="h-12 w-12 text-brand-violet/10 absolute top-4 left-6 pointer-events-none" />

              {/* Quote text */}
              <blockquote className="text-base md:text-lg leading-relaxed text-slate-800 dark:text-slate-200 font-light italic mb-6 relative z-10">
                "{items[index].quote}"
              </blockquote>

              {/* Client Wordmark */}
              <cite className="not-italic flex flex-col items-center">
                <span className="text-sm font-black uppercase tracking-widest bg-gradient-to-r from-brand-violet to-brand-magenta bg-clip-text text-transparent italic font-serif">
                  {items[index].client}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">
                  Accredian Partner
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={slidePrev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-brand-violet dark:hover:text-white hover:border-brand-violet dark:hover:border-brand-violet hover:shadow-md hover:shadow-brand-violet/10 dark:hover:shadow-brand-violet/10 transition-all cursor-pointer shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={slideNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-brand-violet dark:hover:text-white hover:border-brand-violet dark:hover:border-brand-violet hover:shadow-md hover:shadow-brand-violet/10 dark:hover:shadow-brand-violet/10 transition-all cursor-pointer shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > index ? 1 : -1);
                setIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === idx ? "w-6 bg-brand-violet" : "w-2 bg-slate-300 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
