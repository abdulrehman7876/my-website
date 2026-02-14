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

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform Clone",
      category: "Web Development",
      image: "/E-commerceClone.webp",
      link: "https://amazonecloneecommerce.netlify.app/",
    },
    {
      title: "Website UI/UX Design",
      category: "UI/UX Design",
      image: "/uiux.webp",
      link: "https://thecafeweb.netlify.app/",
    },
    {
      title: "Logo Design",
      category: "Graphic Design",
      image: "/Graphic.webp",
      link: "https://www.behance.net/abdulrehmanarts",
    },
    {
      title: "Wordpress Website Clone",
      category: "Wordpress",
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
      role="main"
      id="portfolio"
      className="2xl:px-30 py-20 px-3 md:px-20 bg-[#1a1a1a80] 2xl:place-items-center"
    >
      <h2 className="text-4xl text-white text-center mb-10 font-bold">
        Recent Work
      </h2>

      <div className="relative px-0 md:px-10 2xl:max-w-[1536px] ">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Previous slide"
          className="absolute left-5 md:left-0 top-1/3 z-10 bg-black/50 hover:text-black text-[#f2cc0f] hover:bg-[#f2cc0f] border-2 border-[#f2cc0f] rounded-full p-2 text-3xl cursor-pointer transition"
        >
          <RiArrowLeftSLine />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Next slide"
          className="absolute right-5 md:right-0 top-1/3 z-10 bg-black/50 md:bg-none hover:text-black text-[#f2cc0f] hover:bg-[#f2cc0f] border-2 border-[#f2cc0f] rounded-full p-2 text-3xl cursor-pointer transition"
        >
          <RiArrowRightSLine />
        </button>

        <Slider ref={sliderRef} {...settings} className="2xl:max-w-[1536px]">
          {projects.map((p, i) => (
            <div key={i} className="px-2 md:px-4 text-center">
              <a
                aria-label={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src={p.image}
                  alt={p.title}
                  className="w-full sm:h-120 object-cover hover:scale-105 transition"
                />
                <h3 className="text-white text-xl mt-4 text-center hover:text-[#f2cc0f]">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-center">{p.category}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
