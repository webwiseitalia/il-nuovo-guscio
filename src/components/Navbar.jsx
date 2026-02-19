import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import logo from '../assets/logo.webp'

const links = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-dark-900/80 backdrop-blur-xl' : ''
        }`}
        style={{ opacity: 0 }}
      >
        <div className="flex items-center justify-between px-5 md:px-10 lg:px-16 h-20 md:h-24">
          <a href="#" className="flex items-center gap-3 relative z-50">
            <img src={logo} alt="Il Nuovo Guscio" className="h-10 w-10 md:h-11 md:w-11 rounded-full" />
            <span className="hidden md:block font-display text-xl tracking-tight text-dark-50">
              Il Nuovo Guscio
            </span>
          </a>

          <div className="hidden lg:flex items-center">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="f-label text-dark-200 hover:text-gold-400 transition-colors duration-500"
                style={{ marginLeft: i === 0 ? 0 : `${2 + (i % 3) * 0.8}rem` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+393338967957"
              className="ml-12 f-label border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-900 px-6 py-2.5 rounded-full transition-all duration-500"
            >
              Prenota
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              className="block h-px bg-dark-50 origin-right"
              animate={{ width: 28, rotate: open ? -45 : 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.span
              className="block h-px bg-dark-50"
              animate={{ width: open ? 0 : 18, opacity: open ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px bg-dark-50 origin-right"
              animate={{ width: open ? 28 : 22, rotate: open ? 45 : 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark-900 flex flex-col justify-end pb-20 px-8"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-display text-5xl sm:text-6xl text-dark-50 mb-2 hover:text-gold-400 transition-colors"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                style={{ fontWeight: 300 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+393338967957"
              onClick={() => setOpen(false)}
              className="mt-10 f-label c-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              +39 333 896 7957
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
