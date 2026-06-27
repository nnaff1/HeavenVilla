'use client'

import { useState } from 'react'
import { X, Calendar, Users, User, Mail, Phone, FileText, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react'
import { Villa, formatIDR } from '@/lib/villas'

interface Props {
  villa: Villa
  onClose: () => void
}

interface FormData {
  checkIn: string
  checkOut: string
  guests: number
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests: string
}

const STEPS = ['Dates & Guests', 'Your Details', 'Confirm']

function getNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0
  const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime()
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
}

function formatDate(dateStr: string) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BookingForm({ villa, onClose }: Props) {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    checkIn: '', checkOut: '', guests: 2,
    firstName: '', lastName: '', email: '', phone: '', specialRequests: '',
  })

  const nights = getNights(form.checkIn, form.checkOut)
  const total = nights * villa.price
  const serviceFee = Math.round(total * 0.05)
  const grandTotal = total + serviceFee

  const setField = (key: keyof FormData, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }))

  const canNext = () => {
    if (step === 0) return form.checkIn && form.checkOut && nights > 0
    if (step === 1) return form.firstName && form.lastName && form.email && form.phone
    return true
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-forest-dark/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full md:max-w-2xl bg-ivory shadow-2xl max-h-[95vh] overflow-y-auto rounded-t-2xl md:rounded-none">

        {/* Header */}
        <div className="sticky top-0 z-10 bg-forest-dark px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-0.5">HeavenVilla</p>
            <h2 className="font-display text-ivory text-xl">{villa.name}</h2>
          </div>
          <button onClick={onClose} className="text-ivory/50 hover:text-ivory transition-colors"><X size={22} /></button>
        </div>

        {!submitted ? (
          <>
            {/* Step indicators */}
            <div className="px-6 pt-5 pb-0">
              <div className="flex items-center gap-0">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${i < step ? 'bg-gold text-forest-dark' : i === step ? 'bg-forest text-ivory' : 'bg-ivory-dark text-forest-dark/30'}`}>
                        {i < step ? '✓' : i + 1}
                      </div>
                      <p className={`text-[10px] tracking-widest uppercase mt-1.5 whitespace-nowrap ${i === step ? 'text-forest font-medium' : 'text-forest-dark/30'}`}>
                        {label}
                      </p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`h-px flex-1 mx-2 mb-4 transition-all duration-500 ${i < step ? 'bg-gold' : 'bg-ivory-dark'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step content */}
            <div className="px-6 py-7">
              {/* Step 0 */}
              {step === 0 && (
                <div className="space-y-5">
                  <h3 className="font-display text-forest-dark text-lg mb-6">When would you like to stay?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Check In</label>
                      <input type="date" min={today} value={form.checkIn}
                        onChange={(e) => { setField('checkIn', e.target.value); if (form.checkOut && e.target.value >= form.checkOut) setField('checkOut', '') }}
                        className="w-full border border-ivory-dark bg-white px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Check Out</label>
                      <input type="date" min={form.checkIn || today} value={form.checkOut}
                        onChange={(e) => setField('checkOut', e.target.value)}
                        className="w-full border border-ivory-dark bg-white px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors"
                      />
                    </div>
                  </div>
                  {nights > 0 && (
                    <div className="bg-gold/10 border border-gold/30 px-4 py-3 text-sm text-forest-dark">
                      <span className="font-medium">{nights} night{nights > 1 ? 's' : ''}</span> · {formatDate(form.checkIn)} → {formatDate(form.checkOut)}
                    </div>
                  )}
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Number of Guests</label>
                    <div className="flex items-center gap-4">
                      <button onClick={() => setField('guests', Math.max(1, form.guests - 1))} className="w-10 h-10 border border-ivory-dark hover:border-forest flex items-center justify-center text-lg transition-colors">−</button>
                      <span className="font-display text-forest-dark text-xl w-8 text-center">{form.guests}</span>
                      <button onClick={() => setField('guests', Math.min(villa.guests, form.guests + 1))} className="w-10 h-10 border border-ivory-dark hover:border-forest flex items-center justify-center text-lg transition-colors">+</button>
                      <span className="text-forest-dark/50 text-sm">{form.guests === 1 ? 'guest' : 'guests'} · max {villa.guests}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="font-display text-forest-dark text-lg mb-6">Your details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">First Name</label>
                      <input type="text" value={form.firstName} onChange={(e) => setField('firstName', e.target.value)} placeholder="Anya"
                        className="w-full border border-ivory-dark bg-white px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors placeholder:text-forest-dark/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Last Name</label>
                      <input type="text" value={form.lastName} onChange={(e) => setField('lastName', e.target.value)} placeholder="Putri"
                        className="w-full border border-ivory-dark bg-white px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors placeholder:text-forest-dark/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} placeholder="anya@email.com"
                      className="w-full border border-ivory-dark bg-white px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors placeholder:text-forest-dark/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(e) => setField('phone', e.target.value)} placeholder="+62 812 3456 7890"
                      className="w-full border border-ivory-dark bg-white px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors placeholder:text-forest-dark/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Special Requests <span className="normal-case text-forest-dark/30">(optional)</span></label>
                    <textarea value={form.specialRequests} onChange={(e) => setField('specialRequests', e.target.value)}
                      placeholder="Allergies, celebrations, accessibility needs, arrival time..." rows={3}
                      className="w-full border border-ivory-dark bg-white px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors resize-none placeholder:text-forest-dark/30"
                    />
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-display text-forest-dark text-lg mb-6">Review your booking</h3>
                  <div className="flex gap-4">
                    <img src={villa.gallery[0]} alt={villa.name} className="w-20 h-16 object-cover flex-none" />
                    <div>
                      <p className="font-display text-forest-dark font-medium">{villa.name}</p>
                      <p className="text-forest-dark/50 text-xs mt-0.5">{villa.tagline}</p>
                    </div>
                  </div>
                  <div className="h-px bg-ivory-dark" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-forest-dark/40 text-xs tracking-widest uppercase mb-1">Check In</p>
                      <p className="text-forest-dark font-medium">{formatDate(form.checkIn)}</p>
                      <p className="text-forest-dark/40 text-xs">2:00 PM</p>
                    </div>
                    <div>
                      <p className="text-forest-dark/40 text-xs tracking-widest uppercase mb-1">Check Out</p>
                      <p className="text-forest-dark font-medium">{formatDate(form.checkOut)}</p>
                      <p className="text-forest-dark/40 text-xs">12:00 PM</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-forest-dark/40 text-xs tracking-widest uppercase mb-1">Guests</p>
                      <p className="text-forest-dark font-medium">{form.guests} {form.guests === 1 ? 'guest' : 'guests'}</p>
                    </div>
                    <div>
                      <p className="text-forest-dark/40 text-xs tracking-widest uppercase mb-1">Name</p>
                      <p className="text-forest-dark font-medium">{form.firstName} {form.lastName}</p>
                    </div>
                  </div>
                  <div className="h-px bg-ivory-dark" />
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between text-forest-dark/70">
                      <span>{formatIDR(villa.price)} × {nights} night{nights > 1 ? 's' : ''}</span>
                      <span>{formatIDR(total)}</span>
                    </div>
                    <div className="flex justify-between text-forest-dark/70">
                      <span>Service fee (5%)</span>
                      <span>{formatIDR(serviceFee)}</span>
                    </div>
                    <div className="h-px bg-ivory-dark" />
                    <div className="flex justify-between font-medium text-forest-dark">
                      <span className="font-display text-base">Total</span>
                      <span className="font-display text-base text-gold">{formatIDR(grandTotal)}</span>
                    </div>
                    <p className="text-forest-dark/40 text-xs">No payment collected now. Our team will contact you to confirm.</p>
                  </div>
                  {form.specialRequests && (
                    <div className="bg-ivory-dark/60 px-4 py-3 text-xs text-forest-dark/60">
                      <span className="font-medium text-forest-dark/80">Special requests: </span>{form.specialRequests}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer nav */}
            <div className="sticky bottom-0 bg-ivory border-t border-ivory-dark px-6 py-4 flex items-center justify-between gap-4">
              <button onClick={() => step === 0 ? onClose() : setStep((s) => s - 1)} className="flex items-center gap-2 text-forest-dark/50 hover:text-forest-dark text-sm transition-colors">
                <ChevronLeft size={16} />{step === 0 ? 'Cancel' : 'Back'}
              </button>
              {step < 2 ? (
                <button onClick={() => setStep((s) => s + 1)} disabled={!canNext()}
                  className="flex items-center gap-2 px-7 py-3 bg-forest text-ivory text-sm font-medium tracking-widest uppercase hover:bg-forest-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight size={16} />
                </button>
              ) : (
                <button onClick={() => setSubmitted(true)}
                  className="flex items-center gap-2 px-7 py-3 bg-gold text-forest-dark text-sm font-medium tracking-widest uppercase hover:bg-gold-light transition-colors"
                >
                  Confirm Booking <CheckCircle size={16} />
                </button>
              )}
            </div>
          </>
        ) : (
          /* Success */
          <div className="px-6 py-16 text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-gold" />
            </div>
            <h3 className="font-display text-display-md text-forest-dark mb-3">Booking Received</h3>
            <p className="text-forest-dark/60 text-sm leading-relaxed max-w-sm mx-auto mb-2">
              Thank you, <strong>{form.firstName}</strong>. We&apos;ve received your request for <strong>{villa.name}</strong>.
            </p>
            <p className="text-forest-dark/50 text-sm mb-8">
              Our team will reach you at <strong>{form.email}</strong> within 24 hours to confirm.
            </p>
            <div className="bg-ivory-dark/50 p-5 text-left text-sm text-forest-dark/60 mb-8 max-w-xs mx-auto space-y-1.5">
              <div className="flex justify-between"><span>Check In</span><span className="font-medium text-forest-dark">{formatDate(form.checkIn)}</span></div>
              <div className="flex justify-between"><span>Check Out</span><span className="font-medium text-forest-dark">{formatDate(form.checkOut)}</span></div>
              <div className="flex justify-between"><span>Guests</span><span className="font-medium text-forest-dark">{form.guests}</span></div>
              <div className="flex justify-between border-t border-ivory-dark pt-1.5 mt-1.5">
                <span>Total</span><span className="font-display font-semibold text-gold">{formatIDR(grandTotal)}</span>
              </div>
            </div>
            <button onClick={onClose} className="px-8 py-3 border border-forest text-forest text-sm tracking-widest uppercase hover:bg-forest hover:text-ivory transition-all duration-300">
              Back to Villa
            </button>
          </div>
        )}
      </div>
    </div>
  )
}