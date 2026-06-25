"use client";

import { useState } from "react";
import { ChevronRight, RotateCcw, Info } from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/Animated";

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
  const [reponses, setReponses] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [soumis, setSoumis] = useState(false);
  const repondues = reponses.filter((r) => r !== null).length;
  const oui = reponses.filter((r) => r === true).length;

  if (soumis) return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <ScaleIn>
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-soft mx-auto mb-8 border border-brand/10">
          <Info className="h-10 w-10 text-brand" />
        </div>
        <h1 className="font-display text-3xl font-bold text-ink mb-3">Votre résultat</h1>
        <div className="text-7xl font-display font-extrabold text-brand mb-2">
          {oui}<span className="text-2xl text-ink-muted">/{questions.length}</span>
        </div>
        <p className="text-ink-soft text-sm max-w-sm mx-auto mt-4">
          {oui === 0 ? "Aucun signal. Continuez à appliquer les bonnes pratiques !" : oui <= 3 ? "Quelques signaux faibles. Restez vigilante." : oui <= 7 ? "Plusieurs signaux. Consultez les fiches de poste." : "De nombreux signaux. Parlez-en à votre responsable."}
        </p>
        <div className="mt-8 p-5 bg-brand-soft border border-brand/10 rounded-2xl text-left max-w-md mx-auto">
          <p className="text-sm text-ink-soft"><strong className="text-brand font-semibold">Rappel :</strong> ce test ne remplace pas un avis médical.</p>
        </div>
        <button onClick={() => { setReponses(Array(questions.length).fill(null)); setSoumis(false); }} className="bs-btn bs-btn-ghost mt-8">
          <RotateCcw className="h-4 w-4" /> Recommencer
        </button>
      </ScaleIn>
    </div>
  );

  return (
    <>
    <section className="relative overflow-hidden bg-card-tint border-b border-line">
      <div className="bs-sun-texture absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16">
        <FadeIn>
          <p className="bs-eyebrow">Test personnel</p>
          <h1 className="bs-display-section text-ink mt-4">Auto-évaluation TMS</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">20 questions pour évaluer votre exposition. Répondez honnêtement : ce test est anonyme.</p>
        </FadeIn>
      </div>
    </section>

    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 md:py-20">

      {/* Progress bar */}
      <FadeIn delay={0.1} className="mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full transition-all duration-500" style={{ width: `${(repondues / questions.length) * 100}%` }} />
          </div>
          <span className="text-xs text-ink-muted shrink-0 font-display">{repondues}/{questions.length}</span>
        </div>
      </FadeIn>

      <form onSubmit={(e) => { e.preventDefault(); setSoumis(true); }}>
        <StaggerContainer className="space-y-4">
          {questions.map((q, i) => (
            <StaggerItem key={i}>
              <div className="bs-card p-5">
                <p className="text-ink text-sm mb-3">
                  <span className="text-brand font-display font-bold mr-2 text-xs">{i + 1}.</span>
                  {q}
                </p>
                <div className="flex gap-3">
                  {[
                    { value: true, label: "Oui", active: "bg-warm text-white border-warm", inactive: "border-line text-ink-muted hover:border-warm/30 hover:text-ink-soft" },
                    { value: false, label: "Non", active: "bg-brand text-white border-brand", inactive: "border-line text-ink-muted hover:border-brand/30 hover:text-ink-soft" },
                  ].map((opt) => (
                    <button
                      key={String(opt.value)}
                      type="button"
                      className={`flex-1 py-2 rounded-full text-sm font-medium border transition-all ${reponses[i] === opt.value ? opt.active : opt.inactive}`}
                      onClick={() => { const r = [...reponses]; r[i] = opt.value; setReponses(r); }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <button type="submit" disabled={repondues < questions.length} className="bs-btn bs-btn-primary disabled:opacity-40 disabled:pointer-events-none">
            Voir mon résultat <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
