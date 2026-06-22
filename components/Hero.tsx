export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-stone-900 overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #d97706 0%, transparent 50%)",
        }}
      />

      {/* Placeholder image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          MINOO{" "}
          <span className="text-amber-400">FOOD</span>
        </h1>

        <div className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Fast Food • Pizza • Frites Maison
        </div>

        <p className="text-xl md:text-2xl text-stone-300 mb-3 font-light">
          Frais, savoureux, rapide.
        </p>
        <p className="text-stone-400 mb-10 max-w-lg mx-auto">
          Des produits frais, un chef souriant et des frites maison qui font revenir.
          Toulouse vous accueille chaque jour dès 11h30.
        </p>

        {/* Rating badge */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-bold">4,7</span>
          <span className="text-stone-400 text-sm">/ 5 • 53 avis Google</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Nous trouver
          </a>
          <a
            href="tel:0662302554"
            className="border-2 border-amber-500/60 hover:border-amber-400 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
          >
            06 62 30 25 54
          </a>
        </div>

        {/* Hours badge */}
        <div className="mt-12 inline-flex items-center gap-2 text-stone-400 text-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Ouvert tous les jours · 11h30 – 23h00
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-500 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
