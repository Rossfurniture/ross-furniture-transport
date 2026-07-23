import Image from "next/image";

import "./RossIndustryDifference.css";

const capabilities = [
  {
    title: "Professional Delivery Crews",
    description:
      "Experienced commercial delivery professionals who understand careful furniture handling, customer expectations and the importance of representing your business professionally.",
  },
  {
    title: "Purpose-Built Equipment",
    description:
      "Commercial vehicles, protective materials and secure loading systems designed to move furniture safely through every stage of transport.",
  },
  {
    title: "Coordinated Delivery Planning",
    description:
      "Collections and deliveries are carefully organised around warehouse requirements, store operations, access conditions and project timelines.",
  },
  {
    title: "Safe Furniture Handling",
    description:
      "Protective wrapping, secure restraint methods and careful loading practices help minimise damage and preserve product quality.",
  },
  {
    title: "Flexible Commercial Capability",
    description:
      "Support for one-off deliveries, scheduled runs, warehouse distribution and larger commercial transport requirements as your operation changes.",
  },
  {
    title: "Communication & Accountability",
    description:
      "Clear coordination and complete ownership from collection through to successful delivery give your business confidence at every stage.",
  },
];

export default function RossIndustryDifference() {
  return (
    <section
      className="ross-industry-difference"
      aria-labelledby="ross-industry-difference-title"
    >
      <div className="ross-industry-difference-container">
        <header className="ross-industry-difference-header">
          <div className="ross-industry-difference-heading">
            <p className="ross-industry-difference-label">
              The Ross Difference
            </p>

            <h2 id="ross-industry-difference-title">
              How Ross Delivers.
              <span>
                Every Commercial Standard<i>.</i>
              </span>
            </h2>
          </div>

          <p className="ross-industry-difference-intro">
            Every commercial delivery is supported by experienced people,
            organised systems and careful execution. Ross turns the standards
            your business expects into dependable delivery outcomes.
          </p>
        </header>

        <div className="ross-industry-difference-layout">
          <div className="ross-industry-difference-visual">
            <Image
              src="/services/appliance-delivery.webp"
              alt="Professional commercial furniture delivery operations"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="ross-industry-difference-image"
            />

            <div className="ross-industry-difference-overlay" />

            <div className="ross-industry-difference-caption">
              <span>Commercial Furniture Logistics</span>
              <strong>Planned. Protected. Delivered.</strong>
            </div>
          </div>

          <div className="ross-industry-difference-list">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="ross-industry-difference-item"
              >
                <span className="ross-industry-difference-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="ross-industry-difference-content">
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}