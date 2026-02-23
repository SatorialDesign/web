"use client";

import { useEffect, useRef, useState } from "react";

const principles = [
  {
    number: "01",
    title: "Material Honesty",
    description:
      "Travertine, walnut, honed marble, hand-loomed wool — we choose materials that age with grace. Every surface has a story, every patina a purpose.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Classical Meets Modern",
    description:
      "A Wassily chair beneath ornate plasterwork. A Camaleonda sofa on herringbone parquet. We live for the tension between heritage architecture and mid-century design.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Collected, Not Decorated",
    description:
      "Rooms should feel lived in — bookshelves filled with well-read spines, art in ornate gilt frames, objects from souks and flea markets, curated over a lifetime.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Rooted in Lisbon",
    description:
      "Classical European plasterwork, cobbled courtyards, azulejo light — Lisbon is a city built on layering eras, and that spirit runs through every project we touch.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gold-line mx-auto mb-6" />
          <p className="font-accent text-gold text-lg tracking-wider mb-3">
            Our Approach
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Design Philosophy
          </h2>
          <p className="text-muted leading-relaxed">
            We believe the most compelling spaces are layered, not decorated —
            where chrome catches light against walnut panelling, velvet softens
            stone, and every object has earned its place over years of collecting.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((principle, i) => (
            <div
              key={principle.number}
              className={`group p-8 md:p-10 bg-warm-white border border-stone/30 hover:border-gold/50 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 150}ms` : "0ms" }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="font-heading text-4xl text-stone group-hover:text-gold transition-colors duration-300">
                    {principle.number}
                  </span>
                </div>
                <div>
                  <div className="text-gold/60 mb-3 group-hover:text-gold transition-colors duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
