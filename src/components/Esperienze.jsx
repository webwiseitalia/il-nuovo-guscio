import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import bgImg from '../assets/foto/foto-11.webp'
import detailImg from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Esperienze() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const bgRef = useRef()
  const itemsRef = useRef([])
  const detailRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      })

      const split = new SplitType(titleRef.current, { types: 'lines,words' })
      split.lines.forEach(line => {
        const w = document.createElement('div')
        w.style.overflow = 'hidden'
        line.parentNode.insertBefore(w, line)
        w.appendChild(line)
      })
      gsap.fromTo(split.lines,
        { yPercent: 100 },
        {
          yPercent: 0, duration: 0.7, stagger: 0.05, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
        }
      )

      itemsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60, rotate: i % 2 === 0 ? -2 : 2 },
          {
            opacity: 1, x: 0, rotate: 0,
            duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        )
      })

      gsap.fromTo(detailRef.current,
        { clipPath: 'inset(0 0 100% 0)', scale: 1.1 },
        {
          clipPath: 'inset(0 0 0% 0)', scale: 1,
          duration: 0.8, ease: 'power3.inOut',
          scrollTrigger: { trigger: detailRef.current, start: 'top 75%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const experiences = [
    { title: 'Cene romantiche', sub: "Anniversari e serate a due in un'atmosfera intima" },
    { title: 'Compleanni', sub: 'Festeggia i tuoi momenti importanti con un menu su misura' },
    { title: 'Sala privata', sub: 'Uno spazio esclusivo per le tue cene riservate' },
    { title: 'Serate esclusive', sub: "Michele guida personalmente l'esperienza" },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <div ref={bgRef} className="w-full h-full">
          <img src={bgImg} alt="Atmosfera del ristorante" title="Il Nuovo Guscio - Atmosfera" loading="lazy" width={1200} height={800} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-dark-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900" />
      </div>

      <div className="relative z-10 px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-7">
            <span className="f-label block mb-6">Occasioni speciali</span>

            <h2 ref={titleRef} className="f-display-sm text-dark-50 mb-16 md:mb-24">
              Per i tuoi momenti
              <br />
              <span className="f-accent">indimenticabili</span>
            </h2>

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <div
                  key={exp.title}
                  ref={el => itemsRef.current[i] = el}
                  className="border-t border-white/[0.06] py-8 md:py-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12"
                  style={{ opacity: 0 }}
                >
                  <span className="font-display text-2xl md:text-3xl text-dark-50" style={{ fontWeight: 300, minWidth: '220px' }}>
                    {exp.title}
                  </span>
                  <p className="f-body">{exp.sub}</p>
                </div>
              ))}
            </div>

            <a
              href="tel:+393338967957"
              className="inline-block mt-12 f-label border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-900 px-7 py-3 rounded-full transition-all duration-300"
            >
              Organizza la tua serata
            </a>
          </div>

          <div className="col-span-10 col-start-2 md:col-span-4 md:col-start-9 mt-12 md:mt-32">
            <div
              ref={detailRef}
              className="aspect-[3/4] overflow-hidden"
              style={{ clipPath: 'inset(0 0 100% 0)' }}
            >
              <img src={detailImg} alt="Vino e atmosfera" title="Serata speciale al Nuovo Guscio" loading="lazy" width={600} height={800} className="w-full h-full object-cover" />
            </div>
            <p className="f-label mt-4 c-muted">L'atmosfera di una serata speciale</p>
          </div>
        </div>
      </div>
    </section>
  )
}
