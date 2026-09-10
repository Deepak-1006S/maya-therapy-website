import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
  description:
    "Warm, collaborative therapy for adults navigating anxiety, panic, trauma, burnout, and perfectionism in Santa Monica and across California through secure telehealth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">{children}</body>
    </html>
  );
}
