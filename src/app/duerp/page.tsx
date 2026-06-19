import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DUERP — Black Sun Villetaneuse",
  description: "Document Unique d'Évaluation des Risques Professionnels (DUERP) de Black Sun Villetaneuse.",
};

export default function DuerpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-gold mb-2">Document Unique (DUERP)</h1>
      <p className="text-cream-muted/70 mb-12">Document Unique d&apos;Évaluation des Risques Professionnels</p>
      <div className="bg-black-card border border-black-border rounded-2xl p-12 text-center">
        <div className="text-5xl mb-4">📄</div>
        <h2 className="text-xl font-semibold text-cream mb-3">Document à venir</h2>
        <p className="text-cream-muted/60 max-w-md mx-auto">Le Document Unique d&apos;Évaluation des Risques Professionnels sera disponible prochainement en téléchargement sur cette page.</p>
        <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black-sun/50 border border-black-border rounded-lg text-sm text-cream-muted/50">
          <span>📥</span><span>[À COMPLÉTER]</span>
        </div>
      </div>
      <div className="mt-8 bg-black-card border border-black-border rounded-xl p-6">
        <h3 className="text-sm font-semibold text-cream mb-2">Qu&apos;est-ce que le DUERP ?</h3>
        <p className="text-cream-muted/70 text-sm leading-relaxed">Le Document Unique d&apos;Évaluation des Risques Professionnels (DUERP) est un document obligatoire pour toute entreprise. Il recense l&apos;ensemble des risques professionnels auxquels sont exposés les salariés et définit les actions de prévention à mettre en œuvre. Il doit être mis à jour chaque année et est tenu à disposition des salariés et des instances représentatives du personnel.</p>
      </div>
    </div>
  );
}