"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const launchDate = new Date("2026-07-23T00:00:00+10:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const difference = launchDate - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    {
      value: timeLeft.seconds,
      label: "Seconds",
      highlight: true,
    },
  ];

  return (
    <main className="launch-page">
      <div className="launch-logo">
        <Image
          src="/logo/ross-furniture-transport-whtebg.webp"
          alt="Ross Furniture Transport"
          width={180}
          height={180}
          priority
        />
      </div>

      <section className="launch-content">
        <h1>
          Ross Furniture <span>Transport</span>
        </h1>

        <p className="launch-description">
          Our website is under construction. We&apos;re preparing a better
          furniture transport experience for businesses across Australia.
        </p>

        <p className="launch-label">Launching In</p>

        <div
          className="launch-countdown"
          aria-label="Countdown to website launch"
        >
          {countdownItems.map((item, index) => (
            <div className="launch-countdown-group" key={item.label}>
              <div
                className={`launch-countdown-item ${
                  item.highlight
                    ? "launch-countdown-item--highlight"
                    : ""
                }`}
              >
                <strong>
                  {String(item.value).padStart(2, "0")}
                </strong>

                <span>{item.label}</span>
              </div>

              {index < countdownItems.length - 1 && (
                <div className="launch-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
