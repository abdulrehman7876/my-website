import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <section
      role="main"
      id="home"
      className="pb-20 w-full px-3 md:px-20 relative 2xl:px-30 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at center, rgba(242,204,15,0.055) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at center, rgba(242,204,15,0.025) 0%, transparent 60%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto relative">
        <div className="w-auto pt-5 -right-20 lg:right-0 absolute inset-0 pointer-events-none mouse-events-none hidden sm:flex justify-end -bottom-100">
          <img
            className="h-full lg:h-200 2xl:h-auto object-cover"
            src="/Mypic.webp"
            alt="Abdul Rehman — Freelance Front-End Developer in Karachi, Pakistan"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        <div className="relative container mx-auto flex-1 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I'm <span className="text-[#F2CC0F]">Abdul Rehman</span>
          </h1>
          <h2 className="font-display text-2xl md:text-4xl font-semibold inline-block text-white transition hover:text-[#F2CC0F] duration-300 mt-2 md:mt-4">
            Freelance Front-End Developer
          </h2>
          <p className="text-(--text-secondary) md:text-lg leading-relaxed mt-3 md:mt-4 sm:w-1/2">
            I'm a React JS developer available for hire, specializing in custom
            React web app development, WordPress website development, and
            Shopify store development. Based in Karachi, I build fast,
            responsive, and SEO-friendly web solutions for businesses across
            Pakistan and worldwide.
          </p>
          <ul className="flex flex-wrap gap-2 mt-5 anim-fadeUp anim-delay-3">
            {[
              "React Web Apps",
              "Shopify",
              "WordPress",
              "Responsive Design",
            ].map((tag, i) => (
              <li
                key={i}
                className="font-mono-custom text-[0.6rem] tracking-widest uppercase px-3 py-1 border"
                style={{
                  borderColor: "rgba(242,204,15,0.2)",
                  color: "var(--gold)",
                  borderRadius: "1px",
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-8">
            <button
              aria-label="Get in Touch"
              className="text-black px-4 py-2 sm:px-8 sm:py-3 rounded-lg transition-all hover:scale-105 font-medium border-2 border-amber-300 pb-2.5 btn-hover bg-[#F2CC0F]"
            >
              <a aria-label="Go to contact section" href="#contact">
                Hire Me
              </a>
            </button>
            <button
              aria-label="View Work"
              className="px-4 py-2 sm:px-8 sm:py-3 rounded-lg hover:scale-105 transition-all font-medium hover:bg-[rgba(242,204,15,0.1)] cursor-pointer"
              style={{ border: "2px solid #F2CC0F", color: "#F2CC0F" }}
            >
              <a aria-label="Go to services section" href="#portfolio">
                View Work
              </a>
            </button>
          </div>
          <div className="flex gap-5 pt-10 text-3xl justify-center sm:justify-start">
            <button
              aria-label="Github"
              className="text-gray-400 transition-all hover:scale-125 hover:text-[#F2CC0F]"
            >
              <a
                aria-label="Visit Abdul Rehman's GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/abdulrehman7876"
              >
                <FaGithub />
              </a>
            </button>
            <button
              aria-label="Linkedin"
              className="text-gray-400 transition-all hover:scale-125 hover:text-[#F2CC0F]"
            >
              <a
                aria-label="Visit Abdul Rehman's LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abdul-rehman-aijaz/"
              >
                <FaLinkedin />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
