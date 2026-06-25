import { FileText, Download, Maximize2 } from "lucide-react";
import { ScaleIn, FadeIn, HoverGlow } from "@/components/Animated";

export default function DuerpPage() {
 return (
 <section className="relative overflow-hidden">
 {/* Signature solaire — halo subtil en arrière-plan */}
 <div className="bs-sun-glow z-0" aria-hidden="true" />

 <div className="relative z-10 mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 md:py-28">
 {/* Icône — entrée en scène par échelle */}
 <ScaleIn className="mx-auto mb-8">
 <HoverGlow className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-line bg-brand-soft">
 <FileText className="h-10 w-10 text-brand" />
 </HoverGlow>
 </ScaleIn>

 {/* En-tête éditorial */}
 <FadeIn delay={0.05}>
 <p className="bs-eyebrow">Prévention &amp; conformité</p>
 <h1 className="bs-display-section text-ink">Document Unique (DUERP)</h1>
 <p className="mt-3 text-ink-soft">Document Unique d&apos;Évaluation des Risques Professionnels</p>
 </FadeIn>

 {/* Carte document — teintée avec glow */}
 <FadeIn delay={0.12}>
 <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
 <a
 href="/documents/duerp-poko55.pdf"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 rounded-2xl border border-line bg-card px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
 >
 <Maximize2 className="h-4 w-4" aria-hidden="true" />
 Plein écran / Imprimer
 </a>
 <a
 href="/documents/duerp-poko55.pdf"
 download
 className="inline-flex items-center gap-2 rounded-2xl border border-line bg-brand-soft px-5 py-3 text-sm font-medium text-brand transition-transform hover:-translate-y-0.5"
 >
 <Download className="h-4 w-4" aria-hidden="true" />
 Télécharger le DUERP (PDF)
 </a>
 </div>

 <iframe
 src="/documents/duerp-poko55.pdf"
 title="Document Unique d'Évaluation des Risques Professionnels — POKO 55"
 className="mt-8 h-[80vh] min-h-[480px] w-full rounded-3xl border border-line bg-card"
 />
 <p className="mt-3 text-sm text-ink-soft">
 Le document ne s&apos;affiche pas&nbsp;?{" "}
 <a
 href="/documents/duerp-poko55.pdf"
 target="_blank"
 rel="noopener noreferrer"
 className="font-medium text-brand underline"
 >
 Ouvrez-le dans un nouvel onglet
 </a>
 .
 </p>
 </FadeIn>

 {/* Liseré doré — séparation */}
 <FadeIn delay={0.18} className="mt-12">
 <hr className="border-line" />
 </FadeIn>

 {/* Section explicative — carte éditoriale avec arc solaire */}
 <FadeIn delay={0.05}>
 <div className="bs-card bs-arc mt-10 p-6 text-left">
 <span className="bs-chip mb-3">Définition</span>
 <h2 className="font-display text-sm font-semibold text-ink mb-2">Qu&apos;est-ce que le DUERP ?</h2>
 <p className="text-sm leading-relaxed text-ink-soft">
 Le Document Unique d&apos;Évaluation des Risques Professionnels est obligatoire pour toute entreprise. Il recense l&apos;ensemble des risques et définit les actions de prévention. Mis à jour chaque année, il est tenu à disposition des salariés.
 </p>
 </div>
 </FadeIn>
 </div>
 </section>
 );
}
