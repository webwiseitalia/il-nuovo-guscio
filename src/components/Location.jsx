import { MapPin, Users, Wine, Lock } from 'lucide-react'
import sala1 from '../assets/foto/foto-21.webp'
import sala2 from '../assets/foto/foto-3.webp'
import cantina from '../assets/foto/foto-22.webp'
import esterno from '../assets/foto/foto-12.webp'

export default function Location() {
  return (
    <section id="location" className="section-padding bg-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
            Un luogo unico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            La Location
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Un ex monastero nel cuore del centro storico di Pisogne, parte della storica Villa Damioli.
            Le mura medievali della piazza creano un contesto unico e suggestivo.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl aspect-[16/10]">
            <img src={sala1} alt="Sala principale con volte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-6 font-serif text-lg text-white font-medium">La sala con le volte storiche</p>
          </div>
          <div className="space-y-4">
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={cantina} alt="Cantina dei vini" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 font-serif text-sm text-white font-medium">La cantina</p>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={esterno} alt="Vista esterna del ristorante" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 font-serif text-sm text-white font-medium">La terrazza</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <MapPin className="w-5 h-5" />,
              title: 'Centro storico',
              desc: 'Nel cuore di Pisogne, zona pedonale con parcheggio nelle vicinanze',
            },
            {
              icon: <Users className="w-5 h-5" />,
              title: '50 coperti',
              desc: 'Un ristorante volutamente piccolo dove ogni ospite riceve attenzione personale',
            },
            {
              icon: <Wine className="w-5 h-5" />,
              title: 'Cantina curata',
              desc: 'Selezione ricercata di etichette italiane e internazionali',
            },
            {
              icon: <Lock className="w-5 h-5" />,
              title: 'Sala privata',
              desc: 'Disponibile per cene riservate, eventi e occasioni speciali',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-dark-900/50 border border-white/5 rounded-xl p-6 text-center hover:border-gold-400/20 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
