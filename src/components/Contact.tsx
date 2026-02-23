"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="gold-line mb-6 block" />
            <p className="font-accent text-gold text-lg tracking-wider mb-3">
              Get in Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl mb-8">
              Begin Your
              <br />
              <span className="italic font-light">Design Journey</span>
            </h2>

            <p className="text-muted leading-relaxed mb-10">
              Every great space starts with a conversation. Whether you know
              exactly which velvet you want or simply have a feeling about
              the light in a room — we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted mb-1">
                    Studio
                  </p>
                  <p className="text-charcoal">
                    Principe Real, Lisbon
                    <br />
                    Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@sartorialdesign.com"
                    className="text-charcoal hover:text-gold transition-colors"
                  >
                    hello@sartorialdesign.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted mb-1">
                    Hours
                  </p>
                  <p className="text-charcoal">
                    Mon — Fri: 10:00 — 18:00
                    <br />
                    Saturday by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-[0.15em] uppercase text-muted hover:text-gold border-b border-transparent hover:border-gold pb-1 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.15em] uppercase text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-stone/50 py-3 text-charcoal placeholder:text-stone focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.15em] uppercase text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-stone/50 py-3 text-charcoal placeholder:text-stone focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs tracking-[0.15em] uppercase text-muted mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border-b border-stone/50 py-3 text-charcoal placeholder:text-stone focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="+351 ..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs tracking-[0.15em] uppercase text-muted mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full bg-transparent border-b border-stone/50 py-3 text-charcoal focus:border-gold focus:outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="full-design">Full Interior Design</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="curation">Cultural Curation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.15em] uppercase text-muted mb-2"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-stone/50 py-3 text-charcoal placeholder:text-stone focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe your space, your vision, and any cultural inspirations that resonate with you..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === "sending"}
                className="w-full bg-charcoal text-white text-xs tracking-[0.2em] uppercase py-4 hover:bg-gold transition-all duration-500 disabled:opacity-50"
              >
                {formState === "sending"
                  ? "Sending..."
                  : formState === "sent"
                    ? "Message Sent"
                    : "Send Enquiry"}
              </button>

              {formState === "sent" && (
                <p className="text-sage text-sm text-center">
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {formState === "error" && (
                <p className="text-terracotta text-sm text-center">
                  Something went wrong. Please email us directly at
                  hello@sartorialdesign.com
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
