import Container from "./Container";
import FooterLogo from "./FooterLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white/80 pt-14 pb-8">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <FooterLogo />
            <p className="text-sm leading-relaxed text-white/70">
              NexoTechIT is a modern web development agency helping businesses
              grow with high-converting websites, landing pages, and scalable
              e-commerce solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white font-semibold tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Landing Page Development</li>
              <li>E-commerce Websites</li>
              <li>Full-Stack Web Apps</li>
              <li>SEO & Performance Optimization</li>
              <li>Analytics & Tracking Setup</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-white font-semibold tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Single Product Stores</li>
              <li>Multi-Vendor E-commerce</li>
              <li>Sanity CMS Integration</li>
              <li>Facebook Pixel & GA4</li>
              <li>Email Notifications</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white font-semibold tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: nexotechit@gmail.com</li>
              <li>WhatsApp: +880 XXXXXXXX</li>
              <li>Serving Clients Worldwide 🌍</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} NexoTechIT. All rights reserved.
          </p>
          <p className="mt-1">
            Built with ❤️ using Next.js, Sanity & modern web technologies.
          </p>
        </div>
      </Container>
    </footer>
  );
}
