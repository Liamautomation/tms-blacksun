import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil — Black Sun Villetaneuse",
  description:
    "Prévention des Troubles Musculo-Squelettiques chez Black Sun Villetaneuse. La santé, le confort et la qualité de service au cœur de notre activité.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-warm/5" />
        <div className="mx-auto max-w-4xl px-4 py-24 lg:py-32 relative">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="/images/logo.png"
              alt="Black Sun Villetaneuse"
              className="h-20 w-auto mb-4"
            />
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-cream">
              Black Sun{" "}
              <span className="text-gold">Villetaneuse</span>
            </h1>
            <p className="text-lg text-cream-muted/90 max-w-2xl">
              La santé, le confort et la qualité de service au cœur de notre activité.
            </p>
            <p className="text-sm text-gold font-medium uppercase tracking-widest">
              Notre priorité, votre santé
            </p>
          </div>
        </div>
      </section>

      {/* Message du dirigeant */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
        <div className="bg-black-card border border-black-border rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gold mb-6">
            Le mot du dirigeant
          </h2>
          <div className="prose prose-invert prose-gold max-w-none text-cream-muted/90 leading-relaxed space-y-4">
            <p>
              Chez Black Sun Villetaneuse, votre bien-être est au centre de nos
              préoccupations. Notre activité de centre de bronzage et d&apos;onglerie
              repose sur votre expertise et votre savoir-faire au quotidien. Les gestes
              de précision, les postures prolongées et la manutention de produits font
              partie intégrante de votre métier — ils ne doivent pas devenir une source
              de douleur.
            </p>
            <p>
              Ce site a été conçu pour vous accompagner dans la prévention des Troubles
              Musculo-Squelettiques. Vous y trouverez des protocoles clairs, des
              exercices adaptés et des ressources pour préserver votre santé sur le long
              terme. Prenez le temps de le parcourir : chaque page est une étape vers
              un quotidien professionnel plus confortable et plus serein.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation activité & risques TMS */}
      <section className="mx-auto max-w-4xl px-4 pb-24">
        <h2 className="text-2xl lg:text-3xl font-bold text-gold mb-8">
          Notre activité et les risques TMS
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-black-card border border-black-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-cream mb-3">
              Centre de bronzage & Onglerie
            </h3>
            <p className="text-cream-muted/80 leading-relaxed">
              Black Sun Villetaneuse propose des prestations de bronzage en cabine et
              des soins d&apos;onglerie. Ces activités, bien que non physiquement
              intenses, exposent à des contraintes spécifiques : gestes de précision
              minutieux, postures assises prolongées, mouvements répétitifs lors du
              nettoyage des cabines et manutention régulière de produits.
            </p>
          </div>

          <div className="bg-black-card border border-black-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-cream mb-3">
              Risques TMS identifiés
            </h3>
            <ul className="text-cream-muted/80 space-y-2 list-disc list-inside leading-relaxed">
              <li>Syndrome du canal carpien (gestes répétitifs des mains)</li>
              <li>Tensions cervicales (posture tête vers l&apos;avant)</li>
              <li>Lombalgies (posture assise prolongée, manutention)</li>
              <li>Tendinites des épaules (bras en élévation prolongée)</li>
              <li>Fatigue veineuse des membres inférieurs (station debout)</li>
            </ul>
          </div>
        </div>

        {/* Démarche de prévention */}
        <div className="mt-8 bg-black-card border border-black-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-cream mb-4">
            Notre démarche de prévention
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Organisation",
                desc: "Aménagement optimal de l'espace de travail pour limiter torsions et extensions inutiles.",
              },
              {
                title: "Équipements",
                desc: "Outils ergonomiques adaptés : limes, pinceaux, manches télescopiques pour l'entretien.",
              },
              {
                title: "Postures",
                desc: "Alignement du dos et des cervicales lors des soins esthétiques et du travail sur écran.",
              },
              {
                title: "Récupération",
                desc: "Micro-pauses régulières et exercices d'échauffement pour relâcher les tensions.",
              },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-black-sun/50 border border-black-border/50">
                <h4 className="font-semibold text-gold text-sm mb-1.5">{item.title}</h4>
                <p className="text-cream-muted/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}