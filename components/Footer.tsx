import Link from "next/link";
import Image from "next/image";

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
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/nexotechit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/nexotechit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              {/* Twitter / X → redirects to LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/nexotechit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
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
          <p className="text-slate-400 text-sm text-center md:text-left">
            Nexotech IT is a software development agency
          </p>
        </div>
      </div>
    </footer>
  );
}
