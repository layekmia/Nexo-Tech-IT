"use client";

import { Code, Shield, Users, Zap } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import Container from "./Container";

const coreAdvantages = [
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "Cutting-edge technologies and best practices in software development",
    gradient: "from-gray-900 to-cyan-500/50",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "10+ years of industry experience with certified professionals",
    gradient: "from-gray-900 to-pink-500/50",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development process ensuring quick time-to-market",
    gradient: "from-gray-900 to-orange-500/50",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Enterprise-grade security and compliance standards",
    gradient: "from-gray-900 to-teal-500/50",
  },
];

export default function WhyChooseUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  return (
    <section id="whychooseus" className="py-16 bg-white/50 ">
      <Container className=" relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Why Choose NexoTech?
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-100 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Our proven expertise and commitment to excellence make us the
              preferred partner for businesses seeking reliable Web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              const delay = index * 100;

              return (
                <Card
                  key={index}
                  className={`
                  group relative text-center border border-border/50
                  bg-card/50 backdrop-blur-sm
                  shadow-md hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:border-primary/30
                  overflow-hidden
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
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />

                  <CardHeader className="pb-4">
                    <div
                      className={`
                      relative mx-auto mb-6 p-4 rounded-2xl w-fit
                      bg-linear-to-br ${advantage.gradient}
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
                    <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
