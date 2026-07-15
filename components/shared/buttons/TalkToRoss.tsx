"use client";

import ActionButton from "./ActionButton";

type TalkToRossProps = {
  className?: string;
};

export default function TalkToRoss({
  className = "",
}: TalkToRossProps) {
  const openRossPopup = () => {
    window.dispatchEvent(new Event("open-ross-popup"));
  };

  return (
    <ActionButton
      onClick={openRossPopup}
      variant="primary"
      className={className}
      ariaLabel="Talk to Ross"
    >
      Talk to Ross
    </ActionButton>
  );
}