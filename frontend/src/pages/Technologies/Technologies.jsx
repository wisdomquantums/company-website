import React, { useEffect, useState } from "react";
import "./Technologies.css";

export default function Technologies() {
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOverlay(false), 500);
    return () => clearTimeout(t);
  }, []);

  const sections = [
    {
      title: "Front - End & Mobile Technologies",
      items: [
        { name: "HTML", img: "/tech/html.png" },
        { name: "JavaScript", img: "/tech/js.png" },
        { name: "React Native", img: "/tech/react-native.png" },
        { name: "iOS", img: "/tech/ios.png" },
        { name: "React JS", img: "/tech/react.png" },
        { name: "Android", img: "/tech/android.png" },
        { name: "Angular", img: "/tech/angular.png" },
        { name: "Flutter", img: "/tech/flutter.png" },
      ],
    },
    {
      title: "Backend Technologies",
      items: [
        { name: "Node Js", img: "/tech/node.png" },
        { name: "PHP", img: "/tech/php.png" },
        { name: "Python", img: "/tech/python.png" },
      ],
    },
    {
      title: "CRM Technologies",
      items: [
        { name: "SuitCRM", img: "/tech/suitcrm.png" },
        { name: "Salesforce", img: "/tech/salesforce.png" },
        { name: "SugarCRM", img: "/tech/sugarcrm.png" },
      ],
    },
    {
      title: "Server Cloud",
      items: [
        { name: "Azure", img: "/tech/azure.png" },
        { name: "AWS", img: "/tech/aws.png" },
        { name: "Docker", img: "/tech/docker.png" },
        { name: "Kubernetes", img: "/tech/kubernetes.png" },
        { name: "GitLabCI", img: "/tech/gitlab.png" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", img: "/tech/mysql.png" },
        { name: "Ms Sql", img: "/tech/mssql.png" },
        { name: "Oracle", img: "/tech/oracle.png" },
        { name: "Mongo Db", img: "/tech/mongodb.png" },
      ],
    },
  ];

  return (
    <>
      {/* ===================== PAGE OVERLAY LOADING ===================== */}
      <div className={`tech-overlay ${overlay ? "show" : ""}`}>
        <div className="tech-loader">Loading...</div>
      </div>

      {/* ===================== PAGE WRAPPER ===================== */}
      <main className="tech-page">
        {/* TOP BACKGROUND TITLE */}
        <h1 className="tech-bg-title">Tech Solutions</h1>

        {/* SUB HEADING BLOCK */}
        <div className="tech-top">
          <div className="breadcrumb">🏠 &nbsp; / Technologies</div>
          <p className="tech-mid-title">
            We work on various technologies to leverage the right benefit suited
            for your specific needs.
          </p>

          <h2 className="tech-heading">Technologies</h2>
          <p className="tech-sub">
            We maintain technology neutrality, identifying and adopting
            technologies according to business needs
          </p>

          <button className="tech-btn">Contact Us</button>
        </div>

        {/* ===================== ALL SECTIONS ===================== */}
        {sections.map((sec, index) => (
          <div className="tech-section" key={index}>
            <div className="tech-section-title">{sec.title}</div>

            <div className="tech-grid">
              {sec.items.map((item, i) => (
                <div className="tech-item" key={i}>
                  <img src={item.img} alt={item.name} />
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
    </>
  );
}
