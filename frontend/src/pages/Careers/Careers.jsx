import React, { useState } from "react";
import "./Careers.css";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";

const Careers = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !form.first_name ||
      !form.last_name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.message
    ) {
      setMsg("Please fill all fields");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const json = await response.json();

      if (json.success) {
        setMsg("Your message has been sent successfully!");
        setForm({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setMsg("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Career Email Error:", error);
      setMsg("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="career-page">
      {/* ================= HERO SECTION ================= */}
      <section className="career-hero">
        <h1 className="career-bg-title">Career</h1>
        <h2 className="career-subtitle">Build Your Future, Code Your Dreams</h2>

        <p className="career-intro">
          Join our dynamic team and shape the future of technology! At Profcyma,
          we value innovation, collaboration, and growth. Whether you’re a
          seasoned professional or just starting your journey, we provide the
          tools, support, and opportunities to help you thrive in an
          ever-evolving IT landscape. Let’s build the future together!
        </p>
      </section>

      {/* ================= JOB LIST SECTION ================= */}
      <section className="career-jobs-container">
        {/* === REPEAT YOUR JOB CARDS === */}
        {[
          { title: "Backend developer", sub: "Node.js Developer" },
          { title: "Frontend developer", sub: "Javascript Developer" },
          { title: "Backend developer", sub: "PHP Developer" },
          { title: "Full Stack Developer", sub: "MERN with TS/NEST/NEXT" },
          { title: "Software developer", sub: "Assistant Developer" },
          { title: "UI/UX Developer", sub: "Canva, XD, etc" },
        ].map((job, i) => (
          <div className="career-job-card" key={i}>
            <div>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-sub">{job.sub}</p>

              <p className="job-info">
                <FiClock /> Full time
              </p>
              <p className="job-info">
                <FiMapPin /> Pune
              </p>
            </div>

            <div className="job-arrow">
              <FiArrowRight />
            </div>
          </div>
        ))}
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="career-contact-section">
        {/* Left Side */}
        <div className="career-contact-left">
          <h2 className="doubt-heading">
            If you have any Doubts <br /> then_____________
          </h2>
          <p className="doubt-subtext">Clear Your Doubts, Connect with Us</p>
        </div>

        {/* Form */}
        <div className="career-form-box">
          <div className="form-row">
            <input
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Enter your First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Enter your Last Name"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              required
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your Contact Number"
              required
            />
          </div>

          <select
            name="service"
            className="career-select"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select your Service</option>
            <option>Website Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>Software Development</option>
          </select>

          <textarea
            name="message"
            className="career-textarea"
            value={form.message}
            onChange={handleChange}
            placeholder="Type here..."
            required
          ></textarea>

          <button
            className="career-submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {msg && <p className="career-msg">{msg}</p>}
        </div>
      </section>
    </div>
  );
};

export default Careers;
