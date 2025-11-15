import React, { useEffect, useState } from "react";
import "./Blogs.css";
import insta from "../../assets/images/blogs/insta.webp";
import fb from "../../assets/images/blogs/fb.webp";
import x from "../../assets/images/blogs/x.png";
import linkedin from "../../assets/images/blogs/linkedin.png";

import blog1 from "../../assets/images/blogs/blog1.webp";
import blog2 from "../../assets/images/blogs/blog2.webp";
import blog3 from "../../assets/images/blogs/blog3.jpg";
import blog4 from "../../assets/images/blogs/blog4.png";
import blog5 from "../../assets/images/blogs/blog5.jpg";
import blog6 from "../../assets/images/blogs/blog6.jpg";
import blog7 from "../../assets/images/blogs/blog7.png";
import blog8 from "../../assets/images/blogs/blog8.webp";

export default function Blogs() {
  // ============================
  // UPDATED CONTENT
  // ============================

  const topPosts = [
    "How AI is Reshaping Digital Marketing Strategies in 2025",
    "Understanding DevOps: A Complete Guide for Modern Businesses",
    "Top Web Development Mistakes That Destroy Your SEO Rankings",
    "Major UX/UI Design Errors That Reduce Conversions & Trust",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/wisdomquantum/",
      icon: insta,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/wisdomquantum/",
      icon: linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/wisdomquantum",
      icon: x,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/wisdomquantum",
      icon: fb,
    },
  ];

  const heroBlogs = [
    {
      title: "How AI Elevates Digital Marketing & Customer Experience",
      img: blog1,
      date: "12 Jan 2025",
      desc: "AI is transforming content creation, targeting, and customer engagement. Discover how brands use AI to gain a competitive edge...",
    },
    {
      title: "DevOps Essentials: Improving Delivery Speed & Reliability",
      img: blog2,
      date: "18 Jan 2025",
      desc: "Businesses adopting DevOps have seen dramatic improvements in development cycles, automation, and team collaboration...",
    },
    {
      title: "The Future of Software Engineering with AI Automation",
      img: blog3,
      date: "22 Jan 2025",
      desc: "AI-driven development tools are reshaping the software lifecycle. From automated code generation to intelligent debugging, discover how AI is redefining productivity and reducing human error in engineering teams...",
    },
    {
      title: "Cloud Transformation Strategies for Modern Businesses",
      img: blog4,
      date: "27 Jan 2025",
      desc: "Scalable infrastructure, reduced operational costs, and global accessibility make cloud adoption essential. Learn how companies migrate smoothly using structured cloud strategies and security-focused deployments...",
    },
  ];

  const secondRowBlogs = [
    {
      title: "Why Your Website Fails to Rank — Hidden SEO & UX Issues",
      img: blog5,
      date: "08 Feb 2025",
      desc: "Ranking depends on speed, structure, keywords, and mobile experience. Here’s what most websites are missing...",
    },
    {
      title: "The Most Common UX/UI Flaws That Hurt Conversions",
      img: blog6,
      date: "10 Feb 2025",
      desc: "Poor spacing, confusing navigation, and weak CTAs can drastically reduce conversions. Learn how to fix them...",
    },
    {
      title:
        "How Slow Websites Kill Sales — Fix Performance Before It Hurts Revenue",
      img: blog7,
      date: "14 Feb 2025",
      desc: "Website speed directly affects sales, bounce rate, and customer trust. Learn how optimizing load time, caching, and media can instantly boost conversions...",
    },
    {
      title:
        "Design Psychology: How Colors, Layout & Micro-Interactions Influence Users",
      img: blog8,
      date: "16 Feb 2025",
      desc: "Great UI is more than visuals. It’s psychology. Discover how color theory, contrast, spacing, and animation guide user decisions and improve engagement...",
    },
  ];

  return (
    <>
      <main className="blogs-section">
        <h1 className="blogs-bg-title">Blogs</h1>

        <p className="blogs-subtitle">
          Insights & Strategies Powering the Future of Digital Transformation
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
              <div className="left-box-header">Connect With Us</div>

              <div className="social-list">
                {socialLinks.map((item, i) => (
                  <a
                    href={item.url}
                    key={i}
                    className="social-item"
                    target="_blank"
                  >
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
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
