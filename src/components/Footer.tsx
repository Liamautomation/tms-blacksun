import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/comprendre-les-tms", label: "Comprendre les TMS" },
  { href: "/fiches-de-poste", label: "Fiches de poste" },
  { href: "/bonnes-pratiques", label: "Bonnes pratiques" },
  { href: "/auto-evaluation", label: "Auto-évaluation" },
  { href: "/ressources", label: "Ressources" },
  { href: "/signalement", label: "Signalement" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="relative overflow-hidden">
        <div className="bs-sun-texture absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
          {/* Logo + infos */}
          <div>
            <Image src="/images/logo.png" alt="Black Sun Villetaneuse" width={3331} height={2816} className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-paper/70">
              Centre de bronzage & onglerie<br />
              Villetaneuse<br />
              [À COMPLÉTER — adresse complète]
            </p>
          </div>

          {/* Référent prévention */}
          <div>
            <h2 className="bs-eyebrow !text-brand-light">Référent prévention</h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/85">
              <span className="text-base font-bold text-paper">[À COMPLÉTER]</span><br />
              Référent TMS<br />
              [À COMPLÉTER — téléphone]<br />
              [À COMPLÉTER — email]
            </p>
            <p className="mt-4 text-sm text-paper/70">
              Une douleur, une gêne ?{" "}
              <Link href="/signalement" className="font-semibold text-brand-light underline underline-offset-4 hover:text-paper">
                Faites un signalement
              </Link>
            </p>
          </div>

          {/* Plan du site */}
          <nav aria-label="Plan du site">
            <h2 className="bs-eyebrow !text-brand-light">Sommaire</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-paper/75 underline-offset-4 hover:text-paper hover:underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative border-t border-paper/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-[11px] leading-relaxed text-paper/55 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Black Sun Villetaneuse — Site interne de prévention TMS</p>
            <p>Espace réservé aux salariés — accès par lien direct, site non référencé.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
