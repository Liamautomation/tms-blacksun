import { Metadata } from "next";
import { Sparkles, Shield, Heart, Star } from "lucide-react";

export const metadata: Metadata = { title: "Accueil — Black Sun Villetaneuse", description: "Prévention des Troubles Musculo-Squelettiques chez Black Sun Villetaneuse. La santé, le confort et la qualité de service au cœur de notre activité." };

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-black-sun" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-warm/8 blur-[100px] rounded-full" />
        <div className="mx-auto max-w-5xl px-4 py-28 lg:py-40 relative text-center">
          <p className="text-gold/80 text-sm font-medium uppercase tracking-[0.2em] mb-6">Notre priorité, votre santé</p>
          <h1 className="font-display text-5xl lg:text-7xl font-extrabold tracking-tight text-cream mb-6 leading-[1.05]">Black Sun <span className="text-gold">Villetaneuse</span></h1>
          <p className="text-lg lg:text-xl text-cream-muted/70 max-w-2xl mx-auto leading-relaxed">Préserver votre santé au quotidien. Un espace dédié à la prévention des troubles musculo-squelettiques, conçu pour celles et ceux qui font vivre Black Sun.</p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#demarche" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-black-sun font-semibold text-sm hover:bg-gold-light transition-colors">Découvrir notre démarche</a>
            <a href="/comprendre-les-tms" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-black-border-light text-cream-muted/80 text-sm hover:border-gold/30 hover:text-cream transition-colors">Comprendre les TMS</a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-20 lg:py-28">
        <div className="relative bg-black-card border border-black-border-light rounded-2xl p-8 lg:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 blur-[60px] rounded-full" />
          <div className="relative">
            <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-4">Le mot du dirigeant</p>
            <div className="space-y-5 text-cream-muted/80 leading-relaxed">
              <p>Chez Black Sun Villetaneuse, votre bien-être est au centre de nos préoccupations. Notre activité de centre de bronzage et d&apos;onglerie repose sur votre expertise et votre savoir-faire au quotidien.</p>
              <p>Les gestes de précision, les postures prolongées et la manutention de produits font partie intégrante de votre métier — ils ne doivent pas devenir une source de douleur. Ce site a été conçu pour vous accompagner dans la prévention des Troubles Musculo-Squelettiques.</p>
              <p>Vous y trouverez des protocoles clairs, des exercices adaptés et des ressources pour préserver votre santé sur le long terme. Prenez le temps de le parcourir : chaque page est une étape vers un quotidien professionnel plus confortable et plus serein.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="demarche" className="mx-auto max-w-5xl px-4 pb-28">
        <p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-2">Centre de bronzage & onglerie</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-cream mb-12">Notre activité et les risques TMS</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-black-card border border-black-border-light rounded-2xl p-6 lg:p-8">
            <div className="flex items-start gap-4 mb-4"><div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><Sparkles className="h-5 w-5 text-gold" /></div><div><h3 className="font-display text-lg font-semibold text-cream">Centre de bronzage & Onglerie</h3><p className="text-cream-muted/60 text-sm mt-1">Black Sun Villetaneuse</p></div></div>
            <p className="text-cream-muted/70 leading-relaxed text-sm">Black Sun Villetaneuse propose des prestations de bronzage en cabine et des soins d&apos;onglerie. Ces activités exposent à des contraintes spécifiques : gestes de précision minutieux, postures assises prolongées, mouvements répétitifs lors du nettoyage des cabines et manutention régulière de produits.</p>
          </div>
          <div className="bg-black-card border border-black-border-light rounded-2xl p-6 lg:p-8">
            <div className="w-10 h-10 rounded-xl bg-warm/10 flex items-center justify-center mb-4"><Shield className="h-5 w-5 text-warm" /></div>
            <h3 className="font-display text-lg font-semibold text-cream mb-4">Risques identifiés</h3>
            <ul className="space-y-3">{["Syndrome du canal carpien","Tensions cervicales","Lombalgies","Tendinites des épaules","Fatigue veineuse"].map((r)=><li key={r} className="flex items-start gap-2 text-sm text-cream-muted/70"><span className="text-warm mt-0.5 shrink-0">·</span>{r}</li>)}</ul>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{icon:Star,title:"Organisation",desc:"Aménagement optimal de l'espace de travail pour limiter torsions et extensions."},{icon:Heart,title:"Équipements",desc:"Outils ergonomiques : limes, pinceaux, manches télescopiques."},{icon:Shield,title:"Postures",desc:"Alignement du dos et des cervicales lors des soins et du travail sur écran."},{icon:Sparkles,title:"Récupération",desc:"Micro-pauses régulières et exercices d'échauffement ciblés."}].map((item)=><div key={item.title} className="group bg-black-card border border-black-border-light rounded-xl p-5 hover:border-gold/20 hover:bg-gold-subtle transition-all duration-300"><item.icon className="h-5 w-5 text-gold/60 group-hover:text-gold transition-colors mb-3" /><h4 className="font-display font-semibold text-cream text-sm mb-1.5">{item.title}</h4><p className="text-cream-muted/50 text-xs leading-relaxed">{item.desc}</p></div>)}
        </div>
      </section>
    </>
  );
}