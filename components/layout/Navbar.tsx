"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/lib/store";
import { siteContent } from "@/lib/content";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Navbar() {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { logo, tagline, links, cta } = siteContent.navbar;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-900 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col select-none group">
            <span className="text-2xl font-black text-brand-indigo dark:text-white tracking-tight leading-none transition-colors group-hover:text-brand-purple">
              {logo}
            </span>
            <span className="text-[8px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mt-0.5">
              {tagline}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-indigo dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={openModal}
              className="px-6 py-2.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple shadow-md shadow-brand-indigo/15 hover:shadow-lg hover:shadow-brand-indigo/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              {cta}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl p-8 flex flex-col justify-between lg:hidden border-l border-slate-100 dark:border-slate-800"
            >
              <div className="flex flex-col gap-8 mt-16">
                <div className="flex flex-col gap-4">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-lg font-semibold text-slate-800 dark:text-slate-100 hover:text-brand-indigo transition-colors py-2 border-b border-slate-50 dark:border-slate-950"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openModal();
                  }}
                  className="w-full py-4 text-center font-bold text-white rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple shadow-lg shadow-brand-indigo/15 active:scale-95 transition-all"
                >
                  {cta}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
