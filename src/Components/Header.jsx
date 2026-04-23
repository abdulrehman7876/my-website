import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function Header({ navActive, setNavActive }) {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = [
    { name: "Home", href: "#", label: "Go to home section" },
    {
      name: "About",
      href: "#about",
      label: "About Abdul Rehman — Front-End Developer",
    },
    {
      name: "Services",
      href: "#services",
      label: "React, WordPress & Shopify development services",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
      label: "View front-end developer portfolio",
    },
    {
      name: "Contact",
      href: "#contact",
      label: "Hire Abdul Rehman — contact page",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      aria-label="Abdul Rehman — Freelance Front-End Developer in Karachi"
      className={`h-18 w-full 2xl:justify-center 2xl:gap-70 sticky backdrop-blur-sm flex justify-between items-center px-3 md:px-20 border-b border-b-gray-800/30 z-50 ${isBlurred ? "bg-[rgba(13,13,13,0.9)] top-0" : "bg-[rgba(13,13,13,0.92)] 2xl:px-30"}`}
    >
      {/* Mobile menu toggle */}
      <button
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-5xl text-[#f2cc0f] md:hidden bg-transparent border-none cursor-pointer"
      >
        <IoMenu />
      </button>

      {/* Logo */}
      <div className="flex items-center justify-center h-10 md:pr-12 shrink-0">
        <a
          href="/"
          aria-label="Abdul Rehman — Freelance Front-End Developer in Karachi, Pakistan"
          className="flex items-center justify-center h-10 md:pr-12 shrink-0"
        >
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src="/logo3.svg"
            alt="Abdul Rehman — React, WordPress & Shopify Developer in Karachi"
          />
        </a>
      </div>

      {/* Desktop nav */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="font-normal h-18 w-3xl text-xs hidden md:flex justify-center items-center text-(--text-secondary)"
      >
        <ul className="flex space-x-8 items-center justify-center h-18 uppercase">
          {nav.map((item, index) => (
            <li
              key={index}
              onClick={() => setNavActive(item.href)}
              className="relative w-max h-full flex items-center justify-center"
            >
              <a
                aria-label={item.label}
                aria-current={navActive === item.href ? "page" : undefined}
                className={`w-max nav-hover h-full flex items-center justify-center ${navActive === item.href ? "active-link" : ""}`}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed z-52 md:hidden h-screen w-3/4 top-0 left-0 text-white bg-[#212121] flex flex-col px-10 py-10 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className="h-30 flex justify-end text-3xl text-[#f2cc0f] bg-transparent border-none cursor-pointer self-end"
        >
          <RxCross1 />
        </button>
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
                aria-label={item.label}
                aria-current={navActive === item.href ? "page" : undefined}
                className={`w-max nav-hover h-full flex items-center justify-center ${navActive === item.href ? "active-link" : ""}`}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Backdrop */}
      <div
        role="presentation"
        onClick={() => setIsMenuOpen(false)}
        className={`absolute inset-0 z-51 h-screen w-screen bg-black/70 md:hidden ${isMenuOpen ? "" : "hidden"}`}
      ></div>

      {/* Resume CTA */}
      <a
        href="/AbdulRehmanCv.pdf"
        download="Abdul-Rehman-Frontend-Developer-CV.pdf"
        aria-label="Download Abdul Rehman's front-end developer resume"
        className="btn-primary uppercase transition-all duration-300"
      >
        Resume
      </a>
    </header>
  );
}
