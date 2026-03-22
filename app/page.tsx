import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICES, SERVICE_COUNTIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Real Estate Appraisers | Huntsville, AL",
  description:
    "Appraisal Services of North Alabama — licensed, certified residential appraisers serving Huntsville and North Alabama since 1986.",
};

/* ─── icon primitives ─────────────────────────────────────────────────── */
function HomeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l.75 18H3.75L4.5 3zM9 9h.008v.008H9V9zm0 3.75h.008v.008H9v-.008zm0 3.75h.008v.008H9v-.008zm6-7.5h.008v.008H15V9zm0 3.75h.008v.008H15v-.008z" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52l2.62 10.726c.122.499-.106 1.028-.59 1.202A5.989 5.989 0 015.25 16.5a5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 5.49z" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  home: <HomeIcon />,
  building: <BuildingIcon />,
  document: <DocIcon />,
  blueprint: <DocIcon />,
  map: <MapIcon />,
  scale: <ScaleIcon />,
  percent: <CheckCircleIcon />,
  check: <CheckCircleIcon />,
  chart: <BuildingIcon />,
};

/* ─── featured services (homepage only shows 6) ──────────────────────── */
const FEATURED = SERVICES.slice(0, 6);

/* ─── why-us pillars ─────────────────────────────────────────────────── */
const PILLARS = [
  {
    title: "Impartial by Design",
    body: "We have no financial stake in any transaction. Our only obligation is an honest, accurate opinion of value.",
  },
  {
    title: "USPAP Standards",
    body: "Every report complies fully with the Uniform Standards of Professional Appraisal Practice and is signed by a licensed appraiser.",
  },
  {
    title: "Local Expertise",
    body: "Our appraisers work North Alabama markets daily — from established Huntsville neighborhoods to fast-growing Madison communities.",
  },
  {
    title: "Modern Technology",
    body: "We combine experienced professionals with current MLS data and appraisal tools to deliver fast turnarounds without sacrificing accuracy.",
  },
];

/* ════════════════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01  HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0e1c33]">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=2000&q=85"
            alt="A well-maintained North Alabama residence"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Multi-stop gradient: heavy left → transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1c33]/95 via-[#0e1c33]/75 to-[#0e1c33]/20" />
          {/* Subtle bottom vignette for smooth section transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />
        </div>

        {/* ── Text content ── */}
        <div className="relative z-10 container-wide pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-7 h-px bg-brand-red" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Huntsville, Alabama · Est. {COMPANY.founded}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-bold leading-[1.04] tracking-tight text-white">
              <span className="block text-5xl md:text-6xl lg:text-[72px]">
                Certified Appraisals.
              </span>
              <span className="block text-5xl md:text-6xl lg:text-[72px] text-white/60 mt-1">
                Trusted Results.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-7 text-[17px] leading-relaxed text-white/65 max-w-[440px]">
              Licensed residential appraisers serving homeowners, lenders, and
              legal professionals throughout North Alabama.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-red text-white
                           px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                           hover:bg-red-700 transition-colors duration-200"
              >
                Request a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 border border-white/30 text-white
                           px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                           hover:border-white/70 hover:bg-white/5 transition-all duration-200"
              >
                Our Services
              </Link>
            </div>

            {/* Phone */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-px h-8 bg-white/15" />
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors tracking-wide"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Floating credential badge — bottom-right on large screens */}
        <div className="hidden lg:flex absolute bottom-10 right-16 z-10 items-center gap-4 bg-white/8 backdrop-blur-sm border border-white/12 px-6 py-4">
          <span className="w-2 h-2 rounded-full bg-brand-red" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-medium">
            USPAP Compliant · State Licensed · Certified
          </span>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02  CREDENTIALS STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-wide">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: "Est. 1986",        sub: "In business" },
              { value: "Since 1997",       sub: "Serving North Alabama" },
              { value: "USPAP",            sub: "Compliant standards" },
              { value: "AL Licensed",      sub: "State certified team" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center justify-center py-7 px-6 text-center"
              >
                <dt className="font-serif text-[22px] font-bold text-brand-navy leading-none">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-gray-400 font-medium">
                  {stat.sub}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03  COMPANY INTRO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-7 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Who We Are
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                North Alabama's Residential Appraisal Firm
              </h2>
              <p className="mt-5 text-[15px] text-gray-500 leading-relaxed">
                Appraisal Services of North Alabama provides accurate,
                independent property valuations for lenders, homeowners, and
                legal professionals — with the local expertise and USPAP
                compliance every credible appraisal demands.
              </p>
              <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
                We keep rates competitive and quality high by pairing experienced
                appraisers with modern data tools. Every client, from a national
                mortgage servicer to a local homeowner, receives the same
                professional standard.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em]
                             text-brand-navy border-b border-brand-navy pb-0.5
                             hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  About Our Firm
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/faq"
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gray-400
                             hover:text-brand-navy transition-colors"
                >
                  Appraisal FAQ
                </Link>
              </div>
            </div>

            {/* Image block */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
                  alt="North Alabama residential home"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-5 -left-5 lg:-left-8 bg-brand-navy text-white px-7 py-6 shadow-xl hidden sm:block">
                <p className="font-serif text-4xl font-bold leading-none">38<span className="text-brand-red text-2xl">+</span></p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
                  Years in Business
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04  CORE SERVICES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-[#f5f5f3]">
        <div className="container-wide">

          {/* Section header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-7 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                  What We Do
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Appraisal Services for Every Situation
              </h2>
            </div>
            <Link
              href="/services"
              className="shrink-0 self-start md:self-end inline-flex items-center gap-2
                         text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-navy
                         border-b border-brand-navy pb-0.5 hover:text-brand-red hover:border-brand-red
                         transition-colors whitespace-nowrap"
            >
              All Services
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* 2 × 3 service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {FEATURED.map((svc, i) => (
              <article
                key={svc.id}
                className="group bg-white p-8 lg:p-9 flex flex-col gap-5
                           hover:bg-brand-navy transition-colors duration-300"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[13px] font-bold text-gray-200 group-hover:text-white/20 transition-colors">
                    0{i + 1}
                  </span>
                  <span className="text-brand-navy group-hover:text-brand-red transition-colors duration-300">
                    {ICON_MAP[svc.icon]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[19px] font-bold text-brand-navy leading-snug
                               group-hover:text-white transition-colors duration-300">
                  {svc.title}
                </h3>

                {/* Description — one tight sentence */}
                <p className="text-[14px] text-gray-500 leading-relaxed flex-1
                              group-hover:text-white/65 transition-colors duration-300">
                  {svc.description}
                </p>

                {/* Arrow link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase
                             tracking-[0.1em] text-brand-red group-hover:text-brand-red
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto"
                  tabIndex={-1}
                  aria-hidden
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>

          {/* Bottom note */}
          <p className="mt-6 text-center text-[13px] text-gray-400">
            Not a complete list.{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-brand-navy transition-colors">
              Contact us
            </Link>{" "}
            to ask about additional services and current turnaround times.
          </p>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05  WHY CLIENTS CHOOSE US
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-white">
        <div className="container-wide">

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px bg-brand-red" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                Our Approach
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Professional. Objective. Accurate.
            </h2>
          </div>

          {/* 2 × 2 pillar grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`bg-white px-10 py-10 border-t-2
                            ${i % 2 === 0 ? "border-brand-navy" : "border-gray-200 hover:border-brand-navy"}
                            transition-colors duration-300 group`}
              >
                <p className="font-serif text-[40px] font-bold text-gray-100 group-hover:text-gray-200 leading-none mb-5 transition-colors">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">
                  {p.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed max-w-xs">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* Image + statement below */}
          <div className="mt-12 relative overflow-hidden">
            <div className="relative h-72 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
                alt="Professional reviewing appraisal documents"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-brand-navy/70" />
              <div className="absolute inset-0 flex items-center container-wide">
                <div>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-white max-w-xl leading-snug">
                    "A professional appraiser is objective and will tell you
                    what you need to know — not just what you want to hear."
                  </p>
                  <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-white/40 font-medium">
                    Appraisal Services of North Alabama
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06  SERVICE AREA PREVIEW
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-[#f5f5f3]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: text */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-7 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Where We Work
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Serving Huntsville &amp; North Alabama
              </h2>
              <p className="mt-5 text-[15px] text-gray-500 leading-relaxed">
                Our appraisers cover Madison County and surrounding North
                Alabama counties — with deep familiarity of local markets,
                neighborhood values, and new development areas.
              </p>
              <div className="mt-8">
                <Link
                  href="/service-area"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                             tracking-[0.12em] text-brand-navy border-b border-brand-navy pb-0.5
                             hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  View Full Service Area
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right: county grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICE_COUNTIES.map((county, i) => (
                  <div
                    key={county}
                    className={`px-4 py-3.5 text-[13px] font-medium flex items-center gap-2
                                ${i === 0
                                  ? "bg-brand-navy text-white col-span-2 sm:col-span-1"
                                  : "bg-white text-brand-navy border border-gray-100 hover:border-brand-navy transition-colors"
                                }`}
                  >
                    {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />}
                    {county}
                  </div>
                ))}
                <div className="px-4 py-3.5 bg-brand-light border border-dashed border-gray-300
                                text-[13px] text-gray-400 italic flex items-center">
                  + surrounding areas
                </div>
              </div>
              <p className="mt-4 text-[12px] text-gray-400">
                Not sure if we cover your area?{" "}
                <a href={`tel:${COMPANY.phone}`} className="underline hover:text-brand-navy transition-colors">
                  Call us to confirm.
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          07  FINAL CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-brand-navy">
        <div className="container-wide py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

            {/* Text */}
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-7 h-px bg-brand-red" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  Get Started
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                Request a Fee Quote Today
              </h2>
              <p className="mt-4 text-[15px] text-white/55 leading-relaxed">
                Tell us about your property and purpose — we'll provide a
                transparent quote and confirm current turnaround times.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2.5 border border-white/25 text-white
                           px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                           hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                <PhoneIcon className="w-4 h-4" />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white
                           px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                           hover:bg-red-700 transition-colors duration-200"
              >
                Request a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

/* ─── micro icons (inline, no extra dep) ─────────────────────────────── */
function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
