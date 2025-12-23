import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Users, Target, Heart, Award, CheckCircle } from "lucide-react";

export function AboutUs() {
  const milestones = [
    { year: "2014", event: "Company Founded", description: "Started with a vision to revolutionize software development" },
    { year: "2016", event: "First Enterprise Client", description: "Secured major contract with Fortune 500 company" },
    { year: "2018", event: "Team Expansion", description: "Grew to 50+ developers and engineers" },
    { year: "2020", event: "AI Integration", description: "Pioneered AI-powered development tools" },
    { year: "2022", event: "Global Expansion", description: "Opened offices in 3 countries" },
    { year: "2024", event: "Industry Recognition", description: "Awarded 'Best Software Development Company'" }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "15+ years in software development and business strategy"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in cloud architecture and AI/ML technologies"
    },
    {
      name: "Emily Johnson",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Leading our technical teams with agile methodologies"
    },
    {
      name: "David Kim",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Creating user-centered designs for better experiences"
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace cutting-edge technologies"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering exceptional results"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Team Excellence",
      description: "We foster a culture of continuous learning and professional growth"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Quality Commitment",
      description: "We maintain the highest standards in code quality and project delivery"
    }
  ];

  const certifications = [
    "ISO 27001 Certified",
    "AWS Partner Network",
    "Microsoft Gold Partner",
    "Google Cloud Partner",
    "SOC 2 Type II Compliant",
    "CMMI Level 3"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">About DevCorp Solutions</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Founded in 2014, we've been at the forefront of software innovation, helping businesses 
            transform their operations through technology. Our mission is to build software that 
            makes a difference.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                DevCorp Solutions was born from a simple idea: software development should be 
                accessible, efficient, and transformative. What started as a small team of passionate 
                developers has grown into a global company serving clients across various industries.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proud to be a trusted partner for businesses looking to leverage technology 
                for growth, efficiency, and innovation. Our commitment to excellence and client success 
                remains at the core of everything we do.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="text-2xl mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="text-2xl mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our team at work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decade of growth, innovation, and partnership with amazing clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Badge variant="secondary">{milestone.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{milestone.event}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{milestone.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced leaders bring decades of combined expertise in technology and business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide our decisions and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {value.icon}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Awards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="mb-4">Certifications & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and security is validated by industry-leading certifications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="p-3 text-center">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}