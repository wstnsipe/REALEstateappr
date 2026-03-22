"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FAQS, COMPANY } from "@/lib/constants";

/* ─── types ──────────────────────────────────────────────────────────── */
type FaqItem = { question: string; answer: string };

/* ─── FAQ categories ─────────────────────────────────────────────────── */
const CATEGORIES: { label: string; items: FaqItem[] }[] = [
  {
    label: "The Basics",
    items: FAQS.filter((f) =>
      [
        "What is a real estate appraisal?",
        "Why would I need a home appraisal?",
        "What is market value?",
        "How are appraisers licensed and certified?",
        "Who owns the appraisal report?",
      ].includes(f.question)
    ),
  },
  {
    label: "Appraisal vs. Other Reports",
    items: FAQS.filter((f) =>
      [
        "What is the difference between an appraisal and a home inspection?",
        "What is the difference between an appraisal and a CMA?",
        "What does the appraisal report contain?",
      ].includes(f.question)
    ),
  },
  {
    label: "Homeowner Situations",
    items: FAQS.filter((f) =>
      [
        "What is PMI and how can I get rid of it?",
        "How should I prepare for the appraiser's visit?",
      ].includes(f.question)
    ),
  },
];

// Collect any FAQs not matched above into "Other"
const assignedQuestions = new Set(CATEGORIES.flatMap((c) => c.items.map((i) => i.question)));
const remaining = FAQS.filter((f) => !assignedQuestions.has(f.question));
if (remaining.length) {
  CATEGORIES.push({ label: "Other Questions", items: remaining });
}

/* ─── sub-components ─────────────────────────────────────────────────── */
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

function AccordionItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
      >
        <span
          className={`font-serif text-[17px] font-semibold leading-snug transition-colors duration-150
                      ${open ? "text-brand-red" : "text-brand-navy group-hover:text-brand-red"}`}
        >
          {question}
        </span>
        {/* +/× toggle */}
        <span
          className={`shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-200
                      ${open
                        ? "border-brand-red bg-brand-red text-white rotate-45"
                        : "border-gray-200 text-brand-navy group-hover:border-brand-navy"
                      }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${open ? "max-h-[500px] pb-5" : "max-h-0"}`}
      >
        <p className="text-[14px] text-gray-500 leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────────────────── */
export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0e1c33] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&q=80"
            alt="Professional office desk"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0e1c33]/86" />
        </div>
        <div className="relative z-10 container-wide pt-36 pb-24 md:pt-44 md:pb-28">
          <Eyebrow>Common Questions</Eyebrow>
          <h1 className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-[58px] leading-[1.06] max-w-3xl">
            Appraisal FAQ
          </h1>
          <p className="mt-5 text-[17px] text-white/60 max-w-xl leading-relaxed">
            Answers to the questions homeowners, buyers, and lenders most often
            ask about the appraisal process.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">

            {/* ── FAQ accordions ── */}
            <div className="lg:col-span-2">

              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 pb-6">
                {CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(i)}
                    className={`px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-150
                                ${activeCategory === i
                                  ? "bg-brand-navy text-white"
                                  : "bg-[#f5f5f3] text-gray-500 hover:text-brand-navy hover:bg-gray-100"
                                }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Active category questions */}
              <div className="border-t border-gray-100">
                {CATEGORIES[activeCategory].items.map((faq) => (
                  <AccordionItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>

              <p className="mt-8 text-[13px] text-gray-400">
                Showing {CATEGORIES[activeCategory].items.length} of {FAQS.length} questions.
              </p>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">

              {/* Contact card */}
              <div className="bg-brand-navy text-white p-8">
                <Eyebrow>Still Have Questions?</Eyebrow>
                <h3 className="font-serif text-xl font-bold text-white mb-3 leading-tight">
                  Our Team Is Here to Help
                </h3>
                <p className="text-[13px] text-white/60 leading-relaxed mb-6">
                  If you didn't find the answer you were looking for, contact
                  our Huntsville office directly. We'll explain the process,
                  discuss your situation, and provide a fee quote.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-2 text-[13px] font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {COMPANY.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                               tracking-[0.1em] text-brand-red hover:text-red-400 transition-colors"
                  >
                    Send a message <ArrowRight />
                  </Link>
                </div>
              </div>

              {/* USPAP card */}
              <div className="bg-[#f5f5f3] p-8">
                <Eyebrow>Standards</Eyebrow>
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-3 leading-tight">
                  What Is USPAP?
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  The Uniform Standards of Professional Appraisal Practice
                  (USPAP) establishes the ethical obligations and performance
                  standards all licensed and certified appraisers must follow.
                  Every appraisal we produce complies fully with USPAP.
                </p>
              </div>

              {/* Renovation ROI card */}
              <div className="border border-gray-100 p-8">
                <Eyebrow>Home Improvements</Eyebrow>
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-4 leading-tight">
                  Which Updates Add the Most Value?
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Kitchen Remodel", value: "~88% ROI" },
                    { label: "Bathroom Remodel", value: "~85% ROI" },
                    { label: "New Roof / HVAC", value: "~70% ROI" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-2 border-b border-gray-50"
                    >
                      <span className="text-[13px] text-gray-600">{item.label}</span>
                      <span className="text-[13px] font-bold text-brand-navy">{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
                  ROI varies by location and local market. Consult an appraiser
                  for guidance specific to your property.
                </p>
              </div>

              {/* For homeowners link */}
              <div className="border-l-4 border-brand-navy bg-white p-6">
                <p className="text-[13px] font-semibold text-brand-navy mb-1">Are you a homeowner?</p>
                <p className="text-[13px] text-gray-500 mb-3 leading-relaxed">
                  See specific appraisal use cases — PMI removal, pre-listing, estate, and more.
                </p>
                <Link
                  href="/for-homeowners"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                             tracking-[0.1em] text-brand-red hover:text-red-700 transition-colors"
                >
                  Homeowner services <ArrowRight />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="section-padding bg-[#f5f5f3]">
        <div className="container-wide">
          <div className="mb-12">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight max-w-lg">
              How a Residential Appraisal Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {[
              {
                n: "01",
                title: "Order & Schedule",
                body: "Call or submit a request. We confirm coverage, provide a fee quote, and schedule a convenient inspection time.",
              },
              {
                n: "02",
                title: "Property Inspection",
                body: "A licensed appraiser inspects the property — exterior and interior — documenting condition, size, quality, and features.",
              },
              {
                n: "03",
                title: "Market Research",
                body: "We analyze comparable sales, MLS data, tax records, and flood zone information to form a credible market context.",
              },
              {
                n: "04",
                title: "Report Delivery",
                body: "A completed USPAP-compliant report is delivered to you or your lender within the agreed timeframe.",
              },
            ].map((step) => (
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
                Have a Specific Question?
              </h2>
              <p className="mt-4 text-[15px] text-white/55 leading-relaxed">
                Our team is happy to walk you through the process, discuss your
                situation, and provide a transparent fee quote.
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
                Contact Us <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
