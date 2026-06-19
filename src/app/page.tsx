import { ClipboardCheck, ChevronRight, Clock, Eye, Target, Activity, GraduationCap, TrendingUp, Quote, Megaphone } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "2", label: "postes", desc: "esthéticienne et hôtesse d'accueil — la prévention adaptée à chacun" },
  { value: "6", label: "protocoles", desc: "de prévention TMS appliqués chaque jour dans le centre" },
  { value: "5", label: "min", desc: "d'échauffement avant chaque prise de poste" },
  { value: "87", label: "%", desc: "des maladies pro en France sont des TMS (Assurance Maladie)" },
];

const demarche = [
  { icon: Eye, num: "01", title: "Observer et comprendre", desc: "Identifier les situations à risque : posture de soin, nettoyage des cabines, manutention des produits." },
  { icon: Target, num: "02", title: "Agir à la source", desc: "Régler le matériel — siège, éclairage, outils ergonomiques — et organiser l'espace de travail." },
  { icon: Activity, num: "03", title: "Écouter son corps", desc: "Repérer tôt les signaux : douleurs, fourmillements, raideurs. Adapter l'effort en temps réel." },
  { icon: GraduationCap, num: "04", title: "Connaître les bons gestes", desc: "Postures, échauffement, micro-pauses : des réflexes simples appliqués chaque jour." },
  { icon: TrendingUp, num: "05", title: "Évaluer et améliorer", desc: "Suivre son exposition avec l'auto-évaluation, ajuster ses habitudes dans la durée." },
];

const exploration = [
  { href: "/comprendre-les-tms", label: "Comprendre les TMS", num: "02" },
  { href: "/fiches-de-poste", label: "Fiches de poste", num: "03" },
  { href: "/bonnes-pratiques", label: "Bonnes pratiques", num: "04" },
  { href: "/auto-evaluation", label: "Auto-évaluation", num: "05" },
  { href: "/ressources", label: "Ressources", num: "06" },
  { href: "/duerp", label: "Document unique", num: "07" },
  { href: "/signalement", label: "Signalement", num: "08" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/3 via-transparent to-transparent" />
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-brand/5 blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-12 pt-10 sm:px-6 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="rl-chip rl-in"><Clock className="h-3.5 w-3.5" />Prévention · 8 étapes</span>
            <h1 className="rl-in rl-in-1 mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">Préservez votre santé,<br /><span className="rl-mark text-ink">chaque jour au travail</span>.</h1>
            <p className="rl-in rl-in-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">Soins d&apos;onglerie, entretien des cabines de bronzage, accueil : les métiers de l&apos;esthétique sollicitent intensément le corps. Retrouvez ici tout ce qu&apos;il faut pour comprendre, adopter les bons gestes et agir dès les premiers signaux.</p>
            <div className="rl-in rl-in-3 mt-8 flex flex-wrap items-center gap-3">
              <Link href="/auto-evaluation" className="rl-btn rl-btn-primary group"><ClipboardCheck className="h-4 w-4" />Évaluer mon exposition<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
              <Link href="/signalement" className="rl-btn rl-btn-ghost"><Megaphone className="h-4 w-4" />Signaler une douleur</Link>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft"><Clock className="h-3.5 w-3.5 text-brand" />~5 min · 20 questions</span>
            </div>
          </div>
          <div className="rl-in rl-in-2 rl-card relative overflow-hidden p-6 sm:p-7">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/3 to-transparent opacity-50" aria-hidden="true" />
            <div className="relative flex items-center justify-between"><div><p className="rl-eyebrow">Votre parcours prévention</p><p className="mt-1 font-display text-xl font-bold text-ink">8 étapes essentielles</p></div><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft"><Target className="h-5 w-5 text-brand" /></span></div>
            <div className="relative mt-6 pl-7"><span className="rl-route absolute bottom-5 left-[10px] top-5 w-[3px]" aria-hidden="true" /><ul className="grid gap-2.5">
              {[{href:"/comprendre-les-tms",label:"Comprendre les TMS",sub:"Zones touchées & signaux",num:1},{href:"/bonnes-pratiques",label:"Les bons gestes",sub:"6 protocoles + échauffement",num:2},{href:"/auto-evaluation",label:"Auto-évaluation",sub:"20 questions · 5 min",num:3},{href:"/signalement",label:"Signaler une douleur",sub:"Garder une trace",num:4}].map((item)=><li key={item.num} className="relative"><span className="absolute -left-7 top-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-paper" aria-hidden="true">{item.num}</span><Link href={item.href} className="group flex items-center justify-between gap-3 rounded-2xl bg-paper/50 px-4 py-3 transition-colors hover:bg-brand-mist"><span><span className="block font-display text-[15px] font-semibold text-ink">{item.label}</span><span className="block text-[12.5px] text-ink-soft">{item.sub}</span></span><ChevronRight className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" /></Link></li>)}
            </ul></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6"><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{stats.map((s)=><div key={s.label} className="rl-card p-5 sm:p-6"><p className="flex items-baseline gap-1.5"><span className="font-display text-4xl font-extrabold text-brand md:text-5xl">{s.value}</span><span className="text-sm font-semibold text-ink-soft">{s.label}</span></p><p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{s.desc}</p></div>)}</div></section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20"><div className="rl-card-tint relative overflow-hidden p-7 sm:p-12"><Quote className="pointer-events-none absolute -right-4 -top-6 h-28 w-28 text-brand/10" aria-hidden="true" /><p className="rl-eyebrow">Le mot du dirigeant</p><blockquote className="relative mt-5 max-w-3xl"><p className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">« Dans un centre de bronzage et d&apos;onglerie, notre santé est notre premier outil de travail. J&apos;ai créé cet espace pour que chacune puisse garder les bons réflexes, prévenir les douleurs et s&apos;épanouir dans son métier. »</p><p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">Vous y trouverez des repères concrets, une routine d&apos;échauffement et toutes les bonnes pratiques pour vous protéger au quotidien. Quelques minutes suffisent : prendre soin de soi, c&apos;est ce qui permet de tenir la distance.</p></blockquote><div className="mt-7 flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-paper">BS</span><span><span className="block font-display font-bold text-ink">Black Sun Villetaneuse</span><span className="block text-sm text-ink-soft">Centre de bronzage & onglerie</span></span></div></div></section>
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-20"><div className="max-w-2xl"><p className="rl-eyebrow">Notre activité face aux TMS</p><h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">Un métier exigeant, une démarche structurée</h2><p className="mt-4 text-base leading-relaxed text-ink-soft">Chez <strong className="font-semibold text-ink">Black Sun Villetaneuse</strong>, les activités de bronzage et d&apos;onglerie exposent à des contraintes physiques spécifiques : gestes de précision, postures prolongées, nettoyage répétitif des cabines. Les TMS sont la première cause de maladie professionnelle en France — préserver sa santé, c&apos;est ce qui permet de durer.</p></div><ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{demarche.map((item)=><li key={item.num} className="rl-card rl-lift p-6"><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand"><item.icon className="h-5 w-5" /></span><span className="rl-chip">{item.num}</span></div><h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.desc}</p></li>)}<li className="rl-card-ink flex flex-col justify-between p-6"><div><p className="rl-eyebrow !text-ink/60">Prête à démarrer ?</p><p className="mt-3 font-display text-xl font-bold leading-snug text-paper">5 minutes pour évaluer votre exposition.</p></div><Link href="/auto-evaluation" className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-paper px-5 py-3 text-sm font-semibold text-brand transition-transform hover:-translate-y-0.5">Lancer l&apos;auto-évaluation<ChevronRight className="h-4 w-4" /></Link></li></ul></section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24"><p className="rl-eyebrow">Explorer l&apos;espace prévention</p><h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">Par où commencer ?</h2><div className="relative mt-8 pl-9 sm:pl-11"><span className="rl-route absolute bottom-7 left-[14px] top-7 w-[3px] sm:left-[18px]" aria-hidden="true" /><ul className="grid gap-4">{exploration.map((item,i)=><li key={item.href} className="relative"><span className="absolute -left-9 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-xs font-bold text-paper shadow-[0_4px_10px_-3px_rgba(200,150,46,0.5)] sm:-left-11" aria-hidden="true">{item.num}</span><Link href={item.href} className="rl-card rl-lift group flex items-center justify-between gap-4 p-5 sm:p-6"><span className="font-display text-lg font-semibold text-ink sm:text-xl">{item.label}</span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-brand"><ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" /></span></Link></li>)}</ul></div></section>
    </>
  );
}