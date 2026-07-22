import type { Metadata } from "next";
import Image from "next/image";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";
import RossServiceCarousel from "@/components/shared/sections/RossServiceCarousel";
import CommercialDeliveryProcess from "@/components/services/CommercialDeliveryProcess";
import ContactForm from "@/components/home/ContactForm";

import "./WhiteGloveDeliveryPage.css";

export const metadata: Metadata = {
  title: "White Glove Furniture Delivery Australia | Ross Furniture Transport",
  description:
    "Premium white glove furniture delivery, careful placement and professional final-stage transport for retailers, designers, suppliers and commercial clients across Australia.",
};

const whiteGloveImage = "/services/white-glove-delivery.webp";

const whiteGloveReasons = [
  {
    number: "01",
    title: "Premium Furniture Handling",
    description:
      "Furniture is handled with close attention to its finish, materials, size, value and final presentation requirements throughout the delivery.",
  },
  {
    number: "02",
    title: "Careful Final Placement",
    description:
      "Items are delivered beyond the loading zone and positioned carefully within the approved room, display area or commercial environment.",
  },
  {
    number: "03",
    title: "Customer-Facing Service",
    description:
      "Our crews maintain a professional and respectful presence when working inside customer homes, showrooms, offices and premium project spaces.",
  },
  {
    number: "04",
    title: "Protective Delivery Practices",
    description:
      "Suitable protection, controlled movement and careful access planning help reduce risk to furniture, flooring, walls and surrounding interiors.",
  },
  {
    number: "05",
    title: "Designer and Retail Support",
    description:
      "We support furniture retailers, interior designers, suppliers and commercial teams with polished final-stage delivery services.",
  },
  {
    number: "06",
    title: "Clear Delivery Coordination",
    description:
      "Collection, access, placement and customer timing are coordinated clearly before delivery to help avoid delays and unnecessary disruption.",
  },
];

const whiteGloveBenefits = [
  {
    number: "01",
    title: "Protect Premium Products",
    description:
      "Careful handling and controlled placement help protect high-value furniture, delicate finishes and statement pieces.",
  },
  {
    number: "02",
    title: "Improve Customer Experience",
    description:
      "Professional final-stage delivery creates a polished experience that reflects the quality of your product and brand.",
  },
  {
    number: "03",
    title: "Reduce Installation Pressure",
    description:
      "Our crews manage the physical delivery and placement process, reducing pressure on retailers, designers and project teams.",
  },
  {
    number: "04",
    title: "Strengthen Brand Reputation",
    description:
      "A premium delivery experience helps reinforce customer trust and supports the reputation of your business.",
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
    alt: "Retail furniture delivery service supporting Australian businesses",
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
    title: "Commercial Delivery Solutions",
    description:
      "Flexible commercial delivery support tailored to recurring routes, project schedules and complex furniture logistics.",
    image: "/services/commercial-warehouse-logistics.webp",
    href: "/production/services/commercial-delivery-solutions",
    alt: "Commercial warehouse logistics supporting Australian businesses",
  },
];

export default function WhiteGloveDeliveryPage() {
  return (
    <main className="ross-white-glove-page">
      <section
        className="ross-white-glove-hero"
        aria-labelledby="ross-white-glove-hero-title"
      >
        <Image
          src={whiteGloveImage}
          alt="Premium white glove furniture delivery and careful placement"
          fill
          priority
          className="ross-white-glove-hero-image"
          sizes="100vw"
        />

        <div
          className="ross-white-glove-hero-overlay"
          aria-hidden="true"
        />

        <div className="ross-white-glove-hero-container">
          <div className="ross-white-glove-hero-content">
            <p className="ross-white-glove-hero-eyebrow">
              White Glove Delivery
            </p>

            <h1
              id="ross-white-glove-hero-title"
              className="ross-white-glove-hero-title"
            >
              <span>White Glove Furniture</span>

              <span>
                Delivery Without Compromise<i>.</i>
              </span>
            </h1>

            <p className="ross-white-glove-hero-description">
              Premium furniture handling, careful final placement and
              professional customer-facing delivery for retailers, designers,
              suppliers and commercial clients across Australia.
            </p>

            <div className="ross-white-glove-hero-actions">
              <RequestDeliveryQuote />
              <ExploreDeliverySolutions />
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-white-glove-identity"
        aria-labelledby="ross-white-glove-identity-title"
      >
        <div className="ross-white-glove-identity-container">
          <div className="ross-white-glove-identity-content">
            <p className="ross-white-glove-section-label">
              Premium Delivery Specialists
            </p>

            <h2
              id="ross-white-glove-identity-title"
              className="ross-white-glove-identity-title"
            >
              White Glove Delivery

              <span>
                That Reflects Your Brand<i>.</i>
              </span>
            </h2>

            <div className="ross-white-glove-identity-copy">
              <p>
                Premium furniture deserves more than basic transport. Every
                stage of delivery should protect the product, the surrounding
                environment and the experience of the final customer.
              </p>

              <p>
                Ross Furniture Transport provides careful white glove delivery
                support designed around professional handling, controlled
                access and precise final placement.
              </p>
            </div>
          </div>

          <div className="ross-white-glove-identity-visual">
            <Image
              src={whiteGloveImage}
              alt="Professional white glove furniture placement service"
              fill
              className="ross-white-glove-identity-image"
              sizes="(max-width: 900px) 100vw, 46vw"
            />

            <div
              className="ross-white-glove-identity-image-overlay"
              aria-hidden="true"
            />

            <div className="ross-white-glove-identity-caption">
              <span>Premium Final-Stage Delivery</span>

              <strong>
                Careful handling from collection through to final placement.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-white-glove-reasons"
        aria-labelledby="ross-white-glove-reasons-title"
      >
        <div className="ross-white-glove-reasons-container">
          <header className="ross-white-glove-section-header">
            <div>
              <p className="ross-white-glove-section-label">
                Built for Premium Deliveries
              </p>

              <h2
                id="ross-white-glove-reasons-title"
                className="ross-white-glove-section-title"
              >
                Why Businesses Choose

                <span>
                  Ross for White Glove Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ross-white-glove-section-intro">
              Our white glove delivery service is structured around careful
              product handling, protected access, professional presentation and
              precise final placement.
            </p>
          </header>

          <div className="ross-white-glove-reasons-grid">
            {whiteGloveReasons.map((reason) => (
              <article
                key={reason.number}
                className="ross-white-glove-reason"
              >
                <div className="ross-white-glove-reason-top">
                  <span className="ross-white-glove-reason-number">
                    {reason.number}
                  </span>

                  <span
                    className="ross-white-glove-reason-line"
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
        className="ross-white-glove-benefits"
        aria-labelledby="ross-white-glove-benefits-title"
      >
        <div className="ross-white-glove-benefits-container">
          <div className="ross-white-glove-benefits-introduction">
            <p className="ross-white-glove-section-label">
              Premium Delivery Outcomes
            </p>

            <h2
              id="ross-white-glove-benefits-title"
              className="ross-white-glove-benefits-title"
            >
              A Better Final

              <span>
                Delivery Experience<i>.</i>
              </span>
            </h2>

            <p className="ross-white-glove-benefits-summary">
              The right white glove delivery partner helps protect premium
              furniture, improve customer satisfaction and ensure every final
              placement reflects the standard of your business.
            </p>
          </div>

          <div className="ross-white-glove-benefits-list">
            {whiteGloveBenefits.map((benefit) => (
              <article
                key={benefit.number}
                className="ross-white-glove-benefit"
              >
                <span className="ross-white-glove-benefit-number">
                  {benefit.number}
                </span>

                <div className="ross-white-glove-benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RossServiceCarousel
        sectionId="ross-white-glove-related-services"
        intro="Explore additional commercial delivery services supporting furniture transport, retail operations, warehouse distribution and interstate logistics."
        services={relatedServices}
      />

      <ContactForm />
    </main>
  );
}