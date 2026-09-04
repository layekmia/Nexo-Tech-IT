import type { Metadata } from "next";
import { Code2, Package, Smartphone, Shield, Database, Server, Layout } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Services — Custom Software, Web & Mobile, IT Consulting",
  description:
    "Nexo Tech IT delivers custom software development, web & mobile app development, SaaS product licensing, and IT consulting for businesses worldwide. Request a free quote.",
  keywords: [
    "custom software development company",
    "web app development services",
    "mobile app development company",
    "IT consulting services",
    "SaaS product licensing",
    "white label software",
  ],
  alternates: {
    canonical: "https://nexotechit.com/services",
  },
  openGraph: {
    title: "Software Development Services | Nexo Tech IT",
    description:
      "Custom software, web & mobile apps, IT consulting & SaaS product licensing for businesses worldwide.",
    url: "https://nexotechit.com/services",
    images: [{ url: "/images/services/custom_software.jpg", width: 1200, height: 630, alt: "Nexo Tech IT Services" }],
  },
};

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What custom software development services does Nexo Tech IT offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexo Tech IT offers end-to-end custom software development including web applications, SaaS platforms, enterprise systems, and REST API development. We work with clients globally.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nexo Tech IT develop mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nexo Tech IT builds cross-platform iOS and Android mobile apps using React Native, as well as Progressive Web Apps (PWAs) and native mobile applications.",
      },
    },
    {
      "@type": "Question",
      name: "What is SaaS product licensing and how does Nexo Tech IT offer it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SaaS product licensing means deploying a ready-made, proven software platform under your own brand. Nexo Tech IT offers white-label versions of its products — including e-commerce, POS, LMS, and school management systems — that can be customised and deployed within days.",
      },
    },
  ],
};


export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
        strategy="afterInteractive"
      />
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver end-to-end digital solutions tailored to your business goals. 
              From custom development to ready-made products, we have you covered.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-24">
          {[
            {
              icon: Code2,
              title: "Custom Software Development",
              desc: "Tailor-made software built exactly to your business requirements. We build scalable, secure, and high-performance applications that solve your unique challenges.",
              features: ["Web Applications", "SaaS Platforms", "Enterprise Systems", "API Development"],
              tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
              image: "/images/services/custom_software.jpg",
            },
            {
              icon: Package,
              title: "Ready-Made Product Licensing",
              desc: "Deploy our battle-tested software products for your business in days, not months. We customize our proven platforms to match your brand and workflow perfectly.",
              features: ["White-label Solutions", "Rapid Deployment", "Custom Branding", "Ongoing Updates"],
              tech: ["Laravel", "MySQL", "React", "AWS"],
              image: "/images/services/ready_made.jpg",
            },
            {
              icon: Smartphone,
              title: "Web & Mobile Development",
              desc: "Modern, fast, and scalable web and mobile applications built with cutting-edge technology. From MVP launch to full enterprise product, we handle every stage.",
              features: ["iOS & Android Apps", "Progressive Web Apps", "Responsive Design", "Cross-platform Development"],
              tech: ["React Native", "Next.js", "Tailwind CSS", "MongoDB"],
              image: "/images/services/web_mobile.jpg",
            },
            {
              icon: Shield,
              title: "IT Consulting & Support",
              desc: "Strategic tech advice and long-term support to keep your systems running at peak performance. We become your trusted technology partner for the long run.",
              features: ["Architecture Planning", "Security Audits", "Cloud Migration", "24/7 Support"],
              tech: ["AWS", "Docker", "Git", "Linux"],
              image: "/images/services/it_consulting.jpg",
            }
          ].map((service, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <Reveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 === 0 ? "order-2 lg:order-1" : "order-1"}>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Discuss Your Project
                </Link>
              </Reveal>
              <Reveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 0 ? "order-1 lg:order-2" : "order-2"}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
                   <Image 
                     src={service.image} 
                     alt={`${service.title} - Nexo Tech IT Software Services`} 
                     fill 
                     sizes="(max-width: 768px) 100vw, 50vw"
                     priority={i === 0}
                     className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
