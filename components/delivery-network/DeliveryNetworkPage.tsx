"use client";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";

import "./DeliveryNetworkPage.css";

export default function DeliveryNetworkPage() {
  return (
    <>
      {/* ==========================================
          HERO
      ========================================== */}

      <section className="network-hero">
        <div className="network-hero-overlay" />

        <div className="network-container">
          <div className="network-hero-grid">

            <div className="network-hero-content">

              <span className="network-eyebrow">
                DELIVERY NETWORK
              </span>

              <h1>
                Commercial Furniture Delivery Network
              </h1>

              <p>
                Coordinated metropolitan, regional and interstate furniture transport for
  retailers, manufacturers, warehouses and commercial projects.
              </p>

              <div className="network-hero-buttons">
                <RequestDeliveryQuote />
                <ExploreDeliverySolutions />
              </div>

            </div>

            <div className="network-hero-panel">

              <span className="network-panel-label">
                COMMERCIAL COVERAGE
              </span>

              <h3>
                Supporting furniture businesses across every stage of the
                delivery journey.
              </h3>

              <div className="network-panel-divider" />

              <ul>

                <li>
                  <span>01</span>
                  Metropolitan Delivery
                </li>

                <li>
                  <span>02</span>
                  Regional Distribution
                </li>

                <li>
                  <span>03</span>
                  Interstate Transport
                </li>

                <li>
                  <span>04</span>
                  Commercial Projects
                </li>

              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          NETWORK INTRODUCTION
      ========================================== */}

      <section className="network-intro">

        <div className="network-container">

          <div className="network-intro-grid">

            <div className="network-intro-left">

              <span className="network-section-label">
                OUR DELIVERY NETWORK
              </span>

              <h2>
                Built around the way commercial furniture businesses operate.
              </h2>

            </div>

            <div className="network-intro-right">

              <p>
                Every delivery forms part of a larger commercial supply chain.
                From supplier collections and warehouse transfers through to
                retail replenishment, project deliveries and final-mile
                distribution, Ross Furniture Transport helps businesses keep
                furniture moving safely and efficiently.
              </p>

              <p>
                Rather than simply transporting goods from one location to
                another, we coordinate each stage with careful planning,
                dependable scheduling and professional handling to support the
                day-to-day operations of furniture retailers, manufacturers,
                designers and commercial partners.
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ==========================================
          COMMERCIAL COVERAGE
      ========================================== */}

      <section className="network-coverage">
        <div className="network-container">

          <div className="network-section-header network-section-header-centred">
            <span className="network-section-label">
              COMMERCIAL COVERAGE
            </span>

            <h2>
              Flexible delivery support across metropolitan, regional and
              interstate routes.
            </h2>

            <p>
              Our network is structured around real commercial requirements,
              helping businesses coordinate recurring deliveries, project
              movements and longer-distance furniture transport.
            </p>
          </div>

          <div className="network-coverage-grid">

            <article className="network-coverage-card network-coverage-card-primary">
              <div className="network-coverage-card-top">
                <span className="network-coverage-number">01</span>

                <span className="network-coverage-type">
                  METROPOLITAN DELIVERY
                </span>
              </div>

              <div className="network-coverage-card-content">
                <h3>
                  Reliable movement between suppliers, warehouses, stores and
                  customer locations.
                </h3>

                <p>
                  Ross Furniture Transport supports scheduled commercial
                  furniture deliveries across metropolitan areas, helping
                  businesses maintain consistent stock movement, store
                  replenishment and final-mile delivery.
                </p>
              </div>

              <div className="network-coverage-list">
                <span>Warehouse collections</span>
                <span>Retail replenishment</span>
                <span>Customer deliveries</span>
                <span>Commercial site access</span>
              </div>
            </article>

            <article className="network-coverage-card network-coverage-card-secondary">
              <div className="network-coverage-card-top">
                <span className="network-coverage-number">02</span>

                <span className="network-coverage-type">
                  REGIONAL & INTERSTATE
                </span>
              </div>

              <div className="network-coverage-card-content">
                <h3>
                  Planned transport solutions for longer routes and commercial
                  furniture projects.
                </h3>

                <p>
                  Longer-distance movements are coordinated around collection
                  requirements, delivery windows and handling needs, giving
                  businesses a dependable transport solution beyond local
                  metropolitan routes.
                </p>
              </div>

              <div className="network-coverage-list">
                <span>Regional distribution</span>
                <span>Interstate transport</span>
                <span>Project deliveries</span>
                <span>Warehouse transfers</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ==========================================
          DELIVERY CAPABILITIES
      ========================================== */}

      <section className="network-capabilities">
        <div className="network-container">

          <div className="network-capabilities-heading">

            <div>
              <span className="network-section-label">
                DELIVERY CAPABILITIES
              </span>

              <h2>
                Connecting every stage of the commercial furniture supply
                chain.
              </h2>
            </div>

            <p>
              From the first collection through to the final delivery, every
              movement is planned to support the way furniture businesses
              operate.
            </p>

          </div>

          <div className="network-capabilities-grid">

            <article className="network-capability-card">
              <div className="network-capability-top">
                <span className="network-capability-number">01</span>
                <span className="network-capability-line" />
              </div>

              <h3>Supplier Collections</h3>

              <p>
                Coordinated pickup from furniture manufacturers, importers and
                commercial suppliers for transfer to warehouses, stores or
                project locations.
              </p>
            </article>

            <article className="network-capability-card">
              <div className="network-capability-top">
                <span className="network-capability-number">02</span>
                <span className="network-capability-line" />
              </div>

              <h3>Warehouse Transfers</h3>

              <p>
                Dependable movement of furniture between warehouses,
                distribution centres and commercial storage facilities.
              </p>
            </article>

            <article className="network-capability-card">
              <div className="network-capability-top">
                <span className="network-capability-number">03</span>
                <span className="network-capability-line" />
              </div>

              <h3>Retail Distribution</h3>

              <p>
                Scheduled delivery support for retail stores, display
                replenishment, stock transfers and ongoing furniture
                distribution requirements.
              </p>
            </article>

            <article className="network-capability-card">
              <div className="network-capability-top">
                <span className="network-capability-number">04</span>
                <span className="network-capability-line" />
              </div>

              <h3>Final-Mile Delivery</h3>

              <p>
                Professional furniture delivery from stores and warehouses to
                customers, offices, hospitality venues and commercial sites.
              </p>
            </article>

          </div>
        </div>
      </section>

            {/* ==========================================
          COMMERCIAL DELIVERY PROCESS
      ========================================== */}

      <section className="network-process">
        <div className="network-container">

          <div className="network-process-grid">

            <div className="network-process-heading">
              <span className="network-section-label">
                HOW THE NETWORK WORKS
              </span>

              <h2>
                One coordinated process from collection through to final
                delivery.
              </h2>

              <p>
                Every movement is planned around access, timing, handling and
                delivery requirements so businesses can rely on a clear and
                consistent transport process.
              </p>
            </div>

            <div className="network-process-list">

              <article className="network-process-item">
                <span className="network-process-number">01</span>

                <div>
                  <h3>Requirements Confirmed</h3>

                  <p>
                    We review collection details, delivery locations, furniture
                    requirements and preferred timeframes before transport is
                    scheduled.
                  </p>
                </div>
              </article>

              <article className="network-process-item">
                <span className="network-process-number">02</span>

                <div>
                  <h3>Collection Coordinated</h3>

                  <p>
                    Pickup access, loading requirements and site contacts are
                    confirmed to help the collection run efficiently.
                  </p>
                </div>
              </article>

              <article className="network-process-item">
                <span className="network-process-number">03</span>

                <div>
                  <h3>Route & Schedule Planned</h3>

                  <p>
                    The delivery route and timing are organised around the
                    practical requirements of the business and destination.
                  </p>
                </div>
              </article>

              <article className="network-process-item">
                <span className="network-process-number">04</span>

                <div>
                  <h3>Furniture Loaded & Secured</h3>

                  <p>
                    Furniture is handled carefully and secured appropriately
                    before the delivery journey begins.
                  </p>
                </div>
              </article>

              <article className="network-process-item">
                <span className="network-process-number">05</span>

                <div>
                  <h3>Delivery Progress Communicated</h3>

                  <p>
                    Clear communication helps keep businesses and receiving
                    locations informed throughout the delivery process.
                  </p>
                </div>
              </article>

              <article className="network-process-item">
                <span className="network-process-number">06</span>

                <div>
                  <h3>Delivery Completed</h3>

                  <p>
                    Goods are delivered professionally to the agreed location,
                    with completion handled clearly and efficiently.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          NETWORK MOVEMENTS
      ========================================== */}

      <section className="network-movements">
        <div className="network-container">

          <div className="network-movements-header">

            <div>
              <span className="network-section-label network-section-label-light">
                COMMERCIAL MOVEMENTS
              </span>

              <h2>
                Delivery routes designed around real commercial furniture
                operations.
              </h2>
            </div>

            <p>
              Our network supports the recurring, project-based and
              longer-distance movements that keep commercial furniture supply
              chains running.
            </p>

          </div>

          <div className="network-movements-grid">

            <article className="network-movement-item">
              <span>01</span>
              <h3>Warehouse to Store</h3>
            </article>

            <article className="network-movement-item">
              <span>02</span>
              <h3>Supplier to Warehouse</h3>
            </article>

            <article className="network-movement-item">
              <span>03</span>
              <h3>Store to Customer</h3>
            </article>

            <article className="network-movement-item">
              <span>04</span>
              <h3>Warehouse Transfers</h3>
            </article>

            <article className="network-movement-item">
              <span>05</span>
              <h3>Project Site Deliveries</h3>
            </article>

            <article className="network-movement-item">
              <span>06</span>
              <h3>Regional Distribution</h3>
            </article>

            <article className="network-movement-item">
              <span>07</span>
              <h3>Interstate Transport</h3>
            </article>

            <article className="network-movement-item">
              <span>08</span>
              <h3>Scheduled Delivery Runs</h3>
            </article>

          </div>
        </div>
      </section>

            {/* ==========================================
          CLOSING CTA
      ========================================== */}

      <section className="network-cta">
        <div className="network-container">
          <div className="network-cta-inner">

            <div className="network-cta-content">
              <span className="network-section-label">
                PLAN YOUR DELIVERY
              </span>

              <h2>
                Need dependable delivery coverage for your furniture business?
              </h2>

              <p>
                Tell us where your furniture needs to be collected and
                delivered. Ross Furniture Transport will help coordinate a
                practical commercial transport solution around your schedule,
                access and handling requirements.
              </p>
            </div>

            <div className="network-cta-action">
              <RequestDeliveryQuote />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}