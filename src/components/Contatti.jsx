import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const infoRef = useRef()
  const orariRef = useRef()
  const mapRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(titleRef.current, { types: 'lines' })
      split.lines.forEach(line => {
        const w = document.createElement('div')
        w.style.overflow = 'hidden'
        line.parentNode.insertBefore(w, line)
        w.appendChild(line)
      })
      gsap.fromTo(split.lines,
        { yPercent: 110 },
        {
          yPercent: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
        }
      )

      if (infoRef.current) {
        gsap.fromTo(infoRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out',
            scrollTrigger: { trigger: infoRef.current, start: 'top 85%' }
          }
        )
      }

      if (orariRef.current) {
        gsap.fromTo(orariRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { trigger: orariRef.current, start: 'top 85%' }
          }
        )
      }

      gsap.fromTo(mapRef.current,
        { clipPath: 'inset(0 0 0 100%)' },
        {
          clipPath: 'inset(0 0 0 0%)',
          duration: 0.8, ease: 'power3.inOut',
          scrollTrigger: { trigger: mapRef.current, start: 'top 75%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contatti" className="relative py-24 md:py-40 overflow-hidden" style={{ backgroundColor: '#0d0d10' }}>
      <div className="px-5 md:px-10 lg:px-16">
        <span className="f-label block mb-6">Vieni a trovarci</span>
        <h2 ref={titleRef} className="f-display-sm text-dark-50 max-w-[70vw] md:max-w-[45vw] mb-20 md:mb-32">
          Prenota la tua
          <br />
          <span className="f-accent">esperienza</span>
        </h2>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5 md:col-start-1">
            <div ref={infoRef} className="space-y-8">
              <a href="https://maps.google.com/?q=Piazza+Vescovo+Corna+Pellegrini+12b+Pisogne+BS" target="_blank" rel="noopener noreferrer" className="block group">
                <span className="f-label block mb-2">Indirizzo</span>
                <p className="font-display text-xl md:text-2xl text-dark-50 group-hover:text-gold-400 transition-colors" style={{ fontWeight: 300 }}>
                  Piazza Vescovo Corna Pellegrini, 12b
                </p>
                <p className="f-body">25055 Pisogne (BS)</p>
              </a>

              <a href="tel:+393338967957" className="block group">
                <span className="f-label block mb-2">Telefono & WhatsApp</span>
                <p className="font-display text-xl md:text-2xl text-dark-50 group-hover:text-gold-400 transition-colors" style={{ fontWeight: 300 }}>
                  +39 333 896 7957
                </p>
              </a>

              <a href="mailto:ilnuovoguscioem@libero.it" className="block group">
                <span className="f-label block mb-2">Email</span>
                <p className="font-display text-xl md:text-2xl text-dark-50 group-hover:text-gold-400 transition-colors" style={{ fontWeight: 300 }}>
                  ilnuovoguscioem@libero.it
                </p>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {['Carte / Apple Pay', 'Accessibile', 'Pet friendly', 'Parcheggio vicino'].map(s => (
                <span key={s} className="f-label border border-white/[0.06] px-4 py-2 rounded-full text-dark-300">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="tel:+393338967957" className="f-label border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-900 px-7 py-3 rounded-full transition-all duration-300 text-center">
                Chiama per prenotare
              </a>
              <a href="https://ilnuovoguscio.eatbu.com" target="_blank" rel="noopener noreferrer" className="f-label border border-white/[0.08] text-dark-200 hover:text-gold-400 hover:border-gold-400/30 px-7 py-3 rounded-full transition-all duration-300 text-center">
                Prenota online
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div ref={orariRef} className="mb-0" style={{ opacity: 0 }}>
              <span className="f-label block mb-6">Orari di apertura</span>
              <div className="border-t border-white/[0.06]">
                <div className="py-6 border-b border-white/[0.06]">
                  <p className="f-label mb-4" style={{ color: 'rgba(190,155,95,0.5)' }}>Periodo invernale</p>
                  <div className="space-y-2">
                    <div className="flex justify-between f-body text-sm"><span>Lunedì – Mercoledì</span><span className="c-muted">Chiuso</span></div>
                    <div className="flex justify-between f-body text-sm"><span>Giovedì – Sabato</span><span className="text-dark-50">19:00 – 23:00</span></div>
                    <div className="flex justify-between f-body text-sm"><span>Domenica</span><span className="text-dark-50">12:00 – 14:45 / 19:00 – 23:00</span></div>
                  </div>
                </div>
                <div className="py-6">
                  <p className="f-label mb-4" style={{ color: 'rgba(190,155,95,0.5)' }}>Periodo estivo</p>
                  <div className="space-y-2">
                    <div className="flex justify-between f-body text-sm"><span>Mercoledì</span><span className="c-muted">Chiuso</span></div>
                    <div className="flex justify-between f-body text-sm"><span>Lunedì – Sabato</span><span className="text-dark-50">19:00 – 23:00</span></div>
                    <div className="flex justify-between f-body text-sm"><span>Sab e Dom pranzo</span><span className="text-dark-50">12:00 – 14:45</span></div>
                    <div className="flex justify-between f-body text-sm"><span>Domenica cena</span><span className="text-dark-50">19:00 – 23:00</span></div>
                  </div>
                </div>
              </div>
              <p className="f-body text-xs mt-4 c-muted">Ferie: settembre</p>
            </div>
          </div>
        </div>

        <div
          ref={mapRef}
          className="mt-16 md:mt-24 aspect-[16/7] overflow-hidden rounded-sm"
          style={{ clipPath: 'inset(0 0 0 100%)' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.5!2d10.1085!3d45.8048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e0c1f5f1111%3A0x1234567890abcdef!2sPiazza%20Vescovo%20Corna%20Pellegrini%2C%2012b%2C%2025055%20Pisogne%20BS!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Il Nuovo Guscio"
          />
        </div>
      </div>
    </section>
  )
}
