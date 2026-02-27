import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../constants/siteData'

export default function PrivacyPolicy() {
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
        <h1 className="font-display text-4xl md:text-5xl text-dark-50 mb-2" style={{ fontWeight: 300 }}>Privacy Policy</h1>
        <p className="f-body c-muted">Informativa sul trattamento dei dati personali</p>
      </div>

      <div className="px-5 md:px-10 lg:px-16 pb-20">
        <div className="max-w-3xl mx-auto bg-[#111115] rounded-lg p-6 md:p-10 lg:p-14">
          <p className="f-body c-muted text-xs mb-8">Ultimo aggiornamento: 19/02/2026</p>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>1. Titolare del Trattamento</h2>
            <p className="f-body mb-4">Il Titolare del trattamento dei dati personali è:</p>
            <div className="border border-white/[0.06] rounded-lg p-5 mb-4">
              <p className="text-dark-50 font-medium mb-2">{SITE.name}</p>
              <p className="f-body text-sm">📍 {SITE.address.full}</p>
              <p className="f-body text-sm">📞 {SITE.phone}</p>
              <p className="f-body text-sm">✉️ {SITE.email}</p>
              <p className="f-body text-sm">P.IVA: {SITE.piva}</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>2. Dati Raccolti e Finalità del Trattamento</h2>
            <h3 className="text-dark-50 font-medium mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
            <p className="f-body mb-3">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
            <ul className="f-body space-y-1 mb-4 ml-4">
              <li>• <strong className="text-dark-50">Nome e Cognome</strong> - per identificare l'interessato</li>
              <li>• <strong className="text-dark-50">Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li>• <strong className="text-dark-50">Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
            </ul>
            <div className="border-l-2 border-gold-400/40 pl-4 py-2 mb-4">
              <p className="f-body text-sm"><strong className="text-gold-400/80">Finalità.</strong> I dati vengono raccolti esclusivamente per:</p>
              <ul className="f-body text-sm space-y-1 mt-2 ml-4">
                <li>• Rispondere alle richieste di prenotazione</li>
                <li>• Fornire informazioni sui nostri servizi</li>
                <li>• Organizzare sopralluoghi e consultazioni</li>
                <li>• Gestire la relazione commerciale</li>
              </ul>
            </div>

            <h3 className="text-dark-50 font-medium mb-3 mt-6">2.2 Base giuridica del trattamento</h3>
            <p className="f-body">
              Il trattamento è basato sul <strong className="text-dark-50">consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
              l'invio del modulo di contatto, e sulla <strong className="text-dark-50">esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>3. Modalità di Trattamento</h2>
            <p className="f-body mb-3">
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
              finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="f-body">
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
              autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>4. Conservazione dei Dati</h2>
            <p className="f-body mb-3">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
              relazioni commerciali conseguenti.
            </p>
            <ul className="f-body space-y-1 ml-4">
              <li>• <strong className="text-dark-50">Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li>• <strong className="text-dark-50">Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li>• <strong className="text-dark-50">Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>5. Comunicazione e Diffusione dei Dati</h2>
            <p className="f-body mb-3">I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
            <ul className="f-body space-y-1 ml-4 mb-4">
              <li>• Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>• Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>• Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>
            <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4">
              <p className="text-red-400/80 font-medium text-sm mb-2">I tuoi dati NON verranno MAI:</p>
              <ul className="f-body text-sm space-y-1 ml-4">
                <li>• Venduti a terze parti</li>
                <li>• Condivisi con società di marketing</li>
                <li>• Utilizzati per invio di newsletter non richieste</li>
                <li>• Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>6. Diritti dell'Interessato</h2>
            <p className="f-body mb-3">In qualità di interessato, hai il diritto di:</p>
            <ul className="f-body space-y-1 ml-4 mb-4">
              <li>• <strong className="text-dark-50">Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li>• <strong className="text-dark-50">Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li>• <strong className="text-dark-50">Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li>• <strong className="text-dark-50">Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li>• <strong className="text-dark-50">Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li>• <strong className="text-dark-50">Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li>• <strong className="text-dark-50">Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>
            <div className="border-l-2 border-gold-400/40 pl-4 py-2">
              <p className="f-body text-sm"><strong className="text-gold-400/80">Come esercitare i tuoi diritti:</strong></p>
              <p className="f-body text-sm mt-1">
                Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${SITE.email}`} className="text-gold-400 hover:underline">{SITE.email}</a> o
                tramite raccomandata A/R all'indirizzo: {SITE.address.full}.
              </p>
              <p className="f-body text-sm mt-1">Risponderemo entro <strong className="text-dark-50">30 giorni</strong> dalla ricezione della richiesta.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>7. Diritto di Reclamo</h2>
            <p className="f-body mb-3">
              Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
              trattamento dei tuoi dati violi il GDPR.
            </p>
            <div className="border border-white/[0.06] rounded-lg p-4">
              <p className="text-dark-50 font-medium text-sm mb-2">Garante per la protezione dei dati personali:</p>
              <p className="f-body text-sm">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">www.garanteprivacy.it</a></p>
              <p className="f-body text-sm">Email: garante@gpdp.it</p>
              <p className="f-body text-sm">PEC: protocollo@pec.gpdp.it</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="f-body">
              Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
              consulta la nostra <Link to="/cookie-policy" className="text-gold-400 hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>9. Modifiche alla Privacy Policy</h2>
            <p className="f-body">
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
              saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
              consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-dark-50 mb-4" style={{ fontWeight: 400 }}>10. Contatti</h2>
            <p className="f-body mb-4">Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
            <div className="border border-white/[0.06] rounded-lg p-5">
              <p className="f-body text-sm">✉️ <a href={`mailto:${SITE.email}`} className="text-gold-400 hover:underline">{SITE.email}</a></p>
              <p className="f-body text-sm">📞 <a href={`tel:${SITE.phoneRaw}`} className="text-gold-400 hover:underline">{SITE.phone}</a></p>
            </div>
          </section>

          <div className="border-t border-white/[0.06] pt-6 mt-10 text-center">
            <p className="f-body text-xs c-muted">
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/" className="flex-1 f-label border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-900 px-7 py-3 rounded-full transition-all duration-500 text-center">
            Torna alla Home
          </Link>
          <Link to="/cookie-policy" className="flex-1 f-label border border-white/[0.08] text-dark-200 hover:text-gold-400 hover:border-gold-400/30 px-7 py-3 rounded-full transition-all duration-500 text-center">
            Leggi la Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
