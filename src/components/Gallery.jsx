import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto19 from '../assets/foto/foto-19.webp'
import foto20 from '../assets/foto/foto-20.webp'
import foto21 from '../assets/foto/foto-21.webp'
import foto22 from '../assets/foto/foto-22.webp'
import foto23 from '../assets/foto/foto-23.webp'

const images = [
  { src: foto1, alt: 'Piatto di crudité misto', category: 'piatti' },
  { src: foto21, alt: 'Sala principale con volte', category: 'location' },
  { src: foto2, alt: 'Plateau di pesce crudo', category: 'piatti' },
  { src: foto5, alt: 'Terrazza esterna', category: 'location' },
  { src: foto6, alt: 'Pasta al nero di seppia', category: 'piatti' },
  { src: foto22, alt: 'Cantina dei vini', category: 'location' },
  { src: foto10, alt: 'Ostriche e crudité', category: 'piatti' },
  { src: foto3, alt: 'Sala elegante', category: 'location' },
  { src: foto13, alt: 'Spaghetti ai frutti di mare', category: 'piatti' },
  { src: foto9, alt: 'Vino e atmosfera', category: 'location' },
  { src: foto19, alt: 'Granchi e crostacei', category: 'piatti' },
  { src: foto23, alt: 'Ingresso ristorante', category: 'location' },
  { src: foto14, alt: 'Pasta al nero di seppia con roe', category: 'piatti' },
  { src: foto16, alt: 'Grigliata di pesce', category: 'piatti' },
  { src: foto4, alt: 'Carpaccio e tartare', category: 'piatti' },
  { src: foto20, alt: 'Crostacei freschi', category: 'piatti' },
]

const filters = [
  { label: 'Tutti', value: 'all' },
  { label: 'Piatti', value: 'piatti' },
  { label: 'Location', value: 'location' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : filtered.length - 1))
  const next = () => setLightbox((i) => (i < filtered.length - 1 ? i + 1 : 0))

  return (
    <section id="gallery" className="section-padding bg-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium">
            Le nostre immagini
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Gallery
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-gold-500 text-dark-950'
                  : 'border border-white/10 text-white/60 hover:border-gold-400/30 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, index) => (
            <div
              key={`${filter}-${index}`}
              className="break-inside-avoid group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-50"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-50"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
