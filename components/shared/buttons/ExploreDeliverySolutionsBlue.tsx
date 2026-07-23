import ActionButton from "./ActionButton";

type ExploreDeliverySolutionsBlueProps = {
  className?: string;
};

export default function ExploreDeliverySolutionsBlue({
  className = "",
}: ExploreDeliverySolutionsBlueProps) {
  return (
    <ActionButton
      href="/services"
      variant="dark"
      className={className}
      ariaLabel="Explore delivery solutions"
    >
      Explore Delivery Solutions
    </ActionButton>
  );
}