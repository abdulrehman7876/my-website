import { Head, ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MapPin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Components/Footer.jsx");
function Footer() {
  const links = ["Home", "About", "Services", "Portfolio", "Contact"];
  const services = [
    "React Web App Development",
    "WordPress Development",
    "Shopify Store Development",
    "UI/UX Design",
    "Responsive Web Design"
  ];
  const hrefs = ["#", "#about", "#services", "#portfolio", "#contact"];
  return /* @__PURE__ */ jsx(
    "footer",
    {
      role: "contentinfo",
      className: " px-3 md:px-20 2xl:px-30 pt-16 pb-8",
      style: {
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-10 mb-12", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/footerLogo.svg",
                alt: "Abdul Rehman",
                className: "h-10 object-contain mb-6",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-sm leading-relaxed",
                style: { color: "var(--text-secondary)" },
                children: "Freelance front-end developer in Karachi, Pakistan. Specializing in React, WordPress, and Shopify development."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "h4",
              {
                className: "font-mono-custom text-[0.65rem] tracking-widest uppercase mb-5",
                style: { color: "var(--gold)" },
                children: "Quick Links"
              }
            ),
            /* @__PURE__ */ jsx("nav", { className: "space-y-3 flex flex-col", children: links.map((name, i) => /* @__PURE__ */ jsx(
              "a",
              {
                href: hrefs[i],
                className: "text-sm transition-all duration-200",
                style: { color: "var(--text-secondary)" },
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.paddingLeft = "8px";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.paddingLeft = "0";
                },
                children: name
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "h4",
              {
                className: "font-mono-custom text-[0.65rem] tracking-widest uppercase mb-5",
                style: { color: "var(--gold)" },
                children: "Services"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-3 flex flex-col", children: services.map((s, i) => /* @__PURE__ */ jsx(
              "a",
              {
                href: "#services",
                className: "text-sm transition-all duration-200",
                style: { color: "var(--text-secondary)" },
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.paddingLeft = "8px";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.paddingLeft = "0";
                },
                children: s
              },
              i
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pt-6 text-center",
            style: { borderTop: "1px solid rgba(255,255,255,0.05)" },
            children: /* @__PURE__ */ jsx(
              "p",
              {
                className: "font-mono-custom text-[0.65rem] tracking-widest",
                style: { color: "var(--text-muted)" },
                children: "© 2026 Abdul Rehman — Freelance Front-End Developer, Karachi, Pakistan"
              }
            )
          }
        )
      ] })
    }
  );
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Components/Header.jsx");
function Header({ navActive, setNavActive }) {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = [
    { name: "Home", href: "#", label: "Go to home section" },
    {
      name: "About",
      href: "#about",
      label: "About Abdul Rehman — Front-End Developer"
    },
    {
      name: "Services",
      href: "#services",
      label: "React, WordPress & Shopify development services"
    },
    {
      name: "Portfolio",
      href: "#portfolio",
      label: "View front-end developer portfolio"
    },
    {
      name: "Contact",
      href: "#contact",
      label: "Hire Abdul Rehman — contact page"
    }
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      role: "banner",
      "aria-label": "Abdul Rehman — Freelance Front-End Developer in Karachi",
      className: `h-18 w-full 2xl:justify-center 2xl:gap-70 sticky backdrop-blur-sm flex justify-between items-center px-3 md:px-20 border-b border-b-gray-800/30 z-50 ${isBlurred ? "bg-[rgba(13,13,13,0.9)] top-0" : "bg-[rgba(13,13,13,0.92)] 2xl:px-30"}`,
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Open navigation menu",
            "aria-expanded": isMenuOpen,
            "aria-controls": "mobile-nav",
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: "text-5xl text-[#f2cc0f] md:hidden bg-transparent border-none cursor-pointer",
            children: /* @__PURE__ */ jsx(IoMenu, {})
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-10 md:pr-12 shrink-0", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/",
            "aria-label": "Abdul Rehman — Freelance Front-End Developer in Karachi, Pakistan",
            className: "flex items-center justify-center h-10 md:pr-12 shrink-0",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                className: "h-full w-full object-cover",
                src: "/logo3.svg",
                alt: "Abdul Rehman — React, WordPress & Shopify Developer in Karachi"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(
          "nav",
          {
            role: "navigation",
            "aria-label": "Main navigation",
            className: "font-normal h-18 w-3xl text-xs hidden md:flex justify-center items-center text-(--text-secondary)",
            children: /* @__PURE__ */ jsx("ul", { className: "flex space-x-8 items-center justify-center h-18 uppercase", children: nav.map((item, index) => /* @__PURE__ */ jsx(
              "li",
              {
                onClick: () => setNavActive(item.href),
                className: "relative w-max h-full flex items-center justify-center",
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    "aria-label": item.label,
                    "aria-current": navActive === item.href ? "page" : void 0,
                    className: `w-max nav-hover h-full flex items-center justify-center ${navActive === item.href ? "active-link" : ""}`,
                    href: item.href,
                    children: item.name
                  }
                )
              },
              index
            )) })
          }
        ),
        /* @__PURE__ */ jsxs(
          "nav",
          {
            id: "mobile-nav",
            "aria-label": "Mobile navigation",
            "aria-hidden": !isMenuOpen,
            className: `fixed z-52 md:hidden h-screen w-3/4 top-0 left-0 text-white bg-[#212121] flex flex-col px-10 py-10 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`,
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  "aria-label": "Close navigation menu",
                  onClick: () => setIsMenuOpen(false),
                  className: "h-30 flex justify-end text-3xl text-[#f2cc0f] bg-transparent border-none cursor-pointer self-end",
                  children: /* @__PURE__ */ jsx(RxCross1, {})
                }
              ),
              /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-5 text-lg", children: nav.map((item, index) => /* @__PURE__ */ jsx(
                "li",
                {
                  onClick: () => {
                    setNavActive(item.href);
                    setIsMenuOpen(false);
                  },
                  className: "relative w-max h-10 flex items-center justify-center",
                  children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      "aria-label": item.label,
                      "aria-current": navActive === item.href ? "page" : void 0,
                      className: `w-max nav-hover h-full flex items-center justify-center ${navActive === item.href ? "active-link" : ""}`,
                      href: item.href,
                      children: item.name
                    }
                  )
                },
                index
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            role: "presentation",
            onClick: () => setIsMenuOpen(false),
            className: `absolute inset-0 z-51 h-screen w-screen bg-black/70 md:hidden ${isMenuOpen ? "" : "hidden"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/AbdulRehmanCv.pdf",
            download: "Abdul-Rehman-Frontend-Developer-CV.pdf",
            "aria-label": "Download Abdul Rehman's front-end developer resume",
            className: "btn-primary uppercase transition-all duration-300",
            children: "Resume"
          }
        )
      ]
    }
  );
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Sections/About.jsx");
function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "Tailwind CSS", level: 95 },
    { name: "SQL", level: 85 },
    { name: "UI/UX Design", level: 88 },
    { name: "Adobe Illustrator", level: 92 },
    { name: "WordPress", level: 95 },
    { name: "Shopify", level: 90 },
    { name: "Figma", level: 85 }
  ];
  const services = [
    {
      title: "React Web App Development",
      desc: "Custom React.js web applications built for speed, scalability, and modern UX."
    },
    {
      title: "WordPress Website Development",
      desc: "Custom WordPress websites with theme customization and performance optimization."
    },
    {
      title: "Shopify Store Development",
      desc: "Shopify store setup, custom theme development, and conversion-focused design."
    },
    {
      title: "Responsive Web Design",
      desc: "Mobile-first, fully responsive websites that look great on every device."
    }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.23 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "about",
      "aria-label": "About Abdul Rehman — Freelance Front-End Developer in Karachi",
      ref: sectionRef,
      className: "w-full px-3 md:px-20 relative 2xl:px-auto",
      style: { background: "var(--bg-surface)" },
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto py-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("div", { className: "section-label justify-center mb-4", children: "About Me" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-display text-white",
              style: { fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300 },
              children: "Crafting Digital Experiences"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-(--text-secondary) max-w-xl mx-auto text-sm leading-relaxed", children: "Freelance front-end developer in Karachi — specializing in React, WordPress, and Shopify." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "p-8 rounded-lg border transition-all",
              style: {
                backgroundColor: "rgba(33, 33, 33, 0.5)",
                borderColor: "#3a3a3a"
              },
              onMouseEnter: (e) => e.currentTarget.style.borderColor = "#F2CC0F",
              onMouseLeave: (e) => e.currentTarget.style.borderColor = "#3a3a3a",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-white mb-6", children: "Technical Skills" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-7", children: skills.map((skill, index) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-(--text-secondary) font-normal text-sm", children: skill.name }),
                    /* @__PURE__ */ jsxs("span", { className: "font-light text-sm text-[#F2CC0F] transition-all duration-1000 ease-in", children: [
                      isVisible ? skill.level : 0,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-full bg-gray-700 rounded-full h-1 overflow-hidden",
                      role: "progressbar",
                      "aria-valuenow": isVisible ? skill.level : 0,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-label": `${skill.name} proficiency`,
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "h-1 rounded-full transition-all duration-1000 ease-in",
                          style: {
                            width: isVisible ? `${skill.level}%` : "0%",
                            backgroundColor: "#F2CC0F"
                          }
                        }
                      )
                    }
                  )
                ] }, index)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-lg bg-[rgba(33,33,33,0.5)] border border-[#3a3a3a] transition-all hover:border-[#F2CC0F]", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-(--text-primary) mb-4", children: "What I Do" }),
            /* @__PURE__ */ jsx("p", { className: "text-(--text-secondary) leading-relaxed mb-4", children: "I'm a freelance front-end developer based in Karachi, Pakistan, available for hire for React web app development, custom WordPress website development, and Shopify store development. I build fast, responsive, and SEO-friendly web solutions for businesses across Pakistan and worldwide." }),
            /* @__PURE__ */ jsx("p", { className: "text-(--text-secondary) leading-relaxed mb-6", children: "Whether you need a custom React application, WordPress theme customization, or a high-converting Shopify storefront, I focus on clean code, performance, and delivering results that grow your business online." }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: services.map((service, index) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#F2CC0F] mt-1 text-sm", children: "▸" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-(--text-primary) font-medium text-sm", children: service.title }),
                /* @__PURE__ */ jsx("p", { className: "text-(--text-secondary) text-sm leading-snug", children: service.desc })
              ] })
            ] }, index)) })
          ] })
        ] })
      ] })
    }
  );
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Sections/Contact.jsx");
function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [invalid, setInvalid] = useState({
    name: false,
    email: false,
    service: false,
    message: false
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_hkoy1yw",
      "template_h903new",
      form.current,
      "O-td-qvqRQ9uOR8zP"
    ).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", service: "", message: "" });
      },
      () => {
        alert("An error occurred, please try again.");
      }
    );
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      name: prev.name.trim(),
      email: prev.email.trim()
    }));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setInvalid((prev) => ({ ...prev, email: true }));
      return;
    }
    setInvalid((prev) => ({ ...prev, email: false }));
    alert("Submitting your message...");
    sendEmail(e);
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const contactInfo = [
    {
      icon: /* @__PURE__ */ jsx(MapPin, { size: 18 }),
      label: "Location",
      value: "Karachi, Pakistan",
      sub: "Available for remote projects worldwide"
    },
    {
      icon: /* @__PURE__ */ jsx(Mail, { size: 18 }),
      label: "Email",
      value: "a.rehmanaijaz@gmail.com",
      href: "mailto:a.rehmanaijaz@gmail.com"
    },
    {
      icon: /* @__PURE__ */ jsx(Phone, { size: 18 }),
      label: "Phone",
      value: "+92 306 2617692",
      href: "tel:+923062617692"
    }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "contact",
      "aria-label": "Contact Abdul Rehman",
      className: "py-28 px-5 md:px-16",
      style: { background: "var(--bg-base)" },
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("div", { className: "section-label justify-center mb-4", children: "Get In Touch" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-display",
              style: { fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300 },
              children: "Hire a Front-End Developer"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-(--text-secondary) max-w-xl mx-auto text-sm leading-relaxed", children: "Looking for a React, WordPress, or Shopify developer in Pakistan? Let's discuss your project." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "card p-8", children: /* @__PURE__ */ jsxs("form", { ref: form, onSubmit: handleOnSubmit, className: "space-y-5", children: [
            [
              {
                id: "name",
                label: "Your Name",
                type: "text",
                placeholder: "Full name",
                key: "name"
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "you@example.com",
                key: "email"
              }
            ].map(({ id, label, type, placeholder, key }) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: id,
                  className: "block text-xs font-mono-custom tracking-widest uppercase mb-2",
                  style: { color: "var(--text-secondary)" },
                  children: label
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id,
                  type,
                  name: id,
                  required: true,
                  value: formData[key],
                  onChange: handleChange,
                  placeholder,
                  className: "field-input",
                  onBlur: () => setInvalid((prev) => ({
                    ...prev,
                    [key]: formData[key] === ""
                  }))
                }
              ),
              invalid[key] && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs", style: { color: "#e05a5a" }, children: "This field is required" })
            ] }, id)),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "service",
                  className: "block text-xs font-mono-custom tracking-widest uppercase mb-2",
                  style: { color: "var(--text-secondary)" },
                  children: "Service Needed"
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "service",
                  name: "service",
                  required: true,
                  value: formData.service,
                  onChange: handleChange,
                  className: "field-input",
                  onBlur: () => setInvalid((prev) => ({
                    ...prev,
                    service: formData.service === ""
                  })),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select a service" }),
                    /* @__PURE__ */ jsx("option", { value: "react-web-app-development", children: "React Web App Development" }),
                    /* @__PURE__ */ jsx("option", { value: "wordpress-website-development", children: "WordPress Website Development" }),
                    /* @__PURE__ */ jsx("option", { value: "shopify-store-development", children: "Shopify Store Development" }),
                    /* @__PURE__ */ jsx("option", { value: "ui-ux-design", children: "UI/UX Design" }),
                    /* @__PURE__ */ jsx("option", { value: "graphic-design", children: "Graphic Design" })
                  ]
                }
              ),
              invalid.service && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs", style: { color: "#e05a5a" }, children: "This field is required" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "message",
                  className: "block text-xs font-mono-custom tracking-widest uppercase mb-2",
                  style: { color: "var(--text-secondary)" },
                  children: "Project Details"
                }
              ),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  rows: "4",
                  value: formData.message,
                  onChange: handleChange,
                  placeholder: "Tell me about your project...",
                  className: "field-input resize-none",
                  onBlur: () => setInvalid((prev) => ({
                    ...prev,
                    message: formData.message === ""
                  }))
                }
              ),
              invalid.message && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs", style: { color: "#e05a5a" }, children: "This field is required" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "btn-primary w-full justify-center cursor-pointer",
                children: "Send Message"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "card p-8", children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "font-display mb-7",
                  style: { fontSize: "1.4rem", fontWeight: 400 },
                  children: "Contact Information"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "space-y-7", children: contactInfo.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start group", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                    style: {
                      background: "rgba(242,204,15,0.08)",
                      color: "var(--gold)",
                      border: "1px solid rgba(242,204,15,0.15)"
                    },
                    children: item.icon
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "font-mono-custom text-[0.6rem] tracking-widest uppercase mb-1",
                      style: { color: "var(--text-primary)" },
                      children: item.label
                    }
                  ),
                  item.href ? /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: item.href,
                      className: "text-sm transition-colors duration-200",
                      style: { color: "var(--text-secondary)" },
                      onMouseEnter: (e) => e.currentTarget.style.color = "var(--gold)",
                      onMouseLeave: (e) => e.currentTarget.style.color = "var(--text-secondary)",
                      children: item.value
                    }
                  ) : /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-sm",
                      style: { color: "var(--text-secondary)" },
                      children: item.value
                    }
                  ),
                  item.sub && /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: { color: "var(--text-secondary)" },
                      children: item.sub
                    }
                  )
                ] })
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "p-8 rounded-sm flex-1",
                style: {
                  background: "var(--gold)",
                  color: "#0d0d0d"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: "font-display mb-3",
                      style: { fontSize: "1.4rem", fontWeight: 600 },
                      children: "Let's Build Something Great"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-sm leading-relaxed",
                      style: { color: "rgba(13,13,13,0.7)" },
                      children: "Looking to hire a React JS developer, WordPress developer, or Shopify developer in Karachi? I provide custom web solutions for businesses across Pakistan and worldwide."
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Sections/Home.jsx");
function Home() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      role: "main",
      id: "home",
      className: "pb-20 w-full px-3 md:px-20 relative 2xl:px-30 overflow-hidden",
      style: { background: "var(--bg-base)" },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 60% at center, rgba(242,204,15,0.055) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 40% 50% at center, rgba(242,204,15,0.025) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none opacity-[0.045]",
            style: {
              backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto relative", children: [
          /* @__PURE__ */ jsx("div", { className: "w-auto pt-5 -right-20 lg:right-0 absolute inset-0 pointer-events-none mouse-events-none hidden sm:flex justify-end -bottom-100", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "h-full lg:h-200 2xl:h-auto object-cover",
              src: "/Mypic.webp",
              alt: "Abdul Rehman — Freelance Front-End Developer in Karachi, Pakistan",
              loading: "eager",
              fetchpriority: "high"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto flex-1 pt-12", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: [
              "I'm ",
              /* @__PURE__ */ jsx("span", { className: "text-[#F2CC0F]", children: "Abdul Rehman" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-4xl font-semibold inline-block text-white transition hover:text-[#F2CC0F] duration-300 mt-2 md:mt-4", children: "Freelance Front-End Developer" }),
            /* @__PURE__ */ jsx("p", { className: "text-(--text-secondary) md:text-lg leading-relaxed mt-3 md:mt-4 sm:w-1/2", children: "I'm a Shopify store developer, React developer, WordPress developer, and website designer available for hire. I specialize in custom React web app development, WordPress website development, and Shopify store development. Based in Karachi, I build fast, responsive, and SEO-friendly web solutions for businesses across Pakistan and worldwide." }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-2 mt-5 anim-fadeUp anim-delay-3", children: [
              "React Web Apps",
              "Shopify",
              "WordPress",
              "Responsive Design"
            ].map((tag, i) => /* @__PURE__ */ jsx(
              "li",
              {
                className: "font-mono-custom text-[0.6rem] tracking-widest uppercase px-3 py-1 border",
                style: {
                  borderColor: "rgba(242,204,15,0.2)",
                  color: "var(--gold)",
                  borderRadius: "1px"
                },
                children: tag
              },
              i
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-5 mt-8", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  "aria-label": "Go to contact section",
                  className: "min-h-12 flex items-center justify-center text-black text-lg px-6 py-3 rounded-lg transition-all hover:scale-105 font-medium border-2 border-amber-300 bg-[#F2CC0F]",
                  children: "Hire Me"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#portfolio",
                  "aria-label": "Go to portfolio section",
                  className: "min-h-12 flex items-center justify-center px-6 py-3 rounded-lg hover:scale-105 transition-all font-medium hover:bg-[rgba(242,204,15,0.1)] text-lg border-2 border-[#F2CC0F] text-[#F2CC0F]",
                  children: "View Work"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-5 pt-10 text-3xl justify-center sm:justify-start", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  "aria-label": "Github",
                  className: "text-gray-400 transition-all hover:scale-125 hover:text-[#F2CC0F]",
                  children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      "aria-label": "Visit Abdul Rehman's GitHub profile",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "https://github.com/abdulrehman7876",
                      children: /* @__PURE__ */ jsx(FaGithub, {})
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  "aria-label": "Linkedin",
                  className: "text-gray-400 transition-all hover:scale-125 hover:text-[#F2CC0F]",
                  children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      "aria-label": "Visit Abdul Rehman's LinkedIn profile",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "https://www.linkedin.com/in/abdul-rehman-aijaz/",
                      children: /* @__PURE__ */ jsx(FaLinkedin, {})
                    }
                  )
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Sections/Portfolio.jsx");
function Portfolio() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [dots, setDots] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(1);
        setDots(true);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
        setDots(false);
      } else {
        setSlidesToShow(3);
        setDots(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const projects = [
    {
      title: "E-Commerce React Web App",
      category: "React Web App Development",
      description: "A custom React.js e-commerce platform featuring product listings, cart functionality, authentication, and responsive design.",
      image: "/luxe.webp",
      link: "https://luxe-ecommrse-store.vercel.app/"
    },
    {
      title: "Cafe Website Development",
      category: "Html, CSS & JavaScript",
      description: "Modern café website showcasing menu, location, and contact information with a focus on responsive design and user experience.",
      image: "/corticafe.webp",
      link: "https://corticafe.netlify.app/"
    },
    {
      title: "Cafe Landing Page UI/UX Design",
      category: "UI/UX & Responsive Web Design",
      description: "Modern café website with a focus on UI/UX design, mobile-first layout, and smooth user experience.",
      image: "/uiux.webp",
      link: "https://thecafeweb.netlify.app/"
    },
    {
      title: "Brand Logo & Graphic Design",
      category: "Graphic Design",
      description: "Professional logo and branding assets designed for businesses — clean, memorable, and versatile.",
      image: "/Graphic.webp",
      link: "https://www.behance.net/abdulrehmanarts"
    },
    {
      title: "WordPress Website Development",
      category: "WordPress Theme Customization",
      description: "A fully customized WordPress website with theme customization, responsive layout, and performance optimization.",
      image: "/Wordpress-Clone.webp",
      link: ""
    }
  ];
  const settings = {
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3e3,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    dots
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "portfolio",
      "aria-label": "Portfolio — React, WordPress & Shopify Projects by Abdul Rehman",
      className: "2xl:px-30 py-20 px-3 md:px-20 bg-(--bg-surface) 2xl:place-items-center",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "section-label justify-center mb-4", children: "My Work" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-display",
              style: { fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300 },
              children: "Portfolio & Recent Work"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-(--text-secondary) max-w-xl mx-auto text-sm leading-relaxed", children: "A selection of React, WordPress, Shopify, and UI/UX design projects." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative px-0 md:px-10 2xl:max-w-[1536px]", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => sliderRef.current.slickPrev(),
              "aria-label": "Previous project",
              "aria-hidden": "false",
              className: "absolute left-5 md:left-0 top-1/3 z-10 bg-black/50 hover:text-black text-[#f2cc0f] hover:bg-[#f2cc0f] border-2 border-[#f2cc0f] rounded-full p-2 text-3xl cursor-pointer transition",
              children: /* @__PURE__ */ jsx(RiArrowLeftSLine, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => sliderRef.current.slickNext(),
              "aria-label": "Next project",
              "aria-hidden": "false",
              className: "absolute right-5 md:right-0 top-1/3 z-10 bg-black/50 md:bg-none hover:text-black text-[#f2cc0f] hover:bg-[#f2cc0f] border-2 border-[#f2cc0f] rounded-full p-2 text-3xl cursor-pointer transition",
              children: /* @__PURE__ */ jsx(RiArrowRightSLine, {})
            }
          ),
          /* @__PURE__ */ jsx(
            Slider,
            {
              ref: sliderRef,
              ...settings,
              className: "2xl:max-w-[1536px]",
              "aria-hidden": "false",
              "aria-label": "Project carousel showcasing Abdul Rehman's portfolio of React, WordPress, Shopify, and UI/UX design projects",
              role: "region",
              children: projects.map((p, i) => /* @__PURE__ */ jsx("div", { className: "px-2 md:px-4 text-center", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: p.link || "#portfolio",
                  "aria-label": `View project: ${p.title} — ${p.category}`,
                  "aria-hidden": "false",
                  target: p.link ? "_blank" : "_self",
                  rel: "noopener noreferrer",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        loading: "lazy",
                        src: p.image,
                        alt: `${p.title} — ${p.category} by Abdul Rehman, front-end developer Karachi`,
                        className: "w-full sm:h-120 object-cover hover:scale-105 transition"
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-xl  mt-4 text-center hover:text-(--gold)", children: p.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-(--gold) text-sm font-medium text-center mt-1", children: p.category }),
                    /* @__PURE__ */ jsx("p", { className: "text-(--text-secondary) text-sm text-center mt-1 px-2", children: p.description })
                  ]
                }
              ) }, i))
            }
          )
        ] })
      ]
    }
  );
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/assets/Svg.jsx");
const WebDevelopmentIcon = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      height: "100%",
      viewBox: "0 0 800 572.62",
      "xmlns:v": "https://vecta.io/nano",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M635.5 63.362l-3-1.936c-28.805-18.422-59.679-33.388-91.985-44.589l-7.491 103.335h-47.487V1.753L476.523.001v120.171H420.09c-31.067 0-60.861-12.341-82.828-34.309s-34.309-51.762-34.309-82.828h0a292.9 292.9 0 0 0-9.026 2.1v115.037h-45.963l-7.136-98.536c-33.199 12.732-64.716 29.476-93.851 49.858l-1.5 1.042-7.514 5.418v394.224h135.463l-2.394-33.158-13.172-182.056h265.256L509.944 439.02l-2.394 33.158h133.963V67.348q-2.99-2.027-6.013-3.986zM293.928 226.898h-38.244l-7.067-97.7h45.311zm182.595 0H412.29v-1.936a7.08 7.08 0 0 0-7.09-7.078h-27.924c-1.877-.001-3.678.745-5.006 2.072s-2.073 3.128-2.072 5.006v1.936h-67.245v-97.7h173.57zm9.014 0v-97.7h46.834l-7.067 97.7z",
            fill: "#e6e6e6"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M0 497.423a316.83 316.83 0 0 0 28.591 33.158l742.819 1.146a316.84 316.84 0 0 0 28.591-33.159z",
            fill: "#f2f2f2"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M506.078 391.249v98.163a4.72 4.72 0 0 0 4.718 4.718h145.462c2.605-.002 4.716-2.113 4.718-4.718v-98.163c-.006-2.602-2.116-4.71-4.718-4.713H510.796c-2.602.003-4.712 2.111-4.718 4.713z",
            fill: "#3f3d56"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M509.491 392.469v95.73c.003 1.391 1.13 2.518 2.521 2.521h143.04c1.391-.003 2.518-1.13 2.521-2.521v-95.73a2.53 2.53 0 0 0-2.521-2.527h-143.04a2.53 2.53 0 0 0-2.521 2.527z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M503.036 508.555a2.83 2.83 0 0 0 2.226 1.07h155.761c.862-.002 1.678-.391 2.221-1.061s.756-1.549.579-2.393l-2.418-11.485a2.87 2.87 0 0 0-1.785-2.082c-.324-.127-.669-.192-1.017-.192H507.67c-.348 0-.693.065-1.017.192a2.87 2.87 0 0 0-1.785 2.082l-2.418 11.485c-.174.844.041 1.721.585 2.389z",
            fill: "#2f2e41"
          }
        ),
        /* @__PURE__ */ jsxs("g", { fill: "#3f3d56", children: [
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "4.797",
              height: "2.878",
              rx: ".488",
              transform: "matrix(-1 0 0 -1 513.577 497.354)"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "4.797",
              height: "2.878",
              rx: ".488",
              transform: "matrix(-1 0 0 -1 513.691 502.151)"
            }
          ),
          /* @__PURE__ */ jsx("path", { d: "M610.998 507.909h-37.261a.56.56 0 0 1-.559-.559v-1.76a.56.56 0 0 1 .559-.559h37.261a.56.56 0 0 1 .559.559v1.76a.56.56 0 0 1-.559.559z" })
        ] }),
        /* @__PURE__ */ jsxs("g", { fill: "#fff", className: "lines", children: [
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "529.215", y: "410.887" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "566.467", y: "410.887" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "577.021", y: "410.887" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "539.348",
              y: "410.588"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "589.016",
              y: "410.588"
            }
          ),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "539.149", y: "418.957" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "576.4", y: "418.957" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "586.955", y: "418.957" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "549.282",
              y: "418.659"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "598.949",
              y: "418.659"
            }
          ),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "549.083", y: "427.029" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "586.333", y: "427.029" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "596.888", y: "427.029" }),
          /* @__PURE__ */ jsx("rect", { width: "23.819", height: "3.576", rx: "1.561", x: "559.215", y: "426.73" }),
          /* @__PURE__ */ jsx("rect", { width: "23.819", height: "3.576", rx: "1.561", x: "608.883", y: "426.73" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "559.016", y: "435.099" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "596.267", y: "435.099" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "606.821", y: "435.099" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "569.149",
              y: "434.801"
            }
          ),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "566.467", y: "467.193" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "577.021", y: "467.193" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "589.016",
              y: "467.491"
            }
          ),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "529.215", y: "467.193" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "539.348",
              y: "467.491"
            }
          ),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "539.149", y: "459.122" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "576.4", y: "459.122" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "586.955", y: "459.122" }),
          /* @__PURE__ */ jsx("rect", { width: "23.819", height: "3.576", rx: "1.561", x: "549.282", y: "459.42" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "549.083", y: "451.051" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "586.333", y: "451.051" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "596.888", y: "451.051" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "559.215",
              y: "451.349"
            }
          ),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "559.016", y: "442.98" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "596.267", y: "442.98" }),
          /* @__PURE__ */ jsx("rect", { width: "6.833", height: "3.576", rx: "1.561", x: "606.821", y: "442.98" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: "23.819",
              height: "3.576",
              rx: "1.561",
              x: "569.149",
              y: "443.278"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M158.184 386.54v117.469h82.295V386.54a3.95 3.95 0 0 0-2.783-3.78c-.381-.126-.779-.187-1.18-.183h-74.358c-1.053-.002-2.063.415-2.808 1.158s-1.165 1.752-1.166 2.805zm32.12 40.363c0-3.139 1.674-6.039 4.392-7.608s6.067-1.569 8.785 0 4.393 4.469 4.392 7.608v13.63c0 3.139-1.674 6.039-4.392 7.608s-6.067 1.569-8.785 0-4.393-4.469-4.392-7.608z",
            fill: "#2f2e41"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M157.932 500.252v11.328a2.23 2.23 0 0 0 2.211 2.222h78.378a2.22 2.22 0 0 0 2.211-2.222v-11.328zM28.723 209.558V424.04a10.32 10.32 0 0 0 10.308 10.308h317.842a10.32 10.32 0 0 0 10.308-10.308V209.558c-.012-5.687-4.621-10.292-10.308-10.3H39.031c-5.687.007-10.296 4.613-10.308 10.3z",
            fill: "#3f3d56"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M36.179 212.227v209.167a5.52 5.52 0 0 0 5.509 5.509h312.537a5.52 5.52 0 0 0 5.509-5.509V212.227a5.52 5.52 0 0 0-5.509-5.521H41.688a5.52 5.52 0 0 0-5.509 5.521z",
            fill: "#fff"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M94.183 513.035c.645.808 1.624 1.276 2.657 1.271h185.937a3.42 3.42 0 0 0 3.344-4.123l-2.886-13.71a3.43 3.43 0 0 0-2.13-2.485c-.387-.152-.799-.229-1.214-.229H99.713c-.415 0-.827.077-1.214.229-1.085.414-1.887 1.349-2.13 2.485l-2.886 13.71a3.42 3.42 0 0 0 .7 2.852z",
            fill: "#2f2e41"
          }
        ),
        /* @__PURE__ */ jsxs("g", { fill: "#3f3d56", children: [
          /* @__PURE__ */ jsx("path", { d: "M344.082 235.52H51.643c-.642 0-1.163-.521-1.163-1.163s.521-1.163 1.163-1.163h292.44c.642 0 1.163.521 1.163 1.163s-.521 1.163-1.163 1.163z" }),
          /* @__PURE__ */ jsx("ellipse", { cx: "71.549", cy: "220.288", rx: "6.815", ry: "6.967" }),
          /* @__PURE__ */ jsx("ellipse", { cx: "95.093", cy: "220.288", rx: "6.815", ry: "6.967" }),
          /* @__PURE__ */ jsx("ellipse", { cx: "118.637", cy: "220.288", rx: "6.815", ry: "6.967" }),
          /* @__PURE__ */ jsx("path", { d: "M515.894 493.654h138.582l2.729 9.163H515.894zm-185.989-278.61h-16.723c-.685.019-1.23.58-1.23 1.266s.545 1.246 1.23 1.265h16.722c.461.013.892-.225 1.126-.622s.234-.89 0-1.286-.665-.635-1.126-.622zm-.001 4.753h-16.722c-.452 0-.87.241-1.096.633s-.226.874 0 1.266.644.633 1.096.633h16.722c.461.013.892-.225 1.126-.622s.234-.89 0-1.286-.665-.635-1.126-.622zm.001 4.754h-16.723c-.685.019-1.23.58-1.23 1.265s.545 1.246 1.23 1.265h16.722c.461.013.892-.225 1.126-.622s.234-.89 0-1.286-.665-.635-1.126-.622z" })
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M712.563 505.253a6.47 6.47 0 0 0 6.233 4.366l26.706-.687a6.38 6.38 0 0 0 6.029-4.695l3.779-40.411c1.341.607 2.8.907 4.272.878a9.74 9.74 0 0 0 9.491-9.981 9.74 9.74 0 0 0-9.981-9.491 8.25 8.25 0 0 0-1.75.182 6.6 6.6 0 0 0-4.913-2.12l-41.079 1.061a5.89 5.89 0 0 0-1.013.126c-1.822.34-3.409 1.452-4.35 3.049s-1.146 3.523-.562 5.282zm43.522-44.17l2.689-9.63c.306-1.112.313-2.285.021-3.4.13 0 .246-.062.376-.062a6.97 6.97 0 0 1 7.128 6.801 6.97 6.97 0 0 1-6.801 7.128c-1.192.037-2.372-.251-3.412-.835z",
            fill: "#e6e6e6"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M710.338 444.485c.875 5 10.715 8.522 22.546 7.911 10.88-.5 19.776-4.322 21.406-8.849a6.07 6.07 0 0 0-1.859-.248l-41.079 1.061a5.9 5.9 0 0 0-1.013.126z",
            fill: "#d6d6e3"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M431.055 415.945s-88.873 10.718-80.387 0c3.073-3.877 3.921-15.363 3.751-28.448-.054-3.975-.2-8.092-.4-12.192-.983-19.65-3.349-38.854-3.349-38.854s77.708-36.621 68.776-7.592c-3.573 11.728-2.4 28.2.313 43.659.795 4.511 1.715 8.932 2.68 13.13 2.353 10.239 5.229 20.352 8.616 30.297z",
            fill: "#ed9da0"
          }
        ),
        /* @__PURE__ */ jsxs("g", { className: "mainBody", children: [
          /* @__PURE__ */ jsx("path", { d: "M262.367 572.584v-.75l156.862-1.706 95.572-.893h.268l-.1 1.322.134-1.322h.17v-.152l1.224-12.013.464-4.546.143-1.42.125-1.188 5.52-18.409 5.52-18.382 4.645-15.479 7.092-23.652s-4.019-9.379-6.252-12.058-11-21.856-11-21.856-12.523-17.292-20.856-19.382c-3.492-.893-10.388-2.081-17.712-3.573-2.742-.554-23.758-6.624-25.009-7.467-6.565-4.814-23.018-5.359-23.652-5.359h0c-.002-.021-.002-.042 0-.063v-.08c.023-.375.023-.75 0-1.125.01-.418-.017-.836-.08-1.25.009-.152-.012-.304-.063-.447a12.98 12.98 0 0 0-.179-1.018c-.027-.159-.063-.317-.107-.473a15.38 15.38 0 0 0-1.117-3.117c-.063-.143-.143-.295-.214-.438-.438-.825-.946-1.611-1.518-2.349a8.11 8.11 0 0 0-.375-.464c-.732-.863-1.546-1.652-2.43-2.358-.241-.188-.491-.384-.75-.563a4.17 4.17 0 0 0-.456-.322l-.795-.518-.741-.429c-.652-.357-1.34-.706-2.09-1.036-.232-.107-.482-.205-.732-.3l-.974-.375h-.054l-.67-.268c-.509-.17-1.027-.322-1.572-.473l-.831-.214-.893-.205-.893-.188c-.893-.179-1.849-.339-2.849-.464l-1.018-.125-1.045-.107-1.081-.089-1.536-.089-1.786-.063a111.39 111.39 0 0 0-23.448 2.494 64.55 64.55 0 0 0-16.3-1.5h-.777l-.893.054h-.574l-1.152.107c-.39.018-.778.063-1.161.134l-1.17.161-.589.1-1.786.33q-.295.054-.589.134a30.85 30.85 0 0 0-2.322.607 18.93 18.93 0 0 0-1.152.366 5.15 5.15 0 0 0-.572.2l-.572.205-.563.223-.67.268c-.339.143-.67.295-1 .456a6.28 6.28 0 0 0-.554.268c-.179.098-.366.179-.536.277-2.02 1.043-3.886 2.36-5.547 3.912l-.456.438-.447.456c-.152.152-.295.313-.438.473a21.27 21.27 0 0 0-1.626 2.01 13.17 13.17 0 0 0-.411.572c-.567.836-1.08 1.707-1.536 2.608-.116.214-.223.438-.33.652-.729 1.509-1.326 3.078-1.786 4.689q-.25.893-.456 1.786s-18.909 8.343-34.593 14.381c-4.171 1.608-8.1 3.064-11.388 4.162l-2.68.893a23.85 23.85 0 0 1-5.582 1.286c-.898.015-1.794.098-2.68.25-7.208 1.17-19.561 6.252-20.91 11.353-.109.407-.14.831-.089 1.25l-29.7 92.624c-1.3 6.806-4.2 19.766-5.627 25.009l-3.671 12.951c-.016.108-.046.213-.089.313l40.042-.393v.75h.125z" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M573.073 525.138s30.511-4.689 31.11 8.709-15.559 22.758-15.559 22.758z",
              fill: "#ed9da0"
            }
          ),
          /* @__PURE__ */ jsx("path", { d: "M595.697 551.933s-.795 1.893-2.26 4.636c-2.216 4.219-4.914 8.166-8.039 11.763l-.241.259h-1.447l-51.573.473h-1.233l-.152-.179-10-11.87-3.769-4.475-.152-.188-.321-.375-.179-.214-.232-.277-7.333-8.7 2.68-11.165 4.564-18.811.116-.456.893-3.573.634-2.68 2.126-8.735 7.288-30.056 12.951 6.7 13.655 24.123 7.333 12.951h4.017c.759 0 2.5 1.465 4.252 3.153a71.55 71.55 0 0 1 1.786 1.786c1.59 1.643 2.849 3.055 2.849 3.055s6.511.143 8.262 5.27a6.25 6.25 0 0 1 .223.759c.581 2.015 1.337 3.976 2.26 5.859 1.152 2.51 2.6 5.359 4.064 8.208a443.54 443.54 0 0 0 6.511 12l.125.223z" })
        ] }),
        /* @__PURE__ */ jsx("path", { d: "M435.575 403.065c-25.9 4.77-74.671 3.742-95.75 3.019 7.726-27.689 45.4-18.275 45.4-18.275 46.635-9.307 50.207 10.004 50.35 15.256z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M262.367 572.585v-.75l156.862-1.706 95.572-.893h.268v-.152l.893-12 .384-5.359 1.465-20.2 1.152-15.988v-.393c.053-.737.019-1.477-.1-2.206a.27.27 0 0 0 0-.089 9.28 9.28 0 0 0-1.786-4.144c-1.999-2.564-5.18-3.915-8.414-3.573-10.817 1.108-21.74 1.992-32.673 2.68l-4.466.277c-70.509 4.189-140.383.795-178.192-1.786l-2.68-.2-16.238-1.259c-4.803-.405-9.137 2.884-10.039 7.619-.09.484-.144.973-.161 1.465l-.607 19.793-.831 25.072-.393 12.826v1z",
            fill: "gray"
          }
        ),
        /* @__PURE__ */ jsxs("g", { className: "head", children: [
          /* @__PURE__ */ jsx("circle", { cx: "379.201", cy: "325.961", fill: "#ed9da0", r: "51.737" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M449.129 289.823c-.81-.866-1.938-1.365-3.123-1.382l.778-2.16a4.1 4.1 0 0 0-4.6-5.457l-2.833.546.267-1.893a4.1 4.1 0 0 0-5.492-4.435c-1.23.484-2.613.386-3.762-.267-1.153-.633-1.969-1.742-2.229-3.031l-.987-4.76-.1-.255c-4.807-8.012-14.049-13.84-25.359-15.977-10.067-1.916-20.389-.94-30.34-.023-3.948.372-8.406.79-12.122 3.065-3.158 1.951-5.829 5.852-5.283 9.788-9.811-3.007-20.331 3-25.544 10.566-6.177 9.01-7.187 20.3-7.35 29.12-.441 20.877 3.867 37.957 12.772 50.775.65.929.813 2.868 2.1 3.518l-.267-.43c1.44.72 2.9 1.881 2.357 3.123-1.567 3.576 8.848 11.483 16.186 14.1 13.388 4.772 31.187 4.366 43.7 2.647l.441-2.961c4.517-.615 7.7-1.788 8.592-3.623 1.579-1.347 2.926-2.554 4.1-3.669l.012-.012c.023-.023.07-.058.093-.081 5.655-5.422 6.967-8.511 7.559-13.213.569-4.61-.441-9.289-1.475-13.5 21.759 3.367-8.569-23.176 11.7-28.308a6.31 6.31 0 0 1 .708-.174l1.753-.441a30.7 30.7 0 0 0 7.8-3.332c5.666-3.448 7.536-8.023 10.462-13.178a3.98 3.98 0 0 0-.522-4.679z",
              fill: "#090814"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("path", { d: "M153.957 278.325h87.048c3.795 0 6.872 3.077 6.872 6.872s-3.077 6.872-6.872 6.872h-87.048c-3.795 0-6.872-3.077-6.872-6.872s3.077-6.872 6.872-6.872z" }),
        /* @__PURE__ */ jsxs("g", { fill: "#e6e6e6", children: [
          /* @__PURE__ */ jsx("use", { href: "#B" }),
          /* @__PURE__ */ jsx("use", { href: "#B", y: "32.071" })
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
          "path",
          {
            id: "B",
            d: "M131.05 310.395h132.863c3.795 0 6.872 3.077 6.872 6.872s-3.077 6.872-6.872 6.872H131.05c-3.795 0-6.872-3.077-6.872-6.872s3.077-6.872 6.872-6.872z"
          }
        ) })
      ]
    }
  );
};
const GraphicDesignIcon = () => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 500 500", height: "150%", children: [
    /* @__PURE__ */ jsx("style", { children: ".B{stroke:#263238}.C{stroke-linejoin:round}.D{fill:#263238}.E{fill:#fff}.F{fill:none}.G{fill:#5e5e5e}.H{stroke-linecap:round}.I{stroke:#5e5e5e}.J{stroke-miterlimit:10}" }),
    /* @__PURE__ */ jsx("use", { className: "G", href: "#B", transformOrigin: "245.204px 252.137px" }),
    /* @__PURE__ */ jsxs("g", { className: "E", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M399.93 114.08c-26.79-22.14-60.83-33-100-20.68-38.71 12.14-61.68 48-96.05 67.08-36.57 20.31-81.24 18.23-120.1 32.86-27.47 10.34-47.61 32.66-54.43 61.3C16 310.67 41.23 371.42 91.72 399.77c31.48 17.68 69.68 20.88 104 9.92 26.32-8.42 49.94-23.87 76.2-32.74 45.61-15.41 96.47-9.15 140.6-30.21 46.71-22.28 56.64-69.66 50.39-115-5.73-41.19-28.26-88.95-62.98-117.66Z",
          className: "animable",
          style: {
            fill: "#fff",
            opacity: 0.7,
            transformOrigin: "245.204px 252.137px"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M308.47 124.33h108.08v147.06H308.47z",
          className: "animable",
          style: {
            fill: "#fff",
            transformOrigin: "362.51px 197.86px",
            transform: "rotate(90.03deg)"
          }
        }
      ),
      /* @__PURE__ */ jsx("use", { href: "#B", opacity: 0.7, transformOrigin: "245.204px 252.137px" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m-124.491 308.405-.057 108.08-147.06-.077.057-108.08z",
          transformOrigin: "362.51px 197.86px"
        }
      ),
      /* @__PURE__ */ jsxs("g", { className: "B C", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M415.28 235.73s-6.74-8-25.68-10-11.66 5.76 1 12.48 24.68-2.48 24.68-2.48z",
            transformOrigin: "396.666px 233.038px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M413.66 210c-3.4-16.56 2.82-24.45 2.82-24.45s10.69 8.2 12.19 20.45a41.9 41.9 0 0 1-3.76 22.29s-7.85-1.73-11.25-18.29z",
            transformOrigin: "420.774px 206.92px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M404.32 206.35s-11.84-6.41-15.14-19.8 1.95-17.62 1.95-17.62 8.4 11.79 11.48 18.82 1.71 18.6 1.71 18.6z",
            transformOrigin: "396.357px 187.64px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M394.18 208.22s-10.42-3.17-19.85.33a123 123 0 0 0-15.15 6.64s5.15 2.91 16 2.66 19-9.63 19-9.63z",
            transformOrigin: "376.68px 212.385px"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "F B C", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M422.82 238.22s-14.16-23.45-41.75-48.11-62-34.06-76.48-20 3.5 19.75 9.31 9.46",
          className: "H",
          transformOrigin: "360.95px 200.885px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M377.27 181.46s-13.5-10.2-17.77-19.94.19-14.27 6.75-8.12 11.02 28.06 11.02 28.06z",
          transformOrigin: "367.545px 166.028px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M372.72 193.13s-8.06-8.08-17.12-6.68-14.3 5.63-5 9.27 22.12-2.59 22.12-2.59z",
          transformOrigin: "359.213px 191.574px"
        }
      ),
      /* @__PURE__ */ jsxs("g", { className: "H", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m304.76 204.7 38.68.29",
            transformOrigin: "324.1px 204.845px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m304.17 216.47 43.87.31",
            transformOrigin: "326.105px 216.625px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m309.13 230.41 52.87-.18",
            transformOrigin: "335.565px 230.32px"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M347.87 173.12a47 47 0 0 0-16.95-.61 21.11 21.11 0 0 0-12.92 7.37s24.48 1.94 29.87-6.76z",
          transformOrigin: "332.935px 176.039px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M354 164.7s-4.45-10.14-13-13.87-7.12.82-7.12.82S341.86 166 354 164.7Z",
          transformOrigin: "343.895px 157.072px"
        }
      ),
      /* @__PURE__ */ jsxs("g", { strokeWidth: 2, className: "H", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M392.45 161.72s-11.53 2.34-10.61 10.67 9.75 11 14.53 9.46 6.23-8.2 4-13.24-10-5.42-14.11.19",
            transformOrigin: "391.591px 171.992px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M410.46 155.46 405 170.41",
            transformOrigin: "407.73px 162.935px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m401.96 159.74 15.35 6.37",
            transformOrigin: "409.635px 162.925px"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "m446.67 251.93-1.1 8.13-3.91-7.3-11.04-66.45 5.01-.83 11.04 66.45z",
        className: "B C E",
        transformOrigin: "438.645px 222.77px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M437.26 185.44h2.77v67.36h-2.77z",
        className: "animable",
        style: {
          fill: "#5e5e5e",
          stroke: "#263238",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: ".5px",
          transformOrigin: "438.645px 219.12px",
          transform: "rotate(-9.43deg)"
        }
      }
    ),
    ";",
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "m446.66 251.94-4.99.83 3.9 7.29 1.09-8.12z",
        className: "B C F",
        transformOrigin: "444.165px 256px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "m443.62 256.41 1.95 3.65.55-4.06-2.5.41z",
        className: "B C D",
        transformOrigin: "444.87px 258.03px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M431.89 178.45a2.54 2.54 0 0 0-2.09 2.92l.82 4.94 5-.83-.82-4.94a2.54 2.54 0 0 0-2.91-2.09z",
        className: "B C E",
        transformOrigin: "432.693px 182.364px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M431.89 178.45a2.54 2.54 0 0 0-2.09 2.92l.4 2.36 5-.83-.39-2.36a2.54 2.54 0 0 0-2.92-2.09z",
        className: "B C D",
        transformOrigin: "432.483px 181.073px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M87.74 262.58h156.49a10.67 10.67 0 0 1 10.67 10.67v99.08A11.67 11.67 0 0 1 243.22 384H88.74a11.67 11.67 0 0 1-11.67-11.67v-99.09a10.67 10.67 0 0 1 10.67-10.66z",
        className: "B C E",
        transformOrigin: "165.985px 323.29px"
      }
    ),
    /* @__PURE__ */ jsxs("g", { className: "D", children: [
      /* @__PURE__ */ jsx("use", { href: "#C", transformOrigin: "139.195px 277.82px" }),
      /* @__PURE__ */ jsx("use", { href: "#D", transformOrigin: "107.125px 319.7px" }),
      /* @__PURE__ */ jsx("use", { href: "#E", transformOrigin: "148.14px 287.29px" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M122.6 274.53h10.01v6.58H122.6z",
          transformOrigin: "127.605px 277.82px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 10.95, href: "#E", transformOrigin: "159.09px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: 11.59, href: "#C", transformOrigin: "150.785px 277.82px" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M88.55 304.28h17.61v9.22H88.55z",
          transformOrigin: "97.355px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: -21.89, href: "#E", transformOrigin: "126.25px 287.29px" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M88.55 315.09h12.35v9.22H88.55z",
          transformOrigin: "94.725px 319.7px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 23.19, href: "#C", transformOrigin: "162.385px 277.82px" }),
      /* @__PURE__ */ jsx("use", { x: -43.78, href: "#E", transformOrigin: "104.36px 287.29px" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M99.42 274.53h10.01v6.58H99.42z",
          transformOrigin: "104.425px 277.82px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: -23.18, href: "#C", transformOrigin: "116.015px 277.82px" }),
      /* @__PURE__ */ jsx("use", { x: -32.83, href: "#E", transformOrigin: "115.31px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: -10.94, href: "#E", transformOrigin: "137.2px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: 69.55, href: "#C", transformOrigin: "208.745px 277.82px" }),
      /* @__PURE__ */ jsx("use", { x: 81.14, href: "#C", transformOrigin: "220.335px 277.82px" }),
      /* @__PURE__ */ jsx("use", { x: 65.68, href: "#E", transformOrigin: "213.82px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: 76.62, href: "#E", transformOrigin: "224.76px 287.29px" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M232.98 315.09h13.79v9.22h-13.79z",
          transformOrigin: "239.875px 319.7px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 92.73, href: "#C", transformOrigin: "231.925px 277.82px" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M88.55 282.68h9.56v9.22h-9.56z",
          transformOrigin: "93.33px 287.29px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 34.78, href: "#C", transformOrigin: "173.975px 277.82px" }),
      /* @__PURE__ */ jsx("use", { x: 46.37, href: "#C", transformOrigin: "185.565px 277.82px" }),
      /* @__PURE__ */ jsx("use", { x: 32.84, href: "#E", transformOrigin: "180.98px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: 54.73, href: "#E", transformOrigin: "202.87px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: 21.9, href: "#E", transformOrigin: "170.04px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: 43.79, href: "#E", transformOrigin: "191.93px 287.29px" }),
      /* @__PURE__ */ jsx("use", { x: 57.96, href: "#C", transformOrigin: "197.155px 277.82px" }),
      /* @__PURE__ */ jsx("use", { x: 76.12, href: "#D", transformOrigin: "183.245px 319.7px" }),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 124.88,
          y: -10.81,
          href: "#D",
          transformOrigin: "232.005px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 114.01,
          y: -10.81,
          href: "#D",
          transformOrigin: "221.135px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 119.62, href: "#D", transformOrigin: "226.745px 319.7px" }),
      /* @__PURE__ */ jsx("use", { x: 108.75, href: "#D", transformOrigin: "215.875px 319.7px" }),
      /* @__PURE__ */ jsx("use", { x: 87, href: "#D", transformOrigin: "194.125px 319.7px" }),
      /* @__PURE__ */ jsx("use", { x: 97.87, href: "#D", transformOrigin: "204.995px 319.7px" }),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 103.13,
          y: -10.81,
          href: "#D",
          transformOrigin: "210.255px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 92.26,
          y: -10.81,
          href: "#D",
          transformOrigin: "199.385px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M238.52 274.53h8.25v6.58h-8.25z",
          transformOrigin: "242.645px 277.82px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M88.55 274.53h9.29v6.58h-9.29z",
          transformOrigin: "93.195px 277.82px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M88.55 325.89h158.22v9.59H88.55z",
          transformOrigin: "167.66px 330.685px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M231.03 282.68h15.74v9.22h-15.74z",
          transformOrigin: "238.9px 287.29px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M238.23 304.28h8.53v9.22h-8.53z",
          transformOrigin: "242.495px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M235.61 302.64h-1.58v-9.16h-9.3v9.16h-1.58v-9.16h-9.29v9.16h-1.58v-9.16h-9.3v9.16h-1.58v-9.16h-9.29v9.16h-1.58v-9.16h-9.3v9.16h-1.58v-9.16h-9.29v9.16h-1.58v-9.16h-9.3v9.16h-1.58v-9.16h-9.29v9.16h-1.58v-9.16h-9.3v9.16h-1.58v-9.16h-9.29v9.16h-1.58v-9.16h-9.3v9.16h-1.58v-9.16h-9.29v9.16h-1.58v-9.16H88.55v9.22h158.21v-9.22h-11.15v9.16z",
          transformOrigin: "167.655px 298.09px"
        }
      ),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 48.76,
          y: -10.81,
          href: "#D",
          transformOrigin: "155.885px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 81.38,
          y: -10.81,
          href: "#D",
          transformOrigin: "188.505px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 27.01,
          y: -10.81,
          href: "#D",
          transformOrigin: "134.135px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 32.63, href: "#D", transformOrigin: "139.755px 319.7px" }),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 37.88,
          y: -10.81,
          href: "#D",
          transformOrigin: "145.005px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 16.13,
          y: -10.81,
          href: "#D",
          transformOrigin: "123.255px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 10.88, href: "#D", transformOrigin: "118.005px 319.7px" }),
      /* @__PURE__ */ jsx("use", { x: 21.75, href: "#D", transformOrigin: "128.875px 319.7px" }),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 59.63,
          y: -10.81,
          href: "#D",
          transformOrigin: "166.755px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 65.25, href: "#D", transformOrigin: "172.375px 319.7px" }),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 70.51,
          y: -10.81,
          href: "#D",
          transformOrigin: "177.635px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx("use", { x: 43.5, href: "#D", transformOrigin: "150.625px 319.7px" }),
      /* @__PURE__ */ jsx("use", { x: 54.37, href: "#D", transformOrigin: "161.495px 319.7px" }),
      /* @__PURE__ */ jsx(
        "use",
        {
          x: 5.26,
          y: -10.81,
          href: "#D",
          transformOrigin: "112.385px 308.89px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M265.05 170.3H66c-4.18 0-7.23 5.44-6.14 11l14.55 74.39c.75 3.81 3.27 6.46 6.15 6.46h20.32v5.12h130.25v-5.12h19.36c2.88 0 5.4-2.65 6.15-6.46l14.55-74.39c1.09-5.56-1.96-11-6.14-11z",
          className: "B C",
          transformOrigin: "165.525px 218.785px"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M242.53 255.58H88.48l-15.41-76.1h184.87l-15.41 76.1z",
        className: "B C G",
        transformOrigin: "165.505px 217.53px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "m80.51 185.07 12.41 64.97H238.8l12.4-64.97H80.51z",
        className: "E",
        transformOrigin: "165.855px 217.555px"
      }
    ),
    /* @__PURE__ */ jsxs("g", { className: "D", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M178.14 223.34c-5.93-1.14-17.39 2.67-17.39 2.67s2.37 3.42 9.49 4.56 16.59-3.42 16.59-3.42-2.77-2.66-8.69-3.81z",
          transformOrigin: "173.79px 226.94px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M211.72 242.37q-3.94-3.12-8-6.11l.22-.17s-.17-.1-.51-.26a17.43 17.43 0 0 0 .65-8.82c-.88-5.76-8.46-14.87-8.46-14.87s-2.55 3.3-1.27 10.14c1 5.39 6 10.91 8 13l-5.94-4.25c-1.29-.91-2.62-1.8-3.94-2.68s-2.74-1.64-4.1-2.47l-1.4-.81a18.25 18.25 0 0 0 .48-8.35c-.88-5.75-8.46-14.86-8.46-14.86s-2.55 3.3-1.27 10.13c.83 4.46 4.37 9 6.74 11.63l-4.44-2.43a161.48 161.48 0 0 0-15.25-7.13 12.73 12.73 0 0 0-1.46-5.81c-2.05-4-10.7-7.69-10.7-7.69s-1.49 3.55 1.14 8.17a8.77 8.77 0 0 0 1.48 1.87l-1.81-.57c-3.1-.9-6.24-1.64-9.4-2.28-2.4-.47-4.82-.89-7.24-1.23a12.3 12.3 0 0 0-3.21-3.87c-3-2.48-11-3.43-11-3.43s.17 2.89 3.87 5.72a9.79 9.79 0 0 0 1 .65c-.89 0-1.79-.09-2.69-.12a70.56 70.56 0 0 0-9.74.36 37.8 37.8 0 0 0-9.55 2.24 17.21 17.21 0 0 0-7.9 5.87 12.07 12.07 0 0 0-2 4.57 7.58 7.58 0 0 0 .69 5 5.09 5.09 0 0 0 1.93 2 5.6 5.6 0 0 0 2.69.63 9.71 9.71 0 0 0 4.82-1.57 11.7 11.7 0 0 0 2-1.45 5.15 5.15 0 0 0 1.43-2 3.31 3.31 0 0 0 0-2.38 4.9 4.9 0 0 0-1.38-1.92 4.66 4.66 0 0 1 1.16 2 3 3 0 0 1-.2 2.15 7 7 0 0 1-3.41 2.87 8.54 8.54 0 0 1-4.32.93 4 4 0 0 1-1.88-.65 3.91 3.91 0 0 1-1.32-1.36 6 6 0 0 1-.51-4 10.41 10.41 0 0 1 1.74-3.9 15.42 15.42 0 0 1 7.14-5.27 35.71 35.71 0 0 1 9.1-2.13 68.28 68.28 0 0 1 9.49-.35 114.94 114.94 0 0 1 18.94 2.25h.23a17.12 17.12 0 0 0-3.91 0c-4.67.55-12 6.42-12 6.42s2.73 2.15 8.27 1.3 11.17-6.83 11.17-6.83a7.12 7.12 0 0 0-.81-.32 100.93 100.93 0 0 1 6.27 1.6c3 .91 6 2 9 3.09 1 .38 2 .79 3 1.19a17.76 17.76 0 0 0-3.37 0c-4.69.41-12.18 6.05-12.18 6.05s2.66 2.23 8.23 1.55c4.63-.56 9.43-4.67 10.91-6q5.46 2.42 10.73 5.21c2.8 1.47 5.55 3.05 8.28 4.65l4.05 2.47 4.09 2.42 4.14 2.53a23.26 23.26 0 0 0-5.23-.42c-6 .19-16.3 6.4-16.3 6.4s3.11 2.82 10.31 2.37c5.79-.35 12.19-4.63 14.47-6.3q4.38 2.78 8.7 5.63z",
          transformOrigin: "153.563px 221.154px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M137.05 231.66h-40.7a.83.83 0 0 0-.84.82.83.83 0 0 0 .84.81h40.7a.82.82 0 0 0 .84-.81.83.83 0 0 0-.84-.82z",
          transformOrigin: "116.7px 232.475px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M137.05 236.08H97.46a.83.83 0 0 0-.84.81.83.83 0 0 0 .84.82h39.59a.83.83 0 0 0 .84-.82.82.82 0 0 0-.84-.81z",
          transformOrigin: "117.255px 236.895px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M137.05 240.26H98.52a.82.82 0 1 0 0 1.63h38.53a.83.83 0 0 0 .84-.82.82.82 0 0 0-.84-.81z",
          transformOrigin: "117.75px 241.075px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M137.05 244.22H99.51a.83.83 0 0 0-.84.81.83.83 0 0 0 .84.82h37.54a.83.83 0 0 0 .84-.82.82.82 0 0 0-.84-.81z",
          transformOrigin: "118.28px 245.035px"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "G", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m218.73 201.72-6.22 45.6h18.75l8.66-45.6Zm1.83 43.65h-5.33l.75-5.18h5.4Zm1.67-10.51h-5.49l.79-5.49h5.57Zm1.77-11.15h-5.66l.84-5.83h5.74Zm1.87-11.85H220l.89-6.21h5.93Zm3.3 33.51h-5.33l.87-5.18h5.41Zm1.92-10.51h-5.48l.92-5.49h5.57Zm2-11.15h-5.65l1-5.83h5.74Zm2.17-11.85h-5.83l1-6.21h5.93Z",
          transformOrigin: "226.215px 224.52px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M121.53 197.22h93.16l1.16-9.33h-95.32l1 9.33z",
          transformOrigin: "168.19px 192.555px"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "B C", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m341.73 377.53 65.51 38.28 51.26-99.47-61.06-34.7-55.71 95.89z",
          className: "D",
          transformOrigin: "400.115px 348.725px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m344.28 371.12-2.55 6.41 65.5 37.05a13.78 13.78 0 0 1 3.73-6.4Z",
          className: "E",
          transformOrigin: "376.345px 392.85px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m397.19 277.6-52.91 93.52 67.67 38 50.26-94.79-65.02-36.73z",
          className: "D",
          transformOrigin: "403.245px 343.36px"
        }
      ),
      /* @__PURE__ */ jsxs("g", { className: "F H", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m343.95 374.48 18.35 9.13",
            transformOrigin: "353.125px 379.045px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m342.74 376.19 21.46 10.97",
            transformOrigin: "353.47px 381.675px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m408.92 410.33-13.72-8.35",
            transformOrigin: "402.06px 406.155px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m408.07 412.46-22.24-12.94",
            transformOrigin: "396.95px 405.99px"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "G", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M382.11 343.34a49.61 49.61 0 0 0 2.05-9.89 74.63 74.63 0 0 0 .42-8.18 20.23 20.23 0 0 0-6.07 8.11c-2.58 5.72 3.6 9.96 3.6 9.96z",
          transformOrigin: "381.23px 334.305px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M383.46 355.25a91.22 91.22 0 0 1-7.08-6.73s-1.47 8 2.61 11.87 11.85 4.72 11.85 4.72-3.52-6.61-7.38-9.86z",
          transformOrigin: "383.481px 356.815px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M363 357.45a181.74 181.74 0 0 1 17.57-11.76c.19.83 1.15 4.08 5.39 7.4 4.92 3.85 13.74 4.89 13.74 4.89s-4.72-4.49-8.78-7.53a39.15 39.15 0 0 0-10.13-4.89c3.63-2.12 6.44-3.6 8-4.38a17.14 17.14 0 0 0 8.33 2.11c5.33-.16 13.33-4.75 13.33-4.75s-9.35-2.43-14.25-1.14c-2.51.67-4.75 1.43-6.35 2a.58.58 0 0 0-.26.05l-.48.23-1.39.55a33.08 33.08 0 0 0 8.41-8.16 16.26 16.26 0 0 0 2.84-11.59 86.36 86.36 0 0 0-7.74 8.58c-3 4-5.56 11.53-5.91 12.58-2.1 1.14-4.88 2.7-8.09 4.67a22.85 22.85 0 0 0-.79-6c-.93-3.75-.5-11.51-.5-11.51s-3.44 4.91-4.59 9.12c-1.09 4 5.22 8 5.81 8.41-2.32 1.42-4.88 3.06-7.58 4.9a8.43 8.43 0 0 0 .55-3.85c-.36-5.64-.89-10.24-.89-10.24s-4.05 5.55-4.78 9.76a8.26 8.26 0 0 0 1.86 6.6 163.15 163.15 0 0 0-13.18 10.5.6.6 0 0 0-.05.83.6.6 0 0 0 .8 0c2.77-2.46 5.57-4.74 8.32-6.85a70.6 70.6 0 0 0 5.93 5.61c2.78 2.23 10.11 2.25 10.11 2.25s-6.86-6.1-9.83-7.7a8.67 8.67 0 0 0-5.42-.69zm24.46-17 .09.07-.86.44z",
          transformOrigin: "381.698px 343.16px"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "F I J", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m406.27 300.18 34.29 18.78",
          transformOrigin: "423.415px 309.57px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m395.48 304.27 48.41 26.51",
          transformOrigin: "419.685px 317.525px"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "G I J", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m458.09 322.1 4.12-7.77-8.72-4.92 4.6 12.69z",
          transformOrigin: "457.85px 315.755px"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m411.95 409.12 2.93-5.52-11.58.66 8.65 4.86z",
          transformOrigin: "409.09px 406.36px"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "C H", children: [
      /* @__PURE__ */ jsxs("g", { className: "hand", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M282.65 302.65a5.81 5.81 0 0 0-5.87-.89c-5.7 2.3-17 7.26-17.61 10.61-.8 4.48 7.12 31.12 9 40.09s6.33 15 17.41 17.41 25.59-3.69 31.13-13.71-2-19.15-7.78-28.17c-4.6-7.14-20.05-20.21-26.28-25.34z",
            className: "D",
            transformOrigin: "288.879px 335.864px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M333.54 424.23S323 386.85 323 364.85s-3.67-38.08-8.18-45.13-8.74-9.88-10.72-9.88-.56 2.54 2.26 6.21 5.36 5.64 6.49 10.16 1.12 10.15-.29 9.59-3.66-11.85-5.64-16.08-6.77-9.59-9.59-12.13-9-10.16-11.84-8.18-1.13 4.79.56 5.92 8.46 7.9 11.56 12.13 5.08 15 3.39 15.23-6.77-15.51-9.59-18.9-14.1-12.69-16.64-13-2.82 3.67-.57 5.64S284 316.9 286.58 322s3.67 14.39 1.41 12.13-5.92-11.56-9-14.66-12.41-13-14.67-11.85-1.69 4 .28 5.92 9.59 12.7 11.57 18.34 4.23 21.43 3.1 19.18-4.8-13.82-6.77-18.62-5.92-7.05-6.49-4.79.57 3.38 2 8.46 1.41 18.61 5.64 26.23 20.59 28.21 22.85 33.85 8.41 31.4 8.41 31.4",
            className: "B E",
            transformOrigin: "298.199px 363.338px"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { stroke: "#fff", className: "F", children: [
        /* @__PURE__ */ jsx("path", { d: "m99.65 309.94-1.37 2", transformOrigin: "98.965px 310.94px" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M107.15 301.31a51.27 51.27 0 0 0-5.53 6",
            transformOrigin: "104.385px 304.31px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M99 305.11a78.25 78.25 0 0 0-5.32 8.64",
            transformOrigin: "96.34px 309.43px"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "m149.58 320.88-1.36 2", transformOrigin: "148.9px 321.88px" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M157.08 312.25a51.8 51.8 0 0 0-5.52 6",
            transformOrigin: "154.32px 315.25px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M149 316.05a76.65 76.65 0 0 0-5.32 8.64",
            transformOrigin: "146.34px 320.37px"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { className: "B", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M79.54 419.56s11.32-32.71 11.32-54.71 3.67-38.08 8.18-45.13 8.75-9.88 10.72-9.88.57 2.54-2.25 6.21-5.36 5.64-6.49 10.16-1.13 10.15.28 9.59 3.7-11.8 5.64-16.08 6.77-9.59 9.59-12.13 9-10.16 11.85-8.18 1.13 4.79-.56 5.92-8.47 7.9-11.57 12.13-5.08 15-3.38 15.23 6.77-15.51 9.59-18.9 14.1-12.69 16.64-13 2.82 3.67.56 5.64-9.87 10.47-12.41 15.57-3.66 14.39-1.41 12.13 5.93-11.56 9-14.66 12.41-13 14.67-11.85 1.69 4-.29 5.92-9.59 12.7-11.56 18.34-4.23 21.43-3.1 19.18 4.79-13.82 6.77-18.62 5.92-7.05 6.48-4.79-.56 3.38-2 8.46-1.41 18.61-5.64 26.23-20.59 28.21-22.85 33.85-9.17 26.74-9.17 26.74",
            className: "E",
            transformOrigin: "115.256px 361.008px"
          }
        ),
        /* @__PURE__ */ jsxs("g", { className: "F", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "m160.3 155.45.61-.8",
              transformOrigin: "160.605px 155.05px"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              strokeDasharray: "1.99006, 1.99006",
              d: "M162.14 153.09a127 127 0 0 1 186.35-13.47",
              transformOrigin: "255.315px 129.128px"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "m349.21 140.31.72.69",
              transformOrigin: "349.57px 140.655px"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "m167.77 158.06-13.6 6.23 1.4-14.89 12.2 8.66z",
        className: "D",
        transformOrigin: "160.97px 156.845px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        strokeDasharray: "2, 2",
        d: "M373.33 268.27v38.24",
        className: "B C F H",
        transformOrigin: "373.33px 287.39px"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "m365.85 270.45 7.48-12.95 7.48 12.95h-14.96z",
        className: "D",
        transformOrigin: "373.33px 263.975px"
      }
    ),
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          id: "B",
          d: "M399.93 114.08c-26.79-22.14-60.83-33-100-20.68-38.71 12.14-61.68 48-96.05 67.08-36.57 20.31-81.24 18.23-120.1 32.86-27.47 10.34-47.61 32.66-54.43 61.3C16 310.67 41.23 371.42 91.72 399.77c31.48 17.68 69.68 20.88 104 9.92 26.32-8.42 49.94-23.87 76.2-32.74 45.61-15.41 96.47-9.15 140.6-30.21 46.71-22.28 56.64-69.66 50.39-115-5.73-41.19-28.26-88.95-62.98-117.66z"
        }
      ),
      /* @__PURE__ */ jsx("path", { id: "C", d: "M134.19 274.53h10.01v6.58h-10.01z" }),
      /* @__PURE__ */ jsx("path", { id: "D", d: "M102.48 315.09h9.29v9.22h-9.29z" }),
      /* @__PURE__ */ jsx("path", { id: "E", d: "M143.46 282.68h9.36v9.22h-9.36z" })
    ] })
  ] });
};
const UiUx = "/assets/UiUx-DhnVNKZS.svg";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Sections/Services.jsx");
function Services() {
  const services = [
    {
      title: "React Web App Development",
      description: "Custom React.js web applications that are fast, scalable, and SEO-friendly. From single-page apps to complex platforms — clean code and high performance.",
      icon: /* @__PURE__ */ jsx(WebDevelopmentIcon, {}),
      tags: ["React JS", "Custom App"],
      number: "01"
    },
    {
      title: "WordPress & Shopify",
      description: "Professional WordPress theme customization and Shopify store development tailored for businesses in Karachi and across Pakistan.",
      icon: /* @__PURE__ */ jsx(
        "img",
        {
          className: "h-full myanimation custom-anim",
          src: UiUx,
          alt: "WordPress and Shopify services"
        }
      ),
      tags: ["WordPress", "Shopify"],
      number: "02"
    },
    {
      title: "UI/UX & Graphic Design",
      description: "Intuitive, visually engaging interfaces and branding assets. Every design focused on user experience, conversion, and making your brand stand out.",
      icon: /* @__PURE__ */ jsx(GraphicDesignIcon, {}),
      tags: ["UI/UX", "Branding"],
      number: "03"
    }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "services",
      "aria-label": "Web Development Services by Abdul Rehman — React, WordPress, Shopify",
      className: "py-20 md:px-20 px-3 2xl:px-30 bg-(--bg-base)",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("div", { className: "section-label justify-center mb-4", children: "What I Offer" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-display text-(--text-primary)",
              style: { fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300 },
              children: "Web Development Services"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-(--text-secondary) max-w-xl mx-auto text-sm leading-relaxed", children: "Freelance React, WordPress, and Shopify development for businesses in Pakistan and worldwide." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: services.map((service, i) => /* @__PURE__ */ jsxs("div", { className: "card p-8 flex flex-col gap-5 group", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "font-mono-custom text-[2.5rem] font-bold leading-none",
              style: {
                color: "var(--text-secondary)",
                letterSpacing: "-0.02em"
              },
              children: service.number
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "h-40 md:h-25 lg:h-40 flex items-center justify-center", children: service.icon }),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "font-display",
              style: { fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3 },
              children: service.title
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-(--text-secondary) text-sm leading-relaxed flex-1", children: service.description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: service.tags.map((tag, j) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-mono-custom text-[0.6rem] tracking-widest uppercase px-2.5 py-1",
              style: {
                border: "1px solid rgba(242,204,15,0.2)",
                color: "var(--gold)",
                borderRadius: "1px"
              },
              children: tag
            },
            j
          )) }),
          /* @__PURE__ */ jsx("div", { className: "gold-line mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              "aria-label": `Hire for ${service.title}`,
              className: "btn-primary justify-center text-center mt-1",
              children: "Hire Me"
            }
          )
        ] }, i)) })
      ] })
    }
  );
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Components/Whatsapp.jsx");
const Whatsapp = () => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/923062617692?text=Hi%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project",
      target: "_blank",
      "aria-label": "Contact me on Whatsapp",
      rel: "noopener noreferrer",
      className: "fixed bottom-6 right-6 bg-(--gold) p-4 rounded-full shadow-xl hover:scale-110 transition z-52 custom-animate",
      children: /* @__PURE__ */ jsx(FaWhatsapp, { size: 28, color: "black" })
    }
  );
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/App.jsx");
function App() {
  const [navActive, setNavActive] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Abdul Rehman | Frontend Developer in Karachi" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Frontend developer building React and Shopify websites. View my projects and get in touch."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Abdul Rehman | Frontend Developer" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "React, Tailwind and Shopify projects."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://abdulrehmanaijazwebdev.vercel.app/og-image.png"
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://abdulrehmanaijazwebdev.vercel.app/"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Header, { navActive, setNavActive }),
    /* @__PURE__ */ jsx(Whatsapp, {}),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Portfolio, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/routes.jsx");
const routes = [{ path: "/", element: /* @__PURE__ */ jsx(App, {}) }];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/main.jsx");
const createRoot = ViteReactSSG({ routes });
export {
  createRoot
};
