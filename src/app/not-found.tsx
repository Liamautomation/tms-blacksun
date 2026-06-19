import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-28 text-center">
      <p className="font-display text-8xl font-extrabold text-brand/20 mb-4">404</p>
      <h1 className="font-display text-2xl font-bold text-ink mb-3">Page introuvable</h1>
      <p className="text-ink-soft text-sm mb-8">La page que vous cherchez n&apos;existe pas.</p>
      <Link href="/" className="rl-btn rl-btn-primary">Retour à l&apos;accueil</Link>
    </div>
  );
}