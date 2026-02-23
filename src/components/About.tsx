"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="img-zoom aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1705591937098-dfd5b4ef1dbc?q=80&w=1200&auto=format&fit=crop"
                  alt="Elegant European interior with classical moulding and warm furnishings"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden md:block" />
              {/* Experience badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-charcoal text-white p-6 md:p-8">
                <span className="font-heading text-3xl md:text-4xl text-gold block">
                  15+
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="gold-line mb-6 block" />
            <p className="font-accent text-gold text-lg tracking-wider mb-3">
              The Founder
            </p>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">
              Taiba Khan
              <span className="block text-2xl md:text-3xl font-light italic text-muted mt-2">
                CPA, Interior Designer
              </span>
            </h2>

            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Born in India, shaped by the world. With over 15 years as a
                Chartered Public Accountant, Taiba Khan cultivated a precision
                of mind and an eye for structure that would later become the
                foundation of her design philosophy.
              </p>
              <p>
                Her journey across continents — through the ornate palaces of
                Rajasthan, the flea markets of Paris, the woven-ceiling riads of
                Marrakech, and the mid-century showrooms of Copenhagen — instilled
                a rare sensibility: the understanding that a Wassily chair belongs
                beneath ornate plasterwork, and that a travertine slab can anchor
                a room of velvet and walnut.
              </p>
              <p>
                Now based in Lisbon, Portugal, Taiba made her acclaimed debut at{" "}
                <strong className="text-charcoal font-medium">B49 in Lisbon</strong>,
                where her installation layered herringbone parquet with hand-loomed
                textiles, aged brass, and floor-to-ceiling walnut shelving — earning
                widespread recognition and marking her transition from numbers to
                narratives.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone">
              <div>
                <span className="font-heading text-2xl md:text-3xl text-gold">
                  30+
                </span>
                <p className="text-xs tracking-wider uppercase text-muted mt-1">
                  Countries Explored
                </p>
              </div>
              <div>
                <span className="font-heading text-2xl md:text-3xl text-gold">
                  B49
                </span>
                <p className="text-xs tracking-wider uppercase text-muted mt-1">
                  Lisbon Debut
                </p>
              </div>
              <div>
                <span className="font-heading text-2xl md:text-3xl text-gold">
                  CPA
                </span>
                <p className="text-xs tracking-wider uppercase text-muted mt-1">
                  Chartered Accountant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
