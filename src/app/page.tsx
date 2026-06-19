import { ClipboardCheck, ChevronRight, Clock, Shield, Eye, Target, Activity, GraduationCap, TrendingUp, Quote, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroReveal, HeroImage, FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HoverLift, HoverGlow, ScaleIn } from "@/components/Animated";

const stats = [
  { value: "2", label: "postes", desc: "Esthéticienne & hôtesse d'accueil — une prévention sur mesure" },
  { value: "6", label: "protocoles", desc: "Des gestes de prévention TMS appliqués chaque jour" },
  { value: "5", label: "min", desc: "D'échauffement avant chaque prise de poste" },
  { value: "87", label: "%", desc: "Des maladies professionnelles en France sont des TMS (Assurance Maladie)" },
];

const demarche = [
  { icon: Eye, num: "01", title: "Observer", desc: "Repérer les gestes à risque — posture de soin, nettoyage des cabines, manutention." },
  { icon: Target, num: "02", title: "Agir", desc: "Régler siège, éclairage, outils. Organiser l'espace pour limiter les torsions." },
  { icon: Activity, num: "03", title: "Écouter", desc: "Douleurs, fourmillements, raideurs : reconnaître les signaux avant qu'ils ne s'installent." },
  { icon: GraduationCap, num: "04", title: "Apprendre", desc: "Postures, échauffement, micro-pauses — des réflexes simples, chaque jour." },
  { icon: TrendingUp, num: "05", title: "Progresser", desc: "Suivre son exposition avec l'auto-évaluation et ajuster ses habitudes dans la durée." },
];

const exploration = [
  { href: "/comprendre-les-tms", label: "Comprendre les TMS", sub: "Zones touchées & signaux d'alerte", num: "02", icon: Eye },
  { href: "/fiches-de-poste", label: "Fiches de poste", sub: "Risques & gestes par métier", num: "03", icon: Target },
  { href: "/bonnes-pratiques", label: "Bonnes pratiques", sub: "6 protocoles + routine d'échauffement", num: "04", icon: Shield },
  { href: "/auto-evaluation", label: "Auto-évaluation", sub: "20 questions · 5 minutes", num: "05", icon: ClipboardCheck },
  { href: "/ressources", label: "Ressources", sub: "Affiches & liens utiles", num: "06", icon: GraduationCap },
  { href: "/duerp", label: "Document unique", sub: "DUERP", num: "07", icon: Activity },
  { href: "/signalement", label: "Signalement", sub: "Garder une trace écrite", num: "08", icon: TrendingUp },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — FULL BLEED IMAGE + SOLAR GLOW ═══ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1800&q=85&auto=format&fit=crop" alt="Salon de bronzage et soins esthétiques" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/95 via-paper/75 to-paper" />
          <div className="absolute inset-0 bg-gradient-to-r from-paper/80 via-transparent to-paper/60" />
        </div>
        <div className="bs-solar-glow z-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-12 items-center">
            <HeroReveal>
              <span className="bs-chip mb-5"><Sparkles className="h-3 w-3" />Espace prévention TMS</span>
              <h1 className="bs-display-hero text-ink mb-6">Votre santé,<br /><span className="text-brand">votre métier</span></h1>
              <p className="max-w-lg text-lg leading-relaxed text-ink-soft mb-8">Onglerie, bronzage, accueil : les métiers de l'esthétique sollicitent intensément le corps. Protégez vos gestes, écoutez les signaux, gardez les bons réflexes.</p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/auto-evaluation" className="bs-btn bs-btn-primary group"><ClipboardCheck className="h-4 w-4" />Évaluer mon exposition<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
                <Link href="/bonnes-pratiques" className="bs-btn bs-btn-ghost"><Shield className="h-4 w-4" />Voir les protocoles</Link>
              </div>
            </HeroReveal>
            <HeroImage>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=85&auto=format&fit=crop" alt="Soins esthétiques et manucure" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 35vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brand/60 to-transparent rounded-full" />
              </div>
            </HeroImage>
          </div>
        </div>
      </section>

      {/* ═══ COMPTEURS ═══ */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <FadeIn>
          <div className="bs-card-tint p-8 sm:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="bs-display-hero !text-5xl text-brand">{s.value}</span>
                    <span className="text-sm font-semibold text-ink-muted">{s.label}</span>
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-soft max-w-[180px] mx-auto lg:mx-0">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══ MOT DU DIRIGEANT ═══ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="bs-asymmetric">
          <FadeInLeft>
            <Quote className="h-16 w-16 text-brand/15 mb-6" aria-hidden="true" />
            <blockquote>
              <p className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">« Dans un centre de bronzage et d'onglerie, notre santé est notre premier outil de travail. J'ai créé cet espace pour que chacune garde les bons réflexes, prévienne les douleurs et s'épanouisse dans son métier. »</p>
              <footer className="mt-6">
                <div className="flex items-center gap-3">
                  <Image src="/images/logo.png" alt="Black Sun Villetaneuse" width={48} height={48} className="rounded-full border border-border" />
                  <div><p className="font-display font-bold text-ink">Black Sun Villetaneuse</p><p className="text-sm text-ink-soft">Centre de bronzage & onglerie</p></div>
                </div>
              </footer>
            </blockquote>
          </FadeInLeft>
          <FadeInRight>
            <p className="text-lg leading-relaxed text-ink-soft">Vous trouverez dans cet espace des repères concrets, une routine d'échauffement quotidienne et toutes les bonnes pratiques pour vous protéger. Quelques minutes suffisent pour prendre soin de soi — c'est ce qui permet de tenir la distance.</p>
            <Link href="/comprendre-les-tms" className="bs-btn bs-btn-outline mt-6 inline-flex items-center gap-2">Découvrir les TMS<ArrowRight className="h-4 w-4" /></Link>
          </FadeInRight>
        </div>
      </section>

      {/* ═══ DÉMARCHE — BENTO ═══ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24">
        <FadeIn className="max-w-2xl mb-12">
          <p className="bs-eyebrow">Notre approche</p>
          <h2 className="bs-display-section text-ink">Un métier exigeant, une démarche structurée</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">Chez <strong className="font-semibold text-ink">Black Sun Villetaneuse</strong>, la prévention TMS n'est pas une option — c'est le socle de la qualité de vie au travail. Voici comment nous protégeons nos équipes, chaque jour.</p>
        </FadeIn>
        <div className="bs-bento-3">
          <StaggerContainer className="bs-card-tint p-8 flex flex-col justify-between">
            <StaggerItem><span className="bs-chip mb-4">Étape par étape</span><h3 className="font-display text-2xl font-bold text-ink mb-3">5 piliers pour prévenir les TMS</h3><p className="text-sm leading-relaxed text-ink-soft">De l'observation des gestes à risque jusqu'à l'amélioration continue, chaque pilier renforce la protection de nos équipes.</p></StaggerItem>
            <StaggerItem className="mt-6">{demarche.slice(0,2).map((d)=>(<div key={d.num} className="flex items-start gap-3 py-3 border-b border-border last:border-0"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand font-display text-sm font-bold">{d.num}</span><div><p className="font-display font-semibold text-ink text-sm">{d.title}</p><p className="text-xs text-ink-soft mt-0.5">{d.desc}</p></div></div>))}</StaggerItem>
          </StaggerContainer>
          <div className="flex flex-col gap-4">{demarche.slice(2,4).map((d)=>(<HoverLift key={d.num} className="bs-card p-6 flex-1"><div className="flex items-center gap-3 mb-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft"><d.icon className="h-5 w-5 text-brand" /></span><span className="bs-chip">{d.num}</span></div><h3 className="font-display font-semibold text-ink">{d.title}</h3><p className="text-sm text-ink-soft mt-1.5">{d.desc}</p></HoverLift>))}</div>
          <HoverGlow className="bs-card-ink p-6 flex flex-col justify-between"><div><p className="bs-eyebrow !text-ink/50">Prête à agir ?</p><p className="font-display text-xl font-bold mt-3">5 minutes pour évaluer votre exposition.</p></div><Link href="/auto-evaluation" className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-paper px-5 py-3 text-sm font-semibold text-brand transition-transform hover:-translate-y-0.5">Lancer l'auto-évaluation<ArrowRight className="h-4 w-4" /></Link></HoverGlow>
        </div>
        <FadeIn delay={0.2} className="mt-4"><div className="bs-card p-6 flex flex-col sm:flex-row sm:items-center gap-4"><div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft"><TrendingUp className="h-5 w-5 text-brand" /></span><span className="bs-chip">{demarche[4].num}</span></div><div className="flex-1"><h3 className="font-display font-semibold text-ink">{demarche[4].title}</h3><p className="text-sm text-ink-soft mt-0.5">{demarche[4].desc}</p></div><Link href="/auto-evaluation" className="bs-btn bs-btn-primary shrink-0">Commencer<ArrowRight className="h-4 w-4" /></Link></div></FadeIn>
      </section>

      {/* ═══ EXPLORER ═══ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 bs-arc-section">
        <FadeIn className="max-w-2xl mb-12"><p className="bs-eyebrow">Votre parcours</p><h2 className="bs-display-section text-ink">Par où commencer ?</h2></FadeIn>
        <StaggerContainer className="relative pl-12 sm:pl-14">
          <span className="absolute left-[17px] bottom-8 top-8 w-[3px] bg-gradient-to-b from-brand via-brand/40 to-transparent sm:left-[22px]" aria-hidden="true" />
          <div className="grid gap-4">{exploration.map((item,i)=>(<StaggerItem key={item.href}><Link href={item.href} className="bs-card-lift group flex items-center gap-4 sm:gap-6 p-5 sm:p-6"><span className="absolute -left-12 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-xs font-bold text-paper shadow-[0_4px_16px_-4px_rgba(200,150,46,0.5)] sm:-left-14 sm:h-9 sm:w-9" aria-hidden="true">{item.num}</span><div className="flex-1"><span className="font-display text-lg font-semibold text-ink sm:text-xl group-hover:text-brand transition-colors">{item.label}</span><p className="text-sm text-ink-soft mt-0.5">{item.sub}</p></div><div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand group-hover:bg-brand group-hover:text-paper transition-all"><ArrowRight className="h-5 w-5" /></div></Link></StaggerItem>))}</div>
        </StaggerContainer>
      </section>
    </>
  );
}