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
  pushGtmEvent("phone_click", {
    click_location: location,
    phone_number: "+491629007565",
  });
}

export function trackWhatsappClick(location: string) {
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

export function trackContactFormSubmit(location: string) {
  pushGtmEvent("contact_form_submit", {
    form_location: location,
  });
}
