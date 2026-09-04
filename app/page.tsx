import type { Metadata } from "next";
import { Products } from "@/components/Products";
import CtaBanner from "@/components/home/CtaBanner";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Team from "@/components/home/Founders";
import WhyChoose from "@/components/home/WhyChoose";
import FAQ from "@/components/home/FAQ";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nexo Tech IT | Custom Software Development & SaaS Solutions",
  description:
    "Nexo Tech IT builds custom software, SaaS products & delivers IT consulting for businesses worldwide. E-commerce, LMS, School Management, POS, Ride-sharing & more.",
  alternates: {
    canonical: "https://nexotechit.com",
  },
  openGraph: {
    title: "Nexo Tech IT | Custom Software Development & SaaS Solutions",
    description:
      "From ready-made SaaS products to fully custom software — we help businesses globally work smarter and scale faster.",
    url: "https://nexotechit.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexo Tech IT — Custom Software Development & SaaS Solutions",
      },
    ],
  },
};

// Homepage-specific FAQ schema (for AI Overview)
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Nexo Tech IT offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexo Tech IT offers custom software development, ready-made SaaS product licensing, web & mobile app development, and IT consulting & support for businesses globally.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nexo Tech IT build custom software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nexo Tech IT specialises in custom software development — including web applications, SaaS platforms, enterprise systems, and API development — tailored precisely to your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What ready-made software products does Nexo Tech IT offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexo Tech IT offers a suite of ready-made, white-label SaaS products including ShopCart (e-commerce), SmartBebsha (POS & inventory), SmartSchool (school management), EduFlow (LMS), RideX (ride-sharing), and NaTours (tour booking).",
      },
    },
    {
      "@type": "Question",
      name: "Which countries does Nexo Tech IT serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexo Tech IT serves clients worldwide.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
        strategy="afterInteractive"
      />
      <Hero />
      <Stats />
      <Products />
      <Services />
      <WhyChoose />
      <Team />
      <FAQ />
      <CtaBanner />
    </>
  );
}
