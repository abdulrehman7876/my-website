import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
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
      description:
        "A custom React.js e-commerce platform clone featuring product listings, cart functionality, and responsive design.",
      image: "/E-commerceClone.webp",
      link: "https://amazonecloneecommerce.netlify.app/",
    },
    {
      title: "Cafe Website UI/UX Design",
      category: "UI/UX & Responsive Web Design",
      description:
        "Modern café website with a focus on UI/UX design, mobile-first layout, and smooth user experience.",
      image: "/uiux.webp",
      link: "https://thecafeweb.netlify.app/",
    },
    {
      title: "Brand Logo & Graphic Design",
      category: "Graphic Design",
      description:
        "Professional logo and branding assets designed for businesses — clean, memorable, and versatile.",
      image: "/Graphic.webp",
      link: "https://www.behance.net/abdulrehmanarts",
    },
    {
      title: "WordPress Website Development",
      category: "WordPress Theme Customization",
      description:
        "A fully customized WordPress website with theme customization, responsive layout, and performance optimization.",
      image: "/Wordpress-Clone.webp",
      link: "",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section
      id="portfolio"
      aria-label="Portfolio — React, WordPress & Shopify Projects by Abdul Rehman"
      className="2xl:px-30 py-20 px-3 md:px-20 bg-[#1a1a1a80] 2xl:place-items-center"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl text-white font-bold mb-4">
          Portfolio & Recent Work
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of React web app development, WordPress website
          development, Shopify store development, and UI/UX design projects by
          Abdul Rehman — freelance front-end developer in Karachi, Pakistan.
        </p>
      </div>

      <div className="relative px-0 md:px-10 2xl:max-w-[1536px]">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Previous project"
          className="absolute left-5 md:left-0 top-1/3 z-10 bg-black/50 hover:text-black text-[#f2cc0f] hover:bg-[#f2cc0f] border-2 border-[#f2cc0f] rounded-full p-2 text-3xl cursor-pointer transition"
        >
          <RiArrowLeftSLine />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Next project"
          className="absolute right-5 md:right-0 top-1/3 z-10 bg-black/50 md:bg-none hover:text-black text-[#f2cc0f] hover:bg-[#f2cc0f] border-2 border-[#f2cc0f] rounded-full p-2 text-3xl cursor-pointer transition"
        >
          <RiArrowRightSLine />
        </button>

        <Slider ref={sliderRef} {...settings} className="2xl:max-w-[1536px]">
          {projects.map((p, i) => (
            <div key={i} className="px-2 md:px-4 text-center">
              <a
                href={p.link || "#portfolio"}
                aria-label={`View project: ${p.title} — ${p.category}`}
                target={p.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src={p.image}
                  alt={`${p.title} — ${p.category} by Abdul Rehman, front-end developer Karachi`}
                  className="w-full sm:h-120 object-cover hover:scale-105 transition"
                />
                <h3 className="text-white text-xl mt-4 text-center hover:text-[#f2cc0f]">
                  {p.title}
                </h3>
                <p className="text-[#f2cc0f] text-sm font-medium text-center mt-1">
                  {p.category}
                </p>
                <p className="text-gray-400 text-sm text-center mt-1 px-2">
                  {p.description}
                </p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
