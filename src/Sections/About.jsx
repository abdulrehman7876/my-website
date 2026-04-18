import { useState, useRef, useEffect } from "react";

export default function About() {
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
    { name: "Figma", level: 85 },
  ];

  const services = [
    {
      title: "React Web App Development",
      desc: "Custom React.js web applications built for speed, scalability, and modern UX.",
    },
    {
      title: "WordPress Website Development",
      desc: "Custom WordPress websites with theme customization and performance optimization.",
    },
    {
      title: "Shopify Store Development",
      desc: "Shopify store setup, custom theme development, and conversion-focused design.",
    },
    {
      title: "Responsive Web Design",
      desc: "Mobile-first, fully responsive websites that look great on every device.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.23 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      aria-label="About Abdul Rehman — Freelance Front-End Developer in Karachi"
      ref={sectionRef}
      className="w-full bg-[#1c1c1c] px-3 md:px-20 relative 2xl:px-auto"
    >
      <div className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Freelance front-end developer in Karachi, Pakistan — specializing in
          React web app development, WordPress, and Shopify store development.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div
            className="p-8 rounded-lg border transition-all hover:scale-105"
            style={{
              backgroundColor: "rgba(33, 33, 33, 0.5)",
              borderColor: "#3a3a3a",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#F2CC0F")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "#3a3a3a")
            }
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="font-medium text-[#F2CC0F] transition-all duration-1000 ease-in">
                      {isVisible ? skill.level : 0}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-700 rounded-full h-2 overflow-hidden"
                    role="progressbar"
                    aria-valuenow={isVisible ? skill.level : 0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  >
                    <div
                      className="h-2 rounded-full transition-all duration-1000 ease-in"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        backgroundColor: "#F2CC0F",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Do */}
          <div className="p-8 rounded-lg bg-[rgba(33,33,33,0.5)] border border-[#3a3a3a] transition-all hover:scale-105 hover:border-[#F2CC0F]">
            <h3 className="text-2xl font-semibold text-white mb-4">
              What I Do
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a freelance front-end developer based in Karachi, Pakistan,
              available for hire for React web app development, custom WordPress
              website development, and Shopify store development. I build fast,
              responsive, and SEO-friendly web solutions for businesses across
              Pakistan and worldwide.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Whether you need a custom React application, WordPress theme
              customization, or a high-converting Shopify storefront, I focus on
              clean code, performance, and delivering results that grow your
              business online.
            </p>

            {/* Service tags */}
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-[#F2CC0F] mt-1 text-sm">▸</span>
                  <div>
                    <span className="text-white font-medium text-sm">
                      {service.title}
                    </span>
                    <p className="text-gray-500 text-sm leading-snug">
                      {service.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
