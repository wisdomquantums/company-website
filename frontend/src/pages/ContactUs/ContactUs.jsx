import React, { useRef, useState } from "react";
import "./ContactUs.css";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactUs() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const json = await response.json();

      if (json.success) {
        setMsg("Your message has been sent successfully!");
        formRef.current.reset();
      } else {
        setMsg("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Email API Error:", error);
      setMsg("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page">
      {/* Contact + Form */}
      <div className="contact-container">
        {/* LEFT SECTION */}
        <div className="contact-left">
          <h2 className="contact-heading">Get in Touch with Us</h2>

          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={26} />
            </div>
            <p>
              Katraj, Pune, Maharashtra, <b>India</b> – 411021.
            </p>
          </div>

          <hr className="contact-divider" />

          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <p>info@wisdomquantums.com</p>
          </div>

          <hr className="contact-divider" />

          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={24} />
            </div>
            <p>+91 8208385551 | +91 7620691559</p>
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="contact-form-box">
          <h3 className="text-center contact-sub">Contact Us</h3>
          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-field">
                <label>First Name*</label>
                <input
                  name="first_name"
                  type="text"
                  required
                  placeholder="Enter your First Name"
                />
              </div>

              <div className="form-field">
                <label>Last Name*</label>
                <input
                  name="last_name"
                  type="text"
                  required
                  placeholder="Enter your Last Name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Email*</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your Email"
                />
              </div>

              <div className="form-field">
                <label>Contact Number*</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your Contact Number"
                />
              </div>
            </div>

            <div className="form-field">
              <label>Service*</label>
              <select name="service" required>
                <option value="">Select your Service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="UI/UX">UI/UX Design</option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Other">Others</option>
              </select>
            </div>

            <div className="form-field">
              <label>How we can help you*</label>
              <textarea name="message" required placeholder="Type here..." />
            </div>

            <button className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>

            {msg && <p className="form-message">{msg}</p>}
          </form>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="520"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
