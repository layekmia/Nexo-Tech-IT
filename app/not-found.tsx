"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  return (
    <div className="relative py-12 min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Animated Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-20 delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse opacity-15 delay-500" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number with Animation */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-[80px] md:text-[100px] lg:text-[120px] font-bold leading-none">
            <span className="block bg-linear-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
              404
            </span>
          </h1>
        </div>

        {/* Icon with Animation */}
        <div
          className={`mb-6 flex justify-center transition-all duration-1000 delay-200 ${
            mounted
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 rotate-12"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-ping" />
            <div className="relative p-4 bg-primary/10 rounded-full border-2 border-primary/30">
              <AlertCircle className="h-12 w-12 md:h-16 md:w-16 text-primary animate-bounce" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Page Not Found
          </span>
        </h2>

        {/* Description */}
        <p
          className={`text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Oops! The page you&apos;re looking for seems to have wandered off into
          the digital void. Don&apos;t worry, let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            asChild
            className="group relative px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              Back to Home
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="group px-8 py-6 text-base font-semibold border-2 hover:bg-accent hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div
          className={`mt-16 pt-8 border-t border-border/50 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Or explore our popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#services"
              className="text-primary hover:text-primary/80 text-sm font-medium hover:underline transition-colors flex items-center gap-1"
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="text-primary hover:text-primary/80 text-sm font-medium hover:underline transition-colors flex items-center gap-1"
            >
              Portfolio
            </Link>
            <Link
              href="/#about"
              className="text-primary hover:text-primary/80 text-sm font-medium hover:underline transition-colors flex items-center gap-1"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-primary hover:text-primary/80 text-sm font-medium hover:underline transition-colors flex items-center gap-1"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full ${
              mounted ? "animate-float" : "opacity-0"
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
