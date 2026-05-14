import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { LangSetter } from "./lang-setter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmtiresandmuffler.com"),
  title: "C&M Tires and Muffler | Auto Care Center in Wylie, TX",
  description:
    "Your trusted auto care center in Wylie, TX since 2005. New & used tires, brake repair, exhaust systems, oil changes, engine diagnostics, wheel alignment, and state inspections. Family-owned.",
  keywords: [
    "tires",
    "auto repair",
    "car service",
    "Wylie TX",
    "brake repair",
    "oil change",
    "exhaust system",
    "wheel alignment",
    "engine diagnostic",
    "muffler shop",
    "C&M Tires",
    "auto care Wylie",
    "tire shop Wylie TX",
  ],
  openGraph: {
    title: "C&M Tires and Muffler",
    description:
      "Your trusted auto care center in Wylie, TX. Tires, brakes, exhaust, oil change, and more.",
    url: "https://cmtiresandmuffler.com",
    siteName: "C&M Tires and Muffler",
    locale: "en_US",
    alternateLocale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C&M Tires and Muffler",
    description:
      "Your trusted auto care center in Wylie, TX. Tires, brakes, exhaust, oil change, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "C&M Tires and Muffler",
  image: "https://cmtiresandmuffler.com/favicon.svg",
  url: "https://cmtiresandmuffler.com",
  telephone: "+19724428395",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1300 Martinez Ln",
    addressLocality: "Wylie",
    addressRegion: "TX",
    postalCode: "75098",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.0016611,
    longitude: -96.5545909,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "17:00" },
  ],
  priceRange: "$$",
  description: "Your trusted auto care center in Wylie, TX. Tires, brakes, exhaust, oil change, and more.",
  sameAs: [
    "https://www.facebook.com/cmtireswylie",
    "https://wa.me/19724428395",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <LangSetter />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
