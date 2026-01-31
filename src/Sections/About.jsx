import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

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
    { name: "Wordpress", level: 95 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }, // 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      role="main"
      id="about"
      ref={sectionRef}
      className="w-full bg-[#1c1c1c] px-3 md:px-20 relative 2xl:px-auto"
    >
      <div className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-4 transition-transform">
          About Me
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A versatile developer and designer with a passion for creating
          exceptional digital experiences
        </p>

        <div className="grid md:grid-cols-2 gap-12">
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
              My Expertise
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
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
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

          <div className="p-8 rounded-lg bg-[rgba(33,33,33,0.5)] border border-[#3a3a3a] transition-all hover:scale-105 hover:border-[#F2CC0F]">
            <h3 className="text-2xl font-semibold text-white mb-6">
              What I Do
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a multi-disciplinary creative professional who bridges the gap
              between design and development. My journey in tech started with a
              fascination for visual design, which naturally evolved into
              front-end development.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              As a front-end developer, I build responsive, accessible web
              applications using modern frameworks and best practices. My design
              background gives me a unique perspective on creating interfaces
              that are not only functional but also visually compelling.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether it's developing a complex web application, designing an
              intuitive user interface, or creating stunning Logo Designs, I
              approach each project with dedication and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
