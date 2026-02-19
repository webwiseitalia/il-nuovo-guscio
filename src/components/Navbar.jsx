import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Menu', href: '#menu' },
  { label: 'La Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Il Nuovo Guscio" className="h-12 w-12 rounded-full" />
            <div className="hidden sm:block">
              <span className="text-lg font-serif font-semibold text-white">
                Il Nuovo Guscio
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+393338967957"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-950 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Prenota
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/80 hover:text-white p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-950/98 backdrop-blur-lg border-t border-white/5 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-white/70 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-300 text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+393338967957"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 bg-gold-500 text-dark-950 py-3 rounded-full text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            Prenota il tuo tavolo
          </a>
        </div>
      </div>
    </nav>
  )
}
