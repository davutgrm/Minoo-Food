import Image from "next/image";

const stats = [
  { value: "4,7★", label: "Note Google" },
  { value: "53", label: "Avis clients" },
  { value: "€1–10", label: "Par personne" },
  { value: "5–7 min", label: "Délai moyen" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden">
              <Image
                src="/image/exterior_day.png"
                alt="Entrée de MINOO FOOD, Toulouse"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-stone-900 rounded-2xl p-5 shadow-xl">
              <p className="font-black text-3xl">4,7</p>
              <div className="flex gap-0.5 my-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-semibold">sur Google</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Notre histoire
            </p>
            <h2 className="text-4xl font-black text-stone-900 mb-6 leading-tight">
              La bonne cuisine,<br />sans chichis
            </h2>
            <p className="text-stone-600 mb-5 leading-relaxed">
              Chez MINOO FOOD, on croit qu'un bon repas ne doit pas coûter cher ni attendre longtemps.
              Installés au cœur de Toulouse, nous préparons chaque jour des plats généreux avec des produits
              frais — et nos frites maison sont déjà devenues la légende du quartier.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Un chef souriant, un service rapide, et une ambiance conviviale pour tout le monde :
              familles, travailleurs du midi ou soirée entre amis. Bienvenue chez nous.
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {[
                "Produits frais, préparés le jour même",
                "Frites maison — notre spécialité",
                "Accueil chaleureux, terrasse couverte",
                "Adapté aux familles et enfants",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-stone-700">
                  <span className="w-5 h-5 bg-amber-500/15 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-amber-600 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-stone-50 rounded-2xl">
              <p className="text-3xl font-black text-amber-500 mb-1">{s.value}</p>
              <p className="text-stone-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
