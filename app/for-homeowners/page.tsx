import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Homeowners",
  description:
    "Direct appraisal services for North Alabama homeowners — PMI removal, pre-listing, refinancing, estate, divorce, and more. No lender required.",
};

function Eyebrow({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-brand-red shrink-0" />
      <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${light ? "text-brand-red" : "text-brand-red"}`}>
        {children}
      </span>
    </div>
  );
}

function ArrowRight({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

const USE_CASES = [
  {
    id: "refinance",
    num: "01",
    title: "Refinance & Home Equity",
    body: "If your lender gives you the option to choose your appraiser, request us. We're on approved lists for many lenders and can obtain necessary approval documentation quickly. An accurate, current valuation is the foundation of any refinance or home equity transaction.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
    imageAlt: "Reviewing mortgage documents",
  },
  {
    id: "prelisting",
    num: "02",
    title: "For-Sale-By-Owner & Pre-Listing",
    body: "Whether you're selling your home yourself or working with an agent, a professional appraisal helps you set the right price from day one. A professional appraiser is objective — they'll tell you what you need to know, not just what you want to hear. Our pre-listing appraisals also serve as negotiating tools with prospective buyers.",
    image: "https://asnahsv.appraiserxsites.com/graphics/StockBackgrounds/customerfocus/HomeandFamily23-720.jpg",
    imageAlt: "North Alabama homeowner family",
  },
  {
    id: "pmi",
    num: "03",
    title: "PMI Removal",
    body: "Private Mortgage Insurance protects lenders — not you. Once your loan balance drops below 80% of your home's current market value, you may be eligible to have PMI removed. An independent appraisal gives your lender the documented evidence required to eliminate that extra monthly cost.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=900&q=80",
    imageAlt: "Calculating mortgage savings",
  },
  {
    id: "estate-divorce",
    num: "04",
    title: "Estate, Divorce & Tax Matters",
    body: "Significant life events often require an objective, defensible valuation of real property. Whether you're settling an estate, navigating a divorce, challenging a property tax assessment, or fulfilling an IRS requirement, our appraisers provide the impartial documentation your attorney or accountant needs.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
    imageAlt: "Legal documents for estate or divorce",
  },
  {
    id: "reviews",
    num: "05",
    title: "Appraisal Reviews",
    body: "If you believe a prior appraisal was inaccurate — or simply want a second opinion — we offer both field reviews and desk reviews. A field review includes an exterior inspection of the subject property and comparable sales. A desk review is conducted from data sources and delivers a faster turnaround.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    imageAlt: "Reviewing appraisal documents",
  },
];

const CHECKLIST = [
  "Provide full interior and exterior access to the property",
  "Clear vegetation away from the foundation and exterior walls",
  "Ensure access to the HVAC system, electrical panel, attic, and crawl space",
  "Gather any surveys, deeds, or tax bills you have on file",
  "Prepare a list of recent improvements or upgrades with approximate costs",
  "Note any personal property that will or will not convey with the home",
  "Identify any known easements, deed restrictions, or encumbrances",
];

export default function ForHomeownersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0e1c33] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1800&q=80"
            alt="A residential home in North Alabama"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0e1c33]/84" />
        </div>
        <div className="relative z-10 container-wide pt-36 pb-24 md:pt-44 md:pb-28">
          <Eyebrow>For Homeowners</Eyebrow>
          <h1 className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-[58px] leading-[1.06] max-w-3xl">
            Appraisals, On Your Terms
          </h1>
          <p className="mt-5 text-[17px] text-white/60 max-w-xl leading-relaxed">
            You don't need a lender to order a professional appraisal. Homeowners
            can work with us directly for any purpose — from PMI removal to estate
            settlement.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-red text-white px-8 py-4
                         text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-red-700 transition-colors"
            >
              Get a Quote <ArrowRight />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/50
                         hover:text-white transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO STATEMENT ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-wide py-10">
          <div className="max-w-3xl">
            <p className="text-[17px] text-gray-500 leading-relaxed">
              Many homeowners don't realize they can hire a professional appraiser
              directly — without a bank or lender involved. Our appraisers bring
              the same rigor and USPAP compliance to every homeowner-ordered
              appraisal as they do to lender assignments. The result is a
              credible, defensible report you can use with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES — alternating ── */}
      <section className="bg-[#f5f5f3]">
        {USE_CASES.map((uc, i) => (
          <div
            key={uc.id}
            className={`grid grid-cols-1 lg:grid-cols-2 items-stretch border-b border-gray-200 last:border-b-0`}
          >
            {/* Image */}
            <div className={`relative h-72 lg:h-auto min-h-72 order-1 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <Image src={uc.image} alt={uc.imageAlt} fill className="object-cover" />
            </div>

            {/* Text */}
            <div
              className={`bg-white px-10 py-12 lg:px-14 lg:py-16 flex flex-col justify-center order-2 ${
                i % 2 === 1 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <span className="font-serif text-[52px] font-bold text-gray-100 leading-none mb-4 block">
                {uc.num}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 leading-tight">
                {uc.title}
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed">{uc.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── PREPARATION + REPORT ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Checklist */}
            <div>
              <Eyebrow>Before the Inspection</Eyebrow>
              <h2 className="font-serif text-3xl md:text-[34px] font-bold text-brand-navy leading-tight mb-8">
                How to Prepare for Your Appraiser's Visit
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                A well-prepared property helps your appraiser conduct a thorough,
                accurate inspection. Here's what to have ready:
              </p>
              <ul className="space-y-3.5">
                {CHECKLIST.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 mt-0.5 bg-brand-navy text-white flex items-center justify-center text-[11px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Report explainer */}
            <div className="bg-brand-navy text-white p-10 lg:p-12 h-fit">
              <Eyebrow>Your Report</Eyebrow>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                What the Appraisal Report Contains
              </h3>
              <div className="space-y-5 text-[14px] text-white/65 leading-relaxed">
                <p>
                  The report identifies you as the client and states the intended
                  use of the appraisal. It describes the property in detail —
                  including its physical characteristics, condition, and any legal
                  restrictions such as easements.
                </p>
                <p>
                  It defines the type of value being estimated (typically market
                  value), documents the scope of work performed, and presents
                  comparable sales data with adjustments that support the final
                  opinion of value.
                </p>
                <p>
                  All reports are signed by a licensed or certified appraiser and
                  comply fully with the Uniform Standards of Professional
                  Appraisal Practice (USPAP).
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[12px] uppercase tracking-[0.18em] text-white/35 mb-3 font-semibold">
                  Have more questions?
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                             tracking-[0.12em] text-white border-b border-white/30 pb-0.5
                             hover:border-white transition-colors"
                >
                  Read our full FAQ <ArrowRight />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy">
        <div className="container-wide py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <Eyebrow>Get Started</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                Order Your Appraisal Today
              </h2>
              <p className="mt-4 text-[15px] text-white/55 leading-relaxed">
                Contact our Huntsville office to discuss your situation, get a
                transparent fee quote, and schedule your inspection.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white
                           px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                           hover:border-white/60 hover:bg-white/5 transition-all"
              >
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white
                           px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                           hover:bg-red-700 transition-colors"
              >
                Request a Quote <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
