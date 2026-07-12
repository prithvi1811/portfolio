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
  description: "B2B Product Manager with 5+ years shipping marketplace platforms, seller integrations, and AI-powered product features — 20 carrier integrations, 100,000+ lots onboarded, and hands-on AI/LLM experience.",
  openGraph: {
    title: "Prithvi Chauhan — Product Manager",
    description: "B2B marketplace PM with 20 carrier integrations, 100,000+ lots onboarded, and hands-on AI/LLM prototyping.",
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
