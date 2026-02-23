"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Casa da Luz",
    location: "Alfama, Lisbon",
    category: "Residential",
    description:
      "Floor-to-ceiling walnut shelving frames an oxblood velvet Camaleonda, while herringbone parquet grounds a travertine coffee table and brass picture lights cast warmth across collected art.",
    image:
      "https://images.unsplash.com/photo-1714075853573-0bbf3c6f1d79?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-2",
  },
  {
    title: "The Silk Room",
    location: "Chiado, Lisbon",
    category: "Hospitality",
    description:
      "A boutique hotel lounge beneath ornate plasterwork ceilings — sage velvet seating, honed marble surfaces, chrome cantilever chairs, and Akari paper lanterns in amber glow.",
    image:
      "https://images.unsplash.com/photo-1698335444303-963ad8397e12?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-1",
  },
  {
    title: "Atelier Monsoon",
    location: "Principe Real, Lisbon",
    category: "Commercial",
    description:
      "A creative studio wrapped in teak panelling and open shelving — Wassily chairs, woven rugs, and curated objects sit beneath warm pendant lighting.",
    image:
      "https://images.unsplash.com/photo-1765371513044-33423dd85c25?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-1",
  },
  {
    title: "B49 Installation",
    location: "B49, Lisbon",
    category: "Exhibition",
    description:
      "The acclaimed debut — five rooms exploring material and memory: burl wood plinths, aged brass sconces, hand-loomed wool, and a single thread of light uniting travertine and dark timber.",
    image:
      "https://images.unsplash.com/photo-1694275827685-812e2a5212af?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-2",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-32 bg-dark"
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
            Selected Works
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Portfolio
          </h2>
          <p className="text-white/50 leading-relaxed">
            Walnut joinery, velvet upholstery, travertine surfaces, and
            classical architecture — a selection of spaces where material
            and memory converge.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden cursor-pointer ${project.span} transition-all duration-700 rounded-[32px] bg-charcoal/40 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 150}ms` : "0ms" }}
              >
              <div className="img-zoom aspect-[4/3] relative rounded-[32px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">
                    {project.category} — {project.location}
                  </span>
                  <h3 className="font-heading text-white text-2xl md:text-3xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.description}
                  </p>
                  <div className="mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="text-gold text-xs tracking-[0.2em] uppercase border-b border-gold/40 pb-1 hover:border-gold transition-colors">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
