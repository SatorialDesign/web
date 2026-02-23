"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-cream">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758812647166-6d4166137f19?q=80&w=2000&auto=format&fit=crop')`,
            transform: loaded ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Accent line */}
          <div
            className={`gold-line mb-8 transition-all duration-1000 ${loaded ? "opacity-100 w-[60px]" : "opacity-0 w-0"}`}
          />

          {/* Subtitle */}
          <p
            className={`font-accent text-gold-light text-lg md:text-xl tracking-wider mb-4 transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Interior Design — Lisbon
          </p>

          {/* Main heading */}
          <h1
            className={`font-heading text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Walnut, Velvet
            <br />
            &amp; <span className="italic font-light">Plasterwork</span>
          </h1>

          {/* Description */}
          <p
            className={`text-white/70 text-base md:text-lg leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Layered interiors where mid-century chrome meets classical European
            architecture — travertine, herringbone parquet, and storied objects
            curated from a life lived across continents.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#portfolio"
              className="inline-block text-center bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold-dark transition-all duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#about"
              className="inline-block text-center border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
