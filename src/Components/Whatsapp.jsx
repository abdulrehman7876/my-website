import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/923062617692?text=Hi%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition z-52"
    >
      <FaWhatsapp size={28} color="white" />
    </a>
  );
};

export default Whatsapp;
