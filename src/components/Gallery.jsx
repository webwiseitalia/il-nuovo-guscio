import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto19 from '../assets/foto/foto-19.webp'
import foto20 from '../assets/foto/foto-20.webp'
import foto21 from '../assets/foto/foto-21.webp'
import foto22 from '../assets/foto/foto-22.webp'
import foto23 from '../assets/foto/foto-23.webp'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: foto1, alt: 'Crudité misto', aspect: 'aspect-[4/3]' },
  { src: foto21, alt: 'Sala con volte', aspect: 'aspect-[3/4]' },
  { src: foto6, alt: 'Pasta al nero', aspect: 'aspect-[2/3]' },
  { src: foto2, alt: 'Plateau di pesce', aspect: 'aspect-[4/3]' },
  { src: foto5, alt: 'Terrazza esterna', aspect: 'aspect-square' },
  { src: foto22, alt: 'Cantina dei vini', aspect: 'aspect-[3/4]' },
  { src: foto10, alt: 'Ostriche', aspect: 'aspect-[4/5]' },
  { src: foto13, alt: 'Spaghetti mare', aspect: 'aspect-[5/4]' },
  { src: foto3, alt: 'Sala elegante', aspect: 'aspect-[3/2]' },
  { src: foto19, alt: 'Granchi', aspect: 'aspect-[4/3]' },
  { src: foto14, alt: 'Nero di seppia', aspect: 'aspect-[2/3]' },
  { src: foto23, alt: 'Ingresso', aspect: 'aspect-[5/3]' },
  { src: foto16, alt: 'Grigliata', aspect: 'aspect-[4/3]' },
  { src: foto4, alt: 'Carpaccio', aspect: 'aspect-[3/4]' },
  { src: foto20, alt: 'Crostacei', aspect: 'aspect-[5/4]' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useRef()
  const titleRef = useRef()
  const gridRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
        }
      )

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.gallery-item')
        items.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, y: 40 + (i % 3) * 20, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.8 + (i % 4) * 0.15,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 88%' }
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const prev = () => setLightbox(i => (i > 0 ? i - 1 : images.length - 1))
  const next = () => setLightbox(i => (i < images.length - 1 ? i + 1 : 0))

  return (
    <section ref={sectionRef} id="gallery" className="relative py-20 md:py-32 overflow-hidden bg-dark-900">
      <div className="px-5 md:px-10 lg:px-16">
        <div className="flex justify-end mb-6">
          <span className="f-label">Le nostre immagini</span>
        </div>
        <div ref={titleRef} className="flex justify-end mb-16 md:mb-24" style={{ opacity: 0 }}>
          <h2 className="f-display text-dark-50 text-right">Gallery</h2>
        </div>

        <div ref={gridRef} className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item break-inside-avoid cursor-pointer overflow-hidden group ${img.aspect}`}
              style={{ opacity: 0 }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.1,0,1)] group-hover:scale-[1.06]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-dark-900/97 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
              onClick={e => e.stopPropagation()}
            />
            <button onClick={e => { e.stopPropagation(); prev() }} className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-dark-200 hover:text-dark-50 text-4xl transition-colors">&#8592;</button>
            <button onClick={e => { e.stopPropagation(); next() }} className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-dark-200 hover:text-dark-50 text-4xl transition-colors">&#8594;</button>
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-dark-200 hover:text-dark-50 text-2xl transition-colors">&#10005;</button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 f-label c-muted">{lightbox + 1} / {images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
