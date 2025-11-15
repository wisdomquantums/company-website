import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./InquiryForm.css";

export default function InquiryForm() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const payload = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.contact,
      service: form.service,
      message: form.message,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const json = await response.json();

      if (json.success) {
        setMsg("Thank you! Your inquiry has been sent.");
        setShowForm(false);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          service: "",
          message: "",
        });
      } else {
        setMsg("Failed to send inquiry. Try again.");
      }
    } catch (error) {
      console.error("Inquiry Error:", error);
      setMsg("Server error. Try again.");
    }

    setLoading(false);
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
          {/* FLOATING GLOW */}
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
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter first name"
                  />
                </div>

                <div className="inq-field">
                  <label>Last Name*</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
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
                    onChange={handleChange}
                    required
                    placeholder="Enter email"
                  />
                </div>

                <div className="inq-field">
                  <label>Contact Number*</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone"
                  />
                </div>
              </div>

              <div className="inq-field">
                <label>Service*</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
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
                  onChange={handleChange}
                  required
                  placeholder="Describe your requirement..."
                  rows="3"
                />
              </div>

              <button className="inq-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>

              {msg && <p className="inq-msg">{msg}</p>}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
