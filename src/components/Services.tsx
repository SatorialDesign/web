"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Full Interior Design",
    description:
      "From herringbone-laid floors to plasterwork restoration — we design complete spaces grounded in natural materials, classical architecture, and mid-century character.",
    features: [
      "Concept development & material palettes",
      "Space planning & 3D visualization",
      "Walnut joinery & bespoke shelving design",
      "Project management & installation",
    ],
  },
  {
    title: "Design Consultation",
    description:
      "A focused session to unlock the potential of your space — whether you need help pairing a chrome-frame chair with the right travertine table, or rethinking an entire floor.",
    features: [
      "In-person or virtual sessions",
      "Material & colour palette direction",
      "Furniture layout & flow optimization",
      "Curated sourcing recommendations",
    ],
  },
  {
    title: "Object & Art Curation",
    description:
      "Our signature offering — sourcing vintage furniture, artisanal textiles, and gallery-worthy art to fill shelves and walls with character.",
    features: [
      "Vintage & antique furniture sourcing",
      "Bespoke walnut & burl wood commissions",
      "Art advisory, framing & placement",
      "Textile & rug curation from global artisans",
    ],
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-2xl mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gold-line mb-6" />
          <p className="font-accent text-gold text-lg tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Services</h2>
          <p className="text-muted leading-relaxed">
            Every engagement begins with listening — understanding how you live,
            what you collect, and the textures that make you feel at home. We
            tailor every scheme to honour your vision.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 md:p-10 bg-cream/70 backdrop-blur-sm border border-stone/40 hover:border-gold/50 hover:bg-cream transition-all duration-700 flex flex-col rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.08)] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 150}ms` : "0ms" }}
            >
              {/* Number */}
              <span className="font-heading text-5xl text-stone/40 group-hover:text-gold/30 transition-colors duration-500 mb-6">
                0{i + 1}
              </span>

              <h3 className="font-heading text-2xl mb-4">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-stone/30">
                <a
                  href="#contact"
                  className="text-xs tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  Enquire
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
