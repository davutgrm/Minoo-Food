export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-amber-400 font-black text-2xl mb-3">MINOO FOOD</p>
            <p className="text-sm leading-relaxed">
              Fast food, pizza et frites maison à Toulouse. Frais, savoureux et rapide — chaque jour dès 11h30.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold mb-3">Navigation</p>
            <ul className="space-y-2 text-sm">
              {[
                ["Accueil", "#hero"],
                ["À propos", "#about"],
                ["Services", "#services"],
                ["Avis", "#reviews"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-amber-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>34 Chemin de Papus</li>
              <li>31100 Toulouse</li>
              <li>
                <a href="tel:0662302554" className="hover:text-amber-400 transition-colors">
                  06 62 30 25 54
                </a>
              </li>
              <li className="text-stone-500">Tous les jours · 11h30–23h00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>© {year} MINOO FOOD. Tous droits réservés. <span className="text-stone-600">· Site réalisé par Operiqa</span></p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            <span>Toulouse, France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
