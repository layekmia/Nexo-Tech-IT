import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://nexotechit.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nexo Tech IT | Custom Software Development & SaaS Solutions",
    template: "%s | Nexo Tech IT",
  },
  description:
    "Nexo Tech IT builds custom software, ready-made SaaS products, and provides IT consulting for businesses worldwide. From e-commerce to school management — we deliver solutions that scale.",
  keywords: [
    "custom software development",
    "SaaS development company",
    "IT consulting firm",
    "web app development company",
    "mobile app development",
    "white label software",
    "school management system",
    "LMS platform",
    "ecommerce platform development",
    "POS system",
    "global software company",
    "tech agency",
  ],
  authors: [{ name: "Nexo Tech IT", url: BASE_URL }],
  creator: "Nexo Tech IT",
  publisher: "Nexo Tech IT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Nexo Tech IT",
    title: "Nexo Tech IT | Custom Software Development & SaaS Solutions",
    description:
      "Custom software development, ready-made SaaS products & IT consulting for businesses worldwide. Build smarter, scale faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexo Tech IT — Custom Software Development & SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Tech IT | Custom Software Development & SaaS Solutions",
    description:
      "Custom software development, SaaS products & IT consulting for businesses worldwide.",
    images: ["/og-image.png"],
    creator: "@nexotechit",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here once you have it:
    // google: "your-google-verification-code",
  },
  category: "technology",
};

// Organization Schema — helps Google & AI understand your company
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexo Tech IT",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Nexo Tech IT provides custom software development, ready-made SaaS products, web & mobile development, and IT consulting for businesses worldwide.",
  foundingDate: "2024",
  areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: "23.6850", longitude: "90.3563" }, geoRadius: "40000000" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: `${BASE_URL}/contact`,
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/nexotechit",
    "https://github.com/nexotechit",
    "https://twitter.com/nexotechit",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          url: `${BASE_URL}/services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & Mobile App Development",
          url: `${BASE_URL}/services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Consulting & Support",
          url: `${BASE_URL}/services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Product Licensing",
          url: `${BASE_URL}/services`,
        },
      },
    ],
  },
};

// Website Schema — helps with sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexo Tech IT",
  url: BASE_URL,
  description:
    "Custom software development, SaaS products & IT consulting for businesses worldwide.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to critical origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col font-sans text-slate-800 bg-white">
        {/* Organization JSON-LD Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        {/* Website JSON-LD Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
