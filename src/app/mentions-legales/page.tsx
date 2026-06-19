import { FadeIn, FadeInLeft, StaggerContainer, StaggerItem } from "@/components/Animated";

const sections = [
  {
    num: "01",
    title: "Éditeur",
    lines: ["Black Sun Villetaneuse", "Centre de bronzage et onglerie", "SIRET : [À COMPLÉTER]"],
  },
  {
    num: "02",
    title: "Hébergement",
    lines: ["Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA"],
  },
  {
    num: "03",
    title: "Protection des données",
    lines: [
      "Le formulaire de signalement collecte prénom, nom, poste, date et description. Ces données sont exclusivement destinées au responsable dans le cadre de la prévention des risques professionnels. Aucune transmission à des tiers.",
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression. Adressez-vous à votre responsable pour exercer ces droits.",
    ],
  },
];

export default function MentionsLegales() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6 md:py-20">
      {/* En-tête éditorial — glissé depuis la gauche */}
      <FadeInLeft>
        <p className="bs-eyebrow">Informations légales</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink mb-10">Mentions légales</h1>
      </FadeInLeft>

      {/* Sections — cartes éditoriales en cascade, séparées par l'arc solaire */}
      <StaggerContainer className="bs-arc-section space-y-6">
        {sections.map((s) => (
          <StaggerItem key={s.num}>
            <article className="bs-card bs-arc p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="bs-chip">{s.num}</span>
                <h2 className="font-display text-lg font-semibold text-ink">{s.title}</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-ink-soft">
                {s.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Pied — note éditoriale */}
      <FadeIn delay={0.1} className="mt-10">
        <hr className="bs-golden-rule" />
        <p className="mt-6 text-center text-xs text-ink-muted">Black Sun Villetaneuse — Centre de bronzage &amp; onglerie</p>
      </FadeIn>
    </section>
  );
}
