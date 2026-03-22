import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Appraisal Services",
  description:
    "Comprehensive residential appraisal services in Huntsville and North Alabama — from home purchases and refinances to estate, divorce, and PMI removal.",
};

/* ─── shared micro-components ─────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-brand-red shrink-0" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
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

/* ─── icons ───────────────────────────────────────────────────────── */
const ICONS: Record<string, React.ReactNode> = {
  home: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l.75 18H3.75L4.5 3z" />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  blueprint: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
  map: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25M3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0l3.869-1.934c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689z" />
    </svg>
  ),
  scale: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-13.5.52l2.62 10.726c.122.499-.106 1.028-.59 1.202A5.989 5.989 0 015.25 16.5a5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 5.49z" />
    </svg>
  ),
  percent: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6M9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
};

const AUDIENCES = [
  { label: "Mortgage Lenders", desc: "FHA and conventional appraisals accepted by national and local lenders." },
  { label: "Homeowners", desc: "PMI removal, pre-listing, refinancing, and direct-order appraisals without lender involvement." },
  { label: "Attorneys & CPAs", desc: "Defensible valuations for estate settlements, divorce proceedings, and tax appeals." },
  { label: "Builders & Investors", desc: "New construction, land, and multi-family appraisals for project financing and decisions." },
];

const PROCESS_STEPS = [
  { n: "01", title: "Order & Schedule", body: "Call or submit a request. We confirm coverage, provide a fee quote, and schedule a convenient inspection time." },
  { n: "02", title: "Property Inspection", body: "A licensed appraiser inspects the property — interior and exterior — documenting condition, quality, and features." },
  { n: "03", title: "Market Research", body: "We research comparable sales, MLS data, tax records, and flood zone data to form a credible market context." },
  { n: "04", title: "Report Delivery", body: "A USPAP-compliant report is delivered to you or your lender within the agreed turnaround window." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0e1c33] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1800&q=80"
            alt="North Alabama residential property"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0e1c33]/82" />
        </div>
        <div className="relative z-10 container-wide pt-36 pb-24 md:pt-44 md:pb-28">
          <Eyebrow>Our Services</Eyebrow>
          <h1 className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-[58px] leading-[1.06] max-w-3xl">
            Appraisal Services for Every Situation
          </h1>
          <p className="mt-5 text-[17px] text-white/60 max-w-xl leading-relaxed">
            From purchase loans and refinances to estate settlements and PMI
            removal — our certified appraisers deliver accurate, defensible
            valuations for any need.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-red text-white px-8 py-4
                         text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-red-700 transition-colors"
            >
              Request a Quote <ArrowRight />
            </Link>
            <Link
              href="/faq"
              className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/50
                         hover:text-white transition-colors"
            >
              Appraisal FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {AUDIENCES.map((a) => (
              <div key={a.label} className="px-8 py-8">
                <p className="font-serif text-[16px] font-bold text-brand-navy mb-2">
                  {a.label}
                </p>
                <p className="text-[13px] text-gray-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="section-padding bg-[#f5f5f3]">
        <div className="container-wide">
          <div className="mb-12">
            <Eyebrow>Complete List</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight max-w-lg">
              What We Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.id}
                className="bg-white p-8 group hover:bg-brand-navy transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-serif text-[13px] font-bold text-gray-200 group-hover:text-white/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-brand-navy group-hover:text-brand-red transition-colors duration-300">
                    {ICONS[svc.icon]}
                  </span>
                </div>
                <h3 className="font-serif text-[18px] font-bold text-brand-navy mb-3
                               group-hover:text-white transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed
                              group-hover:text-white/65 transition-colors duration-300">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-gray-400 text-center">
            This is not a complete list. Contact us for additional services, fees, and turnaround times.
          </p>
        </div>
      </section>

      {/* ── USPAP / STANDARDS ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <Eyebrow>Our Standards</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-6">
                USPAP-Compliant Appraisals
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                Every report we produce adheres to the Uniform Standards of
                Professional Appraisal Practice — the ethical and performance
                framework that governs all licensed and certified appraisers in
                the United States.
              </p>
              <ul className="space-y-4">
                {[
                  "Licensed and certified by the State of Alabama",
                  "Compliant with FHA, VA, and conventional lending guidelines",
                  "Accepted by national mortgage companies and local lenders",
                  "Suitable for estate matters, divorce proceedings, and tax appeals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 mt-0.5 bg-brand-navy flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[14px] text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                             tracking-[0.12em] text-brand-navy border-b border-brand-navy pb-0.5
                             hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  Learn more in our FAQ <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              {[
                { top: "3", sub: "Appraisal Approaches", note: "Cost · Sales Comparison · Income", dark: true },
                { top: "Fast", sub: "Turnaround Times", note: "Contact us for current availability", dark: false },
                { top: "Local", sub: "Market Knowledge", note: "North Alabama specialists since 1997", dark: false },
                { top: "Cert.", sub: "State-Licensed Team", note: "Alabama Real Estate Appraisers Board", dark: true, red: true },
              ].map((box) => (
                <div
                  key={box.sub}
                  className={`p-7 ${box.red ? "bg-brand-red" : box.dark ? "bg-brand-navy" : "bg-[#f5f5f3] border border-gray-100"}`}
                >
                  <p className={`font-serif text-3xl font-bold leading-none mb-2
                                  ${box.dark || box.red ? "text-white" : "text-brand-navy"}`}>
                    {box.top}
                  </p>
                  <p className={`text-[11px] uppercase tracking-[0.16em] font-semibold mb-2
                                  ${box.dark || box.red ? "text-white/50" : "text-gray-400"}`}>
                    {box.sub}
                  </p>
                  <p className={`text-[12px] leading-relaxed
                                  ${box.dark || box.red ? "text-white/40" : "text-gray-400"}`}>
                    {box.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding bg-[#f5f5f3]">
        <div className="container-wide">
          <div className="mb-12">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              How a Residential Appraisal Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="bg-white p-8">
                <p className="font-serif text-[52px] font-bold text-gray-100 leading-none mb-5">
                  {step.n}
                </p>
                <h3 className="font-serif text-[17px] font-bold text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
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
                Get a Quote for Your Appraisal
              </h2>
              <p className="mt-4 text-[15px] text-white/55 leading-relaxed">
                Discuss your needs, get transparent pricing, and schedule your
                inspection — all in one call.
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
