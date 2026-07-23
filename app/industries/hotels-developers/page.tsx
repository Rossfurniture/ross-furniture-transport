import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ContactForm from "@/components/home/ContactForm";

import "./HotelsDevelopersPage.css";

export const metadata: Metadata = {
  title:
    "Hotel Furniture Delivery & Project Logistics | Ross Furniture Transport",
  description:
    "Commercial furniture transport and project logistics for hotels, apartments, retirement villages, build-to-rent developments and accommodation fit-outs.",
};

const projectNeeds = [
  {
    number: "01",
    title: "Project Scheduling",
    description:
      "Furniture deliveries must align with construction programs, fit-out stages, access windows and practical completion deadlines.",
  },
  {
    number: "02",
    title: "Site Coordination",
    description:
      "Crews must work effectively with builders, project managers, contractors, loading docks and site supervisors.",
  },
  {
    number: "03",
    title: "Furniture Protection",
    description:
      "Guestroom, apartment and communal-area furniture must remain protected throughout transport, handling and placement.",
  },
  {
    number: "04",
    title: "Installation Sequencing",
    description:
      "Deliveries must follow room schedules, floor allocations, building zones and installation priorities.",
  },
  {
    number: "05",
    title: "Scalable Capacity",
    description:
      "Transport support must adapt to staged rollouts, large-volume projects and changing construction requirements.",
  },
  {
    number: "06",
    title: "Clear Communication",
    description:
      "Project teams need dependable updates, practical coordination and visibility throughout every delivery stage.",
  },
];

const projectSupport = [
  {
    number: "01",
    title: "Staged Project Deliveries",
    description:
      "Planned furniture deliveries coordinated around construction stages, floor releases and installation schedules.",
  },
  {
    number: "02",
    title: "Warehouse & Supplier Collections",
    description:
      "Coordinated collections from manufacturers, suppliers, warehouses and commercial distribution facilities.",
  },
  {
    number: "03",
    title: "Room & Floor Distribution",
    description:
      "Furniture delivered and allocated according to room schedules, floor plans and designated project zones.",
  },
  {
    number: "04",
    title: "Commercial Furniture Placement",
    description:
      "Careful placement of furniture within guestrooms, apartments, common areas and operational spaces.",
  },
  {
    number: "05",
    title: "Fit-Out Logistics Support",
    description:
      "Transport support for furniture fit-outs, refurbishments, new developments and staged accommodation openings.",
  },
  {
    number: "06",
    title: "Flexible Project Capacity",
    description:
      "Additional transport capability for high-volume phases, compressed programs and changing project demand.",
  },
];

const deliveryProcess = [
  {
    number: "01",
    title: "Project Requirements",
    description:
      "We confirm project locations, furniture volumes, staging requirements, access conditions and delivery schedules.",
  },
  {
    number: "02",
    title: "Logistics Planning",
    description:
      "Collections, routes, site access, unloading zones, floor allocations and delivery sequencing are reviewed.",
  },
  {
    number: "03",
    title: "Collection & Preparation",
    description:
      "Furniture is collected, checked and loaded carefully according to the agreed project schedule.",
  },
  {
    number: "04",
    title: "Site Delivery",
    description:
      "Our crews coordinate with site representatives to unload, distribute and place furniture professionally.",
  },
  {
    number: "05",
    title: "Project Completion",
    description:
      "Each delivery stage is completed according to the room schedule, placement instructions and site process.",
  },
];

const commercialBenefits = [
  "Stronger coordination across project stakeholders",
  "Reduced pressure on builders and site teams",
  "Reliable support for staged furniture installations",
  "Lower risk of furniture damage and project delays",
  "Professional delivery crews representing your project",
  "Flexible capacity for changing construction programs",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Interior Designers",
    description:
      "Coordinated furniture delivery for commercial interiors, accommodation projects and staged installations.",
    href: "/industries/interior-designers",
  },
  {
    number: "02",
    title: "Furniture Manufacturers",
    description:
      "Commercial transport connecting manufacturers with project sites, warehouses and development partners.",
    href: "/industries/furniture-manufacturers",
  },
  {
    number: "03",
    title: "Warehouses & Distributors",
    description:
      "Dependable furniture movements between distribution facilities, suppliers and commercial project sites.",
    href: "/industries/warehouses-distributors",
  },
  {
    number: "04",
    title: "Government & Education",
    description:
      "Planned furniture logistics for institutional facilities, public buildings and large-scale fit-outs.",
    href: "/industries/government-education",
  },
];

export default function HotelsDevelopersPage() {
  return (
    <main className="hotels-developers-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section className="hd-hero" aria-labelledby="hotels-developers-title">
        <Image
          src="/services/hotels-developers-hero.webp"
          alt="Commercial furniture delivery for a hotel and property development project"
          fill
          priority
          sizes="100vw"
          className="hd-hero__image"
        />

        <div className="hd-hero__overlay" />

        <div className="hd-hero__container">
          <div className="hd-hero__content">
            <p className="hd-eyebrow hd-eyebrow--light">
              Hotels &amp; Developers
            </p>

            <h1 id="hotels-developers-title">
              Furniture Project Logistics
              <span>Built Around Your</span>
              <span>
                Development Program<i>.</i>
              </span>
            </h1>

            <p className="hd-hero__description">
              Coordinate furniture transport, staged site deliveries and
              commercial installations for hotels, apartments, retirement
              villages, build-to-rent developments and accommodation projects.
            </p>

            <div className="hd-hero__actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <div
            className="hd-hero__snapshot"
            aria-label="Hotel and property development delivery capabilities"
          >
            {[
              "Staged Project Deliveries",
              "Furniture Fit-Outs",
              "Room & Floor Distribution",
              "Commercial Installations",
            ].map((item, index) => (
              <div className="hd-hero__snapshot-item" key={item}>
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

      <section className="hd-overview">
        <div className="hd-container hd-overview__grid">
          <div className="hd-overview__heading">
            <p className="hd-eyebrow">Project Delivery Partnership</p>

            <h2>
              Furniture Logistics
              <span>
                That Keeps Projects Moving<i>.</i>
              </span>
            </h2>
          </div>

          <div className="hd-overview__content">
            <p className="hd-overview__lead">
              For hotels, apartments and large accommodation developments,
              furniture delivery is a critical part of the construction and
              fit-out program.
            </p>

            <p>
              Delayed collections, uncoordinated site arrivals or damaged
              furniture can disrupt contractors, affect installation schedules
              and place unnecessary pressure on project teams. Ross Furniture
              Transport provides dependable commercial logistics support
              designed around project timelines, site requirements and staged
              delivery programs.
            </p>

            <div className="hd-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                From supplier collections and warehouse movements to room-by-room
                distribution and final furniture placement, every delivery is
                coordinated to support the wider construction and installation
                program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT HOTELS & DEVELOPERS NEED
      ===================================================== */}

      <section className="hd-needs">
        <div className="hd-container">
          <div className="hd-section-header--split">
            <div>
              <p className="hd-eyebrow">Project Logistics Essentials</p>

              <h2>
                What Project Teams
                <span>
                  Need From Every Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="hd-section-header__description">
              Commercial accommodation delivery involves more than transporting
              furniture to a building. It requires disciplined coordination,
              staged planning and an understanding of active project
              environments.
            </p>
          </div>

          <div className="hd-needs__grid">
            {projectNeeds.map((need) => (
              <article className="hd-needs__card" key={need.number}>
                <span className="hd-card-number">{need.number}</span>

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
          4. HOW ROSS SUPPORTS PROJECT OPERATIONS
      ===================================================== */}

      <section className="hd-support">
        <div className="hd-container">
          <div className="hd-support__intro">
            <div>
              <p className="hd-eyebrow hd-eyebrow--light">
                The Ross Project Capability
              </p>

              <h2>
                Delivery Support That Fits
                <span>
                  Your Construction Program<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross works with project managers, developers, builders,
              procurement teams and suppliers to coordinate furniture movements
              around active sites and changing delivery schedules.
            </p>
          </div>

          <div className="hd-support__grid">
            {projectSupport.map((item) => (
              <article className="hd-support__item" key={item.number}>
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
          5. PROJECT DELIVERY PROCESS
      ===================================================== */}

      <section className="hd-process">
        <div className="hd-container">
          <div className="hd-section-header--center">
            <p className="hd-eyebrow">Project Delivery Process</p>

            <h2>
              A Coordinated Process
              <span>
                From Supplier to Site Completion<i>.</i>
              </span>
            </h2>

            <p>
              Every delivery is planned around the project schedule, furniture
              quantities, site access, installation sequence and placement
              requirements.
            </p>
          </div>

          <div className="hd-process__timeline">
            {deliveryProcess.map((step) => (
              <article className="hd-process__step" key={step.number}>
                <div className="hd-process__number">{step.number}</div>

                <div className="hd-process__content">
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

      <section className="hd-benefits">
        <div className="hd-container hd-benefits__grid">
          <div className="hd-benefits__content">
            <p className="hd-eyebrow">Commercial Benefits</p>

            <h2>
              Better Logistics Support
              <span>
                Better Project Outcomes<i>.</i>
              </span>
            </h2>

            <p>
              The right furniture transport partner helps project teams maintain
              momentum, coordinate contractors and complete installations with
              fewer avoidable disruptions.
            </p>
          </div>

          <div className="hd-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="hd-benefits__item" key={benefit}>
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

      <section className="hd-related">
        <div className="hd-container">
          <div className="hd-section-header--split">
            <div>
              <p className="hd-eyebrow">Related Industries</p>

              <h2>
                Commercial Delivery Support
                <span>
                  Across Connected Industries<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/industries"
              className="hd-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="hd-related__grid">
            {relatedIndustries.map((industry) => (
              <article className="hd-related__card" key={industry.title}>
                <span className="hd-related__number">{industry.number}</span>

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