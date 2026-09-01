"use client";

import type { MouseEvent, ReactNode } from "react";

type ScrollToButtonProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollToButton({
  targetId,
  className,
  children,
}: ScrollToButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
