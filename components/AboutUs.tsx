"use client";

import {
  CheckCircle,
  Heart,
  Target,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import Container from "./Container";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our success. We're committed to delivering exceptional results",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Heart,
      title: "Team Excellence",
      description:
        "We foster a culture of continuous learning and professional growth",
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: CheckCircle,
      title: "Quality Commitment",
      description:
        "We maintain the highest standards in code quality and project delivery",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  const stats = [
    { icon: Award, value: "20+", label: "Projects Completed" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
    { icon: Users, value: "5+", label: "Years Experience" },
    { icon: CheckCircle, value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-20 delay-1000" />

      <Container className="relative">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              About NexoTech
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            At NexoTech, we craft web solutions that help businesses thrive
            online. From building responsive websites to developing complex web
            applications, we turn ideas into impactful digital experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border border-border/50 bg-card/50 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1 bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Profile */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full mb-6" />
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nexo Tech IT was founded with a clear vision: to make modern web
              solutions accessible, efficient, and impactful for businesses of
              all sizes. What began as a small, passionate team has grown into a
              reliable digital partner delivering high-quality web experiences
              across different industries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we help startups and growing businesses leverage technology
              to increase visibility, improve performance, and scale
              confidently. Our focus on quality, transparency, and long-term
              client success is at the heart of everything we build.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Nexo Tech IT development team working on web development projects"
                className="rounded-2xl w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Founder & Values Section */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Nexo Tech IT is built on strong values and hands-on leadership —
              focused on quality, performance, and real business results.
            </p>
          </div>

          {/* Content - Updated alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Founder Card - Made height equal to values grid */}
            <Card className="text-center h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/0 transition-all duration-500 pointer-events-none" />
              <CardHeader className="relative pt-8">
                <div className="mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative rounded-full p-1 bg-linear-to-br from-primary/20 to-primary/10">
                    <ImageWithFallback
                      src="/founder.jpg"
                      alt="Layek Miah - Founder and Full-Stack Web Developer at Nexo Tech IT"
                      className="h-[180px] w-[180px] rounded-full object-cover mx-auto border-4 border-background"
                    />
                  </div>
                </div>

                <CardTitle className="text-2xl font-bold mb-2">
                  Layek Miah
                </CardTitle>
                <CardDescription className="text-primary font-semibold text-base">
                  Founder & Full-Stack Web Developer
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-4 flex-1">
                <p className="text-muted-foreground leading-relaxed">
                  I help startups and businesses build modern e-commerce
                  platforms and high-converting landing pages using React,
                  Next.js, and Tailwind CSS.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When you work with Nexo Tech IT, you work directly with the
                  developer — no middlemen, no delays, just clear communication
                  and quality work.
                </p>
              </CardContent>

              {/* Optional: Add padding at bottom for better spacing */}
              <div className="pb-6" />
            </Card>

            {/* Core Values - Grid with equal height items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const delay = index * 100;
                return (
                  <Card
                    key={index}
                    className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col"
                    style={{
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    />
                    <CardHeader className="relative pt-6 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                          {value.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative flex-1 pb-6">
                      <CardDescription className="leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
