import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprendre les TMS — Black Sun Villetaneuse",
  description: "Définition, causes, symptômes et facteurs de risque des TMS dans le secteur de l'esthétique et du bronzage.",
};

export default function ComprendreTMSPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-gold mb-2">Comprendre les TMS</h1>
      <p className="text-cream-muted/70 mb-12">Troubles Musculo-Squelettiques : définition, causes et prévention</p>
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-cream mb-4">Qu&apos;est-ce qu&apos;un TMS ?</h2>
          <div className="bg-black-card border border-black-border rounded-xl p-6">
            <p className="text-cream-muted/90 leading-relaxed">Les Troubles Musculo-Squelettiques (TMS) regroupent un ensemble de pathologies affectant les muscles, tendons, nerfs, articulations et ligaments. Ils touchent principalement les membres supérieurs, le dos et les membres inférieurs. Les TMS sont la première cause de maladies professionnelles reconnues en France, représentant plus de 87 % des maladies professionnelles indemnisées (Assurance Maladie).</p>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-cream mb-4">Les causes principales</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Gestes répétitifs", desc: "Mouvements identiques à cadence élevée : manucure, nettoyage des cabines." },
              { title: "Postures contraignantes", desc: "Maintien prolongé de positions inconfortables : buste penché, bras en élévation." },
              { title: "Efforts excessifs", desc: "Manutention de charges, port de cartons, pression excessive des doigts." },
              { title: "Stress et rythme", desc: "Tension musculaire liée au stress, enchaînement des clients sans pause." },
            ].map((item) => (
              <div key={item.title} className="bg-black-card border border-black-border rounded-xl p-5">
                <h3 className="font-semibold text-gold mb-2">{item.title}</h3>
                <p className="text-cream-muted/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-cream mb-4">Reconnaître les signaux d&apos;alerte</h2>
          <div className="bg-black-card border border-black-border rounded-xl p-6">
            <ul className="space-y-3 text-cream-muted/90">
              {["Douleurs persistantes dans le bas du dos, cervicales ou poignets","Fourmillements ou engourdissements dans les mains","Raideurs articulaires au réveil","Perte de force ou difficulté à saisir de petits objets","Lourdeur excessive dans les jambes en fin de journée"].map((s, i) => (
                <li key={i} className="flex gap-3"><span className="text-gold font-bold shrink-0">▸</span><span><strong className="text-cream">{s.split(" ")[0]}</strong> {s.split(" ").slice(1).join(" ")}</span></li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-warm/10 border border-warm/20 rounded-lg">
              <p className="text-sm text-cream-muted/80">⚠️ <strong className="text-warm">Ne jamais ignorer ces signaux.</strong> Un TMS pris en charge précocement se guérit dans la majorité des cas. Signalez toute douleur persistante à votre responsable.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-cream mb-4">Focus : les TMS dans l&apos;esthétique et le bronzage</h2>
          <div className="bg-black-card border border-black-border rounded-xl p-6">
            <p className="text-cream-muted/90 leading-relaxed mb-4">Le secteur de l&apos;esthétique et des centres de bronzage présente des facteurs de risque spécifiques. Selon l&apos;INRS, les professionnels sont particulièrement exposés aux TMS du poignet, de la main et du rachis cervical.</p>
            <div className="grid gap-3 sm:grid-cols-3 mt-4">
              {[{pct:"60%",txt:"des esthéticiennes déclarent des douleurs aux cervicales"},{pct:"45%",txt:"souffrent de douleurs aux poignets et aux mains"},{pct:"1er",txt:"rang des TMS parmi les maladies professionnelles"}].map((s) => (
                <div key={s.pct} className="text-center p-4 bg-black-sun/50 rounded-lg"><div className="text-2xl font-bold text-gold mb-1">{s.pct}</div><div className="text-xs text-cream-muted/70">{s.txt}</div></div>
              ))}
            </div>
            <p className="text-xs text-cream-muted/40 mt-4">Sources : INRS, Assurance Maladie — Risques professionnels, 2024.</p>
          </div>
        </section>
      </div>
    </div>
  );
}