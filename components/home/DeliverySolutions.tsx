import Image from "next/image";
import Link from "next/link";

import "./DeliverySolutions.css";

type DeliverySolution = {
  number: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const deliverySolutions: DeliverySolution[] = [
  {
    number: "01",
    title: "Furniture Retail Deliveries",
    description:
      "Scheduled store deliveries, customer drop-offs and stock transfers designed to keep furniture retailers moving efficiently.",
    href: "/services/furniture-retail-deliveries",
    imageSrc: "/images/retail-delivery.webp",
    imageAlt:
      "Ross Furniture Transport white commercial truck outside a furniture retailer",
  },
  {
    number: "02",
    title: "Warehouse Distribution",
    description:
      "Reliable warehouse-to-warehouse transfers, bulk distribution and stock movements coordinated around your operations.",
    href: "/services/warehouse-distribution",
    imageSrc: "/images/warehouse-distribution.webp",
    imageAlt:
      "Ross Furniture Transport truck being loaded inside a commercial warehouse",
  },
  {
    number: "03",
    title: "Interstate Furniture Transport",
    description:
      "Professional interstate furniture transport with careful handling, dependable scheduling and clear communication from collection to delivery.",
    href: "/services/interstate-furniture-transport",
    imageSrc: "/images/interstate-furniture-transport.webp",
    imageAlt:
      "Ross Furniture Transport white commercial truck travelling interstate",
  },
];

export default function DeliverySolutions() {
  return (
    <section
      className="ross-delivery-solutions"
      aria-labelledby="delivery-solutions-heading"
    >
      <div className="ross-delivery-solutions-container">
        <header className="ross-delivery-solutions-header">
          <div className="ross-delivery-solutions-heading-column">
            <p className="ross-delivery-solutions-eyebrow">
              Commercial Delivery Solutions
            </p>

<h2
  id="delivery-solutions-heading"
  className="ross-delivery-solutions-title"
>
  <span>Built for Every Stage</span>
  <span>
    of the Furniture Supply Chain<i>.</i>
  </span>
</h2>
          </div>

          <div className="ross-delivery-solutions-intro-column">
            <p className="ross-delivery-solutions-intro">
              From warehouse distribution to premium customer deliveries, Ross
              Furniture Transport provides dependable commercial transport
              solutions built around Australian furniture businesses.
            </p>

            <div
              className="ross-delivery-solutions-assurances"
              aria-label="Commercial delivery capabilities"
            >
              <div className="ross-delivery-assurance">
                <span
                  className="ross-delivery-assurance-mark"
                  aria-hidden="true"
                >
                  AU
                </span>

                <span className="ross-delivery-assurance-text">
                  Australia Wide
                  <strong>Coverage</strong>
                </span>
              </div>

              <div className="ross-delivery-assurance">
                <span
                  className="ross-delivery-assurance-mark"
                  aria-hidden="true"
                >
                  B2B
                </span>

                <span className="ross-delivery-assurance-text">
                  Commercial
                  <strong>Specialists</strong>
                </span>
              </div>

              <div className="ross-delivery-assurance">
                <span
                  className="ross-delivery-assurance-mark"
                  aria-hidden="true"
                >
                  24
                </span>

                <span className="ross-delivery-assurance-text">
                  Scheduled
                  <strong>Deliveries</strong>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="ross-delivery-solutions-list">
        {deliverySolutions.map((solution, index) => (
          <article
            className={`ross-delivery-solution ${
              index % 2 !== 0 ? "ross-delivery-solution--reverse" : ""
            }`}
            key={solution.title}
          >
            <div className="ross-delivery-solution-image">
              <Image
                src={solution.imageSrc}
                alt={solution.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 54vw"
                className="ross-delivery-solution-photo"
              />

              <span
                className="ross-delivery-solution-image-overlay"
                aria-hidden="true"
              />
            </div>

            <div className="ross-delivery-solution-content">
              <div className="ross-delivery-solution-content-inner">
                <span className="ross-delivery-solution-number">
                  {solution.number}
                </span>

                <span
                  className="ross-delivery-solution-line"
                  aria-hidden="true"
                />

                <h3 className="ross-delivery-solution-title">
                  {solution.title}
                </h3>

                <p className="ross-delivery-solution-description">
                  {solution.description}
                </p>

                <Link
                  className="ross-delivery-solution-link"
                  href={solution.href}
                  aria-label={`Learn more about ${solution.title}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="ross-delivery-solutions-footer">
        <div className="ross-delivery-solutions-footer-inner">
          <div>
            <p className="ross-delivery-solutions-footer-eyebrow">
              End-to-End Commercial Transport
            </p>

            <h3 className="ross-delivery-solutions-footer-title">
              Explore our complete range of delivery solutions.
            </h3>
          </div>

          <Link
            href="/services"
            className="ross-delivery-solutions-button"
          >
            View All Delivery Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}