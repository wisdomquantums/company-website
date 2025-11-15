import React from "react";
import "./BusinessSolutions.css";

import mainImg from "@/assets/images/solutions/main.jpg";
import smallImg from "@/assets/images/solutions/small.jpg";

export default function BusinessSolutions() {
  return (
    <section className="bs-root">
      <div className="bs-wrapper fade-in">
        {/* TOP SECTION */}
        <div className="bs-top">
          {/* LEFT IMAGES */}
          <div className="bs-images parallax-hover">
            <img src={mainImg} className="bs-main-img" alt="" />

            <div className="bs-arc animated-arc"></div>

            <img src={smallImg} className="bs-small-img float-up" alt="" />
          </div>

          {/* RIGHT TEXT */}
          <div className="bs-content slide-up">
            <h4 className="bs-subtitle neon-text">Driven by Smart Solutions</h4>

            <h2 className="bs-title glass-title text-light">
              Innovating Business Solutions
            </h2>

            <div className="bs-lists">
              <ul className="list-block fade-left">
                <li>› Technology Integration</li>
                <li>› Problem-Solving Approach</li>
                <li>› Scalable Growth</li>
                <li>› Adaptability and Agility</li>
                <li>› Customer-Centric Design</li>
              </ul>

              <ul className="list-block fade-right">
                <li>› Increased Efficiency</li>
                <li>› Enhanced Competitiveness</li>
                <li>› Better Decision-Making</li>
                <li>› Sustainable Growth</li>
                <li>› Improved Customer Engagement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="text-white bs-stats glass-container">
          <div className="stat-item hover-zoom">
            <h3 className="stat-number neon-blue">500+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item hover-zoom">
            <h3 className="stat-number neon-blue">10+</h3>
            <p>Technologies Used</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item hover-zoom">
            <h3 className="stat-number neon-blue">400+</h3>
            <p>Trusted by companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
