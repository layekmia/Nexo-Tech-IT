import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Cloud, 
  Code, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Users,
  Settings
} from "lucide-react";

export function ProductsServices() {
  const productCategories = [
    {
      id: "saas",
      title: "SaaS Solutions",
      icon: <Cloud className="h-6 w-6" />,
      products: [
        {
          name: "Enterprise Resource Planning (ERP)",
          description: "Comprehensive business management solution for large organizations",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
          features: ["Multi-tenant architecture", "Real-time analytics", "Custom workflows", "API integrations"],
          pricing: "Starting at $99/month per user",
          badge: "Popular"
        },
        {
          name: "Customer Relationship Management (CRM)",
          description: "Advanced CRM system with AI-powered insights and automation",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
          features: ["Lead scoring", "Marketing automation", "Sales pipeline", "Customer analytics"],
          pricing: "Starting at $49/month per user",
          badge: "New"
        }
      ]
    },
    {
      id: "custom",
      title: "Custom Development",
      icon: <Code className="h-6 w-6" />,
      products: [
        {
          name: "Web Application Development",
          description: "Custom web applications built with modern frameworks and technologies",
          image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
          features: ["React/Vue.js frontend", "Node.js/Python backend", "Database design", "Cloud deployment"],
          pricing: "From $25,000 per project",
          badge: "Custom"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
          features: ["React Native/Flutter", "Native iOS/Android", "Backend integration", "App store deployment"],
          pricing: "From $35,000 per project",
          badge: "Custom"
        }
      ]
    },
    {
      id: "ai",
      title: "AI & Analytics",
      icon: <BarChart className="h-6 w-6" />,
      products: [
        {
          name: "Business Intelligence Platform",
          description: "Advanced analytics and reporting platform with machine learning capabilities",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
          features: ["Real-time dashboards", "Predictive analytics", "Data visualization", "ML models"],
          pricing: "Starting at $199/month",
          badge: "AI-Powered"
        },
        {
          name: "Document Processing AI",
          description: "Automated document analysis and data extraction using computer vision",
          image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
          features: ["OCR technology", "Data extraction", "Workflow automation", "API integration"],
          pricing: "Pay per document processed",
          badge: "AI-Powered"
        }
      ]
    }
  ];

  const servicePackages = [
    {
      name: "Starter Package",
      price: "$2,500/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Basic web application",
        "Mobile-responsive design",
        "Database setup",
        "2 months support",
        "Basic hosting included"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "$7,500/month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Full-stack web application",
        "Mobile app (iOS/Android)",
        "Advanced database design",
        "6 months support",
        "Cloud infrastructure",
        "Third-party integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "Custom pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom enterprise software",
        "Multi-platform applications",
        "Advanced security features",
        "12 months support",
        "Dedicated team",
        "Training and documentation"
      ],
      popular: false
    }
  ];

  const recentUpdates = [
    {
      date: "2024-01-15",
      version: "v2.4.0",
      title: "Enhanced AI Analytics",
      description: "Improved machine learning algorithms for better predictions and insights"
    },
    {
      date: "2024-01-08",
      version: "v2.3.2",
      title: "Security Updates",
      description: "Enhanced security measures and compliance features"
    },
    {
      date: "2023-12-20",
      version: "v2.3.0",
      title: "Mobile App Improvements",
      description: "Better performance and new features for mobile applications"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Products & Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive software solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="saas" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.products.map((product, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-4 right-4" variant="secondary">
                          {product.badge}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                        <div className="text-lg text-primary">{product.pricing}</div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline">Demo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Service Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best fits your business needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary shadow-xl' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2" variant="default">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-2xl mb-2">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Technical Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technologies and industry best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>99.9% Uptime SLA</div>
                  <div>Sub-second response time</div>
                  <div>Auto-scaling infrastructure</div>
                  <div>CDN-powered delivery</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>End-to-end encryption</div>
                  <div>SOC 2 Type II compliance</div>
                  <div>Regular security audits</div>
                  <div>GDPR compliant</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>RESTful APIs</div>
                  <div>Webhook support</div>
                  <div>Third-party connectors</div>
                  <div>Custom integrations</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Update Log */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Updates</h2>
            <p className="text-muted-foreground">
              Stay up to date with our latest product improvements and new features
            </p>
          </div>
          
          <div className="space-y-6">
            {recentUpdates.map((update, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{update.title}</CardTitle>
                      <CardDescription>{update.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{update.version}</Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        {new Date(update.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}