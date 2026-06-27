'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Star, Users, Maximize2, BedDouble, Bath, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { getVilla, formatIDR } from '@/lib/villas'
import BookingForm from '@/components/booking/BookingForm'

interface Props {
  params: { id: string }
}

export default function VillaDetailPage({ params }: Props) {
  const villa = getVilla(params.id)
  if (!villa) notFound()

  const [activePhoto, setActivePhoto] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)

  const prevPhoto = () => setActivePhoto((p) => (p - 1 + villa.gallery.length) % villa.gallery.length)
  const nextPhoto = () => setActivePhoto((p) => (p + 1) % villa.gallery.length)

  return (
    <main className="bg-ivory min-h-screen">
      {/* Back nav */}
      <div className="sticky top-0 z-40 bg-ivory/90 backdrop-blur-sm border-b border-ivory-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/rooms" className="flex items-center gap-2 text-forest/70 hover:text-forest text-sm transition-colors duration-200">
            <ArrowLeft size={16} /> All Villas
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-display text-forest font-semibold text-lg hidden md:block">
              {formatIDR(villa.price)}<span className="text-xs font-body font-normal text-forest-dark/50"> /night</span>
            </span>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-5 py-2 bg-gold text-forest-dark text-sm font-medium tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section className="relative">
        <div className="relative h-[55vh] md:h-[70vh] cursor-pointer overflow-hidden" onClick={() => setLightboxOpen(true)}>
          <img
            src={villa.gallery[activePhoto]}
            alt={`${villa.name} — photo ${activePhoto + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/30 to-transparent pointer-events-none" />
          {villa.badge && (
            <span className="absolute top-6 left-6 bg-gold text-forest-dark text-xs font-medium tracking-widest uppercase px-3 py-1">
              {villa.badge}
            </span>
          )}
          <div className="absolute bottom-6 right-6 bg-forest-dark/60 backdrop-blur-sm text-ivory text-xs px-3 py-1.5 tracking-widest">
            {activePhoto + 1} / {villa.gallery.length}
          </div>
          <button onClick={(e) => { e.stopPropagation(); prevPhoto() }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-forest-dark/40 backdrop-blur-sm text-ivory flex items-center justify-center hover:bg-forest-dark/70 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextPhoto() }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-forest-dark/40 backdrop-blur-sm text-ivory flex items-center justify-center hover:bg-forest-dark/70 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 px-6 md:px-12 py-3 overflow-x-auto scrollbar-hide max-w-7xl mx-auto">
          {villa.gallery.map((src, i) => (
            <button key={i} onClick={() => setActivePhoto(i)}
              className={`flex-none w-20 h-14 overflow-hidden transition-all duration-300 ${i === activePhoto ? 'ring-2 ring-gold ring-offset-1 ring-offset-ivory' : 'opacity-60 hover:opacity-100'}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Title */}
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-2">{villa.tagline}</p>
              <h1 className="font-display text-display-lg text-forest-dark mb-4">{villa.name}</h1>
              <div className="flex items-center flex-wrap gap-5 text-sm text-forest-dark/60">
                <span className="flex items-center gap-1.5">
                  <Star size={14} className="text-gold fill-gold" />
                  <span className="text-forest-dark font-medium">{villa.rating}</span>
                  <span>({villa.reviewCount} reviews)</span>
                </span>
                <span className="flex items-center gap-1.5"><Users size={14} /> Up to {villa.guests} guests</span>
                <span className="flex items-center gap-1.5"><Maximize2 size={14} /> {villa.sqm} m²</span>
                <span className="flex items-center gap-1.5"><BedDouble size={14} /> {villa.bedrooms} bedroom{villa.bedrooms > 1 ? 's' : ''}</span>
                <span className="flex items-center gap-1.5"><Bath size={14} /> {villa.bathrooms} bathroom{villa.bathrooms > 1 ? 's' : ''}</span>
              </div>
            </div>

            <div className="h-px bg-ivory-dark" />

            {/* Description */}
            <div>
              <h2 className="font-display text-xl text-forest-dark mb-4">About this villa</h2>
              <p className="text-forest-dark/70 leading-relaxed text-[15px]">{villa.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-xl text-forest-dark mb-5">What this place offers</h2>
              <ul className="space-y-3">
                {villa.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-forest-dark/70 text-sm">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gold flex-none" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-display text-xl text-forest-dark mb-5">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {villa.amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-3 p-3 bg-ivory-dark/50">
                    <span className="text-xl">{a.icon}</span>
                    <span className="text-forest-dark/70 text-xs leading-tight">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div>
              <h2 className="font-display text-xl text-forest-dark mb-5">Policies</h2>
              <ul className="space-y-2">
                {villa.policies.map((p) => (
                  <li key={p} className="text-forest-dark/60 text-sm flex items-start gap-3">
                    <span className="text-gold mt-0.5">—</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-forest-dark p-7 shadow-xl shadow-forest-dark/20">
                <div className="mb-6">
                  <p className="text-ivory/50 text-xs tracking-widest uppercase mb-1">Starting from</p>
                  <p className="font-display text-display-md text-gold">
                    {formatIDR(villa.price)}
                    <span className="text-sm font-body font-normal text-ivory/40"> /night</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-gold fill-gold" />)}
                  <span className="text-ivory/50 text-xs ml-1">{villa.rating} · {villa.reviewCount} reviews</span>
                </div>
                <button onClick={() => setBookingOpen(true)} className="w-full py-4 bg-gold text-forest-dark font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors duration-300 mb-3">
                  Book This Villa
                </button>
                <p className="text-ivory/30 text-xs text-center">No payment required today</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-1">
                {[{ value: villa.guests, label: 'Guests' }, { value: villa.bedrooms, label: 'Bedrooms' }, { value: villa.sqm + 'm²', label: 'Size' }].map(({ value, label }) => (
                  <div key={label} className="bg-ivory-dark/60 p-3 text-center">
                    <p className="font-display text-forest-dark font-semibold text-lg">{value}</p>
                    <p className="text-forest-dark/50 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-forest-dark/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button onClick={() => setLightboxOpen(false)} className="absolute top-5 right-5 text-ivory/70 hover:text-ivory"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); prevPhoto() }} className="absolute left-4 text-ivory/70 hover:text-ivory"><ChevronLeft size={40} /></button>
          <img src={villa.gallery[activePhoto]} alt="" className="max-h-[85vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); nextPhoto() }} className="absolute right-4 text-ivory/70 hover:text-ivory"><ChevronRight size={40} /></button>
          <div className="absolute bottom-5 text-ivory/50 text-sm tracking-widest">{activePhoto + 1} / {villa.gallery.length}</div>
        </div>
      )}

      {bookingOpen && <BookingForm villa={villa} onClose={() => setBookingOpen(false)} />}
    </main>
  )
}