import { Activity, AlertTriangle, Brain, TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HoverLift } from "@/components/Animated";

const causes = [
  { icon: Activity, title: "Gestes répétitifs", desc: "Mouvements identiques à cadence élevée : manucure, nettoyage des cabines de bronzage." },
  { icon: AlertTriangle, title: "Postures contraignantes", desc: "Maintien prolongé de positions inconfortables : buste penché, bras en élévation." },
  { icon: TrendingUp, title: "Efforts excessifs", desc: "Manutention de charges, port de cartons de produits, pression excessive des doigts." },
  { icon: Brain, title: "Stress et rythme", desc: "Tension musculaire liée au stress, enchaînement des clients sans pause de récupération." },
];

const signaux = [
  "Douleurs persistantes dans le bas du dos, les cervicales ou les poignets",
  "Fourmillements ou engourdissements dans les mains et les doigts",
  "Raideurs articulaires au réveil ou après une période d'inactivité",
  "Perte de force ou difficulté à saisir de petits objets",
  "Lourdeur excessive dans les jambes en fin de journée",
];

const zones = [
  { value: "Membres supérieurs", detail: "Poignets, mains et épaules sont les zones les plus sollicitées." },
  { value: "Rachis cervical", detail: "Les postures tête vers l'avant exposent fortement la nuque." },
  { value: "Lombaires", detail: "La station assise prolongée sollicite le bas du dos." },
];

export default function ComprendreTMSPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
      {/* ═══ HERO ═══ */}
      <FadeIn className="max-w-3xl mb-14">
        <p className="bs-eyebrow">Troubles Musculo-Squelettiques</p>
        <h1 className="bs-display-section text-ink">Comprendre les TMS</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">Définition, causes et prévention des troubles qui touchent les muscles, les tendons et les articulations.</p>
      </FadeIn>

      {/* ═══ DÉFINITION — TINT CARD PLEINE LARGEUR ═══ */}
      <FadeIn className="mb-14">
        <div className="bs-card-tint p-8 lg:p-12 bs-arc">
          <span className="bs-chip mb-4">Définition</span>
          <h2 className="font-display text-2xl font-bold text-ink mb-4">Qu&apos;est-ce qu&apos;un TMS ?</h2>
          <p className="text-ink-soft leading-relaxed max-w-3xl">Les Troubles Musculo-Squelettiques (TMS) regroupent un ensemble de pathologies affectant les muscles, les tendons, les nerfs, les articulations et les ligaments. Ils touchent principalement les membres supérieurs, le dos et les membres inférieurs. Les TMS représentent la première cause de maladies professionnelles reconnues en France.</p>
        </div>
      </FadeIn>

      {/* ═══ CAUSES — GRILLE ASYMÉTRIQUE ═══ */}
      <section className="mb-14 bs-arc-section pt-12">
        <FadeIn className="mb-8">
          <p className="bs-eyebrow">Origines</p>
          <h2 className="bs-display-section text-ink">Les causes principales</h2>
        </FadeIn>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {causes.map((item) => (
            <StaggerItem key={item.title}>
              <HoverLift className="bs-card-lift p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft">
                    <item.icon className="h-5 w-5 text-brand" />
                  </span>
                </div>
                <h3 className="font-display font-semibold text-ink text-lg mb-2">{item.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{item.desc}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══ SIGNAUX — LAYOUT ASYMMÉTRIQUE ═══ */}
      <section className="mb-14">
        <div className="bs-asymmetric">
          <FadeInLeft>
            <p className="bs-eyebrow">Alertes</p>
            <h2 className="bs-display-section text-ink mb-4">Reconnaître les signaux</h2>
            <p className="text-ink-soft leading-relaxed">Votre corps envoie des signaux avant que la douleur ne s&apos;installe. Apprenez à les décrypter.</p>
          </FadeInLeft>
          <FadeInRight>
            <div className="bs-card p-8 lg:p-10">
              <StaggerContainer>
                <ul className="space-y-4">
                  {signaux.map((s, i) => (
                    <StaggerItem key={s}>
                      <li className="flex items-start gap-3 text-ink-soft">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand font-display text-xs font-bold">{i + 1}</span>
                        <span className="pt-0.5">{s}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
              <div className="mt-8 p-5 bg-brand-soft border border-brand/10 rounded-2xl">
                <p className="text-sm text-ink-soft"><strong className="text-brand font-semibold">Ne jamais ignorer ces signaux.</strong> Un TMS pris en charge précocement se guérit dans la majorité des cas.</p>
              </div>
            </div>
          </FadeInRight>
        </div>
      </section>

      {/* ═══ FOCUS SECTORIEL ═══ */}
      <section className="bs-arc-section pt-12">
        <FadeIn className="mb-8">
          <p className="bs-eyebrow">Spécifique à votre métier</p>
          <h2 className="bs-display-section text-ink">TMS dans l&apos;esthétique et le bronzage</h2>
        </FadeIn>
        <FadeIn>
          <div className="bs-card-tint p-8 lg:p-10">
            <p className="text-ink-soft leading-relaxed mb-8 max-w-4xl">Le secteur de l&apos;esthétique et des centres de bronzage présente des facteurs de risque spécifiques. Les professionnels sont particulièrement exposés aux TMS du poignet, de la main et du rachis cervical en raison de la nature même de leurs activités.</p>
            <StaggerContainer className="grid gap-4 sm:grid-cols-3">
              {zones.map((s) => (
                <StaggerItem key={s.value}>
                  <div className="text-center p-6 bg-paper/50 rounded-2xl border border-line-light hover:border-brand/20 transition-colors h-full">
                    <p className="font-display font-bold text-brand text-lg mb-2">{s.value}</p>
                    <p className="text-ink-soft text-xs leading-relaxed">{s.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-ink-muted text-xs mt-6">Sources : INRS, Assurance Maladie — Risques professionnels.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-10 text-center">
          <Link href="/bonnes-pratiques" className="bs-btn bs-btn-primary">Voir les protocoles de prévention<ChevronRight className="h-4 w-4" /></Link>
        </FadeIn>
      </section>
    </div>
  );
}
