import Image from "next/image";
import Link from "next/link";

import "./Footer.css";

const serviceLinks = [
  {
    label: "Furniture Transport",
    href: "/services/furniture-transport",
  },
  {
    label: "Retail Store Deliveries",
    href: "/services/retail-store-deliveries",
  },
  {
    label: "Warehouse Distribution",
    href: "/services/warehouse-distribution",
  },
  {
    label: "Interstate Furniture Transport",
    href: "/services/interstate-furniture-transport",
  },
  {
    label: "White Glove Delivery",
    href: "/services/white-glove-delivery",
  },
  {
    label: "Commercial Delivery Solutions",
    href: "/services/commercial-delivery-solutions",
  },
];

const industryLinks = [
  {
    label: "Furniture Retailers",
    href: "/industries/furniture-retailers",
  },
  {
    label: "Furniture Manufacturers",
    href: "/industries/furniture-manufacturers",
  },
  {
    label: "Bedding & Mattress Stores",
    href: "/industries/bedding-mattress-stores",
  },
  {
    label: "Appliance Retailers",
    href: "/industries/appliance-retailers",
  },
  {
    label: "Interior Designers",
    href: "/industries/interior-designers",
  },
  {
    label: "Warehouses & Distributors",
    href: "/industries/warehouses-distributors",
  },
  {
    label: "Hotels & Developers",
    href: "/industries/hotels-developers",
  },
  {
    label: "Government & Education",
    href: "/industries/government-education",
  },
];

const companyLinks = [
  {
    label: "Why Ross",
    href: "/why-ross",
  },
  {
    label: "Delivery Network",
    href: "/delivery-network",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="ross-footer-contact-icon"
    >
      <path
        d="M7.2 3.75H4.95C4.29 3.75 3.75 4.29 3.75 4.95C3.75 13.4 10.6 20.25 19.05 20.25C19.71 20.25 20.25 19.71 20.25 19.05V16.8C20.25 16.25 19.87 15.77 19.33 15.64L16.63 14.97C16.16 14.85 15.66 15.02 15.36 15.4L14.77 16.14C12.02 14.84 9.16 11.98 7.86 9.23L8.6 8.64C8.98 8.34 9.15 7.84 9.03 7.37L8.36 4.67C8.23 4.13 7.75 3.75 7.2 3.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="ross-footer-contact-icon"
    >
      <path
        d="M4.5 6.75H19.5C20.33 6.75 21 7.42 21 8.25V16.5C21 17.33 20.33 18 19.5 18H4.5C3.67 18 3 17.33 3 16.5V8.25C3 7.42 3.67 6.75 4.5 6.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M4.5 8.25L12 13.5L19.5 8.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="ross-footer-contact-icon"
    >
      <path
        d="M12 21C12 21 18 15.6 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 15.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="10.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="ross-footer-contact-icon"
    >
      <path
        d="M4.5 20.25V7.5C4.5 6.67 5.17 6 6 6H18C18.83 6 19.5 6.67 19.5 7.5V20.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 20.25H21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8.25 10.5H9.75M14.25 10.5H15.75M8.25 14.25H9.75M14.25 14.25H15.75"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="ross-footer">
      <div className="ross-footer-main">
        <div className="ross-footer-grid">
          <div className="ross-footer-brand">
            <Link
              className="ross-footer-logo"
              href="/"
              aria-label="Ross Furniture Transport home"
            >
              <Image
                src="/logo/ross-furniture-transport-whtebg.webp"
                alt="Ross Furniture Transport"
                width={150}
                height={150}
              />
            </Link>

            <p className="ross-footer-brand-copy">
              Commercial furniture transport for retailers, manufacturers,
              bedding stores, appliance businesses, warehouses, designers and
              commercial partners across Australia.
            </p>

            <p className="ross-footer-brand-line">
              Safe handling. Reliable scheduling. Professional service.
            </p>
          </div>

          <nav
            className="ross-footer-column"
            aria-labelledby="ross-footer-services"
          >
            <p
              id="ross-footer-services"
              className="ross-footer-column-title"
            >
              Services
            </p>

            <ul className="ross-footer-links">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="ross-footer-column"
            aria-labelledby="ross-footer-industries"
          >
            <p
              id="ross-footer-industries"
              className="ross-footer-column-title"
            >
              Industries
            </p>

            <ul className="ross-footer-links">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="ross-footer-column"
            aria-labelledby="ross-footer-company"
          >
            <p
              id="ross-footer-company"
              className="ross-footer-column-title"
            >
              Quick Links
            </p>

            <ul className="ross-footer-links">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ross-footer-column ross-footer-contact">
            <p className="ross-footer-column-title">Contact</p>

            <div className="ross-footer-contact-list">
              <div className="ross-footer-contact-row">
                <div className="ross-footer-contact-icon-wrap">
                  <PhoneIcon />
                </div>

                <div className="ross-footer-contact-content">
                  <span>Phone</span>
                  <a href="tel:0413261153">0413 261 153</a>
                </div>
              </div>

              <div className="ross-footer-contact-row">
                <div className="ross-footer-contact-icon-wrap">
                  <EmailIcon />
                </div>

                <div className="ross-footer-contact-content">
                  <span>Email</span>
                  <a href="mailto:info@rossfurnituretransport.com.au">
                    info@rossfurnituretransport.com.au
                  </a>
                </div>
              </div>

              <div className="ross-footer-contact-row">
                <div className="ross-footer-contact-icon-wrap">
                  <LocationIcon />
                </div>

                <div className="ross-footer-contact-content">
                  <span>Office Address</span>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=66-68+Cairnes+Road+Glenorie+NSW+2157"
                    target="_blank"
                    rel="noreferrer"
                  >
                    66–68 Cairnes Road
                    <br />
                    Glenorie NSW 2157
                  </a>
                </div>
              </div>

              <div className="ross-footer-contact-row">
                <div className="ross-footer-contact-icon-wrap">
                  <BusinessIcon />
                </div>

                <div className="ross-footer-contact-content">
                  <span>ABN</span>
                  <p>14 231 776 074</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ross-footer-bottom">
        <div className="ross-footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Ross Furniture Transport. All rights
            reserved.
          </p>

          <div className="ross-footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}