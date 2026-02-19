import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    text: 'Pesce freschissimo e di altissima qualità, paragonabile se non superiore a quello che si trova al mare.',
    author: 'Marco R.',
    source: 'Google',
  },
  {
    text: "Location stupenda nell'ex monastero. Il crudo è assolutamente imperdibile, esperienza da ristorante stellato.",
    author: 'Laura B.',
    source: 'TripAdvisor',
  },
  {
    text: 'Michele ci ha guidato in un percorso di degustazione straordinario. Prezzi onesti per la qualità offerta.',
    author: 'Giovanni P.',
    source: 'Google',
  },
  {
    text: "La fregola sarda e i paccheri all'astice sono da non perdere. Un piccolo gioiello nascosto nel centro di Pisogne.",
    author: 'Alessia M.',
    source: 'TripAdvisor',
  },
]

const badges = [
  { label: 'Google', score: '4.7' },
  { label: 'TripAdvisor', score: '4.3' },
  { label: 'Sluurpy', score: '86' },
  { label: 'Accademia', score: '—' },
]

export default function Recensioni() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const quoteRefs = useRef([])
  const badgesRef = useRef()
  const bigQuoteRef = useRef()

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

      gsap.fromTo(bigQuoteRef.current,
        { opacity: 0, scale: 0.8, rotate: -10 },
        {
          opacity: 0.04, scale: 1, rotate: 0,
          duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: bigQuoteRef.current, start: 'top 85%' }
        }
      )

      quoteRefs.current.forEach((el, i) => {
        if (!el) return
        const angles = [-3, 2, -1, 3]
        gsap.fromTo(el,
          { opacity: 0, y: 60, rotate: angles[i] },
          {
            opacity: 1, y: 0, rotate: 0,
            duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
            delay: i * 0.06,
          }
        )
      })

      if (badgesRef.current) {
        gsap.fromTo(badgesRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out',
            scrollTrigger: { trigger: badgesRef.current, start: 'top 90%' }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden bg-dark-900">
      <div className="px-5 md:px-10 lg:px-16">
        <div ref={bigQuoteRef} className="absolute top-20 right-[5vw] font-display text-[30vw] text-dark-50 leading-none select-none pointer-events-none" style={{ opacity: 0 }}>
          &ldquo;
        </div>

        <span className="f-label block mb-6">Cosa dicono di noi</span>
        <h2 ref={titleRef} className="f-display-sm text-dark-50 max-w-[60vw] md:max-w-[40vw] mb-8">
          Voci dai
          <br />
          nostri ospiti
        </h2>

        <div ref={badgesRef} className="flex flex-wrap gap-6 md:gap-10 mb-20 md:mb-32 border-b border-white/[0.06] pb-10">
          {badges.map((b) => (
            <div key={b.label}>
              <span className="font-display text-3xl md:text-4xl text-gold-400/60 block" style={{ fontWeight: 300 }}>{b.score}</span>
              <span className="f-label text-dark-300">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-y-16 md:gap-y-24">
          {reviews.map((review, i) => {
            const positions = [
              'col-span-12 md:col-span-7 md:col-start-1',
              'col-span-12 md:col-span-6 md:col-start-6',
              'col-span-12 md:col-span-7 md:col-start-2',
              'col-span-12 md:col-span-5 md:col-start-7',
            ]
            return (
              <div
                key={i}
                ref={el => quoteRefs.current[i] = el}
                className={positions[i]}
                style={{ opacity: 0 }}
              >
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-dark-50 leading-snug mb-6" style={{ fontWeight: 300 }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gold-400/30" />
                  <span className="text-dark-200 text-sm">{review.author}</span>
                  <span className="c-muted text-xs">{review.source}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
