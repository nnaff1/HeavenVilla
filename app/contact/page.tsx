import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = { title: 'Contact — HeavenVilla' }

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 section-pad">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Get in Touch</p>
          <h1 className="font-display text-display-lg text-forest-dark mb-6">
            Let's Plan Your <em className="text-gold">Escape</em>
          </h1>
          <p className="text-forest-dark/60 leading-relaxed mb-10">
            Our concierge team is available 7 days a week to help you find the perfect villa and craft a personalised itinerary.
          </p>
          <div className="space-y-3 text-forest-dark/70 text-sm">
            <p>📍 Jl. Surga Indah No. 1, Ubud, Bali 80571</p>
            <p>📞 +62 800 1234 567</p>
            <p>✉️ hello@heavenvilla.id</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
