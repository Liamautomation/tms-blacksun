"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ClipboardCheck } from "lucide-react";
import { useState } from "react";

const pages = [
  { href: "/comprendre-les-tms", label: "Comprendre" },
  { href: "/fiches-de-poste", label: "Fiches de poste" },
  { href: "/bonnes-pratiques", label: "Bonnes pratiques" },
  { href: "/auto-evaluation", label: "Auto-évaluation" },
  { href: "/ressources", label: "Ressources" },
  { href: "/duerp", label: "DUERP" },
  { href: "/signalement", label: "Signalement" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-2 rounded-full bg-card/85 py-2 pl-4 pr-2 backdrop-blur-md shadow-[0_6px_22px_-14px_rgba(200,150,46,0.12)] border border-border">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" aria-label="Black Sun Villetaneuse — Accueil">
            <Image
              src="/images/logo.png"
              alt="Black Sun Villetaneuse"
              width={3331}
              height={2816}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              <li>
                <Link
                  href="/"
                  className={`block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${pathname === "/" ? "bg-brand text-paper" : "text-ink-soft hover:bg-brand-mist hover:text-ink"}`}
                >
                  Accueil
                </Link>
              </li>
              {pages.map((p) => {
                const active = pathname === p.href;
                return (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className={`block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${active ? "bg-brand text-paper" : "text-ink-soft hover:bg-brand-mist hover:text-ink"}`}
                    >
                      {p.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/auto-evaluation"
              className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-paper transition-transform hover:-translate-y-0.5 sm:inline-flex xl:hidden 2xl:inline-flex"
            >
              <ClipboardCheck className="h-3.5 w-3.5" />
              Évaluer
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen(!open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors hover:bg-brand-mist xl:hidden"
            >
              <span className="sr-only">{open ? "Fermer" : "Menu"}</span>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="menu-mobile" className="mx-auto max-w-7xl px-3 pt-2 xl:hidden">
          <div className="rounded-2xl bg-card/95 backdrop-blur-md border border-border p-4 shadow-lg">
            <nav>
              <ul className="grid gap-1">
                <li><Link href="/" onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${pathname === "/" ? "bg-brand text-paper" : "text-ink-soft hover:bg-brand-mist hover:text-ink"}`}>Accueil</Link></li>
                {pages.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${pathname === p.href ? "bg-brand text-paper" : "text-ink-soft hover:bg-brand-mist hover:text-ink"}`}>{p.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}