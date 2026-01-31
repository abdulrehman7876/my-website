export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="text-white py-12 px-3 md:px-20"
      style={{ backgroundColor: "#000000", borderTop: "1px solid #3a3a3a" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 ">
          <div className="shrink-0">
            <img
              className="h-13 obeject-cover mb-8 mt-3 "
              loading="lazy"
              src="/footerLogo.svg"
              alt="logo"
            />
            <p className="text-gray-400 transition hover:text-[#d1d5db]">
              Front-End Developer & Designer crafting beautiful digital
              experiences.
            </p>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#F2CC0F" }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                aria-label="home"
                href="#"
                className="block text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                Home
              </a>
              <a
                aria-label="about"
                href="#about"
                className="block text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                About
              </a>
              <a
                aria-label="services"
                href="#services"
                className="block text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                Services
              </a>
              <a
                aria-label="contact"
                href="#contact"
                className="block text-gray-400 transition hover:text-[#F2CC0F] hover:translate-x-2"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#F2CC0F" }}
            >
              Services
            </h4>
            <div className="space-y-2 text-gray-400 flex flex-col">
              <a
                aria-label="services"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                Web Development
              </a>
              <a
                aria-label="services"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                UI/UX Design
              </a>
              <a
                aria-label="services"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                Graphic Design
              </a>
              <a
                aria-label="services"
                href="#services"
                className="transition hover:text-[#F2CC0F] hover:translate-x-2 cursor-pointer"
              >
                Wordpress
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-400 border-t border-[#3a3a3a]">
          <p className="transition text-gray-400 hover:text-[#F2CC0F]">
            &copy; 2026 Abdul Rehman.
          </p>
        </div>
      </div>
    </footer>
  );
}
