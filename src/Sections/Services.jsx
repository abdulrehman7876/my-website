import { WebDevelopmentIcon, GraphicDesignIcon } from "../assets/Svg";
import UiUx from "../assets/UiUx.svg";

export default function Services() {
  const services = [
    {
      title: "React Web App Development",
      description:
        "Custom React.js web applications that are fast, scalable, and SEO-friendly. From single-page apps to complex platforms — clean code and high performance.",
      icon: <WebDevelopmentIcon />,
      tags: ["React JS", "Custom App"],
      number: "01",
    },
    {
      title: "WordPress & Shopify",
      description:
        "Professional WordPress theme customization and Shopify store development tailored for businesses in Karachi and across Pakistan.",
      icon: (
        <img
          className="h-full myanimation"
          src={UiUx}
          alt="WordPress and Shopify services"
        />
      ),
      tags: ["WordPress", "Shopify"],
      number: "02",
    },
    {
      title: "UI/UX & Graphic Design",
      description:
        "Intuitive, visually engaging interfaces and branding assets. Every design focused on user experience, conversion, and making your brand stand out.",
      icon: <GraphicDesignIcon />,
      tags: ["UI/UX", "Branding"],
      number: "03",
    },
  ];

  return (
    <section
      id="services"
      aria-label="Web Development Services by Abdul Rehman — React, WordPress, Shopify"
      className="py-20 md:px-20 px-3 2xl:px-30 bg-(--bg-base)"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">What I Offer</div>
          <h2
            className="font-display text-(--text-primary)"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300 }}
          >
            Web Development Services
          </h2>
          <p className="mt-4 text-(--text-secondary) max-w-xl mx-auto text-sm leading-relaxed">
            Freelance React, WordPress, and Shopify development for businesses
            in Pakistan and worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card p-8 flex flex-col gap-5 group">
              {/* Number */}
              <div
                className="font-mono-custom text-[2.5rem] font-bold leading-none"
                style={{
                  color: "rgba(242,204,15,0.1)",
                  letterSpacing: "-0.02em",
                }}
              >
                {service.number}
              </div>

              {/* Icon */}
              <div className="h-40 md:h-25 lg:h-40 flex items-center justify-center">
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className="font-display"
                style={{ fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3 }}
              >
                {service.title}
              </h3>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-mono-custom text-[0.6rem] tracking-widest uppercase px-2.5 py-1"
                    style={{
                      border: "1px solid rgba(242,204,15,0.2)",
                      color: "var(--gold)",
                      borderRadius: "1px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="gold-line mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <a
                href="#contact"
                aria-label={`Hire for ${service.title}`}
                className="btn-primary justify-center text-center mt-1"
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
