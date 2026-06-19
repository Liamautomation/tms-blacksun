import { Metadata } from "next";
import { Download, ExternalLink, FileText, BookOpen, FolderOpen } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = { title: "Ressources — Black Sun Villetaneuse", description: "Affiches, documents et liens utiles pour la prévention des TMS." };

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
      <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-3">Bibliothèque</p>
      <h1 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4">Ressources</h1>
      <p className="text-cream-muted/60 text-lg mb-16">Affiches, documents et liens utiles pour la prévention</p>
      <section className="mb-20"><h2 className="font-display text-xl font-semibold text-cream mb-6 flex items-center gap-2"><FileText className="h-5 w-5 text-gold/60" />Affiches de prévention</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[1,2,3,4].map((n)=><div key={n} className="group bg-black-card border border-black-border-light rounded-xl overflow-hidden hover:border-gold/15 transition-all duration-300"><PlaceholderImage label={`Affiche ${n}`} aspect="portrait" className="rounded-none border-0" /><div className="p-4 border-t border-black-border-light flex items-center justify-between"><span className="text-sm text-cream-muted/50">Affiche {n}</span><Download className="h-3.5 w-3.5 text-gold/30 group-hover:text-gold/60 transition-colors" /></div></div>)}</div></section>
      <section className="mb-20 grid gap-5 sm:grid-cols-2"><div className="bg-black-card border border-black-border-light rounded-2xl p-8 text-center"><div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><BookOpen className="h-6 w-6 text-gold/50" /></div><h3 className="font-display font-semibold text-cream mb-2">Fiches gestes et postures</h3><p className="text-cream-muted/40 text-sm">[À COMPLÉTER]</p></div><div className="bg-black-card border border-black-border-light rounded-2xl p-8 text-center"><div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><FolderOpen className="h-6 w-6 text-gold/50" /></div><h3 className="font-display font-semibold text-cream mb-2">Modes opératoires</h3><p className="text-cream-muted/40 text-sm">[À COMPLÉTER]</p></div></section>
      <section><h2 className="font-display text-xl font-semibold text-cream mb-6 flex items-center gap-2"><ExternalLink className="h-5 w-5 text-gold/60" />Liens externes utiles</h2><div className="space-y-3">{liens.map((lien)=><a key={lien.url} href={lien.url} target="_blank" rel="noopener noreferrer" className="block bg-black-card border border-black-border-light rounded-xl p-5 hover:border-gold/15 hover:bg-gold-subtle transition-all duration-300 group"><h3 className="text-sm font-medium text-cream group-hover:text-gold transition-colors mb-1">{lien.titre}</h3><p className="text-xs text-cream-muted/40">{lien.desc}</p></a>)}</div></section>
    </div>
  );
}