import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import CallRoss from "@/components/shared/buttons/CallRoss";
import ContactForm from "@/components/home/ContactForm";

import "./FurnitureRetailersPage.css";

export const metadata: Metadata = {
  title: "Furniture Delivery for Retailers | Ross Furniture Transport",
  description:
    "Professional furniture transport for retailers, including warehouse collections, store replenishment, scheduled delivery runs and direct customer deliveries.",
};

const retailNeeds = [
  {
    number: "01",
    title: "Reliable Scheduling",
    description:
      "Delivery windows must align with warehouse operations, store requirements and customer availability.",
  },
  {
    number: "02",
    title: "Product Protection",
    description:
      "Furniture must be handled carefully from collection through to final placement or handover.",
  },
  {
    number: "03",
    title: "Professional Crews",
    description:
      "Customer-facing delivery teams must represent your business with care, presentation and professionalism.",
  },
  {
    number: "04",
    title: "Clear Communication",
    description:
      "Retail teams need practical delivery updates and dependable communication throughout every job.",
  },
  {
    number: "05",
    title: "Flexible Capacity",
    description:
      "Delivery support must adapt to seasonal demand, campaign periods and changing retail volumes.",
  },
  {
    number: "06",
    title: "Operational Coordination",
    description:
      "Collections and deliveries must work around warehouse access, store procedures and site requirements.",
  },
];

const retailSupport = [
  {
    number: "01",
    title: "Warehouse Collections",
    description:
      "Coordinated furniture collections from warehouses, distribution facilities and supplier locations.",
  },
  {
    number: "02",
    title: "Store Replenishment",
    description:
      "Scheduled transport support for stock movements between warehouses, stores and retail locations.",
  },
  {
    number: "03",
    title: "Customer Home Delivery",
    description:
      "Professional direct-to-customer delivery that protects the product and your brand reputation.",
  },
  {
    number: "04",
    title: "Scheduled Delivery Runs",
    description:
      "Planned delivery runs built around your order volumes, operating schedule and service requirements.",
  },
  {
    number: "05",
    title: "Careful Furniture Handling",
    description:
      "Experienced crews use appropriate equipment and handling methods throughout every delivery.",
  },
  {
    number: "06",
    title: "Commercial Flexibility",
    description:
      "Support for regular delivery programs, overflow requirements and changing commercial demand.",
  },
];

const deliveryProcess = [
  {
    number: "01",
    title: "Delivery Requirements",
    description:
      "We confirm collection points, delivery locations, product requirements and preferred schedules.",
  },
  {
    number: "02",
    title: "Operational Planning",
    description:
      "Routes, access requirements, delivery windows and handling needs are reviewed before transport.",
  },
  {
    number: "03",
    title: "Collection & Loading",
    description:
      "Furniture is collected, checked and loaded carefully using appropriate commercial handling equipment.",
  },
  {
    number: "04",
    title: "Professional Delivery",
    description:
      "Our crew completes each delivery with clear communication, careful handling and professional conduct.",
  },
  {
    number: "05",
    title: "Delivery Completion",
    description:
      "The delivery is completed according to the agreed instructions, placement requirements and site process.",
  },
];

const commercialBenefits = [
  "A stronger customer delivery experience",
  "Reduced pressure on internal retail teams",
  "Reliable warehouse and store coordination",
  "Professional representation of your brand",
  "Lower risk of avoidable product damage",
  "Flexible support as delivery volumes change",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Furniture Manufacturers",
    description:
      "Transport support connecting factories, warehouses, retailers and commercial customers.",
    href: "/production/industries/furniture-manufacturers",
  },
  {
    number: "02",
    title: "Bedding & Mattress Stores",
    description:
      "Professional delivery solutions for mattresses, bed frames and bulky bedroom furniture.",
    href: "/production/industries/bedding-mattress-stores",
  },
  {
    number: "03",
    title: "Interior Designers",
    description:
      "Coordinated furniture delivery for residential, commercial and fit-out projects.",
    href: "/production/industries/interior-designers",
  },
  {
    number: "04",
    title: "Warehouses & Distributors",
    description:
      "Dependable transport between distribution facilities, retail locations and customer sites.",
    href: "/production/industries/warehouses-distributors",
  },
];

export default function FurnitureRetailersPage() {
  return (
    <main className="furniture-retailers-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section
        className="fr-hero"
        aria-labelledby="furniture-retailers-title"
      >
        <Image
          src="/services/furniture-retail.webp"
          alt="Ross Furniture Transport crew delivering a sofa to a furniture retailer"
          fill
          priority
          sizes="100vw"
          className="fr-hero__image"
        />

        <div className="fr-hero__overlay" />

        <div className="fr-hero__container">
          <div className="fr-hero__content">
            <p className="fr-eyebrow fr-eyebrow--light">
              Furniture Retailers
            </p>

            <h1 id="furniture-retailers-title">
              Furniture Delivery Solutions
              <span>Built Around Your</span>
              <span>
                Retail Business<i>.</i>
              </span>
            </h1>

            <p className="fr-hero__description">
              Support store replenishment, warehouse collections and customer
              deliveries with professional furniture transport designed around
              your schedules, products and brand reputation.
            </p>

            <div className="fr-hero__actions">
              <RequestDeliveryQuote />

            </div>
          </div>

          <div
            className="fr-hero__snapshot"
            aria-label="Furniture retailer delivery capabilities"
          >
            {[
              "Store Replenishment",
              "Customer Home Delivery",
              "Warehouse Collections",
              "Scheduled Delivery Runs",
            ].map((item, index) => (
              <div className="fr-hero__snapshot-item" key={item}>
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

      <section className="fr-overview">
        <div className="fr-container fr-overview__grid">
          <div className="fr-overview__heading">
            <p className="fr-eyebrow">Retail Delivery Partnership</p>

            <h2>
              Your Delivery Service
              <span>
                Is Part of Your Brand<i>.</i>
              </span>
            </h2>
          </div>

          <div className="fr-overview__content">
            <p className="fr-overview__lead">
              For furniture retailers, the customer experience does not end at
              the checkout. It continues through collection, transport and
              final delivery.
            </p>

            <p>
              Late arrivals, damaged products or poor communication can affect
              customer confidence and place unnecessary pressure on your team.
              Ross Furniture Transport provides dependable commercial delivery
              support that helps protect your products, your schedule and the
              reputation of your business.
            </p>

            <div className="fr-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                From warehouse-to-store movements to direct customer delivery,
                every job is handled with the same care and professionalism
                your customers expect from your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT FURNITURE RETAILERS NEED
      ===================================================== */}

      <section className="fr-needs">
        <div className="fr-container">
          <div className="fr-section-header--split">
            <div>
              <p className="fr-eyebrow">Retail Delivery Essentials</p>

              <h2>
                What Furniture Retailers
                <span>
                  Need From Every Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="fr-section-header__description">
              Retail delivery involves more than moving furniture between two
              locations. It requires coordination, consistency and a clear
              understanding of the customer experience.
            </p>
          </div>

          <div className="fr-needs__grid">
            {retailNeeds.map((need) => (
              <article className="fr-needs__card" key={need.number}>
                <span className="fr-card-number">{need.number}</span>

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
          4. HOW ROSS SUPPORTS RETAIL OPERATIONS
      ===================================================== */}

      <section className="fr-support">
        <div className="fr-container">
          <div className="fr-support__intro">
            <div>
              <p className="fr-eyebrow fr-eyebrow--light">
                The Ross Retail Capability
              </p>

              <h2>
                Delivery Support That Fits
                <span>
                  Your Retail Operation<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross works around the practical requirements of furniture retail,
              helping businesses coordinate stock movement, customer deliveries
              and changing transport demand.
            </p>
          </div>

          <div className="fr-support__grid">
            {retailSupport.map((item) => (
              <article className="fr-support__item" key={item.number}>
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
          5. RETAIL DELIVERY PROCESS
      ===================================================== */}

      <section className="fr-process">
        <div className="fr-container">
          <div className="fr-section-header--center">
            <p className="fr-eyebrow">Retail Delivery Process</p>

            <h2>
              A Coordinated Process
              <span>
                From Collection to Completion<i>.</i>
              </span>
            </h2>

            <p>
              Every delivery is planned around the product, location, access
              requirements and customer expectations.
            </p>
          </div>

          <div className="fr-process__timeline">
            {deliveryProcess.map((step) => (
              <article className="fr-process__step" key={step.number}>
                <div className="fr-process__number">{step.number}</div>

                <div className="fr-process__content">
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

      <section className="fr-benefits">
        <div className="fr-container fr-benefits__grid">
          <div className="fr-benefits__content">
            <p className="fr-eyebrow">Commercial Benefits</p>

            <h2>
              Better Delivery Support
              <span>
                Better Retail Outcomes<i>.</i>
              </span>
            </h2>

            <p>
              The right transport partner helps your team operate more
              efficiently while delivering the level of service your customers
              expect from your business.
            </p>
          </div>

          <div className="fr-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="fr-benefits__item" key={benefit}>
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

      <section className="fr-related">
        <div className="fr-container">
          <div className="fr-section-header--split">
            <div>
              <p className="fr-eyebrow">Related Industries</p>

              <h2>
                Commercial Delivery Support
                <span>
                  Across Connected Industries<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/production/industries"
              className="fr-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="fr-related__grid">
            {relatedIndustries.map((industry) => (
<article
  className="fr-related__card"
  key={industry.title}
>
  <span className="fr-related__number">
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