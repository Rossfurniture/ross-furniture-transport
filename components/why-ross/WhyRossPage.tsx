import Image from "next/image";
import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutionsBlue from "@/components/shared/buttons/ExploreDeliverySolutionsBlue";

import "./WhyRossPage.css";

type CapabilityRow = {
  need: string;
  retailers?: boolean;
  manufacturers?: boolean;
  bedding?: boolean;
  appliances?: boolean;
  designers?: boolean;
  warehouses?: boolean;
  hotels?: boolean;
  government?: boolean;
};

type Reason = {
  number: string;
  title: string;
  description: string;
};

type Standard = {
  number: string;
  title: string;
  description: string;
};

type ReachStat = {
  icon: string;
  value: string;
  label: string;
};

const capabilityRows: CapabilityRow[] = [
  {
    need: "Store Replenishment",
    retailers: true,
    bedding: true,
    warehouses: true,
    hotels: true,
  },
  {
    need: "Warehouse Collections",
    retailers: true,
    manufacturers: true,
    appliances: true,
    designers: true,
    warehouses: true,
    government: true,
  },
  {
    need: "Customer Deliveries",
    retailers: true,
    manufacturers: true,
    bedding: true,
    appliances: true,
    designers: true,
    hotels: true,
    government: true,
  },
  {
    need: "Interstate Transport",
    bedding: true,
    designers: true,
    warehouses: true,
    hotels: true,
    government: true,
  },
  {
    need: "White Glove Delivery",
    retailers: true,
    manufacturers: true,
    bedding: true,
    appliances: true,
    designers: true,
    warehouses: true,
    hotels: true,
    government: true,
  },
  {
    need: "Project Delivery",
    bedding: true,
    designers: true,
    warehouses: true,
    hotels: true,
    government: true,
  },
  {
    need: "Scheduled Delivery Runs",
    manufacturers: true,
    appliances: true,
    designers: true,
    warehouses: true,
    hotels: true,
    government: true,
  },
  {
    need: "Multi-Location Distribution",
    retailers: true,
    manufacturers: true,
    warehouses: true,
    hotels: true,
    government: true,
  },
];

const reachStats: ReachStat[] = [
  {
    icon: "/icons/delivery-locations.svg",
    value: "1000+",
    label: "Delivery Locations",
  },
  {
    icon: "/icons/key-industries.svg",
    value: "8",
    label: "Key Industries",
  },
  {
    icon: "/icons/dedicated-commercial-support.svg",
    value: "Dedicated",
    label: "Commercial Support",
  },
  {
    icon: "/icons/flexible-delivery-capacity.svg",
    value: "Flexible",
    label: "Delivery Capacity",
  },
];

const reasons: Reason[] = [
  {
    number: "01",
    title: "Commercial Furniture Specialists",
    description:
      "Our work is built around furniture retailers, manufacturers, warehouses, designers and commercial projects—not residential removals.",
  },
  {
    number: "02",
    title: "Reliable Delivery Coordination",
    description:
      "Collections, delivery windows, site access and customer requirements are coordinated carefully before every movement.",
  },
  {
    number: "03",
    title: "Professional Furniture Handling",
    description:
      "Furniture is loaded, transported and delivered with the care required for retail stock, project pieces and customer orders.",
  },
  {
    number: "04",
    title: "Flexible Commercial Capacity",
    description:
      "From scheduled delivery runs to project-based movements, Ross adapts transport support around changing commercial demand.",
  },
  {
    number: "05",
    title: "Clear Business Communication",
    description:
      "Clients receive practical updates and direct communication throughout collections, transport and final delivery.",
  },
  {
    number: "06",
    title: "Metropolitan To Interstate Reach",
    description:
      "Ross supports connected metropolitan, regional and interstate furniture movements through one dependable delivery partner.",
  },
];

const standards: Standard[] = [
  {
    number: "01",
    title: "Prepared Before Collection",
    description:
      "Delivery requirements, site access, furniture type and scheduling details are reviewed before the job begins.",
  },
  {
    number: "02",
    title: "Protected During Transport",
    description:
      "Furniture is positioned, secured and handled to reduce unnecessary movement and transport-related damage.",
  },
  {
    number: "03",
    title: "Professional At Every Site",
    description:
      "Ross represents your business professionally at warehouses, stores, commercial sites and customer locations.",
  },
  {
    number: "04",
    title: "Accountable Through Completion",
    description:
      "The job remains actively coordinated through collection, transport, delivery and final completion.",
  },
];

function MatrixCheck({ active }: { active?: boolean }) {
  return (
    <span
      className={
        active
          ? "why-ross-matrix-check why-ross-matrix-check-active"
          : "why-ross-matrix-check"
      }
      aria-label={active ? "Supported" : "Not listed"}
    >
      {active ? "✓" : ""}
    </span>
  );
}

export default function WhyRossPage() {
  return (
    <main className="why-ross-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="why-ross-hero">
        <div className="why-ross-hero-overlay" />

        <div className="why-ross-container why-ross-hero-inner">
          <div className="why-ross-hero-content">
            <span className="why-ross-eyebrow">WHY ROSS</span>

            <h1>
              Why Australian Businesses Choose Ross
              <span className="why-ross-red-dot">.</span>
            </h1>

            <p>
              Commercial furniture transport backed by careful coordination,
              professional handling and dependable delivery support across
              metropolitan, regional and interstate routes.
            </p>

            <div className="why-ross-hero-buttons">
              <RequestDeliveryQuote />
              <ExploreDeliverySolutionsBlue />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY MATRIX
      ====================================================== */}

      <section className="why-ross-matrix-section">
        <div className="why-ross-container">
          <div className="why-ross-section-header">
            <span className="why-ross-section-label">
              OUR COMMERCIAL CAPABILITY MATRIX
            </span>

            <h2>Tailored Support For Industry-Specific Needs.</h2>

            <p>
              Ross supports the different transport requirements of furniture,
              retail, warehousing, project and institutional clients through
              flexible commercial delivery solutions.
            </p>
          </div>

          <div className="why-ross-matrix-wrap">
            <table className="why-ross-matrix">
              <thead>
                <tr>
                  <th>Industry Need</th>
                  <th>Retailers</th>
                  <th>Manufacturers</th>
                  <th>Bedding Stores</th>
                  <th>Appliance Retailers</th>
                  <th>Interior Designers</th>
                  <th>Warehouses &amp; Distributors</th>
                  <th>Hotels &amp; Developers</th>
                  <th>Government &amp; Education</th>
                </tr>
              </thead>

              <tbody>
                {capabilityRows.map((row) => (
                  <tr key={row.need}>
                    <td>{row.need}</td>

                    <td>
                      <MatrixCheck active={row.retailers} />
                    </td>

                    <td>
                      <MatrixCheck active={row.manufacturers} />
                    </td>

                    <td>
                      <MatrixCheck active={row.bedding} />
                    </td>

                    <td>
                      <MatrixCheck active={row.appliances} />
                    </td>

                    <td>
                      <MatrixCheck active={row.designers} />
                    </td>

                    <td>
                      <MatrixCheck active={row.warehouses} />
                    </td>

                    <td>
                      <MatrixCheck active={row.hotels} />
                    </td>

                    <td>
                      <MatrixCheck active={row.government} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUSTRALIA-WIDE INDUSTRY REACH
      ====================================================== */}

      <section className="why-ross-reach">
        <div className="why-ross-container why-ross-reach-grid">
          <div className="why-ross-reach-map">
            <Image
              src="/backgrounds/why-ross-australia-delivery-network-map.webp"
              alt="Ross Furniture Transport Australia-wide delivery network"
              width={700}
              height={700}
              sizes="(max-width: 820px) 300px, (max-width: 1024px) 320px, 380px"
            />
          </div>

          <div className="why-ross-reach-content">
            <span className="why-ross-section-label why-ross-section-label-light">
              INDUSTRIES ACROSS AUSTRALIA
            </span>

            <h2>
              One Delivery Partner.
              <br />
              Eight Industries.
              <br />
              Australia Wide
              <span className="why-ross-red-dot">.</span>
            </h2>
          </div>

          <div className="why-ross-reach-stats">
            {reachStats.map((stat) => (
              <article className="why-ross-reach-stat" key={stat.label}>
                <Image
                  src={stat.icon}
                  alt=""
                  width={56}
                  height={56}
                  aria-hidden="true"
                />

                <strong>{stat.value}</strong>

                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY BUSINESSES CHOOSE ROSS
      ====================================================== */}

      <section className="why-ross-reasons">
        <div className="why-ross-container">
          <div className="why-ross-reasons-heading">
            <div>
              <span className="why-ross-section-label">
                WHY BUSINESSES CHOOSE ROSS
              </span>

              <h2>Built Around Commercial Delivery Requirements.</h2>
            </div>

            <p>
              Ross combines practical furniture transport experience with the
              coordination, communication and care businesses expect from a
              trusted logistics partner.
            </p>
          </div>

          <div className="why-ross-reasons-grid">
            {reasons.map((reason) => (
              <article className="why-ross-reason-card" key={reason.number}>
                <span>{reason.number}</span>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMERCIAL DIFFERENCE
      ====================================================== */}

      <section className="why-ross-difference">
        <div className="why-ross-container why-ross-difference-grid">
          <div className="why-ross-difference-heading">
            <span className="why-ross-section-label">
              THE ROSS DIFFERENCE
            </span>

            <h2>More Than Transport From One Address To Another.</h2>

            <p>
              Ross approaches furniture delivery as part of your wider
              operation—supporting stock movement, customer experience,
              scheduling and project delivery requirements.
            </p>
          </div>

          <div className="why-ross-difference-list">
            <article>
              <span>Typical Transport Provider</span>

              <h3>Moves the item.</h3>

              <p>
                Limited coordination, limited communication and little
                understanding of the wider commercial requirement.
              </p>
            </article>

            <article className="why-ross-difference-featured">
              <span>Ross Furniture Transport</span>

              <h3>Supports the delivery operation.</h3>

              <p>
                Collection planning, furniture handling, delivery coordination
                and professional representation at every destination.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMERCIAL STANDARDS
      ====================================================== */}

      <section className="why-ross-standards">
        <div className="why-ross-container">
          <div className="why-ross-section-header">
            <span className="why-ross-section-label">
              COMMERCIAL DELIVERY STANDARDS
            </span>

            <h2>What Businesses Can Expect From Every Delivery.</h2>

            <p>
              A consistent delivery standard designed to protect furniture,
              support schedules and represent your business professionally.
            </p>
          </div>

          <div className="why-ross-standards-grid">
            {standards.map((standard) => (
              <article
                className="why-ross-standard-card"
                key={standard.number}
              >
                <span>{standard.number}</span>

                <h3>{standard.title}</h3>

                <p>{standard.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMITMENT
      ====================================================== */}

      <section className="why-ross-commitment">
        <div className="why-ross-container why-ross-commitment-grid">
          <div className="why-ross-commitment-content">
            <span className="why-ross-section-label why-ross-section-label-light">
              OUR COMMITMENT
            </span>

            <h2>
              Your Furniture.
              <br />
              Your Customers.
              <br />
              Your Reputation
              <span className="why-ross-red-dot">.</span>
            </h2>
          </div>

          <div className="why-ross-commitment-copy">
            <p>
              Every Ross delivery represents more than the movement of
              furniture. It represents your stock, your customer experience and
              your business reputation.
            </p>

            <p>
              That is why every job is approached with preparation,
              professionalism and accountability from collection through to
              final delivery.
            </p>

            <Link href="/production/about">Learn More About Ross</Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING CTA
      ====================================================== */}

      <section className="why-ross-cta">
        <div className="why-ross-container why-ross-cta-inner">
          <div className="why-ross-cta-content">
            <span className="why-ross-section-label">WORK WITH ROSS</span>

            <h2>
              Choose A Delivery Partner Built For Commercial Furniture
              <span className="why-ross-red-dot">.</span>
            </h2>

            <p>
              Speak directly with Ross about scheduled delivery runs,
              commercial furniture transport, distribution requirements or
              project-based delivery support.
            </p>
          </div>

          <div className="why-ross-cta-action">
            <RequestDeliveryQuote />
          </div>
        </div>
      </section>
    </main>
  );
}