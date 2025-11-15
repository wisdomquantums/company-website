import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

import carousel1 from "@/assets/images/home/carousel1.jpg";
import carousel2 from "@/assets/images/home/carousel2.jpg";
import carousel3 from "@/assets/images/home/carousel3.jpg";

export default function Hero({
  ctaText = "Explore Services",
  ctaLink = "/it-solutions",
}) {
  const images = [carousel1, carousel2, carousel3];
  const [currentImage, setCurrentImage] = useState(0);

  const quotes = [
    {
      title: "Beyond Software — We Build Experiences",
      subtitle: "Crafting meaningful digital journeys for users everywhere.",
    },
    {
      title: "WisdomQuantum is",
      subtitle:
        "A software & IT solutions company crafting web, app, and digital services for the modern world.",
    },
    {
      title: "Building the Future of Digital Innovation",
      subtitle:
        "Delivering smart, scalable, and impactful technology solutions.",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(imageTimer);
  }, [images.length]);

  useEffect(() => {
    const quoteTimer = setInterval(
      () => setCurrentQuote((prev) => (prev + 1) % quotes.length),
      6000
    );
    return () => clearInterval(quoteTimer);
  }, [quotes.length]);

  return (
    <section className="hero-root">
      {/* Background Carousel */}
      <div className="hero-bg-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Hero Slide ${currentImage + 1}`}
            className="hero-bg-image"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-left"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="hero-title">{quotes[currentQuote].title}</h2>
              <div className="hero-line"></div>
              <p className="hero-subtitle">{quotes[currentQuote].subtitle}</p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to={ctaLink} className="hero-btn">
              {ctaText}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hero-right"
        >
          <img
            src={images[currentImage]}
            alt="Hero Visual"
            className="hero-image"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator"
      >
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </motion.div> */}
    </section>
  );
}
