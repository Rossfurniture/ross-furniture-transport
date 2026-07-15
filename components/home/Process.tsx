import Image from "next/image";

import "./Process.css";

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

type WorkflowBenefit = {
  title: string;
  description: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Warehouse",
    description:
      "Inventory is prepared, checked and ready for collection from your warehouse, supplier or showroom.",
    icon: "/icons/warehouse.svg",
  },
  {
    number: "02",
    title: "Ross Dispatch",
    description:
      "Collections, delivery windows and transport requirements are coordinated around your operation.",
    icon: "/icons/dispatch.svg",
  },
  {
    number: "03",
    title: "Customer Delivery",
    description:
      "Furniture is handled carefully and delivered with the professionalism your customers expect.",
    icon: "/icons/customer-delivery.svg",
  },
  {
    number: "04",
    title: "Delivery Complete",
    description:
      "Your team receives confirmation, your customer is looked after and the delivery is complete.",
    icon: "/icons/delivery-complete.svg",
  },
];

const workflowBenefits: WorkflowBenefit[] = [
  {
    title: "Scheduled Daily Runs",
    description:
      "Reliable collections and deliveries arranged around your operating schedule.",
  },
  {
    title: "Flexible Delivery Windows",
    description:
      "Morning, afternoon and tailored delivery options to suit your workflow.",
  },
  {
    title: "Warehouse Coordination",
    description:
      "Clear communication with your warehouse, showroom and operations teams.",
  },
  {
    title: "Customer-Ready Crews",
    description:
      "Professional delivery teams that represent your business with care.",
  },
];

export default function Process() {
  return (
    <section
      className="ross-workflow"
      aria-labelledby="ross-workflow-heading"
    >
      <div className="ross-workflow-container">
        <header className="ross-workflow-header">
          <div className="ross-workflow-heading-column">
            <p className="ross-workflow-eyebrow">
              Built for Commercial Operations
            </p>

            <h2 id="ross-workflow-heading" className="ross-workflow-title">
              We Fit Into
              <span>Your Existing</span>
              <span>
                Workflow<i>.</i>
              </span>
            </h2>
          </div>

          <div className="ross-workflow-intro-column">
            <p className="ross-workflow-intro">
              Whether you manage one showroom or multiple warehouse locations,
              Ross Furniture Transport integrates into your delivery process
              without creating more work for your team.
            </p>

            <p className="ross-workflow-intro">
              From scheduled retail deliveries to warehouse transfers, we
              become part of your operation—not another supplier to manage.
            </p>
          </div>
        </header>

        <div
          className="ross-workflow-journey"
          aria-label="Commercial furniture delivery workflow"
        >
          <div className="ross-workflow-track" aria-hidden="true" />

          {workflowSteps.map((step) => (
            <article className="ross-workflow-step" key={step.number}>
              <span className="ross-workflow-step-number">
                {step.number}
              </span>

              <div className="ross-workflow-marker">
                <Image
                  className="ross-workflow-icon"
                  src={step.icon}
                  alt=""
                  width={52}
                  height={52}
                  aria-hidden="true"
                />
              </div>

              <h3 className="ross-workflow-step-title">
                {step.title}
              </h3>

              <p className="ross-workflow-step-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="ross-workflow-benefits">
          {workflowBenefits.map((benefit) => (
            <article
              className="ross-workflow-benefit"
              key={benefit.title}
            >
              <span
                className="ross-workflow-benefit-line"
                aria-hidden="true"
              />

              <h3 className="ross-workflow-benefit-title">
                {benefit.title}
              </h3>

              <p className="ross-workflow-benefit-description">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}