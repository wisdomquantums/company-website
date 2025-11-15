import { Lightbulb, Target } from "lucide-react";
import "./VisionMission.css";

export default function VisionMission() {
  return (
    <section className="vm-section">
      <div className="vm-container">
        {/* LEFT SIDE */}
        <div className="vm-left animate-fade-up">
          <h3 className="vm-title">Grow Your Business with WisdomQuantums</h3>

          <p className="vm-subtext">
            Accelerate your digital journey with intelligent solutions, advanced
            technology, and strategic expertise designed for future-ready
            businesses.
          </p>

          <p className="vm-desc">
            At WisdomQuantums, we empower organizations with innovative,
            custom-built IT solutions that drive efficiency, scalability, and
            long-term success. Our team partners closely with clients to
            streamline processes, enhance digital capabilities, and unlock new
            opportunities in a rapidly evolving digital world.
          </p>

          <a href="/contact-us">
            <button className="vm-btn">Contact Us</button>
          </a>
        </div>

        {/* RIGHT — CIRCLE SECTION */}
        <div className="vm-right animate-fade-up">
          <div className="vm-circle">
            <div className="vm-q vm-q1 icon-bg">
              <div className="vm-q-inner icon-only">
                <Lightbulb className="vm-icon icon-yellow" />
              </div>
            </div>

            <div className="vm-q vm-q2 text-bg">
              <div className="vm-q-inner text-only text-left-align">
                <h3 className="vm-heading">Vision:</h3>
                <p className="vm-text">
                  To become a global benchmark in transforming businesses
                  through intelligent, innovative, and future-driven digital
                  solutions.
                </p>
              </div>
            </div>

            <div className="vm-q vm-q3 text-bg">
              <div className="vm-q-inner text-only text-right-align">
                <h3 className="vm-heading">Mission:</h3>
                <p className="vm-text">
                  To empower organizations with next-gen technology, tailored
                  strategies, and scalable solutions that accelerate growth and
                  maximize impact.
                </p>
              </div>
            </div>

            <div className="vm-q vm-q4 icon-bg">
              <div className="vm-q-inner icon-only">
                <Target className="vm-icon icon-blue" />
              </div>
            </div>

            {/* Cross Lines */}
            <div className="vm-cross-vertical"></div>
            <div className="vm-cross-horizontal"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
