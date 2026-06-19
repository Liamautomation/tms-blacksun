"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SignalementPage() {
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnvoye(true);
  };

  if (envoye) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <div className="text-5xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-gold mb-4">Signalement envoyé</h1>
        <p className="text-cream-muted/70 mb-8">Votre signalement a bien été transmis. Il sera traité dans les meilleurs délais.</p>
        <Button onClick={() => setEnvoye(false)} variant="outline" className="border-black-border text-cream-muted hover:text-cream">Nouveau signalement</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-gold mb-2">Formulaire interne de signalement</h1>
      <p className="text-cream-muted/70 mb-8">Signalez une douleur, une gêne ou un risque TMS. Votre signalement sera traité de manière confidentielle.</p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-cream-muted mb-1.5">Prénom</label>
            <input type="text" required className="w-full bg-black-sun border border-black-border rounded-lg px-4 py-3 text-cream placeholder:text-cream-muted/30 focus:outline-none focus:border-gold/50 transition-colors" placeholder="Votre prénom" />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream-muted mb-1.5">Nom</label>
            <input type="text" required className="w-full bg-black-sun border border-black-border rounded-lg px-4 py-3 text-cream placeholder:text-cream-muted/30 focus:outline-none focus:border-gold/50 transition-colors" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream-muted mb-1.5">Poste occupé</label>
            <select required className="w-full bg-black-sun border border-black-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors">
              <option value="">Sélectionnez votre poste</option>
              <option value="estheticienne">Esthéticienne (Soin et Onglerie)</option>
              <option value="hotesse">Hôtesse de Caisse et Accueil</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-cream-muted mb-1.5">Date</label>
            <input type="date" required className="w-full bg-black-sun border border-black-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream-muted mb-1.5">Description du signalement</label>
            <textarea required rows={4} className="w-full bg-black-sun border border-black-border rounded-lg px-4 py-3 text-cream placeholder:text-cream-muted/30 focus:outline-none focus:border-gold/50 transition-colors resize-none" placeholder="Décrivez la douleur, la gêne ou le risque constaté (localisation, intensité, circonstances...)" />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream-muted mb-3">Niveau d&apos;urgence ressenti</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "faible", label: "Faible", emoji: "🟢" },
                { value: "modere", label: "Modéré", emoji: "🟡" },
                { value: "eleve", label: "Élevé", emoji: "🔴" },
              ].map((niveau) => (
                <label key={niveau.value} className="flex flex-col items-center gap-1 p-3 bg-black-sun border border-black-border rounded-lg cursor-pointer hover:border-gold/30 transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold/5">
                  <input type="radio" name="urgence" value={niveau.value} required className="sr-only" />
                  <span className="text-xl">{niveau.emoji}</span>
                  <span className="text-xs text-cream-muted/70">{niveau.label}</span>
                </label>
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-black-sun font-semibold py-3 rounded-xl text-base mt-4">Envoyer le signalement</Button>
          <p className="text-xs text-cream-muted/40 text-center mt-4">Destinataire : [À COMPLÉTER]</p>
        </div>
      </form>
    </div>
  );
}