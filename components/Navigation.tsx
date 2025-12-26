"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";
import Container from "./Container";
import { Menu, X } from "lucide-react";

type NavItem =
  | { id: string; label: string; type: "anchor" }
  | { id: string; label: string; type: "link"; href: string };

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = [
    { id: "home", label: "Home", type: "anchor" },
    { id: "services", label: "Services", type: "anchor" },
    { id: "whychooseus", label: "Why Us", type: "anchor" },
    { id: "portfolio", label: "Portfolio", type: "anchor" },
    { id: "about", label: "About Us", type: "anchor" },
    { id: "blog", label: "Blogs", type: "link", href: "/blog" },
    { id: "contact", label: "Contact Us", type: "anchor" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on link click

    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      router.push(`/#${id}`);
      // Store the target ID to scroll to after navigation
      sessionStorage.setItem("scrollTo", id);
      return;
    }

    // If we're already on home page, just scroll
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
    <>
      <nav className="sticky top-0 md:py-1.5 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border shadow-sm">
        <Container>
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={item.id}
                        href={item.href || "/"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={item.id}
                      href={pathname === "/" ? `#${item.id}` : `/#${item.id}`}
                      onClick={(e) => handleSmoothScroll(e, item.id)}
                      className="px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300 ease-in-out
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Mobile Menu Panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-80 max-w-[85vw]
            bg-white/95 backdrop-blur-md
            border-l border-border/50
            shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <Logo />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.id}
                    href={item.href || "/"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      px-4 py-3 rounded-lg
                      text-base font-medium
                      text-foreground
                      hover:bg-primary/10 hover:text-primary
                      active:bg-primary/20
                      transition-all duration-200
                      cursor-pointer
                      transform
                      ${
                        isMobileMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-4 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.id}
                  href={pathname === "/" ? `#${item.id}` : `/#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className={`
                    px-4 py-3 rounded-lg
                    text-base font-medium
                    text-foreground
                    hover:bg-primary/10 hover:text-primary
                    active:bg-primary/20
                    transition-all duration-200
                    cursor-pointer
                    transform
                    ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
