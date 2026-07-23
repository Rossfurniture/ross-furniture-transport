import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ContactForm from "@/components/home/ContactForm";

import "./BeddingMattressStoresPage.css";

export const metadata: Metadata = {
  title:
    "Bedding & Mattress Delivery Services | Ross Furniture Transport",
  description:
    "Professional delivery support for bedding and mattress stores, including warehouse collections, store replenishment, customer delivery and bulky product handling.",
};

const beddingNeeds = [
  {
    number: "01",
    title: "Careful Product Handling",
    description:
      "Mattresses, bed bases and bedroom furniture require controlled handling to prevent marks, tears and avoidable damage.",
  },
  {
    number: "02",
    title: "Reliable Delivery Windows",
    description:
      "Customer deliveries must arrive within agreed timeframes without disrupting store or warehouse operations.",
  },
  {
    number: "03",
    title: "Professional Customer Service",
    description:
      "Delivery crews must represent your store professionally inside the customer’s home.",
  },
  {
    number: "04",
    title: "Bulky Item Capability",
    description:
      "Large mattresses, adjustable bases and bed frames require suitable vehicles, equipment and experienced crews.",
  },
  {
    number: "05",
    title: "Flexible Delivery Capacity",
    description:
      "Transport support must adapt to promotions, seasonal demand and changing daily order volumes.",
  },
  {
    number: "06",
    title: "Access Coordination",
    description:
      "Deliveries often involve stairs, apartments, narrow access points and specific placement requirements.",
  },
];

const beddingSupport = [
  {
    number: "01",
    title: "Warehouse Collections",
    description:
      "Coordinated collection of mattresses, bed bases and bedroom furniture from warehouses and suppliers.",
  },
  {
    number: "02",
    title: "Store Replenishment",
    description:
      "Scheduled stock transfers that help maintain showroom availability across retail locations.",
  },
  {
    number: "03",
    title: "Customer Home Delivery",
    description:
      "Professional delivery into homes, apartments and managed residential properties.",
  },
  {
    number: "04",
    title: "Mattress & Base Handling",
    description:
      "Experienced crews use appropriate handling methods for oversized, wrapped and upholstered products.",
  },
  {
    number: "05",
    title: "Room Placement",
    description:
      "Products can be delivered to the agreed room or placement point according to the delivery instructions.",
  },
  {
    number: "06",
    title: "Retail Overflow Support",
    description:
      "Flexible transport capacity for promotional periods, increased order volumes and operational overflow.",
  },
];

const beddingProcess = [
  {
    number: "01",
    title: "Order Requirements",
    description:
      "We confirm the products, collection location, delivery address, access details and requested timeframe.",
  },
  {
    number: "02",
    title: "Delivery Planning",
    description:
      "Vehicle access, product dimensions, stairs and placement requirements are reviewed before dispatch.",
  },
  {
    number: "03",
    title: "Collection & Loading",
    description:
      "Mattresses, bases and furniture are collected and loaded using careful commercial handling methods.",
  },
  {
    number: "04",
    title: "Customer Delivery",
    description:
      "Our crew delivers professionally, protects the property and follows the agreed placement instructions.",
  },
  {
    number: "05",
    title: "Final Handover",
    description:
      "The order is placed as instructed and the delivery is completed with clear communication.",
  },
];

const commercialBenefits = [
  "A more dependable customer delivery experience",
  "Reduced pressure on showroom and warehouse teams",
  "Professional handling of bulky bedding products",
  "Better coordination between stock and customer orders",
  "Lower risk of avoidable product and property damage",
  "Flexible capacity during promotions and busy periods",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Furniture Retailers",
    description:
      "Professional transport for store replenishment, warehouse collections and customer deliveries.",
  },
  {
    number: "02",
    title: "Furniture Manufacturers",
    description:
      "Transport connecting production facilities, warehouses, retailers and commercial customers.",
  },
  {
    number: "03",
    title: "Interior Designers",
    description:
      "Coordinated furniture delivery for residential, hospitality and commercial interior projects.",
  },
  {
    number: "04",
    title: "Hotels & Developers",
    description:
      "Planned furniture and bedding deliveries for accommodation and property development projects.",
  },
];

export default function BeddingMattressStoresPage() {
  return (
    <main className="bedding-mattress-stores-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section
        className="bms-hero"
        aria-labelledby="bedding-mattress-stores-title"
      >
        <Image
          src="/services/bedding-mattress-stores-hero.webp"
          alt="Ross Furniture Transport crew delivering a mattress to a bedding retailer"
          fill
          priority
          sizes="100vw"
          className="bms-hero__image"
        />

        <div className="bms-hero__overlay" />

        <div className="bms-hero__container">
          <div className="bms-hero__content">
            <p className="bms-eyebrow bms-eyebrow--light">
              Bedding &amp; Mattress Stores
            </p>

            <h1 id="bedding-mattress-stores-title">
              Bedding Delivery Solutions
              <span>Built Around Your</span>
              <span>
                Customer Experience<i>.</i>
              </span>
            </h1>

            <p className="bms-hero__description">
              Move mattresses, bed bases and bedroom furniture with professional
              transport designed around your stock, delivery schedules and
              customer service standards.
            </p>

            <div className="bms-hero__actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <div
            className="bms-hero__snapshot"
            aria-label="Bedding and mattress delivery capabilities"
          >
            {[
              "Mattress Delivery",
              "Bed Base Handling",
              "Store Replenishment",
              "Customer Room Placement",
            ].map((item, index) => (
              <div className="bms-hero__snapshot-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          2. INDUSTRY OVERVIEW
      ===================================================== */}

      <section className="bms-overview">
        <div className="bms-container bms-overview__grid">
          <div className="bms-overview__heading">
            <p className="bms-eyebrow">Bedding Delivery Partnership</p>

            <h2>
              Comfort Begins Before
              <span>
                The Customer Goes to Sleep<i>.</i>
              </span>
            </h2>
          </div>

          <div className="bms-overview__content">
            <p className="bms-overview__lead">
              For bedding retailers, delivery is the final stage of a highly
              personal purchase and an important part of the customer
              experience.
            </p>

            <p>
              Mattresses, bed bases and bedroom furniture are bulky products
              that require careful handling, suitable equipment and clear
              coordination. Ross Furniture Transport helps bedding businesses
              deliver products professionally while reducing pressure on store
              and warehouse teams.
            </p>

            <div className="bms-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                From warehouse collection to room placement, every delivery is
                managed with care for the product, the property and the
                customer receiving it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT BEDDING & MATTRESS STORES NEED
      ===================================================== */}

      <section className="bms-needs">
        <div className="bms-container">
          <div className="bms-section-header--split">
            <div>
              <p className="bms-eyebrow">Bedding Delivery Essentials</p>

              <h2>
                What Bedding Retailers
                <span>
                  Need From Every Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="bms-section-header__description">
              Successful bedding delivery depends on careful product handling,
              dependable timing and professional service inside the customer’s
              home.
            </p>
          </div>

          <div className="bms-needs__grid">
            {beddingNeeds.map((need) => (
              <article className="bms-needs__card" key={need.number}>
                <span className="bms-card-number">{need.number}</span>

                <div>
                  <h3>{need.title}</h3>
                  <p>{need.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. HOW ROSS SUPPORTS BEDDING OPERATIONS
      ===================================================== */}

      <section className="bms-support">
        <div className="bms-container">
          <div className="bms-support__intro">
            <div>
              <p className="bms-eyebrow bms-eyebrow--light">
                The Ross Bedding Capability
              </p>

              <h2>
                Built for Bulky Products
                <span>
                  And Personal Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross supports the practical realities of bedding retail, from
              warehouse stock movement to professional delivery inside the
              customer’s property.
            </p>
          </div>

          <div className="bms-support__grid">
            {beddingSupport.map((item) => (
              <article className="bms-support__item" key={item.number}>
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. BEDDING DELIVERY PROCESS
      ===================================================== */}

      <section className="bms-process">
        <div className="bms-container">
          <div className="bms-section-header--center">
            <p className="bms-eyebrow">Bedding Delivery Process</p>

            <h2>
              From Warehouse Collection
              <span>
                To Room Placement<i>.</i>
              </span>
            </h2>

            <p>
              Each delivery is planned around product dimensions, property
              access, customer timing and placement instructions.
            </p>
          </div>

          <div className="bms-process__timeline">
            {beddingProcess.map((step) => (
              <article className="bms-process__step" key={step.number}>
                <div className="bms-process__number">{step.number}</div>

                <div className="bms-process__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          6. COMMERCIAL BENEFITS
      ===================================================== */}

      <section className="bms-benefits">
        <div className="bms-container bms-benefits__grid">
          <div className="bms-benefits__content">
            <p className="bms-eyebrow">Commercial Benefits</p>

            <h2>
              Better Handling
              <span>
                Better Customer Outcomes<i>.</i>
              </span>
            </h2>

            <p>
              The right delivery partner helps bedding retailers protect their
              products, maintain service standards and manage changing delivery
              demand more effectively.
            </p>
          </div>

          <div className="bms-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="bms-benefits__item" key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          7. RELATED INDUSTRIES
      ===================================================== */}

      <section className="bms-related">
        <div className="bms-container">
          <div className="bms-section-header--split">
            <div>
              <p className="bms-eyebrow">Related Industries</p>

              <h2>
                Transport Support Across
                <span>
                  Connected Furniture Sectors<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/production/industries"
              className="bms-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="bms-related__grid">
            {relatedIndustries.map((industry) => (
              <article
                className="bms-related__card"
                key={industry.title}
              >
                <span className="bms-related__number">
                  {industry.number}
                </span>

                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          8. CONTACT FORM
      ===================================================== */}

      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}