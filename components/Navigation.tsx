"use client";

import { Button } from "./ui/button";
import Logo from "./Logo";
import Container from "./Container";

export function Navigation() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "whychooseus", label: "Why Us" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border shadow-sm">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Logo />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
