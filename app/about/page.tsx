import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = { title: 'About — HeavenVilla' }

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 section-pad">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Our Story</p>
          <h1 className="font-display text-display-lg text-forest-dark mb-6">
            Born from a Love of
            <br />
            <em className="text-gold">Quiet Places</em>
          </h1>
          <p className="text-forest-dark/70 leading-relaxed">
            HeavenVilla was founded in 2018 by a family who believed that true luxury is not about opulence — it's about space, time, and stillness. We built our first villa with our own hands, nestled in Ubud's ancient forest. Today, our collection has grown, but our philosophy remains the same: give every guest a place that feels like it was made just for them.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
