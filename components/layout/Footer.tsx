import Image from "next/image";
import Link from "next/link";

import "./Footer.css";

const serviceLinks = [
  {
    label: "Furniture Retail Delivery",
    href: "/services/furniture-retail-delivery",
  },
  {
    label: "Bedding & Mattress Delivery",
    href: "/services/bedding-delivery",
  },
  {
    label: "Appliance Delivery",
    href: "/services/appliance-delivery",
  },
  {
    label: "Commercial Fit-Outs",
    href: "/services/commercial-fit-outs",
  },
  {
    label: "Warehouse Transfers",
    href: "/services/warehouse-transfers",
  },
  {
    label: "White Glove Delivery",
    href: "/services/white-glove-delivery",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Delivery Network",
    href: "/delivery-network",
  },
  {
    label: "Why Ross",
    href: "/why-ross",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

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
              Commercial furniture transport for retailers, bedding suppliers,
              appliance businesses, warehouses, manufacturers and interior
              design teams.
            </p>

            <div className="ross-footer-brand-line">
              <span />
              Safe handling. Reliable scheduling. Professional service.
            </div>
          </div>

          <nav
            className="ross-footer-column"
            aria-labelledby="ross-footer-services"
          >
            <p id="ross-footer-services" className="ross-footer-column-title">
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
            aria-labelledby="ross-footer-company"
          >
            <p id="ross-footer-company" className="ross-footer-column-title">
              Company
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

            <div className="ross-footer-contact-item">
              <span>Phone</span>

              <a href="tel:0413261153">0413 261 153</a>
            </div>

            <div className="ross-footer-contact-item">
              <span>Email</span>

              <a href="mailto:info@rossfurnituretransport.com.au">
                info@rossfurnituretransport.com.au
              </a>
            </div>

            <div className="ross-footer-contact-item">
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

            <div className="ross-footer-contact-item">
              <span>ABN</span>

              <p>14 231 776 074</p>
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