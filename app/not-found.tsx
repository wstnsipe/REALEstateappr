import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-[#0e1c33] min-h-[70vh] flex items-center">
      <div className="container-wide py-24 text-center">
        <p className="font-serif text-[80px] font-bold text-white/10 leading-none">404</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-[15px] text-white/50 mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Try navigating back to our homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-red text-white
                       px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                       hover:bg-red-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/25 text-white
                       px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]
                       hover:border-white/60 hover:bg-white/5 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
