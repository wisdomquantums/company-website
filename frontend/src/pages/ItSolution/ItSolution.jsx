import React, { useState, useEffect } from "react";
import "./ItSolution.css";

export default function ItSolution() {
  const [active, setActive] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const services = [
    {
      title: "Website Development",
      images: [
        "/itsolution/web.jpg",
        "/itsolution/web2.jpg",
        "/itsolution/web3.jpg",
      ],
      desc: "We build modern, responsive, SEO-ready websites designed for performance, conversions, and branding.",
    },
    {
      title: "App Development",
      images: [
        "/itsolution/app.jpg",
        "/itsolution/app2.jpg",
        "/itsolution/app3.jpg",
      ],
      desc: "Native & hybrid apps for iOS and Android — optimized for speed, UI/UX, and business workflows.",
    },
    {
      title: "Digital Marketing",
      images: [
        "/itsolution/digital.jpg",
        "/itsolution/digital2.jpg",
        "/itsolution/digital3.jpg",
      ],
      desc: "Grow your business visibility with SEO, social ads, branding, content marketing, and analytics.",
    },
    {
      title: "UI/UX Design",
      images: [
        "/itsolution/uiux.jpg",
        "/itsolution/uiux2.jpg",
        "/itsolution/uiux3.jpg",
      ],
      desc: "Exceptional UI/UX crafted using modern design principles, user flows, and interaction psychology.",
    },
    {
      title: "Software Development",
      images: [
        "/itsolution/software.jpg",
        "/itsolution/software2.jpg",
        "/itsolution/software3.jpg",
      ],
      desc: "Custom software tailored for automation, scaling, and high-performance enterprise operations.",
    },
    {
      title: "Brand Awarenesss",
      images: [
        "/itsolution/brand.jpg",
        "/itsolution/brand2.jpg",
        "/itsolution/brand3.jpg",
      ],
      desc: "Promote your brand identity across social, digital, and offline channels with effective strategies.",
    },
    {
      title: "Graphics Designing",
      images: [
        "/itsolution/graphics.jpg",
        "/itsolution/graphics2.jpg",
        "/itsolution/graphics3.jpg",
      ],
      desc: "High-quality creatives — posters, logos, social media posts, banners, and marketing designs.",
    },
    {
      title: "E-commerce Development",
      images: [
        "/itsolution/ecommerce.jpg",
        "/itsolution/ecommerce2.jpg",
        "/itsolution/ecommerce3.jpg",
      ],
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
