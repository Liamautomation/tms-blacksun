"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black-border bg-black-sun/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-gold font-bold text-lg tracking-tight hover:text-gold-light transition-colors">
          Black Sun<span className="text-cream-muted/70 font-normal"> Villetaneuse</span>
        </Link>
        <div className="hidden lg:flex items-center gap-0.5">
          {pages.map((p) => {
            const active = pathname === p.href || (p.href !== "/" && pathname.startsWith(p.href));
            return (
              <Link key={p.href} href={p.href} className={`relative px-3 py-2 text-sm transition-colors rounded-md ${active ? "text-gold" : "text-cream-muted/60 hover:text-cream-muted"}`}>
                {p.label}
                {active && <motion.div layoutId="nav-active" className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              </Link>
            );
          })}
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden text-cream-muted hover:text-cream" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-t border-black-border bg-black-sun overflow-hidden">
            {pages.map((p) => (
              <Link key={p.href} href={p.href} onClick={() => setOpen(false)} className={`block px-4 py-3 text-sm transition-colors ${pathname === p.href ? "text-gold bg-gold-subtle" : "text-cream-muted/60 hover:text-cream hover:bg-cream-soft"}`}>{p.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}