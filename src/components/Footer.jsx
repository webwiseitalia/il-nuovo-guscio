import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import logo from '../assets/logo.webp'

const quickLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Prenota', href: 'tel:+393338967957' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Il Nuovo Guscio" className="w-10 h-10 rounded-full" />
              <span className="font-serif text-xl font-semibold text-white">Il Nuovo Guscio</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Ristorante di pesce di mare nel cuore di Pisogne.
              Cucina mediterranea e tradizione sarda.
            </p>
            <a
              href="https://facebook.com/nuovoguscio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-gold-400 transition-colors text-sm"
            >
              <Facebook className="w-4 h-4" />
              Seguici su Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Link rapidi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://maps.google.com/?q=Piazza+Vescovo+Corna+Pellegrini+12b+Pisogne+BS" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-white/50 hover:text-gold-400 transition-colors text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Piazza Vescovo Corna Pellegrini, 12b<br />25055 Pisogne (BS)</span>
                </a>
              </li>
              <li>
                <a href="tel:+393338967957" className="flex items-center gap-2 text-white/50 hover:text-gold-400 transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  +39 333 896 7957
                </a>
              </li>
              <li>
                <a href="mailto:ilnuovoguscioem@libero.it" className="flex items-center gap-2 text-white/50 hover:text-gold-400 transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  ilnuovoguscioem@libero.it
                </a>
              </li>
            </ul>
            <div className="mt-4 text-white/30 text-xs">
              <p>Inverno: gio–sab cena, dom pranzo e cena</p>
              <p>Estate: tutti i giorni tranne mercoledì</p>
            </div>
          </div>
        </div>

        {/* CTA finale */}
        <div className="text-center mb-10">
          <a
            href="tel:+393338967957"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-950 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            <Phone className="w-4 h-4" />
            Prenota il tuo tavolo
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 text-center text-white/30 text-xs space-y-1">
          <p>© {new Date().getFullYear()} Il Nuovo Guscio — Pisogne (BS)</p>
          <p>P.IVA: IT04333680983</p>
        </div>
      </div>
    </footer>
  )
}
