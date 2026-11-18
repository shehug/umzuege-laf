declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

type GtmEventParams = Record<string, string | number | boolean | undefined>;

export function pushGtmEvent(event: string, params?: GtmEventParams) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event,
    ...params,
  });
}

export function trackPhoneClick(location: string) {
  pushGtmEvent("click_call", {
    click_location: location,
    phone_number: "+491629007565",
  });
  pushGtmEvent("phone_click", {
    click_location: location,
    phone_number: "+491629007565",
  });
}

export function trackWhatsappClick(location: string) {
  pushGtmEvent("click_whatsapp", {
    click_location: location,
    phone_number: "+491629007565",
  });
  pushGtmEvent("whatsapp_click", {
    click_location: location,
    phone_number: "+491629007565",
  });
}

export function trackEmailClick(location: string) {
  pushGtmEvent("email_click", {
    click_location: location,
    email: "info@umzuege-laf.de",
  });
}

export function trackBookingClick(location: string) {
  pushGtmEvent("booking_click", {
    click_location: location,
    service: "Vor-Ort-Besichtigung",
  });
}

export function trackContactFormSubmit(location: string) {
  pushGtmEvent("form_submit", {
    form_location: location,
  });
  pushGtmEvent("contact_form_submit", {
    form_location: location,
  });
}

export function trackCalculatorSubmit(params?: Record<string, unknown>) {
  pushGtmEvent("calculator_submit", params as GtmEventParams);
  pushGtmEvent("calculator_completed", params as GtmEventParams);
}
