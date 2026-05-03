import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
  Outfit,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "8 Ball Tavern — Website Proposal & Concepts",
  description:
    "Proposal and three design directions for 8 Ball Tavern's new website — Kalibo's premier sports lounge, bar & restaurant. Prepared by Fishbone Creative Solutions.",
  authors: [{ name: "Fishbone Creative Solutions" }],
  openGraph: {
    title: "8 Ball Tavern — Website Proposal & Concepts",
    description:
      "Proposal and three AI-integrated website concepts for 8 Ball Tavern.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
