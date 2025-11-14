import { Lightbulb, Target } from "lucide-react";
import "./VisionMission.css";

export default function VisionMission() {
  return (
    <section className="vm-section">
      <div className="vm-container">
        {/* LEFT SIDE */}
        <div className="vm-left animate-fade-up">
          <h2 className="vm-title">Grow Your Business with Profcyma</h2>

          <p className="vm-subtext">
            Unlock your full potential with tailored solutions, cutting-edge
            technology, and expert support. Let us help you drive growth,
            efficiency, and success.
          </p>

          <p className="vm-desc">
            At Profcyma, we specialize in delivering innovative, customized
            business solutions to help organizations thrive in a dynamic
            marketplace. With a focus on modern technology and strategic
            insights, we work closely with our clients to optimize processes,
            drive growth, and achieve sustainable success.
          </p>

          <a href="/contact-us">
            <button className="vm-btn">Contact Us</button>
          </a>
        </div>

        {/* RIGHT — BIGGER CIRCLE */}
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
                  To be a global leader in delivering innovative &
                  transformative business solutions.
                </p>
              </div>
            </div>

            <div className="vm-q vm-q3 text-bg">
              <div className="vm-q-inner text-only text-right-align">
                <h3 className="vm-heading">Mission:</h3>
                <p className="vm-text">
                  Empowering businesses with tailored strategies & cutting-edge
                  technology for scalable, sustainable growth.
                </p>
              </div>
            </div>

            <div className="vm-q vm-q4 icon-bg">
              <div className="vm-q-inner icon-only">
                <Target className="vm-icon icon-blue" />
              </div>
            </div>

            {/* Cross lines */}
            <div className="vm-cross-vertical"></div>
            <div className="vm-cross-horizontal"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
