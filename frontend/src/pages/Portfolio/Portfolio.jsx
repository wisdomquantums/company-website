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
          if (e.isIntersecting) e.target.classList.add("inview");
        });
      },
      { threshold: 0.12 }
    );

    observerRef.current = obs;
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  /* Re-observe on tab switch */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!observerRef.current) return;

      document.querySelectorAll(".reveal").forEach((el) => {
        if (!el.classList.contains("inview")) observerRef.current.observe(el);
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
        CARD COMPONENT (3D)
  =============================== */

  const Card = ({ item, variant = "standard" }) => {
    return (
      <article className={`card-3d reveal ${variant}`}>
        <div className="card-top">
          <div className="card-notch">
            {item.logo ? (
              <img src={item.logo} className="notch-logo" alt="logo" />
            ) : (
              <span className="notch-title">{item.title}</span>
            )}
          </div>

          <div className="card-media">
            <img src={item.img} alt={item.title} />
            <div className="media-overlay">
              <span>{item.title}</span>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>

          <div className="card-actions">
            <a
              href="#!"
              className="btn-outline"
              onClick={(e) => e.preventDefault()}
            >
              View
            </a>

            <a
              href="#!"
              className="btn-primary"
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
    <main className="portfolio-wrapper">
      <div className="hero">
        <h1 className="hero-title">Portfolio</h1>
      </div>

      <div className="portfolio-tabs">
        <div className="tabs-pill">
          <button
            className={`tab-btn ${tab === "website" ? "active" : ""}`}
            onClick={() => setTab("website")}
          >
            Website
          </button>
          <button
            className={`tab-btn ${tab === "mobile" ? "active" : ""}`}
            onClick={() => setTab("mobile")}
          >
            Mobile Application
          </button>
        </div>
      </div>

      <section className="intro reveal">
        <h2 className="intro-title">{headingText}</h2>
        <p className="intro-text">{headingSub}</p>
      </section>

      {/* WEBSITE TAB */}
      {tab === "website" && (
        <>
          <section className="grid reveal">
            {ecommerceWebsites.map((c, i) => (
              <Card key={i} item={c} />
            ))}
          </section>

          <section className="gaming-section reveal">
            <h3 className="section-head">Our Gaming Websites</h3>
            <div className="grid grid-compact">
              {gamingWebsites.map((c, i) => (
                <Card key={i} item={c} variant="dark" />
              ))}
            </div>
          </section>

          <section className="gaming-section reveal">
            <h3 className="section-head">Our Website Landing Pages</h3>
            <div className="grid grid-compact">
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
          <section className="grid reveal">
            {mobileEcomApps.map((c, i) => (
              <Card key={i} item={c} />
            ))}
          </section>

          <section className="gaming-section reveal">
            <h3 className="section-head">Our Mobile Gaming Applications</h3>
            <div className="grid grid-compact">
              {mobileGaming.map((c, i) => (
                <Card key={i} item={c} variant="dark" />
              ))}
            </div>
          </section>

          <section className="gaming-section reveal">
            <h3 className="section-head">Our Social Mobile Applications</h3>
            <div className="grid grid-compact">
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
