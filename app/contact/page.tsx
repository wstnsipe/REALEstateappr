"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/* ─── helpers ────────────────────────────────────────────────────────── */
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

function InputLabel({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2"
    >
      {children}{required && <span className="text-brand-red ml-1">*</span>}
    </label>
  );
}

const inputClass =
  "w-full bg-white border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-300 " +
  "focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/10 transition-colors";

const selectClass =
  "w-full bg-white border border-gray-200 px-4 py-3 text-[14px] text-gray-900 " +
  "focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/10 transition-colors appearance-none cursor-pointer";

/* ─── page ───────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", address: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO — pure dark, no background image ── */}
      <section className="bg-[#0e1c33] pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="container-wide">
          <Eyebrow>Reach Out</Eyebrow>
          <h1 className="font-serif font-bold text-white text-4xl md:text-5xl lg:text-[58px] leading-[1.06] max-w-2xl">
            Contact Our Office
          </h1>
          <p className="mt-5 text-[17px] text-white/55 max-w-lg leading-relaxed">
            Request a fee quote, ask a question, or order an appraisal. We
            respond promptly and are happy to explain the process.
          </p>
        </div>
      </section>

      {/* ── CONTACT + FORM ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">

            {/* ── Left: contact details ── */}
            <div className="space-y-10">

              <div>
                <Eyebrow>Phone</Eyebrow>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="font-serif text-2xl font-bold text-brand-navy hover:text-brand-red transition-colors block"
                >
                  {COMPANY.phone}
                </a>
                <p className="text-[13px] text-gray-400 mt-1">Fax: {COMPANY.fax}</p>
              </div>

              <div>
                <Eyebrow>Office Address</Eyebrow>
                <address className="not-italic text-[15px] text-gray-600 leading-relaxed">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                </address>
              </div>

              <div>
                <Eyebrow>What to Expect</Eyebrow>
                <ul className="space-y-3.5">
                  {[
                    "Tell us about the property and your purpose for the appraisal",
                    "We'll provide a transparent fee quote and current turnaround time",
                    "We'll schedule a convenient inspection time",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 mt-0.5 bg-brand-navy text-white flex items-center justify-center text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <span className="text-[14px] text-gray-500 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick links */}
              <div className="border-t border-gray-100 pt-8 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-4">
                  Helpful Pages
                </p>
                {[
                  { label: "Our Services", href: "/services" },
                  { label: "For Homeowners", href: "/for-homeowners" },
                  { label: "Appraisal FAQ", href: "/faq" },
                  { label: "Service Area", href: "/service-area" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center justify-between text-[13px] text-gray-500
                               hover:text-brand-navy transition-colors group py-1"
                  >
                    {l.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

            </div>

            {/* ── Right: form (2-col span) ── */}
            <div className="lg:col-span-2">
              {submitted ? (
                /* ── Success state ── */
                <div className="bg-[#f5f5f3] border-l-4 border-brand-navy p-10 md:p-14">
                  <div className="w-12 h-12 bg-brand-navy text-white flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-3">
                    Message Received
                  </h2>
                  <p className="text-[15px] text-gray-500 leading-relaxed max-w-md">
                    Thank you for reaching out. A member of our team will review
                    your request and be in touch shortly. For immediate
                    assistance, call us at{" "}
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-brand-navy font-semibold hover:text-brand-red transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase
                               tracking-[0.12em] text-brand-navy border-b border-brand-navy pb-0.5
                               hover:text-brand-red hover:border-brand-red transition-colors"
                  >
                    Submit another request <ArrowRight />
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <InputLabel htmlFor="name" required>Full Name</InputLabel>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <InputLabel htmlFor="email" required>Email Address</InputLabel>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <InputLabel htmlFor="phone">Phone Number</InputLabel>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(256) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <InputLabel htmlFor="service">Type of Appraisal</InputLabel>
                      {/* Custom select wrapper */}
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={selectClass}
                        >
                          <option value="">Select a service…</option>
                          <option>Residential Appraisal (Purchase / Refi)</option>
                          <option>PMI Removal</option>
                          <option>Pre-Listing / FSBO</option>
                          <option>FHA Appraisal</option>
                          <option>New Construction</option>
                          <option>Multi-Family Appraisal</option>
                          <option>Estate / Divorce / Tax</option>
                          <option>Land Appraisal</option>
                          <option>Appraisal Review</option>
                          <option>Other / Not Sure</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <InputLabel htmlFor="address">Property Address</InputLabel>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Huntsville, AL 35801"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <InputLabel htmlFor="message">Message / Additional Details</InputLabel>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your property and the purpose of the appraisal…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 bg-brand-navy text-white
                                 px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                                 hover:bg-navy-800 transition-colors w-full sm:w-auto"
                    >
                      Submit Request <ArrowRight />
                    </button>
                    <p className="text-[12px] text-gray-400 leading-relaxed max-w-xs">
                      Submitting this form does not constitute an order. We'll
                      follow up to confirm details and provide a fee quote.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── OFFICE STRIP ── */}
      <section className="bg-brand-navy">
        <div className="container-wide py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">

            <div className="md:col-span-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-3">
                Our Office
              </p>
              <p className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
                {COMPANY.name}
              </p>
              <address className="not-italic text-[14px] text-white/55 leading-relaxed">
                {COMPANY.address.full}
              </address>
            </div>

            <div className="flex flex-col gap-1.5 md:text-right">
              <a
                href={`tel:${COMPANY.phone}`}
                className="font-serif text-xl font-bold text-white hover:text-white/80 transition-colors"
              >
                {COMPANY.phone}
              </a>
              <p className="text-[12px] text-white/30">Fax: {COMPANY.fax}</p>
              <Link
                href="/service-area"
                className="inline-flex items-center md:justify-end gap-1.5 mt-2 text-[12px] font-semibold
                           uppercase tracking-[0.12em] text-white/40 hover:text-white/80 transition-colors"
              >
                View service area <ArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
