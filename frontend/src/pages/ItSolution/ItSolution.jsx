import React, { useState, useEffect } from "react";
import "./ItSolution.css";
import web1 from "../../assets/images/it_solutions/web1.jpg";
import web2 from "../../assets/images/it_solutions/web2.png";
import web3 from "../../assets/images/it_solutions/web3.jpg";

import app1 from "../../assets/images/it_solutions/app1.jpg";
import app2 from "../../assets/images/it_solutions/app2.webp";
import app3 from "../../assets/images/it_solutions/app3.webp";

import d1 from "../../assets/images/it_solutions/digital1.jpg";
import d2 from "../../assets/images/it_solutions/digital2.webp";
import d3 from "../../assets/images/it_solutions/digital3.jpg";

import u1 from "../../assets/images/it_solutions/uiux1.jpg";
import u2 from "../../assets/images/it_solutions/uiux2.jpg";
import u3 from "../../assets/images/it_solutions/uiux3.jpg";

import sd1 from "../../assets/images/it_solutions/sd1.jpg";
import sd2 from "../../assets/images/it_solutions/sd2.jpg";
import sd3 from "../../assets/images/it_solutions/sd3.jpg";

import ba1 from "../../assets/images/it_solutions/ba1.jpg";
import ba2 from "../../assets/images/it_solutions/ba2.png";
import ba3 from "../../assets/images/it_solutions/ba3.webp";

import gd1 from "../../assets/images/it_solutions/gd1.jpg";
import gd2 from "../../assets/images/it_solutions/gd2.jpg";
import gd3 from "../../assets/images/it_solutions/gd3.jpg";

import ec1 from "../../assets/images/it_solutions/ecommerce1.webp";
import ec2 from "../../assets/images/it_solutions/ecommerce2.webp";
import ec3 from "../../assets/images/it_solutions/ecommerce3.jpg";

export default function ItSolution() {
  const [active, setActive] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const services = [
    {
      title: "Website Development",
      images: [web1, web2, web3],
      desc: "We build modern, responsive, SEO-ready websites designed for performance, conversions, and branding.",
    },
    {
      title: "App Development",
      images: [app1, app2, app3],
      desc: "Native & hybrid apps for iOS and Android — optimized for speed, UI/UX, and business workflows.",
    },
    {
      title: "Digital Marketing",
      images: [d1, d2, d3],
      desc: "Grow your business visibility with SEO, social ads, branding, content marketing, and analytics.",
    },
    {
      title: "UI/UX Design",
      images: [u1, u2, u3],
      desc: "Exceptional UI/UX crafted using modern design principles, user flows, and interaction psychology.",
    },
    {
      title: "Software Development",
      images: [sd1, sd2, sd3],
      desc: "Custom software tailored for automation, scaling, and high-performance enterprise operations.",
    },
    {
      title: "Brand Awarenesss",
      images: [ba1, ba2, ba3],
      desc: "Promote your brand identity across social, digital, and offline channels with effective strategies.",
    },
    {
      title: "Graphics Designing",
      images: [gd1, gd2, gd3],
      desc: "High-quality creatives — posters, logos, social media posts, banners, and marketing designs.",
    },
    {
      title: "E-commerce Development",
      images: [ec1, ec2, ec3],
      desc: "Modern, secure, product-focused eCommerce stores with admin dashboards and payment systems.",
    },
  ];

  // Close popup on “ESC”
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Slider next / prev
  const nextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % active.images.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev === 0 ? active.images.length - 1 : prev - 1));

  return (
    <>
      {/* Main Page */}
      <main className="it-section">
        <div className="it-container">
          <div className="it-grid">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="it-card"
                onClick={() => {
                  setActive(item);
                  setSlideIndex(0);
                }}
              >
                <div className="it-img">
                  <img src={item.images[0]} alt={item.title} />
                </div>

                <div className="it-content">
                  <h3>{item.title}</h3>

                  <button className="it-btn">
                    Explore Solution <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* POPUP */}
      {active && (
        <div className="it-popup-overlay" onClick={() => setActive(null)}>
          <div className="it-popup" onClick={(e) => e.stopPropagation()}>
            <button className="it-popup-close" onClick={() => setActive(null)}>
              ✕
            </button>

            {/* SLIDER */}
            <div className="it-slider">
              <button className="slide-btn left" onClick={prevSlide}>
                ‹
              </button>

              <img
                src={active.images[slideIndex]}
                className="it-popup-img"
                alt={active.title}
              />

              <button className="slide-btn right" onClick={nextSlide}>
                ›
              </button>
            </div>

            <h2 className="popup-title">{active.title}</h2>
            <p className="popup-desc">{active.desc}</p>

            <button className="it-primary-btn">View Full Details →</button>
          </div>
        </div>
      )}
    </>
  );
}
