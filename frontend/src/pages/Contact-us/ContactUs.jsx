import React from "react";
import "./ContactUs.css";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="contact-page">
      {/* ===========================
          SECTION 1: CONTACT + FORM
      ============================ */}
      <div className="contact-container">
        {/* LEFT SIDE – CONTACT DETAILS */}
        <div className="contact-left">
          <h2 className="contact-heading">Get in Touch with Us</h2>
          <h3 className="contact-sub">Contact Us</h3>

          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={26} />
            </div>
            <p>
              2nd floor, Office No 3, Opp high-class soc, M.no 734 Near
              Suryadutta College, Bavdhan Khurd, Pune 411021.
            </p>
          </div>

          <hr className="contact-divider" />

          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <p>info@profcyma.global.com</p>
          </div>

          <hr className="contact-divider" />

          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={24} />
            </div>
            <p>+91 960 775 5557 | 940 570 90425</p>
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="contact-form-box">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label>First Name*</label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  required
                />
              </div>

              <div className="form-field">
                <label>Last Name*</label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Email*</label>
                <input type="email" placeholder="Enter your Email" required />
              </div>

              <div className="form-field">
                <label>Contact Number*</label>
                <input
                  type="tel"
                  placeholder="Enter your Contact Number"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label>Service*</label>
              <select required>
                <option value="">Select your Service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="UI/UX">UI/UX Design</option>
                <option value="Software">Software Development</option>
              </select>
            </div>

            <div className="form-field">
              <label>How we can help you*</label>
              <textarea placeholder="Type here..." required />
            </div>

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* ===========================
          GOOGLE MAP
      ============================ */}
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d73.8567!3d18.5204"
          width="100%"
          height="520"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
