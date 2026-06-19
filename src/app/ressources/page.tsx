import { Download, ExternalLink, FileText, BookOpen, FolderOpen } from "lucide-react";
import Image from "next/image";

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
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
      <div className="max-w-3xl mb-14"><p className="rl-eyebrow">Bibliothèque</p><h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">Ressources</h1><p className="mt-4 text-lg text-ink-soft">Affiches, documents et liens utiles pour la prévention</p></div>
      <section className="mb-16"><h2 className="font-display text-xl font-semibold text-ink mb-6 flex items-center gap-2"><FileText className="h-5 w-5 text-brand" />Affiches de prévention</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{affiches.map((affiche,i)=><a key={i} href={affiche.src} download={`affiche-tms-${i+1}.png`} className="rl-card rl-lift group overflow-hidden"><div className="relative aspect-[3/4] bg-paper/50"><Image src={affiche.src} alt={affiche.alt} fill className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" /></div><div className="p-4 border-t border-border flex items-center justify-between"><span className="text-sm text-ink-soft group-hover:text-ink transition-colors">Affiche {i+1}</span><span className="flex items-center gap-1.5 text-xs text-brand/40 group-hover:text-brand transition-colors"><Download className="h-3.5 w-3.5" />Télécharger</span></div></a>)}</div></section>
      <section className="mb-16 grid gap-5 sm:grid-cols-2"><div className="rl-card p-8 text-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft mx-auto mb-4"><BookOpen className="h-6 w-6 text-brand/60" /></div><h3 className="font-display font-semibold text-ink mb-2">Fiches gestes et postures</h3><p className="text-ink-muted text-sm">[À COMPLÉTER]</p></div><div className="rl-card p-8 text-center"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft mx-auto mb-4"><FolderOpen className="h-6 w-6 text-brand/60" /></div><h3 className="font-display font-semibold text-ink mb-2">Modes opératoires</h3><p className="text-ink-muted text-sm">[À COMPLÉTER]</p></div></section>
      <section><h2 className="font-display text-xl font-semibold text-ink mb-6 flex items-center gap-2"><ExternalLink className="h-5 w-5 text-brand" />Liens externes utiles</h2><div className="space-y-3">{liens.map((lien)=><a key={lien.url} href={lien.url} target="_blank" rel="noopener noreferrer" className="rl-card rl-lift block p-5 group"><h3 className="text-sm font-medium text-ink group-hover:text-brand transition-colors mb-1">{lien.titre}</h3><p className="text-xs text-ink-muted">{lien.desc}</p></a>)}</div></section>
    </div>
  );
}