"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <span
            className={`font-accent text-2xl tracking-wider transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Sartorial{" "}
            <span className="italic font-light text-gold">Design</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-charcoal" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 text-xs tracking-[0.2em] uppercase border border-gold text-gold px-5 py-2.5 hover:bg-gold hover:text-white transition-all duration-300"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-1 bg-charcoal"
                : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-1 bg-charcoal"
                : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-cream z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-2xl text-charcoal hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 text-xs tracking-[0.2em] uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-white transition-all duration-300"
        >
          Book a Consultation
        </a>
      </div>
    </nav>
  );
}
