import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/logo.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef()
  const ctaRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 90%' }
        }
      )
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-dark-900 overflow-hidden">
      <div ref={ctaRef} className="py-24 md:py-40 px-5 md:px-10 lg:px-16 text-center" style={{ opacity: 0 }}>
        <a href="tel:+393338967957" className="group inline-block">
          <span className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-dark-50 group-hover:text-gold-400 transition-colors duration-400 block" style={{ fontWeight: 300, lineHeight: 1 }}>
            Prenota il tuo tavolo
          </span>
          <span className="block mt-4 f-label c-muted group-hover:text-gold-400 transition-colors duration-300">
            +39 333 896 7957
          </span>
        </a>
      </div>

      <div className="border-t border-white/[0.04] px-5 md:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Il Nuovo Guscio" title="Il Nuovo Guscio" loading="lazy" width={32} height={32} className="w-8 h-8 rounded-full" />
              <span className="font-display text-lg text-dark-50" style={{ fontWeight: 400 }}>Il Nuovo Guscio</span>
            </div>
            <p className="f-body text-xs" style={{ color: 'rgba(232,228,223,0.25)' }}>
              Ristorante di pesce di mare
              <br />
              Cucina mediterranea e tradizione sarda
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-6">
            <ul className="space-y-2">
              {['Menu', 'Gallery', 'Contatti'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="f-body text-xs text-dark-300 hover:text-gold-400 transition-colors">{l}</a>
                </li>
              ))}
              <li>
                <a href="https://facebook.com/nuovoguscio" target="_blank" rel="noopener noreferrer" className="f-body text-xs text-dark-300 hover:text-gold-400 transition-colors">Facebook</a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-10">
            <p className="f-body text-xs c-muted">
              Piazza Vescovo Corna Pellegrini, 12b
              <br />
              25055 Pisogne (BS)
            </p>
            <p className="f-body text-xs c-muted mt-3">
              Inverno: gio–dom
              <br />
              Estate: lun–dom tranne mer
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between gap-4">
          <p className="f-body text-xs c-muted">© {new Date().getFullYear()} Il Nuovo Guscio — Pisogne (BS)</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="f-body text-xs c-muted">P.IVA: IT04333680983</p>
            <span className="hidden sm:inline c-muted">|</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="f-body text-xs text-dark-300 hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <span className="c-muted">|</span>
              <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="f-body text-xs text-dark-300 hover:text-gold-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
