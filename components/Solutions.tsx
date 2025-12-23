import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Truck,
  TrendingUp,
  Shield,
  Database,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Zap
} from "lucide-react";

export function Solutions() {
  const industrySolutions = [
    {
      id: "finance",
      title: "Financial Services",
      icon: <Building2 className="h-6 w-6" />,
      description: "Secure, compliant solutions for banks, fintech, and financial institutions",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
      solutions: [
        {
          name: "Digital Banking Platform",
          description: "Complete online banking solution with mobile apps and web portal",
          features: ["Real-time transactions", "Multi-factor authentication", "Regulatory compliance", "API banking"],
          results: "40% reduction in operational costs, 60% increase in customer satisfaction"
        },
        {
          name: "Risk Management System",
          description: "AI-powered risk assessment and compliance monitoring",
          features: ["Automated risk scoring", "Compliance reporting", "Fraud detection", "Real-time monitoring"],
          results: "75% faster risk assessment, 90% reduction in compliance violations"
        }
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: <Heart className="h-6 w-6" />,
      description: "HIPAA-compliant solutions for hospitals, clinics, and medical practices",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop",
      solutions: [
        {
          name: "Electronic Health Records (EHR)",
          description: "Comprehensive patient management and medical records system",
          features: ["Patient portal", "Appointment scheduling", "Prescription management", "Medical billing"],
          results: "50% reduction in administrative time, 30% improvement in patient care"
        },
        {
          name: "Telemedicine Platform",
          description: "Secure video consultations and remote patient monitoring",
          features: ["HD video calls", "Secure messaging", "File sharing", "Integration with EHR"],
          results: "300% increase in remote consultations, 25% cost savings"
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Modern learning management systems and educational technology",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=300&fit=crop",
      solutions: [
        {
          name: "Learning Management System",
          description: "Complete platform for online education and course management",
          features: ["Course creation", "Student progress tracking", "Assessment tools", "Mobile learning"],
          results: "85% student engagement increase, 40% improvement in completion rates"
        },
        {
          name: "Student Information System",
          description: "Comprehensive student data management and administration",
          features: ["Enrollment management", "Grade tracking", "Parent communication", "Reporting"],
          results: "60% reduction in administrative overhead, improved parent satisfaction"
        }
      ]
    },
    {
      id: "retail",
      title: "Retail & E-commerce",
      icon: <ShoppingCart className="h-6 w-6" />,
      description: "Omnichannel retail solutions and e-commerce platforms",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      solutions: [
        {
          name: "E-commerce Platform",
          description: "Scalable online store with advanced features and integrations",
          features: ["Multi-vendor support", "Inventory management", "Payment processing", "Analytics"],
          results: "150% increase in online sales, 35% improvement in conversion rates"
        },
        {
          name: "Point of Sale System",
          description: "Modern POS system with inventory and customer management",
          features: ["Touch interface", "Inventory tracking", "Customer loyalty", "Reporting"],
          results: "50% faster checkout process, 25% increase in customer retention"
        }
      ]
    }
  ];

  const scenarioSolutions = [
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Modernize legacy systems and embrace digital technologies",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
      challenges: [
        "Outdated legacy systems",
        "Manual processes",
        "Poor data visibility",
        "Lack of integration"
      ],
      approach: [
        "System assessment and planning",
        "Phased migration strategy",
        "Cloud-first architecture",
        "Staff training and support"
      ],
      outcomes: [
        "80% reduction in manual work",
        "Real-time data insights",
        "Improved operational efficiency",
        "Better customer experience"
      ]
    },
    {
      id: "data-security",
      title: "Data Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      description: "Protect sensitive data and ensure regulatory compliance",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
      challenges: [
        "Data breach risks",
        "Compliance requirements",
        "Access control issues",
        "Audit trail needs"
      ],
      approach: [
        "Security assessment",
        "Zero-trust architecture",
        "Compliance framework implementation",
        "Continuous monitoring"
      ],
      outcomes: [
        "99.9% data protection",
        "Full regulatory compliance",
        "Automated security monitoring",
        "Reduced security incidents"
      ]
    },
    {
      id: "scalability",
      title: "Performance & Scalability",
      icon: <Zap className="h-6 w-6" />,
      description: "Handle growing user base and increased demand efficiently",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      challenges: [
        "Performance bottlenecks",
        "Limited scalability",
        "High infrastructure costs",
        "Poor user experience"
      ],
      approach: [
        "Performance optimization",
        "Cloud-native architecture",
        "Auto-scaling implementation",
        "Load balancing strategy"
      ],
      outcomes: [
        "10x performance improvement",
        "Automatic scaling",
        "50% cost reduction",
        "Enhanced user experience"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Industry Solutions</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tailored software solutions designed for specific industries and business scenarios. 
            We understand your unique challenges and deliver targeted results.
          </p>
        </div>
      </section>

      {/* Solutions Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="industry" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="industry">Industry Solutions</TabsTrigger>
              <TabsTrigger value="scenario">Scenario-Based Solutions</TabsTrigger>
            </TabsList>

            {/* Industry Solutions */}
            <TabsContent value="industry">
              <div className="space-y-12">
                {industrySolutions.map((industry) => (
                  <Card key={industry.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative">
                        <ImageWithFallback
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="mb-4 p-3 bg-white/20 rounded-full w-fit mx-auto">
                              {industry.icon}
                            </div>
                            <h3 className="text-2xl mb-2">{industry.title}</h3>
                            <p className="text-white/90">{industry.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="space-y-6">
                          {industry.solutions.map((solution, index) => (
                            <div key={index} className="border-b border-border pb-6 last:border-b-0">
                              <h4 className="text-lg mb-2">{solution.name}</h4>
                              <p className="text-muted-foreground mb-3">{solution.description}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                <div>
                                  <h5 className="text-sm mb-2">Key Features:</h5>
                                  <div className="space-y-1">
                                    {solution.features.map((feature, featureIndex) => (
                                      <div key={featureIndex} className="flex items-center gap-2">
                                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                        <span className="text-xs text-muted-foreground">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <h5 className="text-sm mb-2">Results:</h5>
                                  <p className="text-xs text-green-600">{solution.results}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <Button className="w-full mt-6">
                          Learn More About {industry.title} Solutions
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Scenario-Based Solutions */}
            <TabsContent value="scenario">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {scenarioSolutions.map((scenario) => (
                  <Card key={scenario.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative">
                        <ImageWithFallback
                          src={scenario.image}
                          alt={scenario.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="mb-4 p-3 bg-white/20 rounded-full w-fit mx-auto">
                              {scenario.icon}
                            </div>
                            <h3 className="text-2xl mb-2">{scenario.title}</h3>
                            <p className="text-white/90">{scenario.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="grid grid-cols-1 gap-6">
                          <div>
                            <h4 className="text-lg mb-3 flex items-center gap-2">
                              <BarChart3 className="h-5 w-5 text-red-500" />
                              Challenges
                            </h4>
                            <div className="space-y-2">
                              {scenario.challenges.map((challenge, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg mb-3 flex items-center gap-2">
                              <Users className="h-5 w-5 text-blue-500" />
                              Our Approach
                            </h4>
                            <div className="space-y-2">
                              {scenario.approach.map((step, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                                    {index + 1}
                                  </div>
                                  <span className="text-sm text-muted-foreground">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg mb-3 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-green-500" />
                              Expected Outcomes
                            </h4>
                            <div className="space-y-2">
                              {scenario.outcomes.map((outcome, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm text-green-600">{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full mt-6">
                          Start Your {scenario.title} Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Solution Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our solutions are built on proven architectures that ensure scalability, 
              security, and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Cloud-Native</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Microservices architecture deployed on AWS, Azure, or Google Cloud 
                  for maximum scalability and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Security-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Zero-trust security model with end-to-end encryption, 
                  compliance monitoring, and threat detection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized for speed with CDN delivery, caching strategies, 
                  and auto-scaling capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="mb-12">Proven Results Across Industries</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl text-primary">150%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl text-primary">75%</div>
              <div className="text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl text-primary">90%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl text-primary">6 months</div>
              <div className="text-muted-foreground">Average Time to Market</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}