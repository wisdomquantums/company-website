import React from "react";
import "./Blog.css";

// Import Local Images
import blog1 from "../../assets/images/blog/blog1.jpg";
import blog2 from "../../assets/images/blog/blog2.png";
import blog3 from "../../assets/images/blog/blog3.jpg";
import blog4 from "../../assets/images/blog/blog4.jpg";
import blog5 from "../../assets/images/blog/blog5.webp";
import blog6 from "../../assets/images/blog/blog6.jpg";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 IT Trends Transforming Businesses in 2024",
      img: blog1,
    },
    {
      id: 2,
      title: "How WisdomQuantums Built a Scalable AI Solution — Case Study",
      img: blog2,
    },
    {
      id: 3,
      title: "Cybersecurity Essentials Every Modern Business Must Know",
      img: blog3,
    },
    {
      id: 4,
      title: "Cloud Computing: Powering the Digital Enterprise",
      img: blog4,
    },
    {
      id: 5,
      title: "Tech Innovations Revolutionizing 2024",
      img: blog5,
    },
    {
      id: 6,
      title: "Why Digital Transformation Is No Longer Optional",
      img: blog6,
    },
  ];

  return (
    <section className="blog-root">
      {/* HEADER */}
      <div className="blog-header">
        <h2 className="blog-title">Insights • Trends • Innovation</h2>
        <h3 className="blog-subtitle">
          Explore the Latest in Tech, Software & Digital Transformation
        </h3>
      </div>

      {/* BLOG GRID */}
      <div className="blog-grid">
        {blogs.map((b) => (
          <article key={b.id} className="blog-card">
            <div className="blog-img-wrapper">
              <img src={b.img} alt={b.title} className="blog-img" />
            </div>

            <div className="blog-info">
              <p className="blog-text">{b.title}</p>
              <button className="blog-read-btn">Read More →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
