"use client";

import React from "react";
import { useTheme } from "@/lib/store";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-brand-indigo/30 transition-all duration-300 relative w-10 h-10 overflow-hidden flex items-center justify-center cursor-pointer select-none group"
      aria-label="Toggle dark/light theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 90,
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute"
      >
        <Sun className="h-4.5 w-4.5 text-amber-500 group-hover:scale-110 transition-transform" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : -90,
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Moon className="h-4.5 w-4.5 text-brand-indigo group-hover:scale-110 transition-transform" />
      </motion.div>
    </button>
  );
}
