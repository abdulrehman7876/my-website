import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hkoy1yw",
        "template_h903new",
        form.current,
        "O-td-qvqRQ9uOR8zP",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", service: "", message: "" });
        },
        () => {
          alert("An error occurred, please try again.");
        },
      );
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [invalid, setInvalid] = useState({
    name: false,
    email: false,
    service: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section
      role="main"
      id="contact"
      className="py-20 md:px-20 px-1 2xl:px-30"
      style={{ backgroundColor: "#212121" }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4 ">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to create something
          amazing
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="p-8 rounded-lg border transition-all my-border bg-[rgba(26,26,26,0.8)] border-[#3a3a3a]">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 rounded-lg text-white transition outline-none bg-[#212121] border-[#3a3a3a] border"
                  placeholder="Name"
                  onFocus={(e) => (e.target.style.borderColor = "#F2CC0F")}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#3a3a3a";
                    setInvalid((prev) => ({
                      ...prev,
                      name: formData.name === "",
                    }));
                  }}
                />
                <p
                  className={`mt-1 text-sm text-red-500 ${invalid.name ? "block" : "hidden"}`}
                >
                  This field is required
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 rounded-lg text-white transition outline-none bg-[#212121] border-[#3a3a3a] border"
                  placeholder="xyz@gmail.com"
                  onFocus={(e) => (e.target.style.borderColor = "#F2CC0F")}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#3a3a3a";
                    setInvalid((prev) => ({
                      ...prev,
                      email: formData.email === "",
                    }));
                  }}
                />
                <p
                  className={`mt-1 text-sm text-red-500 ${invalid.email ? "block" : "hidden"}`}
                >
                  This field is required
                </p>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Choose a Service
                </label>
                <select
                  required
                  id="service"
                  name="service"
                  aria-required="true"
                  value={formData.service}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 rounded-lg text-white transition outline-none duration-100 ease bg-[#212121] border-[#3a3a3a] border"
                  onFocus={(e) => (e.target.style.borderColor = "#F2CC0F")}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#3a3a3a";
                    setInvalid((prev) => ({
                      ...prev,
                      service: formData.service === "",
                    }));
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="graphic-design">Graphic Design</option>
                </select>
                <p
                  className={`mt-1 text-sm text-red-500 ${invalid.service ? "block" : "hidden"}`}
                >
                  This field is required
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg text-white transition outline-none resize-none bg-[#212121] border-[#3a3a3a] border"
                  placeholder="Tell me about your project..."
                  onFocus={(e) => (e.target.style.borderColor = "#F2CC0F")}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#3a3a3a";
                    setInvalid((prev) => ({
                      ...prev,
                      message: formData.message === "",
                    }));
                  }}
                ></textarea>
                <p
                  className={`mt-1 text-sm text-red-500 ${invalid.message ? "block" : "hidden"}`}
                >
                  This field is required
                </p>
              </div>

              <button
                aria-label="submit"
                type="submit"
                className="w-full text-black py-3 rounded-lg transition-all font-medium bg-[#F2CC0F] btn-hover"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-lg border transition-all my-border bg-[rgba(26,26,26,0.8)] border-[#3a3a3a]">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-10">
                <div className="flex items-start gap-4 group transition-transform">
                  <div
                    className="p-3 rounded-lg transition"
                    style={{ backgroundColor: "rgba(242, 204, 15, 0.2)" }}
                  >
                    <MapPin style={{ color: "#F2CC0F" }} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group transition-transform">
                  <div
                    className="p-3 rounded-lg transition"
                    style={{ backgroundColor: "rgba(242, 204, 15, 0.2)" }}
                  >
                    <Mail style={{ color: "#F2CC0F" }} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      aria-label="Visit Gmail"
                      href="mailto:a.rehmanaijaz@gmail.com"
                      className="text-gray-400"
                    >
                      a.rehmanaijaz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group transition-transform">
                  <div
                    className="p-3 rounded-lg transition"
                    style={{ backgroundColor: "rgba(242, 204, 15, 0.2)" }}
                  >
                    <Phone style={{ color: "#F2CC0F" }} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+92 306 2617692</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg shadow-lg transition-transform text-black bg-[#F2CC0F]">
              <h3 className="text-2xl font-semibold mb-4">
                Let's Build Something Great
              </h3>
              <p className="leading-relaxed">
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Whether you need a stunning website, a
                beautiful UI design, or eye-catching graphics, I'm here to help
                bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
