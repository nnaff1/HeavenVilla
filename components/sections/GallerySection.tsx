import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1609519054905-ffe2a9939a5e?w=800&q=80',
    alt: 'Pool villa at dusk',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    alt: 'Interior of suite',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=600&q=80',
    alt: 'Jungle pathway',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&q=80',
    alt: 'Dining terrace',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
    alt: 'Spa and wellness',
    span: 'col-span-1',
  },
]

export default function GallerySection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-3">Visual Journey</p>
            <h2 className="font-display text-display-lg text-forest-dark">
              See What
              <br />
              <em className="text-gold">Awaits You</em>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-forest text-sm font-medium hover:text-gold transition-colors duration-300 self-end"
          >
            Full Gallery
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[480px] md:h-[560px]">
          {images.map(({ src, alt, span }, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${span} group`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
