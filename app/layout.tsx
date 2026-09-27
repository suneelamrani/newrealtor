import type { Metadata } from "next";
import { Comic_Neue, Patrick_Hand_SC } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const patrickHandSC = Patrick_Hand_SC({
  variable: "--font-patrick-hand-sc",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Realtor.ca",
  description: "New Realtors. Fresh Perspective. Your Best Move.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${comicNeue.variable} ${patrickHandSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
