"use client";

import { Shield, CheckCircle, Wrench, AlertTriangle } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { FadeIn } from "@/components/Animated";

const fiches = [
  { titre: "Esthéticienne — Soin et Onglerie", risques: ["Douleurs cervicales et tensions aux épaules","Syndrome du canal carpien","Lombalgies","Tendinites des poignets"], gestes: ["Régler la hauteur du fauteuil","Garder le dos droit","Maintenir les coudes près du corps","Alterner l'appui","Organiser le plan de travail"], equipements: ["Siège ergonomique réglable","Outils ergonomiques","Éclairage optimal","Repose-pieds"], alertes: ["Douleur aux poignets","Fourmillements","Difficulté à saisir","Raideur au réveil"] },
  { titre: "Hôtesse de Caisse et Accueil", risques: ["Fatigue veineuse","Tensions lombaires","Douleurs des poignets","Tensions cervicales"], gestes: ["Écran à hauteur des yeux","Repose-pied","Alternance assis-debout","Manches télescopiques","Pivoter avec les pieds"], equipements: ["Siège ergonomique","Écran ajusté","Repose-pieds","Manches télescopiques"], alertes: ["Lourdeur jambes","Douleurs bas du dos","Fourmillements","Raideur nuque"] },
];

const blocs = [
  { key: "risques" as const, icon: AlertTriangle, label: "Risques identifiés", color: "text-warm", bg: "bg-warm/5", border: "border-warm/10" },
  { key: "gestes" as const, icon: CheckCircle, label: "Gestes recommandés", color: "text-gold", bg: "bg-gold/5", border: "border-gold/10" },
  { key: "equipements" as const, icon: Wrench, label: "Équipements", color: "text-cream", bg: "bg-cream-soft", border: "border-cream-muted/5" },
  { key: "alertes" as const, icon: Shield, label: "Signaux d'alerte", color: "text-warm", bg: "bg-warm/5", border: "border-warm/10" },
];

export default function FichesPostePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 lg:py-28">
      <FadeIn><p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-3">Par poste de travail</p><h1 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4">Fiches de poste</h1><p className="text-cream-muted/60 text-lg mb-16">Risques, gestes recommandés, équipements et signaux d&apos;alerte</p></FadeIn>
      <div className="space-y-20">{fiches.map((fiche,i)=><FadeIn key={fiche.titre} delay={0.1*i}><section><div className="flex items-center gap-4 mb-8"><div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold font-display font-bold text-xl">{i+1}</div><h2 className="font-display text-2xl lg:text-3xl font-bold text-cream">{fiche.titre}</h2></div><div className="grid lg:grid-cols-2 gap-6"><PlaceholderImage label="Photo du poste" aspect="video" className="lg:sticky lg:top-24" /><div className="space-y-4">{blocs.map((bloc)=><div key={bloc.key} className={`${bloc.bg} ${bloc.border} border rounded-xl p-5`}><div className="flex items-center gap-2 mb-3"><bloc.icon className={`h-4 w-4 ${bloc.color}`} /><h3 className={`text-xs font-semibold uppercase tracking-wider ${bloc.color}`}>{bloc.label}</h3></div><ul className="space-y-1.5">{fiche[bloc.key].map((item)=><li key={item} className="flex items-start gap-2 text-sm text-cream-muted/65"><span className={`${bloc.color} mt-0.5 shrink-0`}>·</span>{item}</li>)}</ul></div>)}</div></div></section></FadeIn>)}</div>
    </div>
  );
}