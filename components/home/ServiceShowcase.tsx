import Link from "next/link";

import "./ServiceShowcase.css";

type DeliveryService = {
  title: string;
  description: string;
  href: string;
  imageClass: string;
  icon: React.ReactNode;
  featured?: boolean;
};

type FleetFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const deliveryServices: DeliveryService[] = [
  {
    title: "Furniture Retail Delivery",
    description:
      "From warehouse and showroom collections to professional customer delivery.",
    href: "/services/furniture-retail-delivery",
    imageClass: "ross-service-showcase-card--furniture",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 31V21c0-5 4-9 9-9h6c3 0 5 2 5 5v14" />
        <path d="M51 31V21c0-5-4-9-9-9h-6c-3 0-5 2-5 5v14" />
        <path d="M14 29h36c5 0 9 4 9 9v7H5v-7c0-5 4-9 9-9Z" />
        <path d="M9 45v7M55 45v7M17 45v-8M47 45v-8" />
      </svg>
    ),
  },
  {
    title: "Bedding & Mattress Delivery",
    description:
      "Mattresses, ensembles and bulky bedding products handled with care.",
    href: "/services/bedding-delivery",
    imageClass: "ross-service-showcase-card--bedding",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 31h44v20H10z" />
        <path d="M14 31v-9c0-5 4-9 9-9h18c5 0 9 4 9 9v9" />
        <path d="M19 31v-6h11v6M34 31v-6h11v6" />
        <path d="M10 39h44M15 51v5M49 51v5" />
      </svg>
    ),
  },
  {
    title: "Appliance Delivery",
    description:
      "Safe commercial transport for bulky appliances and retail stock.",
    href: "/services/appliance-delivery",
    imageClass: "ross-service-showcase-card--appliances",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="18" y="6" width="28" height="52" rx="3" />
        <path d="M18 30h28" />
        <path d="M24 15v6M24 37v6" />
        <path d="M24 58v2M40 58v2" />
      </svg>
    ),
  },
  {
    title: "Commercial Fit-Outs",
    description:
      "Scheduled furniture deliveries for builders, offices and design teams.",
    href: "/services/commercial-fit-outs",
    imageClass: "ross-service-showcase-card--fitouts",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 51 51 13" />
        <path d="m16 12 10 10M38 38l14 14" />
        <path d="M10 46 18 54 54 18 46 10Z" />
        <path d="M21 41 29 49M34 28l8 8" />
      </svg>
    ),
  },
  {
    title: "Warehouse Transfers",
    description:
      "Moving stock and inventory between commercial locations efficiently.",
    href: "/services/warehouse-transfers",
    imageClass: "ross-service-showcase-card--warehouse",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M7 25 32 10l25 15v29H7Z" />
        <path d="M14 28h36v26H14z" />
        <path d="M20 34h8v8h-8zM36 34h8v8h-8z" />
        <path d="M20 46h8v8h-8zM36 46h8v8h-8z" />
      </svg>
    ),
  },
  {
    title: "White Glove Delivery",
    description:
      "Premium handling and placement for high-value furniture and delicate items.",
    href: "/services/white-glove-delivery",
    imageClass: "ross-service-showcase-card--white-glove",
    featured: true,
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="m32 9 6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2Z" />
        <path d="m24 32 5 5 11-12" />
      </svg>
    ),
  },
];

const fleetFeatures: FleetFeature[] = [
  {
    title: "Two-Man Crews",
    description: "Experienced, trained and professionally presented teams.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="21" cy="20" r="8" />
        <circle cx="43" cy="20" r="8" />
        <path d="M7 51v-6c0-8 6-14 14-14s14 6 14 14v6" />
        <path d="M29 34a14 14 0 0 1 28 11v6" />
      </svg>
    ),
  },
  {
    title: "Tail-Lift Trucks",
    description: "Safer loading and unloading for heavy and bulky products.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M6 18h34v29H6z" />
        <path d="M40 29h10l8 9v9H40Z" />
        <circle cx="17" cy="49" r="6" />
        <circle cx="49" cy="49" r="6" />
        <path d="M6 47h5M23 47h20" />
      </svg>
    ),
  },
  {
    title: "Protection First",
    description: "Furniture blankets, wrapping, straps and protective equipment.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="m9 22 23-12 23 12-23 12Z" />
        <path d="m9 32 23 12 23-12" />
        <path d="m9 42 23 12 23-12" />
      </svg>
    ),
  },
  {
    title: "Trolleys & Tools",
    description: "The right equipment to handle every commercial delivery.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 8h8l7 35h20" />
        <path d="M31 20h18v23H35" />
        <circle cx="37" cy="51" r="5" />
        <circle cx="53" cy="51" r="5" />
      </svg>
    ),
  },
  {
    title: "GPS Tracked",
    description: "Clear fleet visibility and dependable delivery coordination.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 57S14 41 14 25a18 18 0 1 1 36 0c0 16-18 32-18 32Z" />
        <circle cx="32" cy="25" r="6" />
      </svg>
    ),
  },
  {
    title: "Fully Insured",
    description: "Comprehensive protection for your products and our teams.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 6 52 14v15c0 14-8 23-20 29C20 52 12 43 12 29V14Z" />
        <path d="m22 31 7 7 14-16" />
      </svg>
    ),
  },
];

export default function ServiceShowcase() {
  return (
    <section
      className="ross-service-showcase"
      aria-labelledby="ross-service-showcase-heading"
    >
      <div className="ross-service-showcase-container">
        <header className="ross-service-showcase-header">
          <div className="ross-service-showcase-heading-column">
            <p className="ross-service-showcase-eyebrow">What We Deliver</p>

            <h2
              id="ross-service-showcase-heading"
              className="ross-service-showcase-title"
            >
              Commercial Delivery Solutions
              <span>
                Built Around Your Business<i>.</i>
              </span>
            </h2>
          </div>

          <p className="ross-service-showcase-intro">
            From individual pieces to full truckloads, we transport furniture,
            bedding, appliances and commercial stock safely, professionally and
            on schedule.
          </p>
        </header>

        <div className="ross-service-showcase-grid">
          {deliveryServices.map((service) => (
            <article
              className={[
                "ross-service-showcase-card",
                service.imageClass,
                service.featured
                  ? "ross-service-showcase-card--featured"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={service.title}
            >
              <div className="ross-service-showcase-overlay" />

              <div className="ross-service-showcase-card-content">
                <div
                  className="ross-service-showcase-card-icon"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="ross-service-showcase-card-title">
                  {service.title}
                </h3>

                <p className="ross-service-showcase-card-description">
                  {service.description}
                </p>

                <Link
                  className="ross-service-showcase-card-link"
                  href={service.href}
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="ross-fleet-showcase">
          <div className="ross-fleet-showcase-content">
            <p className="ross-fleet-showcase-eyebrow">Meet the Fleet</p>

            <h2 className="ross-fleet-showcase-title">
              Built for Safe,
              <span>
                Reliable Deliveries<i>.</i>
              </span>
            </h2>

            <p className="ross-fleet-showcase-description">
              Our commercial fleet and professional delivery teams are equipped
              to handle your products with the care, consistency and efficiency
              your business expects.
            </p>

            <Link className="ross-fleet-showcase-button" href="/delivery-network">
              View Our Fleet
            </Link>
          </div>

<div className="ross-fleet-showcase-image">
  <img
    src="/images/ross-commercial-truck.webp"
    alt="Ross Furniture Transport commercial delivery truck"
  />
</div>
        </div>

        <div className="ross-fleet-features">
          {fleetFeatures.map((feature) => (
            <article className="ross-fleet-feature" key={feature.title}>
              <div className="ross-fleet-feature-icon" aria-hidden="true">
                {feature.icon}
              </div>

              <span className="ross-fleet-feature-line" aria-hidden="true" />

              <h3 className="ross-fleet-feature-title">{feature.title}</h3>

              <p className="ross-fleet-feature-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}