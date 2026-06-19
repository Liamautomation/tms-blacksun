"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const pages = [
  { href: "/", label: "Accueil" },
  { href: "/comprendre-les-tms", label: "Comprendre les TMS" },
  { href: "/fiches-de-poste", label: "Fiches de poste" },
  { href: "/bonnes-pratiques", label: "Bonnes pratiques" },
  { href: "/auto-evaluation", label: "Auto-évaluation" },
  { href: "/ressources", label: "Ressources" },
  { href: "/duerp", label: "DUERP" },
  { href: "/signalement", label: "Signalement" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black-border bg-black-sun/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-gold font-bold text-lg tracking-tight">Black Sun Villetaneuse</Link>
        <div className="hidden lg:flex items-center gap-1">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className="px-3 py-2 text-sm text-cream-muted/80 hover:text-gold transition-colors rounded-md">{p.label}</Link>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-black-border bg-black-sun">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-cream-muted/80 hover:text-gold hover:bg-black-card transition-colors">{p.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}