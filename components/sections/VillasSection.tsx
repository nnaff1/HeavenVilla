import Link from 'next/link'
import { ArrowRight, Users, Maximize2, Star } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const villas = [
  {
    id: 'forest-suite',
    name: 'Forest Suite',
    tagline: 'Immersed in the canopy',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80',
    price: 3500000,
    guests: 2,
    sqm: 80,
    rating: 4.9,
    badge: 'Most Popular',
  },
  {
    id: 'jungle-pool-villa',
    name: 'Jungle Pool Villa',
    tagline: 'Private pool meets wild forest',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    price: 5800000,
    guests: 4,
    sqm: 140,
    rating: 5.0,
    badge: 'Premium',
  },
  {
    id: 'highland-escape',
    name: 'Highland Escape',
    tagline: 'Panoramic rice terrace views',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    price: 4200000,
    guests: 2,
    sqm: 100,
    rating: 4.8,
    badge: null,
  },
]

function formatIDR(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function VillasSection() {
  return (
    <section id="villas" className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-3">Our Collection</p>
              <h2 className="font-display text-display-lg text-forest-dark">
                Villas Crafted for
                <br />
                <em className="text-gold">Quiet Luxury</em>
              </h2>
            </div>
            <p className="text-forest-dark/60 max-w-sm text-sm leading-relaxed">
              Each villa is an intimate world of its own — designed to make you feel at home while completely away from it.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {villas.map((villa, i) => (
            <ScrollReveal key={villa.id} delay={i * 0.15}>
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-5">
                  <img
                    src={villa.image}
                    alt={villa.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />

                  {/* Badge */}
                  {villa.badge && (
                    <span className="absolute top-4 left-4 bg-gold text-forest-dark text-xs font-medium tracking-widest uppercase px-3 py-1">
                      {villa.badge}
                    </span>
                  )}

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-forest-dark/60 backdrop-blur-sm px-2.5 py-1">
                    <Star size={10} className="text-gold fill-gold" />
                    <span className="text-ivory text-xs font-medium">{villa.rating}</span>
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl text-ivory mb-1">{villa.name}</h3>
                    <p className="text-ivory/70 text-sm">{villa.tagline}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-forest-dark/50 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Users size={12} />
                      Up to {villa.guests} guests
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={12} />
                      {villa.sqm} m²
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-forest-dark/50">From</p>
                    <p className="font-display text-forest font-semibold text-lg">
                      {formatIDR(villa.price)}
                      <span className="text-xs font-body text-forest-dark/50 font-normal"> /night</span>
                    </p>
                  </div>
                </div>

                {/* View CTA */}
                <Link
                  href={`/rooms/${villa.id}`}
                  className="mt-4 flex items-center gap-2 text-forest text-sm font-medium group-hover:text-gold transition-colors duration-300"
                >
                  View villa
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* All villas CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-forest text-forest font-medium text-sm tracking-widest uppercase hover:bg-forest hover:text-ivory transition-all duration-300"
            >
              View All Villas
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}