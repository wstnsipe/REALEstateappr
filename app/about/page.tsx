import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, STAFF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About & Team",
  description:
    "Meet the licensed and certified appraisers at Appraisal Services of North Alabama. Serving Huntsville and North Alabama since 1986.",
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

const VALUES = [
  {
    title: "Independence",
    body: "We have no financial stake in any appraisal outcome. Our only obligation is an honest, accurate opinion of value.",
  },
  {
    title: "Professionalism",
    body: "Every report meets USPAP standards and is signed by a licensed or certified appraiser who stands behind the work.",
  },
  {
    title: "Local Expertise",
    body: "Our team works North Alabama markets daily, staying current on trends, new developments, and neighborhood dynamics.",
  },
  {
    title: "Client Service",
    body: "We treat every client the way we'd want to be treated — whether by phone, email, or in person.",
  },
];

const CREDENTIAL_STEPS = [
  { n: "01", title: "Accredited Education", body: "Hundreds of hours of coursework through an approved education provider, covering appraisal theory, methods, and ethics." },
  { n: "02", title: "State Licensing Exam", body: "Comprehensive written examinations administered by the Alabama Real Estate Appraisers Board." },
  { n: "03", title: "Supervised Field Experience", body: "A documented period of field appraisal work under the direct supervision of a certified appraiser." },
  { n: "04", title: "Continuing Education", body: "Mandatory ongoing education requirements to maintain licensure and stay current with USPAP updates." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0e1c33] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&q=80"
            alt="Professional appraisal office"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0e1c33]/80" />
        </div>
        <div className="relative z-10 container-wide pt-36 pb-24 md:pt-44 md:pb-28">
          <Eyebrow>Our Company</Eyebrow>
          <h1 className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-[58px] leading-[1.06] max-w-3xl">
            Professional Appraisers Rooted in North Alabama
          </h1>
          <p className="mt-5 text-[17px] text-white/60 max-w-xl leading-relaxed">
            Serving lenders, homeowners, and legal professionals with
            integrity and precision since {COMPANY.founded}.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <div className="lg:col-span-6">
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-6">
                {COMPANY.name}
              </h2>
              <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed">
                <p>
                  In business since {COMPANY.founded} and operating locally
                  in North Alabama since {COMPANY.localSince}, Appraisal Services
                  of North Alabama has built its reputation on one principle:
                  accurate, impartial valuations that clients can rely on.
                </p>
                <p>
                  We serve everyone from national mortgage companies and local
                  banks to individual homeowners who want to know what their
                  property is worth. Even as the appraisal profession grows more
                  complex each year, we keep rates competitive and quality high
                  by combining experienced appraisers with modern data tools.
                </p>
                <p>
                  Our office is in Huntsville — at the heart of one of the
                  South's fastest-growing real estate markets. From historic
                  downtown neighborhoods to the expanding communities of Madison
                  and beyond, we know this market.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                             tracking-[0.12em] text-brand-navy border-b border-brand-navy pb-0.5
                             hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  Our Services <ArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gray-400
                             hover:text-brand-navy transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80"
                  alt="North Alabama residential neighborhood"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-px bg-gray-100">
                <div className="bg-brand-navy text-white p-6 text-center">
                  <p className="font-serif text-3xl font-bold leading-none">38<span className="text-brand-red text-xl">+</span></p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 mt-1.5 font-semibold">Years</p>
                </div>
                <div className="bg-brand-red text-white p-6 text-center">
                  <p className="font-serif text-3xl font-bold leading-none">Local</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/70 mt-1.5 font-semibold">Market</p>
                </div>
                <div className="bg-[#f5f5f3] p-6 text-center">
                  <p className="font-serif text-3xl font-bold text-brand-navy leading-none">USPAP</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mt-1.5 font-semibold">Compliant</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-padding bg-[#f5f5f3]">
        <div className="container-wide">
          <div className="mb-12">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-white p-8 group hover:bg-brand-navy transition-colors duration-300">
                <p className="font-serif text-[52px] font-bold text-gray-100 leading-none mb-5
                               group-hover:text-white/10 transition-colors">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-[18px] font-bold text-brand-navy mb-3
                               group-hover:text-white transition-colors">
                  {v.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed
                              group-hover:text-white/65 transition-colors">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Eyebrow>Our Team</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Licensed &amp; Certified Appraisers
              </h2>
              <p className="mt-3 text-[15px] text-gray-500 max-w-xl">
                State-licensed professionals with active certifications through
                the Alabama Real Estate Appraisers Board.
              </p>
            </div>
          </div>

          {/* Team table — no stock headshots; clean editorial list */}
          <div className="border-t border-gray-100">
            {STAFF.map((member, i) => (
              <div
                key={member.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                           py-5 border-b border-gray-100 group hover:bg-[#f5f5f3] px-4 -mx-4
                           transition-colors duration-150"
              >
                <div className="flex items-center gap-5">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 bg-brand-navy flex items-center justify-center shrink-0">
                    <span className="font-serif text-sm font-bold text-white">
                      {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-[17px] font-bold text-brand-navy leading-snug">
                      {member.name}
                    </p>
                    <p className="text-[12px] uppercase tracking-[0.14em] text-brand-red font-semibold mt-0.5">
                      {member.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-gray-400">
            All team members hold active licenses in good standing with the Alabama Real Estate Appraisers Board.
          </p>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-5">
              <Eyebrow>Licensing &amp; Standards</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Qualified, Credentialed, Accountable
              </h2>
              <div className="space-y-4 text-[15px] text-white/60 leading-relaxed">
                <p>
                  Becoming a licensed or certified appraiser in Alabama requires
                  hundreds of hours of accredited education, rigorous state
                  examinations, substantial supervised field experience, and
                  ongoing continuing education.
                </p>
                <p>
                  Every appraisal produced by our firm complies with the Uniform
                  Standards of Professional Appraisal Practice (USPAP) — the
                  ethical and technical framework that governs all professional
                  appraisers in the United States.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                             tracking-[0.12em] text-white border-b border-white/30 pb-0.5
                             hover:border-white transition-colors"
                >
                  View Our Services <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {CREDENTIAL_STEPS.map((step) => (
                <div key={step.n} className="bg-brand-navy border border-white/10 p-7">
                  <p className="font-serif text-[40px] font-bold text-white/10 leading-none mb-4">
                    {step.n}
                  </p>
                  <h3 className="font-serif text-[16px] font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="container-wide py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <Eyebrow>Work With Us</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Contact Our Team Today
              </h2>
              <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
                Discuss your appraisal needs, confirm service coverage, and
                schedule an inspection with our certified team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-brand-navy text-brand-navy
                           px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                           hover:bg-brand-navy hover:text-white transition-all"
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
