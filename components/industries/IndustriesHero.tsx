import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";

import "./IndustriesHero.css";

const industries = [
  {
    number: "01",
    title: "Furniture Retailers",
    description:
      "Store replenishment, customer deliveries and professional brand representation.",
    href: "/services/retail-store-deliveries",
  },
  {
    number: "02",
    title: "Furniture Manufacturers",
    description:
      "Factory collections, retail distribution and coordinated interstate transport.",
    href: "/services/furniture-transport",
  },
  {
    number: "03",
    title: "Bedding & Mattress Stores",
    description:
      "Scheduled delivery runs, careful product handling and customer fulfilment.",
    href: "/services/retail-store-deliveries",
  },
  {
    number: "04",
    title: "Appliance Retailers",
    description:
      "Warehouse collections, appliance transport and customer-facing delivery support.",
    href: "/services/commercial-delivery-solutions",
  },
  {
    number: "05",
    title: "Interior Designers",
    description:
      "Supplier collections, premium handling and precise final placement.",
    href: "/services/white-glove-delivery",
  },
  {
    number: "06",
    title: "Warehouses & Distributors",
    description:
      "Scheduled dispatch, multi-stop routes and flexible distribution capacity.",
    href: "/services/warehouse-distribution",
  },
  {
    number: "07",
    title: "Hotels & Developers",
    description:
      "Staged project deliveries, commercial fit-outs and coordinated site access.",
    href: "/services/commercial-delivery-solutions",
  },
  {
    number: "08",
    title: "Government & Education",
    description:
      "Reliable institutional delivery, controlled access and scheduled transport.",
    href: "/services/commercial-delivery-solutions",
  },
];

export default function IndustriesHero() {
  return (
    <section
      className="ross-industries-hero"
      aria-labelledby="ross-industries-hero-title"
    >
      <div
        className="ross-industries-hero-background"
        aria-hidden="true"
      >
        <span className="ross-industries-hero-orbit ross-industries-hero-orbit-one" />
        <span className="ross-industries-hero-orbit ross-industries-hero-orbit-two" />
        <span className="ross-industries-hero-orbit ross-industries-hero-orbit-three" />

        <span className="ross-industries-hero-grid-line ross-industries-grid-line-one" />
        <span className="ross-industries-hero-grid-line ross-industries-grid-line-two" />
        <span className="ross-industries-hero-grid-line ross-industries-grid-line-three" />
      </div>

      <div className="ross-industries-hero-container">
        <div className="ross-industries-hero-content">
          <p className="ross-industries-hero-eyebrow">
            Industries We Support
          </p>

          <h1
            id="ross-industries-hero-title"
            className="ross-industries-hero-title"
          >
            Commercial Delivery
            <span>Built Around</span>
            <span>
              Your Industry<i>.</i>
            </span>
          </h1>

          <p className="ross-industries-hero-description">
            Every industry moves differently. Ross Furniture Transport
            provides commercial delivery support shaped around your products,
            customers, operating schedules and business requirements.
          </p>

          <div className="ross-industries-hero-actions">
            <RequestDeliveryQuote />
            <ExploreDeliverySolutions />
          </div>

          <div className="ross-industries-hero-proof">
            <div>
              <strong>08</strong>
              <span>Key Industries</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>AU</strong>
              <span>Commercial Network</span>
            </div>
          </div>
        </div>

        <div
          className="ross-industries-hero-directory"
          aria-label="Industries supported by Ross Furniture Transport"
        >
          <div className="ross-industries-hero-directory-header">
            <span>Industry Directory</span>
            <span>Select Your Sector</span>
          </div>

          <div className="ross-industries-hero-directory-list">
            {industries.map((industry) => (
              <Link
                key={industry.number}
                href={industry.href}
                className="ross-industries-hero-industry"
              >
                <span className="ross-industries-hero-industry-number">
                  {industry.number}
                </span>

                <div className="ross-industries-hero-industry-content">
                  <strong>{industry.title}</strong>

                  <p>{industry.description}</p>
                </div>

                <div
                  className="ross-industries-hero-industry-marker"
                  aria-hidden="true"
                >
                  <span />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="ross-industries-hero-footer">
        <div className="ross-industries-hero-footer-inner">
          <span>Retail</span>
          <span>Manufacturing</span>
          <span>Distribution</span>
          <span>Commercial Projects</span>
          <span>Institutional Delivery</span>
        </div>
      </div>
    </section>
  );
}