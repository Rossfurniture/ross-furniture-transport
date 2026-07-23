import type { Metadata } from "next";
import Image from "next/image";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";
import RossServiceCarousel from "@/components/shared/sections/RossServiceCarousel";
import CommercialDeliveryProcess from "@/components/services/CommercialDeliveryProcess";
import ContactForm from "@/components/home/ContactForm";

import "./InterstateFurnitureTransportPage.css";

export const metadata: Metadata = {
  title:
    "Interstate Furniture Transport Australia | Ross Furniture Transport",
  description:
    "Professional interstate furniture transport connecting retailers, manufacturers, warehouses, suppliers and commercial destinations across Australia.",
};

const interstateImage =
  "/services/commercial-warehouse-logistics.webp";

const interstateReasons = [
  {
    number: "01",
    title: "Planned Interstate Transport",
    description:
      "Every interstate movement is planned around collection access, delivery requirements, route timing and the operational needs of each business involved.",
  },
  {
    number: "02",
    title: "Commercial Furniture Expertise",
    description:
      "Furniture is protected, secured and handled according to its size, finish, value and transport requirements throughout the interstate journey.",
  },
  {
    number: "03",
    title: "Warehouse-to-Warehouse Support",
    description:
      "We connect warehouses, distribution centres, retailers, suppliers and commercial facilities through coordinated interstate transport.",
  },
  {
    number: "04",
    title: "Multi-Destination Coordination",
    description:
      "Interstate movements can be organised around multiple delivery locations, store networks, customer orders and project destinations.",
  },
  {
    number: "05",
    title: "Flexible Transport Solutions",
    description:
      "Support can be tailored for individual consignments, dedicated truck movements, scheduled routes and ongoing interstate requirements.",
  },
  {
    number: "06",
    title: "Clear Delivery Communication",
    description:
      "Businesses receive straightforward updates throughout the transport process, helping teams coordinate collection and final delivery.",
  },
];

const interstateBenefits = [
  {
    number: "01",
    title: "Expand Your Delivery Network",
    description:
      "Reliable interstate transport allows your business to service customers, stores and commercial partners across a wider geographic area.",
  },
  {
    number: "02",
    title: "Reduce Logistics Complexity",
    description:
      "Coordinated collection, transport and delivery support helps simplify furniture movements between states and commercial locations.",
  },
  {
    number: "03",
    title: "Protect Products in Transit",
    description:
      "Experienced furniture handling and secure transport practices help reduce avoidable risk during longer-distance movements.",
  },
  {
    number: "04",
    title: "Support Business Growth",
    description:
      "Flexible interstate capacity helps businesses respond to new markets, increasing order volumes and expanding commercial demand.",
  },
];

const relatedServices = [
  {
    title: "Furniture Transport",
    description:
      "Professional commercial furniture transport for retailers, manufacturers, suppliers, warehouses and businesses across Australia.",
    image: "/services/furniture-retail-delivery.webp",
    href: "/services/furniture-transport",
    alt: "Commercial furniture transport supporting Australian businesses",
  },
  {
    title: "Retail Store Deliveries",
    description:
      "Reliable store and customer delivery services designed around furniture retailers, bedding stores and appliance businesses.",
    image: "/services/bedding-mattress-delivery.webp",
    href: "/services/retail-store-deliveries",
    alt: "Furniture delivery supporting an Australian retail store",
  },
  {
    title: "Warehouse Distribution",
    description:
      "Organised warehouse collection, distribution and scheduled delivery support for suppliers and distribution centres.",
    image: "/services/warehouse-transport.webp",
    href: "/services/warehouse-distribution",
    alt: "Commercial furniture distribution inside a warehouse",
  },
  {
    title: "White Glove Delivery",
    description:
      "Premium handling and final-stage delivery for designer furniture, valuable pieces and customer-facing commercial installations.",
    image: "/services/white-glove-delivery.webp",
    href: "/services/white-glove-delivery",
    alt: "Professional white glove furniture delivery and placement",
  },
  {
    title: "Commercial Delivery Solutions",
    description:
      "Flexible commercial delivery support tailored to recurring routes, project schedules and complex furniture logistics.",
    image: "/services/commercial-warehouse-logistics.webp",
    href: "/services/commercial-delivery-solutions",
    alt: "Commercial furniture logistics supporting Australian businesses",
  },
];

export default function InterstateFurnitureTransportPage() {
  return (
    <main className="ross-interstate-transport-page">
      <section
        className="ross-interstate-hero"
        aria-labelledby="ross-interstate-hero-title"
      >
        <Image
          src={interstateImage}
          alt="Interstate commercial furniture transport across Australia"
          fill
          priority
          className="ross-interstate-hero-image"
          sizes="100vw"
        />

        <div
          className="ross-interstate-hero-overlay"
          aria-hidden="true"
        />

        <div className="ross-interstate-hero-container">
          <div className="ross-interstate-hero-content">
            <p className="ross-interstate-hero-eyebrow">
              Interstate Furniture Transport
            </p>

            <h1
              id="ross-interstate-hero-title"
              className="ross-interstate-hero-title"
            >
              <span>Interstate Furniture Transport</span>

              <span>
                Built Around Business<i>.</i>
              </span>
            </h1>

            <p className="ross-interstate-hero-description">
              Professional interstate furniture transport connecting
              retailers, manufacturers, suppliers, warehouses and commercial
              destinations across Australia.
            </p>

            <div className="ross-interstate-hero-actions">
              <RequestDeliveryQuote />
              <ExploreDeliverySolutions />
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-interstate-identity"
        aria-labelledby="ross-interstate-identity-title"
      >
        <div className="ross-interstate-identity-container">
          <div className="ross-interstate-identity-content">
            <p className="ross-interstate-section-label">
              Interstate Transport Specialists
            </p>

            <h2
              id="ross-interstate-identity-title"
              className="ross-interstate-identity-title"
            >
              Interstate Furniture Transport

              <span>
                Without the Complexity<i>.</i>
              </span>
            </h2>

            <div className="ross-interstate-identity-copy">
              <p>
                Interstate furniture transport requires careful planning,
                dependable scheduling and professional coordination between
                collection points, transport teams and delivery destinations.
              </p>

              <p>
                Ross Furniture Transport supports commercial businesses with
                organised interstate movements designed around product
                protection, operational timing and final delivery requirements.
              </p>
            </div>
          </div>

          <div className="ross-interstate-identity-visual">
            <Image
              src={interstateImage}
              alt="Commercial interstate furniture logistics operation"
              fill
              className="ross-interstate-identity-image"
              sizes="(max-width: 900px) 100vw, 46vw"
            />

            <div
              className="ross-interstate-identity-image-overlay"
              aria-hidden="true"
            />

            <div className="ross-interstate-identity-caption">
              <span>Interstate Delivery Support</span>

              <strong>
                Connecting warehouses, retailers and commercial destinations.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-interstate-reasons"
        aria-labelledby="ross-interstate-reasons-title"
      >
        <div className="ross-interstate-reasons-container">
          <header className="ross-interstate-section-header">
            <div>
              <p className="ross-interstate-section-label">
                Built for Interstate Requirements
              </p>

              <h2
                id="ross-interstate-reasons-title"
                className="ross-interstate-section-title"
              >
                Why Businesses Choose

                <span>
                  Ross for Interstate Transport<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ross-interstate-section-intro">
              Our interstate furniture transport service is structured around
              commercial schedules, longer-distance product protection,
              multi-location coordination and dependable final delivery.
            </p>
          </header>

          <div className="ross-interstate-reasons-grid">
            {interstateReasons.map((reason) => (
              <article
                key={reason.number}
                className="ross-interstate-reason"
              >
                <div className="ross-interstate-reason-top">
                  <span className="ross-interstate-reason-number">
                    {reason.number}
                  </span>

                  <span
                    className="ross-interstate-reason-line"
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
        className="ross-interstate-benefits"
        aria-labelledby="ross-interstate-benefits-title"
      >
        <div className="ross-interstate-benefits-container">
          <div className="ross-interstate-benefits-introduction">
            <p className="ross-interstate-section-label">
              Interstate Transport Outcomes
            </p>

            <h2
              id="ross-interstate-benefits-title"
              className="ross-interstate-benefits-title"
            >
              Reliable Transport Across

              <span>
                Greater Distances<i>.</i>
              </span>
            </h2>

            <p className="ross-interstate-benefits-summary">
              The right interstate transport partner helps simplify logistics,
              protect products and connect your business with customers,
              retailers and commercial partners across Australia.
            </p>
          </div>

          <div className="ross-interstate-benefits-list">
            {interstateBenefits.map((benefit) => (
              <article
                key={benefit.number}
                className="ross-interstate-benefit"
              >
                <span className="ross-interstate-benefit-number">
                  {benefit.number}
                </span>

                <div className="ross-interstate-benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RossServiceCarousel
        sectionId="ross-interstate-related-services"
        intro="Explore additional commercial delivery services supporting local furniture transport, retail operations, warehouse distribution and premium customer deliveries."
        services={relatedServices}
      />

      <ContactForm />
    </main>
  );
}