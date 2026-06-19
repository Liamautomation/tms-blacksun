import { Activity, AlertTriangle, Brain, TrendingUp, ChevronRight } from "lucide-react";

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

export default function ComprendreTMSPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
      <div className="max-w-3xl mb-14"><p className="rl-eyebrow">Troubles Musculo-Squelettiques</p><h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">Comprendre les TMS</h1><p className="mt-4 text-lg leading-relaxed text-ink-soft">Définition, causes et prévention des troubles qui touchent les muscles, les tendons et les articulations.</p></div>
      <section className="mb-14 rl-card-tint p-8 lg:p-12"><h2 className="font-display text-2xl font-bold text-ink mb-4">Qu&apos;est-ce qu&apos;un TMS ?</h2><p className="text-ink-soft leading-relaxed max-w-3xl">Les Troubles Musculo-Squelettiques (TMS) regroupent un ensemble de pathologies affectant les muscles, les tendons, les nerfs, les articulations et les ligaments. Ils touchent principalement les membres supérieurs, le dos et les membres inférieurs. Les TMS représentent la première cause de maladies professionnelles reconnues en France.</p></section>
      <section className="mb-14"><h2 className="font-display text-2xl font-bold text-ink mb-8">Les causes principales</h2><div className="grid gap-5 sm:grid-cols-2">{causes.map((item)=><div key={item.title} className="rl-card rl-lift p-6"><item.icon className="h-6 w-6 text-brand mb-3" /><h3 className="font-display font-semibold text-ink text-lg mb-2">{item.title}</h3><p className="text-ink-soft text-sm leading-relaxed">{item.desc}</p></div>)}</div></section>
      <section className="mb-14"><h2 className="font-display text-2xl font-bold text-ink mb-8">Reconnaître les signaux d&apos;alerte</h2><div className="rl-card p-8 lg:p-10"><ul className="space-y-4">{signaux.map((s)=><li key={s} className="flex items-start gap-3 text-ink-soft"><span className="text-brand mt-0.5 shrink-0">▸</span>{s}</li>)}</ul><div className="mt-8 p-5 bg-brand-soft border border-brand/10 rounded-2xl"><p className="text-sm text-ink-soft"><strong className="text-brand font-semibold">Ne jamais ignorer ces signaux.</strong> Un TMS pris en charge précocement se guérit dans la majorité des cas.</p></div></div></section>
      <section><h2 className="font-display text-2xl font-bold text-ink mb-8">Focus : les TMS dans l&apos;esthétique et le bronzage</h2><div className="rl-card-tint p-8 lg:p-10"><p className="text-ink-soft leading-relaxed mb-8">Le secteur de l&apos;esthétique et des centres de bronzage présente des facteurs de risque spécifiques. Les professionnels sont particulièrement exposés aux TMS du poignet, de la main et du rachis cervical en raison de la nature même de leurs activités.</p><div className="grid gap-4 sm:grid-cols-3">{[{value:"Membres supérieurs",detail:"Poignets, mains et épaules sont les zones les plus sollicitées."},{value:"Rachis cervical",detail:"Les postures tête vers l'avant exposent fortement la nuque."},{value:"Lombaires",detail:"La station assise prolongée sollicite le bas du dos."}].map((s)=><div key={s.value} className="text-center p-5 bg-paper/50 rounded-2xl border border-border-light"><p className="font-display font-bold text-brand text-lg mb-2">{s.value}</p><p className="text-ink-soft text-xs leading-relaxed">{s.detail}</p></div>)}</div><p className="text-ink-muted text-xs mt-6">Sources : INRS, Assurance Maladie — Risques professionnels.</p></div></section>
    </div>
  );
}