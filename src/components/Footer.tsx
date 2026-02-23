export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-accent text-2xl text-white tracking-wider">
              Sartorial{" "}
              <span className="italic font-light text-gold">Design</span>
            </span>
            <p className="text-white/40 text-sm leading-relaxed mt-4 max-w-xs">
              Walnut, velvet, and plasterwork — layered interiors by Taiba Khan.
              Grounded in natural materials, classical architecture, and a
              lifetime of collecting.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-6">
              Explore
            </h4>
            <div className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Philosophy", href: "#philosophy" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/40 text-sm hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-6">
              Connect
            </h4>
            <div className="space-y-3">
              {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-white/40 text-sm hover:text-gold transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="mailto:hello@sartorialdesign.com"
                className="text-white/40 text-sm hover:text-gold transition-colors duration-300"
              >
                hello@sartorialdesign.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            &copy; {currentYear} Sartorial Design. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            Lisbon, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
