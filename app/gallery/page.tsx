import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = { title: 'Gallery — HeavenVilla' }

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 section-pad">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Visual Journey</p>
          <h1 className="font-display text-display-lg text-forest-dark mb-6">Gallery</h1>
          <p className="text-forest-dark/60 mb-12">
            Full gallery coming soon. Return to{' '}
            <Link href="/" className="text-gold hover:underline">
              home
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
