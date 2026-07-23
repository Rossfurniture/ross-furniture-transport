import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ContactForm from "@/components/home/ContactForm";

import "./InteriorDesignersPage.css";

export const metadata: Metadata = {
  title:
    "Furniture Delivery for Interior Designers | Ross Furniture Transport",
  description:
    "Professional furniture transport for interior designers, including supplier collections, staged project deliveries, white-glove handling and commercial fit-out support across Australia.",
};

const designerNeeds = [
  {
    number: "01",
    title: "Project Scheduling",
    description:
      "Deliveries must align with installation dates, trade access, client availability and important project milestones.",
  },
  {
    number: "02",
    title: "Furniture Protection",
    description:
      "Premium furniture, artwork and decorative pieces require careful handling throughout collection, transport and placement.",
  },
  {
    number: "03",
    title: "Supplier Coordination",
    description:
      "Interior projects often require products to be collected from multiple suppliers before final site delivery.",
  },
  {
    number: "04",
    title: "Professional Presentation",
    description:
      "Delivery crews must represent your studio professionally when working around clients, contractors and project teams.",
  },
  {
    number: "05",
    title: "Site Access Planning",
    description:
      "Apartment access, loading zones, lifts, stairs and restricted delivery windows must be considered before arrival.",
  },
  {
    number: "06",
    title: "Clear Communication",
    description:
      "Reliable updates help designers coordinate suppliers, installers, trades and clients with greater confidence.",
  },
];

const designerSupport = [
  {
    number: "01",
    title: "Supplier Collections",
    description:
      "Furniture and furnishings can be collected from multiple retailers, manufacturers, warehouses and specialist suppliers.",
  },
  {
    number: "02",
    title: "Project Deliveries",
    description:
      "Scheduled transport for residential, commercial, hospitality and property styling projects.",
  },
  {
    number: "03",
    title: "White-Glove Handling",
    description:
      "Careful handling for premium furniture, fragile finishes, artwork and high-value decorative pieces.",
  },
  {
    number: "04",
    title: "Staged Delivery Programs",
    description:
      "Products can be delivered in planned stages to support installation schedules and site readiness.",
  },
  {
    number: "05",
    title: "Commercial Fit-Out Support",
    description:
      "Coordinated furniture transport for offices, retail spaces, accommodation and commercial interiors.",
  },
  {
    number: "06",
    title: "Room Placement",
    description:
      "Furniture can be delivered to the nominated room or placement area according to project instructions.",
  },
];

const designerProcess = [
  {
    number: "01",
    title: "Project Brief",
    description:
      "We confirm the furniture schedule, suppliers, collection locations, site requirements and delivery timeframe.",
  },
  {
    number: "02",
    title: "Delivery Planning",
    description:
      "Collections, vehicle access, loading zones, lifts, stairs and delivery sequencing are reviewed before dispatch.",
  },
  {
    number: "03",
    title: "Supplier Collections",
    description:
      "Furniture and project items are collected from the nominated suppliers using careful commercial handling methods.",
  },
  {
    number: "04",
    title: "Site Delivery",
    description:
      "Our crew coordinates arrival with the project contact and delivers each item according to the agreed instructions.",
  },
  {
    number: "05",
    title: "Final Placement",
    description:
      "Furniture is positioned in the nominated area, allowing installation and styling work to continue smoothly.",
  },
];

const commercialBenefits = [
  "Improved coordination across suppliers and project teams",
  "Professional handling of premium furniture and finishes",
  "Deliveries aligned with installation schedules",
  "Reduced pressure on designers and site coordinators",
  "Better management of difficult property access",
  "A polished delivery experience for every client",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Furniture Retailers",
    description:
      "Professional delivery support connecting furniture stores, warehouses and customer properties.",
  },
  {
    number: "02",
    title: "Furniture Manufacturers",
    description:
      "Reliable transport from production facilities to warehouses, project sites and commercial customers.",
  },
  {
    number: "03",
    title: "Hotels & Developers",
    description:
      "Structured furniture delivery for fit-outs, refurbishments and multi-stage property projects.",
  },
  {
    number: "04",
    title: "Appliance Retailers",
    description:
      "Careful commercial transport for bulky appliances required across residential and commercial interiors.",
  },
];

export default function InteriorDesignersPage() {
  return (
    <main className="interior-designers-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section
        className="id-hero"
        aria-labelledby="interior-designers-title"
      >
        <Image
          src="/services/interior-designers-hero.webp"
          alt="Premium furniture prepared for an interior design project delivery"
          fill
          priority
          sizes="100vw"
          className="id-hero__image"
        />

        <div className="id-hero__overlay" />

        <div className="id-hero__container">
          <div className="id-hero__content">
            <p className="id-eyebrow id-eyebrow--light">
              Interior Designers
            </p>

            <h1 id="interior-designers-title">
              Furniture Delivery
              <span>Designed Around Your</span>
              <span>
                Interior Projects<i>.</i>
              </span>
            </h1>

            <p className="id-hero__description">
              Carefully coordinated furniture transport supporting interior
              designers across residential, commercial and hospitality
              projects throughout Australia.
            </p>

            <div className="id-hero__actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <div
            className="id-hero__snapshot"
            aria-label="Interior design delivery capabilities"
          >
            {[
              "Supplier Collections",
              "Project Deliveries",
              "White-Glove Handling",
              "Staged Installations",
            ].map((item, index) => (
              <div className="id-hero__snapshot-item" key={item}>
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

      <section className="id-overview">
        <div className="id-container id-overview__grid">
          <div className="id-overview__heading">
            <p className="id-eyebrow">Design Project Logistics</p>

            <h2>
              Every Delivery Reflects
              <span>
                Your Design Vision<i>.</i>
              </span>
            </h2>
          </div>

          <div className="id-overview__content">
            <p className="id-overview__lead">
              Successful interior projects depend on more than exceptional
              design. They require careful coordination, precise scheduling and
              professional furniture delivery.
            </p>

            <p>
              Ross Furniture Transport works alongside interior designers to
              coordinate supplier collections, staged deliveries and final site
              placement. From luxury residences and apartments to offices,
              hotels and commercial spaces, we help ensure every item arrives
              safely and at the right stage of the project.
            </p>

            <div className="id-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                We manage the transport behind the project so your team can
                remain focused on installation, presentation and bringing the
                final design together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT INTERIOR DESIGNERS NEED
      ===================================================== */}

      <section className="id-needs">
        <div className="id-container">
          <div className="id-section-header--split">
            <div>
              <p className="id-eyebrow">Project Delivery Essentials</p>

              <h2>
                What Interior Designers
                <span>
                  Need From Every Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="id-section-header__description">
              Interior projects require transport partners who understand
              timing, presentation, product protection and the importance of
              delivering premium furnishings in excellent condition.
            </p>
          </div>

          <div className="id-needs__grid">
            {designerNeeds.map((need) => (
              <article className="id-needs__card" key={need.number}>
                <span className="id-card-number">{need.number}</span>

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
          4. HOW ROSS SUPPORTS INTERIOR PROJECTS
      ===================================================== */}

      <section className="id-support">
        <div className="id-container">
          <div className="id-support__intro">
            <div>
              <p className="id-eyebrow id-eyebrow--light">
                The Ross Project Capability
              </p>

              <h2>
                Delivery That Supports
                <span>
                  Beautiful Spaces<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross provides coordinated transport solutions that help interior
              designers manage furniture movement across every stage of a
              residential or commercial project.
            </p>
          </div>

          <div className="id-support__grid">
            {designerSupport.map((item) => (
              <article className="id-support__item" key={item.number}>
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
          5. INTERIOR PROJECT DELIVERY PROCESS
      ===================================================== */}

      <section className="id-process">
        <div className="id-container">
          <div className="id-section-header--center">
            <p className="id-eyebrow">
              Interior Project Delivery Process
            </p>

            <h2>
              Coordinated From Collection
              <span>
                Through To Placement<i>.</i>
              </span>
            </h2>

            <p>
              Every delivery is planned around supplier readiness, project
              schedules, site access and final placement requirements.
            </p>
          </div>

          <div className="id-process__timeline">
            {designerProcess.map((step) => (
              <article className="id-process__step" key={step.number}>
                <div className="id-process__number">{step.number}</div>

                <div className="id-process__content">
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

      <section className="id-benefits">
        <div className="id-container id-benefits__grid">
          <div className="id-benefits__content">
            <p className="id-eyebrow">Commercial Benefits</p>

            <h2>
              Helping Designers
              <span>
                Deliver Excellence<i>.</i>
              </span>
            </h2>

            <p>
              Professional logistics support allows interior designers to focus
              on creating exceptional spaces while Ross manages the furniture
              transport behind the scenes.
            </p>
          </div>

          <div className="id-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="id-benefits__item" key={benefit}>
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

      <section className="id-related">
        <div className="id-container">
          <div className="id-section-header--split">
            <div>
              <p className="id-eyebrow">Related Industries</p>

              <h2>
                Transport Support Across
                <span>
                  Connected Project Sectors<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/production/industries"
              className="id-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="id-related__grid">
            {relatedIndustries.map((industry) => (
              <article
                className="id-related__card"
                key={industry.title}
              >
                <span className="id-related__number">
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