'use client'

import { useState } from 'react'
import { Calendar, Users, Search } from 'lucide-react'

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)

  return (
    <section id="booking" className="relative z-20 -mt-8">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="bg-forest-dark shadow-2xl shadow-forest-dark/40">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Check-in */}
            <div className="p-5 group">
              <label className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-2">
                <Calendar size={12} />
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-ivory text-sm outline-none placeholder:text-ivory/30 cursor-pointer [color-scheme:dark]"
              />
            </div>

            {/* Check-out */}
            <div className="p-5 group">
              <label className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-2">
                <Calendar size={12} />
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-ivory text-sm outline-none [color-scheme:dark]"
              />
            </div>

            {/* Guests */}
            <div className="p-5">
              <label className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase mb-2">
                <Users size={12} />
                Guests
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-6 h-6 border border-white/20 text-ivory/60 hover:border-gold hover:text-gold flex items-center justify-center text-sm transition-all"
                >
                  −
                </button>
                <span className="text-ivory text-sm w-4 text-center">{guests}</span>
                <button
                  onClick={() => setGuests((g) => Math.min(12, g + 1))}
                  className="w-6 h-6 border border-white/20 text-ivory/60 hover:border-gold hover:text-gold flex items-center justify-center text-sm transition-all"
                >
                  +
                </button>
                <span className="text-ivory/40 text-xs ml-1">{guests === 1 ? 'guest' : 'guests'}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="p-3 flex items-center">
              <button className="w-full h-full bg-gold text-forest-dark font-medium text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 py-2">
                <Search size={14} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
