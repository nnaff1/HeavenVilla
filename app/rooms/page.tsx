import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Star, Users, Maximize2 } from 'lucide-react'
import { villas, formatIDR } from '@/lib/villas'

export const metadata = { title: 'Our Villas — HeavenVilla' }

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory">
        <div className="relative h-56 bg-forest-dark flex items-end pb-10 px-6 md:px-12 pt-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-2">Our Collection</p>
            <h1 className="font-display text-display-lg text-ivory">All Villas</h1>
          </div>
        </div>
        <section className="section-pad">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {villas.map((villa) => (
                <article key={villa.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] mb-5">
                    <img src={villa.image} alt={villa.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                    {villa.badge && (
                      <span className="absolute top-4 left-4 bg-gold text-forest-dark text-xs font-medium tracking-widest uppercase px-3 py-1">{villa.badge}</span>
                    )}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-forest-dark/60 backdrop-blur-sm px-2.5 py-1">
                      <Star size={10} className="text-gold fill-gold" />
                      <span className="text-ivory text-xs font-medium">{villa.rating}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl text-ivory mb-1">{villa.name}</h3>
                      <p className="text-ivory/70 text-sm">{villa.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-forest-dark/50 text-xs">
                      <span className="flex items-center gap-1.5"><Users size={12} />Up to {villa.guests} guests</span>
                      <span className="flex items-center gap-1.5"><Maximize2 size={12} />{villa.sqm} m²</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-forest-dark/50">From</p>
                      <p className="font-display text-forest font-semibold text-lg">
                        {formatIDR(villa.price)}<span className="text-xs font-body text-forest-dark/50 font-normal"> /night</span>
                      </p>
                    </div>
                  </div>
                  <Link href={`/rooms/${villa.id}`} className="flex items-center gap-2 text-forest text-sm font-medium group-hover:text-gold transition-colors duration-300">
                    View villa <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}