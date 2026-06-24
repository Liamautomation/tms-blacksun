/**
 * Annexes de prévention TMS — métadonnées + PDF canoniques (identiques sur tous les sites LYVIA).
 * Affichées en prévisualisation PDF native sur /ressources/[slug] (pas de reconstruction HTML).
 * Les PDF sont dans public/documents/.
 */

export interface Annexe {
  slug: string;
  code: string;
  titre: string;
  sousTitre: string;
  intro: string;
  fichier: string;
}

export const annexes: Annexe[] = [
  {
    slug: "annexe-a",
    code: "A",
    titre: "Fiche de repérage des situations à risques TMS",
    sousTitre: "Annexe A",
    intro:
      "À remplir sur le terrain pour consigner les gestes à risque, le ressenti corporel et les remarques du salarié.",
    fichier: "/documents/annexe-a-fiche-reperage-situations-risques-tms.pdf",
  },
  {
    slug: "annexe-b",
    code: "B",
    titre: "Fiche action prévention TMS",
    sousTitre: "Annexe B",
    intro:
      "À compléter pour décrire l'action de prévention engagée, son objectif et les points à suivre.",
    fichier: "/documents/annexe-b-fiche-action-prevention-tms.pdf",
  },
  {
    slug: "annexe-c",
    code: "C",
    titre: "Plan d'action TMS",
    sousTitre: "Annexe C",
    intro:
      "Le plan d'action : risques identifiés, mesures correctives, responsables et suivi dans le temps.",
    fichier: "/documents/annexe-c-plan-action-tms.pdf",
  },
];

export function getAnnexe(slug: string): Annexe | undefined {
  return annexes.find((a) => a.slug === slug);
}
