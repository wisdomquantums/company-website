import React from "react";
import "./Careers.css";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";

const Careers = () => {
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
        <div className="career-job-card">
          <div>
            <h3 className="job-title">Backend developer</h3>
            <p className="job-sub">Node.js Developer</p>

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

        <div className="career-job-card">
          <div>
            <h3 className="job-title">Frontend developer</h3>
            <p className="job-sub">Javascript Developer</p>

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

        <div className="career-job-card">
          <div>
            <h3 className="job-title">Backend developer</h3>
            <p className="job-sub">PHP Developer</p>

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

        <div className="career-job-card">
          <div>
            <h3 className="job-title">Full Stack Developer</h3>
            <p className="job-sub">MERN with TS/NEST/NEXT</p>

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

        <div className="career-job-card">
          <div>
            <h3 className="job-title">Software developer</h3>
            <p className="job-sub">Assistant Developer</p>

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

        <div className="career-job-card">
          <div>
            <h3 className="job-title">UI/UX Developer</h3>
            <p className="job-sub">Canve, XD, etc</p>

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
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="career-contact-section">
        {/* Left text */}
        <div className="career-contact-left">
          <h2 className="doubt-heading">
            If you have any Doubts <br /> then_____________
          </h2>

          <p className="doubt-subtext">Clear Your Doubts, Connect with Us</p>
        </div>

        {/* Form */}
        <div className="career-form-box">
          <div className="form-row">
            <input type="text" placeholder="Enter your First Name" />
            <input type="text" placeholder="Enter your Last Name" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Enter your Email" />
            <input type="text" placeholder="Enter your Contact Number" />
          </div>

          <select className="career-select">
            <option>Select your Service</option>
            <option>Website Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>Software Development</option>
          </select>

          <textarea
            placeholder="Type here..."
            className="career-textarea"
          ></textarea>

          <button className="career-submit-btn">Submit</button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
