import { Wifi, Car, Utensils, Wind, Waves, Flower2 } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const amenities = [
  { icon: Waves, title: 'Private Pool', desc: 'Every villa comes with its own pool — no sharing, no schedules, just water and silence.' },
  { icon: Utensils, title: 'Private Chef', desc: 'On-request dining prepared in your villa using local ingredients sourced that morning.' },
  { icon: Flower2, title: 'In-Villa Spa', desc: 'Traditional Javanese treatments brought to your doorstep by certified therapists.' },
  { icon: Wifi, title: 'High-Speed Wi-Fi', desc: "Seamlessly connected when you need it, perfectly disconnected when you don't." },
  { icon: Car, title: 'Airport Transfer', desc: 'Complimentary private transfers for stays of 3 nights or more.' },
  { icon: Wind, title: 'Climate Control', desc: 'Highland villas are naturally cool; lowland villas have silent AC and ceiling fans.' },
]

export default function ExperienceSection() {
  return (
    <section className="section-pad bg-forest-dark">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-3">The Experience</p>
            <h2 className="font-display text-display-lg text-ivory">
              Everything Taken
              <br />
              <em className="text-gold">Care Of</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="border border-white/10 p-7 hover:border-gold/40 transition-colors duration-500 group">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-5 group-hover:border-gold transition-colors duration-300">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-lg text-ivory mb-2">{title}</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}