"use client";

import React from "react";
import { siteContent } from "@/lib/content";
import { useModal } from "@/lib/store";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { Code, Users, Briefcase, Medal } from "lucide-react";

const profileIcons = [Code, Users, Briefcase, Medal];

export default function WhoShouldJoin() {
  const { openModal } = useModal();
  const { title, subtext, items } = siteContent.whoShouldJoin;

  return (
    <section
      id="who-should-join"
      className="py-24 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Gradient Panel */}
          <div className="lg:col-span-5 flex">
            <RevealOnScroll className="w-full flex" yOffset={30}>
              <div
                className="w-full rounded-3xl bg-gradient-to-br from-brand-indigo to-brand-purple p-8 md:p-12 text-white flex flex-col justify-between shadow-xl shadow-brand-indigo/10 relative overflow-hidden"
              >
                {/* Decorative glow orb inside panel */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-mint">
                    Who Is This For?
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-100 font-light leading-relaxed max-w-sm">
                    {subtext}. Tailored learning tracks designed to meet the unique upskilling demands of modern enterprise teams.
                  </p>
                </div>

                <div className="mt-12 relative z-10">
                  <button
                    onClick={openModal}
                    className="px-6 py-3 bg-white text-brand-indigo font-bold text-sm rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all cursor-pointer"
                  >
                    Match Your Team
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, idx) => {
                const Icon = profileIcons[idx % profileIcons.length];

                return (
                  <RevealOnScroll
                    key={item.id}
                    delay={idx * 0.08}
                    yOffset={20}
                  >
                    <div
                      className="h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col gap-4 group hover:border-brand-indigo/35 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-indigo/5 text-brand-indigo flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
