import "./WhoWeAre.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function WhoWeAre() {
  const team = [
    {
      name: "Guddu Kumar",
      role: "CTO",
      email: "guddu.kumar@profcyma.com",
      img: "/team/guddu.jpg",
      quote: `"Execution is the bridge between ideas and success."`,
    },
    {
      name: "Amarendra Kumar",
      role: "Technical Head / Server Admin",
      email: "amar.thakur@profcyma.com",
      img: "/team/amar.jpg",
      quote: `"Discipline beats motivation — always."`,
    },
    {
      name: "Aman Verma",
      role: "Project Lead",
      email: "aman@profcyma.com",
      img: "/team/aman.jpg",
      quote: `"The key to success is in the execution, not just the idea."`,
    },
    {
      name: "Rahul Singh",
      role: "Backend Developer",
      email: "rahul@profcyma.com",
      img: "/team/rahul.jpg",
      quote: `"Clean code always wins."`,
    },
    {
      name: "Sneha Patil",
      role: "UI/UX Designer",
      email: "sneha@profcyma.com",
      img: "/team/sneha.jpg",
      quote: `"Design is intelligence made visible."`,
    },
    {
      name: "Vikas Sharma",
      role: "Android Developer",
      email: "vikas@profcyma.com",
      img: "/team/vikas.jpg",
      quote: `"Innovation starts with curiosity."`,
    },
  ];

  return (
    <div className="who-section">
      {/* HERO TITLE */}
      <div className="hero animate-fade">
        <h1 className="hero-title">Who we are</h1>
        <p className="hero-subtitle">
          Creating and working together for improvement
        </p>
      </div>

      {/* HANDSHAKE IMAGE BANNER */}
      <div className="banner animate-up">
        <img
          src="/images/handshake.jpg"
          className="banner-img"
          alt="Handshake"
        />
      </div>

      {/* COMPANY INTRO */}
      <section className="intro animate-fade">
        <h2 className="intro-title">
          Profcyma Global Solutions: Transforming IT with Cutting-Edge
          Technologies
        </h2>

        <p className="intro-text">
          Profcyma Global Solutions, a leading IT company in Pune, is
          revolutionizing the industry with innovative next-gen technologies.
          Backed by over 8+ years of expertise, our dedicated team of skilled
          professionals delivers exceptional IT solutions tailored to global
          clients’ needs. Partner with us to experience excellence in IT
          services that redefine success.
        </p>
      </section>

      {/* FOUNDER SECTION */}
      <section className="founder-section animate-up">
        <div className="founder-left">
          <h3 className="founder-role">Founder & Managing Director</h3>
          <h2 className="founder-name">Mr. Bharat Gaddamwar</h2>

          <p className="founder-desc">
            Meet Mr. Bharat Gaddamwar, the visionary founder & CEO of Profcyma
            Global Solutions. A leader driven by passion and purpose, he
            transformed his goals into reality with unwavering determination.
            Under his leadership, Profcyma has grown into a trusted name in the
            IT industry, known for innovation and client-focused excellence.
          </p>

          <div className="founder-social">
            <FaTwitter className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>

        <div className="founder-right">
          <img
            src="/images/founder.jpg"
            className="founder-img"
            alt="Founder"
          />
        </div>
      </section>

      {/* TEAM SECTION TITLE */}
      <div className="team-header animate-fade">
        <h3 className="team-sub">Awesome team members</h3>
        <h2 className="team-title">Our team</h2>
      </div>

      {/* TEAM GRID */}
      <div className="team-grid">
        {team.map((t, i) => (
          <div className="flip-card" key={i}>
            {/* FRONT VIEW */}
            <div className="flip-inner flip-front">
              <img src={t.img} className="team-img" alt={t.name} />

              <div className="team-info">
                <h3>{t.name}</h3>
                <p>{t.role}</p>
                <span>{t.email}</span>
              </div>
            </div>

            {/* BACK VIEW */}
            <div className="flip-inner flip-back">
              <div className="team-overlay">
                <p className="team-quote">{t.quote}</p>
                <FaLinkedin className="team-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
