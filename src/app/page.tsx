import { ClipboardCheck, Shield, Eye, Target, Activity, GraduationCap, TrendingUp, Quote, ArrowRight, Sparkles, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroReveal, FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HoverLift, HoverGlow } from "@/components/Animated";

const stats = [
  { valeur: "2", unite: "postes", texte: "Esthéticienne & hôtesse d'accueil — une prévention sur mesure" },
  { valeur: "6", unite: "protocoles", texte: "De prévention TMS appliqués chaque jour" },
  { valeur: "5", unite: "min", texte: "D'échauffement avant chaque prise de poste" },
  { valeur: "87", unite: "%", texte: "Des maladies professionnelles en France sont des TMS (Assurance Maladie)" },
];

const demarche = [
  { icon: Eye, titre: "Observer", texte: "Repérer les gestes à risque — posture de soin, nettoyage des cabines, manutention." },
  { icon: Target, titre: "Agir", texte: "Régler siège, éclairage, outils. Organiser l'espace pour limiter les torsions." },
  { icon: Activity, titre: "Écouter", texte: "Douleurs, fourmillements, raideurs : reconnaître les signaux avant qu'ils ne s'installent." },
  { icon: GraduationCap, titre: "Apprendre", texte: "Postures, échauffement, micro-pauses — des réflexes simples, chaque jour." },
  { icon: TrendingUp, titre: "Progresser", texte: "Suivre son exposition avec l'auto-évaluation et ajuster ses habitudes dans la durée." },
];

const exploration = [
  { href: "/comprendre-les-tms", label: "Comprendre les TMS", sub: "Zones touchées & signaux d'alerte", num: "02", icon: Eye },
  { href: "/fiches-de-poste", label: "Fiches de poste", sub: "Risques & gestes par métier", num: "03", icon: Target },
  { href: "/bonnes-pratiques", label: "Bonnes pratiques", sub: "6 protocoles + routine d'échauffement", num: "04", icon: Shield },
  { href: "/auto-evaluation", label: "Auto-évaluation", sub: "20 questions · 5 minutes", num: "05", icon: ClipboardCheck },
  { href: "/ressources", label: "Ressources", sub: "Affiches & liens utiles", num: "06", icon: GraduationCap },
  { href: "/signalement", label: "Signalement", sub: "Garder une trace écrite", num: "07", icon: TrendingUp },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — PHOTO FULL-BLEED + OVERLAY CHAUD ═══ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1800&q=85&auto=format&fit=crop" alt="Salon de bronzage et soins esthétiques" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/95 via-paper/80 to-paper" />
          <div className="absolute inset-0 bg-gradient-to-r from-paper/90 via-paper/40 to-paper/60" />
        </div>
        <div className="bs-sun-glow z-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <HeroReveal>
            <span className="bs-chip mb-6"><Sparkles className="h-3 w-3" />Espace prévention TMS</span>
            <h1 className="bs-display-hero text-ink mb-6">Votre santé,<br /><span className="text-brand">votre métier</span></h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft mb-8">Onglerie, bronzage, accueil : les métiers de l'esthétique sollicitent intensément le corps. Protégez vos gestes, écoutez les signaux, gardez les bons réflexes.</p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/auto-evaluation" className="bs-btn bs-btn-primary group"><ClipboardCheck className="h-4 w-4" />Évaluer mon exposition<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
              <Link href="/bonnes-pratiques" className="bs-btn bs-btn-ghost"><Shield className="h-4 w-4" />Voir les protocoles</Link>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ═══ STATISTIQUES — SECTION SOMBRE POUR CONTRASTE ═══ */}
      <section className="bg-ink text-white">
        <div className="relative overflow-hidden">
          <div className="bs-sun-texture absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.unite} className={`py-8 pr-4 ${i > 0 ? "lg:border-l border-paper/15" : ""} lg:px-6`}>
                  <p className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold tracking-tight text-brand-light md:text-5xl">{s.valeur}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{s.unite}</span>
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/75 max-w-[200px]">{s.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MOT DU DIRIGEANT — ÉDITORIAL ASYMÉTRIQUE ═══ */}
      <section className="bg-card-tint">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <FadeInLeft>
              <p className="bs-eyebrow">Le mot de la direction</p>
              <div className="mt-6 flex items-center gap-4">
                <Image src="/images/logo.png" alt="Black Sun Villetaneuse" width={3331} height={2816} className="h-14 w-auto" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                <span className="block text-lg font-bold text-ink">Black Sun Villetaneuse</span>
                Centre de bronzage & onglerie
              </p>
            </FadeInLeft>
            <FadeInRight>
              <Quote className="h-12 w-12 text-brand/15 mb-4" aria-hidden="true" />
              <blockquote>
                <p className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">« Dans un centre de bronzage et d'onglerie, notre santé est notre premier outil de travail. J'ai créé cet espace pour que chacune garde les bons réflexes, prévienne les douleurs et s'épanouisse dans son métier. »</p>
              </blockquote>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">Vous trouverez dans cet espace des repères concrets, une routine d'échauffement quotidienne et toutes les bonnes pratiques pour vous protéger. Quelques minutes suffisent pour prendre soin de soi — c'est ce qui permet de tenir la distance.</p>
              <Link href="/comprendre-les-tms" className="bs-btn bs-btn-outline mt-6 inline-flex items-center gap-2">Découvrir les TMS<ArrowRight className="h-4 w-4" /></Link>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* ═══ DÉMARCHE — LISTE ÉDITORIALE NUMÉROTÉE (pas de cartes uniformes) ═══ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <FadeIn>
              <p className="bs-eyebrow">Notre approche</p>
              <h2 className="bs-display-section text-ink mt-4">Un métier exigeant,<br />une démarche structurée</h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">Chez <strong className="font-semibold text-ink">Black Sun Villetaneuse</strong>, la prévention TMS n'est pas une option — c'est le socle de la qualité de vie au travail. Voici comment nous protégeons nos équipes, chaque jour.</p>
              <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-[0_8px_30px_rgba(42,31,21,0.06)]">
                <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85&auto=format&fit=crop" alt="Esthéticienne au travail dans un salon" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
              </div>
            </FadeIn>

            <StaggerContainer>
              <ol className="divide-y divide-line border-y border-line">
                {demarche.map((d, i) => (
                  <StaggerItem key={d.titre}>
                    <div className="group flex items-start gap-5 py-6 transition-colors hover:bg-brand-mist/50 -mx-4 px-4 rounded-lg">
                      <span className="font-display text-3xl font-bold text-brand/30 tabular-nums shrink-0 w-12">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink">
                          <d.icon className="h-4 w-4 text-brand shrink-0" strokeWidth={1.5} />
                          {d.titre}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{d.texte}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-ink-muted shrink-0 transition-all group-hover:text-brand group-hover:translate-x-1" />
                    </div>
                  </StaggerItem>
                ))}
              </ol>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ═══ SECTION CTA — CARTE BRAND (gradient doré) ═══ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28">
          <FadeIn>
            <div className="bs-card-brand relative overflow-hidden p-8 sm:p-12 md:p-16">
              <div className="bs-sun-texture absolute inset-0 opacity-15" aria-hidden="true" />
              <div className="relative grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <span className="bs-eyebrow !text-white/60">Passer à l'action</span>
                  <h2 className="font-display text-3xl font-bold leading-tight mt-4 text-white md:text-4xl">Évaluez votre exposition,<br />signalez la moindre douleur.</h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">Cinq minutes suffisent pour faire le point. Et au moindre signal — dos, nuque, poignet, épaule — un signalement permet de garder une trace et d'agir tôt.</p>
                </div>
                <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-white/20 lg:col-span-4 lg:col-start-9">
                  <Link href="/auto-evaluation" className="group flex items-center justify-between gap-4 bg-white px-6 py-5 text-ink transition-colors hover:bg-brand-soft">
                    <span className="inline-flex items-center gap-3"><ClipboardCheck className="h-5 w-5 text-brand" /><span className="font-display font-semibold">Faire l'auto-évaluation</span></span>
                    <ArrowRight className="h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/signalement" className="group flex items-center justify-between gap-4 bg-white px-6 py-5 text-ink transition-colors hover:bg-brand-soft">
                    <span className="inline-flex items-center gap-3"><Sun className="h-5 w-5 text-brand" /><span className="font-display font-semibold">Signaler une douleur</span></span>
                    <ArrowRight className="h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ EXPLORER — TIMELINE VERTICALE ═══ */}
      <section className="bg-card-tint">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <FadeIn className="max-w-2xl mb-12">
            <p className="bs-eyebrow">Votre parcours</p>
            <h2 className="bs-display-section text-ink mt-4">Par où commencer ?</h2>
          </FadeIn>
          <StaggerContainer className="relative pl-12 sm:pl-14">
            <span className="absolute left-[17px] bottom-8 top-8 w-[3px] bg-gradient-to-b from-brand via-brand/40 to-transparent sm:left-[22px]" aria-hidden="true" />
            <div className="grid gap-4">
              {exploration.map((item) => (
                <StaggerItem key={item.href}>
                  <Link href={item.href} className="bs-card-lift group flex items-center gap-4 sm:gap-6 p-5 sm:p-6">
                    <span className="absolute -left-12 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-xs font-bold text-white shadow-[0_4px_16px_-4px_rgba(184,134,11,0.4)] sm:-left-14 sm:h-9 sm:w-9" aria-hidden="true">{item.num}</span>
                    <div className="flex-1">
                      <span className="font-display text-lg font-semibold text-ink sm:text-xl group-hover:text-brand transition-colors">{item.label}</span>
                      <p className="text-sm text-ink-soft mt-0.5">{item.sub}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-deep group-hover:bg-brand group-hover:text-white transition-all">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
