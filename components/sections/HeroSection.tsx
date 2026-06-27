'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)

    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrolled = window.scrollY
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <img
          src="/images/hero-bg.jpg"
          alt="HeavenVilla — Luxury Villa in Nature"
          className="w-full h-full object-cover object-top"
        />
        {/* Base dark tint */}
        <div className="absolute inset-0 bg-forest-dark/50" />
        {/* Vignette: radial + gradient bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(5,15,10,0.55) 100%), linear-gradient(to bottom, rgba(8,20,15,0.35) 0%, transparent 35%, transparent 55%, rgba(5,15,10,0.78) 100%)',
          }}
        />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gold/40" />
        <span className="text-gold/60 text-xs tracking-[0.3em] rotate-90 whitespace-nowrap">UBUD · BALI</span>
        <div className="w-px h-24 bg-gold/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className={`text-gold tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Welcome to Heaven
        </p>

        <h1
          className={`font-display text-display-xl text-ivory mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Where Stillness
          <br />
          <span className="text-gradient-gold italic">Becomes a Luxury</span>
        </h1>

        <p
          className={`text-ivory/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          Private villas cradled in Ubud's lush jungle. An escape from the world — entirely yours.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#villas"
            className="px-8 py-4 bg-gold text-forest-dark font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Explore Villas
          </a>
          <a
            href="#booking"
            className="px-8 py-4 border border-ivory/50 text-ivory font-medium text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Reserve Now
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-ivory/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="text-gold/60" />
      </div>
    </section>
  )
}
