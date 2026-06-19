import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fiches de poste — Black Sun Villetaneuse",
  description: "Fiches de poste détaillées : esthéticienne (onglerie et soin) et hôtesse de caisse / accueil. Risques, gestes recommandés et équipements.",
};

const fiches = [
  {
    titre: "Esthéticienne — Soin et Onglerie",
    image: "/images/photo_poste.jpg",
    risques: ["Douleurs cervicales et tensions aux épaules","Syndrome du canal carpien (gestes répétitifs)","Lombalgies (posture assise prolongée)","Tendinites des poignets"],
    gestes: ["Régler la hauteur du fauteuil","Garder le dos droit","Maintenir les coudes près du corps","Alterner l'appui sur les pieds","Organiser le plan de travail"],
    equipements: ["Siège ergonomique réglable","Outils ergonomiques","Éclairage optimal","Repose-pieds"],
    alertes: ["Douleur aux poignets","Fourmillements","Difficulté à saisir","Raideur au réveil"],
  },
  {
    titre: "Hôtesse de Caisse et Accueil",
    image: "/images/photo_poste.jpg",
    risques: ["Fatigue veineuse","Tensions lombaires","Douleurs des poignets","Tensions cervicales"],
    gestes: ["Ajuster l'écran à hauteur des yeux","Utiliser un repose-pied","Alterner assis-debout","Manches télescopiques pour nettoyage"],
    equipements: ["Siège ergonomique","Écran ajusté","Repose-pieds","Manches télescopiques"],
    alertes: ["Lourdeur dans les jambes","Douleurs bas du dos","Fourmillements","Raideur nuque"],
  },
];

export default function FichesPostePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-gold mb-2">Fiches de poste</h1>
      <p className="text-cream-muted/70 mb-12">Risques, gestes recommandés, équipements et signaux d&apos;alerte par poste</p>
      <div className="space-y-12">
        {fiches.map((fiche, i) => (
          <section key={fiche.titre} className="bg-black-card border border-black-border rounded-2xl overflow-hidden">
            <div className="p-6 lg:p-8 border-b border-black-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold text-lg">{i + 1}</div>
                <h2 className="text-xl lg:text-2xl font-bold text-cream">{fiche.titre}</h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] bg-black-sun/50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-black-border">
                <Image src={fiche.image} alt={fiche.titre} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-6 lg:p-8 space-y-5">
                {[
                  { titre: "Risques identifiés", items: fiche.risques, color: "text-warm" },
                  { titre: "Gestes recommandés", items: fiche.gestes, color: "text-gold" },
                  { titre: "Équipements disponibles", items: fiche.equipements, color: "text-cream" },
                  { titre: "Signaux d'alerte", items: fiche.alertes, color: "text-warm" },
                ].map((bloc) => (
                  <div key={bloc.titre}>
                    <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${bloc.color}`}>{bloc.titre}</h3>
                    <ul className="list-disc list-inside space-y-1 text-cream-muted/80 text-sm">
                      {bloc.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}