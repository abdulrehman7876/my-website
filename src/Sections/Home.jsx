import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <section
      role="main"
      id="home"
      className="pb-20 w-full bg-[#212121] px-3 md:px-20 relative 2xl:px-30 overflow-hidden"
    >
      <div
        className="h-full absolute inset-0 mouse-events-none pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(242, 204, 15, 0.1), transparent 50%)",
        }}
      ></div>
      <div className="container mx-auto relative">
        <div className="w-auto pt-5 -right-20 lg:right-0 absolute inset-0 pointer-events-none mouse-events-none hidden sm:flex justify-end -bottom-100">
          <img
            className="h-full lg:h-200 2xl:h-auto object-cover"
            src="/Mypic.webp"
            alt="Picture"
          />
        </div>
        <div className="relative container mx-auto flex-1 pt-20 md:pt-25">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I'm <span className="text-[#F2CC0F]">Abdul Rehman</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold inline-block text-white transition hover:text-[#F2CC0F] duration-300 mt-2 md:mt-4">
            Front-End Developer
          </h2>
          <p className="text-white md:text-lg leading-relaxed mt-3 md:mt-4 sm:w-1/2">
            Passionate about crafting beautiful, functional web experiences and
            stunning visual designs. I specialize in transforming ideas into
            pixel-perfect interfaces. With expertise in modern web technologies
            and graphic design.
          </p>
          <div className="flex gap-4 mt-8">
            <button
              aria-label="Get in Touch"
              className="text-black px-4 py-2 sm:px-8 sm:py-3 rounded-lg transition-all hover:scale-105 font-medium border-2 border-amber-300 pb-2.5 btn-hover bg-[#F2CC0F]"
            >
              <a aria-label="Go to contact section" href="#contact">
                Get In Touch
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
                aria-label="Visit Github"
                target="_blank"
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
                aria-label="visit Linkedin"
                target="_blank"
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
