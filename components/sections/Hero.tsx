"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/lib/store";
import { siteContent } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { openModal } = useModal();
  const { eyebrow, title, subtext, checklist, cta } = siteContent.hero;

  // Helper to parse title highlights
  const renderTitle = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const cleanText = part.slice(2, -2);
        return (
          <span
            key={index}
            className="bg-gradient-to-r from-brand-indigo to-brand-purple bg-clip-text text-transparent font-extrabold"
          >
            {cleanText}
          </span>
        );
      }
      return part;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Dynamic Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-gradient-to-tr from-brand-indigo/10 to-brand-purple/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-drift" />
      <div className="absolute bottom-10 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-tr from-brand-teal/5 to-brand-mint/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none animate-drift duration-[20s]" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1.8px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl h-[76vh] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Copy Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/5 dark:bg-brand-indigo/10 border border-brand-indigo/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-indigo">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-slate-300 tracking-tight leading-[1.1] max-w-2xl font-display"
          >
            {renderTitle(title)}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-xl"
          >
            {subtext}
          </motion.p>

          {/* Checklist */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mt-2"
          >
            {checklist.map((item, idx) => (
              <motion.div
                key={item}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-indigo/30 transition-colors select-none cursor-default"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-indigo flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="mt-4">
            <button
              onClick={openModal}
              className="px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple shadow-xl shadow-brand-indigo/20 hover:shadow-brand-indigo/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
            >
              {cta}
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.4 }}
          className="lg:col-span-5 relative w-full aspect-square max-w-[450px] lg:max-w-none mx-auto flex items-center justify-center"
        >
          {/* Decorative backdrop shapes & ambient glow orb */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 rounded-3xl -rotate-3 scale-95 pointer-events-none blur-lg opacity-80 dark:opacity-100" />
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-teal rounded-full blur-[80px] opacity-0 dark:opacity-25 pointer-events-none" />

          {/* Floating Glassmorphic Badge 1: Top-Left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-8 p-3 rounded-2xl bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-xl flex items-center gap-3 z-20 select-none pointer-events-none"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-sm">
              📈
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                UPSKILLING ROI
              </span>
              <span className="text-xs font-black text-slate-900 dark:text-white">
                +148% Growth
              </span>
            </div>
          </motion.div>

          {/* Floating Glassmorphic Badge 2: Bottom-Right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 p-3 rounded-2xl bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-xl flex items-center gap-3 z-20 select-none pointer-events-none"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-violet/10 text-brand-violet flex items-center justify-center font-bold text-sm">
              🏢
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                ACTIVE TEAMS
              </span>
              <span className="text-xs font-black text-slate-900 dark:text-white">
                150+ Enterprise
              </span>
            </div>
          </motion.div>

          {/* Neon Border Outer Container (Purple to Teal Gradient border) */}
          <motion.div
            whileHover={{ y: -6, rotate: 0.5, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full h-full p-[1.5px] rounded-3xl bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-teal shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(59,91,255,0.15)] flex items-center justify-center cursor-pointer overflow-hidden group/card"
          >
            {/* Spotlight Card Background */}
            <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-white dark:bg-slate-900 p-2.5 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                alt="Accredian Corporate Learning Professionals"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 50vw"
                className="object-cover rounded-[15px]"
              />

              {/* Spotlight Center Glow */}
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-radial-[circle_at_center,rgba(20,198,165,0.15)_0%,transparent_60%] pointer-events-none" />

              {/* Glossy Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-white/40 dark:border-slate-800/40 flex items-center gap-4 shadow-lg z-10">
                <div className="w-10 h-10 rounded-full bg-brand-indigo/10 flex items-center justify-center flex-shrink-0 text-brand-indigo font-bold text-sm">
                  🎓
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-slate-950 dark:text-white uppercase tracking-wider">
                    Accredited Program
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400">
                    Curated with elite faculty partners
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
