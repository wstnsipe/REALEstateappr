"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-white border-b border-gray-100 shadow-sm";

  const logoColor =
    isHome && !scrolled ? "text-white" : "text-brand-navy";

  const linkColor =
    isHome && !scrolled
      ? "text-white/90 hover:text-white"
      : "text-gray-700 hover:text-brand-navy";

  const phoneCta =
    isHome && !scrolled
      ? "border-white/60 text-white hover:bg-white hover:text-brand-navy"
      : "border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}
            >
              {COMPANY.shortName}
            </span>
            <span
              className={`font-sans text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                isHome && !scrolled ? "text-white/70" : "text-brand-muted"
              }`}
            >
              Appraisal Services
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-150 relative group ${linkColor}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-brand-red transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className={`text-sm font-semibold tracking-wide border px-5 py-2.5 transition-all duration-200 ${phoneCta}`}
            >
              {COMPANY.phone}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors duration-150 ${
              isHome && !scrolled ? "text-white" : "text-brand-navy"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-wide py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-sm font-medium tracking-wide border-b border-gray-50 text-gray-700 hover:text-brand-navy transition-colors ${
                pathname === link.href ? "text-brand-navy" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${COMPANY.phone}`}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-navy text-white
                       px-7 py-3.5 text-sm font-semibold tracking-wide uppercase
                       hover:bg-navy-800 transition-colors duration-200"
          >
            Call {COMPANY.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
