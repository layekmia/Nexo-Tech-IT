import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "react-hot-toast";
import StructuredData from "./structured-data";

export const metadata: Metadata = {
  title: {
    default:
      "Nexo Tech IT | Web Development & E-commerce Solutions Agency | Bangladesh",
    template: "%s | Nexo Tech IT",
  },
  description:
    "Nexo Tech IT is a leading web development agency in Bangladesh. We specialize in building fast, SEO-optimized websites, high-converting landing pages, and scalable e-commerce platforms using Next.js, React, and modern technologies. 5+ years of expertise. Trusted by businesses worldwide.",

  keywords: [
    "Nexo Tech IT",
    "web development agency",
    "web design agency",
    "ecommerce website development",
    "Next.js development",
    "React web development",
    "SEO optimized websites",
    "business website development",
    "software company Bangladesh",
  ],

  metadataBase: new URL("https://nexotechit.com"),
  applicationName: "Nexo Tech IT",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",

  openGraph: {
    title: "Nexo Tech IT | Professional Web Development & E-commerce Agency",
    description:
      "Leading web development agency in Bangladesh. We build fast, SEO-optimized websites, high-converting landing pages, and scalable e-commerce platforms using Next.js, React, and modern technologies. 5+ years of expertise serving businesses worldwide.",
    url: "https://nexotechit.com",
    siteName: "Nexo Tech IT",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexo Tech IT – Professional Web Development & E-commerce Solutions Agency",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexo Tech IT | Web Development & E-commerce Agency",
    description:
      "Professional web development agency delivering fast, SEO-optimized websites, high-converting landing pages, and scalable e-commerce solutions. 5+ years expertise.",
    images: ["/twitter-image.png"],
    creator: "@nexotechit",
    site: "@nexotechit",
  },

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

  alternates: {
    canonical: "https://nexotechit.com",
  },

  authors: [{ name: "Layek Miah", url: "https://nexotechit.com" }],
  creator: "Layek Miah",
  publisher: "Nexo Tech IT",
  category: "Web Development",

  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <StructuredData />
        <main className="min-h-screen">
          <Navigation />
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
