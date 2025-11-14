import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./InquiryForm.css";

export default function InquiryForm() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", form);
    alert("Thank you! We will contact you shortly.");
    setShowForm(false);
  };

  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          className="inq-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* FLOATING GLOW LIGHTS */}
          <div className="inq-glow glow-1" />
          <div className="inq-glow glow-2" />

          <motion.div
            className="inq-box"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button className="inq-close" onClick={() => setShowForm(false)}>
              <X size={22} />
            </button>

            <h2 className="inq-heading">Inquire Now</h2>
            <p className="inq-sub">
              Tell us what you need — we’ll get back to you quickly.
            </p>

            <form className="inq-form" onSubmit={handleSubmit}>
              <div className="inq-grid-2">
                <div className="inq-field">
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    required
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                </div>

                <div className="inq-field">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    required
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="inq-grid-2">
                <div className="inq-field">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>

                <div className="inq-field">
                  <label>Contact Number*</label>
                  <input
                    type="text"
                    name="contact"
                    value={form.contact}
                    required
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="inq-field">
                <label>Service*</label>
                <select
                  name="service"
                  value={form.service}
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                </select>
              </div>

              <div className="inq-field">
                <label>How can we help you?*</label>
                <textarea
                  name="message"
                  value={form.message}
                  required
                  onChange={handleChange}
                  placeholder="Describe your requirement..."
                  rows="3"
                />
              </div>

              <button type="submit" className="inq-submit">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
