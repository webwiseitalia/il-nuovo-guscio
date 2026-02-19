import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import chefImg from '../assets/foto/foto-15.webp'
import salaImg from '../assets/foto/foto-3.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const imgRef = useRef()
  const img2Ref = useRef()
  const textRefs = useRef([])
  const badgeRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(titleRef.current, { types: 'lines,words' })
      split.lines.forEach(line => {
        const w = document.createElement('div')
        w.style.overflow = 'hidden'
        w.style.paddingBottom = '0.05em'
        line.parentNode.insertBefore(w, line)
        w.appendChild(line)
      })

      gsap.fromTo(split.lines,
        { yPercent: 110 },
        {
          yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
        }
      )

      gsap.fromTo(imgRef.current,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.4, ease: 'power3.inOut',
          scrollTrigger: { trigger: imgRef.current, start: 'top 75%' }
        }
      )

      gsap.fromTo(img2Ref.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.3, ease: 'power3.inOut',
          scrollTrigger: { trigger: img2Ref.current, start: 'top 80%' }
        }
      )

      textRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
            delay: i * 0.15,
          }
        )
      })

      gsap.fromTo(badgeRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.7,
          scrollTrigger: { trigger: badgeRef.current, start: 'top 90%' }
        }
      )

      gsap.to(imgRef.current, {
        yPercent: -10,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" className="relative py-32 md:py-48 overflow-hidden bg-dark-900">
      <div className="absolute top-0 left-[5vw] w-px h-24 bg-gradient-to-b from-transparent to-gold-400/20" />

      <div className="px-5 md:px-10 lg:px-16">
        <div className="mb-6 md:ml-[10vw]">
          <span className="f-label">La nostra storia</span>
        </div>

        <h2 ref={titleRef} className="f-display-sm text-dark-50 max-w-[80vw] md:max-w-[50vw] mb-20 md:mb-32 md:ml-[10vw]">
          Dove il mare
          <br />
          incontra la pietra
        </h2>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-5 md:col-start-1">
            <div
              ref={imgRef}
              className="aspect-[3/4] overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
            >
              <img src={chefImg} alt="Lo chef con il plateau" className="w-full h-full object-cover" />
            </div>
            <p className="f-label mt-4 c-muted">Chef Osvaldo Longo</p>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-7 md:pt-32 lg:pt-48">
            <p ref={el => textRefs.current[0] = el} className="f-body mb-8" style={{ opacity: 0 }}>
              Il Nuovo Guscio nasce dall'esperienza di Michele Foresti,
              che dopo anni con "Il Guscio" a Lovere ha portato la sua
              passione per il pesce di mare a Pisogne. Il ristorante si
              trova in un ex monastero nel cuore del centro storico.
            </p>
            <p ref={el => textRefs.current[1] = el} className="f-body mb-8" style={{ opacity: 0 }}>
              Michele è il suo punto di forza: accoglie personalmente
              ogni tavolo, descrive ogni piatto nel dettaglio, racconta
              provenienza e caratteristiche del pesce. In cucina lo chef
              Osvaldo Longo. Il team è composto da ragazzi giovani ma
              molto professionali.
            </p>
            <p ref={el => textRefs.current[2] = el} className="f-body mb-10" style={{ opacity: 0 }}>
              La filosofia è chiara: <span className="c-gold f-accent">la materia prima è il cavallo
              di battaglia</span>. Il menu è interamente dedicato al pesce di mare,
              con proposte mediterranee e ricette della tradizione sarda.
            </p>

            <div ref={badgeRef} className="flex items-center gap-3" style={{ opacity: 0 }}>
              <div className="w-8 h-px bg-gold-400/50" />
              <span className="f-label" style={{ color: 'rgba(190,155,95,0.5)' }}>
                Segnalato — Accademia Italiana della Cucina
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 md:ml-[20vw] md:mr-[5vw]">
          <div
            ref={img2Ref}
            className="aspect-[16/7] overflow-hidden"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            <img src={salaImg} alt="La sala elegante" className="w-full h-full object-cover" />
          </div>
          <p className="f-label mt-4 c-muted">La sala — Ex monastero, Pisogne</p>
        </div>
      </div>
    </section>
  )
}
