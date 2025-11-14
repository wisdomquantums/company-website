import React from "react";
import "./Blog.css";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 IT Trends Transforming Businesses in 2024",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
      id: 2,
      title: "How We Helped XYZ Automate Their Operations with AI — Case Study",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      id: 3,
      title: "Cybersecurity Essentials Every Business Must Know",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
    {
      id: 4,
      title: "Cloud Computing: The Backbone of Modern Enterprises",
      img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
    },
    {
      id: 5,
      title: "Latest Tech Innovations Shaping 2024",
      img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
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
