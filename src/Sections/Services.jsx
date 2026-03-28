import { WebDevelopmentIcon, GraphicDesignIcon } from "../assets/Svg";
import UiUx from "../assets/UiUx.svg";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I build modern, responsive, and SEO-friendly websites including custom websites, WordPress websites, Shopify websites, and high-performance React websites. My focus is on speed, scalability, and user experience to help your business grow online.",
      icon: <WebDevelopmentIcon />,
    },
    {
      title: "UI/UX Design",
      description:
        "I design intuitive and visually engaging interfaces for websites, ensuring smooth user experience and modern design standards for custom websites, WordPress websites, Shopify websites, and React websites.",
      icon: (
        <img className="h-full myanimation custom-anim" src={UiUx} alt={UiUx} />
      ),
    },
    {
      title: "Graphic Design",
      description:
        "I create eye-catching visuals, graphics, and branding elements that enhance your website, including custom website designs, WordPress website visuals, Shopify website assets, and React website interfaces.",
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
          Professional services to build modern, high-performance websites
          including custom websites, WordPress websites, Shopify websites, and
          React websites.
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
