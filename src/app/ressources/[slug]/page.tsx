import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Maximize2 } from "lucide-react";
import { FadeIn } from "@/components/Animated";
import { annexes, getAnnexe } from "@/lib/data/annexes";

export function generateStaticParams() {
  return annexes.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const annexe = getAnnexe(slug);
  if (!annexe) return { title: "Document introuvable" };
  return {
    title: `${annexe.sousTitre} — ${annexe.titre}`,
    description: annexe.intro,
  };
}

export default async function AnnexePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const annexe = getAnnexe(slug);
  if (!annexe) notFound();

  return (
    <section className="relative overflow-hidden">
      <div className="bs-sun-glow z-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        {/* Barre d'actions */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Retour à la documenthèque
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={annexe.fichier}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
              Plein écran / Imprimer
            </a>
            <a
              href={annexe.fichier}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-line bg-brand-soft px-4 py-2.5 text-sm font-medium text-brand transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger
            </a>
          </div>
        </div>

        <FadeIn>
          <p className="bs-eyebrow">Documenthèque · {annexe.sousTitre}</p>
          <h1 className="bs-display-section text-ink mt-4">{annexe.titre}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            {annexe.intro}
          </p>
        </FadeIn>

        <iframe
          src={annexe.fichier}
          title={annexe.titre}
          className="mt-8 h-[80vh] min-h-[480px] w-full rounded-3xl border border-line bg-card"
        />
        <p className="mt-3 text-center text-sm text-ink-soft">
          Le document ne s&apos;affiche pas&nbsp;?{" "}
          <a
            href={annexe.fichier}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline"
          >
            Ouvrez-le dans un nouvel onglet
          </a>
          .
        </p>
      </div>
    </section>
  );
}
