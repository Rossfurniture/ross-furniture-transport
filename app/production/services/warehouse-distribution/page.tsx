import type { Metadata } from "next";
import Image from "next/image";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";
import RossServiceCarousel from "@/components/shared/sections/RossServiceCarousel";
import CommercialDeliveryProcess from "@/components/services/CommercialDeliveryProcess";
import ContactForm from "@/components/home/ContactForm";

import "./WarehouseDistributionPage.css";

export const metadata: Metadata = {
  title:
    "Warehouse Distribution Australia | Ross Furniture Transport",
  description:
    "Professional warehouse distribution, scheduled dispatch and commercial furniture delivery support for retailers, suppliers and distribution centres across Australia.",
};

const warehouseReasons = [
  {
    number: "01",
    title: "Warehouse Collection Coordination",
    description:
      "Collections are planned around warehouse access, loading requirements, dispatch schedules and operational timeframes to keep movements organised.",
  },
  {
    number: "02",
    title: "Scheduled Distribution Runs",
    description:
      "We support recurring distribution routes, store replenishment, customer deliveries and planned transport schedules for commercial operations.",
  },
  {
    number: "03",
    title: "Multi-Stop Delivery Support",
    description:
      "Furniture and commercial products can be distributed across multiple stores, customer locations, project sites and business destinations.",
  },
  {
    number: "04",
    title: "Careful Product Handling",
    description:
      "Furniture, bedding, appliances and commercial goods are protected, secured and handled carefully throughout collection, transport and delivery.",
  },
  {
    number: "05",
    title: "Flexible Transport Capacity",
    description:
      "Support can be adapted for individual dispatches, dedicated truck runs, changing order volumes and ongoing warehouse distribution requirements.",
  },
  {
    number: "06",
    title: "Clear Operational Communication",
    description:
      "Straightforward communication helps warehouse teams, retailers and delivery locations remain informed throughout each transport movement.",
  },
];

const warehouseBenefits = [
  {
    number: "01",
    title: "Improve Dispatch Efficiency",
    description:
      "Organised collection and transport planning help warehouse teams maintain smoother dispatch workflows and delivery schedules.",
  },
  {
    number: "02",
    title: "Reduce Internal Transport Pressure",
    description:
      "Reliable external transport support allows your team to focus on inventory, fulfilment and warehouse operations.",
  },
  {
    number: "03",
    title: "Support Multiple Destinations",
    description:
      "Flexible distribution services make it easier to coordinate deliveries across stores, customers, suppliers and commercial sites.",
  },
  {
    number: "04",
    title: "Scale with Order Volume",
    description:
      "Transport support can adapt to changing stock movements, seasonal demand, project requirements and business growth.",
  },
];

const relatedServices = [
  {
    title: "Furniture Transport",
    description:
      "Professional commercial furniture transport for retailers, manufacturers, suppliers, warehouses and businesses across Australia.",
    image: "/services/furniture-retail-delivery.webp",
    href: "/production/services/furniture-transport",
    alt: "Commercial furniture transport supporting Australian businesses",
  },
  {
    title: "Retail Store Deliveries",
    description:
      "Reliable store and customer delivery services designed around furniture retailers, bedding stores and appliance businesses.",
    image: "/services/bedding-mattress-delivery.webp",
    href: "/production/services/retail-store-deliveries",
    alt: "Furniture delivery service supporting an Australian retail store",
  },
  {
    title: "Interstate Furniture Transport",
    description:
      "Planned interstate furniture transport connecting warehouses, retailers, suppliers and commercial destinations across Australia.",
    image: "/services/commercial-warehouse-logistics.webp",
    href: "/production/services/interstate-furniture-transport",
    alt: "Commercial furniture logistics and interstate transport operations",
  },
  {
    title: "White Glove Delivery",
    description:
      "Premium handling and final-stage delivery for designer furniture, valuable pieces and customer-facing commercial installations.",
    image: "/services/white-glove-delivery.webp",
    href: "/production/services/white-glove-delivery",
    alt: "Professional white glove furniture delivery and placement",
  },
  {
    title: "Commercial Delivery Solutions",
    description:
      "Flexible commercial delivery support tailored to recurring routes, project schedules and complex furniture logistics.",
    image: "/services/commercial-warehouse-logistics.webp",
    href: "/production/services/commercial-delivery-solutions",
    alt: "Commercial warehouse logistics supporting Australian businesses",
  },
];

export default function WarehouseDistributionPage() {
  return (
    <main className="ross-warehouse-distribution-page">
      <section
        className="ross-warehouse-hero"
        aria-labelledby="ross-warehouse-hero-title"
      >
        <Image
          src="/services/warehouse-transport.webp"
          alt="Commercial warehouse distribution and furniture transport service"
          fill
          priority
          className="ross-warehouse-hero-image"
          sizes="100vw"
        />

        <div className="ross-warehouse-hero-overlay" aria-hidden="true" />

        <div className="ross-warehouse-hero-container">
          <div className="ross-warehouse-hero-content">
            <p className="ross-warehouse-hero-eyebrow">
              Warehouse Distribution
            </p>

            <h1
              id="ross-warehouse-hero-title"
              className="ross-warehouse-hero-title"
            >
              <span>Warehouse Distribution</span>

              <span>
                Built for Business Flow<i>.</i>
              </span>
            </h1>

            <p className="ross-warehouse-hero-description">
              Professional warehouse collection, distribution and scheduled
              delivery support for retailers, suppliers, manufacturers and
              commercial distribution centres across Australia.
            </p>

            <div className="ross-warehouse-hero-actions">
              <RequestDeliveryQuote />
              <ExploreDeliverySolutions />
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-warehouse-identity"
        aria-labelledby="ross-warehouse-identity-title"
      >
        <div className="ross-warehouse-identity-container">
          <div className="ross-warehouse-identity-content">
            <p className="ross-warehouse-section-label">
              Distribution Specialists
            </p>

            <h2
              id="ross-warehouse-identity-title"
              className="ross-warehouse-identity-title"
            >
              Warehouse Distribution

              <span>
                Without Disruption<i>.</i>
              </span>
            </h2>

            <div className="ross-warehouse-identity-copy">
              <p>
                Warehouse distribution requires precise timing, organised
                dispatch and dependable transport coordination between
                facilities, retailers, suppliers and delivery destinations.
              </p>

              <p>
                Ross Furniture Transport provides flexible distribution support
                designed around warehouse workflows, recurring delivery routes
                and changing commercial demand.
              </p>
            </div>
          </div>

          <div className="ross-warehouse-identity-visual">
            <Image
              src="/services/warehouse-transport.webp"
              alt="Professional warehouse furniture distribution operation"
              fill
              className="ross-warehouse-identity-image"
              sizes="(max-width: 900px) 100vw, 46vw"
            />

            <div
              className="ross-warehouse-identity-image-overlay"
              aria-hidden="true"
            />

            <div className="ross-warehouse-identity-caption">
              <span>Warehouse Distribution Support</span>

              <strong>
                From organised dispatch through to final delivery.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-warehouse-reasons"
        aria-labelledby="ross-warehouse-reasons-title"
      >
        <div className="ross-warehouse-reasons-container">
          <header className="ross-warehouse-section-header">
            <div>
              <p className="ross-warehouse-section-label">
                Built for Warehouse Operations
              </p>

              <h2
                id="ross-warehouse-reasons-title"
                className="ross-warehouse-section-title"
              >
                Why Distribution Teams Choose

                <span>
                  Ross Furniture Transport<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ross-warehouse-section-intro">
              Our warehouse distribution service is structured around dispatch
              schedules, stock movements, multi-location delivery requirements
              and the operational needs of commercial businesses.
            </p>
          </header>

          <div className="ross-warehouse-reasons-grid">
            {warehouseReasons.map((reason) => (
              <article
                key={reason.number}
                className="ross-warehouse-reason"
              >
                <div className="ross-warehouse-reason-top">
                  <span className="ross-warehouse-reason-number">
                    {reason.number}
                  </span>

                  <span
                    className="ross-warehouse-reason-line"
                    aria-hidden="true"
                  />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CommercialDeliveryProcess />

      <section
        className="ross-warehouse-benefits"
        aria-labelledby="ross-warehouse-benefits-title"
      >
        <div className="ross-warehouse-benefits-container">
          <div className="ross-warehouse-benefits-introduction">
            <p className="ross-warehouse-section-label">
              Distribution Outcomes
            </p>

            <h2
              id="ross-warehouse-benefits-title"
              className="ross-warehouse-benefits-title"
            >
              Distribution That Keeps

              <span>
                Operations Moving<i>.</i>
              </span>
            </h2>

            <p className="ross-warehouse-benefits-summary">
              The right distribution partner helps improve dispatch efficiency,
              reduce pressure on internal teams and maintain reliable movement
              between warehouses, stores and customers.
            </p>
          </div>

          <div className="ross-warehouse-benefits-list">
            {warehouseBenefits.map((benefit) => (
              <article
                key={benefit.number}
                className="ross-warehouse-benefit"
              >
                <span className="ross-warehouse-benefit-number">
                  {benefit.number}
                </span>

                <div className="ross-warehouse-benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RossServiceCarousel
        sectionId="ross-warehouse-related-services"
        intro="Explore additional commercial delivery services supporting retail operations, furniture transport, interstate distribution and premium customer deliveries."
        services={relatedServices}
      />

      <ContactForm />
    </main>
  );
}