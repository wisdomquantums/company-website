import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [tab, setTab] = useState("website");
  const observerRef = useRef(null);

  /* ===============================
       REVEAL ON SCROLL
  =============================== */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("wq-port-inview");
        });
      },
      { threshold: 0.12 }
    );

    observerRef.current = obs;
    document
      .querySelectorAll(".wq-port-reveal")
      .forEach((el) => obs.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  /* Re-observe on tab change */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!observerRef.current) return;

      document.querySelectorAll(".wq-port-reveal").forEach((el) => {
        if (!el.classList.contains("wq-port-inview"))
          observerRef.current.observe(el);
      });
    }, 60);
    return () => clearTimeout(t);
  }, [tab]);

  /* ===============================
        DATA
  =============================== */

  const ecommerceWebsites = [
    {
      title: "Mansa Nutri",
      logo: "/portfolio/logos/mansa.png",
      img: "/portfolio/ecom-mansa.jpg",
      desc: "At Mansa Nutri, we believe in science-backed, sustainable nutrition plans to help you achieve your health goals.",
    },
    {
      title: "CMJ Industries",
      logo: "/portfolio/logos/cmj.png",
      img: "/portfolio/ecom-cmj.jpg",
      desc: "A tape industry storefront with catalogue, cart and admin panels for order management.",
    },
  ];

  const gamingWebsites = [
    {
      title: "FastLotWin",
      logo: "/portfolio/logos/fastlot.png",
      img: "/portfolio/gaming-1.jpg",
      desc: "Fast gaming platform with admin and live results.",
    },
    {
      title: "30Winners",
      logo: "/portfolio/logos/30w.png",
      img: "/portfolio/gaming-2.jpg",
      desc: "Modern gaming marketplace with analytics.",
    },
    {
      title: "BoomerBucks",
      logo: "/portfolio/logos/boomer.png",
      img: "/portfolio/gaming-3.jpg",
      desc: "Reward & loyalty driven gaming portal.",
    },
  ];

  const landingPages = [
    {
      title: "Find Your College",
      logo: "/portfolio/logos/college.png",
      img: "/portfolio/landing-1.jpg",
      desc: "We are passionate about bringing you the best products and services.",
    },
    {
      title: "To Be Blissful",
      logo: "/portfolio/logos/bliss.png",
      img: "/portfolio/landing-2.jpg",
      desc: "Expert-led courses in yoga and meditation.",
    },
    {
      title: "Choudhary Scaffolding",
      logo: "/portfolio/logos/scaffold.png",
      img: "/portfolio/landing-3.jpg",
      desc: "Rental & sales of scaffolding hardware.",
    },
  ];

  const mobileEcomApps = [
    {
      title: "Mahatrade",
      img: "/portfolio/mob-ecom-1.jpg",
      desc: "AI-powered trading & order management.",
    },
    {
      title: "Rexi",
      img: "/portfolio/mob-ecom-2.jpg",
      desc: "Simple efficient transportation booking app.",
    },
    {
      title: "StoreX",
      img: "/portfolio/mob-ecom-3.jpg",
      desc: "Retail e-commerce mobile frontend & admin.",
    },
  ];

  const mobileGaming = [
    { title: "BoomerBucks App", img: "/portfolio/mob-game-1.jpg", desc: "" },
    { title: "VIP11 App", img: "/portfolio/mob-game-2.jpg", desc: "" },
    { title: "FastLotWin App", img: "/portfolio/mob-game-3.jpg", desc: "" },
  ];

  const socialApps = [
    {
      title: "REXI Social",
      img: "/portfolio/mob-social-1.jpg",
      desc: "Community and marketplaces integrated.",
    },
    {
      title: "TeamApp",
      img: "/portfolio/mob-social-2.jpg",
      desc: "Organization communication app.",
    },
  ];

  const headingText =
    tab === "website"
      ? "Our E-commerce Websites"
      : "Our E-commerce Mobile Applications";

  const headingSub =
    tab === "website"
      ? "Explore our modern, scalable, and user-friendly website solutions built for seamless performance."
      : "Discover beautifully crafted mobile apps designed for efficiency, smooth user experience, and fast performance across devices.";

  /* ===============================
        CARD COMPONENT
  =============================== */

  const Card = ({ item, variant = "standard" }) => {
    return (
      <article className={`wq-port-card ${variant} wq-port-reveal`}>
        <div className="wq-port-card-top">
          <div className="wq-port-notch">
            {item.logo ? (
              <img src={item.logo} className="wq-port-notch-logo" alt="logo" />
            ) : (
              <span className="wq-port-notch-title">{item.title}</span>
            )}
          </div>

          <div className="wq-port-card-media">
            <img src={item.img} alt={item.title} />
            <div className="wq-port-media-overlay">
              <span>{item.title}</span>
            </div>
          </div>
        </div>

        <div className="wq-port-card-body">
          <h3 className="wq-port-card-title">{item.title}</h3>
          <p className="wq-port-card-desc">{item.desc}</p>

          <div className="wq-port-card-actions">
            <a
              href="#!"
              className="wq-port-btn-outline"
              onClick={(e) => e.preventDefault()}
            >
              View
            </a>
            <a
              href="#!"
              className="wq-port-btn-primary"
              onClick={(e) => e.preventDefault()}
            >
              Demo
            </a>
          </div>
        </div>
      </article>
    );
  };

  /* ===============================
        VIEW
  =============================== */

  return (
    <main className="wq-port-wrapper">
      <div className="wq-port-hero">
        <h1 className="wq-port-hero-title">Portfolio</h1>
      </div>

      <div className="wq-port-tabs">
        <div className="wq-port-tabs-pill">
          <button
            className={`wq-port-tab-btn ${tab === "website" ? "active" : ""}`}
            onClick={() => setTab("website")}
          >
            Website
          </button>

          <button
            className={`wq-port-tab-btn ${tab === "mobile" ? "active" : ""}`}
            onClick={() => setTab("mobile")}
          >
            Mobile Application
          </button>
        </div>
      </div>

      <section className="wq-port-intro wq-port-reveal">
        <h2 className="wq-port-intro-title">{headingText}</h2>
        <p className="wq-port-intro-text">{headingSub}</p>
      </section>

      {/* WEBSITE TAB */}
      {tab === "website" && (
        <>
          <section className="wq-port-grid wq-port-reveal">
            {ecommerceWebsites.map((c, i) => (
              <Card key={i} item={c} />
            ))}
          </section>

          <section className="wq-port-section wq-port-reveal">
            <h3 className="wq-port-section-head">Our Gaming Websites</h3>
            <div className="wq-port-grid wq-port-grid-compact">
              {gamingWebsites.map((c, i) => (
                <Card key={i} item={c} variant="dark" />
              ))}
            </div>
          </section>

          <section className="wq-port-section wq-port-reveal">
            <h3 className="wq-port-section-head">Our Website Landing Pages</h3>
            <div className="wq-port-grid wq-port-grid-compact">
              {landingPages.map((c, i) => (
                <Card key={i} item={c} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* MOBILE TAB */}
      {tab === "mobile" && (
        <>
          <section className="wq-port-grid wq-port-reveal">
            {mobileEcomApps.map((c, i) => (
              <Card key={i} item={c} />
            ))}
          </section>

          <section className="wq-port-section wq-port-reveal">
            <h3 className="wq-port-section-head">
              Our Mobile Gaming Applications
            </h3>
            <div className="wq-port-grid wq-port-grid-compact">
              {mobileGaming.map((c, i) => (
                <Card key={i} item={c} variant="dark" />
              ))}
            </div>
          </section>

          <section className="wq-port-section wq-port-reveal">
            <h3 className="wq-port-section-head">
              Our Social Mobile Applications
            </h3>
            <div className="wq-port-grid wq-port-grid-compact">
              {socialApps.map((c, i) => (
                <Card key={i} item={c} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
