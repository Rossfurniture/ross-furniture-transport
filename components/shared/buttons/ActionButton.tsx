"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import "./Button.css";

type ActionButtonProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "light";
  className?: string;
  ariaLabel?: string;
};

export default function ActionButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ActionButtonProps) {
  const classes =
    `ross-action-button ross-action-button-${variant} ${className}`.trim();

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        <span>{children}</span>
      </button>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      aria-label={ariaLabel}
      className={classes}
    >
      <span>{children}</span>
    </Link>
  );
}