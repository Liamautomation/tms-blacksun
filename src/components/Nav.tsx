"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ClipboardCheck } from "lucide-react";
import { useState, useEffect } from "react";

const pages = [
  { href: "/comprendre-les-tms", label: "Comprendre" },
  { href: "/fiches-de-poste", label: "Fiches de poste" },
  { href: "/bonnes-pratiques", label: "Bonnes pratiques" },
  { href: "/auto-evaluation", label: "Auto-évaluation" },
  { href: "/ressources", label: "Ressources" },
  { href: "/signalement", label: "Signalement" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-line bg-card/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo — grand et visible */}
          <Link href="/" className="shrink-0 rounded-lg" aria-label="Black Sun Villetaneuse — Accueil">
            <Image src="/images/logo.png" alt="Black Sun Villetaneuse" width={3331} height={2816} className="h-11 w-auto md:h-12" priority />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              <li>
                <Link href="/" className={`relative block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${pathname === "/" ? "bg-brand text-white" : "text-ink-soft hover:bg-brand-mist hover:text-ink"}`}>Accueil</Link>
              </li>
              {pages.map((p) => {
                const active = pathname === p.href;
                return (
                  <li key={p.href}>
                    <Link href={p.href} className={`block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${active ? "bg-brand text-white" : "text-ink-soft hover:bg-brand-mist hover:text-ink"}`}>{p.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link href="/auto-evaluation" className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-paper transition-transform hover:-translate-y-0.5 sm:inline-flex xl:hidden 2xl:inline-flex">
              <ClipboardCheck className="h-3.5 w-3.5" />Évaluer
            </Link>
            <button type="button" aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-deep transition-colors hover:bg-brand-mist xl:hidden">
              <span className="sr-only">{open ? "Fermer" : "Menu"}</span>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — plein écran */}
      {open && (
        <div id="menu-mobile" className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-paper xl:hidden">
          <nav aria-label="Navigation mobile" className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <ul className="divide-y divide-line border-y border-line">
              <li><Link href="/" className={`flex items-baseline gap-4 px-2 py-4 text-lg font-bold ${pathname === "/" ? "text-brand-deep" : "text-ink"}`}><span className="font-display text-sm text-ink-muted w-8">01</span>Accueil</Link></li>
              {pages.map((p, i) => (
                <li key={p.href}>
                  <Link href={p.href} className={`flex items-baseline gap-4 px-2 py-4 text-lg font-bold ${pathname === p.href ? "text-brand-deep" : "text-ink"}`}>
                    <span className="font-display text-sm text-ink-muted w-8">{String(i + 2).padStart(2, "0")}</span>{p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="bs-eyebrow mt-6">Espace prévention TMS</p>
          </nav>
        </div>
      )}
    </header>
  );
}
