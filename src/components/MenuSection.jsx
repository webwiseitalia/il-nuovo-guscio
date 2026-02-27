import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import crudiImg from '../assets/foto/foto-2.webp'
import pastaImg from '../assets/foto/foto-6.webp'
import grigliataImg from '../assets/foto/foto-16.webp'
import tartareImg from '../assets/foto/foto-17.webp'
import plateauImg from '../assets/foto/foto-18.webp'
import fritturaImg from '../assets/foto/foto-7.webp'

gsap.registerPlugin(ScrollTrigger)

const dishes = [
  { category: 'Crudi', items: ['Crudité e plateau de fruits de mer', 'Ostriche', 'Tartare di tonno', 'Catalana'] },
  { category: 'Primi', items: ['Spaghetti di Gragnano ai ricci di mare', "Paccheri all'astice intero", 'Fregola sarda', 'Tagliolini al nero di seppia con capesante'] },
  { category: 'Secondi', items: ['Tagliata di tonno con pistacchi', 'Vaporata di scampi e gamberi', 'Scampi e gamberoni alla griglia', 'Calamaro ripieno'] },
  { category: 'Signature', items: ['Fregola nera con bottarga di dentice', 'Capesante gratinate al mirto', 'Scialatielli al granchio', 'Plateau Royale'] },
]

const images = [
  { src: plateauImg, alt: 'Plateau Royale', offset: '0' },
  { src: crudiImg, alt: 'Crudité di pesce', offset: '8vh' },
  { src: pastaImg, alt: 'Pasta al nero', offset: '3vh' },
  { src: grigliataImg, alt: 'Grigliata', offset: '12vh' },
  { src: tartareImg, alt: 'Tartare', offset: '2vh' },
]

export default function MenuSection() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const imgsRef = useRef([])
  const listRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(titleRef.current, { types: 'chars' })
      gsap.fromTo(split.chars,
        { opacity: 0, y: 80, rotateX: -90 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.6, stagger: 0.015, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
        }
      )

      const clipPaths = [
        ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
        ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
        ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
        ['polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'],
        ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
      ]

      imgsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { clipPath: clipPaths[i][0], scale: 1.15 },
          {
            clipPath: clipPaths[i][1], scale: 1,
            duration: 0.8, ease: 'power3.inOut',
            scrollTrigger: { trigger: el, start: 'top 80%' }
          }
        )
      })

      if (listRef.current) {
        const items = listRef.current.querySelectorAll('.dish-group')
        items.forEach((group, i) => {
          gsap.fromTo(group,
            { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
            {
              opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
              scrollTrigger: { trigger: group, start: 'top 85%' }
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="menu" className="relative py-24 md:py-40 overflow-hidden bg-dark-900">
      <div className="absolute top-0 right-[15vw] w-px h-32 bg-gradient-to-b from-transparent to-gold-400/15" />

      <div className="px-5 md:px-10 lg:px-16">
        <div className="flex justify-end mb-6">
          <span className="f-label">I nostri piatti</span>
        </div>
        <div className="flex justify-end">
          <h2 ref={titleRef} className="f-display text-dark-50 text-right" style={{ perspective: '600px' }}>
            Il Menu
          </h2>
        </div>

        <p className="f-body max-w-lg ml-auto text-right mt-8 mb-20 md:mb-32">
          Il menu è interamente dedicato alla cucina di pesce,
          con proposte di stampo mediterraneo alle quali si aggiungono
          alcune ricette della tradizione sarda.
        </p>

        <div className="grid grid-cols-12 gap-3 md:gap-4 mb-24 md:mb-40">
          <div className="col-span-12 md:col-span-7" style={{ marginTop: images[0].offset }}>
            <div ref={el => imgsRef.current[0] = el} className="aspect-[4/3] overflow-hidden">
              <img src={images[0].src} alt={images[0].alt} title={images[0].alt} loading="lazy" width={900} height={675} className="w-full h-full object-cover" />
            </div>
            <p className="f-label mt-3 c-muted">Plateau Royale — il nostro piatto più celebre</p>
          </div>
          <div className="col-span-8 md:col-span-4 md:col-start-9" style={{ marginTop: images[1].offset }}>
            <div ref={el => imgsRef.current[1] = el} className="aspect-[3/4] overflow-hidden">
              <img src={images[1].src} alt={images[1].alt} title={images[1].alt} loading="lazy" width={600} height={800} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="col-span-5 md:col-span-3 md:col-start-2" style={{ marginTop: images[2].offset }}>
            <div ref={el => imgsRef.current[2] = el} className="aspect-[2/3] overflow-hidden">
              <img src={images[2].src} alt={images[2].alt} title={images[2].alt} loading="lazy" width={400} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-7 md:col-span-4" style={{ marginTop: images[3].offset }}>
            <div ref={el => imgsRef.current[3] = el} className="aspect-[5/4] overflow-hidden">
              <img src={images[3].src} alt={images[3].alt} title={images[3].alt} loading="lazy" width={750} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3" style={{ marginTop: images[4].offset }}>
            <div ref={el => imgsRef.current[4] = el} className="aspect-square overflow-hidden">
              <img src={images[4].src} alt={images[4].alt} title={images[4].alt} loading="lazy" width={600} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div ref={listRef} className="max-w-5xl mx-auto">
          {dishes.map((group) => (
            <div
              key={group.category}
              className="dish-group border-t border-white/[0.06] py-10 md:py-14 grid grid-cols-12 gap-4 items-start"
              style={{ opacity: 0 }}
            >
              <div className="col-span-12 md:col-span-3">
                <span className="font-display text-3xl md:text-4xl text-gold-400/70" style={{ fontWeight: 300 }}>
                  {group.category}
                </span>
              </div>
              <div className="col-span-12 md:col-span-8 md:col-start-5">
                {group.items.map((item, j) => (
                  <p key={j} className="f-body mb-2 last:mb-0" style={{ color: 'rgba(232,228,223,0.55)' }}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="f-body max-w-sm f-accent" style={{ color: 'rgba(232,228,223,0.35)' }}>
            La carta dei vini è ricercata, con selezione di etichette italiane
            e internazionali. In base al pescato del giorno il menu può subire variazioni.
          </p>
          <a
            href="https://ilnuovoguscio.eatbu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="f-label border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-900 px-7 py-3 rounded-full transition-all duration-300 flex-shrink-0"
          >
            Menu completo ↗
          </a>
        </div>
      </div>
    </section>
  )
}
