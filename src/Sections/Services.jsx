import { WebDevelopmentIcon, UiUxIcon, GraphicDesignIcon } from "../assets/Svg";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom responsive websites built using React.js and modern web technologies to ensure speed, performance, and scalability.",
      icon: <WebDevelopmentIcon />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.",
      icon: <UiUxIcon />,
    },
    {
      title: "Graphic Design",
      description:
        "Designing eye-catching posters, illustrations, and vector graphics that communicate your message effectively.",
      icon: <GraphicDesignIcon />,
    },
  ];
  return (
    <section
      role="main"
      id="services"
      className="py-20 md:px-20 px-3 2xl:px-30 bg-[#212121]"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          What I Offer
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional services tailored to bring your digital vision to real
          website
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
              <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-center">
                {service.description}
              </p>
              <button
                aria-label="Hire"
                className="rounded-lg px-4 text-center md:px-8 py-2 pb-2.5 text-black font-semibold btn-hover transition-all duration-300 bg-[#F2CC0F]"
              >
                <a aria-label="hire" href="#contact">
                  Hire
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
