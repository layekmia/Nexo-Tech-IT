import React from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most landing pages take 3–7 days, while e-commerce websites usually take 1–3 weeks depending on features and content. I always share a clear timeline before starting.",
  },
  {
    question: "Do you provide revisions after delivery?",
    answer:
      "Yes. I include revision rounds to make sure the final result matches your expectations. Client satisfaction is my top priority.",
  },
  {
    question: "Will the website be mobile-friendly and fast?",
    answer:
      "Absolutely. Every website I build is fully responsive, optimized for speed, and designed to perform well on all devices.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I primarily work with modern technologies like Next.js, React, Tailwind CSS, and secure backend tools to build fast, scalable, and SEO-friendly websites.",
  },
  {
    question: "Can you help after the project is completed?",
    answer:
      "Yes. I offer post-launch support, bug fixes, and future updates if you need improvements or new features later on.",
  },
];

export default function FAQStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) },
  });
}

