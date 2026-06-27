'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80', villa: 'Forest Suite', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', villa: 'Jungle Pool Villa', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80', villa: 'Highland Escape', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80', villa: 'Forest Suite', span: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80', villa: 'Jungle Pool Villa', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', villa: 'Forest Suite', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80', villa: 'Highland Escape', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', villa: 'Jungle Pool Villa', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800&q=80', villa: 'Highland Escape', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80', villa: 'Forest Suite', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', villa: 'Jungle Pool Villa', span: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80', villa: 'Highland Escape', span: 'col-span-1 row-span-1' },
]

const filters = ['All', 'Forest Suite', 'Jungle Pool Villa', 'Highland Escape']

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? photos : photos.filter((p) => p.villa === active)

  const prev = () => setLightbox((i) => (i! - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox((i) => (i! + 1) % filtered.length)

  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Header */}
        <div className="relative h-56 bg-forest-dark flex items-end pb-10 px-6 md:px-12 pt-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-2">Visual Journey</p>
            <h1 className="font-display text-display-lg text-ivory">Gallery</h1>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                active === f
                  ? 'bg-forest text-ivory'
                  : 'border border-ivory-dark text-forest-dark/60 hover:border-forest hover:text-forest'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-3">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className={`${photo.span} overflow-hidden cursor-pointer group relative`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.villa}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-end p-4">
                  <span className="text-ivory text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.villa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 bg-forest-dark/95 flex items-center justify-center" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 text-ivory/70 hover:text-ivory"><X size={28} /></button>
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 text-ivory/70 hover:text-ivory"><ChevronLeft size={40} /></button>
            <div onClick={(e) => e.stopPropagation()} className="text-center">
              <img src={filtered[lightbox].src} alt="" className="max-h-[80vh] max-w-[85vw] object-contain" />
              <p className="text-ivory/50 text-xs tracking-widest uppercase mt-4">{filtered[lightbox].villa}</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 text-ivory/70 hover:text-ivory"><ChevronRight size={40} /></button>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}