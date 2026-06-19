import { Metadata } from "next";
import Image from "next/image";

const affiches = [
  { src: "/images/affiche1.png", alt: "Affiche de prévention TMS 1" },
  { src: "/images/affiche2.png", alt: "Affiche de prévention TMS 2" },
  { src: "/images/affiche3.png", alt: "Affiche de prévention TMS 3" },
  { src: "/images/affiche4.png", alt: "Affiche de prévention TMS 4" },
];

const liensExternes = [
  {
    titre: "INRS — Troubles Musculo-Squelettiques",
    url: "https://www.inrs.fr/risques/tms-troubles-musculosquelettiques",
    desc: "Dossier complet de l'Institut National de Recherche et de Sécurité sur les TMS.",
  },
  {
    titre: "Assurance Maladie — Risques professionnels",
    url: "https://www.ameli.fr/entreprise/sante-travail/risques/troubles-musculosquelettiques-tms",
    desc: "Information sur la prévention et la prise en charge des TMS.",
  },
  {
    titre: "Ministère du Travail — Santé et sécurité au travail",
    url: "https://travail-emploi.gouv.fr/sante-au-travail",
    desc: "Réglementation et bonnes pratiques en santé au travail.",
  },
  {
    titre: "ANACT — Agence Nationale pour l'Amélioration des Conditions de Travail",
    url: "https://www.anact.fr/themes/tms",
    desc: "Outils et méthodes pour prévenir les TMS en entreprise.",
  },
  {
    titre: "CARSAT — Prévention des TMS",
    url: "https://www.carsat.fr",
    desc: "Accompagnement et ressources par la Caisse d'Assurance Retraite et de la Santé au Travail.",
  },
];

export default function RessourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-gold mb-2">Ressources</h1>
      <p className="text-cream-muted/70 mb-12">Affiches, documents et liens utiles pour la prévention</p>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-cream mb-6">Affiches de prévention</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {affiches.map((affiche, i) => (
            <a key={i} href={affiche.src} download className="group bg-black-card border border-black-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors">
              <div className="relative aspect-[3/4] bg-black-sun/50">
                <Image src={affiche.src} alt={affiche.alt} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <div className="p-4 border-t border-black-border flex items-center justify-between">
                <span className="text-sm text-cream-muted/80">Affiche {i + 1}</span>
                <span className="text-xs text-gold">⬇ Télécharger</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-cream mb-6">Fiches gestes et postures</h2>
        <div className="bg-black-card border border-black-border rounded-xl p-8 text-center">
          <div className="text-4xl mb-3">📋</div>
          <p className="text-cream-muted/70 mb-2">Fiches détaillées des gestes et postures recommandés</p>
          <p className="text-cream-muted/40 text-sm">[À COMPLÉTER]</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-cream mb-6">Modes opératoires</h2>
        <div className="bg-black-card border border-black-border rounded-xl p-8 text-center">
          <div className="text-4xl mb-3">📘</div>
          <p className="text-cream-muted/70 mb-2">Modes opératoires détaillés par poste de travail</p>
          <p className="text-cream-muted/40 text-sm">[À COMPLÉTER]</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-cream mb-6">Liens externes utiles</h2>
        <div className="space-y-3">
          {liensExternes.map((lien) => (
            <a key={lien.url} href={lien.url} target="_blank" rel="noopener noreferrer" className="block bg-black-card border border-black-border rounded-xl p-5 hover:border-gold/20 transition-colors group">
              <h3 className="text-sm font-semibold text-cream group-hover:text-gold transition-colors mb-1">{lien.titre} ↗</h3>
              <p className="text-xs text-cream-muted/60">{lien.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Ressources — Black Sun Villetaneuse",
  description: "Affiches de prévention, fiches gestes et postures, modes opératoires et liens externes pour la prévention des TMS.",
};