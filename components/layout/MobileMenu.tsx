"use client";

import Link from "next/link";
import { useState } from "react";

import TalkToRoss from "@/components/shared/buttons/TalkToRoss";

import "./MobileMenu.css";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  serviceLinks: NavigationItem[];
  industryLinks: NavigationItem[];
};

function MobileChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`ross-mobile-chevron ${
        isOpen ? "ross-mobile-chevron-open" : ""
      }`}
    >
      <path
        d="M5.75 7.75L10 12L14.25 7.75"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileMenu({
  isOpen,
  onClose,
  serviceLinks,
  industryLinks,
}: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <div
      id="ross-mobile-menu"
      className={`ross-mobile-menu ${
        isOpen ? "ross-mobile-menu-open" : ""
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="ross-mobile-menu-backdrop"
        aria-label="Close navigation menu"
        onClick={onClose}
      />

      <div className="ross-mobile-menu-panel">
        <div className="ross-mobile-menu-content">
          <nav aria-label="Mobile navigation">
            <Link
              href="/production"
              className="ross-mobile-link"
              onClick={onClose}
            >
              Home
            </Link>

            <Link
              href="/production/about"
              className="ross-mobile-link"
              onClick={onClose}
            >
              About
            </Link>

            <div className="ross-mobile-accordion">
              <button
                type="button"
                className="ross-mobile-link ross-mobile-accordion-button"
                aria-expanded={servicesOpen}
                onClick={() =>
                  setServicesOpen((current) => !current)
                }
              >
                <span>Services</span>
                <MobileChevron isOpen={servicesOpen} />
              </button>

              <div
                className={`ross-mobile-submenu ${
                  servicesOpen
                    ? "ross-mobile-submenu-open"
                    : ""
                }`}
              >
                <Link
                  href="/production/services"
                  className="ross-mobile-submenu-parent"
                  onClick={onClose}
                >
                  View All Services
                </Link>

                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="ross-mobile-submenu-link"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="ross-mobile-accordion">
              <button
                type="button"
                className="ross-mobile-link ross-mobile-accordion-button"
                aria-expanded={industriesOpen}
                onClick={() =>
                  setIndustriesOpen((current) => !current)
                }
              >
                <span>Industries</span>
                <MobileChevron isOpen={industriesOpen} />
              </button>

              <div
                className={`ross-mobile-submenu ${
                  industriesOpen
                    ? "ross-mobile-submenu-open"
                    : ""
                }`}
              >
                <Link
                  href="/production/industries"
                  className="ross-mobile-submenu-parent"
                  onClick={onClose}
                >
                  View All Industries
                </Link>

                {industryLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="ross-mobile-submenu-link"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/production/delivery-network"
              className="ross-mobile-link"
              onClick={onClose}
            >
              Delivery Network
            </Link>

            <Link
              href="/production/why-ross"
              className="ross-mobile-link"
              onClick={onClose}
            >
              Why Ross
            </Link>

            <Link
              href="/production/contact"
              className="ross-mobile-link"
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>

          <div className="ross-mobile-menu-footer">
            <p>Commercial furniture transport across Australia.</p>

            <div onClick={onClose}>
  <TalkToRoss className="ross-mobile-menu-global-cta" />
</div>
          </div>
        </div>
      </div>
    </div>
  );
}