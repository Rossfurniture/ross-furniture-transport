import type { Metadata } from "next";
import Image from "next/image";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";
import RossServiceCarousel from "@/components/shared/sections/RossServiceCarousel";
import CommercialDeliveryProcess from "@/components/services/CommercialDeliveryProcess";
import ContactForm from "@/components/home/ContactForm";

import "./CommercialDeliverySolutionsPage.css";

export const metadata: Metadata = {
  title:
    "Commercial Delivery Solutions Australia | Ross Furniture Transport",
  description:
    "Flexible commercial delivery solutions for retailers, suppliers, manufacturers, warehouses and project-based businesses across Australia.",
};

const commercialImage = "/services/appliance-delivery.webp";

const commercialReasons = [
  {
    number: "01",
    title: "Flexible Delivery Scheduling",
    description:
      "Delivery schedules can be structured around warehouse operations, store requirements, customer availability and changing commercial priorities.",
  },
  {
    number: "02",
    title: "Tailored Transport Solutions",
    description:
      "Each delivery solution is planned around product type, access conditions, delivery volume, route requirements and business objectives.",
  },
  {
    number: "03",
    title: "Retail and Warehouse Support",
    description:
      "We support retailers, suppliers, manufacturers and warehouses with dependable collection, transport and final delivery coordination.",
  },
  {
    number: "04",
    title: "Project Delivery Coordination",
    description:
      "Commercial fit-outs, staged deliveries, supplier collections and multi-location projects can be coordinated around your project schedule.",
  },
  {
    number: "05",
    title: "Reliable Commercial Crews",
    description:
      "Professional crews handle furniture, appliances and commercial goods carefully while representing your business appropriately at every destination.",
  },
  {
    number: "06",
    title: "Scalable Business Support",
    description:
      "Transport support can adapt to individual jobs, recurring routes, seasonal demand, increased order volumes and business growth.",
  },
];

const commercialBenefits = [
  {
    number: "01",
    title: "One Reliable Delivery Partner",
    description:
      "Consolidate multiple commercial delivery requirements through one dependable transport partner who understands your operation.",
  },
  {
    number: "02",
    title: "Flexible Business Support",
    description:
      "Delivery capacity can adjust around changing schedules, order volumes, project requirements and customer demand.",
  },
  {
    number: "03",
    title: "Simplify Commercial Logistics",
    description:
      "Coordinated collection, transport and delivery help reduce internal pressure and make complex movements easier to manage.",
  },
  {
    number: "04",
    title: "Support Business Growth",
    description:
      "Reliable delivery infrastructure helps your business service more customers, locations and commercial opportunities.",
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
    alt: "Retail furniture delivery supporting Australian businesses",
  },
  {
    title: "Warehouse Distribution",
    description:
      "Organised warehouse collection, distribution and scheduled delivery support for suppliers and distribution centres.",
    image: "/services/warehouse-transport.webp",
    href: "/production/services/warehouse-distribution",
    alt: "Commercial furniture distribution inside a warehouse",
  },
  {
    title: "Interstate Furniture Transport",
    description:
      "Planned interstate furniture transport connecting warehouses, retailers, suppliers and commercial destinations across Australia.",
    image: "/services/commercial-warehouse-logistics.webp",
    href: "/production/services/interstate-furniture-transport",
    alt: "Interstate commercial furniture logistics across Australia",
  },
  {
    title: "White Glove Delivery",
    description:
      "Premium handling and final-stage delivery for designer furniture, valuable pieces and customer-facing commercial installations.",
    image: "/services/white-glove-delivery.webp",
    href: "/production/services/white-glove-delivery",
    alt: "Professional white glove furniture delivery and placement",
  },
];

export default function CommercialDeliverySolutionsPage() {
  return (
    <main className="ross-commercial-delivery-page">
      <section
        className="ross-commercial-hero"
        aria-labelledby="ross-commercial-hero-title"
      >
        <Image
          src={commercialImage}
          alt="Professional commercial appliance and furniture delivery service"
          fill
          priority
          className="ross-commercial-hero-image"
          sizes="100vw"
        />

        <div
          className="ross-commercial-hero-overlay"
          aria-hidden="true"
        />

        <div className="ross-commercial-hero-container">
          <div className="ross-commercial-hero-content">
            <p className="ross-commercial-hero-eyebrow">
              Commercial Delivery Solutions
            </p>

            <h1
              id="ross-commercial-hero-title"
              className="ross-commercial-hero-title"
            >
              <span>Commercial Delivery Solutions</span>

              <span>
                Across Australia<i>.</i>
              </span>
            </h1>

            <p className="ross-commercial-hero-description">
              Flexible commercial delivery solutions supporting retailers,
              suppliers, manufacturers, warehouses and project-based
              businesses with dependable transport tailored to their
              operational requirements.
            </p>

            <div className="ross-commercial-hero-actions">
              <RequestDeliveryQuote />
              <ExploreDeliverySolutions />
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-commercial-identity"
        aria-labelledby="ross-commercial-identity-title"
      >
        <div className="ross-commercial-identity-container">
          <div className="ross-commercial-identity-content">
            <p className="ross-commercial-section-label">
              Flexible Commercial Logistics
            </p>

            <h2
              id="ross-commercial-identity-title"
              className="ross-commercial-identity-title"
            >
              Commercial Delivery Solutions

              <span>
                Designed Around Your Business<i>.</i>
              </span>
            </h2>

            <div className="ross-commercial-identity-copy">
              <p>
                Every commercial operation has different delivery schedules,
                product requirements, access conditions and customer
                expectations. A standard transport model does not always fit.
              </p>

              <p>
                Ross Furniture Transport provides flexible commercial delivery
                solutions designed around the way your business operates,
                allowing transport support to adapt as requirements change.
              </p>
            </div>
          </div>

          <div className="ross-commercial-identity-visual">
            <Image
              src={commercialImage}
              alt="Commercial appliance and furniture delivery operation"
              fill
              className="ross-commercial-identity-image"
              sizes="(max-width: 900px) 100vw, 46vw"
            />

            <div
              className="ross-commercial-identity-image-overlay"
              aria-hidden="true"
            />

            <div className="ross-commercial-identity-caption">
              <span>Tailored Commercial Support</span>

              <strong>
                Flexible delivery capacity built around your operation.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-commercial-reasons"
        aria-labelledby="ross-commercial-reasons-title"
      >
        <div className="ross-commercial-reasons-container">
          <header className="ross-commercial-section-header">
            <div>
              <p className="ross-commercial-section-label">
                Built for Commercial Operations
              </p>

              <h2
                id="ross-commercial-reasons-title"
                className="ross-commercial-section-title"
              >
                Why Businesses Choose

                <span>
                  Ross for Commercial Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ross-commercial-section-intro">
              Our commercial delivery solutions are built around flexibility,
              operational coordination, product protection and the changing
              logistics requirements of Australian businesses.
            </p>
          </header>

          <div className="ross-commercial-reasons-grid">
            {commercialReasons.map((reason) => (
              <article
                key={reason.number}
                className="ross-commercial-reason"
              >
                <div className="ross-commercial-reason-top">
                  <span className="ross-commercial-reason-number">
                    {reason.number}
                  </span>

                  <span
                    className="ross-commercial-reason-line"
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
        className="ross-commercial-benefits"
        aria-labelledby="ross-commercial-benefits-title"
      >
        <div className="ross-commercial-benefits-container">
          <div className="ross-commercial-benefits-introduction">
            <p className="ross-commercial-section-label">
              Commercial Delivery Outcomes
            </p>

            <h2
              id="ross-commercial-benefits-title"
              className="ross-commercial-benefits-title"
            >
              Delivery Support That

              <span>
                Moves with Your Business<i>.</i>
              </span>
            </h2>

            <p className="ross-commercial-benefits-summary">
              The right commercial delivery partner helps simplify logistics,
              improve operational flexibility and support your business as
              customer demand and delivery requirements grow.
            </p>
          </div>

          <div className="ross-commercial-benefits-list">
            {commercialBenefits.map((benefit) => (
              <article
                key={benefit.number}
                className="ross-commercial-benefit"
              >
                <span className="ross-commercial-benefit-number">
                  {benefit.number}
                </span>

                <div className="ross-commercial-benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RossServiceCarousel
        sectionId="ross-commercial-related-services"
        intro="Explore our specialist furniture transport, retail delivery, warehouse distribution, interstate transport and premium white glove services."
        services={relatedServices}
      />

      <ContactForm />
    </main>
  );
}