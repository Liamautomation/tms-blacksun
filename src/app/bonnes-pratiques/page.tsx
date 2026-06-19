import { Metadata } from "next";
import { Check, X, AlertTriangle, Dumbbell, Timer, Play } from "lucide-react";

export const metadata: Metadata = { title: "Bonnes pratiques — Black Sun Villetaneuse", description: "Protocoles de prévention TMS : posture, accueil, manutention, nettoyage, échauffement et micro-pauses." };

const protocoles = [
  { numero:1, titre:"Posture de l'Esthéticienne", objectif:"Prévenir douleurs cervicales, tensions aux épaules et syndrome du canal carpien.", sections:[{type:"check" as const,label:"Avant le soin",items:["Régler la hauteur du fauteuil","Éclairage optimal","Organiser le plan de travail"]},{type:"check" as const,label:"Pendant le soin",items:["Garder le dos droit","Coudes près du corps","Alterner l'appui","Outils ergonomiques"]},{type:"forbidden" as const,label:"Interdictions",items:["Bras en élévation prolongée","Flexion du cou > 10 min","Force excessive poignets"]}]},
  { numero:2, titre:"Hôtesse de Caisse et Accueil", objectif:"Prévenir fatigue veineuse, tensions lombaires et douleurs des poignets.", sections:[{type:"check" as const,label:"Mesures préventives",items:["Écran à hauteur des yeux","Repose-pied si nécessaire","Alternance assis-debout","Manches télescopiques"]},{type:"stretch" as const,label:"Étirements recommandés",items:["Poignets (extensions douces)","Ouverture poitrine","Mollets (retour veineux)"]}]},
  { numero:3, titre:"Réapprovisionnement et Manutention", objectif:"Prévenir les lombalgies et tensions musculaires.", sections:[{type:"check" as const,label:"Mesures préventives",items:["Escabeau stable","Fléchir les genoux","Fractionner les charges","Dégager les passages"]},{type:"alert" as const,label:"Signaler immédiatement",items:["Douleurs bas du dos","Fourmillements mains","Lourdeur jambes"]}]},
  { numero:4, titre:"Nettoyage des Cabines de Bronzage", objectif:"Prévenir TMS liés aux gestes répétitifs et torsions.", sections:[{type:"check" as const,label:"Mesures préventives",items:["Pulvérisateurs ergonomiques","Changer de main","Éviter torsions du dos","Micro-pause 30s entre cabines"]}]},
  { numero:5, titre:"Routine d'Échauffement", objectif:"Préparer le corps avant la prise de poste. Durée : 5 min.", sections:[{type:"exercise" as const,label:"Exercices",items:["Rotations poignets","Enroulements épaules","Inclinaisons nuque","Étirement dos vers le haut"]}]},
  { numero:6, titre:"Micro-pauses et Récupération", objectif:"Rythmer la journée pour éviter la fatigue musculaire.", sections:[{type:"timer" as const,label:"Toutes les 2 heures",items:["S'hydrater","Marcher quelques minutes","Respiration profonde"],zones:["Poignets","Cervicales","Bas du dos"]}]},
];

const cfg = { check:{icon:Check,color:"text-gold",bg:""}, forbidden:{icon:X,color:"text-warm",bg:"bg-warm/5 border border-warm/10 rounded-xl p-4"}, alert:{icon:AlertTriangle,color:"text-warm",bg:"bg-warm/5 border border-warm/10 rounded-xl p-4"}, stretch:{icon:Dumbbell,color:"text-gold",bg:""}, exercise:{icon:Dumbbell,color:"text-gold",bg:""}, timer:{icon:Timer,color:"text-gold",bg:""} };

export default function BonnesPratiquesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 lg:py-28">
      <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-3">Protocoles</p>
      <h1 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4">Bonnes pratiques</h1>
      <p className="text-cream-muted/60 text-lg mb-16">Protocoles de prévention à appliquer au quotidien</p>
      <div className="mb-16 bg-black-card border border-black-border-light rounded-2xl overflow-hidden"><div className="aspect-video bg-gradient-to-br from-black-card to-black-sun flex items-center justify-center"><div className="text-center"><div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><Play className="h-7 w-7 text-gold/50" /></div><p className="text-cream-muted/40 text-sm">Vidéo de prévention TMS</p><p className="text-cream-muted/20 text-xs mt-1">[À COMPLÉTER]</p></div></div></div>
      <div className="space-y-10">
        {protocoles.map((proto) => (
          <section key={proto.numero} className="bg-black-card border border-black-border-light rounded-2xl overflow-hidden">
            <div className="p-6 lg:p-8 border-b border-black-border-light"><div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-display font-bold text-sm">{proto.numero}</div><div><h2 className="font-display text-lg font-semibold text-cream">{proto.titre}</h2><p className="text-cream-muted/50 text-sm mt-0.5">{proto.objectif}</p></div></div></div>
            <div className="p-6 lg:p-8 space-y-6">{proto.sections.map((sec,j)=>{const c=cfg[sec.type];const content=(<div><div className="flex items-center gap-2 mb-3"><c.icon className={`h-4 w-4 ${c.color}`} /><h3 className={`text-xs font-semibold uppercase tracking-wider ${c.color}`}>{sec.label}</h3></div><ul className="space-y-2">{sec.items.map((item)=><li key={item} className="flex items-start gap-2 text-sm text-cream-muted/65"><span className={`${c.color} mt-0.5 shrink-0`}>·</span>{item}</li>)}</ul>{"zones" in sec && sec.zones && <p className="mt-3 text-xs text-warm/70 uppercase tracking-wide">Zones prioritaires : <span className="text-cream-muted/50">{sec.zones.join(" • ")}</span></p>}</div>);return c.bg?<div key={j} className={c.bg}>{content}</div>:<div key={j}>{content}</div>;})}</div>
          </section>
        ))}
      </div>
    </div>
  );
}