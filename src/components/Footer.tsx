import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black-border bg-black-sun">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-gold font-bold text-lg mb-2">Black Sun Villetaneuse</p>
            <p className="text-cream-muted/50 text-sm">Site interne de prévention des Troubles Musculo-Squelettiques</p>
          </div>
          <div>
            <p className="text-cream/80 font-medium text-sm mb-3">Navigation</p>
            <div className="space-y-2">
              {["/","/comprendre-les-tms","/fiches-de-poste","/bonnes-pratiques","/auto-evaluation","/signalement"].map((href) => (
                <Link key={href} href={href} className="block text-cream-muted/50 text-sm hover:text-gold transition-colors">
                  {href === "/" ? "Accueil" : href === "/comprendre-les-tms" ? "Comprendre les TMS" : href === "/fiches-de-poste" ? "Fiches de poste" : href === "/bonnes-pratiques" ? "Bonnes pratiques" : href === "/auto-evaluation" ? "Auto-évaluation" : "Signalement"}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-cream/80 font-medium text-sm mb-3">Informations</p>
            <div className="space-y-2">
              <Link href="/mentions-legales" className="block text-cream-muted/50 text-sm hover:text-gold transition-colors">Mentions légales</Link>
              <Link href="/duerp" className="block text-cream-muted/50 text-sm hover:text-gold transition-colors">DUERP</Link>
              <p className="text-cream-muted/30 text-sm pt-2">© {new Date().getFullYear()} Black Sun Villetaneuse</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}