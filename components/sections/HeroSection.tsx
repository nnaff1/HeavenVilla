'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="HeavenVilla"
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-forest-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(13,31,26,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-[0.4em] uppercase text-xs font-medium mb-6"
        >
          Welcome to HeavenVilla
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-display-xl text-ivory max-w-4xl mb-6"
        >
          Where Nature Becomes
          <br />
          <em className="text-gold">entirely yours.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-ivory/70 text-sm md:text-base max-w-md mb-10 leading-relaxed"
        >
          Private villas nestled in the heart of Indonesian nature. No crowds, no noise — just you and the wild.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/rooms"
            className="px-8 py-4 bg-gold text-forest-dark font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
          >
            Explore Villas
          </Link>
          <Link
            href="#booking"
            className="px-8 py-4 border border-ivory text-ivory font-medium text-sm tracking-widest uppercase hover:bg-ivory hover:text-forest-dark transition-all duration-300"
          >
            Reserve Now
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-ivory/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={16} className="text-ivory/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}