"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import "@/styles/CommercialPricingGuide.css";

type PricingModelKey =
  | "singleRun"
  | "scheduledRoutes"
  | "multiStop"
  | "dedicatedTruck"
  | "interstate"
  | "whiteGlove";

type CommercialPricingModel = {
  tab: string;
  label: string;
  title: string;
  description: string;
  bestFor: string;
  pricingModel: string;
  pricingNote: string;
  factors: string[];
};

type IndicatorStyle = {
  width: number;
  height: number;
  transform: string;
  opacity: number;
};

const commercialPricingModels: Record<
  PricingModelKey,
  CommercialPricingModel
> = {
  singleRun: {
    tab: "Single Run",
    label: "One-Off Commercial Delivery",
    title: "One-off delivery, simple and efficient.",
    description:
      "A flexible option for individual collections, store transfers, supplier pickups and customer deliveries without an ongoing delivery schedule.",
    bestFor:
      "Retailers, suppliers, manufacturers and businesses requiring a single commercial furniture delivery.",
    pricingModel: "Quoted Per Run",
    pricingNote:
      "A tailored rate is prepared for the specific collection and delivery requirements.",
    factors: [
      "Delivery distance",
      "Furniture volume and quantity",
      "Vehicle size required",
      "Collection and delivery access",
      "Handling requirements",
      "Requested delivery timeframe",
    ],
  },

  scheduledRoutes: {
    tab: "Scheduled Routes",
    label: "Recurring Delivery Program",
    title: "Reliable delivery routes built around your operation.",
    description:
      "Structured recurring transport for businesses requiring regular collections, stock movements and customer deliveries across planned service areas.",
    bestFor:
      "Furniture retailers, bedding stores, suppliers and businesses requiring daily, weekly or recurring transport support.",
    pricingModel: "Contract Route Rate",
    pricingNote:
      "Pricing is structured around route frequency, service area and expected delivery volume.",
    factors: [
      "Route frequency",
      "Collection locations",
      "Delivery service area",
      "Average delivery volume",
      "Vehicle and crew requirements",
      "Delivery windows and scheduling",
    ],
  },

  multiStop: {
    tab: "Multi-Stop",
    label: "Multi-Drop Commercial Delivery",
    title: "Multiple deliveries coordinated through one route.",
    description:
      "Efficient multi-stop delivery planning for customer orders, retail locations, commercial sites and distributed furniture consignments.",
    bestFor:
      "Retailers, warehouses, manufacturers and suppliers delivering to multiple customers or business locations.",
    pricingModel: "Route and Stop Rate",
    pricingNote:
      "The quote reflects the complete route, number of stops and delivery requirements at each destination.",
    factors: [
      "Number of delivery stops",
      "Total route distance",
      "Delivery windows",
      "Waiting and unloading time",
      "Furniture volume per stop",
      "Access at each destination",
    ],
  },

  dedicatedTruck: {
    tab: "Dedicated Truck",
    label: "Exclusive Vehicle and Crew",
    title: "Dedicated transport for priority commercial freight.",
    description:
      "An exclusive vehicle and delivery crew for larger volumes, urgent freight, protected transport and projects requiring direct scheduling.",
    bestFor:
      "Manufacturers, warehouses, retailers and commercial projects requiring exclusive vehicle capacity.",
    pricingModel: "Dedicated Truck Rate",
    pricingNote:
      "Pricing is based on the vehicle, crew, operating time and complete transport requirements.",
    factors: [
      "Truck size required",
      "Furniture load volume",
      "Crew requirements",
      "Travel distance",
      "Loading and unloading time",
      "Priority scheduling",
    ],
  },

  interstate: {
    tab: "Interstate",
    label: "Interstate Commercial Transport",
    title: "Commercial furniture transport across Australia.",
    description:
      "Planned interstate furniture transport connecting suppliers, warehouses, retailers and commercial destinations across regional and metropolitan areas.",
    bestFor:
      "Businesses moving furniture stock, commercial orders or project freight between states.",
    pricingModel: "Interstate Project Quote",
    pricingNote:
      "Each interstate quote is prepared around the route, volume, timing and delivery configuration.",
    factors: [
      "Collection and destination",
      "Interstate route distance",
      "Load volume",
      "Shared or dedicated capacity",
      "Access and handling conditions",
      "Required delivery timeframe",
    ],
  },

  whiteGlove: {
    tab: "White Glove",
    label: "Premium Final-Stage Delivery",
    title: "Specialist handling from arrival to final placement.",
    description:
      "Premium delivery support for designer furniture, valuable pieces and customer-facing installations requiring additional care and presentation.",
    bestFor:
      "Interior designers, furniture retailers, developers and businesses delivering premium or delicate furniture.",
    pricingModel: "Specialist Service Quote",
    pricingNote:
      "Pricing reflects the additional handling, placement and on-site service requirements.",
    factors: [
      "Furniture type and value",
      "Protective handling needs",
      "Room-of-choice placement",
      "Assembly or installation",
      "Property access",
      "Packaging removal requirements",
    ],
  },
};

const pricingModelKeys = Object.keys(
  commercialPricingModels,
) as PricingModelKey[];

export default function CommercialPricingGuide() {
  const [activeModel, setActiveModel] =
    useState<PricingModelKey>("singleRun");

  const toggleRef = useRef<HTMLDivElement>(null);

  const buttonRefs = useRef<
    Partial<Record<PricingModelKey, HTMLButtonElement>>
  >({});

  const [indicatorStyle, setIndicatorStyle] =
    useState<IndicatorStyle>({
      width: 0,
      height: 0,
      transform: "translate3d(0, 0, 0)",
      opacity: 0,
    });

  const selectedModel =
    commercialPricingModels[activeModel];

  const openPricingPopup = () => {
    window.dispatchEvent(
      new CustomEvent("open-ross-popup", {
        detail: {
          deliveryModel: selectedModel.tab,
        },
      }),
    );
  };

  const updateIndicator = useCallback(() => {
    const activeButton = buttonRefs.current[activeModel];

    if (!activeButton) return;

    setIndicatorStyle({
      width: activeButton.offsetWidth,
      height: activeButton.offsetHeight,
      transform: `translate3d(
        ${activeButton.offsetLeft}px,
        ${activeButton.offsetTop}px,
        0
      )`,
      opacity: 1,
    });
  }, [activeModel]);

  useEffect(() => {
    updateIndicator();

    const toggle = toggleRef.current;

    if (!toggle) return;

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });

    resizeObserver.observe(toggle);

    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener(
        "resize",
        updateIndicator,
      );
    };
  }, [updateIndicator]);

  return (
    <section
      className="ross-commercial-pricing"
      aria-labelledby="ross-commercial-pricing-title"
    >
      <div className="ross-commercial-pricing-container">
        <header className="ross-commercial-pricing-header">
          <p className="ross-commercial-pricing-label">
            Commercial Pricing
          </p>

          <h2
            id="ross-commercial-pricing-title"
            className="ross-commercial-pricing-title"
          >
            <span>Commercial Pricing Built</span>

            <span>
              Around Your Operation<i>.</i>
            </span>
          </h2>

          <p className="ross-commercial-pricing-intro">
            Every commercial delivery is different. Select
            the option that best matches your delivery
            structure to understand how pricing is
            calculated.
          </p>
        </header>

        <div
          ref={toggleRef}
          className="ross-commercial-pricing-tabs"
          role="tablist"
          aria-label="Select a commercial delivery pricing model"
        >
          <span
            className="ross-commercial-pricing-indicator"
            style={indicatorStyle}
            aria-hidden="true"
          />

          {pricingModelKeys.map((modelKey) => {
            const model =
              commercialPricingModels[modelKey];

            const isActive = activeModel === modelKey;

            return (
              <button
                ref={(element) => {
                  if (element) {
                    buttonRefs.current[modelKey] =
                      element;
                  }
                }}
                key={modelKey}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="ross-commercial-pricing-panel"
                className={`ross-commercial-pricing-tab${
                  isActive ? " is-active" : ""
                }`}
                onClick={() => setActiveModel(modelKey)}
              >
                {model.tab}
              </button>
            );
          })}
        </div>

        <article
          id="ross-commercial-pricing-panel"
          className="ross-commercial-pricing-panel"
          role="tabpanel"
        >
          <div className="ross-commercial-pricing-overview">
            <p className="ross-commercial-pricing-panel-label">
              {selectedModel.label}
            </p>

            <h3 className="ross-commercial-pricing-panel-title">
              {selectedModel.title}
            </h3>

            <p className="ross-commercial-pricing-description">
              {selectedModel.description}
            </p>

            <div className="ross-commercial-pricing-best-for">
              <span className="ross-commercial-pricing-best-for-mark">
                B2B
              </span>

              <div>
                <strong>Best suited for</strong>

                <p>{selectedModel.bestFor}</p>
              </div>
            </div>
          </div>

          <div className="ross-commercial-pricing-factors">
            <p className="ross-commercial-pricing-column-label">
              Pricing considers
            </p>

            <ul>
              {selectedModel.factors.map((factor) => (
                <li key={factor}>
                  <span aria-hidden="true" />

                  <p>{factor}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="ross-commercial-pricing-model">
            <p className="ross-commercial-pricing-column-label">
              Pricing model
            </p>

            <strong className="ross-commercial-pricing-model-title">
              {selectedModel.pricingModel}
            </strong>

            <span
              className="ross-commercial-pricing-model-line"
              aria-hidden="true"
            />

            <p className="ross-commercial-pricing-model-copy">
              {selectedModel.pricingNote}
            </p>

            <button
              type="button"
              className="ross-commercial-pricing-button"
              onClick={openPricingPopup}
            >
              Request Commercial Pricing
            </button>
          </div>
        </article>

        <div className="ross-commercial-pricing-disclaimer">
          <span
            className="ross-commercial-pricing-disclaimer-mark"
            aria-hidden="true"
          >
            i
          </span>

          <p>
            Every commercial quote is tailored to the
            specific delivery requirements. Final pricing
            depends on distance, furniture volume, vehicle
            requirements, access, scheduling, handling needs
            and any additional services requested.
          </p>
        </div>
      </div>
    </section>
  );
}