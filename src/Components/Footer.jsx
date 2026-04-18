export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Abdul Rehman — Freelance Front-End Developer in Karachi, Pakistan"
      className="text-white py-12 px-3 md:px-20"
      style={{ backgroundColor: "#000000", borderTop: "1px solid #3a3a3a" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="shrink-0">
            <img
              className="h-13 object-cover mb-7 mt-3"
              loading="lazy"
              src="/footerLogo.svg"
              alt="Abdul Rehman — Freelance Front-End Developer in Karachi"
            />
            <p className="text-gray-400 transition hover:text-[#d1d5db] leading-relaxed">
              Abdul Rehman — freelance front-end developer in Karachi, Pakistan.
              Specializing in React web app development, WordPress website
              development, and Shopify store development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#F2CC0F" }}
            >
              Quick Links
            </h4>
            <nav
              aria-label="Footer navigation"
              className="space-y-2 flex flex-col"
            >
              <a
                aria-label="Go to home section"
                href="/"
                className="text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                Home
              </a>
              <a
                aria-label="Go to about section"
                href="#about"
                className="text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                About
              </a>
              <a
                aria-label="Go to services section"
                href="#services"
                className="text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                Services
              </a>
              <a
                aria-label="Go to portfolio section"
                href="#portfolio"
                className="text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                Portfolio
              </a>
              <a
                aria-label="Go to contact section"
                href="#contact"
                className="text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#F2CC0F" }}
            >
              Services
            </h4>
            <div className="space-y-2 text-gray-400 flex flex-col">
              <a
                aria-label="React web app development service"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                React Web App Development
              </a>
              <a
                aria-label="WordPress website development service"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                WordPress Website Development
              </a>
              <a
                aria-label="Shopify store development service"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                Shopify Store Development
              </a>
              <a
                aria-label="UI UX design service"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                UI/UX Design
              </a>
              <a
                aria-label="Responsive web design service"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                Responsive Web Design
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-400 border-t border-[#3a3a3a]">
          <p className="text-gray-400 transition hover:text-[#F2CC0F]">
            &copy; 2026 Abdul Rehman — Freelance Front-End Developer in Karachi,
            Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
