import Link from "next/link";
import Image from "next/image";
import { Globe, MessageSquare, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#020617] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div>
                <Image
                  src="/web_logo.png"
                  alt="NexoTechIT Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(19%) sepia(96%) saturate(1800%) hue-rotate(214deg) brightness(95%)",
                  }}
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Nexo Tech IT
              </span>
            </Link>
            <p className="text-blue-100 font-medium">
              We build solutions, not just websites.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              NexoTech IT is a dedicated digital agency helping shop owners,
              educators, and startups succeed online. We turn your daily
              business problems into simple, automated digital tools.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Products
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/products#school-ms"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  School Management System
                </Link>
              </li>
              <li>
                <Link
                  href="/products#lms"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Learning Management System
                </Link>
              </li>
              <li>
                <Link
                  href="/products#ecommerce"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  E-Commerce Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/products#inventory"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Inventory Management System
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="text-slate-300 text-sm">
                <span className="font-medium text-white block mb-1">
                  Email:
                </span>
                contact@nexotechit.com
              </li>
              <li className="text-slate-300 text-sm">
                <span className="font-medium text-white block mb-1">
                  Website:
                </span>
                nexotechit.com
              </li>
              <li className="text-slate-300 text-sm">
                <span className="font-medium text-white block mb-1">
                  Response:
                </span>
                Within 24 hours
              </li>
              <li className="text-slate-300 text-sm mt-6">
                <span className="font-medium text-white block mb-2">
                  Payments Accepted:
                </span>
                Wise · Payoneer · Crypto
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nexo Tech IT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
