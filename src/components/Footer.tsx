import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
        <p>© {new Date().getFullYear()} Black Sun Villetaneuse — Site interne de prévention TMS</p>
        <div className="flex items-center gap-4">
          <Link href="/mentions-legales" className="hover:text-ink-soft transition-colors">Mentions légales</Link>
          <Link href="/duerp" className="hover:text-ink-soft transition-colors">DUERP</Link>
          <Link href="/signalement" className="hover:text-ink-soft transition-colors">Signalement</Link>
        </div>
      </div>
    </footer>
  );
}
