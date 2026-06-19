import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonnes pratiques — Black Sun Villetaneuse",
  description: "Protocoles de prévention TMS : posture, accueil, manutention, nettoyage, échauffement et micro-pauses.",
};

const protocoles = [
  {
    numero: 1, titre: "Posture de l'Esthéticienne",
    objectif: "Prévenir les douleurs cervicales, tensions aux épaules et syndrome du canal carpien.",
    avant: ["Régler la hauteur du fauteuil","Éclairage optimal","Organiser le plan de travail"],
    pendant: ["Garder le dos droit","Coudes près du corps","Alterner l'appui","Outils ergonomiques"],
    interdictions: ["Bras en élévation prolongée","Flexion du cou >10min","Force excessive poignets"],
  },
  {
    numero: 2, titre: "Hôtesse de Caisse et Accueil",
    objectif: "Prévenir fatigue veineuse, tensions lombaires et douleurs des poignets.",
    mesures: ["Écran à hauteur des yeux","Repose-pied si nécessaire","Alternance assis-debout","Manches télescopiques"],
    etirements: ["Poignets (extensions douces)","Ouverture poitrine","Mollets (retour veineux)"],
  },
  {
    numero: 3, titre: "Réapprovisionnement et Manutention",
    objectif: "Prévenir lombalgies et tensions musculaires.",
    mesures: ["Escabeau stable","Fléchir les genoux","Fractionner les charges","Dégager les passages"],
    alertes: ["Douleurs bas du dos","Fourmillements mains","Lourdeur jambes"],
  },
  {
    numero: 4, titre: "Nettoyage des Cabines de Bronzage",
    objectif: "Prévenir TMS liés aux gestes répétitifs et torsions.",
    mesures: ["Pulvérisateurs ergonomiques","Changer de main","Éviter torsions du dos","Micro-pause 30s entre cabines"],
  },
  {
    numero: 5, titre: "Routine d'Échauffement — Spécial Esthétique",
    objectif: "Préparer le corps avant la prise de poste. Durée : 5 minutes.",
    exercices: ["Rotations poignets","Enroulements épaules","Inclinaisons nuque","Étirement dos vers le haut"],
  },
  {
    numero: 6, titre: "Micro-pauses et Récupération",
    objectif: "Rythmer la journée pour éviter l'accumulation de fatigue.",
    toutesLes2Heures: ["S'hydrater","Marcher quelques minutes","Respiration profonde"],
    zonesASurveiller: ["Poignets","Cervicales","Bas du dos"],
  },
];

export default function BonnesPratiquesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-gold mb-2">Bonnes pratiques</h1>
      <p className="text-cream-muted/70 mb-12">Protocoles de prévention à appliquer au quotidien</p>
      <div className="mb-12 bg-black-card border border-black-border rounded-2xl overflow-hidden">
        <div className="aspect-video bg-black-sun/80 flex items-center justify-center">
          <div className="text-center"><div className="text-4xl mb-3">🎥</div><p className="text-cream-muted/60">Vidéo de prévention TMS</p><p className="text-cream-muted/40 text-sm mt-1">[À COMPLÉTER]</p></div>
        </div>
      </div>
      <div className="space-y-8">
        {protocoles.map((proto) => (
          <section key={proto.numero} className="bg-black-card border border-black-border rounded-xl overflow-hidden">
            <div className="p-5 lg:p-6 border-b border-black-border bg-black-sun/30">
              <span className="text-xs font-bold text-gold uppercase tracking-widest">Protocole {proto.numero}</span>
              <h2 className="text-lg lg:text-xl font-bold text-cream mt-1">{proto.titre}</h2>
              <p className="text-cream-muted/70 text-sm mt-1">🎯 {proto.objectif}</p>
            </div>
            <div className="p-5 lg:p-6 space-y-4">
              {"avant" in proto && <BlocListe titre="Avant le soin" items={proto.avant!} icon="✓" color="text-gold" />}
              {"pendant" in proto && <BlocListe titre="Pendant le soin" items={proto.pendant!} icon="✓" color="text-gold" />}
              {"interdictions" in proto && <BlocListe titre="Interdictions" items={proto.interdictions!} icon="✕" color="text-warm" encadre />}
              {"mesures" in proto && <BlocListe titre="Mesures préventives" items={proto.mesures!} icon="✓" color="text-gold" />}
              {"etirements" in proto && <BlocListe titre="Étirements recommandés" items={proto.etirements!} icon="↗" color="text-gold" />}
              {"alertes" in proto && <BlocListe titre="Signaler immédiatement" items={proto.alertes!} icon="!" color="text-warm" encadre />}
              {"exercices" in proto && <BlocListe titre="Exercices" items={proto.exercices!} icon="●" color="text-gold" />}
              {"toutesLes2Heures" in proto && (
                <div>
                  <h3 className="text-sm font-semibold text-gold uppercase tracking-wide mb-2">Toutes les 2 heures</h3>
                  <ul className="space-y-1.5">
                    {proto.toutesLes2Heures!.map((t) => <li key={t} className="flex gap-2 text-sm text-cream-muted/80"><span className="text-gold shrink-0">⏱</span>{t}</li>)}
                  </ul>
                  {"zonesASurveiller" in proto && (
                    <div className="mt-3"><span className="text-xs text-warm uppercase tracking-wide">Zones prioritaires : </span><span className="text-sm text-cream-muted/80">{proto.zonesASurveiller!.join(" • ")}</span></div>
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function BlocListe({ titre, items, icon, color, encadre }: { titre: string; items: string[]; icon: string; color: string; encadre?: boolean }) {
  const content = (
    <div>
      <h3 className={`text-sm font-semibold uppercase tracking-wide mb-2 ${color}`}>{titre}</h3>
      <ul className="space-y-1.5">
        {items.map((item) => <li key={item} className="flex gap-2 text-sm text-cream-muted/80"><span className={`${color} shrink-0`}>{icon}</span>{item}</li>)}
      </ul>
    </div>
  );
  if (encadre) return <div className="p-4 bg-warm/5 border border-warm/10 rounded-lg">{content}</div>;
  return content;
}