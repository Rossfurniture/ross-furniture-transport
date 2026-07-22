import "@/styles/CommercialDeliveryProcess.css";

type DeliveryProcessStep = {
  number: string;
  title: string;
  description: string;
};

const deliveryProcessSteps: DeliveryProcessStep[] = [
  {
    number: "01",
    title: "Plan the Delivery",
    description:
      "We review the collection details, furniture requirements, delivery schedule, access conditions and handling needs before transport begins.",
  },
  {
    number: "02",
    title: "Coordinate Collection",
    description:
      "Collection is coordinated directly with retailers, manufacturers, suppliers, warehouses or distribution centres.",
  },
  {
    number: "03",
    title: "Transport with Care",
    description:
      "Furniture is secured, protected and transported using experienced crews, professional equipment and suitable commercial vehicles.",
  },
  {
    number: "04",
    title: "Complete the Delivery",
    description:
      "We complete the delivery as scheduled, position items where required and confirm the job has been professionally finalised.",
  },
];

export default function CommercialDeliveryProcess() {
  return (
    <section
      className="ross-commercial-process"
      aria-labelledby="ross-commercial-process-title"
    >
      <div className="ross-commercial-process-container">
        <header className="ross-commercial-process-header">
          <div className="ross-commercial-process-heading-column">
            <p className="ross-commercial-process-label">How We Work</p>

            <h2
              id="ross-commercial-process-title"
              className="ross-commercial-process-title"
            >
              <span>From Collection</span>

              <span>
                to Final Delivery<i>.</i>
              </span>
            </h2>
          </div>

          <div className="ross-commercial-process-intro-column">
            <p className="ross-commercial-process-intro">
              Every commercial delivery follows a coordinated process designed
              around furniture retailers, manufacturers, warehouses, suppliers
              and customer delivery requirements.
            </p>
          </div>
        </header>

        <div className="ross-commercial-process-grid">
          {deliveryProcessSteps.map((step) => (
            <article
              className="ross-commercial-process-item"
              key={step.number}
            >
              <div className="ross-commercial-process-item-top">
                <span className="ross-commercial-process-number">
                  {step.number}
                </span>

                <span
                  className="ross-commercial-process-line"
                  aria-hidden="true"
                />
              </div>

              <h3 className="ross-commercial-process-item-title">
                {step.title}
              </h3>

              <p className="ross-commercial-process-item-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}