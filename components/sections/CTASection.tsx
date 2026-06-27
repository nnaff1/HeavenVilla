'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-dark/75" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Stay in the Loop</p>
          <h2 className="font-display text-display-lg text-ivory mb-4">
            Get Early Access &
            <br />
            <em className="text-gold">Exclusive Offers</em>
          </h2>
          <p className="text-ivory/60 text-sm mb-8 leading-relaxed">
            Join our private list for seasonal offers, new villa announcements, and insider travel tips.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {!sent ? (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 text-ivory px-4 py-3 text-sm outline-none focus:border-gold transition-colors placeholder:text-ivory/40"
              />
              <button
                onClick={() => email && setSent(true)}
                className="px-6 py-3 bg-gold text-forest-dark text-sm font-medium tracking-widest uppercase hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </div>
          ) : (
            <p className="text-gold font-display text-lg">You&apos;re on the list. We&apos;ll be in touch.</p>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}