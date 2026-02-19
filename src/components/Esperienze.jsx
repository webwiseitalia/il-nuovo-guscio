import { Heart, Gift, Wine, Sparkles } from 'lucide-react'
import bgImg from '../assets/foto/foto-11.webp'

const experiences = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Cene romantiche',
    description: 'Anniversari e serate a due in un\'atmosfera intima e raffinata',
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Compleanni e ricorrenze',
    description: 'Festeggia i tuoi momenti importanti con un menu personalizzato',
  },
  {
    icon: <Wine className="w-6 h-6" />,
    title: 'Sala privata',
    description: 'Uno spazio esclusivo per le tue cene riservate e i tuoi eventi',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Serate esclusive',
    description: 'Michele guida personalmente l\'esperienza, consigliando piatti e abbinamenti',
  },
]

export default function Esperienze() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImg} alt="Atmosfera Il Nuovo Guscio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-950/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
            Occasioni speciali
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Per i tuoi momenti indimenticabili
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Possibilità di menu personalizzati per rendere ogni occasione unica e speciale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-gold-400/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 mx-auto mb-5">
                {exp.icon}
              </div>
              <h3 className="text-white font-serif text-lg font-semibold mb-3">{exp.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+393338967957"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-950 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            Organizza la tua serata speciale
          </a>
        </div>
      </div>
    </section>
  )
}
