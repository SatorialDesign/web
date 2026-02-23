"use client";

import { useEffect, useRef, useState } from "react";

const pressItems = [
  {
    publication: "Architectural Digest Portugal",
    title: "The New Wave of Lisbon Design: Taiba Khan\u0027s Cultural Revolution",
    year: "2025",
  },
  {
    publication: "Elle Decoration",
    title: "From Boardrooms to Beautiful Rooms: A CPA\u0027s Design Journey",
    year: "2025",
  },
  {
    publication: "Wallpaper*",
    title: "B49 Exhibition Highlights: Five Designers Redefining Space",
    year: "2024",
  },
  {
    publication: "Monocle",
    title: "Lisbon\u0027s Creative Newcomers: Where East Meets West",
    year: "2024",
  },
];

export default function Press() {
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
      id="press"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gold-line mx-auto mb-6" />
          <p className="font-accent text-gold text-lg tracking-wider mb-3">
            In the Press
          </p>
          <h2 className="font-heading text-4xl md:text-5xl">Recognition</h2>
        </div>

        {/* Press list */}
        <div className="max-w-3xl mx-auto">
          {pressItems.map((item, i) => (
            <div
              key={item.title}
              className={`group border-b border-stone/30 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer hover:border-gold/50 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium w-40 flex-shrink-0">
                {item.publication}
              </span>
              <h3 className="font-heading text-lg md:text-xl group-hover:text-gold transition-colors duration-300 flex-1">
                {item.title}
              </h3>
              <span className="text-muted text-sm flex-shrink-0">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
