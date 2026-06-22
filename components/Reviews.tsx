const reviews = [
  {
    name: "Sandrine M.",
    date: "Il y a 2 semaines",
    text: "Produits frais, chef souriant et prix très raisonnables. Je reviens régulièrement depuis des mois — c'est ma cantine du midi !",
    rating: 5,
  },
  {
    name: "Latifa B.",
    date: "Il y a 1 mois",
    text: "Les frites maison sont à tomber par terre. Service rapide, prêt en 5 minutes, et le chef vous accueille avec le sourire. On a même eu du thé pendant l'attente !",
    rating: 5,
  },
  {
    name: "Marc T.",
    date: "Il y a 3 semaines",
    text: "Super rapport qualité-prix. Pour moins de 10€ vous avez un repas complet et savoureux. La terrasse couverte est appréciable aussi.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= count ? "text-amber-400" : "text-stone-200"} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-stone-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Ce qu'ils disent
          </p>
          <h2 className="text-4xl font-black text-white mb-4">
            Avis de nos clients
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Stars count={5} />
            <span className="text-white font-bold text-xl">4,7</span>
            <span className="text-stone-400">sur 53 avis Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-stone-800 rounded-3xl p-6 flex flex-col gap-4">
              <Stars count={r.rating} />
              <p className="text-stone-300 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-stone-700">
                <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center text-stone-900 font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-stone-500 text-xs">{r.date}</p>
                </div>
                {/* Google G */}
                <svg className="w-5 h-5 ml-auto text-stone-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
