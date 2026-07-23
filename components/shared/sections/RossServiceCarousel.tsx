import Image from "next/image";
import Link from "next/link";

import "@/styles/RossServiceCarousel.css";

type RossService = {
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
};

const rossServices: RossService[] = [
  {
    title: "Furniture Transport",
    description:
      "Professional furniture transport solutions for retailers, manufacturers, suppliers and commercial businesses across Australia.",
    image: "/services/furniture-retail-delivery.webp",
    href: "/services/furniture-transport",
    alt: "Commercial furniture transport being completed for an Australian furniture retailer",
  },
  {
    title: "Retail Store Deliveries",
    description:
      "Reliable store and customer delivery services designed around furniture retailers, bedding stores and appliance businesses.",
    image: "/services/bedding-mattress-delivery.webp",
    href: "/services/retail-store-deliveries",
    alt: "Furniture delivery service supporting an Australian retail store",
  },
  {
    title: "Warehouse Distribution",
    description:
      "Organised warehouse collection, distribution and scheduled delivery support for furniture suppliers and distribution centres.",
    image: "/services/warehouse-transport.webp",
    href: "/services/warehouse-distribution",
    alt: "Commercial furniture distribution being organised inside a warehouse",
  },
  {
    title: "Interstate Furniture Transport",
    description:
      "Planned interstate furniture transport connecting warehouses, retailers, suppliers and commercial destinations across Australia.",
    image: "/services/commercial-warehouse-logistics.webp",
    href: "/services/interstate-furniture-transport",
    alt: "Commercial furniture logistics and interstate transport operations",
  },
  {
    title: "White Glove Delivery",
    description:
      "Premium handling and final-stage delivery for designer furniture, valuable pieces and customer-facing commercial installations.",
    image: "/services/white-glove-delivery.webp",
    href: "/services/white-glove-delivery",
    alt: "Professional white glove furniture delivery and in-room placement",
  },
  {
    title: "Commercial Delivery Solutions",
    description:
      "Flexible commercial delivery support tailored to project schedules, recurring routes, fit-outs and complex furniture logistics.",
    image: "/services/commercial-warehouse-logistics.webp",
    href: "/services/commercial-delivery-solutions",
    alt: "Commercial warehouse logistics supporting Australian furniture businesses",
  },
];

type RossServiceCarouselProps = {
  intro?: string;
  sectionId?: string;
  services?: RossService[];
};

export default function RossServiceCarousel({
  intro = "From furniture transport and retail deliveries to warehouse distribution, interstate logistics and white glove handling, Ross Furniture Transport provides dependable commercial delivery solutions across Australia.",
  sectionId = "ross-services-carousel-heading",
  services = rossServices,
}: RossServiceCarouselProps) {
  return (
    <section
      className="ross-services-carousel-section"
      aria-labelledby={sectionId}
    >
      <div className="ross-services-carousel-container">
        <header className="ross-services-carousel-header">
         

          <h2
            id={sectionId}
            className="ross-services-carousel-title"
          >
            <span>Services Built Around</span>

            <span>
              Your Business<i>.</i>
            </span>
          </h2>

          <p className="ross-services-carousel-intro">
            {intro}
          </p>
        </header>

        <div
          className="ross-services-carousel"
          aria-label="Ross Furniture Transport commercial delivery services"
        >
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="ross-service-slide"
              aria-label={`View ${service.title}`}
            >
              <div className="ross-service-slide-image">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="ross-service-slide-photo"
                  sizes="(max-width: 767px) 82vw, (max-width: 1100px) 44vw, 24vw"
                />

                <div
                  className="ross-service-slide-overlay"
                  aria-hidden="true"
                />

                <span
                  className="ross-service-slide-number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="ross-service-slide-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <span
                className="ross-service-slide-line"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        <p className="ross-services-swipe-note">
          Swipe or scroll to explore all services
        </p>
      </div>
    </section>
  );
}