import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreySable | Custom Automation & AI Solutions",
  description: "GreySable specializes in custom automation, vision AI, and hardware design. We build intelligent systems that drive results.",
  keywords: ["automation", "AI", "vision AI", "hardware design", "custom software", "opsis"],
  authors: [{ name: "GreySable" }],
  openGraph: {
    title: "GreySable | Custom Automation & AI Solutions",
    description: "We build intelligent systems that drive results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
