import { useEffect, useRef } from "react";
import "./ITSolutions.css";

export default function ITSolutions() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const services = [
    { title: "Website Development", img: "/images/webdev.jpg" },
    { title: "App Development", img: "/images/appdev.jpg" },
    {
      title: "Digital Marketing",
      img: "../../assets/images/home/carousel1.jpg",
    },
    { title: "UI/UX Design", img: "/images/uiux.jpg" },
    { title: "Software Development", img: "/images/software.jpg" },
  ];

  /* AUTO SCROLL */
  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 260;
      }
    }, 2400);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section className="its-section">
      <div className="its-container">
        <p className="its-subtitle animate-fade">Tailored IT Solutions</p>

        <h2 className="its-title animate-fade">
          Crafting Tailored IT Solutions for your Business
        </h2>

        <p className="its-description animate-fade">
          At Avers, we deliver customized IT solutions tailored to your business
          needs. Using modern technology, we help you streamline operations and
          scale efficiently.
        </p>

        <div
          className="its-scroll-wrapper"
          ref={scrollRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div className="its-card-row">
            {[...services, ...services].map((item, idx) => (
              <div key={idx} className="its-card tilt">
                <div className="card-border-glow"></div>

                <img src={item.img} className="its-img" />

                <div className="its-overlay"></div>

                <h3 className="its-card-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="its-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
