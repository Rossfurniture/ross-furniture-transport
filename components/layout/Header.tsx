"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import CallRoss from "@/components/shared/buttons/CallRoss";
import TalkToRoss from "@/components/shared/buttons/TalkToRoss";

import MobileMenu from "./MobileMenu";
import "./Header.css";

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

type DesktopDropdown = "services" | "industries" | null;

function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ross-header-chevron"
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

function DropdownArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ross-header-dropdown-arrow"
    >
      <path
        d="M4 10H16M11.5 5.5L16 10L11.5 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<DesktopDropdown>(null);
  const [suppressDropdowns, setSuppressDropdowns] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const openDesktopDropdown = (
    dropdown: Exclude<DesktopDropdown, null>,
  ) => {
    if (!suppressDropdowns) {
      setOpenDropdown(dropdown);
    }
  };

  const closeDesktopDropdown = () => {
    setOpenDropdown(null);
  };

  const closeDropdownAfterNavigation = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    setSuppressDropdowns(true);
    setOpenDropdown(null);

    event.currentTarget.blur();
  };

  const resetDesktopDropdowns = () => {
    setOpenDropdown(null);
    setSuppressDropdowns(false);
  };

  const isActive = (href: string) => {
    if (href === "") {
      return pathname === "";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`ross-header ${
          isScrolled ? "ross-header-scrolled" : ""
        }`}
        onMouseLeave={resetDesktopDropdowns}
      >
        <div className="ross-header-container">
          <Link
            href=""
            className="ross-header-logo-link"
            aria-label="Ross Furniture Transport home"
            onClick={closeDropdownAfterNavigation}
          >
            <Image
              src="/logo/ross-furniture-transport-whtebg.webp"
              alt="Ross Furniture Transport"
              width={240}
              height={120}
              priority
              className="ross-header-logo"
            />
          </Link>

          <nav
            className="ross-header-navigation"
            aria-label="Primary navigation"
          >
            <Link
              href=""
              onClick={closeDropdownAfterNavigation}
              className={`ross-header-link ${
                isActive("")
                  ? "ross-header-link-active"
                  : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/why-ross"
              onClick={closeDropdownAfterNavigation}
              className={`ross-header-link ${
                isActive("/why-ross")
                  ? "ross-header-link-active"
                  : ""
              }`}
            >
              Why Ross
            </Link>

            <div
              className={`ross-header-dropdown ${
                openDropdown === "services"
                  ? "ross-header-dropdown-open"
                  : ""
              }`}
              onMouseEnter={() =>
                openDesktopDropdown("services")
              }
              onMouseLeave={closeDesktopDropdown}
            >
              <Link
                href="/services"
                onFocus={() =>
                  openDesktopDropdown("services")
                }
                onClick={closeDropdownAfterNavigation}
                className={`ross-header-link ross-header-dropdown-trigger ${
                  isActive("/services")
                    ? "ross-header-link-active"
                    : ""
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown />
              </Link>

              <div className="ross-header-dropdown-menu">
                <div className="ross-header-dropdown-inner">
                  <p className="ross-header-dropdown-eyebrow">
                    Delivery Solutions
                  </p>

                  <div className="ross-header-dropdown-links">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="ross-header-dropdown-link"
                        onClick={closeDropdownAfterNavigation}
                      >
                        <span>{item.label}</span>
                        <DropdownArrow />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`ross-header-dropdown ${
                openDropdown === "industries"
                  ? "ross-header-dropdown-open"
                  : ""
              }`}
              onMouseEnter={() =>
                openDesktopDropdown("industries")
              }
              onMouseLeave={closeDesktopDropdown}
            >
              <Link
                href="/industries"
                onFocus={() =>
                  openDesktopDropdown("industries")
                }
                onClick={closeDropdownAfterNavigation}
                className={`ross-header-link ross-header-dropdown-trigger ${
                  isActive("/industries")
                    ? "ross-header-link-active"
                    : ""
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === "industries"}
              >
                <span>Industries</span>
                <ChevronDown />
              </Link>

              <div className="ross-header-dropdown-menu ross-header-dropdown-menu-wide">
                <div className="ross-header-dropdown-inner">
                  <p className="ross-header-dropdown-eyebrow">
                    Industries We Support
                  </p>

                  <div className="ross-header-dropdown-links ross-header-dropdown-links-grid">
                    {industryLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="ross-header-dropdown-link"
                        onClick={closeDropdownAfterNavigation}
                      >
                        <span>{item.label}</span>
                        <DropdownArrow />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/delivery-network"
              onClick={closeDropdownAfterNavigation}
              className={`ross-header-link ${
                isActive("/delivery-network")
                  ? "ross-header-link-active"
                  : ""
              }`}
            >
              Delivery Network
            </Link>

            <Link
              href="/about"
              onClick={closeDropdownAfterNavigation}
              className={`ross-header-link ${
                isActive("/about")
                  ? "ross-header-link-active"
                  : ""
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeDropdownAfterNavigation}
              className={`ross-header-link ${
                isActive("/contact")
                  ? "ross-header-link-active"
                  : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="ross-header-actions">
            <CallRoss />

            <div className="ross-header-desktop-cta">
              <TalkToRoss className="ross-header-global-cta" />
            </div>

            <button
              type="button"
              className={`ross-header-menu-button ${
                isMobileMenuOpen
                  ? "ross-header-menu-button-open"
                  : ""
              }`}
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="ross-mobile-menu"
              onClick={() => {
                setOpenDropdown(null);
                setIsMobileMenuOpen((current) => !current);
              }}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        serviceLinks={serviceLinks}
        industryLinks={industryLinks}
      />
    </>
  );
}