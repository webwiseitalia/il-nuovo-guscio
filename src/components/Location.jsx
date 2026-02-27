import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import sala1 from '../assets/foto/foto-21.webp'
import cantina from '../assets/foto/foto-22.webp'
import esterno from '../assets/foto/foto-12.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const marqueeRef = useRef()
  const img1Ref = useRef()
  const img2Ref = useRef()
  const img3Ref = useRef()
  const featuresRef = useRef()

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
        { yPercent: 120 },
        {
          yPercent: 0, duration: 0.75, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
        }
      )

      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: 'none',
      })

      const imgs = [img1Ref, img2Ref, img3Ref]
      imgs.forEach((ref, i) => {
        gsap.fromTo(ref.current,
          { clipPath: 'inset(100% 0 0 0)', scale: 1.15 },
          {
            clipPath: 'inset(0% 0 0 0)', scale: 1,
            duration: 0.85, ease: 'power3.inOut',
            scrollTrigger: { trigger: ref.current, start: 'top 80%' },
            delay: i * 0.12,
          }
        )
        const imgEl = ref.current?.querySelector('img')
        if (imgEl) {
          gsap.to(imgEl, {
            yPercent: -8,
            scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 }
          })
        }
      })

      if (featuresRef.current) {
        gsap.fromTo(featuresRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power2.out',
            scrollTrigger: { trigger: featuresRef.current, start: 'top 85%' }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="location" className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#0d0d10' }}>
      <div className="overflow-hidden mb-16 md:mb-24 opacity-[0.04]">
        <div ref={marqueeRef} className="whitespace-nowrap flex">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display text-[12vw] md:text-[10vw] text-dark-50 mx-8" style={{ fontWeight: 300 }}>
              Ex Monastero · Villa Damioli · Pisogne · Centro Storico ·{' '}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 md:px-10 lg:px-16">
        <div className="mb-6">
          <span className="f-label">Un luogo unico</span>
        </div>
        <h2 ref={titleRef} className="f-display-sm text-dark-50 max-w-[70vw] md:max-w-[45vw] mb-20 md:mb-32">
          Un ex monastero
          <br />
          nel cuore della storia
        </h2>

        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-8">
            <div ref={img1Ref} className="aspect-[16/9] overflow-hidden" style={{ clipPath: 'inset(100% 0 0 0)' }}>
              <img src={sala1} alt="La sala con le volte storiche" title="Le volte del monastero" loading="lazy" width={1200} height={675} className="w-full h-full object-cover will-change-transform" />
            </div>
            <p className="f-label mt-3 c-muted">Le volte del monastero</p>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4 mt-4 md:mt-20">
            <div ref={img2Ref} className="aspect-[4/3] sm:aspect-[3/4] overflow-hidden" style={{ clipPath: 'inset(100% 0 0 0)' }}>
              <img src={cantina} alt="La cantina dei vini" title="La cantina" loading="lazy" width={600} height={800} className="w-full h-full object-cover will-change-transform" />
            </div>
            <p className="f-label mt-3 c-muted">La cantina</p>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-5 md:col-start-3 mt-4 md:-mt-16">
            <div ref={img3Ref} className="aspect-[16/9] sm:aspect-[5/3] overflow-hidden" style={{ clipPath: 'inset(100% 0 0 0)' }}>
              <img src={esterno} alt="La terrazza" title="La terrazza in piazza" loading="lazy" width={750} height={450} className="w-full h-full object-cover will-change-transform" />
            </div>
            <p className="f-label mt-3 c-muted">La terrazza in piazza</p>
          </div>
        </div>

        <div ref={featuresRef} className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-16 gap-y-10 border-t border-white/[0.06] pt-12">
          {[
            { num: '50', label: 'Coperti', sub: 'Un ristorante volutamente piccolo' },
            { num: '01', label: 'Sala privata', sub: 'Per cene riservate e eventi' },
            { num: '∞', label: 'Cantina curata', sub: 'Etichette italiane e internazionali' },
            { num: '—', label: 'Centro storico', sub: 'Zona pedonale, parcheggio vicino' },
          ].map((f) => (
            <div key={f.label}>
              <span className="font-display text-4xl md:text-5xl text-gold-400/50 block mb-3" style={{ fontWeight: 300 }}>{f.num}</span>
              <p className="text-dark-50 text-sm font-medium mb-1">{f.label}</p>
              <p className="f-body text-xs" style={{ color: 'rgba(232,228,223,0.35)' }}>{f.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
