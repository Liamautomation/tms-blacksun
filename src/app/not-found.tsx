import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-28 text-center">
      <p className="font-display text-8xl font-extrabold text-gold/20 mb-4">404</p>
      <h1 className="font-display text-2xl font-bold text-cream mb-3">Page introuvable</h1>
      <p className="text-cream-muted/45 text-sm mb-8">La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold/10 text-gold text-sm font-medium hover:bg-gold/20 transition-colors">Retour à l&apos;accueil</Link>
    </div>
  );
}