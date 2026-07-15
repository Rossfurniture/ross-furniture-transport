import Link from "next/link";

import "./Hero.css";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import ExploreDeliverySolutions from "@/components/shared/buttons/ExploreDeliverySolutions";

export default function Hero() {
  return (
    <section className="ross-hero">
      <div className="ross-hero-overlay" />

      <div className="ross-hero-container">
        <div className="ross-hero-content">
          <span className="ross-hero-eyebrow">
            BUILT FOR FURNITURE BUSINESSES
          </span>

          <h1 className="ross-hero-title">
            Commercial Furniture
            <br />
            Transport Across Australia.
          </h1>

          <p className="ross-hero-description">
            Supporting furniture retailers, manufacturers, bedding stores,
            appliance retailers, warehouses, interior designers and commercial
            partners with dependable nationwide furniture transport solutions.
          </p>
<div className="ross-hero-actions">
  <RequestDeliveryQuote />

  <ExploreDeliverySolutions />
</div>

          <div className="ross-hero-badges">
            <span>Australia Wide</span>
            <span>B2B Furniture Logistics</span>
            <span>Delivery Experts</span>
            <span>10+ Years Experience</span>
          </div>
        </div>

        <div className="ross-hero-spacer" />
      </div>

      <div className="ross-hero-bottom-fade" />
    </section>
  );
}