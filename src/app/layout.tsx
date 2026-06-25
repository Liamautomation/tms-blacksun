import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "Black Sun Villetaneuse — Prévention TMS",
  description: "Espace de prévention TMS — centre de bronzage et onglerie.",
  robots: "noindex, nofollow",
  metadataBase: new URL("https://tms-blacksun.vercel.app"),
  openGraph: {
    title: "Black Sun Villetaneuse — Prévention TMS",
    description: "Prévention TMS",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Nav />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
