import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import MenuSection from './components/MenuSection'
import Location from './components/Location'
import Esperienze from './components/Esperienze'
import Recensioni from './components/Recensioni'
import Gallery from './components/Gallery'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookiePolicy from './components/CookiePolicy'
import CookieBanner from './components/CookieBanner'

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="grain">
      <Navbar />
      <Hero />
      <ChiSiamo />
      <MenuSection />
      <Location />
      <Esperienze />
      <Recensioni />
      <Gallery />
      <Contatti />
      <Footer />

      {/* Mobile call CTA */}
      <a
        href="tel:+393338967957"
        className="fixed bottom-6 right-6 z-40 lg:hidden f-label border border-white/30 bg-dark-900/90 backdrop-blur-md px-5 py-3 rounded-full transition-all duration-500"
        style={{ color: '#e8e4df' }}
      >
        Prenota
      </a>
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </>
  )
}

export default App
