import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prithvi Chauhan — Product Manager",
  description: "Marketplace-focused Product Manager with 4+ years driving platform growth, $2M+ revenue impact, and hands-on AI/LLM experience.",
  openGraph: {
    title: "Prithvi Chauhan — Product Manager",
    description: "Marketplace PM with $2M+ revenue impact, 15% conversion lift, and hands-on AI/LLM prototyping.",
    url: "https://prithvichauhan.vercel.app",
    siteName: "Prithvi Chauhan",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
