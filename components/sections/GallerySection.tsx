import ScrollReveal from '@/components/ui/ScrollReveal'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80', tall: true },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', tall: false },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80', tall: false },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80', tall: true },
]

export default function GallerySection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-3">Visual Journey</p>
              <h2 className="font-display text-display-lg text-forest-dark">
                See It to
                <br />
                <em className="text-gold">Believe It</em>
              </h2>
            </div>
            <Link href="/gallery" className="flex items-center gap-2 text-forest text-sm font-medium hover:text-gold transition-colors">
              View full gallery <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {photos.map((p, i) => (
              <div key={i} className={`overflow-hidden group ${p.tall ? 'row-span-2' : 'row-span-1'}`}>
                <img
                  src={p.src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}