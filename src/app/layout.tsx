import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const syne = Syne({ subsets: ["latin"], variable: "--font-display", weight: ["400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Black Sun Villetaneuse — Prévention TMS",
  description: "Site de prévention des Troubles Musculo-Squelettiques (TMS) destiné aux salariés de Black Sun Villetaneuse.",
  robots: "noindex, nofollow",
  metadataBase: new URL("https://blacksun-villetaneuse.vercel.app"),
  openGraph: { title: "Black Sun Villetaneuse — Prévention TMS", description: "Site de prévention des Troubles Musculo-Squelettiques (TMS)", type: "website", locale: "fr_FR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-black-sun text-cream-muted antialiased">
        <Nav />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}