"use client";

import React from "react";
import { useModal } from "@/lib/store";
import { siteContent } from "@/lib/content";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  const { openModal } = useModal();
  const { logo, tagline, office, email, copyright } = siteContent.footer;

  return (
    <footer className="bg-[#0B0F19] text-[#F5F6FA] border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand / Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white tracking-tight leading-none">
              {logo}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-1">
              {tagline}
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-xs font-light leading-relaxed mt-2">
            Empowering professionals and teams through industry-aligned skills and accredited executive education.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 mt-2">
            {[
              {
                Icon: () => (
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-0.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                ),
                href: "https://facebook.com"
              },
              {
                Icon: () => (
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                ),
                href: "https://linkedin.com"
              },
              {
                Icon: () => (
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "https://twitter.com"
              },
              {
                Icon: () => (
                  <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                ),
                href: "https://instagram.com"
              },
              {
                Icon: () => (
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                  </svg>
                ),
                href: "https://youtube.com"
              },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-brand-indigo transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Corporate Advisory */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Advisory Support
          </h4>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            Need customized plans for your teams? Connect with a corporate advisor for a quick alignment.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-brand-indigo to-brand-purple text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-indigo/10 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
            >
              Enquire Now
            </button>
            <span className="text-xs text-slate-500 font-medium italic mt-1 flex items-center gap-1.5 justify-start">
              <PhoneCall className="h-3.5 w-3.5 text-brand-teal" />
              Speak with our Advisor (Mon-Sat, 9AM-6PM)
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Accredian
          </h4>
          <ul className="flex flex-col gap-2">
            {["About Us", "Corporate Blogs", "Executive Programs", "Alumni Success", "Careers"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors font-light"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-slate-400">
            <li className="flex gap-3 items-start">
              <Mail className="h-5 w-5 text-brand-indigo flex-shrink-0 mt-0.5" />
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                {email}
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="h-5 w-5 text-brand-indigo flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{office}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900/80 text-center text-xs text-slate-500">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
