import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Mohamed Sharkawi | PT ACUPUNCTURE - Physical Therapy Specialist",
  description:
    "Dr. Mohamed Osama Sharkawi - Physical Therapy Specialist in Acupuncture Techniques. DPT (Orthopedics), Licensed Acupuncturist (CACMS Beijing), BMAS Member. 17+ years advancing musculoskeletal care through evidence-based acupuncture.",
  keywords: [
    "acupuncture",
    "physical therapy",
    "physiotherapy",
    "MSK disorders",
    "dry needling",
    "musculoskeletal rehabilitation",
    "pain management",
    "Dr. Mohamed Sharkawi",
    "Egypt",
    "BMAS",
    "orthopedics",
  ],
  authors: [{ name: "Dr. Mohamed Osama Sharkawi" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Dr. Mohamed Sharkawi | PT ACUPUNCTURE",
    description:
      "Physical Therapy Specialist in Acupuncture Techniques. Advancing MSK care through evidence-based acupuncture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${notoArabic.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
