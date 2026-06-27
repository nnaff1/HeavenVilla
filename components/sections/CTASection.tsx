'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1586611292717-f828b167408c?w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-forest-dark/85" />

      <div className="relative max-w-2xl mx-auto text-center px-6">
        <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Stay Connected</p>
        <h2 className="font-display text-display-lg text-ivory mb-4">
          First Access to
          <br />
          <em className="text-gold">Exclusive Retreats</em>
        </h2>
        <p className="text-ivory/60 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          Join our community of discerning travelers. Be the first to know about new villas, seasonal offers, and private events.
        </p>

        {submitted ? (
          <div className="py-5 text-gold font-display text-xl italic">
            Thank you. We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/10 border border-white/20 text-ivory placeholder:text-ivory/40 text-sm px-5 py-3.5 outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gold text-forest-dark font-medium text-sm tracking-widest uppercase px-6 py-3.5 hover:bg-gold-light transition-colors duration-300"
            >
              <Send size={14} />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-ivory/30 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
