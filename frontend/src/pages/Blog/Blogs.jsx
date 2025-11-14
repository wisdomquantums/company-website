import React, { useEffect, useState } from "react";
import "./Blogs.css";

export default function Blogs() {
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOverlay(false), 500);
    return () => clearTimeout(t);
  }, []);

  const topPosts = [
    "Why Does Your Digital Marketing Strategy Need to Include AI?",
    "What is DevOps & Its Importance in Software Development",
    "Why Your Website Isn’t Ranking | Web Development Mistakes Hurting SEO",
    "Top 10 UX/UI Design Mistakes That Are Killing Your Conversions",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/profcymaglobal/",
      icon: "/blogs/insta.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/71181720/admin/dashboard/",
      icon: "/blogs/linkedin.png",
    },
    {
      name: "Twitter",
      url: "https://x.com/?logout=1732798679923",
      icon: "/blogs/twitter.png",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profcymaglobal",
      icon: "/blogs/facebook.png",
    },
  ];

  const heroBlogs = [
    {
      title: "Why Does Your Digital Marketing Strategy Need to Include AI?",
      img: "/blogs/blog1.jpg",
      date: "23 Nov 2024",
      desc: "In today’s fast-paced digital world, staying ahead requires more than creativity...",
    },
    {
      title: "What is DevOps & Its Importance in Software Development",
      img: "/blogs/blog2.jpg",
      date: "26 Nov 2024",
      desc: "In today’s fast-paced digital landscape, efficient software delivery is essential...",
    },
    {
      title: "Why Does Your Digital Marketing Strategy Need to Include AI?",
      img: "/blogs/blog1.jpg",
      date: "23 Nov 2024",
      desc: "In today’s fast-paced digital world, staying ahead requires more than creativity...",
    },
    {
      title: "What is DevOps & Its Importance in Software Development",
      img: "/blogs/blog2.jpg",
      date: "26 Nov 2024",
      desc: "In today’s fast-paced digital landscape, efficient software delivery is essential...",
    },
  ];

  const secondRowBlogs = [
    {
      title: "Why Your Website Isn’t Ranking | Web Dev Mistakes Hurting SEO",
      img: "/blogs/blog3.jpg",
      date: "26 Sep 2025",
      desc: "You’ve spent money on marketing, yet your site still isn’t ranking. Why?",
    },
    {
      title: "Top 10 UX/UI Design Mistakes That Are Killing Your Conversions",
      img: "/blogs/blog4.jpg",
      date: "26 Sep 2025",
      desc: "Even small UI/UX mistakes can frustrate visitors and reduce engagement...",
    },
    {
      title: "Why Your Website Isn’t Ranking | Web Dev Mistakes Hurting SEO",
      img: "/blogs/blog3.jpg",
      date: "26 Sep 2025",
      desc: "You’ve spent money on marketing, yet your site still isn’t ranking. Why?",
    },
    {
      title: "Top 10 UX/UI Design Mistakes That Are Killing Your Conversions",
      img: "/blogs/blog4.jpg",
      date: "26 Sep 2025",
      desc: "Even small UI/UX mistakes can frustrate visitors and reduce engagement...",
    },
  ];

  return (
    <>
      {/* OVERLAY */}
      <div className={`blogs-overlay ${overlay ? "show" : ""}`}>
        <div className="blogs-loader">Loading...</div>
      </div>

      <main className="blogs-section">
        <h1 className="blogs-bg-title">Blogs</h1>

        <p className="blogs-subtitle">
          The Power of Digital Transformation in Modern Enterprises
        </p>

        <div className="blogs-layout">
          {/* LEFT PANEL */}
          <aside className="blogs-left">
            {/* TOP POSTS */}
            <div className="left-box">
              <div className="left-box-header">Top Posts</div>

              <div className="top-posts-list">
                {topPosts.map((post, i) => (
                  <div className="top-post-item" key={i}>
                    <div className="post-number">{i + 1}</div>
                    <p className="post-title">{post}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="left-box">
              <div className="left-box-header">Social Media Links</div>

              <div className="social-list">
                {socialLinks.map((item, i) => (
                  <a
                    href={item.url}
                    key={i}
                    className="social-item"
                    target="_blank"
                  >
                    <img src={item.icon} alt={item.name} />
                    <span>{item.url}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE BLOGS */}
          <section className="blogs-right">
            {/* TOP ROW – 2 BIG BLOG CARDS */}
            <div className="blogs-row">
              {heroBlogs.map((blog, i) => (
                <div className="blog-card big" key={i}>
                  <img src={blog.img} alt="blog-img" />
                  <div className="blog-overlay">
                    <h3>{blog.title}</h3>
                    <span className="blog-date">- {blog.date}</span>
                  </div>
                  <p className="blog-desc">{blog.desc}</p>
                </div>
              ))}
            </div>

            {/* SECOND ROW – 2 NORMAL CARDS */}
            <div className="blogs-row">
              {secondRowBlogs.map((blog, i) => (
                <div className="blog-card small" key={i}>
                  <img src={blog.img} alt="blog-img" />
                  <div className="blog-overlay">
                    <h3>{blog.title}</h3>
                    <span className="blog-date">- {blog.date}</span>
                  </div>
                  <p className="blog-desc">{blog.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
