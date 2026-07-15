import ActionButton from "./ActionButton";

type TalkToRossProps = {
  className?: string;
};

export default function TalkToRoss({
  className = "",
}: TalkToRossProps) {
  return (
    <ActionButton
      href="/production/contact"
      variant="primary"
      className={className}
      ariaLabel="Talk to Ross"
    >
      Talk to Ross
    </ActionButton>
  );
}
