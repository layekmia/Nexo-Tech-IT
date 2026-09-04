import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Software Consultation",
  description:
    "Ready to build your custom software or deploy a ready-made SaaS product? Contact Nexo Tech IT for a free, no-obligation consultation. We serve clients worldwide.",
  keywords: [
    "contact Nexo Tech IT",
    "hire software developers",
    "custom software quote",
    "free IT consultation",
    "software development company contact",
  ],
  alternates: {
    canonical: "https://nexotechit.com/contact",
  },
  openGraph: {
    title: "Contact Nexo Tech IT — Free Software Consultation",
    description:
      "Get a free consultation for your custom software project. Nexo Tech IT serves clients worldwide. No obligation, fast response.",
    url: "https://nexotechit.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
