import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    text: 'Pesce freschissimo e di altissima qualità, paragonabile se non superiore a quello che si trova al mare. Michele è eccezionale nel raccontare ogni piatto.',
    author: 'Marco R.',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Location stupenda nell\'ex monastero. Personale giovane ma molto preparato e sorridente. Il crudo è assolutamente imperdibile, esperienza da ristorante stellato.',
    author: 'Laura B.',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    text: 'Abbiamo festeggiato il nostro anniversario qui. Michele ci ha guidato in un percorso di degustazione straordinario. Prezzi onesti per la qualità offerta.',
    author: 'Giovanni P.',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'La fregola sarda e i paccheri all\'astice sono da non perdere. La cantina è curatissima. Un piccolo gioiello nascosto nel centro di Pisogne.',
    author: 'Alessia M.',
    source: 'TripAdvisor',
    rating: 5,
  },
]

const badges = [
  { label: 'Google', score: '4.7', icon: '⭐' },
  { label: 'TripAdvisor', score: '4.3/5', icon: '🏆' },
  { label: 'Sluurpy', score: '86/100', icon: '🍽️' },
  { label: 'Accademia Italiana della Cucina', score: 'Segnalato', icon: '🏅' },
]

export default function Recensioni() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
            Cosa dicono di noi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Recensioni
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-dark-950/50 border border-white/5 rounded-xl p-5 text-center hover:border-gold-400/20 transition-all duration-500"
            >
              <span className="text-2xl mb-2 block">{badge.icon}</span>
              <p className="text-gold-400 font-serif text-2xl font-bold">{badge.score}</p>
              <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{badge.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-dark-950/50 border border-white/5 rounded-2xl p-8 hover:border-gold-400/20 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-gold-400/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-sm">{review.author}</span>
                <span className="text-white/40 text-xs uppercase tracking-wider">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
