import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

export default function Testimonials() {
  // === 6 Testimonials ===
  const testimonials = [
    {
      quote:
        "WisdomQuantum transformed our business processes with their innovative solutions. Highly recommended!",
      name: "Aditya Jagtap",
      role: "Software Developer",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      quote:
        "Working with WisdomQuantum has been a game changer for our business. Outstanding support!",
      name: "Paresh Shinde",
      role: "Civil Engineer",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      quote:
        "We partnered with WisdomQuantum for cloud migration — seamless and stress-free!",
      name: "Vicky Sharma",
      role: "Data Analyst",
      img: "https://i.pravatar.cc/100?img=3",
    },
    {
      quote:
        "Their cybersecurity & IT services have kept our systems secure and up-to-date.",
      name: "Mayank Patil",
      role: "COO, Secure Enterprises",
      img: "https://i.pravatar.cc/100?img=4",
    },
    {
      quote:
        "The WisdomQuantum team delivers quality, precision, and exceptional communication.",
      name: "Rohit Verma",
      role: "Product Manager",
      img: "https://i.pravatar.cc/100?img=5",
    },
    {
      quote:
        "Their software automation solutions boosted our efficiency by 3x!",
      name: "Sneha Kulkarni",
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
        <h3 className="testimonials-subtitle">Real Stories. Proven Success.</h3>
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
