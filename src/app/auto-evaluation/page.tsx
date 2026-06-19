"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, RotateCcw, Info } from "lucide-react";

const questions = [
  "Ressentez-vous des douleurs dans les poignets ou les mains en fin de journée ?",
  "Avez-vous des fourmillements ou engourdissements dans les doigts ?",
  "Ressentez-vous des tensions ou douleurs dans la nuque ou les cervicales ?",
  "Avez-vous des douleurs dans le bas du dos après une journée de travail ?",
  "Ressentez-vous une fatigue ou lourdeur dans les jambes en fin de journée ?",
  "Avez-vous des douleurs aux épaules pendant ou après vos soins ?",
  "Devez-vous vous pencher excessivement pour réaliser vos tâches ?",
  "Travaillez-vous avec les bras en élévation prolongée ?",
  "Maintenez-vous une flexion du cou prononcée pendant plus de 10 minutes ?",
  "Utilisez-vous des outils qui nécessitent une force excessive des doigts ?",
  "Ressentez-vous des raideurs articulaires au réveil ?",
  "Avez-vous des difficultés à saisir de petits objets (pinceaux, limes) ?",
  "Ressentez-vous une gêne en effectuant des mouvements répétitifs ?",
  "Devez-vous porter des charges lourdes sans aide (cartons, produits) ?",
  "Votre poste de travail est-il mal éclairé, vous obligeant à forcer la vue ?",
  "Restez-vous dans la même posture (assis ou debout) plus de 2 heures d'affilée ?",
  "Ressentez-vous des tensions musculaires liées au stress ou au rythme de travail ?",
  "Avez-vous déjà ressenti une perte de force dans les mains ?",
  "Négligez-vous de prendre des micro-pauses pendant votre journée ?",
  "Avez-vous déjà consulté un médecin pour des douleurs liées à votre activité ?",
];

export default function AutoEvaluationPage() {
  const [reponses, setReponses] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [soumis, setSoumis] = useState(false);
  const repondues = reponses.filter((r) => r !== null).length;
  const oui = reponses.filter((r) => r === true).length;

  if (soumis) {
    return (
      <div className="mx-auto max-w-xl px-4 py-28 text-center">
        <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mx-auto mb-8"><Info className="h-10 w-10 text-gold" /></div>
        <h1 className="font-display text-3xl font-bold text-cream mb-3">Votre résultat</h1>
        <p className="text-cream-muted/60 mb-8">Auto-évaluation TMS</p>
        <div className="text-7xl font-display font-extrabold text-gold mb-2">{oui}<span className="text-2xl text-cream-muted/30">/{questions.length}</span></div>
        <p className="text-cream-muted/60 text-sm max-w-sm mx-auto mt-4">{oui===0?"Aucun signal détecté. Continuez à appliquer les bonnes pratiques !":oui<=3?"Quelques signaux faibles. Restez vigilant et appliquez les protocoles.":oui<=7?"Plusieurs signaux détectés. Consultez les fiches de poste et adoptez les gestes recommandés.":"De nombreux signaux. Parlez-en à votre responsable et consultez un professionnel de santé."}</p>
        <div className="mt-8 p-5 bg-warm/5 border border-warm/10 rounded-xl text-left max-w-md mx-auto"><p className="text-sm text-cream-muted/60"><strong className="text-warm">Rappel :</strong> ce test ne remplace pas un avis médical.</p></div>
        <Button variant="outline" className="mt-8" onClick={()=>{setReponses(Array(questions.length).fill(null));setSoumis(false)}}><RotateCcw className="h-4 w-4" /> Recommencer</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 lg:py-28">
      <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-3">Test personnel</p>
      <h1 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4">Auto-évaluation TMS</h1>
      <p className="text-cream-muted/60 text-lg mb-8">20 questions pour évaluer votre exposition. Répondez honnêtement : ce test est anonyme.</p>
      <div className="mb-4 flex items-center gap-2"><div className="flex-1 h-1.5 rounded-full bg-black-border-light overflow-hidden"><div className="h-full bg-gold rounded-full transition-all duration-500" style={{width:`${(repondues/questions.length)*100}%`}} /></div><span className="text-xs text-cream-muted/40 shrink-0">{repondues}/{questions.length}</span></div>
      <form onSubmit={(e)=>{e.preventDefault();setSoumis(true)}}>
        <div className="space-y-4">{questions.map((q,i)=>(<div key={i} className="bg-black-card border border-black-border-light rounded-xl p-5"><p className="text-cream/90 text-sm mb-3"><span className="text-gold/60 font-display font-bold mr-2 text-xs">{i+1}.</span>{q}</p><div className="flex gap-3">{[{value:true,label:"Oui",active:"bg-warm text-white border-warm",inactive:"border-black-border-light text-cream-muted/40 hover:border-warm/30"},{value:false,label:"Non",active:"bg-gold/70 text-black-sun border-gold",inactive:"border-black-border-light text-cream-muted/40 hover:border-gold/30"}].map((opt)=><button key={String(opt.value)} type="button" className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all ${reponses[i]===opt.value?opt.active:opt.inactive}`} onClick={()=>{const r=[...reponses];r[i]=opt.value;setReponses(r)}}>{opt.label}</button>)}</div></div>))}</div>
        <div className="mt-10 text-center"><Button type="submit" disabled={repondues<questions.length} size="lg" className="px-10">Voir mon résultat <ChevronRight className="h-4 w-4" /></Button></div>
      </form>
    </div>
  );
}