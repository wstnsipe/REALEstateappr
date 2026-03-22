import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="font-serif text-2xl font-bold">
                  {COMPANY.shortName}
                </span>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50 mt-0.5">
                  Appraisal Services of North Alabama
                </p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                Professional residential real estate appraisals for lenders,
                homeowners, attorneys, and estate planners throughout North
                Alabama since {COMPANY.founded}.
              </p>
              <div className="mt-6">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
                >
                  {COMPANY.phone}
                </a>
                <p className="text-white/40 text-xs mt-0.5">
                  Fax: {COMPANY.fax}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
                Office
              </h4>
              <address className="not-italic text-sm text-white/70 leading-relaxed">
                {COMPANY.address.street}
                <br />
                {COMPANY.address.city}, {COMPANY.address.state}{" "}
                {COMPANY.address.zip}
              </address>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span>Request a Quote</span>
                  <span className="text-brand-red">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-wide py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {year} {COMPANY.name}, Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Licensed &amp; Certified Residential Appraisers · USPAP Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
