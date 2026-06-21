"use client";

import { useState, type ElementType } from "react";
import { Send, User, Briefcase, Calendar, FileText, AlertCircle } from "lucide-react";
import { FadeIn, ScaleIn, HoverGlow } from "@/components/Animated";

/* Classes de champ partagées — bordure dorée au focus + halo subtil */
const fieldClass =
 "w-full bg-card border border-line rounded-2xl px-4 py-3 text-ink text-sm transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

const niveaux = [
 { value: "faible", label: "Faible", ring: "border-safe/20 text-safe" },
 { value: "modere", label: "Modéré", ring: "border-amber/20 text-amber" },
 { value: "eleve", label: "Élevé", ring: "border-alert/20 text-alert" },
];

export default function SignalementPage() {
 const [soumis, setSoumis] = useState(false);

 if (soumis)
 return (
 <section className="relative overflow-hidden">
 <div className="bs-sun-glow z-0" aria-hidden="true" />
 <div className="relative z-10 mx-auto max-w-xl px-4 py-20 text-center sm:px-6 md:py-28">
 <ScaleIn className="mx-auto mb-8">
 <HoverGlow className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-line bg-brand-soft">
 <Send className="h-10 w-10 text-brand" />
 </HoverGlow>
 </ScaleIn>
 <FadeIn delay={0.05}>
 <p className="bs-eyebrow">Confirmation</p>
 <h1 className="bs-display-section text-ink">Formulaire reçu</h1>
 <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
 Votre signalement a bien été enregistré. Il sera traité dans les meilleurs délais.
 </p>
 <button onClick={() => setSoumis(false)} className="bs-btn bs-btn-ghost mt-8">
 Nouveau signalement
 </button>
 </FadeIn>
 </div>
 </section>
 );

 return (
   <>
   <section className="relative overflow-hidden bg-card-tint border-b border-line">
     <div className="bs-sun-texture absolute inset-0 opacity-50" aria-hidden="true" />
     <div className="relative mx-auto max-w-xl px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16">
       <FadeIn>
         <p className="bs-eyebrow">Signalement interne</p>
         <h1 className="bs-display-section text-ink mt-4">Formulaire de signalement</h1>
         <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">Signalez une douleur ou un risque TMS. Traitement confidentiel.</p>
       </FadeIn>
     </div>
   </section>

   <section className="mx-auto max-w-xl px-4 py-14 sm:px-6 md:py-20">

 {/* Formulaire — carte teintée */}
 <FadeIn delay={0.08}>
 <HoverGlow className="bs-card-tint p-6 sm:p-8">
 <form onSubmit={(e) => { e.preventDefault(); setSoumis(true); }} className="space-y-5">
 <InputField id="prenom" label="Prénom" icon={User} placeholder="Votre prénom" required />
 <InputField id="nom" label="Nom" icon={User} placeholder="Votre nom" required />

 <div>
 <label htmlFor="poste" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink-soft">
 <Briefcase className="h-3.5 w-3.5 text-ink-muted" />
 Poste occupé
 </label>
 <select id="poste" required className={fieldClass}>
 <option value="">Sélectionnez votre poste</option>
 <option value="estheticienne">Esthéticienne (Soin et Onglerie)</option>
 <option value="hotesse">Hôtesse de Caisse et Accueil</option>
 <option value="autre">Autre</option>
 </select>
 </div>

 <div>
 <label htmlFor="date" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink-soft">
 <Calendar className="h-3.5 w-3.5 text-ink-muted" />
 Date
 </label>
 <input id="date" type="date" required className={fieldClass} />
 </div>

 <div>
 <label htmlFor="description" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink-soft">
 <FileText className="h-3.5 w-3.5 text-ink-muted" />
 Description
 </label>
 <textarea id="description" required rows={4} className={`${fieldClass} resize-none`} placeholder="Décrivez la douleur ou le risque constaté…" />
 </div>

 <div>
 <label className="mb-3 flex items-center gap-2 text-sm font-medium text-ink-soft">
 <AlertCircle className="h-3.5 w-3.5 text-ink-muted" />
 Niveau d&apos;urgence
 </label>
 <div className="grid grid-cols-3 gap-3">
 {niveaux.map((n) => (
 <label
 key={n.value}
 className={`flex cursor-pointer flex-col items-center gap-1.5 rounded-2xl border bg-card p-3 transition-all ${n.ring} has-[:checked]:border-current has-[:checked]:bg-brand-mist has-[:checked]:shadow-[0_0_24px_-4px_rgba(184,134,11,0.35)]`}
 >
 <input type="radio" name="urgence" value={n.value} required className="sr-only" />
 <span className="text-xs font-medium">{n.label}</span>
 </label>
 ))}
 </div>
 </div>

 <button type="submit" className="bs-btn bs-btn-primary mt-2 w-full justify-center">
 <Send className="h-4 w-4" />
 Envoyer le signalement
 </button>

 <p className="mt-4 text-center text-xs text-ink-muted">Destinataire : [À COMPLÉTER]</p>
 </form>
      </HoverGlow>
      </FadeIn>
    </section>
    </>
  );
}

function InputField({
 id,
 label,
 icon: Icon,
 placeholder,
 required,
}: {
 id: string;
 label: string;
 icon: ElementType;
 placeholder: string;
 required?: boolean;
}) {
 return (
 <div>
 <label htmlFor={id} className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink-soft">
 <Icon className="h-3.5 w-3.5 text-ink-muted" />
 {label}
 </label>
 <input id={id} type="text" required={required} className={fieldClass} placeholder={placeholder} />
 </div>
 );
}
