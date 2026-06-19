"use client";

import { Sparkles, Shield, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerList, StaggerItem, HoverCard, HeroFadeIn } from "@/components/Animated";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gold/5 blur-[140px] rounded-full" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-32 right-1/4 w-[350px] h-[350px] bg-warm/6 blur-[120px] rounded-full" animate={{ y: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-sun" />
        <div className="mx-auto max-w-5xl px-4 py-28 lg:py-40 relative text-center">
          <HeroFadeIn>
            <motion.p className="text-gold/80 text-sm font-medium uppercase tracking-[0.2em] mb-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>Notre priorité, votre santé</motion.p>
            <motion.h1 className="font-display text-5xl lg:text-7xl font-extrabold tracking-tight text-cream mb-6 leading-[1.05]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>Black Sun <span className="text-gold">Villetaneuse</span></motion.h1>
            <motion.p className="text-lg lg:text-xl text-cream-muted/70 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.7 }}>Préserver votre santé au quotidien. Un espace dédié à la prévention des troubles musculo-squelettiques, conçu pour celles et ceux qui font vivre Black Sun.</motion.p>
            <motion.div className="mt-10 flex items-center justify-center gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.5 }}>
              <a href="#demarche" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-black-sun font-semibold text-sm hover:bg-gold-light transition-colors">Découvrir notre démarche</a>
              <a href="/comprendre-les-tms" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-black-border-light text-cream-muted/80 text-sm hover:border-gold/30 hover:text-cream transition-colors">Comprendre les TMS</a>
            </motion.div>
          </HeroFadeIn>
        </div>
      </section>
      <FadeIn>
        <section className="mx-auto max-w-4xl px-4 py-20 lg:py-28">
          <div className="relative bg-black-card border border-black-border-light rounded-2xl p-8 lg:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 blur-[60px] rounded-full" />
            <div className="relative"><p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-4">Le mot du dirigeant</p>
            <div className="space-y-5 text-cream-muted/80 leading-relaxed"><p>Chez Black Sun Villetaneuse, votre bien-être est au centre de nos préoccupations. Notre activité de centre de bronzage et d&apos;onglerie repose sur votre expertise et votre savoir-faire au quotidien.</p><p>Les gestes de précision, les postures prolongées et la manutention de produits font partie intégrante de votre métier — ils ne doivent pas devenir une source de douleur. Ce site a été conçu pour vous accompagner dans la prévention des Troubles Musculo-Squelettiques.</p><p>Vous y trouverez des protocoles clairs, des exercices adaptés et des ressources pour préserver votre santé sur le long terme. Prenez le temps de le parcourir : chaque page est une étape vers un quotidien professionnel plus confortable et plus serein.</p></div></div>
          </div>
        </section>
      </FadeIn>
      <section id="demarche" className="mx-auto max-w-5xl px-4 pb-28">
        <FadeIn><p className="text-gold/60 text-xs font-medium uppercase tracking-[0.15em] mb-2">Centre de bronzage & onglerie</p><h2 className="font-display text-3xl lg:text-4xl font-bold text-cream mb-12">Notre activité et les risques TMS</h2></FadeIn>
        <div className="grid gap-6 lg:grid-cols-3">
          <FadeIn delay={0.1}><div className="lg:col-span-2 bg-black-card border border-black-border-light rounded-2xl p-6 lg:p-8 h-full"><div className="flex items-start gap-4 mb-4"><div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><Sparkles className="h-5 w-5 text-gold" /></div><div><h3 className="font-display text-lg font-semibold text-cream">Centre de bronzage & Onglerie</h3><p className="text-cream-muted/60 text-sm mt-1">Black Sun Villetaneuse</p></div></div><p className="text-cream-muted/70 leading-relaxed text-sm">Black Sun Villetaneuse propose des prestations de bronzage en cabine et des soins d&apos;onglerie. Ces activités exposent à des contraintes spécifiques : gestes de précision minutieux, postures assises prolongées, mouvements répétitifs lors du nettoyage des cabines et manutention régulière de produits.</p></div></FadeIn>
          <FadeIn delay={0.2}><div className="bg-black-card border border-black-border-light rounded-2xl p-6 lg:p-8 h-full"><div className="w-10 h-10 rounded-xl bg-warm/10 flex items-center justify-center mb-4"><Shield className="h-5 w-5 text-warm" /></div><h3 className="font-display text-lg font-semibold text-cream mb-4">Risques identifiés</h3><ul className="space-y-3">{["Syndrome du canal carpien","Tensions cervicales","Lombalgies","Tendinites des épaules","Fatigue veineuse"].map((r)=><li key={r} className="flex items-start gap-2 text-sm text-cream-muted/70"><span className="text-warm mt-0.5 shrink-0">·</span>{r}</li>)}</ul></div></FadeIn>
        </div>
        <StaggerList className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{icon:Star,title:"Organisation",desc:"Aménagement optimal de l'espace de travail pour limiter torsions et extensions."},{icon:Heart,title:"Équipements",desc:"Outils ergonomiques : limes, pinceaux, manches télescopiques."},{icon:Shield,title:"Postures",desc:"Alignement du dos et des cervicales lors des soins et du travail sur écran."},{icon:Sparkles,title:"Récupération",desc:"Micro-pauses régulières et exercices d'échauffement ciblés."}].map((item)=><StaggerItem key={item.title}><HoverCard className="bg-black-card border border-black-border-light rounded-xl p-5 transition-colors duration-300 hover:border-gold/20 hover:bg-gold-subtle"><item.icon className="h-5 w-5 text-gold/60 group-hover:text-gold transition-colors mb-3" /><h4 className="font-display font-semibold text-cream text-sm mb-1.5">{item.title}</h4><p className="text-cream-muted/50 text-xs leading-relaxed">{item.desc}</p></HoverCard></StaggerItem>)}
        </StaggerList>
      </section>
    </>
  );
}