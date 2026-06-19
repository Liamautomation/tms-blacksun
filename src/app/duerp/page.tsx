import { FileText } from "lucide-react";

export default function DuerpPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-soft mx-auto mb-8"><FileText className="h-10 w-10 text-brand/50" /></div>
      <h1 className="font-display text-3xl font-bold text-ink mb-3">Document Unique (DUERP)</h1>
      <p className="text-ink-soft mb-8">Document Unique d&apos;Évaluation des Risques Professionnels</p>
      <div className="rl-card p-10"><p className="text-ink-soft text-sm">Le document sera disponible prochainement.</p><div className="mt-4 inline-flex items-center gap-2 px-5 py-3 bg-paper/50 rounded-2xl text-sm text-ink-muted"><FileText className="h-4 w-4" />[À COMPLÉTER]</div></div>
      <div className="mt-10 rl-card p-6 text-left"><h2 className="font-display text-sm font-semibold text-ink mb-2">Qu&apos;est-ce que le DUERP ?</h2><p className="text-ink-soft text-sm leading-relaxed">Le Document Unique d&apos;Évaluation des Risques Professionnels est obligatoire pour toute entreprise. Il recense l&apos;ensemble des risques et définit les actions de prévention.</p></div>
    </div>
  );
}