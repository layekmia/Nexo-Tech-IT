"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Container from "./Container";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform with admin panel",
    description:
      "A modern, scalable e-commerce solution with advanced inventory management, payment integration, and real-time analytics.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Sanity",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/shopcart.png",
    liveUrl: "https://shopcart.nexotechit.com/",
    category: "Web Application",
  },
  {
    id: 2,
    title: "E-Commerce Landing page with admin panel",
    description:
      "ShopCo - A modern eCommerce landing page powered by Sanity CMS for seamless content management. Features dynamic product displays, real-time updates, and responsive design built with Next.js. Complete with integrated admin panel for effortless product and content control.",
    technologies: [
      "Nextjs",
      "sanity",
      "Typescript",
      "COD",
      "shadcn UI",
      "Tailwindcss",
    ],
    image: "/shopco.png",
    liveUrl: "shopco.nexotechit.com",
    category: "Web Application",
  },
  {
    id: 3,
    title: "E-Store with admin panel",
    description:
      "A production-ready eCommerce platform built with Next.js 15, featuring user authentication, admin dashboard, payment integration, and optimized performance using React Query, Redux Toolkit, and MongoDB.",
    technologies: [
      "Next.js",
      "React 19",
      "Redux Toolkit",
      "MongoDB",
      "React Query",
      "Tailwindcss",
      "Shadcn UI",
    ],
    image: "/e-store.png",
    liveUrl: "https://next-ecommerce-beta-mocha.vercel.app/",
    category: "Web Application",
  },
  {
    id: 4,
    title: "Ride sharing application with all the advanced features",
    description:
      "RideX is a modern, AI-powered ride-sharing platform that connects passengers with drivers in real-time. This repository contains the frontend implementation built with Next.js, React, and Tailwind CSS.",
    technologies: [
      "Nextjs",
      "React 19",
      "Tailwindcss",
      "socket.io",
      "Leaflet",
      "Shadcn UI",
      "GSAp",
      "Chart.js",
    ],
    image: "/ridex.png",
    liveUrl: "https://ridex-ride-sharing.vercel.app/",
    category: "Web Application",
  },
  {
    id: 5,
    title: "WorkSync - A SaaS Dashboard to Manage Employee",
    description:
      "Comprehensive business intelligence dashboard with interactive charts, data visualization, and customizable reporting features.",
    technologies: [
      "React",
      "Firebase",
      "Tailwindcss",
      "Shadcn UI",
      "Node.js",
      "MongoDB",
      "Material-UI",
    ],
    image: "/worksync.png",
    liveUrl: "https://worksync.nexotechit.com",
    category: "Dashboard",
  },
  {
    id: 6,
    title: "The Wildoasis A Hotel Management System",
    description:
      "The Wildoasis A Hotel Management System is a web application that allows hotel managers to manage their hotel's bookings, rooms, and customers.",
    technologies: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "Node.js",
      "Sanity",
      "Nodejs",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "BCrypt",
      "Multer",
      "Cloudinary",
      "Stripe",
      "Twilio",
      "SendGrid",
    ],
    image: "/wildoasis.png",
    liveUrl: "https://wildoasis.nexotechit.com/",
    category: "Web Application",
  },
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  return (
    <section id="portfolio" className="py-16">
      <Container className="bg-white/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Our Featured Projects
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-100 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Explore our portfolio of innovative projects that showcase our
              expertise in creating cutting-edge digital solutions for
              businesses worldwide.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const delay = index * 100;

              return (
                <Card
                  key={project.id}
                  className={`
                    group relative
                    border border-border/50
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
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500 pointer-events-none z-10" />

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none z-10" />

                  {/* Project Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500 z-20" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-4xl font-bold">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category} by Nexo Tech IT`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>
                  </div>

                  <CardHeader className="relative z-20">
                    {/* Category Badge */}
                    <div className="mb-2">
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium bg-primary/10 text-primary border-primary/20"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-20">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs bg-background/50 border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-background/50 border-border/50"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="default"
                          className="group/btn flex-1 min-w-[120px]"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-3 w-3 mr-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          Live Demo
                        </Button>
                      )}
                      {project.caseStudyUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="group/btn flex-1 min-w-[120px]"
                          onClick={() =>
                            window.open(project.caseStudyUrl, "_blank")
                          }
                        >
                          Case Study
                          <ArrowRight className="h-3 w-3 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="group/btn"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        </Button>
                      )}
                    </div>
                  </CardContent>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
