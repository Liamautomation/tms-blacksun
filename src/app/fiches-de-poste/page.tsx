import { Shield, CheckCircle, Wrench, AlertTriangle } from "lucide-react";
import Image from "next/image";

const fiches = [
  { titre: "Esthéticienne — Soin et Onglerie", risques: ["Douleurs cervicales et tensions aux épaules","Syndrome du canal carpien","Lombalgies","Tendinites des poignets"], gestes: ["Régler la hauteur du fauteuil","Garder le dos droit","Maintenir les coudes près du corps","Alterner l'appui","Organiser le plan de travail"], equipements: ["Siège ergonomique réglable","Outils ergonomiques","Éclairage optimal","Repose-pieds"], alertes: ["Douleur aux poignets","Fourmillements","Difficulté à saisir","Raideur au réveil"] },
  { titre: "Hôtesse de Caisse et Accueil", risques: ["Fatigue veineuse","Tensions lombaires","Douleurs des poignets","Tensions cervicales"], gestes: ["Écran à hauteur des yeux","Repose-pied si nécessaire","Alternance assis-debout","Manches télescopiques","Pivoter avec les pieds"], equipements: ["Siège ergonomique","Écran ajusté","Repose-pieds","Manches télescopiques"], alertes: ["Lourdeur jambes","Douleurs bas du dos","Fourmillements","Raideur nuque"] },
];

const blocs = [
  { key: "risques" as const, icon: AlertTriangle, label: "Risques identifiés", color: "text-warm", bg: "bg-warm/5", border: "border-warm/10" },
  { key: "gestes" as const, icon: CheckCircle, label: "Gestes recommandés", color: "text-brand", bg: "bg-brand-soft", border: "border-brand/10" },
  { key: "equipements" as const, icon: Wrench, label: "Équipements", color: "text-ink", bg: "bg-ink-muted/10", border: "border-border-light" },
  { key: "alertes" as const, icon: Shield, label: "Signaux d'alerte", color: "text-warm", bg: "bg-warm/5", border: "border-warm/10" },
];

export default function FichesPostePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
      <div className="max-w-3xl mb-14"><p className="rl-eyebrow">Par poste de travail</p><h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">Fiches de poste</h1><p className="mt-4 text-lg text-ink-soft">Risques, gestes recommandés, équipements et signaux d&apos;alerte</p></div>
      <div className="space-y-14">{fiches.map((fiche,i)=><section key={fiche.titre}><div className="flex items-center gap-4 mb-8"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand font-display font-bold text-xl">{i+1}</div><h2 className="font-display text-2xl font-bold text-ink md:text-3xl">{fiche.titre}</h2></div><div className="grid lg:grid-cols-2 gap-6"><div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card-tint border border-border flex items-center justify-center"><Image src="/images/photo_poste.jpg" alt={fiche.titre} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div><div className="space-y-3">{blocs.map((bloc)=><div key={bloc.key} className={`${bloc.bg} ${bloc.border} border rounded-2xl p-5`}><div className="flex items-center gap-2 mb-2.5"><bloc.icon className={`h-4 w-4 ${bloc.color}`} /><h3 className={`text-xs font-semibold uppercase tracking-wider ${bloc.color}`}>{bloc.label}</h3></div><ul className="space-y-1.5">{fiche[bloc.key].map((item)=><li key={item} className="flex items-start gap-2 text-sm text-ink-soft"><span className={`${bloc.color} mt-0.5 shrink-0`}>·</span>{item}</li>)}</ul></div>)}</div></div></section>)}</div>
    </div>
  );
}