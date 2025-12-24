"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ShoppingCart,
  LayoutTemplate,
  Code2,
  ArrowRight,
} from "lucide-react";
import Container from "./Container";
import { useEffect, useState } from "react";

const services = [
  {
    title: "E-commerce Website Development",
    icon: ShoppingCart,
    description:
      "Modern, fast, and secure e-commerce websites that help you sell more online.",
    features: [
      "Product management",
      "Cart & checkout system",
      "Payment gateway integration",
      "Mobile-friendly design",
      "SEO-ready structure",
    ],
    cta: "Build My Store",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "High-Conversion Landing Pages",
    icon: LayoutTemplate,
    description:
      "Landing pages designed to convert visitors into customers and leads.",
    features: [
      "Conversion-focused layout",
      "Fast loading performance",
      "Mobile-first design",
      "Clear call-to-action",
      "Reusable for any product",
    ],
    cta: "Get a Landing Page",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Custom Web Applications",
    icon: Code2,
    description:
      "Tailor-made web applications built to solve your specific business problems.",
    features: [
      "Custom features & logic",
      "Scalable architecture",
      "Modern tech stack",
      "Secure & optimized",
      "Future-ready solution",
    ],
    cta: "Discuss My Idea",
    gradient: "from-orange-500/20 to-red-500/20",
    iconGradient: "from-orange-500 to-red-500",
  },
];

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-20 delay-1000" />

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div
            className={`w-20 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full mx-auto mb-4 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          />
          <p
            className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We offer a wide range of services to help you grow your business
            online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const delay = index * 100;

            return (
              <Card
                key={index}
                className={`
                  group relative
                  border border-border/50
                  bg-card/50 backdrop-blur-sm
                  shadow-md hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:border-primary/30
                  overflow-hidden
                  flex flex-col
                  ${
                    mounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />

                <CardHeader className="text-center pb-4 relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`
                      relative mx-auto mb-6 p-4 rounded-2xl w-fit
                      bg-linear-to-br ${service.iconGradient}
                      shadow-lg shadow-primary/20
                      group-hover:shadow-xl group-hover:shadow-primary/30
                      group-hover:scale-110
                      transition-all duration-500
                      before:absolute before:inset-0 before:rounded-2xl
                      before:bg-linear-to-br before:from-white/20 before:to-transparent
                      before:pointer-events-none
                    `}
                  >
                    <IconComponent className="h-8 w-8 text-white relative z-10" />
                  </div>

                  <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 relative z-10">
                  {/* Features List */}
                  <div className="space-y-3 mb-6 flex-1">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 group/feature"
                      >
                        <div className="mt-0.5 p-0.5 rounded-full bg-primary/10 group-hover/feature:bg-primary/20 transition-colors">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full mt-auto group/btn relative overflow-hidden"
                    onClick={(e) => {
                      const anchor = e.currentTarget.querySelector("a");
                      if (anchor) {
                        handleSmoothScroll(
                          e as unknown as React.MouseEvent<HTMLAnchorElement>,
                          "contact"
                        );
                      }
                    }}
                  >
                    <a
                      href="#contact"
                      onClick={(e) => handleSmoothScroll(e, "contact")}
                      className="relative z-10 flex items-center justify-center w-full"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <span className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary transition-opacity opacity-0 group-hover/btn:opacity-100" />
                  </Button>
                </CardContent>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
