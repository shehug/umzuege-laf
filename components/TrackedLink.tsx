"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import {
  trackEmailClick,
  trackPhoneClick,
  trackWhatsappClick,
} from "@/lib/gtmEvents";

type TrackingType = "phone" | "whatsapp" | "email";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  tracking: TrackingType;
  trackingLocation: string;
  children: ReactNode;
};

export default function TrackedLink({
  tracking,
  trackingLocation,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (tracking === "phone") {
      trackPhoneClick(trackingLocation);
    }

    if (tracking === "whatsapp") {
      trackWhatsappClick(trackingLocation);
    }

    if (tracking === "email") {
      trackEmailClick(trackingLocation);
    }

    onClick?.(event);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
