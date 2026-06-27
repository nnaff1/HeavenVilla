import { Star } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const testimonials = [
  {
    quote: 'Waking up to the sound of jungle birds, coffee in hand by the pool — HeavenVilla changed how I understand rest.',
    name: 'Anastasia M.',
    origin: 'Moscow, Russia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    rating: 5,
    villa: 'Jungle Pool Villa',
  },
  {
    quote: "The most intentional place I've ever stayed. Nothing was overlooked. Even the silence felt curated.",
    name: 'David Chen',
    origin: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    rating: 5,
    villa: 'Highland Escape',
  },
  {
    quote: 'Our honeymoon was everything we could have dreamed of. The team made every moment feel like magic.',
    name: 'Priya & Karan S.',
    origin: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    rating: 5,
    villa: 'Forest Suite',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-3">Guest Stories</p>
            <h2 className="font-display text-display-lg text-forest-dark">
              Words from Those
              <br />
              Who&apos;ve <em className="text-gold">Been Here</em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto text-center">
            {[
              { value: '1,200+', label: 'Happy Guests' },
              { value: '4.97', label: 'Average Rating' },
              { value: '98%', label: 'Return Rate' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-display-md text-gold font-semibold">{value}</p>
                <p className="text-forest-dark/50 text-xs tracking-widest uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <blockquote className="bg-ivory p-7 border border-ivory-dark hover:border-gold/30 transition-colors duration-500">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-forest-dark/80 text-sm leading-relaxed mb-6 font-display italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-forest-dark text-sm font-medium">{t.name}</p>
                    <p className="text-forest-dark/50 text-xs">{t.origin} · {t.villa}</p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}