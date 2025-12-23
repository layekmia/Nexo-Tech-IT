import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className=" text-white/80 py-12 bg-[#0f0f0f]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-white/80">
              Transforming businesses through innovative software solutions and
              digital expertise.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Services</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>Custom Development</div>
              <div>SaaS Solutions</div>
              <div>AI & Analytics</div>
              <div>Digital Transformation</div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white">Industries</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>Financial Services</div>
              <div>Healthcare</div>
              <div>Education</div>
              <div>Retail & E-commerce</div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>contact@devcorpsolutions.com</div>
              <div>+1 (555) 123-4567</div>
              <div>San Francisco, CA</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Nexo Tech IT . All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
