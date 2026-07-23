import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";

import "./AboutPage.css";

const capabilities = [
  {
    number: "01",
    title: "Commercial Furniture Expertise",
    description:
      "Furniture transport is our core business. We understand the handling, timing and coordination required for commercial furniture deliveries.",
  },
  {
    number: "02",
    title: "Direct Communication",
    description:
      "Clients deal directly with an experienced transport professional who understands the delivery requirements from collection through to completion.",
  },
  {
    number: "03",
    title: "Flexible Delivery Support",
    description:
      "From scheduled retail deliveries to warehouse transfers and project-based transport, our service adapts around the needs of your operation.",
  },
  {
    number: "04",
    title: "Professional Handling",
    description:
      "Furniture is carefully loaded, secured, transported and delivered using suitable equipment and proven handling processes.",
  },
];

const standards = [
  "Careful furniture handling",
  "Reliable delivery scheduling",
  "Clear operational communication",
  "Commercial site awareness",
  "Flexible transport coordination",
  "Professional presentation",
];

const industries = [
  {
    number: "01",
    label: "Furniture Retailers",
  },
  {
    number: "02",
    label: "Furniture Manufacturers",
  },
  {
    number: "03",
    label: "Bedding & Mattress Stores",
  },
  {
    number: "04",
    label: "Appliance Retailers",
  },
  {
    number: "05",
    label: "Interior Designers",
  },
  {
    number: "06",
    label: "Warehouses & Distributors",
  },
  {
    number: "07",
    label: "Hotels & Developers",
  },
  {
    number: "08",
    label: "Government & Education",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-background" />
        <div className="about-hero-overlay" />

        <div className="about-container about-hero-container">
          <div className="about-hero-content">
            <p className="about-eyebrow">About Ross</p>

            <h1>
              Commercial furniture transport built around reliability.
            </h1>

            <p className="about-hero-description">
              Ross Furniture Transport supports businesses with dependable,
              professional furniture delivery solutions designed for demanding
              commercial environments.
            </p>

            <div className="about-hero-actions">
              <RequestDeliveryQuote />

              <Link
                href="/production/services"
                className="about-secondary-link"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="about-hero-summary">
            <span className="about-hero-summary-number">10+</span>

            <div>
              <strong>Years of transport experience</strong>

              <p>
                Supporting furniture businesses, warehouses and commercial
                delivery operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-introduction">
        <div className="about-container about-introduction-grid">
          <div className="about-section-heading">
            <p className="about-eyebrow">Who We Are</p>

            <h2>
              A focused transport partner for the furniture industry.
            </h2>
          </div>

          <div className="about-introduction-content">
            <p className="about-introduction-lead">
              Ross Furniture Transport was built to provide businesses with a
              more dependable and professional approach to commercial
              furniture delivery.
            </p>

            <p>
              We work with furniture retailers, manufacturers, warehouses,
              designers, developers and commercial organisations that need
              their products collected, transported and delivered with care.
            </p>

            <p>
              Unlike a general removalist service, our operation is focused on
              commercial furniture logistics. Every delivery is approached
              with an understanding of product handling, site access, delivery
              timing and the importance of representing our clients
              professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="about-purpose">
        <div className="about-container about-purpose-grid">
          <article className="about-purpose-card about-purpose-card-primary">
            <p className="about-purpose-label">Our Purpose</p>

            <h2>
              To make commercial furniture delivery more reliable, organised
              and professional.
            </h2>
          </article>

          <article className="about-purpose-card">
            <p className="about-purpose-label">Our Approach</p>

            <p>
              We combine experienced handling, clear communication and
              practical delivery coordination to help businesses move
              furniture efficiently between suppliers, warehouses, stores,
              project sites and customers.
            </p>
          </article>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="about-container">
          <div className="about-capabilities-header">
            <div>
              <p className="about-eyebrow">Why Ross</p>

              <h2>
                Commercial delivery support businesses can depend on.
              </h2>
            </div>

            <p>
              Our service is built around the standards commercial clients
              expect: reliability, communication, careful handling and
              flexibility.
            </p>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="about-capability-card"
              >
                <span>{capability.number}</span>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-standards">
        <div className="about-container about-standards-grid">
          <div className="about-standards-content">
            <p className="about-eyebrow">Our Delivery Standards</p>

            <h2>
              Every delivery reflects the business we represent.
            </h2>

            <p>
              We understand that when we deliver on behalf of a retailer,
              manufacturer or commercial supplier, our team becomes an
              extension of their business.
            </p>

            <p>
              That is why every job is managed with care, professionalism and
              attention to the final delivery experience.
            </p>
          </div>

          <div className="about-standards-list">
            {standards.map((standard, index) => (
              <div key={standard} className="about-standard-item">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <p>{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-industries">
        <div className="about-container">
          <div className="about-industries-header">
            <div>
              <p className="about-eyebrow">Who We Support</p>

              <h2>
                Built for furniture businesses and commercial operations.
              </h2>
            </div>

            <Link
              href="/production/industries"
              className="about-text-link"
            >
              View All Industries
            </Link>
          </div>

          <div className="about-industries-grid">
            {industries.map((industry) => (
              <div
                key={industry.number}
                className="about-industry-item"
              >
                <span>{industry.number}</span>

                <p>{industry.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="about-container about-closing-inner">
          <p className="about-eyebrow">The Ross Commitment</p>

          <h2>
            Reliable transport. Professional handling. Clear communication.
          </h2>

          <p className="about-closing-description">
            Whether you require regular delivery support or transport for a
            specific commercial project, Ross Furniture Transport provides a
            service built around your operation.
          </p>

          <RequestDeliveryQuote />
        </div>
      </section>
    </main>
  );
}