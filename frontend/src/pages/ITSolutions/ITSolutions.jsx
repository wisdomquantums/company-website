import { useEffect, useRef } from "react";
import "./ITSolutions.css";
import appdevelopment from "../../assets/images/home/mobileapp1.png";
import websitedevelopment from "../../assets/images/home/websitedevelopment.avif";
import digitalmarketing from "../../assets/images/home/digitalmarketing1.jpg";
import uiux from "../../assets/images/home/uiux.jpg";
import softwaredevelopment from "../../assets/images/home/softwaredevelop.jpg";

export default function ITSolutions() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const services = [
    { title: "Website Development", img: websitedevelopment },
    { title: "App Development", img: appdevelopment },
    {
      title: "Digital Marketing",
      img: digitalmarketing,
    },
    { title: "UI/UX Design", img: uiux },
    { title: "Software Development", img: softwaredevelopment },
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
        <p className="its-subtitle animate-fade">Smart IT Services</p>

        <h2 className="its-title animate-fade">
          Innovative IT Solutions Designed for Growth
        </h2>

        <p className="its-description animate-fade">
          WisdomQuantums delivers powerful, scalable, and future-ready IT
          solutions tailored to your business goals. Our expert team leverages
          modern technology to streamline operations, enhance user experience,
          and accelerate your digital transformation journey.
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

                <img src={item.img} className="its-img" alt={item.title} />

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
