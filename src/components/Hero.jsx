import { ChevronDown } from 'lucide-react'
import heroImg from '../assets/foto/foto-21.webp'
import logo from '../assets/logo.webp'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sala ristorante Il Nuovo Guscio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Il Nuovo Guscio Logo"
          className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-8 rounded-full shadow-2xl shadow-black/50"
        />

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Solo pesce di mare,
          <br />
          <span className="text-gradient-gold">nel cuore di Pisogne</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ristorante di pesce in un ex monastero storico affacciato su Piazza Vescovo Corna Pellegrini.
          Materia prima di altissima qualità, cucina mediterranea e tradizione sarda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+393338967957"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-950 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Prenota il tuo tavolo
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-gold-400/50 text-white hover:text-gold-400 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Scopri il menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#chi-siamo" className="text-white/40 hover:text-gold-400 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}
