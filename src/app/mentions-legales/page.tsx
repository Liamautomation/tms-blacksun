import { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales — Black Sun Villetaneuse", robots: "noindex, nofollow" };

export default function MentionsLegales() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 lg:py-28">
      <h1 className="font-display text-4xl font-bold text-cream mb-8">Mentions légales</h1>
      <div className="space-y-8 text-cream-muted/60 text-sm leading-relaxed">
        <section><h2 className="font-display text-lg font-semibold text-cream mb-3">Éditeur du site</h2><p>Black Sun Villetaneuse</p><p>Centre de bronzage et onglerie</p><p>SIRET : [À COMPLÉTER]</p></section>
        <section><h2 className="font-display text-lg font-semibold text-cream mb-3">Hébergement</h2><p>Vercel Inc.</p><p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p></section>
        <section><h2 className="font-display text-lg font-semibold text-cream mb-3">Protection des données</h2><p>Le formulaire de signalement collecte les données suivantes : prénom, nom, poste occupé, date et description du signalement. Ces données sont exclusivement destinées au responsable dans le cadre de la prévention des risques professionnels. Elles ne font l&apos;objet d&apos;aucune transmission à des tiers.</p><p className="mt-3">Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, adressez-vous à votre responsable.</p></section>
        <section><h2 className="font-display text-lg font-semibold text-cream mb-3">Propriété intellectuelle</h2><p>L&apos;ensemble des contenus de ce site (textes, images, logo) est la propriété de Black Sun Villetaneuse. Toute reproduction est interdite sans autorisation préalable.</p></section>
      </div>
    </div>
  );
}