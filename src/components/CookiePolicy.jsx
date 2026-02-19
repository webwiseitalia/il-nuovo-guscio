import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../constants/siteData'

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="px-5 md:px-10 lg:px-16 pt-8 pb-4">
        <Link to="/" className="f-label inline-flex items-center gap-2 hover:text-gold-400 transition-colors" style={{ color: '#e8e4df' }}>
          ← Torna alla Home
        </Link>
      </div>

      <div className="px-5 md:px-10 lg:px-16 pb-8">
        <h1 className="font-display text-4xl md:text-5xl text-dark-50 mb-2" style={{ fontWeight: 300 }}>Cookie Policy</h1>
        <p className="f-body c-muted">Informativa sull'utilizzo dei cookie</p>
      </div>

      <div className="px-5 md:px-10 lg:px-16 pb-20">
        <div className="max-w-3xl mx-auto bg-[#111115] rounded-lg p-6 md:p-10 lg:p-14">
          <p className="f-body c-muted text-xs mb-8">Ultimo aggiornamento: 19/02/2026</p>

          <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-5 mb-10">
            <p className="text-green-400/90 font-medium mb-2">✅ Sito Privacy-Friendly</p>
            <p className="f-body text-sm">
              Questo sito web utilizza <strong className="text-dark-50">solo cookie tecnici</strong> necessari al funzionamento. <strong className="text-dark-50">Non utilizziamo cookie
              di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per
              la navigazione.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>1. Cosa sono i Cookie</h2>
            <p className="f-body">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
              quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
              informazioni sulle tue preferenze o azioni passate.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>2. Tipologie di Cookie</h2>

            <h3 className="text-dark-50 font-medium mb-3">2.1 Cookie Tecnici</h3>
            <p className="f-body mb-3">
              Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
              questi cookie, il sito potrebbe non funzionare correttamente.
            </p>
            <div className="border-l-2 border-green-400/40 pl-4 py-2 mb-6">
              <p className="f-body text-sm"><strong className="text-green-400/80">Cookie tecnici utilizzati su questo sito:</strong></p>
              <ul className="f-body text-sm space-y-1 mt-2 ml-4">
                <li>• Cookie di navigazione e di sessione</li>
                <li>• Cookie per memorizzare le preferenze dell'interfaccia</li>
              </ul>
              <p className="f-body text-xs mt-2 c-muted">Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.</p>
            </div>

            <h3 className="text-dark-50 font-medium mb-3">2.2 Cookie Analitici</h3>
            <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4 mb-6">
              <p className="text-red-400/80 font-medium text-sm mb-1">⊘ NON UTILIZZATI</p>
              <p className="f-body text-sm">Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>
            </div>

            <h3 className="text-dark-50 font-medium mb-3">2.3 Cookie di Profilazione</h3>
            <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4 mb-6">
              <p className="text-red-400/80 font-medium text-sm mb-1">⊘ NON UTILIZZATI</p>
              <p className="f-body text-sm">Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>
            </div>

            <h3 className="text-dark-50 font-medium mb-3">2.4 Cookie di Terze Parti</h3>
            <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4">
              <p className="text-red-400/80 font-medium text-sm mb-1">⊘ NON UTILIZZATI</p>
              <p className="f-body text-sm">Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>3. Cookie Utilizzati su Questo Sito</h2>
            <p className="f-body mb-4">Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.1]">
                    <th className="text-left py-3 px-3 text-dark-50 font-medium">Nome Cookie</th>
                    <th className="text-left py-3 px-3 text-dark-50 font-medium">Tipologia</th>
                    <th className="text-left py-3 px-3 text-dark-50 font-medium">Finalità</th>
                    <th className="text-left py-3 px-3 text-dark-50 font-medium">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/[0.04]">
                    <td className="py-3 px-3 f-body text-xs">il-nuovo-guscio-cookie-consent</td>
                    <td className="py-3 px-3"><span className="text-xs bg-green-500/10 text-green-400/80 px-2 py-1 rounded">Tecnico</span></td>
                    <td className="py-3 px-3 f-body text-xs">Memorizza lo stato di consenso/rifiuto del banner cookie</td>
                    <td className="py-3 px-3 f-body text-xs">365 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-l-2 border-gold-400/40 pl-4 py-2 mt-4">
              <p className="f-body text-sm">
                <strong className="text-gold-400/80">Nota importante:</strong> I cookie tecnici come "il-nuovo-guscio-cookie-consent" sono essenziali per il funzionamento del sito e non richiedono il
                consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>4. Come Gestire i Cookie</h2>
            <p className="f-body mb-4">
              Anche se i cookie tecnici come "il-nuovo-guscio-cookie-consent" non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
              del tuo browser.
            </p>
            <h3 className="text-dark-50 font-medium mb-3">Disabilitare i cookie tramite il browser:</h3>
            <ul className="f-body space-y-2 ml-4 mb-4">
              <li>• <strong className="text-dark-50">Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li>• <strong className="text-dark-50">Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li>• <strong className="text-dark-50">Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li>• <strong className="text-dark-50">Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci ed elimina cookie</li>
            </ul>
            <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-lg p-4">
              <p className="f-body text-sm">
                <strong className="text-yellow-400/80">Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
                qualità dell'esperienza di navigazione.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>5. Link a Siti Esterni</h2>
            <p className="f-body">
              Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
              il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>6. Aggiornamenti della Cookie Policy</h2>
            <p className="f-body mb-3">
              Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
              attraverso un avviso pubblicato su questa pagina.
            </p>
            <p className="f-body">
              Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>7. Base Normativa</h2>
            <p className="f-body mb-3">Questa Cookie Policy è redatta in conformità a:</p>
            <ul className="f-body space-y-1 ml-4">
              <li>• Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>• Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>• Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>• Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>8. Contatti</h2>
            <p className="f-body mb-4">Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
            <div className="border border-white/[0.06] rounded-lg p-5">
              <p className="text-dark-50 font-medium mb-2">{SITE.name}</p>
              <p className="f-body text-sm">{SITE.address.full}</p>
              <p className="f-body text-sm">Email: <a href={`mailto:${SITE.email}`} className="text-gold-400 hover:underline">{SITE.email}</a></p>
              <p className="f-body text-sm">Tel: <a href={`tel:${SITE.phoneRaw}`} className="text-gold-400 hover:underline">{SITE.phone}</a></p>
            </div>
          </section>

          <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-6 text-center mb-6">
            <p className="text-green-400/90 font-medium text-lg mb-1">✅ Zero Tracciamento</p>
            <p className="f-body text-sm">Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/" className="flex-1 f-label border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-900 px-7 py-3 rounded-full transition-all duration-500 text-center">
            Torna alla Home
          </Link>
          <Link to="/privacy-policy" className="flex-1 f-label border border-white/[0.08] text-dark-200 hover:text-gold-400 hover:border-gold-400/30 px-7 py-3 rounded-full transition-all duration-500 text-center">
            Leggi la Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
