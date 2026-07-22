import type { Metadata } from "next";
import Image from "next/image";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";
import RossServiceCarousel from "@/components/shared/sections/RossServiceCarousel";
import CommercialDeliveryProcess from "@/components/services/CommercialDeliveryProcess";
import ContactForm from "@/components/home/ContactForm";

import "./FurnitureTransportPage.css";

export const metadata: Metadata = {
  title:
    "Commercial Furniture Transport Australia | Ross Furniture Transport",
  description:
    "Professional commercial furniture transport for retailers, manufacturers, suppliers, warehouses and businesses across Australia.",
};

const commercialReasons = [
  {
    number: "01",
    title: "Commercial Furniture Expertise",
    description:
      "Furniture requires careful handling, appropriate protection and experienced transport teams. Our service is designed specifically around commercial furniture movements.",
  },
  {
    number: "02",
    title: "Professional Brand Representation",
    description:
      "Every delivery represents the business behind the product. Our crews maintain a professional standard when collecting from suppliers and delivering to customers.",
  },
  {
    number: "03",
    title: "Careful Product Handling",
    description:
      "Furniture is protected, secured and handled according to its size, finish, value and delivery requirements throughout the transport process.",
  },
  {
    number: "04",
    title: "Reliable Delivery Scheduling",
    description:
      "Collections and deliveries are coordinated around warehouse operations, retail schedules, customer availability and commercial project timelines.",
  },
  {
    number: "05",
    title: "Flexible Transport Support",
    description:
      "We support individual deliveries, scheduled routes, multi-stop runs, dedicated trucks and ongoing commercial furniture transport requirements.",
  },
  {
    number: "06",
    title: "Clear Communication",
    description:
      "Businesses receive straightforward communication throughout the delivery process, helping teams remain informed from collection through to completion.",
  },
];

const commercialBenefits = [
  {
    number: "01",
    title: "Protect Your Reputation",
    description:
      "Professional delivery standards help ensure the final customer experience reflects the quality of your business and products.",
  },
  {
    number: "02",
    title: "Reduce Handling Risk",
    description:
      "Experienced furniture handling and appropriate protection help reduce avoidable damage during collection, transport and delivery.",
  },
  {
    number: "03",
    title: "Keep Operations Moving",
    description:
      "Reliable scheduling supports retail operations, warehouse workflows, installation programs and customer delivery commitments.",
  },
  {
    number: "04",
    title: "Scale with Demand",
    description:
      "Flexible delivery support allows businesses to respond to changing order volumes, project requirements and geographic demand.",
  },
];

const relatedServices = [
  {
    title: "Retail Store Deliveries",
    description:
      "Reliable store and customer delivery services designed around furniture retailers, bedding stores and appliance businesses.",
    image: "/services/furniture-retail-delivery.webp",
    href: "/production/services/retail-store-deliveries",
    alt: "Furniture delivery service supporting an Australian retail store",
  },
  {
    title: "Warehouse Distribution",
    description:
      "Organised warehouse collection, distribution and scheduled delivery support for furniture suppliers and distribution centres.",
    image: "/services/warehouse-transport.webp",
    href: "/production/services/warehouse-distribution",
    alt: "Commercial furniture distribution being organised inside a warehouse",
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
    alt: "Professional white glove furniture delivery and in-room placement",
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

export default function FurnitureTransportPage() {
  return (
    <main className="ross-furniture-transport-page">
      <section
        className="ross-furniture-hero"
        aria-labelledby="ross-furniture-hero-title"
      >
        <Image
          src="/services/furniture-retail-delivery.webp"
          alt="Commercial furniture transport service for Australian businesses"
          fill
          priority
          className="ross-furniture-hero-image"
          sizes="100vw"
        />

        <div className="ross-furniture-hero-overlay" aria-hidden="true" />

        <div className="ross-furniture-hero-container">
          <div className="ross-furniture-hero-content">
            <p className="ross-furniture-hero-eyebrow">
              Commercial Furniture Transport
            </p>

            <h1
              id="ross-furniture-hero-title"
              className="ross-furniture-hero-title"
            >
              <span>Furniture Transport Built</span>

              <span>
                Around Business Operations<i>.</i>
              </span>
            </h1>

            <p className="ross-furniture-hero-description">
              Professional furniture transport for retailers, manufacturers,
              suppliers, warehouses and commercial businesses requiring
              dependable collection, handling and delivery across Australia.
            </p>

            <div className="ross-furniture-hero-actions">
              <RequestDeliveryQuote />
              <ExploreDeliverySolutions />
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-furniture-identity"
        aria-labelledby="ross-furniture-identity-title"
      >
        <div className="ross-furniture-identity-container">
          <div className="ross-furniture-identity-content">
            <p className="ross-furniture-section-label">
              Furniture Transport Specialists
            </p>

            <h2
              id="ross-furniture-identity-title"
              className="ross-furniture-identity-title"
            >
              Commercial Furniture Transport

              <span>
                Without Compromise<i>.</i>
              </span>
            </h2>

            <div className="ross-furniture-identity-copy">
              <p>
                Commercial furniture transport requires more than moving
                products between two locations. It requires careful planning,
                professional handling and dependable execution at every stage.
              </p>

              <p>
                Ross Furniture Transport supports businesses that need their
                furniture collected, protected, transported and delivered to a
                consistently professional standard.
              </p>
            </div>
          </div>

          <div className="ross-furniture-identity-visual">
            <Image
              src="/services/furniture-retail-delivery.webp"
              alt="Professional commercial furniture delivery operation"
              fill
              className="ross-furniture-identity-image"
              sizes="(max-width: 900px) 100vw, 46vw"
            />

            <div
              className="ross-furniture-identity-image-overlay"
              aria-hidden="true"
            />

            <div className="ross-furniture-identity-caption">
              <span>Commercial Handling</span>

              <strong>From collection through to final delivery.</strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-furniture-reasons"
        aria-labelledby="ross-furniture-reasons-title"
      >
        <div className="ross-furniture-reasons-container">
          <header className="ross-furniture-section-header">
            <div>
              <p className="ross-furniture-section-label">
                Built for Commercial Requirements
              </p>

              <h2
                id="ross-furniture-reasons-title"
                className="ross-furniture-section-title"
              >
                Why Businesses Choose

                <span>
                  Ross Furniture Transport<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ross-furniture-section-intro">
              Our furniture transport service is structured around the
              operational, handling and customer-facing requirements of
              commercial businesses.
            </p>
          </header>

          <div className="ross-furniture-reasons-grid">
            {commercialReasons.map((reason) => (
              <article
                key={reason.number}
                className="ross-furniture-reason"
              >
                <div className="ross-furniture-reason-top">
                  <span className="ross-furniture-reason-number">
                    {reason.number}
                  </span>

                  <span
                    className="ross-furniture-reason-line"
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
        className="ross-furniture-benefits"
        aria-labelledby="ross-furniture-benefits-title"
      >
        <div className="ross-furniture-benefits-container">
          <div className="ross-furniture-benefits-introduction">
            <p className="ross-furniture-section-label">
              Commercial Outcomes
            </p>

            <h2
              id="ross-furniture-benefits-title"
              className="ross-furniture-benefits-title"
            >
              A Better Delivery Experience

              <span>
                for Your Business<i>.</i>
              </span>
            </h2>

            <p className="ross-furniture-benefits-summary">
              The right transport partner does more than complete deliveries.
              It supports your operations, protects your products and helps
              maintain the reputation your business has worked to build.
            </p>
          </div>

          <div className="ross-furniture-benefits-list">
            {commercialBenefits.map((benefit) => (
              <article
                key={benefit.number}
                className="ross-furniture-benefit"
              >
                <span className="ross-furniture-benefit-number">
                  {benefit.number}
                </span>

                <div className="ross-furniture-benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RossServiceCarousel
        sectionId="ross-furniture-related-services"
        intro="Explore additional commercial delivery services designed to support retail operations, warehouse distribution, interstate transport and premium customer deliveries."
        services={relatedServices}
      />

      <ContactForm />
    </main>
  );
}