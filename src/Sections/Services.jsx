import { WebDevelopmentIcon, GraphicDesignIcon } from "../assets/Svg";
import UiUx from "../assets/UiUx.svg";

export default function Services() {
  const services = [
    {
      title: "React Web App Development",
      description:
        "I build custom React.js web applications and websites that are fast, scalable, and SEO-friendly. Whether you need a single-page app, a business website, or a complex web platform, I deliver clean code and high performance.",
      icon: <WebDevelopmentIcon />,
      keywords: ["React JS developer for hire", "custom React application"],
    },
    {
      title: "WordPress & Shopify Development",
      description:
        "I offer professional WordPress website development with custom theme customization, and Shopify store development including storefront design and performance optimization — tailored for businesses in Karachi and across Pakistan.",
      icon: (
        <img
          className="h-full myanimation custom-anim"
          src={UiUx}
          alt="WordPress and Shopify development services"
        />
      ),
      keywords: ["WordPress developer Pakistan", "Shopify store development"],
    },
    {
      title: "UI/UX & Graphic Design",
      description:
        "I design intuitive, visually engaging interfaces and branding assets for React apps, WordPress websites, and Shopify stores. Every design is focused on user experience, conversion, and making your brand stand out online.",
      icon: <GraphicDesignIcon />,
      keywords: ["UI UX design", "responsive web design"],
    },
  ];

  return (
    <section
      id="services"
      aria-label="Web Development Services by Abdul Rehman — React, WordPress, Shopify"
      className="py-20 md:px-20 px-3 2xl:px-30 bg-[#212121]"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Web Development Services
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Freelance front-end developer in Karachi offering React web app
          development, WordPress website development, Shopify store development,
          and UI/UX design for businesses in Pakistan and worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 p-8 md:p-4 lg:p-8 rounded-lg border border-[#3a3a3a] hover:border-[#F2CC0F] btn-hover transition bg-[rgba(26,26,26,0.8)]"
            >
              <div className="h-40 md:h-25 lg:h-40 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold text-white text-center">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-center">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2 justify-center">
                {service.keywords.map((kw, i) => (
                  <li
                    key={i}
                    className="text-xs px-2 py-1 rounded-full border border-[#3a3a3a] text-[#F2CC0F]"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                aria-label={`Hire Abdul Rehman for ${service.title}`}
                className="rounded-lg px-4 text-center md:px-8 py-2 pb-2.5 text-black font-semibold btn-hover transition-all duration-300 bg-[#F2CC0F]"
              >
                Hire Me
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
