import Link from "next/link";
import type { ReactNode } from "react";

import "./Button.css";

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "light";
  className?: string;
  ariaLabel?: string;
};

export default function ActionButton({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`ross-action-button ross-action-button-${variant} ${className}`.trim()}
    >
      <span>{children}</span>
    </Link>
  );
}