import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appraisal FAQ",
  description:
    "Answers to common questions about the residential appraisal process — what appraisers do, how PMI removal works, what your report contains, and more.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
