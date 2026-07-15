import Link from "next/link";

import "./Button.css";

type CallRossProps = {
  className?: string;
};

function PhoneIcon() {
  return (
<svg
  className="ross-call-icon"
  viewBox="0 0 24 24"
  fill="none"
  aria-hidden="true"
>
  <path
    d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 11.19 18.81 19.5 19.5 0 0 1 5.19 12.81 19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72l.38 2.67a2 2 0 0 1-.57 1.72L7.09 9.91a16 16 0 0 0 7 7l1.8-1.81a2 2 0 0 1 1.72-.57l2.67.38A2 2 0 0 1 22 16.92Z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
  );
}

export default function CallRoss({
  className = "",
}: CallRossProps) {
  return (
    <Link
      href="tel:+61413261153"
      className={`ross-call-link ${className}`.trim()}
      aria-label="Call Ross on 0413 261 153"
    >
      <PhoneIcon />
      <span>0413 261 153</span>
    </Link>
  );
}