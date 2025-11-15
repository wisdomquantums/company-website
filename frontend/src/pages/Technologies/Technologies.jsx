import React from "react";
import "./Technologies.css";

// Import Lucide Icons
import {
  Globe,
  Code2,
  Smartphone,
  Apple,
  MonitorSmartphone,
  Cpu,
  Layers,
  Box,
  Database,
  Server,
  Cloud,
  Container,
  Boxes,
  GitBranch,
} from "lucide-react";

export default function Technologies() {
  const sections = [
    {
      title: "Front - End & Mobile Technologies",
      items: [
        { name: "HTML", icon: <Globe /> },
        { name: "JavaScript", icon: <Code2 /> },
        { name: "React Native", icon: <Smartphone /> },
        { name: "iOS", icon: <Apple /> },
        { name: "React JS", icon: <MonitorSmartphone /> },
        { name: "Android", icon: <Smartphone /> },
        { name: "Angular", icon: <Layers /> },
        { name: "Flutter", icon: <Cpu /> },
      ],
    },
    {
      title: "Backend Technologies",
      items: [
        { name: "Node Js", icon: <Code2 /> },
        { name: "PHP", icon: <Box /> },
        { name: "Python", icon: <Cpu /> },
      ],
    },
    {
      title: "CRM Technologies",
      items: [
        { name: "SuitCRM", icon: <Layers /> },
        { name: "Salesforce", icon: <Cloud /> },
        { name: "SugarCRM", icon: <Boxes /> },
      ],
    },
    {
      title: "Server Cloud",
      items: [
        { name: "Azure", icon: <Cloud /> },
        { name: "AWS", icon: <Server /> },
        { name: "Docker", icon: <Container /> },
        { name: "Kubernetes", icon: <Boxes /> },
        { name: "GitLabCI", icon: <GitBranch /> },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: <Database /> },
        { name: "Ms Sql", icon: <Database /> },
        { name: "Oracle", icon: <Database /> },
        { name: "Mongo Db", icon: <Database /> },
      ],
    },
  ];

  return (
    <main className="tech-page">
      <h1 className="tech-bg-title">Tech Solutions</h1>
      <p className="text-center tech-mid-title">
        Transforming your vision into reality through intelligent,
        high-performance technologies built for the digital world of tomorrow.
      </p>

      <div className="tech-top">
        <div className="text-left-align breadcrumb">
          🏠 &nbsp; / Technologies
        </div>

        <h2 className="tech-heading">Technologies We Work With</h2>

        <p className="tech-sub">
          {" "}
          We choose technologies based on your needs — scalable, secure &
          future-ready solutions.
        </p>

        <button className="tech-btn">Contact Us</button>
      </div>

      {/* Sections */}
      {sections.map((sec, index) => (
        <div className="tech-section" key={index}>
          <div className="tech-section-title">{sec.title}</div>

          <div className="tech-grid">
            {sec.items.map((item, i) => (
              <div className="tech-item" key={i}>
                <div className="tech-icon">{item.icon}</div>
                <p>{item.name}</p>

                {i !== sec.items.length - 1 && (
                  <div className="tech-divider"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
