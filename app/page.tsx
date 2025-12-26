import AboutUs from "@/components/AboutUs";
import { ContactUs } from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ServicesSection from "@/components/ProductsServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ScrollHandler } from "@/components/ScrollHandler";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <ScrollHandler />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Portfolio />
      <AboutUs />
      <ContactUs/>
    </div>
  );
}
