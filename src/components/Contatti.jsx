import { MapPin, Phone, Mail, Clock, CreditCard, Accessibility, Dog, Car } from 'lucide-react'

export default function Contatti() {
  return (
    <section id="contatti" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
            Vieni a trovarci
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Contatti e Prenotazioni
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            {/* Contact info */}
            <div className="space-y-5">
              <a href="https://maps.google.com/?q=Piazza+Vescovo+Corna+Pellegrini+12b+Pisogne+BS" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-gold-400 transition-colors">Piazza Vescovo Corna Pellegrini, 12b</p>
                  <p className="text-white/50 text-sm">25055 Pisogne (BS)</p>
                </div>
              </a>

              <a href="tel:+393338967957" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-gold-400 transition-colors">+39 333 896 7957</p>
                  <p className="text-white/50 text-sm">Telefono e WhatsApp</p>
                </div>
              </a>

              <a href="mailto:ilnuovoguscioem@libero.it" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-white font-medium group-hover:text-gold-400 transition-colors">ilnuovoguscioem@libero.it</p>
              </a>
            </div>

            {/* Orari */}
            <div className="bg-dark-950/50 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-gold-400" />
                <h3 className="text-white font-serif text-lg font-semibold">Orari di apertura</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gold-400 text-sm font-medium mb-2 uppercase tracking-wider">Periodo invernale</p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Lunedì – Mercoledì</span>
                      <span className="text-white/40">Chiuso</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Giovedì – Sabato</span>
                      <span className="text-white">19:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Domenica</span>
                      <span className="text-white">12:00 – 14:45 / 19:00 – 23:00</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <p className="text-gold-400 text-sm font-medium mb-2 uppercase tracking-wider">Periodo estivo</p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Mercoledì</span>
                      <span className="text-white/40">Chiuso</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Lunedì – Sabato</span>
                      <span className="text-white">19:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Sab e Dom pranzo</span>
                      <span className="text-white">12:00 – 14:45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Domenica</span>
                      <span className="text-white">12:00 – 14:45 / 19:00 – 23:00</span>
                    </div>
                  </div>
                </div>

                <p className="text-white/30 text-xs pt-2">Ferie: settembre</p>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <CreditCard className="w-3.5 h-3.5" />, label: 'Carte, Apple Pay, Contanti' },
                { icon: <Accessibility className="w-3.5 h-3.5" />, label: 'Accessibile' },
                { icon: <Dog className="w-3.5 h-3.5" />, label: 'Pet friendly' },
                { icon: <Car className="w-3.5 h-3.5" />, label: 'Parcheggio vicino' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-dark-950/50 border border-white/5 rounded-full px-4 py-2 text-xs text-white/50"
                >
                  <span className="text-gold-400">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+393338967957"
                className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-950 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-gold-500/20"
              >
                <Phone className="w-4 h-4" />
                Chiama per prenotare
              </a>
              <a
                href="https://ilnuovoguscio.eatbu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-gold-400/50 text-white hover:text-gold-400 px-6 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Prenota online
              </a>
            </div>
          </div>

          {/* Right - Map */}
          <div className="rounded-2xl overflow-hidden border border-white/5 h-[500px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.5!2d10.1085!3d45.8048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e0c1f5f1111%3A0x1234567890abcdef!2sPiazza%20Vescovo%20Corna%20Pellegrini%2C%2012b%2C%2025055%20Pisogne%20BS!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Il Nuovo Guscio"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
