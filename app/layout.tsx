import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${COMPANY.name}`,
    default: `${COMPANY.name} | Huntsville, AL`,
  },
  description:
    "Professional residential real estate appraisal services in Huntsville and North Alabama. Licensed, certified appraisers serving lenders, homeowners, and attorneys since 1986.",
  keywords: [
    "real estate appraisal",
    "home appraisal",
    "residential appraisal",
    "Huntsville AL",
    "North Alabama",
    "property valuation",
    "certified appraiser",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: COMPANY.name,
    description:
      "Licensed residential real estate appraisers serving Huntsville and North Alabama since 1986.",
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
