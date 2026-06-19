"use client";

import { useState } from "react";
import { Send, User, Briefcase, Calendar, FileText, AlertCircle } from "lucide-react";

export default function SignalementPage() {
  const [soumis, setSoumis] = useState(false);
  if (soumis) return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-soft mx-auto mb-8"><Send className="h-10 w-10 text-brand/50" /></div>
      <h1 className="font-display text-3xl font-bold text-ink mb-3">Formulaire reçu</h1>
      <p className="text-ink-soft text-sm max-w-sm mx-auto">Votre signalement a bien été enregistré. Il sera traité dans les meilleurs délais.</p>
      <button onClick={()=>setSoumis(false)} className="rl-btn rl-btn-ghost mt-8">Nouveau signalement</button>
    </div>
  );
  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-6 md:py-20">
      <p className="rl-eyebrow">Signalement interne</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink mb-2">Formulaire de signalement</h1>
      <p className="text-ink-soft text-sm mb-10">Signalez une douleur ou un risque TMS. Traitement confidentiel.</p>
      <form onSubmit={(e)=>{e.preventDefault();setSoumis(true)}} className="space-y-5">
        <InputField id="prenom" label="Prénom" icon={User} placeholder="Votre prénom" required />
        <InputField id="nom" label="Nom" icon={User} placeholder="Votre nom" required />
        <div><label htmlFor="poste" className="flex items-center gap-2 text-sm font-medium text-ink-soft mb-1.5"><Briefcase className="h-3.5 w-3.5 text-ink-muted" />Poste occupé</label><select id="poste" required className="w-full bg-paper border border-border rounded-2xl px-4 py-3 text-ink-soft text-sm focus:outline-none focus:border-brand/40 transition-colors"><option value="">Sélectionnez votre poste</option><option value="estheticienne">Esthéticienne (Soin et Onglerie)</option><option value="hotesse">Hôtesse de Caisse et Accueil</option><option value="autre">Autre</option></select></div>
        <div><label htmlFor="date" className="flex items-center gap-2 text-sm font-medium text-ink-soft mb-1.5"><Calendar className="h-3.5 w-3.5 text-ink-muted" />Date</label><input id="date" type="date" required className="w-full bg-paper border border-border rounded-2xl px-4 py-3 text-ink-soft text-sm focus:outline-none focus:border-brand/40 transition-colors" /></div>
        <div><label htmlFor="description" className="flex items-center gap-2 text-sm font-medium text-ink-soft mb-1.5"><FileText className="h-3.5 w-3.5 text-ink-muted" />Description</label><textarea id="description" required rows={4} className="w-full bg-paper border border-border rounded-2xl px-4 py-3 text-ink-soft text-sm focus:outline-none focus:border-brand/40 transition-colors resize-none" placeholder="Décrivez la douleur ou le risque constaté…" /></div>
        <div><label className="flex items-center gap-2 text-sm font-medium text-ink-soft mb-3"><AlertCircle className="h-3.5 w-3.5 text-ink-muted" />Niveau d&apos;urgence</label><div className="grid grid-cols-3 gap-3">{[{value:"faible",label:"Faible",border:"border-green-500/20 text-green-400/60"},{value:"modere",label:"Modéré",border:"border-amber-500/20 text-amber-400/60"},{value:"eleve",label:"Élevé",border:"border-red-500/20 text-red-400/60"}].map((n)=><label key={n.value} className={`flex flex-col items-center gap-1.5 p-3 bg-paper border rounded-2xl cursor-pointer transition-all ${n.border} has-[:checked]:border-current has-[:checked]:bg-brand-soft`}><input type="radio" name="urgence" value={n.value} required className="sr-only" /><span className="text-xs font-medium">{n.label}</span></label>)}</div></div>
        <button type="submit" className="rl-btn rl-btn-primary w-full mt-2 justify-center"><Send className="h-4 w-4" />Envoyer le signalement</button>
        <p className="text-ink-muted text-xs text-center mt-4">Destinataire : [À COMPLÉTER]</p>
      </form>
    </div>
  );
}

function InputField({ id, label, icon: Icon, placeholder, required }: { id: string; label: string; icon: React.ElementType; placeholder: string; required?: boolean }) {
  return <div><label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-ink-soft mb-1.5"><Icon className="h-3.5 w-3.5 text-ink-muted" />{label}</label><input id={id} type="text" required={required} className="w-full bg-paper border border-border rounded-2xl px-4 py-3 text-ink-soft text-sm focus:outline-none focus:border-brand/40 transition-colors" placeholder={placeholder} /></div>;
}