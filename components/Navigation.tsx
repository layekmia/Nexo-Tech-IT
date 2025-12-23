import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";
import Container from "./Container";

export function Navigation() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products/Services" },
    { id: "solutions", label: "Solutions" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 ">
              {navItems.map((item) => (
                <Link key={item.id} href={`/${item.id}`} className="px-3 py-2">
                  {item.label}
                </Link>
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
