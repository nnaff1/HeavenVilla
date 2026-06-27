import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-forest-dark font-display font-bold text-sm">
                H
              </span>
              <span className="font-display text-ivory text-xl tracking-wide">HeavenVilla</span>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6">
              A sanctuary where nature meets luxury. Experience the stillness of paradise, just for you.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase text-gold mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Our Villas', 'Gallery', 'Facilities', 'About Us', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/60 hover:text-gold text-sm transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase text-gold mb-6">Support</h4>
            <ul className="space-y-3">
              {['Booking & Rates', 'Cancellation Policy', 'FAQ', 'Privacy Policy', 'Terms'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/60 hover:text-gold text-sm transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase text-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-ivory/60 text-sm leading-relaxed">
                  Jl. Surga Indah No. 1<br />Ubud, Bali 80571
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:+628001234567" className="text-ivory/60 text-sm hover:text-gold transition-colors duration-300">
                  +62 800 1234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:hello@heavenvilla.id" className="text-ivory/60 text-sm hover:text-gold transition-colors duration-300">
                  hello@heavenvilla.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-ivory/40 text-xs">
            © {new Date().getFullYear()} HeavenVilla. All rights reserved.
          </p>
          <p className="text-ivory/40 text-xs">
            Crafted with care for those who seek peace.
          </p>
        </div>
      </div>
    </footer>
  )
}
