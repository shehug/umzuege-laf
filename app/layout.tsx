import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CookieConsent from "../components/CookieConsent";
import SeoJsonLd from "../components/SeoJsonLd";
import GoogleTagManager from "../components/GoogleTagManager";

const siteUrl = "https://umzuegelandshut.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Umzüge LAF | Umzugsunternehmen & Entrümpelung in Landshut",
    template: "%s | Umzüge LAF Landshut",
  },

  description:
    "Umzüge LAF ist Ihr zuverlässiges Umzugsunternehmen in Landshut für Privatumzug, Firmenumzug, Entrümpelung, Haushaltsauflösung, Möbelmontage, Einpackservice und Sperrmüllentsorgung.",


  keywords: [
    "Umzugsunternehmen Landshut",
    "Umzug Landshut",
    "Umzüge Landshut",
    "Umzugsfirma Landshut",
    "Entrümpelung Landshut",
    "Haushaltsauflösung Landshut",
    "Wohnungsentrümpelung Landshut",
    "Kellerentrümpelung Landshut",
    "Dachbodenentrümpelung Landshut",
    "Garagenentrümpelung Landshut",
    "Sperrmüllentsorgung Landshut",
    "Möbelmontage Landshut",
    "Einpackservice Landshut",
    "Firmenumzug Landshut",
    "Privatumzug Landshut",
    "Umzüge LAF",
  ],

  authors: [{ name: "Umzüge LAF" }],
  creator: "Umzüge LAF",
  publisher: "Umzüge LAF",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Umzüge LAF",
    title: "Umzüge LAF | Umzugsunternehmen & Entrümpelung in Landshut",
    description:
      "Professionelle Umzüge, Entrümpelungen, Haushaltsauflösungen, Möbelmontage, Einpackservice und Sperrmüllentsorgung in Landshut & Umgebung.",
    images: [
      {
        url: "/images/logo/laf-logo.png",
        width: 1200,
        height: 630,
        alt: "Umzüge LAF Landshut",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Umzüge LAF | Umzugsunternehmen in Landshut",
    description:
      "Umzüge, Entrümpelung, Haushaltsauflösung, Möbelmontage und Sperrmüllentsorgung in Landshut & Umgebung.",
    images: ["/images/logo/laf-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Umzugsunternehmen",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <GoogleTagManager />
        <SeoJsonLd />
        {children}
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
