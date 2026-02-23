"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonial() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-walnut relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Quote mark */}
          <span className="font-heading text-8xl text-gold/20 leading-none block mb-4">
            &ldquo;
          </span>

          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed mb-8 italic font-light">
            Taiba doesn&apos;t decorate — she layers. Her B49 installation
            felt like walking through someone&apos;s life: walnut, velvet,
            travertine, and light, all held together by an unmistakable
            point of view.
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <span className="gold-line" />
            <div>
              <p className="text-white text-sm font-medium">
                Architectural Digest Portugal
              </p>
              <p className="text-white/40 text-xs tracking-wider uppercase mt-1">
                Review of B49 Exhibition
              </p>
            </div>
            <span className="gold-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
