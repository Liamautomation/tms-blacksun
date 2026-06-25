import { Download, ExternalLink, FileText, ClipboardList, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverLift } from "@/components/Animated";
import { annexes } from "@/lib/data/annexes";

const affiches = [
 { src: "/images/affiche1.png", alt: "Affiche prévention TMS 1" },
 { src: "/images/affiche2.png", alt: "Affiche prévention TMS 2" },
 { src: "/images/affiche3.png", alt: "Affiche prévention TMS 3" },
 { src: "/images/affiche4.png", alt: "Affiche prévention TMS 4" },
];

const liens = [
 { titre: "INRS — Troubles Musculo-Squelettiques", url: "https://www.inrs.fr/risques/tms-troubles-musculosquelettiques", desc: "Dossier complet de l'Institut National de Recherche et de Sécurité." },
 { titre: "Assurance Maladie — Risques professionnels", url: "https://www.ameli.fr/entreprise/sante-travail/risques/troubles-musculosquelettiques-tms", desc: "Prévention et prise en charge des TMS." },
 { titre: "Ministère du Travail — Santé au travail", url: "https://travail-emploi.gouv.fr/sante-au-travail", desc: "Réglementation et bonnes pratiques." },
 { titre: "ANACT — Agence pour l'Amélioration des Conditions de Travail", url: "https://www.anact.fr/themes/tms", desc: "Outils et méthodes de prévention." },
 { titre: "CARSAT — Prévention des TMS", url: "https://www.carsat.fr", desc: "Accompagnement par la Caisse d'Assurance Retraite." },
];

export default function RessourcesPage() {
 return (
    <>
    <section className="relative overflow-hidden bg-card-tint border-b border-line">
    <div className="bs-sun-texture absolute inset-0 opacity-50" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16">
      <FadeIn>
        <p className="bs-eyebrow">Bibliothèque</p>
        <h1 className="bs-display-section text-ink mt-4">Ressources</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">Affiches, documents et liens utiles pour la prévention — téléchargez, imprimez, affichez.</p>
      </FadeIn>
    </div>
  </section>

  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">

 {/* ═══ AFFICHES — GRILLE BENTO ═══ */}
 <section className="mb-16 pt-10">
 <FadeIn className="mb-6">
 <div className="flex items-center gap-2">
 <FileText className="h-5 w-5 text-brand" />
 <h2 className="font-display text-xl font-semibold text-ink">Affiches de prévention</h2>
 </div>
 </FadeIn>
 <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {affiches.map((affiche, i) => (
 <StaggerItem key={i}>
 <HoverLift className="bs-card-lift group overflow-hidden h-full">
 <a href={affiche.src} download={`affiche-tms-${i + 1}.png`}>
 <div className="relative aspect-[3/4] bg-card/50">
 <Image src={affiche.src} alt={affiche.alt} fill className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" />
 </div>
 <div className="p-4 border-t border-line flex items-center justify-between">
 <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">Affiche {i + 1}</span>
 <span className="flex items-center gap-1.5 text-xs text-brand/60 group-hover:text-brand transition-colors">
 <Download className="h-3.5 w-3.5" />
 Télécharger
 </span>
 </div>
 </a>
 </HoverLift>
 </StaggerItem>
 ))}
 </StaggerContainer>
 </section>

 {/* ═══ DOCUMENTHÈQUE — ANNEXES À REMPLIR ═══ */}
 <section className="mb-16">
 <FadeIn className="mb-6">
 <div className="flex items-center gap-2">
 <ClipboardList className="h-5 w-5 text-brand" />
 <h2 className="font-display text-xl font-semibold text-ink">Annexes à remplir</h2>
 </div>
 <p className="mt-2 text-sm text-ink-muted">Fiches de prévention TMS à consulter en ligne, imprimer ou télécharger en PDF.</p>
 </FadeIn>
 <StaggerContainer className="grid gap-5 sm:grid-cols-3">
 {annexes.map((a) => (
 <StaggerItem key={a.slug}>
 <HoverLift className="bs-card-lift group h-full p-6 flex flex-col">
 <span className="bs-chip mb-4">{a.sousTitre}</span>
 <h3 className="font-display text-base font-semibold text-ink">{a.titre}</h3>
 <p className="mt-2 flex-1 text-sm text-ink-soft">{a.intro}</p>
 <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
 <Link href={`/ressources/${a.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-brand">
 Consulter
 <ArrowUpRight className="h-4 w-4" />
 </Link>
 <a href={a.fichier} download className="inline-flex items-center gap-1.5 text-xs text-brand/60 transition-colors hover:text-brand">
 <Download className="h-3.5 w-3.5" />
 PDF
 </a>
 </div>
 </HoverLift>
 </StaggerItem>
 ))}
 </StaggerContainer>
 </section>

 {/* ═══ LIENS EXTERNES ═══ */}
 <section>
 <FadeIn className="mb-6">
 <div className="flex items-center gap-2">
 <ExternalLink className="h-5 w-5 text-brand" />
 <h2 className="font-display text-xl font-semibold text-ink">Liens externes utiles</h2>
 </div>
 </FadeIn>
 <StaggerContainer className="space-y-3">
 {liens.map((lien) => (
 <StaggerItem key={lien.url}>
 <HoverLift>
 <a href={lien.url} target="_blank" rel="noopener noreferrer" className="bs-card-lift block p-5 group">
 <div className="flex items-start justify-between gap-4">
 <div>
 <h3 className="text-sm font-medium text-ink group-hover:text-brand transition-colors mb-1">{lien.titre}</h3>
 <p className="text-xs text-ink-muted">{lien.desc}</p>
 </div>
 <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-brand transition-colors shrink-0 mt-0.5" />
 </div>
 </a>
 </HoverLift>
 </StaggerItem>
 ))}
 </StaggerContainer>
 </section>
 </div>
 
  </>
);
}