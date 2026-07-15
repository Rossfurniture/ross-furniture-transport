import ActionButton from "./ActionButton";

type ExploreDeliverySolutionsProps = {
  className?: string;
};

export default function ExploreDeliverySolutions({
  className = "",
}: ExploreDeliverySolutionsProps) {
  return (
    <ActionButton
      href="/production/services"
      variant="outline"
      className={className}
      ariaLabel="Explore delivery solutions"
    >
      Explore Delivery Solutions
    </ActionButton>
  );
}