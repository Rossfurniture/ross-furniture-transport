"use client";

import ActionButton from "./ActionButton";

type RequestDeliveryQuoteProps = {
  className?: string;
};

export default function RequestDeliveryQuote({
  className = "",
}: RequestDeliveryQuoteProps) {
  const openRossPopup = () => {
    window.dispatchEvent(
      new CustomEvent("open-ross-popup", {
        detail: {
          deliveryModel: "General Delivery Quote",
        },
      }),
    );
  };

  return (
    <ActionButton
      onClick={openRossPopup}
      variant="primary"
      className={className}
      ariaLabel="Request a delivery quote"
    >
      Request Delivery Quote
    </ActionButton>
  );
}