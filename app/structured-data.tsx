import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexo Tech IT",
    alternateName: "NexoTech",
    description:
      "Leading web development agency in Bangladesh specializing in e-commerce solutions, custom web applications, and high-converting landing pages. We build fast, SEO-optimized websites using Next.js, React, and modern technologies.",
    url: "https://nexotechit.com",
    logo: "https://nexotechit.com/logo.png",
    image: "https://nexotechit.com/og-image.png",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Layek Miah",
      jobTitle: "Founder & Full-Stack Web Developer",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressCountryName: "Bangladesh",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+880-1794-700226",
        contactType: "Customer Service",
        email: "contact@nexotechit.com",
        availableLanguage: ["English", "Bengali"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "contact@nexotechit.com",
        availableLanguage: ["English", "Bengali"],
      },
    ],
    sameAs: [
      // Update with actual social media profiles when available
      // "https://www.linkedin.com/company/nexotechit",
      // "https://github.com/nexotechit",
      // "https://twitter.com/nexotechit",
      // "https://www.facebook.com/nexotechit",
    ],
    knowsAbout: [
      "Web Development",
      "E-commerce Development",
      "Next.js",
      "React",
      "TypeScript",
      "Full Stack Development",
      "SEO Optimization",
      "Landing Page Development",
      "Web Design",
      "Custom Web Applications",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "20",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development Services",
    provider: {
      "@type": "Organization",
      name: "Nexo Tech IT",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Website Development",
            description:
              "Modern, fast, and secure e-commerce websites with product management, payment integration, and mobile-friendly design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Conversion Landing Pages",
            description:
              "Conversion-focused landing pages designed to turn visitors into customers with fast loading performance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Applications",
            description:
              "Tailor-made web applications built with scalable architecture and modern tech stack",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nexotechit.com",
      },
    ],
  };

  return (
    <>
      {React.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(organizationSchema) },
        key: "organization-schema",
      })}
      {React.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(serviceSchema) },
        key: "service-schema",
      })}
      {React.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(breadcrumbSchema) },
        key: "breadcrumb-schema",
      })}
    </>
  );
}
