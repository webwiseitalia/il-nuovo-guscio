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
import { Phone } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
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

      {/* Mobile fixed call button */}
      <a
        href="tel:+393338967957"
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-950 px-5 py-3.5 rounded-full font-semibold shadow-lg shadow-gold-500/30 transition-all duration-300"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm">Chiama</span>
      </a>
    </div>
  )
}

export default App
