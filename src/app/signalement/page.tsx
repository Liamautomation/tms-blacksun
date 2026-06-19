"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, User, Briefcase, Calendar, FileText, AlertCircle } from "lucide-react";

export default function SignalementPage() {
  const [soumis, setSoumis] = useState(false);
  if (soumis) return (
    <div className="mx-auto max-w-xl px-4 py-28 text-center">
      <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mx-auto mb-8"><Send className="h-10 w-10 text-gold/50" /></div>
      <h1 className="font-display text-3xl font-bold text-cream mb-3">Formulaire reçu</h1>
      <p className="text-cream-muted/50 text-sm max-w-sm mx-auto">Votre signalement a bien été enregistré. Il sera traité dans les meilleurs délais.</p>
      <Button variant="outline" className="mt-8" onClick={()=>setSoumis(false)}>Nouveau signalement</Button>
    </div>
  );
  return (
    <div className="mx-auto max-w-xl px-4 py-20 lg:py-28">
      <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-3">Signalement interne</p>
      <h1 className="font-display text-4xl font-bold text-cream mb-4">Formulaire de signalement</h1>
      <p className="text-cream-muted/50 text-sm mb-10">Signalez une douleur ou un risque TMS. Traitement confidentiel.</p>
      <form onSubmit={(e)=>{e.preventDefault();setSoumis(true)}} className="space-y-5">
        <InputField id="prenom" label="Prénom" icon={User} placeholder="Votre prénom" required />
        <InputField id="nom" label="Nom" icon={User} placeholder="Votre nom" required />
        <div><label htmlFor="poste" className="flex items-center gap-2 text-sm font-medium text-cream-muted mb-1.5"><Briefcase className="h-3.5 w-3.5 text-cream-muted/40" />Poste occupé</label><select id="poste" required className="w-full bg-black-sun border border-black-border-light rounded-xl px-4 py-3 text-cream-muted text-sm focus:outline-none focus:border-gold/40 transition-colors"><option value="">Sélectionnez votre poste</option><option value="estheticienne">Esthéticienne (Soin et Onglerie)</option><option value="hotesse">Hôtesse de Caisse et Accueil</option><option value="autre">Autre</option></select></div>
        <div><label htmlFor="date" className="flex items-center gap-2 text-sm font-medium text-cream-muted mb-1.5"><Calendar className="h-3.5 w-3.5 text-cream-muted/40" />Date</label><input id="date" type="date" required className="w-full bg-black-sun border border-black-border-light rounded-xl px-4 py-3 text-cream-muted text-sm focus:outline-none focus:border-gold/40 transition-colors" /></div>
        <div><label htmlFor="description" className="flex items-center gap-2 text-sm font-medium text-cream-muted mb-1.5"><FileText className="h-3.5 w-3.5 text-cream-muted/40" />Description</label><textarea id="description" required rows={4} className="w-full bg-black-sun border border-black-border-light rounded-xl px-4 py-3 text-cream-muted text-sm focus:outline-none focus:border-gold/40 transition-colors resize-none" placeholder="Décrivez la douleur ou le risque constaté…" /></div>
        <div><label className="flex items-center gap-2 text-sm font-medium text-cream-muted mb-3"><AlertCircle className="h-3.5 w-3.5 text-cream-muted/40" />Niveau d&apos;urgence</label><div className="grid grid-cols-3 gap-3">{[{value:"faible",label:"Faible",color:"border-green-500/20 text-green-400/60",active:"border-green-500! bg-green-500/5! text-green-400!"},{value:"modere",label:"Modéré",color:"border-amber-500/20 text-amber-400/60",active:"border-amber-500! bg-amber-500/5! text-amber-400!"},{value:"eleve",label:"Élevé",color:"border-red-500/20 text-red-400/60",active:"border-red-500! bg-red-500/5! text-red-400!"}].map((niveau)=><label key={niveau.value} className={`flex flex-col items-center gap-1.5 p-3 bg-black-sun border rounded-xl cursor-pointer transition-all ${niveau.color} has-[:checked]:${niveau.active}`}><input type="radio" name="urgence" value={niveau.value} required className="sr-only" /><span className={`text-xs font-medium`}>{niveau.label}</span></label>)}</div></div>
        <Button type="submit" size="lg" className="w-full mt-2"><Send className="h-4 w-4" />Envoyer le signalement</Button>
        <p className="text-cream-muted/20 text-xs text-center mt-4">Destinataire : [À COMPLÉTER]</p>
      </form>
    </div>
  );
}

function InputField({ id, label, icon: Icon, placeholder, required }: { id: string; label: string; icon: React.ElementType; placeholder: string; required?: boolean }) {
  return <div><label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-cream-muted mb-1.5"><Icon className="h-3.5 w-3.5 text-cream-muted/40" />{label}</label><input id={id} type="text" required={required} className="w-full bg-black-sun border border-black-border-light rounded-xl px-4 py-3 text-cream-muted text-sm focus:outline-none focus:border-gold/40 transition-colors" placeholder={placeholder} /></div>;
}