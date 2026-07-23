import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ContactForm from "@/components/home/ContactForm";

import "./ApplianceRetailersPage.css";

export const metadata: Metadata = {
  title:
    "Appliance Delivery for Retailers | Ross Furniture Transport",
  description:
    "Commercial appliance transport for retailers, including warehouse collections, store replenishment, whitegoods delivery and scheduled customer deliveries.",
};

const applianceNeeds = [
  {
    number: "01",
    title: "Reliable Scheduling",
    description:
      "Delivery windows must align with warehouse operations, store schedules, customer availability and installation requirements.",
  },
  {
    number: "02",
    title: "Careful Appliance Handling",
    description:
      "Bulky and fragile appliances must remain protected during loading, transport, unloading and final handover.",
  },
  {
    number: "03",
    title: "Professional Crews",
    description:
      "Customer-facing delivery teams must represent your retail business with care, presentation and professionalism.",
  },
  {
    number: "04",
    title: "Warehouse Coordination",
    description:
      "Collections and dispatch movements require clear communication with warehouses, distribution centres and store teams.",
  },
  {
    number: "05",
    title: "Customer Communication",
    description:
      "Retail customers need dependable delivery updates, practical arrival windows and professional communication.",
  },
  {
    number: "06",
    title: "Flexible Capacity",
    description:
      "Transport support must adapt to campaign periods, seasonal demand, product launches and changing delivery volumes.",
  },
];

const applianceSupport = [
  {
    number: "01",
    title: "Warehouse Collections",
    description:
      "Coordinated appliance collections from warehouses, distribution centres, suppliers and commercial storage facilities.",
  },
  {
    number: "02",
    title: "Store Replenishment",
    description:
      "Scheduled transport support for stock movements between warehouses, retail stores and showroom locations.",
  },
  {
    number: "03",
    title: "Customer Home Delivery",
    description:
      "Professional direct-to-customer delivery for whitegoods, televisions and bulky household appliances.",
  },
  {
    number: "04",
    title: "Whitegoods Transport",
    description:
      "Careful transport of refrigerators, washing machines, dryers, dishwashers, ovens and other large appliances.",
  },
  {
    number: "05",
    title: "Careful Product Handling",
    description:
      "Experienced crews use appropriate equipment and handling methods to reduce movement and product damage.",
  },
  {
    number: "06",
    title: "Commercial Delivery Support",
    description:
      "Flexible support for regular delivery programs, overflow requirements and changing appliance retail demand.",
  },
];

const deliveryProcess = [
  {
    number: "01",
    title: "Delivery Requirements",
    description:
      "We confirm collection points, appliance types, delivery locations, access requirements and preferred schedules.",
  },
  {
    number: "02",
    title: "Operational Planning",
    description:
      "Routes, loading access, delivery windows, handling requirements and site conditions are reviewed.",
  },
  {
    number: "03",
    title: "Collection & Loading",
    description:
      "Appliances are checked, secured and loaded carefully using appropriate commercial handling equipment.",
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
      "The delivery is completed according to the agreed handover, placement and site requirements.",
  },
];

const commercialBenefits = [
  "A stronger customer delivery experience",
  "Reduced pressure on appliance retail teams",
  "Professional handling of bulky whitegoods",
  "Reliable warehouse and store coordination",
  "Lower risk of avoidable product damage",
  "Flexible support as delivery volumes change",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Furniture Retailers",
    description:
      "Professional delivery support for furniture stores, warehouses and direct customer orders.",
    href: "/industries/furniture-retailers",
  },
  {
    number: "02",
    title: "Warehouses & Distributors",
    description:
      "Dependable transport between distribution facilities, retail stores and commercial delivery locations.",
    href: "/industries/warehouses-distributors",
  },
  {
    number: "03",
    title: "Hotels & Developers",
    description:
      "Project logistics for accommodation developments, commercial fit-outs and staged installations.",
    href: "/industries/hotels-developers",
  },
  {
    number: "04",
    title: "Government & Education",
    description:
      "Planned delivery support for institutions, public facilities and commercial procurement programs.",
    href: "/industries/government-education",
  },
];

export default function ApplianceRetailersPage() {
  return (
    <main className="appliance-retailers-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section
        className="ar-hero"
        aria-labelledby="appliance-retailers-title"
      >
        <Image
          src="/services/appliance-retailers-hero.webp"
          alt="Ross Furniture Transport crew delivering commercial appliances for an appliance retailer"
          fill
          priority
          sizes="100vw"
          className="ar-hero__image"
        />

        <div className="ar-hero__overlay" />

        <div className="ar-hero__container">
          <div className="ar-hero__content">
            <p className="ar-eyebrow ar-eyebrow--light">
              Appliance Retailers
            </p>

            <h1 id="appliance-retailers-title">
              Appliance Delivery Solutions
              <span>Built Around Your</span>
              <span>
                Retail Business<i>.</i>
              </span>
            </h1>

            <p className="ar-hero__description">
              Support warehouse collections, store replenishment and customer
              deliveries with professional appliance transport designed around
              your products, schedules and retail service standards.
            </p>

            <div className="ar-hero__actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <div
            className="ar-hero__snapshot"
            aria-label="Appliance retailer delivery capabilities"
          >
            {[
              "Store Replenishment",
              "Customer Home Delivery",
              "Warehouse Collections",
              "Whitegoods Transport",
            ].map((item, index) => (
              <div className="ar-hero__snapshot-item" key={item}>
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

      <section className="ar-overview">
        <div className="ar-container ar-overview__grid">
          <div className="ar-overview__heading">
            <p className="ar-eyebrow">Appliance Delivery Partnership</p>

            <h2>
              Your Delivery Service
              <span>
                Is Part of Your Reputation<i>.</i>
              </span>
            </h2>
          </div>

          <div className="ar-overview__content">
            <p className="ar-overview__lead">
              For appliance retailers, the customer experience continues well
              beyond the showroom, website or point of sale.
            </p>

            <p>
              Late arrivals, damaged appliances or poor communication can affect
              customer confidence and create additional pressure for store and
              service teams. Ross Furniture Transport provides dependable
              commercial delivery support that helps protect your products,
              maintain your schedule and represent your retail business
              professionally.
            </p>

            <div className="ar-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                From warehouse collections and store replenishment to direct
                customer delivery, every appliance movement is handled with the
                care, coordination and professionalism your business requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT APPLIANCE RETAILERS NEED
      ===================================================== */}

      <section className="ar-needs">
        <div className="ar-container">
          <div className="ar-section-header--split">
            <div>
              <p className="ar-eyebrow">Appliance Delivery Essentials</p>

              <h2>
                What Appliance Retailers
                <span>
                  Need From Every Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ar-section-header__description">
              Appliance delivery involves more than moving products between two
              locations. It requires careful handling, reliable coordination
              and an understanding of customer-facing retail service.
            </p>
          </div>

          <div className="ar-needs__grid">
            {applianceNeeds.map((need) => (
              <article className="ar-needs__card" key={need.number}>
                <span className="ar-card-number">{need.number}</span>

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
          4. HOW ROSS SUPPORTS APPLIANCE RETAIL OPERATIONS
      ===================================================== */}

      <section className="ar-support">
        <div className="ar-container">
          <div className="ar-support__intro">
            <div>
              <p className="ar-eyebrow ar-eyebrow--light">
                The Ross Appliance Capability
              </p>

              <h2>
                Delivery Support That Fits
                <span>
                  Your Retail Operation<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross works around the practical requirements of appliance retail,
              helping stores, warehouses and operations teams coordinate stock
              movement, customer deliveries and changing transport demand.
            </p>
          </div>

          <div className="ar-support__grid">
            {applianceSupport.map((item) => (
              <article className="ar-support__item" key={item.number}>
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
          5. APPLIANCE DELIVERY PROCESS
      ===================================================== */}

      <section className="ar-process">
        <div className="ar-container">
          <div className="ar-section-header--center">
            <p className="ar-eyebrow">Appliance Delivery Process</p>

            <h2>
              A Coordinated Process
              <span>
                From Collection to Completion<i>.</i>
              </span>
            </h2>

            <p>
              Every delivery is planned around the appliance type, location,
              loading access, delivery conditions and agreed customer
              requirements.
            </p>
          </div>

          <div className="ar-process__timeline">
            {deliveryProcess.map((step) => (
              <article className="ar-process__step" key={step.number}>
                <div className="ar-process__number">{step.number}</div>

                <div className="ar-process__content">
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

      <section className="ar-benefits">
        <div className="ar-container ar-benefits__grid">
          <div className="ar-benefits__content">
            <p className="ar-eyebrow">Commercial Benefits</p>

            <h2>
              Better Delivery Support
              <span>
                Better Retail Outcomes<i>.</i>
              </span>
            </h2>

            <p>
              The right transport partner helps appliance retailers operate
              more efficiently while delivering the level of service customers
              expect from a professional retail business.
            </p>
          </div>

          <div className="ar-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="ar-benefits__item" key={benefit}>
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

      <section className="ar-related">
        <div className="ar-container">
          <div className="ar-section-header--split">
            <div>
              <p className="ar-eyebrow">Related Industries</p>

              <h2>
                Commercial Delivery Support
                <span>
                  Across Connected Industries<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/industries"
              className="ar-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="ar-related__grid">
            {relatedIndustries.map((industry) => (
              <article className="ar-related__card" key={industry.title}>
                <span className="ar-related__number">
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