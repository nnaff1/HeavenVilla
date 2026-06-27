import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About — HeavenVilla',
  description: 'The story behind HeavenVilla — a sanctuary built on the belief that true luxury is found in nature.',
}

const team = [
  {
    name: 'Ariana Dewi',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'I built HeavenVilla because I wanted a place where silence feels like a luxury.',
  },
  {
    name: 'Bagas Pratama',
    role: 'Head of Hospitality',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'Every guest interaction is an opportunity to create a memory they carry home.',
  },
  {
    name: 'Lila Sanjaya',
    role: 'Villa Experience Curator',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    quote: 'The details nobody notices consciously are the ones they feel the most.',
  },
]

const values = [
  { num: '01', title: 'Intentional Design', desc: 'Every element in our villas is chosen with purpose — nothing is decorative without being meaningful.' },
  { num: '02', title: 'Nature First', desc: 'We build around the land, not on top of it. Our footprint is minimal; our experience is maximal.' },
  { num: '03', title: 'Quiet Luxury', desc: 'No uniforms, no scripts. Just genuine warmth from people who love what they do.' },
  { num: '04', title: 'Lasting Memory', desc: 'We measure success not by occupancy rates, but by how often guests return — and what they say when they do.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">

        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=85"
            alt="HeavenVilla"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Our Story</p>
            <h1 className="font-display text-display-xl text-ivory max-w-3xl">
              Built for Those Who<br /><em className="text-gold">Need to Disappear</em>
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">How It Started</p>
              <h2 className="font-display text-display-lg text-forest-dark mb-6">
                A Retreat Born From<br /><em className="text-gold">Personal Longing</em>
              </h2>
              <div className="space-y-4 text-forest-dark/70 leading-relaxed text-[15px]">
                <p>
                  HeavenVilla began in 2019 with a single question: why does luxury so often feel disconnected from the natural world? Our founder, Ariana Dewi, had spent years designing hotels that prioritized spectacle over stillness. She wanted something different.
                </p>
                <p>
                  The first villa was built on a hillside in West Java — a personal project that became a quiet obsession. Word spread slowly, the way good things do. By 2021, three villas. By 2023, a full collection. Not a chain. Not a brand. A point of view.
                </p>
                <p>
                  Today, HeavenVilla hosts guests from over 40 countries who share one thing in common: they came looking for rest, and found something deeper.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80"
                alt="Villa interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-forest-dark p-6 max-w-xs hidden lg:block">
                <p className="font-display text-gold text-display-md font-semibold">2019</p>
                <p className="text-ivory/60 text-sm mt-1">The year HeavenVilla welcomed its first guest</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad bg-forest-dark">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">What We Stand For</p>
              <h2 className="font-display text-display-lg text-ivory">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.num} className="border border-white/10 p-8 hover:border-gold/40 transition-colors duration-500">
                  <p className="text-gold/40 font-display text-4xl font-semibold mb-4">{v.num}</p>
                  <h3 className="font-display text-xl text-ivory mb-3">{v.title}</h3>
                  <p className="text-ivory/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">The People</p>
              <h2 className="font-display text-display-lg text-forest-dark">
                Who Makes<br /><em className="text-gold">HeavenVilla</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="overflow-hidden aspect-[3/4] mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-1">{member.role}</p>
                  <h3 className="font-display text-xl text-forest-dark mb-3">{member.name}</h3>
                  <p className="text-forest-dark/50 text-sm italic leading-relaxed">&ldquo;{member.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-pad bg-ivory-dark">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '3', label: 'Unique Villas' },
              { value: '1,200+', label: 'Guests Hosted' },
              { value: '40+', label: 'Countries' },
              { value: '4.97', label: 'Average Rating' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-display-lg text-gold font-semibold">{value}</p>
                <p className="text-forest-dark/50 text-xs tracking-widest uppercase mt-2">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-display-lg text-forest-dark mb-6">
              Ready to<br /><em className="text-gold">Experience It?</em>
            </h2>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 px-8 py-4 bg-forest text-ivory font-medium text-sm tracking-widest uppercase hover:bg-forest-light transition-all duration-300"
            >
              Explore Our Villas <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}