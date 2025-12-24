"use client";

import { ArrowRight, Globe, Sparkles, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
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
    <section
      id="home"
      className="relative py-12 md:py-18  px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-20 delay-1000" />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge with Animation */}
        <div
          className={`inline-block mb-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Badge
            className="mb-4 px-4 py-1.5 text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
            variant="secondary"
          >
            <Globe className="h-4 w-4 mr-2 animate-spin-slow" />
            Trusted Web Development Agency Worldwide
          </Badge>
        </div>

        {/* Main Heading with Enhanced Gradient */}
        <h1
          className={`text-5xl  font-bold mb-8 leading-tight transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            We Build High-Converting
          </span>
          <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Websites & E-commerce Solutions
          </span>
        </h1>

        {/* Description with Fade In */}
        <p
          className={`text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We help businesses grow online by creating fast, SEO-optimized, and
          conversion-focused websites. From modern landing pages to full-stack
          e-commerce solutions with{" "}
          <span className="text-primary font-semibold">
            analytics, tracking & automation
          </span>
          .
        </p>

        {/* CTA Buttons with Stagger Animation */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            onClick={(e) => handleSmoothScroll(e, "portfolio")}
            size="lg"
            className="group relative px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "portfolio")}
              className="relative z-10 flex items-center"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-semibold border-2 hover:bg-accent hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="relative z-10 flex items-center"
            >
              Get Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span>Global Reach</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
