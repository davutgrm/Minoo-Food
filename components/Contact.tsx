const hours = [
  { day: "Lundi", time: "11h30 – 23h00" },
  { day: "Mardi", time: "11h30 – 23h00" },
  { day: "Mercredi", time: "11h30 – 23h00" },
  { day: "Jeudi", time: "11h30 – 23h00" },
  { day: "Vendredi", time: "11h30 – 23h00" },
  { day: "Samedi", time: "11h30 – 23h00" },
  { day: "Dimanche", time: "11h30 – 23h00" },
];

function isOpenNow() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const totalMins = h * 60 + m;
  return totalMins >= 11 * 60 + 30 && totalMins < 23 * 60;
}

export default function Contact() {
  const open = isOpenNow();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Venez nous voir
          </p>
          <h2 className="text-4xl font-black text-stone-900 mb-4">
            Contact & Horaires
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-stone-900 mb-1">Adresse</p>
                <p className="text-stone-600">34 Chemin de Papus</p>
                <p className="text-stone-600">31100 Toulouse, France</p>
                <a
                  href="https://maps.google.com/?q=34+Chemin+de+Papus+31100+Toulouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-500 text-sm font-medium mt-1 inline-block"
                >
                  Itinéraire →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-stone-900 mb-1">Téléphone</p>
                <a href="tel:0662302554" className="text-stone-600 hover:text-amber-600 transition-colors text-lg font-medium">
                  06 62 30 25 54
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <p className="font-bold text-stone-900">Horaires</p>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      open
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {open ? "Ouvert maintenant" : "Fermé"}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-stone-500">{h.day}</span>
                      <span className="text-stone-800 font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg min-h-[400px]">
            <iframe
              title="MINOO FOOD sur Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.123!2d1.4069!3d43.5875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb7e0f8c5e2b%3A0x0!2s34+Chemin+de+Papus%2C+31100+Toulouse!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
