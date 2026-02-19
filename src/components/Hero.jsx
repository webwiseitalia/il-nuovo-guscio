import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import heroImg from '../assets/foto/foto-21.webp'
import heroImg2 from '../assets/foto/foto-1.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef()
  const headlineRef = useRef()
  const subRef = useRef()
  const imgRef = useRef()
  const img2Ref = useRef()
  const labelRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(headlineRef.current, { types: 'lines,words' })

      split.lines.forEach(line => {
        const wrapper = document.createElement('div')
        wrapper.style.overflow = 'hidden'
        wrapper.style.paddingBottom = '0.1em'
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo(split.lines,
        { yPercent: 120, rotation: 3 },
        { yPercent: 0, rotation: 0, duration: 1.4, stagger: 0.12, delay: 0.3 }
      )

      tl.fromTo(imgRef.current,
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', scale: 1.3 },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale: 1, duration: 1.6, ease: 'power3.inOut' },
        0.2
      )

      tl.fromTo(img2Ref.current,
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.4, ease: 'power3.inOut' },
        0.6
      )

      tl.fromTo(labelRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 },
        1.0
      )

      tl.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.2
      )

      gsap.to(imgRef.current, {
        yPercent: -15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      })

      gsap.to(img2Ref.current, {
        yPercent: -8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden bg-dark-900">
      <div className="absolute inset-0">
        <div
          ref={imgRef}
          className="absolute top-0 right-0 w-[75vw] md:w-[55vw] h-[110vh]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        >
          <img src={heroImg} alt="La sala del monastero" className="w-full h-full object-cover" />
        </div>

        <div
          ref={img2Ref}
          className="absolute bottom-[8vh] left-[3vw] md:left-[5vw] w-[40vw] md:w-[22vw] aspect-[3/4] z-10"
          style={{ clipPath: 'inset(100% 0 0 0)' }}
        >
          <img src={heroImg2} alt="Crudité di pesce" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 12, 0.7)' }} />
        </div>
      </div>


      <div className="relative z-20 min-h-screen flex flex-col justify-between px-5 md:px-10 lg:px-16 pt-32 md:pt-40 pb-10">
        <div ref={labelRef} className="f-label mb-8 md:mb-0" style={{ opacity: 0 }}>
          Ristorante di pesce · Pisogne
        </div>

        <div className="max-w-[90vw] md:max-w-[70vw] lg:max-w-[55vw]">
          <h1 ref={headlineRef} className="f-display text-dark-50">
            Solo pesce
            <br />
            di mare
          </h1>
        </div>

        <div ref={subRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8" style={{ opacity: 0 }}>
          <p className="f-body max-w-md" style={{ color: 'rgba(232,228,223,0.7)' }}>
            In un ex monastero storico affacciato su Piazza Vescovo
            Corna Pellegrini. Materia prima di altissima qualità,
            cucina mediterranea e tradizione sarda.
          </p>

          <div className="flex items-center gap-6 flex-shrink-0">
            <a
              href="tel:+393338967957"
              className="f-label border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-900 px-7 py-3 rounded-full transition-all duration-500"
            >
              Prenota il tuo tavolo
            </a>
            <a href="#menu" className="f-label text-dark-200 hover:text-gold-400 transition-colors duration-500">
              Menu ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
