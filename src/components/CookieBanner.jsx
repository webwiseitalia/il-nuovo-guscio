import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const COOKIE_KEY = 'il-nuovo-guscio-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <div className="fixed inset-0 z-[998] backdrop-blur-md bg-dark-900/60" />
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6">
        <div className="max-w-3xl mx-auto bg-[#111115] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="mb-4">
            <p className="font-display text-xl text-dark-50 mb-2" style={{ fontWeight: 400 }}>
              Questo sito utilizza i cookie
            </p>
            <p className="f-body text-sm">
              Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Non utilizziamo cookie di profilazione o tracciamento.
              Per maggiori informazioni consulta la nostra{' '}
              <Link to="/cookie-policy" className="text-gold-400 hover:underline">Cookie Policy</Link>
              {' '}e la{' '}
              <Link to="/privacy-policy" className="text-gold-400 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 f-label border border-white/20 text-dark-50 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 text-center"
            >
              Accetta
            </button>
            <button
              onClick={handleReject}
              className="flex-1 f-label border border-white/20 text-dark-50 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 text-center"
            >
              Rifiuta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
