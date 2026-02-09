import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Home from "./Sections/Home";
import Portfolio from "./Sections/Portfolio";
import Services from "./Sections/Services";
import Whatsapp from "./Components/Whatsapp";

function App() {
  const [navActive, setNavActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header navActive={navActive} setNavActive={setNavActive} />
      <Whatsapp />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
