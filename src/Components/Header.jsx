import { useEffect } from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function Header({ navActive, setNavActive }) {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`h-18 w-full 2xl:justify-center 2xl:gap-70 sticky backdrop-blur-sm flex justify-between items-center px-3 md:px-20 border-b border-b-gray-700/50 z-50 ${isBlurred ? "bg-[#161616]/90 top-0" : "bg-[#161616] 2xl:px-30"}`}
    >
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-5xl text-[#f2cc0f] md:hidden"
      >
        <IoMenu />
      </div>
      <div className="flex items-center justify-center h-10 md:pr-12 shrink-0">
        <img
          loading="lazy"
          className="h-full w-full object-cover"
          src="/logo3.svg"
          alt="Logo"
        />
      </div>

      <nav
        role="navigation"
        className="font-semibold h-18 w-3xl hidden md:flex justify-center items-center text-white "
      >
        <ul className="flex space-x-8 items-center justify-center h-18">
          <li
            onClick={() => setNavActive("")}
            className="relative w-max h-full flex items-center justify-center"
          >
            <a
              aria-label="Home"
              className={`w-max nav-hover h-full flex items-center justify-center`}
              href="/"
            >
              Home
            </a>
          </li>
          <li
            onClick={() => setNavActive("#about")}
            className="relative w-max h-full flex items-center justify-center"
          >
            <a
              aria-label="about"
              className={`w-max nav-hover h-full flex items-center justify-center ${navActive === "#about" ? "active-link" : ""}`}
              href="#about"
            >
              About
            </a>
          </li>
          <li
            onClick={() => setNavActive("#services")}
            className="relative w-max h-full flex items-center justify-center"
          >
            <a
              aria-label="services"
              className={`w-max nav-hover h-full flex items-center justify-center ${navActive === "#services" ? "active-link" : ""}`}
              href="#services"
            >
              Services
            </a>
          </li>
          <li
            onClick={() => setNavActive("#portfolio")}
            className="relative w-max h-full flex items-center justify-center"
          >
            <a
              aria-label="portfolio"
              className={`w-max nav-hover h-full flex items-center justify-center ${navActive === "#portfolio" ? "active-link" : ""}`}
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li
            onClick={() => setNavActive("#contact")}
            className="relative w-max h-full flex items-center justify-center"
          >
            <a
              aria-label="contact"
              className={`w-max nav-hover h-full flex items-center justify-center ${navActive === "#contact" ? "active-link" : ""}`}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* mobile h-menu */}

      <nav
        className={`fixed z-52 md:hidden h-screen w-3/4 top-0 left-0 text-white bg-[#212121] flex flex-col px-10 py-10 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className="h-30 flex justify-end text-3xl text-[#f2cc0f]"
        >
          <RxCross1 />
        </div>
        <ul className="flex flex-col gap-5 text-lg">
          {nav.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setNavActive(item.href);
                setIsMenuOpen(false);
              }}
              className="relative w-max h-10 flex items-center justify-center"
            >
              <a
                aria-label="Mobile navigation"
                className={`w-max nav-hover h-full flex items-center justify-center ${navActive === item.href ? "active-link" : ""}`}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`absolute inset-0 z-51 h-screen w-screen bg-black/70 md:hidden ${isMenuOpen ? "" : "hidden"}`}
      ></div>

      <button
        aria-label="Download Resume"
        className="bg-[#f2cc0f] rounded-lg px-3 md:px-6 py-1 pb-2 text-black font-semibold btn-hover transition-all duration-300"
      >
        <a
          aria-label="download"
          href="/AbdulRehmanCv.pdf"
          download="AbdulRehmanCv.pdf"
        >
          Resume
        </a>
      </button>
    </header>
  );
}
