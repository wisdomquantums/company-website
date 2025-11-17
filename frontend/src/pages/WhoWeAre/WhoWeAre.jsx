import "./WhoWeAre.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import whoweare from "../../assets/images/pages/whoweare.jpg";

// Founder Images
import founderRohit from "../../assets/images/pages/founder.jpg";
import founderSumit from "../../assets/images/pages/sumit.jpg";

// Team Images
import sumit from "../../assets/images/pages/sumit.jpg";
import bishun from "../../assets/images/pages/bishun.jpg";
import ashutosh from "../../assets/images/pages/ashutosh.jpg";
import rohit from "../../assets/images/pages/rohit.jpg";

export default function WhoWeAre() {
  const team = [
    {
      name: "Sumit Singh",
      role: "CTO / Backend Developer",
      email: "sumitrsingh53@gmail.com",
      img: sumit,
      quote: `"Execution is the bridge between ideas and success."`,
      linkedIn: "https://linkedin.com/in/sumit",
    },
    {
      name: "Bishun Dev Mehta",
      role: "Technical Head / Android Developer",
      email: "mehtavishnu567@gmail.com",
      img: bishun,
      quote: `"Discipline beats motivation — always."`,
      linkedIn: "https://linkedin.com/in/bishun",
    },
    {
      name: "Ashutosh Kumar Singh",
      role: "Project Lead",
      email: "ashutoshkumarsingh@gmail.com",
      img: ashutosh,
      quote: `"The key to success is in the execution, not just the idea."`,
      linkedIn: "https://linkedin.com/in/sumit-projectlead",
    },
    {
      name: "Rohit Singh",
      role: "UI/UX Designer",
      email: "rohitkumar.getme@gmail.com",
      img: rohit,
      quote: `"Design is intelligence made visible."`,
      linkedIn: "https://linkedin.com/in/mahi",
    },
  ];

  return (
    <div className="wq-section">
      {/* HERO SECTION */}
      <div className="wq-hero wq-animate-fade">
        <h1 className="wq-hero-title">Who we are</h1>
        <p className="wq-hero-subtitle">
          Creating and working together for improvement
        </p>
      </div>

      {/* BANNER IMAGE */}
      <div className="wq-banner wq-animate-up">
        <img src={whoweare} className="wq-banner-img" alt="Handshake" />
      </div>

      {/* INTRO */}
      <section className="wq-intro wq-animate-fade">
        <h2 className="wq-intro-title">
          WisdomQuantums: Innovating the Future with Next-Generation
          Technologies
        </h2>

        <p className="wq-intro-text">
          WisdomQuantums, a leading IT company, is redefining the digital
          landscape with innovative next-gen technologies. Our skilled team of
          professionals delivers high-quality, scalable, and customized IT
          solutions for global clients. Partner with us to experience excellence
          in IT services that drive meaningful growth and sustainable success.
        </p>
      </section>

      {/* ===========================
          TWO FOUNDERS SECTION
      ============================ */}
      <section className="wq-founders-two wq-animate-up">
        {/* Founder Rohit */}
        <div className="wq-founder-card">
          <div className="wq-founder-left">
            <h3 className="wq-founder-role">Founder & CEO</h3>
            <h2 className="wq-founder-name">Mr. Rohit Kumar</h2>

            <p className="wq-founder-desc">
              Mr. Rohit Kumar is the visionary mind behind WisdomQuantums, known
              for his leadership and strategic thinking. His dedication and
              innovative mindset have played a major role in establishing the
              company as a trusted brand in the IT industry.
            </p>

            <div className="wq-founder-social">
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="wq-social-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="wq-social-icon" />
              </a>

              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="wq-social-icon" />
              </a>
            </div>
          </div>

          <div className="wq-founder-right">
            <img
              src={founderRohit}
              className="wq-founder-img"
              alt="Founder Rohit"
            />
          </div>
        </div>

        {/* Founder Sumit */}
        <div className="wq-founder-card">
          <div className="wq-founder-left">
            <h3 className="wq-founder-role">Founder & CEO</h3>
            <h2 className="wq-founder-name">Mr. Sumit Singh</h2>

            <p className="wq-founder-desc">
              Mr. Sumit Singh brings strong technical expertise and a
              forward-thinking approach. His contributions in technology and
              execution have been essential in driving the company’s growth and
              innovation.
            </p>

            <div className="wq-founder-social">
              <a
                href="https://twitter.com/sumit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="wq-social-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/sumit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="wq-social-icon" />
              </a>

              <a
                href="https://www.instagram.com/sumit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="wq-social-icon" />
              </a>
            </div>
          </div>

          <div className="wq-founder-right">
            <img
              src={founderSumit}
              className="wq-founder-img"
              alt="Founder Sumit"
            />
          </div>
        </div>
      </section>

      {/* TEAM HEADER */}
      <div className="wq-team-header wq-animate-fade">
        <h3 className="wq-team-sub">Awesome team members</h3>
        <h2 className="wq-team-title">Our team</h2>
      </div>

      {/* TEAM GRID */}
      <div className="wq-team-grid">
        {team.map((t, i) => (
          <div className="wq-flip-card" key={i}>
            {/* FRONT */}
            <div className="wq-flip-inner wq-flip-front">
              <img src={t.img} className="wq-team-img" alt={t.name} />
              <div className="wq-team-info">
                <h3>{t.name}</h3>
                <p>{t.role}</p>
                <span>{t.email}</span>
              </div>
            </div>

            {/* BACK */}
            <div className="wq-flip-inner wq-flip-back">
              <div className="wq-team-overlay">
                <p className="wq-team-quote">{t.quote}</p>
                <a href={t.linkedIn} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="wq-team-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
