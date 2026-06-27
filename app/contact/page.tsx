'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const setField = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))
  const canSend = form.name && form.email && form.subject && form.message

  const contacts = [
    { icon: Phone, label: 'Phone', value: '+62 812 3456 7890', sub: 'Daily 8:00 AM – 10:00 PM' },
    { icon: Mail, label: 'Email', value: 'hello@heavenvilla.com', sub: 'We reply within 24 hours' },
    { icon: MapPin, label: 'Location', value: 'West Java, Indonesia', sub: 'Exact address shared on booking' },
    { icon: Clock, label: 'Check-in', value: '2:00 PM', sub: 'Check-out 12:00 PM' },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Header */}
        <div className="relative h-56 bg-forest-dark flex items-end pb-10 px-6 md:px-12 pt-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-2">Get In Touch</p>
            <h1 className="font-display text-display-lg text-ivory">Contact Us</h1>
          </div>
        </div>

        <section className="section-pad">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — info */}
            <div>
              <h2 className="font-display text-display-md text-forest-dark mb-4">
                We&apos;d Love to<br /><em className="text-gold">Hear From You</em>
              </h2>
              <p className="text-forest-dark/60 text-sm leading-relaxed mb-10 max-w-sm">
                Whether you have a question about our villas, need help planning your stay, or just want to say hello — we&apos;re here.
              </p>

              <div className="space-y-6">
                {contacts.map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forest-dark flex items-center justify-center flex-none">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-forest-dark/40 text-xs tracking-widest uppercase mb-0.5">{label}</p>
                      <p className="text-forest-dark font-medium text-sm">{value}</p>
                      <p className="text-forest-dark/40 text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {!sent ? (
                <div className="bg-white p-8 shadow-sm border border-ivory-dark space-y-5">
                  <h3 className="font-display text-xl text-forest-dark mb-2">Send a Message</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        placeholder="Your name"
                        className="w-full border border-ivory-dark px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors placeholder:text-forest-dark/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        placeholder="your@email.com"
                        className="w-full border border-ivory-dark px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors placeholder:text-forest-dark/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setField('subject', e.target.value)}
                      placeholder="Booking inquiry, general question..."
                      className="w-full border border-ivory-dark px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors placeholder:text-forest-dark/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-forest-dark/50 mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setField('message', e.target.value)}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="w-full border border-ivory-dark px-3 py-3 text-sm text-forest-dark outline-none focus:border-forest transition-colors resize-none placeholder:text-forest-dark/30"
                    />
                  </div>

                  <button
                    onClick={() => canSend && setSent(true)}
                    disabled={!canSend}
                    className="w-full py-4 bg-forest text-ivory text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-forest-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Send size={14} /> Send Message
                  </button>
                </div>
              ) : (
                <div className="bg-white p-12 shadow-sm border border-ivory-dark text-center">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-forest-dark mb-3">Message Sent</h3>
                  <p className="text-forest-dark/60 text-sm leading-relaxed max-w-xs mx-auto">
                    Thank you, <strong>{form.name}</strong>. We&apos;ll get back to you at <strong>{form.email}</strong> within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}