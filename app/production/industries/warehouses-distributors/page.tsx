import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ContactForm from "@/components/home/ContactForm";

import "./WarehousesDistributorsPage.css";

export const metadata: Metadata = {
  title:
    "Furniture Transport for Warehouses & Distributors | Ross Furniture Transport",
  description:
    "Commercial furniture transport for warehouses and distributors, including inbound collections, warehouse transfers, retail distribution, interstate transport and scheduled delivery support.",
};

const warehouseNeeds = [
  {
    number: "01",
    title: "Reliable Scheduling",
    description:
      "Transport movements must align with receiving windows, dispatch schedules, loading docks and warehouse operations.",
  },
  {
    number: "02",
    title: "Volume Capacity",
    description:
      "Warehouses and distributors need dependable support for regular volumes, large orders and seasonal demand.",
  },
  {
    number: "03",
    title: "Stock Protection",
    description:
      "Furniture must remain protected during loading, transport, unloading and movement between facilities.",
  },
  {
    number: "04",
    title: "Network Coordination",
    description:
      "Collections and deliveries require clear communication between suppliers, warehouses, stores and project sites.",
  },
  {
    number: "05",
    title: "Flexible Distribution",
    description:
      "Transport support must cover retail stores, commercial projects, customer deliveries and interstate movements.",
  },
  {
    number: "06",
    title: "Professional Handling",
    description:
      "Experienced crews and suitable equipment are essential when moving bulky, fragile and high-value furniture.",
  },
];

const warehouseSupport = [
  {
    number: "01",
    title: "Inbound Collections",
    description:
      "Scheduled collections from manufacturers, suppliers, importers and commercial furniture facilities.",
  },
  {
    number: "02",
    title: "Warehouse Transfers",
    description:
      "Reliable furniture movements between warehouses, storage facilities and distribution centres.",
  },
  {
    number: "03",
    title: "Retail Distribution",
    description:
      "Coordinated deliveries from warehouses to furniture stores, showrooms and retail networks.",
  },
  {
    number: "04",
    title: "Project Deliveries",
    description:
      "Planned transport for commercial fit-outs, developments, accommodation projects and installation sites.",
  },
  {
    number: "05",
    title: "Interstate Distribution",
    description:
      "Scheduled interstate furniture transport supporting wider commercial distribution networks.",
  },
  {
    number: "06",
    title: "Overflow Capacity",
    description:
      "Flexible transport support during peak periods, large dispatch runs and changing warehouse demand.",
  },
];

const deliveryProcess = [
  {
    number: "01",
    title: "Transport Requirements",
    description:
      "We confirm collection points, furniture volumes, destinations, schedules and handling requirements.",
  },
  {
    number: "02",
    title: "Distribution Planning",
    description:
      "Routes, loading access, dock times, delivery windows and operational requirements are reviewed.",
  },
  {
    number: "03",
    title: "Collection & Loading",
    description:
      "Furniture is checked, handled carefully and loaded using appropriate commercial equipment.",
  },
  {
    number: "04",
    title: "Commercial Transport",
    description:
      "Stock is transported professionally between suppliers, warehouses, stores and project locations.",
  },
  {
    number: "05",
    title: "Delivery Completion",
    description:
      "Each movement is completed according to the agreed handover, placement and site instructions.",
  },
];

const commercialBenefits = [
  "Reliable support for warehouse operations",
  "Reduced pressure on internal dispatch teams",
  "Better coordination across distribution networks",
  "Lower risk of avoidable furniture damage",
  "Flexible capacity during busy periods",
  "Professional representation at every delivery point",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Furniture Manufacturers",
    description:
      "Transport connecting factories, warehouses and commercial distribution networks.",
    href: "/production/industries/furniture-manufacturers",
  },
  {
    number: "02",
    title: "Furniture Retailers",
    description:
      "Professional delivery support for stores, showrooms and direct customer orders.",
    href: "/production/industries/furniture-retailers",
  },
  {
    number: "03",
    title: "Appliance Retailers",
    description:
      "Warehouse collections, store replenishment and customer delivery for bulky appliances.",
    href: "/production/industries/appliance-retailers",
  },
  {
    number: "04",
    title: "Hotels & Developers",
    description:
      "Project logistics for staged furniture deliveries and commercial installations.",
    href: "/production/industries/hotels-developers",
  },
];

export default function WarehousesDistributorsPage() {
  return (
    <main className="warehouses-distributors-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section
        className="wd-hero"
        aria-labelledby="warehouses-distributors-title"
      >
        <Image
          src="/services/warehouses-distributors-hero.webp"
          alt="Commercial furniture transport operating from a warehouse and distribution facility"
          fill
          priority
          sizes="100vw"
          className="wd-hero__image"
        />

        <div className="wd-hero__overlay" />

        <div className="wd-hero__container">
          <div className="wd-hero__content">
            <p className="wd-eyebrow wd-eyebrow--light">
              Warehouses &amp; Distributors
            </p>

            <h1 id="warehouses-distributors-title">
              Furniture Distribution Solutions
              <span>Built Around Your</span>
              <span>
                Warehouse Network<i>.</i>
              </span>
            </h1>

            <p className="wd-hero__description">
              Keep furniture moving between suppliers, warehouses, stores and
              project sites with professional transport designed around your
              distribution schedules, stock volumes and operational
              requirements.
            </p>

            <div className="wd-hero__actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <div
            className="wd-hero__snapshot"
            aria-label="Warehouse and distribution transport capabilities"
          >
            {[
              "Inbound Collections",
              "Warehouse Transfers",
              "Retail Distribution",
              "Interstate Transport",
            ].map((item, index) => (
              <div className="wd-hero__snapshot-item" key={item}>
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

      <section className="wd-overview">
        <div className="wd-container wd-overview__grid">
          <div className="wd-overview__heading">
            <p className="wd-eyebrow">Distribution Logistics Partnership</p>

            <h2>
              Your Transport Network
              <span>
                Keeps Your Operation Moving<i>.</i>
              </span>
            </h2>
          </div>

          <div className="wd-overview__content">
            <p className="wd-overview__lead">
              For warehouses and distributors, dependable transport is
              essential to maintaining efficient stock flow.
            </p>

            <p>
              Missed collections, delayed dispatches or damaged furniture can
              interrupt warehouse operations and place pressure on stores,
              suppliers and project schedules. Ross Furniture Transport
              provides coordinated commercial delivery support that helps keep
              stock moving reliably across your distribution network.
            </p>

            <div className="wd-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                From inbound supplier collections to warehouse transfers,
                retail distribution and project deliveries, every movement is
                handled with the coordination and care your operation requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT WAREHOUSES & DISTRIBUTORS NEED
      ===================================================== */}

      <section className="wd-needs">
        <div className="wd-container">
          <div className="wd-section-header--split">
            <div>
              <p className="wd-eyebrow">Distribution Logistics Essentials</p>

              <h2>
                What Warehouses &amp; Distributors
                <span>
                  Need From Every Movement<i>.</i>
                </span>
              </h2>
            </div>

            <p className="wd-section-header__description">
              Furniture distribution requires more than transport capacity. It
              demands reliable scheduling, careful handling and clear
              coordination across every part of the supply chain.
            </p>
          </div>

          <div className="wd-needs__grid">
            {warehouseNeeds.map((need) => (
              <article className="wd-needs__card" key={need.number}>
                <span className="wd-card-number">{need.number}</span>

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
          4. HOW ROSS SUPPORTS WAREHOUSE OPERATIONS
      ===================================================== */}

      <section className="wd-support">
        <div className="wd-container">
          <div className="wd-support__intro">
            <div>
              <p className="wd-eyebrow wd-eyebrow--light">
                The Ross Distribution Capability
              </p>

              <h2>
                Transport Support That Fits
                <span>
                  Your Warehouse Operation<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross works around the practical requirements of warehouse and
              distribution teams, helping coordinate inbound stock, internal
              transfers, retail dispatch and project delivery programs.
            </p>
          </div>

          <div className="wd-support__grid">
            {warehouseSupport.map((item) => (
              <article className="wd-support__item" key={item.number}>
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
          5. WAREHOUSE DELIVERY PROCESS
      ===================================================== */}

      <section className="wd-process">
        <div className="wd-container">
          <div className="wd-section-header--center">
            <p className="wd-eyebrow">Warehouse Delivery Process</p>

            <h2>
              A Coordinated Process
              <span>
                Across Your Distribution Network<i>.</i>
              </span>
            </h2>

            <p>
              Every movement is planned around stock volumes, loading access,
              warehouse schedules, delivery windows and commercial site
              requirements.
            </p>
          </div>

          <div className="wd-process__timeline">
            {deliveryProcess.map((step) => (
              <article className="wd-process__step" key={step.number}>
                <div className="wd-process__number">{step.number}</div>

                <div className="wd-process__content">
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

      <section className="wd-benefits">
        <div className="wd-container wd-benefits__grid">
          <div className="wd-benefits__content">
            <p className="wd-eyebrow">Commercial Benefits</p>

            <h2>
              Better Transport Support
              <span>
                Better Distribution Outcomes<i>.</i>
              </span>
            </h2>

            <p>
              The right logistics partner helps warehouses and distributors
              maintain efficient stock movement while reducing operational
              pressure across receiving, dispatch and delivery teams.
            </p>
          </div>

          <div className="wd-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="wd-benefits__item" key={benefit}>
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

      <section className="wd-related">
        <div className="wd-container">
          <div className="wd-section-header--split">
            <div>
              <p className="wd-eyebrow">Related Industries</p>

              <h2>
                Commercial Delivery Support
                <span>
                  Across Connected Industries<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/production/industries"
              className="wd-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="wd-related__grid">
            {relatedIndustries.map((industry) => (
              <article className="wd-related__card" key={industry.title}>
                <span className="wd-related__number">{industry.number}</span>

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