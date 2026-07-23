import Image from "next/image";

import "./IndustryNavigator.css";

const essentials = [
  {
    icon: "/icons/brand-representation.svg",
    title: "Brand Representation",
    description:
      "Your delivery team becomes an extension of your business. Professional presentation, punctual arrivals and respectful customer interactions help strengthen your brand reputation long after the sale.",
  },
  {
    icon: "/icons/product-protection.svg",
    title: "Product Protection",
    description:
      "Furniture, mattresses and appliances require careful loading, secure transport and experienced handling to minimise damage and maintain product quality.",
  },
  {
    icon: "/icons/reliable-scheduling.svg",
    title: "Reliable Scheduling",
    description:
      "Commercial operations rely on accurate delivery windows, dependable collections and transport that keeps stores, warehouses and projects running on schedule.",
  },
  {
    icon: "/icons/clear-communication.svg",
    title: "Clear Communication",
    description:
      "Successful deliveries depend on consistent communication between suppliers, warehouses, retailers, project managers and customers from dispatch through completion.",
  },
  {
    icon: "/icons/site-coordination.svg",
    title: "Site Coordination",
    description:
      "Every delivery location is different. Loading docks, restricted access, construction sites and retail environments require planning before the truck arrives.",
  },
  {
    icon: "/icons/flexible-logistics.svg",
    title: "Flexible Logistics",
    description:
      "Delivery volumes change. A commercial transport partner should be able to support one-off deliveries, scheduled runs and larger distribution requirements as your business grows.",
  },
  {
    icon: "/icons/experienced-delivery-crews.svg",
    title: "Experienced Delivery Crews",
    description:
      "Commercial deliveries demand more than lifting furniture. Experienced crews understand handling techniques, customer expectations and how to operate professionally within business environments.",
  },
  {
    icon: "/icons/delivery-accountability.svg",
    title: "Delivery Accountability",
    description:
      "A reliable logistics partner takes ownership of every delivery—from planning and coordination through to successful completion—giving your business confidence that every job is handled properly.",
  },
];

export default function IndustryNavigator() {
  return (
    <section
      className="ross-industry-navigator"
      aria-labelledby="ross-industry-navigator-title"
    >
      <div className="ross-industry-navigator-container">
        <header className="ross-industry-navigator-header">
          <div className="ross-industry-navigator-heading">
            <p className="ross-industry-navigator-label">
              Commercial Delivery Essentials
            </p>

            <h2 id="ross-industry-navigator-title">
              What Your Business Needs.
              <span>
                From Every Delivery<i>.</i>
              </span>
            </h2>
          </div>

          <p className="ross-industry-navigator-intro">
            Across every industry, successful furniture delivery depends on
            more than simply moving products from A to B. Businesses need
            reliable logistics, professional representation and dependable
            execution at every stage of the delivery journey.
          </p>
        </header>

        <div className="ross-industry-navigator-grid">
          {essentials.map((item) => (
            <article
              key={item.title}
              className="ross-industry-navigator-item"
            >
              <div className="ross-industry-navigator-icon" aria-hidden="true">
                <Image
                  src={item.icon}
                  alt=""
                  width={46}
                  height={46}
                />
              </div>

              <div className="ross-industry-navigator-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}