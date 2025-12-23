"use client";

import Hero from "@/components/Home/Hero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Award, } from "lucide-react";

interface HomepageProps {
  onSectionChange: (section: string) => void;
}

export default function Homepage({ onSectionChange }: HomepageProps) {
  

  const featuredProducts = [
    {
      title: "Enterprise SaaS Platform",
      description: "Scalable cloud-based solutions for modern businesses",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      badge: "Popular",
    },
    {
      title: "Custom Development Services",
      description: "Tailored software solutions for your unique needs",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      badge: "Custom",
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced data insights and machine learning solutions",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      badge: "New",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <Hero />

      {/* Core Advantages */}
      <WhyChooseUs />

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Featured Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular products and services that have helped
              businesses achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    {product.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl mb-2">500+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">1000+</div>
              <div className="text-primary-foreground/80">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">10+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">99%</div>
              <div className="text-primary-foreground/80">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's discuss how we can help transform your business with
            innovative software solutions.
          </p>
          <Button
            size="lg"
            onClick={() => onSectionChange("contact")}
            className="group"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}
