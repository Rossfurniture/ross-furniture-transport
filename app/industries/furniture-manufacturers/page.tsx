import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ContactForm from "@/components/home/ContactForm";

import "./FurnitureManufacturersPage.css";

export const metadata: Metadata = {
  title:
    "Furniture Transport for Manufacturers | Ross Furniture Transport",
  description:
    "Commercial furniture transport for manufacturers, including factory collections, warehouse transfers, retail distribution, interstate delivery and scheduled logistics support.",
};

const manufacturerNeeds = [
  {
    number: "01",
    title: "Production Scheduling",
    description:
      "Collections must align with manufacturing output, dispatch schedules, warehouse capacity and customer deadlines.",
  },
  {
    number: "02",
    title: "Product Protection",
    description:
      "Finished furniture must remain protected throughout loading, transport, unloading and final handover.",
  },
  {
    number: "03",
    title: "Reliable Capacity",
    description:
      "Transport support must accommodate regular production volumes, peak periods and large commercial orders.",
  },
  {
    number: "04",
    title: "Supply Chain Coordination",
    description:
      "Factory, warehouse, retailer and project deliveries require clear communication across every transport stage.",
  },
  {
    number: "05",
    title: "Flexible Distribution",
    description:
      "Manufacturers need delivery options for warehouses, retail stores, commercial sites and direct customers.",
  },
  {
    number: "06",
    title: "Professional Handling",
    description:
      "Experienced crews and appropriate equipment are essential when moving finished furniture and bulky products.",
  },
];

const manufacturerSupport = [
  {
    number: "01",
    title: "Factory Collections",
    description:
      "Scheduled furniture collections coordinated around production completion, dispatch requirements and loading access.",
  },
  {
    number: "02",
    title: "Warehouse Transfers",
    description:
      "Dependable furniture movements between factories, storage facilities, warehouses and distribution centres.",
  },
  {
    number: "03",
    title: "Retail Distribution",
    description:
      "Commercial delivery support connecting manufacturers with furniture retailers, showrooms and store networks.",
  },
  {
    number: "04",
    title: "Project Site Deliveries",
    description:
      "Coordinated transport for commercial developments, fit-outs, accommodation projects and installation sites.",
  },
  {
    number: "05",
    title: "Interstate Furniture Transport",
    description:
      "Planned interstate delivery solutions supporting broader distribution networks and commercial supply requirements.",
  },
  {
    number: "06",
    title: "Flexible Commercial Capacity",
    description:
      "Additional transport support for production peaks, large orders, overflow requirements and changing demand.",
  },
];

const deliveryProcess = [
  {
    number: "01",
    title: "Transport Requirements",
    description:
      "We confirm collection locations, furniture volumes, destinations, schedules and handling requirements.",
  },
  {
    number: "02",
    title: "Distribution Planning",
    description:
      "Routes, loading access, delivery windows, site requirements and transport sequencing are reviewed.",
  },
  {
    number: "03",
    title: "Factory Collection",
    description:
      "Finished furniture is checked, handled carefully and loaded using appropriate commercial equipment.",
  },
  {
    number: "04",
    title: "Commercial Transport",
    description:
      "Furniture is transported professionally between factories, warehouses, retailers and project locations.",
  },
  {
    number: "05",
    title: "Delivery Completion",
    description:
      "Each delivery is completed according to the agreed instructions, placement requirements and site process.",
  },
];

const commercialBenefits = [
  "Reliable transport aligned with production schedules",
  "Reduced pressure on internal dispatch teams",
  "Stronger factory and warehouse coordination",
  "Lower risk of avoidable product damage",
  "Flexible support as production volumes change",
  "Professional representation across your supply chain",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Furniture Retailers",
    description:
      "Professional transport connecting manufacturers with stores, warehouses and direct customers.",
    href: "/industries/furniture-retailers",
  },
  {
    number: "02",
    title: "Warehouses & Distributors",
    description:
      "Dependable furniture movements between production facilities, warehouses and distribution networks.",
    href: "/industries/warehouses-distributors",
  },
  {
    number: "03",
    title: "Interior Designers",
    description:
      "Coordinated furniture delivery for commercial interiors, fit-outs and installation projects.",
    href: "/industries/interior-designers",
  },
  {
    number: "04",
    title: "Hotels & Developers",
    description:
      "Project logistics for hotels, apartments, developments and large-scale furniture installations.",
    href: "/industries/hotels-developers",
  },
];

export default function FurnitureManufacturersPage() {
  return (
    <main className="furniture-manufacturers-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section
        className="fm-hero"
        aria-labelledby="furniture-manufacturers-title"
      >
        <Image
          src="/services/furniture-manufacturers-hero.webp"
          alt="Commercial furniture transport supporting a furniture manufacturing facility"
          fill
          priority
          sizes="100vw"
          className="fm-hero__image"
        />

        <div className="fm-hero__overlay" />

        <div className="fm-hero__container">
          <div className="fm-hero__content">
            <p className="fm-eyebrow fm-eyebrow--light">
              Furniture Manufacturers
            </p>

            <h1 id="furniture-manufacturers-title">
              Furniture Transport Solutions
              <span>Built Around Your</span>
              <span>
                Production Network<i>.</i>
              </span>
            </h1>

            <p className="fm-hero__description">
              Connect factories, warehouses, retailers and commercial project
              sites with professional furniture transport designed around your
              production schedules, distribution requirements and finished
              products.
            </p>

            <div className="fm-hero__actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <div
            className="fm-hero__snapshot"
            aria-label="Furniture manufacturer transport capabilities"
          >
            {[
              "Factory Collections",
              "Warehouse Transfers",
              "Retail Distribution",
              "Interstate Transport",
            ].map((item, index) => (
              <div className="fm-hero__snapshot-item" key={item}>
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

      <section className="fm-overview">
        <div className="fm-container fm-overview__grid">
          <div className="fm-overview__heading">
            <p className="fm-eyebrow">Manufacturing Logistics Partnership</p>

            <h2>
              Your Transport Network
              <span>
                Supports Your Production<i>.</i>
              </span>
            </h2>
          </div>

          <div className="fm-overview__content">
            <p className="fm-overview__lead">
              For furniture manufacturers, reliable transport is essential to
              keeping finished products moving beyond the factory floor.
            </p>

            <p>
              Delayed collections, damaged furniture or inconsistent delivery
              capacity can disrupt warehouse operations, retail supply and
              commercial project schedules. Ross Furniture Transport provides
              dependable logistics support that helps manufacturers coordinate
              factory collections, distribution movements and final deliveries
              across their commercial network.
            </p>

            <div className="fm-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                From completed production runs to warehouse transfers, retail
                distribution and project deliveries, every movement is handled
                with the care and coordination your finished furniture
                requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT FURNITURE MANUFACTURERS NEED
      ===================================================== */}

      <section className="fm-needs">
        <div className="fm-container">
          <div className="fm-section-header--split">
            <div>
              <p className="fm-eyebrow">Manufacturing Logistics Essentials</p>

              <h2>
                What Furniture Manufacturers
                <span>
                  Need From Every Movement<i>.</i>
                </span>
              </h2>
            </div>

            <p className="fm-section-header__description">
              Manufacturing logistics requires more than collecting completed
              furniture. It demands reliable scheduling, careful handling and
              coordination across production, storage and distribution
              operations.
            </p>
          </div>

          <div className="fm-needs__grid">
            {manufacturerNeeds.map((need) => (
              <article className="fm-needs__card" key={need.number}>
                <span className="fm-card-number">{need.number}</span>

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
          4. HOW ROSS SUPPORTS MANUFACTURING OPERATIONS
      ===================================================== */}

      <section className="fm-support">
        <div className="fm-container">
          <div className="fm-support__intro">
            <div>
              <p className="fm-eyebrow fm-eyebrow--light">
                The Ross Manufacturing Capability
              </p>

              <h2>
                Transport Support That Fits
                <span>
                  Your Production Operation<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross works around the practical requirements of furniture
              manufacturing, helping production, warehouse and operations teams
              coordinate finished-product movements across commercial supply
              networks.
            </p>
          </div>

          <div className="fm-support__grid">
            {manufacturerSupport.map((item) => (
              <article className="fm-support__item" key={item.number}>
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
          5. MANUFACTURING DELIVERY PROCESS
      ===================================================== */}

      <section className="fm-process">
        <div className="fm-container">
          <div className="fm-section-header--center">
            <p className="fm-eyebrow">Manufacturing Delivery Process</p>

            <h2>
              A Coordinated Process
              <span>
                From Factory to Final Delivery<i>.</i>
              </span>
            </h2>

            <p>
              Every furniture movement is planned around production completion,
              loading requirements, destinations, access conditions and
              commercial delivery schedules.
            </p>
          </div>

          <div className="fm-process__timeline">
            {deliveryProcess.map((step) => (
              <article className="fm-process__step" key={step.number}>
                <div className="fm-process__number">{step.number}</div>

                <div className="fm-process__content">
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

      <section className="fm-benefits">
        <div className="fm-container fm-benefits__grid">
          <div className="fm-benefits__content">
            <p className="fm-eyebrow">Commercial Benefits</p>

            <h2>
              Better Transport Support
              <span>
                Better Manufacturing Outcomes<i>.</i>
              </span>
            </h2>

            <p>
              The right logistics partner helps manufacturers keep finished
              products moving efficiently while reducing pressure across
              production, dispatch and warehouse operations.
            </p>
          </div>

          <div className="fm-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="fm-benefits__item" key={benefit}>
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

      <section className="fm-related">
        <div className="fm-container">
          <div className="fm-section-header--split">
            <div>
              <p className="fm-eyebrow">Related Industries</p>

              <h2>
                Commercial Delivery Support
                <span>
                  Across Connected Industries<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/industries"
              className="fm-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="fm-related__grid">
            {relatedIndustries.map((industry) => (
              <article className="fm-related__card" key={industry.title}>
                <span className="fm-related__number">{industry.number}</span>

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