import { Award, Heart, UtensilsCrossed } from 'lucide-react'
import chefImg from '../assets/foto/foto-15.webp'
import salaImg from '../assets/foto/foto-3.webp'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="section-padding bg-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
            La nostra storia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Chi Siamo
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text */}
          <div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Il Nuovo Guscio nasce dall'esperienza di <span className="text-white font-medium">Michele Foresti</span>,
              che dopo anni con "Il Guscio" a Lovere ha portato la sua passione per il pesce di mare a Pisogne.
              Il ristorante si trova in un ex monastero nel cuore del centro storico, arredato in modo sobrio
              ed elegante, con un'atmosfera cordiale e intima.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Michele è il suo punto di forza: accoglie personalmente ogni tavolo, descrive ogni piatto
              nel dettaglio, racconta provenienza e caratteristiche del pesce. In cucina lo chef
              <span className="text-white font-medium"> Osvaldo Longo</span>. Il team è composto da ragazzi
              giovani ma molto professionali.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              La filosofia è chiara: <span className="text-gold-400 font-medium">la materia prima è il cavallo di battaglia</span>.
              Il menu è interamente dedicato al pesce di mare, con proposte mediterranee e ricette
              della tradizione sarda.
            </p>

            <div className="flex items-center gap-3 text-gold-400">
              <Award className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">
                Segnalato dalla Guida dell'Accademia Italiana della Cucina
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={chefImg}
              alt="Chef con piatto di pesce"
              className="w-full rounded-2xl shadow-2xl shadow-black/40 object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-6 bg-dark-900 border border-white/10 rounded-xl p-5 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Chef Osvaldo Longo</p>
                  <p className="text-white/50 text-xs">Cucina mediterranea e sarda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <UtensilsCrossed className="w-6 h-6" />,
              title: 'Materia prima',
              description: 'Solo pesce di mare freschissimo, selezionato ogni giorno con cura. La qualità è il nostro primo impegno.',
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: 'Accoglienza personale',
              description: 'Michele accoglie ogni tavolo personalmente, raccontando ogni piatto con passione e competenza.',
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: 'Tradizione e innovazione',
              description: 'Ricette della tradizione mediterranea e sarda, interpretate con creatività e rispetto per gli ingredienti.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-dark-900/50 border border-white/5 rounded-2xl p-8 hover:border-gold-400/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 mb-5">
                {item.icon}
              </div>
              <h3 className="text-white font-serif text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
