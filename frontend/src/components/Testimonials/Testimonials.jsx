import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

export default function Testimonials() {
  // === 6 Updated Testimonials ===
  const testimonials = [
    {
      quote:
        "WisdomQuantums delivered a seamless digital transformation for our company. Their expertise and execution exceeded expectations.",
      name: "Vikash Tiwari",
      role: "Software Developer",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      quote:
        "The team at WisdomQuantums helped us build reliable systems with outstanding support. Truly a valuable tech partner.",
      name: "Sachin Kumar",
      role: "Civil Engineer",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      quote:
        "Their cloud migration service was quick, secure, and efficient. Zero downtime and excellent communication throughout.",
      name: "Nehal Sharma",
      role: "Data Analyst",
      img: "https://i.pravatar.cc/100?img=3",
    },
    {
      quote:
        "We rely on WisdomQuantums for cybersecurity and IT support. Their proactive approach keeps our systems stable and protected.",
      name: "Mayank Patil",
      role: "COO, Secure Enterprises",
      img: "https://i.pravatar.cc/100?img=4",
    },
    {
      quote:
        "Exceptional quality and precision. Their team understands requirements deeply and delivers solutions that scale effortlessly.",
      name: "Maya Verma",
      role: "Product Manager",
      img: "https://i.pravatar.cc/100?img=5",
    },
    {
      quote:
        "Our automation workflow improved drastically — 3x faster output! WisdomQuantums is the best tech partner we’ve worked with.",
      name: "Raj Kulkarni",
      role: "IT Consultant",
      img: "https://i.pravatar.cc/100?img=6",
    },
  ];

  // === Group into slides of 3 cards ===
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, i + 3));
  }

  const [index, setIndex] = useState(0);

  // Auto Slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="testimonials-root">
      {/* Heading */}
      <div className="testimonials-header">
        <h2 className="testimonials-title">What Our Clients Say About Us</h2>
        <h3 className="testimonials-subtitle">
          Trusted Partners. Real Results.
        </h3>
      </div>

      {/* Slider */}
      <div className="testimonials-multi-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="testimonials-row"
          >
            {slides[index].map((item, i) => (
              <div key={i} className="testimonial-card multi-card">
                <div className="testimonial-quote-icon">❝</div>

                <p className="testimonial-text">{item.quote}</p>

                <div className="testimonial-author">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <h4 className="testimonial-name">{item.name}</h4>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="testimonials-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}
