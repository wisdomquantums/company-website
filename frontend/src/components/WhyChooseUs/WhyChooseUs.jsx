import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Tailored Solutions",
      text: "Customized strategies to meet your unique business needs.",
    },

    {
      title: "Innovative Technology",
      text: "Leveraging the latest tools for efficient and scalable results.",
    },

    {
      title: "Expert Team",
      text: "Skilled professionals committed to your success.",
    },

    {
      title: "Customer-Centric Approach",
      text: "We prioritize your goals and satisfaction.",
    },
  ];

  return (
    <section className="wc-section">
      {" "}
      <div className="wc-container">
        {" "}
        <h3 className="wc-top-sub animate-fade">Why Choose Us</h3>{" "}
        <h2 className="wc-title animate-fade"> Fast & Easy Solutions </h2>{" "}
        <div className="wc-grid animate-up">
          {" "}
          {items.map((item, index) => (
            <div key={index} className="wc-item">
              {" "}
              {/* Divider except for last item */}
              {index < items.length - 1 && <span className="wc-divider" />}
              <h4 className="wc-item-title"> {item.title}</h4>{" "}
              <p className="wc-item-text"> {item.text}</p>{" "}
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
