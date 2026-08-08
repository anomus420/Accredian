"use client";

import React, { useState } from "react";
import { siteContent } from "@/lib/content";
import { useModal } from "@/lib/store";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200/60 dark:border-slate-800 py-4.5 last:border-0 transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-1 focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-indigo transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 dark:text-slate-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-indigo" : ""
          }`}
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-2.5 pr-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { openModal } = useModal();
  const { title, categories } = siteContent.faqs;
  const categoryNames = Object.keys(categories);
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);

  return (
    <section
      id="faqs"
      className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            kicker="Got Questions?"
            heading={title}
            subheading="Find answers to common questions about corporate partnerships and executive delivery formats."
            accent="indigo"
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Category Selector */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800 lg:pr-6 whitespace-nowrap">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-3 rounded-xl text-xs md:text-sm font-bold transition-all text-left cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-indigo/5 text-brand-indigo dark:bg-brand-indigo/10 border-l-4 border-brand-indigo pl-3"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 border-l-4 border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 bg-slate-50/80 dark:bg-slate-950/20 p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="divide-y divide-slate-100 dark:divide-slate-800/50"
              >
                {categories[activeCategory].map((faq, idx) => (
                  <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA trigger below FAQ */}
        <RevealOnScroll className="flex flex-col items-center gap-4 mt-16 text-center" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50">
            <HelpCircle className="h-4 w-4 text-brand-indigo" />
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Still have questions about our enterprise integrations?
            </span>
          </div>
          <button
            onClick={openModal}
            className="px-8 py-3.5 bg-gradient-to-r from-brand-indigo to-brand-purple text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-indigo/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer"
          >
            Enquire Now
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
