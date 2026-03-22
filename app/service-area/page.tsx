import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Appraisal Services of North Alabama covers Huntsville, Madison County, and surrounding North Alabama counties. Confirm your area today.",
};

function Eyebrow({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
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

const COUNTIES = [
  {
    name: "Madison County",
    primary: true,
    cities: ["Huntsville", "Madison", "Hazel Green", "Meridianville", "New Market", "Owens Cross Roads", "Toney"],
  },
  {
    name: "Limestone County",
    primary: false,
    cities: ["Athens", "Ardmore", "Elkmont", "Harvest", "Lester", "Mooresville", "Tanner"],
  },
  {
    name: "Morgan County",
    primary: false,
    cities: ["Decatur", "Hartselle", "Lacey's Spring", "Priceville", "Trinity"],
  },
  {
    name: "Marshall County",
    primary: false,
    cities: ["Albertville", "Arab", "Boaz", "Guntersville"],
  },
  {
    name: "Jackson County",
    primary: false,
    cities: ["Scottsboro", "Bridgeport", "Stevenson", "Pisgah"],
  },
  {
    name: "DeKalb County",
    primary: false,
    cities: ["Fort Payne", "Rainsville", "Fyffe", "Geraldine"],
  },
  {
    name: "Lawrence County",
    primary: false,
    cities: ["Moulton", "Town Creek", "Courtland", "Hillsboro"],
  },
  {
    name: "Cullman County",
    primary: false,
    cities: ["Cullman", "Hanceville", "Vinemont", "Holly Pond"],
  },
  {
    name: "Franklin County",
    primary: false,
    cities: ["Russellville", "Red Bay", "Phil Campbell", "Spruce Pine"],
  },
];

const primary = COUNTIES.find((c) => c.primary)!;
const others = COUNTIES.filter((c) => !c.primary);

export default function ServiceAreaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0e1c33] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1800&q=80"
            alt="North Alabama residential neighborhood"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0e1c33]/83" />
        </div>
        <div className="relative z-10 container-wide pt-36 pb-24 md:pt-44 md:pb-28">
          <Eyebrow>Service Coverage</Eyebrow>
          <h1 className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-[58px] leading-[1.06] max-w-3xl">
            Serving Huntsville &amp; North Alabama
          </h1>
          <p className="mt-5 text-[17px] text-white/60 max-w-xl leading-relaxed">
            Our certified appraisers cover Madison County and a broad area of
            surrounding North Alabama counties — with local market expertise you
            can depend on.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-red text-white px-8 py-4
                         text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-red-700 transition-colors"
            >
              Confirm Your Area <ArrowRight />
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

      {/* ── PRIMARY MARKET ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Text */}
            <div className="lg:col-span-7">
              <Eyebrow>Primary Market</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-6">
                Madison County &amp; Greater Huntsville
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-5">
                Huntsville and Madison County represent our core service area.
                We serve national mortgage companies, local lenders, individual
                homeowners, and legal professionals throughout the region. Our
                appraisers work here daily — from established neighborhoods near
                downtown Huntsville to the fast-growing subdivisions in Madison
                and beyond.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                Deep familiarity with local comparable sales, new construction
                activity, school district boundaries, and flood zone designations
                means every report reflects actual North Alabama market
                conditions — not generic regional data.
              </p>

              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-3">
                  Communities in Madison County
                </p>
                <div className="flex flex-wrap gap-2">
                  {primary.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1.5 bg-[#f5f5f3] text-brand-navy text-[13px] font-medium border border-gray-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Office card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-navy text-white p-10">
                <Eyebrow>Our Office</Eyebrow>
                <address className="not-italic mb-6">
                  <p className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                    Huntsville, Alabama
                  </p>
                  <p className="text-[14px] text-white/65 leading-relaxed">
                    {COMPANY.address.street}<br />
                    {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                  </p>
                </address>
                <div className="border-t border-white/10 pt-6 space-y-2">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="block font-serif text-xl font-bold text-white hover:text-white/80 transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-[12px] text-white/35">Fax: {COMPANY.fax}</p>
                </div>
                <div className="mt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                               tracking-[0.12em] text-white border-b border-white/30 pb-0.5
                               hover:border-white transition-colors"
                  >
                    Contact Our Office <ArrowRight />
                  </Link>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-px bg-gray-100 mt-px">
                <div className="bg-[#f5f5f3] p-6">
                  <p className="font-serif text-3xl font-bold text-brand-navy leading-none">9+</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 font-semibold mt-1.5">
                    Counties Served
                  </p>
                </div>
                <div className="bg-[#f5f5f3] p-6">
                  <p className="font-serif text-3xl font-bold text-brand-navy leading-none">AL</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 font-semibold mt-1.5">
                    State Licensed
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COUNTY GRID ── */}
      <section className="section-padding bg-[#f5f5f3]">
        <div className="container-wide">
          <div className="mb-12">
            <Eyebrow>Coverage Area</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight max-w-xl">
              Counties We Serve
            </h2>
            <p className="mt-4 text-[15px] text-gray-500 max-w-2xl leading-relaxed">
              Beyond Madison County, our appraisers cover a broad area of North
              Alabama. Contact us to confirm coverage for your specific location.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {others.map((county) => (
              <div
                key={county.name}
                className="bg-white p-7 group hover:bg-brand-navy transition-colors duration-300"
              >
                <h3 className="font-serif text-[17px] font-bold text-brand-navy mb-4
                               group-hover:text-white transition-colors">
                  {county.name}
                </h3>
                <ul className="space-y-1.5">
                  {county.cities.map((city) => (
                    <li
                      key={city}
                      className="text-[13px] text-gray-400 flex items-center gap-2
                                 group-hover:text-white/60 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-red shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-6 flex items-start gap-4 bg-white border-l-4 border-brand-red px-6 py-5">
            <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-brand-navy">Don't see your county?</strong>{" "}
              This list is not exhaustive. Call us at{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-brand-red font-semibold hover:underline">
                {COMPANY.phone}
              </a>{" "}
              to ask about coverage outside these listed areas.
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL EXPERTISE ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80"
                alt="North Alabama residential neighborhood"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-brand-navy text-white px-7 py-5">
                <p className="font-serif text-3xl font-bold leading-none">
                  1997
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mt-1.5 font-semibold">
                  Serving North Alabama
                </p>
              </div>
            </div>

            <div>
              <Eyebrow>Local Knowledge</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-6">
                We Know This Market
              </h2>
              <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed">
                <p>
                  Huntsville and North Alabama's real estate market has seen
                  exceptional growth, driven by aerospace, defense, and
                  technology employment. Understanding how proximity to major
                  employers, school districts, and new development corridors
                  affects neighborhood-level value requires appraisers who work
                  this market every day.
                </p>
                <p>
                  Our team's familiarity with local subdivision development,
                  flood zone designations, and the nuances of new construction
                  versus resale ensures every report reflects real conditions —
                  not generic statewide or regional data.
                </p>
                <p>
                  We serve clients ranging from national mortgage servicers to
                  individual homeowners, and we produce reports that stand up
                  to scrutiny at every level.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                             tracking-[0.12em] text-brand-navy border-b border-brand-navy pb-0.5
                             hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  About our team <ArrowRight />
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
                We Likely Cover Your Area
              </h2>
              <p className="mt-4 text-[15px] text-white/55 leading-relaxed">
                Call or submit a request and we'll confirm coverage and provide
                a quote for your property.
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
