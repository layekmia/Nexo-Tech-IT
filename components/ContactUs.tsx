"use client";
import {
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import { useState } from "react";
import FAQStructuredData from "./FAQStructuredData";

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export function ContactUs() {
  // const socialLinks = [
  //   {
  //     platform: "LinkedIn",
  //     icon: <Linkedin className="h-5 w-5" />,
  //     url: "https://linkedin.com/company/devcorpsolutions",
  //     description: "Connect with us professionally",
  //   },
  //   {
  //     platform: "GitHub",
  //     icon: <Github className="h-5 w-5" />,
  //     url: "https://github.com/devcorpsolutions",
  //     description: "Check out our open source projects",
  //   },
  //   {
  //     platform: "Twitter",
  //     icon: <Twitter className="h-5 w-5" />,
  //     url: "https://twitter.com/devcorpsolutions",
  //     description: "Follow us for tech updates",
  //   },
  // ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most landing pages take 3–7 days, while e-commerce websites usually take 1–3 weeks depending on features and content. I always share a clear timeline before starting.",
    },
    {
      question: "Do you provide revisions after delivery?",
      answer:
        "Yes. I include revision rounds to make sure the final result matches your expectations. Client satisfaction is my top priority.",
    },
    {
      question: "Will the website be mobile-friendly and fast?",
      answer:
        "Absolutely. Every website I build is fully responsive, optimized for speed, and designed to perform well on all devices.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "I primarily work with modern technologies like Next.js, React, Tailwind CSS, and secure backend tools to build fast, scalable, and SEO-friendly websites.",
    },
    {
      question: "Can you help after the project is completed?",
      answer:
        "Yes. I offer post-launch support, bug fixes, and future updates if you need improvements or new features later on.",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email address");
      setIsLoading(false);
      return;
    }

    try {
      await fetch("/api/sendemail", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, phone, message }),
      });
      toast.success(
        "Message sent successfully, you will receive a reply within 2 hours."
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FAQStructuredData />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold md:text-5xl mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Let's
            discuss how we can help transform your business with innovative
            software solutions.
          </p>
          <Badge className="mb-4" variant="secondary">
            <MessageCircle className="h-4 w-4 mr-2" />
            Average response time: 2 hours
          </Badge>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 2
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          id="firstName"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          id="lastName"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+880 XXXXXXXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, requirements, and timeline..."
                        className="min-h-[120px]"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <Button
                      disabled={isLoading}
                      type="submit"
                      className="w-full"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          {" "}
                          <Loader2 className="h-4 w-4 animate-spin" />{" "}
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Email</div>
                      <div className="text-muted-foreground">
                        contact@nexotechit.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Phone</div>
                      <div className="text-muted-foreground">
                        +880 179470-0226
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm">Business Hours</div>
                      <div className="text-muted-foreground">
                        Always Available (24/7)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <div
                        key={social.platform}
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-secondary/50 transition-colors cursor-pointer"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {social.icon}
                        </div>
                        <div>
                          <div className="text-sm">{social.platform}</div>
                          <div className="text-xs text-muted-foreground">
                            {social.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
