const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Sur place",
    description:
      "Installez-vous confortablement dans notre salle ou sur la terrasse couverte. Ambiance chaleureuse, idéale en famille ou entre amis.",
    badge: "Terrasse couverte",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "À emporter",
    description:
      "Commandez et repartez en 5–7 minutes. Parfait pour la pause déjeuner ou un repas rapide le soir.",
    badge: "Prêt en 5–7 min",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Livraison",
    description:
      "Recevez vos plats directement chez vous. Commandez en ligne via Google ou appelez-nous directement.",
    badge: "Disponible",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Catering",
    description:
      "Événements, réunions, fêtes de famille — nous préparons des formules sur mesure pour vos groupes.",
    badge: "Sur devis",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Comment on vous sert
          </p>
          <h2 className="text-4xl font-black text-stone-900 mb-4">
            Nos services
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Que vous mangiez sur place, que vous commandiez à emporter ou que vous préfériez
            la livraison, MINOO FOOD s'adapte à votre rythme.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {s.badge}
              </span>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Payment info */}
        <div className="mt-12 bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-center gap-8 shadow-sm">
          <div className="flex items-center gap-3 text-stone-600">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="font-medium">Carte bancaire</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-stone-200" />
          <div className="flex items-center gap-3 text-stone-600">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Paiement sans contact (NFC)</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-stone-200" />
          <div className="flex items-center gap-3 text-stone-600">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-medium">Espèces</span>
          </div>
        </div>
      </div>
    </section>
  );
}
