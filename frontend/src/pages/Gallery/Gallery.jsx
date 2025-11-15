import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";
import o1 from "../../assets/images/gallery/office1.webp";
import o2 from "../../assets/images/gallery/office2.jpg";
import o3 from "../../assets/images/gallery/office3.avif";
import o4 from "../../assets/images/gallery/office4.jpg";
import o5 from "../../assets/images/gallery/office5.jpg";
import o6 from "../../assets/images/gallery/office6.jpg";
import o7 from "../../assets/images/gallery/office7.jpg";
import o8 from "../../assets/images/gallery/office8.jpg";
import o9 from "../../assets/images/gallery/office9.jpg";

export default function Gallery() {
  const [popup, setPopup] = useState(null);

  const images = [o1, o2, o3, o4, o5, o6, o7, o8, o9];

  return (
    <>
      <main
        className="gallery-section"
        onContextMenu={(e) => e.preventDefault()} // disable right click
      >
        <div className="gallery-hero">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-sub">Captured Moments, Endless Stories</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="gallery-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Overlay to prevent save */}
              <div className="img-protect"></div>

              <img
                src={img}
                alt={`gallery-${i}`}
                draggable="false"
                loading="lazy"
                onClick={() => setPopup(img)}
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* LIGHTBOX POPUP */}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(null)}
          >
            <motion.img
              src={popup}
              className="popup-img"
              draggable="false"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
