export default function Footer() {
  const links = ["Home", "About", "Services", "Portfolio", "Contact"];
  const services = [
    "React Web App Development",
    "WordPress Development",
    "Shopify Store Development",
    "UI/UX Design",
    "Responsive Web Design",
  ];
  const hrefs = ["#", "#about", "#services", "#portfolio", "#contact"];

  return (
    <footer
      role="contentinfo"
      className="px-5 md:px-16 pt-16 pb-8"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/footerLogo.svg"
              alt="Abdul Rehman"
              className="h-10 object-contain mb-6"
              loading="lazy"
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Freelance front-end developer in Karachi, Pakistan. Specializing
              in React, WordPress, and Shopify development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-mono-custom text-[0.65rem] tracking-widest uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-3 flex flex-col">
              {links.map((name, i) => (
                <a
                  key={i}
                  href={hrefs[i]}
                  className="text-sm transition-all duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-mono-custom text-[0.65rem] tracking-widest uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Services
            </h4>
            <div className="space-y-3 flex flex-col">
              {services.map((s, i) => (
                <a
                  key={i}
                  href="#services"
                  className="text-sm transition-all duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="font-mono-custom text-[0.65rem] tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            © 2026 Abdul Rehman — Freelance Front-End Developer, Karachi,
            Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
