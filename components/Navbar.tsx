"use client";

import { useState } from "react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Avis", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="text-amber-400 font-bold text-xl tracking-wide">
          MINOO FOOD
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0662302554"
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
          >
            Commander
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-stone-300 p-2"
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-300 hover:text-amber-400 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0662302554"
            className="bg-amber-500 text-stone-900 font-semibold text-center py-2 rounded-full"
          >
            Commander
          </a>
        </div>
      )}
    </header>
  );
}
