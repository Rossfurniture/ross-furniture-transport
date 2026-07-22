import type { Metadata } from "next";
import Image from "next/image";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";
import RossServiceCarousel from "@/components/shared/sections/RossServiceCarousel";
import CommercialDeliveryProcess from "@/components/services/CommercialDeliveryProcess";
import ContactForm from "@/components/home/ContactForm";

import "./RetailStoreDeliveriesPage.css";

export const metadata: Metadata = {
  title:
    "Retail Store Deliveries Australia | Ross Furniture Transport",
  description:
    "Professional retail store delivery services for furniture retailers, bedding stores, appliance businesses and commercial suppliers across Australia.",
};

const retailReasons = [
  {
    number: "01",
    title: "Professional Customer Deliveries",
    description:
      "Every delivery becomes part of your customer’s buying experience. Our crews maintain a professional standard when delivering furniture, bedding and appliances.",
  },
  {
    number: "02",
    title: "Scheduled Store Delivery Runs",
    description:
      "We coordinate recurring store deliveries, customer orders, supplier collections and scheduled delivery routes around your retail operations.",
  },
  {
    number: "03",
    title: "Strong Brand Representation",
    description:
      "Our delivery teams represent your business professionally at every collection and customer interaction, helping protect the reputation of your store.",
  },
  {
    number: "04",
    title: "Flexible Delivery Scheduling",
    description:
      "Delivery schedules can be planned around store opening hours, warehouse availability, customer timeframes and seasonal trading demand.",
  },
  {
    number: "05",
    title: "Careful Product Handling",
    description:
      "Furniture, mattresses, appliances and retail products are protected and handled according to their size, finish, value and delivery requirements.",
  },
  {
    number: "06",
    title: "Consistent Communication",
    description:
      "Clear updates help your retail team remain informed from collection through to final customer delivery and completion.",
  },
];

const retailBenefits = [
  {
    number: "01",
    title: "Improve Customer Satisfaction",
    description:
      "Professional and reliable deliveries help create a better final-stage experience for your customers.",
  },
  {
    number: "02",
    title: "Protect Your Store Reputation",
    description:
      "Careful handling and professional delivery standards help ensure your service reflects the quality of your retail brand.",
  },
  {
    number: "03",
    title: "Maintain Reliable Scheduling",
    description:
      "Organised delivery planning supports customer commitments, store operations and warehouse workflows.",
  },
  {
    number: "04",
    title: "Scale During Busy Periods",
    description:
      "Flexible transport support helps retailers respond to seasonal demand, promotions and increasing delivery volumes.",
  },
];

const relatedServices = [
  {
    title: "Furniture Transport",
    description:
      "Professional commercial furniture transport for retailers, manufacturers, warehouses, suppliers and businesses across Australia.",
    image: "/services/furniture-retail-delivery.webp",
    href: "/production/services/furniture-transport",
    alt: "Commercial furniture transport supporting Australian businesses",
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

export default function RetailStoreDeliveriesPage() {
  return (
    <main className="ross-retail-deliveries-page">
      <section
        className="ross-retail-hero"
        aria-labelledby="ross-retail-hero-title"
      >
        <Image
          src="/services/furniture-retail-delivery.webp"
          alt="Retail store furniture delivery service for Australian businesses"
          fill
          priority
          className="ross-retail-hero-image"
          sizes="100vw"
        />

        <div className="ross-retail-hero-overlay" aria-hidden="true" />

        <div className="ross-retail-hero-container">
          <div className="ross-retail-hero-content">
            <p className="ross-retail-hero-eyebrow">
              Retail Store Deliveries
            </p>

            <h1
              id="ross-retail-hero-title"
              className="ross-retail-hero-title"
            >
              <span>Reliable Retail Store</span>

              <span>
                Deliveries Across Australia<i>.</i>
              </span>
            </h1>

            <p className="ross-retail-hero-description">
              Professional delivery services supporting furniture retailers,
              bedding stores and appliance businesses with dependable customer
              deliveries, scheduled store runs and commercial transport
              solutions.
            </p>

            <div className="ross-retail-hero-actions">
              <RequestDeliveryQuote />
              <ExploreDeliverySolutions />
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-retail-identity"
        aria-labelledby="ross-retail-identity-title"
      >
        <div className="ross-retail-identity-container">
          <div className="ross-retail-identity-content">
            <p className="ross-retail-section-label">
              Retail Delivery Specialists
            </p>

            <h2
              id="ross-retail-identity-title"
              className="ross-retail-identity-title"
            >
              Retail Store Deliveries

              <span>
                That Protect Your Brand<i>.</i>
              </span>
            </h2>

            <div className="ross-retail-identity-copy">
              <p>
                Every delivery becomes part of your customer’s buying
                experience. Reliable transport, careful handling and
                professional presentation all influence how your business is
                remembered.
              </p>

              <p>
                Ross Furniture Transport supports retailers with scheduled
                store deliveries, direct-to-customer transport and flexible
                delivery solutions designed around retail operations.
              </p>
            </div>
          </div>

          <div className="ross-retail-identity-visual">
            <Image
              src="/services/furniture-retail-delivery.webp"
              alt="Professional retail furniture delivery operation"
              fill
              className="ross-retail-identity-image"
              sizes="(max-width: 900px) 100vw, 46vw"
            />

            <div
              className="ross-retail-identity-image-overlay"
              aria-hidden="true"
            />

            <div className="ross-retail-identity-caption">
              <span>Retail Delivery Support</span>

              <strong>
                From your store or warehouse to your customer’s door.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ross-retail-reasons"
        aria-labelledby="ross-retail-reasons-title"
      >
        <div className="ross-retail-reasons-container">
          <header className="ross-retail-section-header">
            <div>
              <p className="ross-retail-section-label">
                Built for Retail Operations
              </p>

              <h2
                id="ross-retail-reasons-title"
                className="ross-retail-section-title"
              >
                Why Retailers Choose

                <span>
                  Ross Furniture Transport<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ross-retail-section-intro">
              Our retail delivery service is structured around customer
              expectations, store schedules, product handling requirements and
              the operational demands of growing retail businesses.
            </p>
          </header>

          <div className="ross-retail-reasons-grid">
            {retailReasons.map((reason) => (
              <article
                key={reason.number}
                className="ross-retail-reason"
              >
                <div className="ross-retail-reason-top">
                  <span className="ross-retail-reason-number">
                    {reason.number}
                  </span>

                  <span
                    className="ross-retail-reason-line"
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
        className="ross-retail-benefits"
        aria-labelledby="ross-retail-benefits-title"
      >
        <div className="ross-retail-benefits-container">
          <div className="ross-retail-benefits-introduction">
            <p className="ross-retail-section-label">
              Retail Delivery Outcomes
            </p>

            <h2
              id="ross-retail-benefits-title"
              className="ross-retail-benefits-title"
            >
              Retail Delivery Built

              <span>
                Around Customers<i>.</i>
              </span>
            </h2>

            <p className="ross-retail-benefits-summary">
              The right delivery partner helps protect your products,
              strengthen customer satisfaction and keep your retail operation
              moving during both everyday trading and peak demand.
            </p>
          </div>

          <div className="ross-retail-benefits-list">
            {retailBenefits.map((benefit) => (
              <article
                key={benefit.number}
                className="ross-retail-benefit"
              >
                <span className="ross-retail-benefit-number">
                  {benefit.number}
                </span>

                <div className="ross-retail-benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RossServiceCarousel
        sectionId="ross-retail-related-services"
        intro="Explore additional commercial delivery services supporting furniture transport, warehouse distribution, interstate logistics and premium customer deliveries."
        services={relatedServices}
      />

      <ContactForm />
    </main>
  );
}