import type { ReactNode } from "react";

import "./Industries.css";

type Industry = {
  title: string;
  description: string;
  icon: ReactNode;
};

const industries: Industry[] = [
  {
    title: "Furniture Retailers",
    description:
      "Scheduled store replenishment, customer deliveries and stock transfers built around retail operations.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 31V21c0-5 4-9 9-9h6c3 0 5 2 5 5v14" />
        <path d="M51 31V21c0-5-4-9-9-9h-6c-3 0-5 2-5 5v14" />
        <path d="M14 29h36c5 0 9 4 9 9v7H5v-7c0-5 4-9 9-9Z" />
        <path d="M9 45v7M55 45v7M17 45v-8M47 45v-8" />
      </svg>
    ),
  },
  {
    title: "Bedding & Mattress Suppliers",
    description:
      "Reliable transport for mattresses, bedding products and bulky stock with careful handling throughout the journey.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 31h44v20H10z" />
        <path d="M14 31v-9c0-5 4-9 9-9h18c5 0 9 4 9 9v9" />
        <path d="M19 31v-6h11v6M34 31v-6h11v6" />
        <path d="M10 39h44M15 51v5M49 51v5" />
      </svg>
    ),
  },
  {
    title: "Furniture Manufacturers",
    description:
      "Efficient collections and deliveries that keep production schedules, warehouses and supply chains moving.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 54V25l13 8V21l14 10V17l21 13v24Z" />
        <path d="M15 42h7v7h-7zM28 42h7v7h-7zM41 42h7v7h-7z" />
        <path d="M8 54h48" />
      </svg>
    ),
  },
  {
    title: "Warehouses & Distribution Centres",
    description:
      "Seamless transfers between facilities with clear communication, reliable scheduling and coordinated collections.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M7 25 32 10l25 15v29H7Z" />
        <path d="M14 28h36v26H14z" />
        <path d="M20 34h8v8h-8zM36 34h8v8h-8z" />
        <path d="M20 46h8v8h-8zM36 46h8v8h-8z" />
      </svg>
    ),
  },
  {
    title: "Interior Designers",
    description:
      "Careful, customer-ready delivery for premium furniture, styled spaces and time-sensitive design projects.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M11 30h18M20 30v24M14 54h12" />
        <path d="m11 30 5-17h8l5 17" />
        <path d="M36 37v-6c0-4 3-7 7-7h5c4 0 7 3 7 7v6" />
        <path d="M34 37h23v11H34z" />
        <path d="M38 48v6M53 48v6" />
      </svg>
    ),
  },
  {
    title: "Appliance Retailers",
    description:
      "Secure commercial transport for bulky appliances, retail stock and scheduled customer deliveries.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="18" y="6" width="28" height="52" rx="3" />
        <path d="M18 30h28" />
        <path d="M24 15v6M24 37v6" />
        <path d="M24 58v2M40 58v2" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section
      className="ross-industries"
      aria-labelledby="ross-industries-heading"
    >
      <div className="ross-industries-container">
        <div className="ross-industries-introduction">
          <p className="ross-industries-eyebrow">
            Built for the Furniture Industry
          </p>

          <h2
            id="ross-industries-heading"
            className="ross-industries-title"
          >
            Commercial Transport
            <span>For Businesses Behind</span>
            <span>
              Every Delivery<i>.</i>
            </span>
          </h2>

          <p className="ross-industries-copy">
            From furniture retailers and bedding suppliers to manufacturers,
            warehouses and interior design teams, Ross Furniture Transport
            adapts to the way your business operates.
          </p>

          <div className="ross-industries-statement">
            <p>Different businesses.</p>
            <p>Different delivery pressures.</p>
            <strong>One dependable transport partner.</strong>
          </div>
        </div>

        <div
          className="ross-industries-list"
          aria-label="Industries supported by Ross Furniture Transport"
        >
          {industries.map((industry) => (
            <article className="ross-industry-item" key={industry.title}>
              <div className="ross-industry-icon" aria-hidden="true">
                {industry.icon}
              </div>

              <div className="ross-industry-content">
                <h3 className="ross-industry-title">
                  {industry.title}
                </h3>

                <p className="ross-industry-description">
                  {industry.description}
                </p>
              </div>

              <span
                className="ross-industry-accent"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}