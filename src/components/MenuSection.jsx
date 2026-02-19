import { ExternalLink } from 'lucide-react'
import crudiImg from '../assets/foto/foto-2.webp'
import pastaImg from '../assets/foto/foto-6.webp'
import grigliataImg from '../assets/foto/foto-16.webp'
import tartareImg from '../assets/foto/foto-17.webp'
import plateauImg from '../assets/foto/foto-18.webp'
import fritturaImg from '../assets/foto/foto-7.webp'

const categories = [
  {
    name: 'Crudi & Crudité',
    image: crudiImg,
    dishes: [
      'Crudité e plateau de fruits de mer',
      'Ostriche',
      'Tartare di tonno',
      'Catalana',
    ],
  },
  {
    name: 'Primi di Mare',
    image: pastaImg,
    dishes: [
      'Spaghetti di Gragnano ai ricci di mare',
      'Paccheri all\'astice intero',
      'Fregola sarda',
      'Tagliolini al nero di seppia con capesante',
    ],
  },
  {
    name: 'Secondi & Grigliata',
    image: grigliataImg,
    dishes: [
      'Tagliata di tonno alla griglia con pistacchi',
      'Vaporata di scampi, gamberi, cozze e vongole',
      'Scampi e gamberoni alla griglia',
      'Calamaro ripieno su crema di melanzane',
    ],
  },
  {
    name: 'I Signature',
    image: tartareImg,
    dishes: [
      'Fregola nera con brodo e bottarga di dentice',
      'Capesante e crostacei gratinati al mirto',
      'Scialatielli al granchio',
      'Plateau Royale',
    ],
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
            I nostri piatti
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Il Menu
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Il menu è interamente dedicato alla cucina di pesce, con proposte di stampo mediterraneo
            alle quali si aggiungono alcune ricette della tradizione sarda.
          </p>
        </div>

        {/* Hero dishes images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
            <img src={plateauImg} alt="Plateau Royale" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl text-white font-semibold">Plateau Royale</h3>
              <p className="text-white/60 text-sm mt-1">Il nostro piatto più celebre</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
            <img src={fritturaImg} alt="Frittura Reale" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl text-white font-semibold">Frittura Reale</h3>
              <p className="text-white/60 text-sm mt-1">Croccante e leggera</p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-dark-950/50 border border-white/5 rounded-2xl overflow-hidden hover:border-gold-400/20 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-serif text-2xl text-white font-semibold">
                  {cat.name}
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {cat.dishes.map((dish, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="text-gold-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Wine note + CTA */}
        <div className="text-center">
          <p className="text-white/50 italic mb-8">
            La carta dei vini è ricercata, con selezione di etichette italiane e internazionali.
            <br />
            In base al pescato del giorno il menu può subire variazioni.
          </p>
          <a
            href="https://ilnuovoguscio.eatbu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-950 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            <ExternalLink className="w-4 h-4" />
            Vedi il menu completo
          </a>
        </div>
      </div>
    </section>
  )
}
