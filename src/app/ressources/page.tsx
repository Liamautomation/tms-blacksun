"use client";

import { Download, ExternalLink, FileText, BookOpen, FolderOpen } from "lucide-react";
import Image from "next/image";
import { FadeIn, StaggerList, StaggerItem, HoverCard } from "@/components/Animated";

const affiches = [
  { src: "/images/affiche1.png", alt: "Affiche de prévention TMS — Black Sun Villetaneuse 1" },
  { src: "/images/affiche2.png", alt: "Affiche de prévention TMS — Black Sun Villetaneuse 2" },
  { src: "/images/affiche3.png", alt: "Affiche de prévention TMS — Black Sun Villetaneuse 3" },
  { src: "/images/affiche4.png", alt: "Affiche de prévention TMS — Black Sun Villetaneuse 4" },
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
    <div className="mx-auto max-w-5xl px-4 py-20 lg:py-28">
      <FadeIn><p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-3">Bibliothèque</p><h1 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4">Ressources</h1><p className="text-cream-muted/60 text-lg mb-16">Affiches, documents et liens utiles pour la prévention</p></FadeIn>
      <FadeIn delay={0.1}><section className="mb-20"><h2 className="font-display text-xl font-semibold text-cream mb-6 flex items-center gap-2"><FileText className="h-5 w-5 text-gold/60" />Affiches de prévention</h2><StaggerList className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{affiches.map((affiche,i)=><StaggerItem key={i}><HoverCard className="group bg-black-card border border-black-border-light rounded-xl overflow-hidden transition-all duration-300"><a href={affiche.src} download={`affiche-tms-${i+1}.png`} className="block"><div className="relative aspect-[3/4] bg-black-sun/50"><Image src={affiche.src} alt={affiche.alt} fill className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /></div><div className="p-4 border-t border-black-border-light flex items-center justify-between"><span className="text-sm text-cream-muted/50 group-hover:text-cream-muted/70 transition-colors">Affiche {i+1}</span><span className="flex items-center gap-1.5 text-xs text-gold/40 group-hover:text-gold transition-colors"><Download className="h-3.5 w-3.5" />Télécharger</span></div></a></HoverCard></StaggerItem>)}</StaggerList></section></FadeIn>
      <FadeIn delay={0.15}><section className="mb-20 grid gap-5 sm:grid-cols-2"><div className="bg-black-card border border-black-border-light rounded-2xl p-8 text-center"><div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><BookOpen className="h-6 w-6 text-gold/50" /></div><h3 className="font-display font-semibold text-cream mb-2">Fiches gestes et postures</h3><p className="text-cream-muted/40 text-sm">[À COMPLÉTER]</p></div><div className="bg-black-card border border-black-border-light rounded-2xl p-8 text-center"><div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><FolderOpen className="h-6 w-6 text-gold/50" /></div><h3 className="font-display font-semibold text-cream mb-2">Modes opératoires</h3><p className="text-cream-muted/40 text-sm">[À COMPLÉTER]</p></div></section></FadeIn>
      <FadeIn delay={0.2}><section><h2 className="font-display text-xl font-semibold text-cream mb-6 flex items-center gap-2"><ExternalLink className="h-5 w-5 text-gold/60" />Liens externes utiles</h2><StaggerList className="space-y-3">{liens.map((lien)=><StaggerItem key={lien.url}><a href={lien.url} target="_blank" rel="noopener noreferrer" className="block bg-black-card border border-black-border-light rounded-xl p-5 transition-all duration-300 hover:border-gold/15 hover:bg-gold-subtle group"><h3 className="text-sm font-medium text-cream group-hover:text-gold transition-colors mb-1">{lien.titre}</h3><p className="text-xs text-cream-muted/40">{lien.desc}</p></a></StaggerItem>)}</StaggerList></section></FadeIn>
    </div>
  );
}