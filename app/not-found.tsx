import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-forest-dark flex flex-col items-center justify-center text-center px-6">
      <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">404</p>
      <h1 className="font-display text-display-xl text-ivory mb-4">
        Lost in the<br /><em className="text-gold">Forest</em>
      </h1>
      <p className="text-ivory/50 text-sm max-w-sm leading-relaxed mb-10">
        The page you&apos;re looking for doesn&apos;t exist — but a stay at HeavenVilla certainly does.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-forest-dark transition-all duration-300"
      >
        <ArrowLeft size={14} /> Back to Home
      </Link>
    </main>
  )
}