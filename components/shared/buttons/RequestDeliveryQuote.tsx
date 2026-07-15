import ActionButton from "./ActionButton";

type RequestDeliveryQuoteProps = {
  className?: string;
};

export default function RequestDeliveryQuote({
  className = "",
}: RequestDeliveryQuoteProps) {
  return (
    <ActionButton
      href="/production/contact#delivery-quote"
      variant="primary"
      className={className}
      ariaLabel="Request a delivery quote"
    >
      Request Delivery Quote
    </ActionButton>
  );
}