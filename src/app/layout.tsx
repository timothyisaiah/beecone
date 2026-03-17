import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Watermark from "@/components/layout/Watermark";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Beecone — Sweetness from Within",
    template: "%s | Beecone",
  },
  description:
    "Premium, natural, organic honey products by Beacon Flame Innovations. Ethically sourced, crafted with care.",
  keywords: [
    "honey",
    "raw honey",
    "organic honey",
    "natural honey",
    "beecone",
    "beacon flame innovations",
    "premium honey",
  ],
  openGraph: {
    title: "Beecone — Sweetness from Within",
    description:
      "Premium, natural, organic honey products by Beacon Flame Innovations.",
    type: "website",
    locale: "en_US",
    siteName: "Beecone",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Watermark />
        <CartProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
