import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a fee quote, ask a question, or order a residential appraisal. Our Huntsville office serves all of North Alabama — call or submit a request.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
