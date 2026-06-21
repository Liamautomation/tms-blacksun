import { Check, X, AlertTriangle, Dumbbell, Timer, Play } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animated";

const protocoles = [
 { numero:1, titre:"Posture de l'Esthéticienne", objectif:"Prévenir douleurs cervicales, tensions aux épaules et syndrome du canal carpien.", sections:[{type:"check" as const,label:"Avant le soin",items:["Régler la hauteur du fauteuil","Éclairage optimal","Organiser le plan de travail"]},{type:"check" as const,label:"Pendant le soin",items:["Garder le dos droit","Coudes près du corps","Alterner l'appui","Outils ergonomiques"]},{type:"forbidden" as const,label:"Interdictions",items:["Bras en élévation prolongée","Flexion du cou > 10 min","Force excessive poignets"]}]},
 { numero:2, titre:"Hôtesse de Caisse et Accueil", objectif:"Prévenir fatigue veineuse, tensions lombaires et douleurs des poignets.", sections:[{type:"check" as const,label:"Mesures préventives",items:["Écran à hauteur des yeux","Repose-pied si nécessaire","Alternance assis-debout","Manches télescopiques"]},{type:"stretch" as const,label:"Étirements recommandés",items:["Poignets (extensions douces)","Ouverture poitrine","Mollets (retour veineux)"]}]},
 { numero:3, titre:"Réapprovisionnement et Manutention", objectif:"Prévenir les lombalgies et tensions musculaires.", sections:[{type:"check" as const,label:"Mesures préventives",items:["Escabeau stable","Fléchir les genoux","Fractionner les charges","Dégager les passages"]},{type:"alert" as const,label:"Signaler immédiatement",items:["Douleurs bas du dos","Fourmillements mains","Lourdeur jambes"]}]},
 { numero:4, titre:"Nettoyage des Cabines de Bronzage", objectif:"Prévenir TMS liés aux gestes répétitifs et torsions.", sections:[{type:"check" as const,label:"Mesures préventives",items:["Pulvérisateurs ergonomiques","Changer de main","Éviter torsions du dos","Micro-pause 30s entre cabines"]}]},
 { numero:5, titre:"Routine d'Échauffement", objectif:"Préparer le corps avant la prise de poste. Durée : 5 min.", sections:[{type:"exercise" as const,label:"Exercices",items:["Rotations poignets","Enroulements épaules","Inclinaisons nuque","Étirement dos vers le haut"]}]},
 { numero:6, titre:"Micro-pauses et Récupération", objectif:"Rythmer la journée pour éviter la fatigue musculaire.", sections:[{type:"timer" as const,label:"Toutes les 2 heures",items:["S'hydrater","Marcher quelques minutes","Respiration profonde"],zones:["Poignets","Cervicales","Bas du dos"]}]},
];

const cfg: Record<string, { icon: typeof Check; color: string; bg: string }> = {
 check: { icon: Check, color: "text-brand", bg: "" },
 forbidden: { icon: X, color: "text-warm", bg: "bg-warm/5 border border-warm/10 rounded-2xl p-4" },
 alert: { icon: AlertTriangle, color: "text-warm", bg: "bg-warm/5 border border-warm/10 rounded-2xl p-4" },
 stretch: { icon: Dumbbell, color: "text-brand", bg: "" },
 exercise: { icon: Dumbbell, color: "text-brand", bg: "" },
 timer: { icon: Timer, color: "text-brand", bg: "" },
};

export default function BonnesPratiquesPage() {
 return (
    <>
    <section className="relative overflow-hidden bg-card-tint border-b border-line">
    <div className="bs-sun-texture absolute inset-0 opacity-50" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16">
      <FadeIn>
        <p className="bs-eyebrow">Protocoles</p>
        <h1 className="bs-display-section text-ink mt-4">Bonnes pratiques</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">Six protocoles de prévention à appliquer au quotidien — des gestes simples qui changent tout.</p>
      </FadeIn>
    </div>
  </section>

  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">

 {/* ═══ VIDÉO PLACEHOLDER ═══ */}
 <FadeIn className="mb-14">
 <div className="bs-card overflow-hidden bs-arc">
 <div className="aspect-video bg-gradient-to-br from-card to-card-tint flex items-center justify-center relative">
 <div className="absolute inset-0 bs-sun-glow opacity-30" aria-hidden="true" />
 <div className="text-center relative z-10">
 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft mx-auto mb-4 border border-brand/10">
 <Play className="h-7 w-7 text-brand/50" />
 </div>
 <p className="text-ink-muted text-sm">Vidéo de prévention TMS</p>
 <p className="text-ink-muted/50 text-xs mt-1">[À COMPLÉTER]</p>
 </div>
 </div>
 </div>
 </FadeIn>

 {/* ═══ PROTOCOLES ═══ */}
 <StaggerContainer className="space-y-6">
 {protocoles.map((proto) => (
 <StaggerItem key={proto.numero}>
 <section className="bs-card overflow-hidden">
 {/* En-tête */}
 <div className="p-6 lg:p-8 border-b border-line bg-card-tint/50">
 <div className="flex items-center gap-4">
 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand font-display font-bold text-sm border border-brand/10">{proto.numero}</div>
 <div>
 <h2 className="font-display text-lg font-semibold text-ink">{proto.titre}</h2>
 <p className="text-ink-soft text-sm mt-0.5">{proto.objectif}</p>
 </div>
 </div>
 </div>
 {/* Sections internes */}
 <div className="p-6 lg:p-8 space-y-5">
 {proto.sections.map((sec, j) => {
 const c = cfg[sec.type];
 const content = (
 <div>
 <div className="flex items-center gap-2 mb-3">
 <c.icon className={`h-4 w-4 ${c.color}`} />
 <h3 className={`text-xs font-semibold uppercase tracking-wider ${c.color}`}>{sec.label}</h3>
 </div>
 <ul className="space-y-2">
 {sec.items.map((item) => (
 <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
 <span className={`${c.color} mt-0.5 shrink-0`}>·</span>
 {item}
 </li>
 ))}
 </ul>
 {"zones" in sec && sec.zones && (
 <p className="mt-3 text-xs text-warm uppercase tracking-wide">Zones prioritaires : <span className="text-ink-soft normal-case">{sec.zones.join(" • ")}</span></p>
 )}
 </div>
 );
 return c.bg ? <div key={j} className={c.bg}>{content}</div> : <div key={j}>{content}</div>;
 })}
 </div>
 </section>
 </StaggerItem>
 ))}
 </StaggerContainer>
 </div>
 
  </>
);
}