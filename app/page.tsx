import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import BookingWidget from '@/components/sections/BookingWidget'
import VillasSection from '@/components/sections/VillasSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BookingWidget />
        <VillasSection />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
