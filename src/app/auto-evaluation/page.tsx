"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  const [reponses, setReponses] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );
  const [soumis, setSoumis] = useState(false);

  const repondues = reponses.filter((r) => r !== null).length;
  const oui = reponses.filter((r) => r === true).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSoumis(true);
  };

  const handleReset = () => {
    setReponses(Array(questions.length).fill(null));
    setSoumis(false);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-gold mb-2">
        Auto-évaluation TMS
      </h1>
      <p className="text-cream-muted/70 mb-8">
        20 questions pour évaluer votre exposition aux risques TMS. Répondez
        honnêtement : ce test est anonyme et personnel.
      </p>

      {!soumis ? (
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {questions.map((q, i) => (
              <div
                key={i}
                className="bg-black-card border border-black-border rounded-xl p-5"
              >
                <p className="text-cream text-sm mb-3">
                  <span className="text-gold font-bold mr-2">{i + 1}.</span>
                  {q}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const r = [...reponses];
                      r[i] = true;
                      setReponses(r);
                    }}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                      reponses[i] === true
                        ? "bg-warm text-white border border-warm"
                        : "bg-black-sun/50 text-cream-muted/60 border border-black-border hover:border-warm/30"
                    }`}
                  >
                    Oui
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const r = [...reponses];
                      r[i] = false;
                      setReponses(r);
                    }}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                      reponses[i] === false
                        ? "bg-gold/80 text-black-sun border border-gold"
                        : "bg-black-sun/50 text-cream-muted/60 border border-black-border hover:border-gold/30"
                    }`}
                  >
                    Non
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-cream-muted/50 mb-4">
              {repondues}/{questions.length} questions répondues
            </p>
            <Button
              type="submit"
              disabled={repondues < questions.length}
              className="bg-gold hover:bg-gold-light text-black-sun font-semibold px-8 py-3 rounded-xl text-base"
            >
              Voir mon résultat
            </Button>
          </div>
        </form>
      ) : (
        <div className="bg-black-card border border-black-border rounded-2xl p-8 text-center space-y-6">
          <div className="text-5xl">📊</div>
          <h2 className="text-2xl font-bold text-cream">Votre résultat</h2>
          <div className="text-5xl font-bold text-gold">
            {oui}/{questions.length}
          </div>
          <p className="text-cream-muted/80">
            {oui === 0
              ? "Aucun signal détecté. Continuez à appliquer les bonnes pratiques !"
              : oui <= 3
              ? "Quelques signaux faibles. Restez vigilant et appliquez les protocoles de prévention."
              : oui <= 7
              ? "Plusieurs signaux détectés. Nous vous recommandons de consulter les fiches de poste et d'adopter les gestes recommandés."
              : "De nombreux signaux détectés. Il est important d'en parler à votre responsable et de consulter un professionnel de santé."}
          </p>
          <div className="p-4 bg-warm/5 border border-warm/10 rounded-lg text-left">
            <p className="text-sm text-cream-muted/80">
              <strong className="text-warm">Rappel :</strong> ce test est un outil
              d&apos;auto-évaluation. Il ne remplace pas un avis médical. En cas de
              douleur persistante, consultez votre médecin traitant ou le médecin du
              travail.
            </p>
          </div>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-black-border text-cream-muted hover:text-cream"
          >
            Recommencer le test
          </Button>
        </div>
      )}
    </div>
  );
}