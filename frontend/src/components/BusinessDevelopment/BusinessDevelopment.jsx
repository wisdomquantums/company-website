import { BarChart3, Cpu, Bot } from "lucide-react";
import "./BusinessDevelopment.css";

export default function BusinessDevelopment() {
  return (
    <section className="wq-bd-wrapper">
      <div className="wq-bd-container">
        {/* Heading */}
        <div className="wq-bd-header">
          <h3 className="wq-bd-tagline">We are Avers</h3>
          <h2 className="wq-bd-title">Business Development & Innovation</h2>
        </div>

        {/* Cards */}
        <div className="wq-bd-grid">
          <div className="wq-bd-card">
            <div className="wq-bd-icon-box">
              <BarChart3 className="wq-bd-icon" />
            </div>
            <h3 className="wq-bd-card-title">Strategic Growth Acceleration</h3>
            <p className="wq-bd-card-text">
              Focused strategies that simplify processes and strengthen business
              growth.
            </p>
          </div>

          <div className="wq-bd-card">
            <div className="wq-bd-icon-box">
              <Cpu className="wq-bd-icon" />
            </div>
            <h3 className="wq-bd-card-title">Intelligent Tech Integration</h3>
            <p className="wq-bd-card-text">
              Smart tools and automation that increase efficiency and accuracy.
            </p>
          </div>

          <div className="wq-bd-card">
            <div className="wq-bd-icon-box">
              <Bot className="wq-bd-icon" />
            </div>
            <h3 className="wq-bd-card-title">Future-Ready Innovation</h3>
            <p className="wq-bd-card-text">
              Modern ideas and automation to keep your business ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
