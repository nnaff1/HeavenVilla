'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { label: 'Villas', href: '/rooms' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-forest-dark/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-forest-dark font-display font-bold text-sm">
            H
          </span>
          <span className="font-display text-ivory text-xl tracking-wide group-hover:text-gold transition-colors duration-300">
            HeavenVilla
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ivory/80 hover:text-gold text-sm tracking-widest uppercase font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 border border-gold text-gold text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-forest-dark transition-all duration-300"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-ivory p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden bg-forest-dark/98 backdrop-blur-md overflow-hidden transition-all duration-500',
          mobileOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-ivory/80 hover:text-gold text-sm tracking-widest uppercase transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3 border-t border-white/10 mt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-forest-dark transition-all duration-300"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
