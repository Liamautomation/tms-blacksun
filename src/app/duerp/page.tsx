import { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = { title: "DUERP — Black Sun Villetaneuse", description: "Document Unique d'Évaluation des Risques Professionnels." };

export default function DuerpPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-28 text-center">
      <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mx-auto mb-8"><FileText className="h-10 w-10 text-gold/50" /></div>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-cream mb-3">Document Unique (DUERP)</h1>
      <p className="text-cream-muted/50 mb-8">Document Unique d&apos;Évaluation des Risques Professionnels</p>
      <div className="bg-black-card border border-black-border-light rounded-2xl p-10"><p className="text-cream-muted/50 text-sm">Le document sera disponible prochainement.</p><div className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-black-sun border border-black-border-light rounded-xl text-sm text-cream-muted/30"><FileText className="h-4 w-4" />[À COMPLÉTER]</div></div>
      <div className="mt-10 bg-black-card border border-black-border-light rounded-xl p-6 text-left"><h2 className="font-display text-sm font-semibold text-cream mb-2">Qu&apos;est-ce que le DUERP ?</h2><p className="text-cream-muted/50 text-sm leading-relaxed">Le Document Unique d&apos;Évaluation des Risques Professionnels est obligatoire pour toute entreprise. Il recense l&apos;ensemble des risques professionnels et définit les actions de prévention. Mis à jour chaque année, il est tenu à disposition des salariés.</p></div>
    </div>
  );
}