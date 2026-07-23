import Link from "next/link";

import RequestDeliveryQuote from "@/components/shared/buttons/RequestDeliveryQuote";
import RossServiceCarousel from "@/components/shared/sections/RossServiceCarousel";
import CommercialDeliveryProcess from "@/components/services/CommercialDeliveryProcess";
import CommercialPricingGuide from "@/components/services/CommercialPricingGuide";
import FAQs from "@/components/home/FAQs";

import "./ServicesHero.css";

const services = [
  {
    number: "01",
    title: "Furniture Transport",
    href: "/production/services/furniture-transport",
  },
  {
    number: "02",
    title: "Retail Store Deliveries",
    href: "/production/services/retail-store-deliveries",
  },
  {
    number: "03",
    title: "Warehouse Distribution",
    href: "/production/services/warehouse-distribution",
  },
  {
    number: "04",
    title: "Interstate Furniture Transport",
    href: "/production/services/interstate-furniture-transport",
  },
  {
    number: "05",
    title: "White Glove Delivery",
    href: "/production/services/white-glove-delivery",
  },
  {
    number: "06",
    title: "Commercial Delivery Solutions",
    href: "/production/services/commercial-delivery-solutions",
  },
];

export default function ServicesHero() {
  return (
    <>
      <section
        className="ross-services-hero"
        aria-labelledby="ross-services-hero-title"
      >
        <div className="ross-services-hero-background" aria-hidden="true" />

        <div className="ross-services-hero-overlay" aria-hidden="true" />

        <div className="ross-services-hero-container">
          <div className="ross-services-hero-content">
            <p className="ross-services-hero-eyebrow">
              Commercial Delivery Services
            </p>

            <h1
              id="ross-services-hero-title"
              className="ross-services-hero-title"
            >
              Commercial Furniture
              <span>Transport Services</span>
              <span>
                Across Australia<i>.</i>
              </span>
            </h1>

            <p className="ross-services-hero-introduction">
              Supporting furniture retailers, manufacturers, warehouses and
              commercial businesses with scheduled transport, distribution and
              customer delivery solutions tailored to their operation.
            </p>

            <div className="ross-services-hero-actions">
              <RequestDeliveryQuote />
            </div>
          </div>

          <nav
            className="ross-services-hero-navigation"
            aria-label="Commercial delivery services"
          >
            {services.map((service) => (
              <Link
                className="ross-services-hero-service"
                href={service.href}
                key={service.href}
              >
                <span className="ross-services-hero-service-number">
                  {service.number}
                </span>

                <span className="ross-services-hero-service-title">
                  {service.title}
                </span>

                <span
                  className="ross-services-hero-service-line"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <RossServiceCarousel />
      <CommercialDeliveryProcess />
      <CommercialPricingGuide />
      <FAQs />
    </>
  );
}
