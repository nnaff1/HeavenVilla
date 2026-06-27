import { Wind, Droplets, Utensils, ShieldCheck, Wifi, Car } from 'lucide-react'

const amenities = [
  {
    icon: Droplets,
    title: 'Private Infinity Pool',
    desc: 'Each villa features a personal pool overlooking the jungle canopy.',
  },
  {
    icon: Utensils,
    title: 'In-Villa Dining',
    desc: 'Our chef prepares traditional Balinese cuisine served in complete privacy.',
  },
  {
    icon: Wind,
    title: 'Yoga & Wellness',
    desc: 'Morning yoga pavilions, spa treatments, and sound healing sessions.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Concierge',
    desc: 'Personal butler service available around the clock for every need.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    desc: "Seamlessly connected when you need it, perfectly disconnected when you don't.",
  },
  {
    icon: Car,
    title: 'Private Transfers',
    desc: 'Door-to-door service from Ngurah Rai Airport in air-conditioned vehicles.',
  },
]

export default function ExperienceSection() {
  return (
    <section className="section-pad bg-forest-dark relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-light/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-3">The Experience</p>
          <h2 className="font-display text-display-lg text-ivory max-w-2xl mx-auto">
            Every Detail,
            <br />
            <em className="text-gold">Thoughtfully Considered</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 border border-white/10 hover:border-gold/40 transition-all duration-500 cursor-default"
            >
              <div className="w-10 h-10 border border-gold/40 group-hover:border-gold flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={18} className="text-gold/70 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-display text-ivory text-lg mb-2">{title}</h3>
              <p className="text-ivory/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
