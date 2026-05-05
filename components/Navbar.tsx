"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const productLinks = [
  { name: "Softora Inventory", href: "https://smartsolutation2.vercel.app/" },
  { name: "EduFlow LMS", href: "https://eduflow.nexotechit.com/" },
  { name: "Shopcart Ecommerce", href: "https://shopcart.nexotechit.com/" },
  { name: "School MS", href: "https://smartschool1.vercel.app/" },
  { name: "Travel Tour Application", href: "https://natours.nexotechit.com/" },
  {
    name: "RideX Ride Sharing",
    href: "https://ridex-ride-sharing.vercel.app/",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <div
        className={`w-full max-w-7xl rounded-full transition-all duration-300 flex items-center justify-between px-4 py-2 md:px-5  bg-blue-50/60 backdrop-blur-md shadow-lg shadow-blue-900/5 border border-white/20`}
      >
        {/* Left: Logo + Brand + Tagline */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-1 group"
        >
          <div className="group-hover:scale-105 transition-transform">
            <Image
              src="/web_logo.png"
              alt="NexoTechIT Logo"
              width={44}
              height={44}
              className="object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(19%) sepia(96%) saturate(1800%) hue-rotate(214deg) brightness(95%)",
              }}
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-950 leading-none">
              NexoTechIT
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-slate-600 mt-1 uppercase">
              We Code Your Dreams
            </span>
          </div>
        </Link>

        {/* Right: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">
              <Link
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  pathname === link.href ? "text-primary" : "text-black/90"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                )}
              </Link>

              {link.hasDropdown && (
                <div className="absolute top-full -left-4 w-[280px] bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 flex flex-col z-50">
                  {productLinks.map((pLink) => (
                    <Link
                      key={pLink.name}
                      href={pLink.href}
                      target="_blank"
                      className="px-5 py-2.5 text-base hover:text-primary hover:bg-slate-50 transition-colors text-black/90"
                    >
                      {pLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black/90 p-2 hover:bg-white/20 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+10px)] left-4 right-4 md:hidden bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        setOpenMobileDropdown(
                          openMobileDropdown === link.name ? null : link.name,
                        );
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`text-lg font-medium py-2 flex items-center justify-between ${
                      pathname === link.href ? "text-primary" : "text-black/90"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          openMobileDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {link.hasDropdown && openMobileDropdown === link.name && (
                    <div className="flex flex-col pl-4 mt-2 mb-2 space-y-1 border-l-2 border-slate-100">
                      {productLinks.map((pLink) => (
                        <Link
                          key={pLink.name}
                          href={pLink.href}
                          target="_blank"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2 text-[15px] text-slate-600"
                        >
                          {pLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
