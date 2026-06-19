import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black Sun Villetaneuse — Prévention TMS",
  description:
    "Site de prévention des Troubles Musculo-Squelettiques (TMS) destiné aux salariés de Black Sun Villetaneuse. Protocoles, bonnes pratiques et ressources.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black-sun text-cream`}>
        <Nav />
        <main className="min-h-screen pt-16">{children}</main>
        <footer className="border-t border-black-border py-8 text-center text-cream-muted/50 text-sm">
          Black Sun Villetaneuse — Site interne de prévention TMS
        </footer>
      </body>
    </html>
  );
}