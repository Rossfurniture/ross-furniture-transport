import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ContactForm from "@/components/home/ContactForm";

import "./GovernmentEducationPage.css";

export const metadata: Metadata = {
  title:
    "Furniture Transport for Government & Education | Ross Furniture Transport",
  description:
    "Commercial furniture transport for government departments, schools, universities and public facilities, including scheduled deliveries, relocations, fit-outs and project logistics.",
};

const sectorNeeds = [
  {
    number: "01",
    title: "Strict Scheduling",
    description:
      "Deliveries must align with approved access times, project programs, school calendars and operational requirements.",
  },
  {
    number: "02",
    title: "Site Coordination",
    description:
      "Government and education sites often require clear communication with facilities teams, contractors and project managers.",
  },
  {
    number: "03",
    title: "Careful Handling",
    description:
      "Furniture, equipment and fit-out items must be protected throughout collection, transport and final placement.",
  },
  {
    number: "04",
    title: "Professional Crews",
    description:
      "Delivery teams must operate safely, respectfully and professionally within active public and institutional environments.",
  },
  {
    number: "05",
    title: "Flexible Capacity",
    description:
      "Projects may involve single-site deliveries, multi-location rollouts, staged installations or large-volume requirements.",
  },
  {
    number: "06",
    title: "Clear Communication",
    description:
      "Reliable updates help procurement, facilities and project teams manage delivery progress and site readiness.",
  },
];

const sectorSupport = [
  {
    number: "01",
    title: "School & Campus Deliveries",
    description:
      "Scheduled furniture delivery for schools, universities, TAFEs, training facilities and campus environments.",
  },
  {
    number: "02",
    title: "Government Office Fit-Outs",
    description:
      "Coordinated transport for office furniture, workstations, storage systems and public-sector fit-out projects.",
  },
  {
    number: "03",
    title: "Multi-Site Rollouts",
    description:
      "Planned delivery support across multiple departments, campuses, offices and regional facilities.",
  },
  {
    number: "04",
    title: "Furniture Relocations",
    description:
      "Professional movement of commercial furniture between buildings, departments, campuses and storage facilities.",
  },
  {
    number: "05",
    title: "Warehouse & Supplier Collections",
    description:
      "Coordinated collections from manufacturers, suppliers, warehouses and procurement partners.",
  },
  {
    number: "06",
    title: "Staged Project Deliveries",
    description:
      "Flexible transport support aligned with construction programs, installation stages and approved access windows.",
  },
];

const deliveryProcess = [
  {
    number: "01",
    title: "Project Requirements",
    description:
      "We confirm locations, furniture volumes, access conditions, schedules, contacts and handling requirements.",
  },
  {
    number: "02",
    title: "Site Coordination",
    description:
      "Delivery windows, loading zones, security procedures, building access and placement instructions are reviewed.",
  },
  {
    number: "03",
    title: "Collection & Loading",
    description:
      "Furniture and equipment are checked, protected and loaded using appropriate commercial handling equipment.",
  },
  {
    number: "04",
    title: "Professional Delivery",
    description:
      "Our crew completes each movement safely and professionally within the agreed site and project requirements.",
  },
  {
    number: "05",
    title: "Delivery Completion",
    description:
      "Items are handed over or placed according to approved instructions, with completion communicated to the relevant team.",
  },
];

const commercialBenefits = [
  "Reliable delivery aligned with project schedules",
  "Reduced pressure on facilities and procurement teams",
  "Professional coordination across active sites",
  "Lower risk of avoidable furniture damage",
  "Flexible support for staged and multi-site projects",
  "Consistent service across public-sector environments",
];

const relatedIndustries = [
  {
    number: "01",
    title: "Hotels & Developers",
    description:
      "Project logistics for developments, accommodation facilities and staged furniture installations.",
    href: "/production/industries/hotels-developers",
  },
  {
    number: "02",
    title: "Interior Designers",
    description:
      "Coordinated furniture delivery for commercial interiors, fit-outs and installation programs.",
    href: "/production/industries/interior-designers",
  },
  {
    number: "03",
    title: "Warehouses & Distributors",
    description:
      "Reliable furniture movements between suppliers, warehouses and institutional delivery sites.",
    href: "/production/industries/warehouses-distributors",
  },
  {
    number: "04",
    title: "Furniture Manufacturers",
    description:
      "Transport connecting manufacturers with government, education and commercial project locations.",
    href: "/production/industries/furniture-manufacturers",
  },
];

export default function GovernmentEducationPage() {
  return (
    <main className="government-education-page">
      {/* =====================================================
          1. INDUSTRY HERO
      ===================================================== */}

      <section
        className="ge-hero"
        aria-labelledby="government-education-title"
      >
        <Image
          src="/services/government-education-hero.webp"
          alt="Commercial furniture delivery for a government or education facility"
          fill
          priority
          sizes="100vw"
          className="ge-hero__image"
        />

        <div className="ge-hero__overlay" />

        <div className="ge-hero__container">
          <div className="ge-hero__content">
            <p className="ge-eyebrow ge-eyebrow--light">
              Government &amp; Education
            </p>

            <h1 id="government-education-title">
              Furniture Logistics Solutions
              <span>Built Around Your</span>
              <span>
                Project Requirements<i>.</i>
              </span>
            </h1>

            <p className="ge-hero__description">
              Support government facilities, schools, universities and public
              projects with professional furniture transport designed around
              approved schedules, site access and operational requirements.
            </p>

            <div className="ge-hero__actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <div
            className="ge-hero__snapshot"
            aria-label="Government and education delivery capabilities"
          >
            {[
              "School Deliveries",
              "Office Fit-Outs",
              "Multi-Site Rollouts",
              "Project Logistics",
            ].map((item, index) => (
              <div className="ge-hero__snapshot-item" key={item}>
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

      <section className="ge-overview">
        <div className="ge-container ge-overview__grid">
          <div className="ge-overview__heading">
            <p className="ge-eyebrow">Public-Sector Logistics Partnership</p>

            <h2>
              Your Delivery Program
              <span>
                Depends on Reliable Coordination<i>.</i>
              </span>
            </h2>
          </div>

          <div className="ge-overview__content">
            <p className="ge-overview__lead">
              Government and education projects require dependable transport,
              clear communication and careful site coordination.
            </p>

            <p>
              Delayed deliveries, poor handling or missed access windows can
              interrupt fit-outs, relocations and operational programs. Ross
              Furniture Transport provides professional commercial delivery
              support that helps procurement, facilities and project teams keep
              furniture movements organised, controlled and on schedule.
            </p>

            <div className="ge-overview__statement">
              <span>Ross Furniture Transport</span>

              <p>
                From supplier collections and campus deliveries to office
                fit-outs and multi-site rollouts, every movement is planned
                around the practical requirements of your facility and project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHAT GOVERNMENT & EDUCATION CLIENTS NEED
      ===================================================== */}

      <section className="ge-needs">
        <div className="ge-container">
          <div className="ge-section-header--split">
            <div>
              <p className="ge-eyebrow">Institutional Logistics Essentials</p>

              <h2>
                What Government &amp; Education Teams
                <span>
                  Need From Every Delivery<i>.</i>
                </span>
              </h2>
            </div>

            <p className="ge-section-header__description">
              Public-sector and education logistics require more than transport
              capacity. They demand reliable planning, professional crews and
              clear coordination across active sites and project teams.
            </p>
          </div>

          <div className="ge-needs__grid">
            {sectorNeeds.map((need) => (
              <article className="ge-needs__card" key={need.number}>
                <span className="ge-card-number">{need.number}</span>

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
          4. HOW ROSS SUPPORTS GOVERNMENT & EDUCATION
      ===================================================== */}

      <section className="ge-support">
        <div className="ge-container">
          <div className="ge-support__intro">
            <div>
              <p className="ge-eyebrow ge-eyebrow--light">
                The Ross Public-Sector Capability
              </p>

              <h2>
                Delivery Support That Fits
                <span>
                  Your Facility or Project<i>.</i>
                </span>
              </h2>
            </div>

            <p>
              Ross works around the practical requirements of government,
              education and institutional environments, helping facilities,
              procurement and project teams coordinate furniture deliveries
              safely and professionally.
            </p>
          </div>

          <div className="ge-support__grid">
            {sectorSupport.map((item) => (
              <article className="ge-support__item" key={item.number}>
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
          5. GOVERNMENT & EDUCATION DELIVERY PROCESS
      ===================================================== */}

      <section className="ge-process">
        <div className="ge-container">
          <div className="ge-section-header--center">
            <p className="ge-eyebrow">
              Government &amp; Education Delivery Process
            </p>

            <h2>
              A Coordinated Process
              <span>
                From Planning to Completion<i>.</i>
              </span>
            </h2>

            <p>
              Every movement is planned around approved schedules, site access,
              building conditions, security procedures and placement
              requirements.
            </p>
          </div>

          <div className="ge-process__timeline">
            {deliveryProcess.map((step) => (
              <article className="ge-process__step" key={step.number}>
                <div className="ge-process__number">{step.number}</div>

                <div className="ge-process__content">
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

      <section className="ge-benefits">
        <div className="ge-container ge-benefits__grid">
          <div className="ge-benefits__content">
            <p className="ge-eyebrow">Commercial Benefits</p>

            <h2>
              Better Delivery Support
              <span>
                Better Project Outcomes<i>.</i>
              </span>
            </h2>

            <p>
              The right logistics partner helps government and education teams
              manage furniture movements efficiently while reducing pressure on
              facilities, procurement and project staff.
            </p>
          </div>

          <div className="ge-benefits__list">
            {commercialBenefits.map((benefit, index) => (
              <div className="ge-benefits__item" key={benefit}>
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

      <section className="ge-related">
        <div className="ge-container">
          <div className="ge-section-header--split">
            <div>
              <p className="ge-eyebrow">Related Industries</p>

              <h2>
                Commercial Delivery Support
                <span>
                  Across Connected Industries<i>.</i>
                </span>
              </h2>
            </div>

            <Link
              href="/production/industries"
              className="ge-related__all-link"
            >
              Explore All Industries
            </Link>
          </div>

          <div className="ge-related__grid">
            {relatedIndustries.map((industry) => (
              <article className="ge-related__card" key={industry.title}>
                <span className="ge-related__number">{industry.number}</span>

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