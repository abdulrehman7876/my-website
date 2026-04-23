import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Karachi, Pakistan",
      sub: "Available for remote projects worldwide",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "a.rehmanaijaz@gmail.com",
      href: "mailto:a.rehmanaijaz@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+92 306 2617692",
      href: "tel:+923062617692",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Abdul Rehman"
      className="py-28 px-5 md:px-16"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">Get In Touch</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300 }}
          >
            Hire a Front-End Developer
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto text-sm leading-relaxed">
            Looking for a React, WordPress, or Shopify developer in Pakistan?
            Let's discuss your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="card p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Full name",
                  key: "name",
                },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "you@example.com",
                  key: "email",
                },
              ].map(({ id, label, type, placeholder, key }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-xs font-mono-custom tracking-widest uppercase mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    name={id}
                    required
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="field-input"
                    onBlur={(e) =>
                      setInvalid((prev) => ({
                        ...prev,
                        [key]: formData[key] === "",
                      }))
                    }
                  />
                  {invalid[key] && (
                    <p className="mt-1 text-xs" style={{ color: "#e05a5a" }}>
                      This field is required
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-mono-custom tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="field-input"
                  onBlur={() =>
                    setInvalid((prev) => ({
                      ...prev,
                      service: formData.service === "",
                    }))
                  }
                >
                  <option value="">Select a service</option>
                  <option value="react-web-app-development">
                    React Web App Development
                  </option>
                  <option value="wordpress-website-development">
                    WordPress Website Development
                  </option>
                  <option value="shopify-store-development">
                    Shopify Store Development
                  </option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="graphic-design">Graphic Design</option>
                </select>
                {invalid.service && (
                  <p className="mt-1 text-xs" style={{ color: "#e05a5a" }}>
                    This field is required
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono-custom tracking-widest uppercase mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="field-input resize-none"
                  onBlur={() =>
                    setInvalid((prev) => ({
                      ...prev,
                      message: formData.message === "",
                    }))
                  }
                />
                {invalid.message && (
                  <p className="mt-1 text-xs" style={{ color: "#e05a5a" }}>
                    This field is required
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="card p-8">
              <h3
                className="font-display mb-7"
                style={{ fontSize: "1.4rem", fontWeight: 400 }}
              >
                Contact Information
              </h3>
              <div className="space-y-7">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{
                        background: "rgba(242,204,15,0.08)",
                        color: "var(--gold)",
                        border: "1px solid rgba(242,204,15,0.15)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="font-mono-custom text-[0.6rem] tracking-widest uppercase mb-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm transition-colors duration-200"
                          style={{ color: "var(--text-secondary)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--gold)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "var(--text-secondary)")
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.value}
                        </p>
                      )}
                      {item.sub && (
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-sm flex-1"
              style={{
                background: "var(--gold)",
                color: "#0d0d0d",
              }}
            >
              <h3
                className="font-display mb-3"
                style={{ fontSize: "1.4rem", fontWeight: 600 }}
              >
                Let's Build Something Great
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(13,13,13,0.7)" }}
              >
                Looking to hire a React JS developer, WordPress developer, or
                Shopify developer in Karachi? I provide custom web solutions for
                businesses across Pakistan and worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
