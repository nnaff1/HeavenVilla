import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HeavenVilla — Escape to Paradise',
  description:
    'Nestled in nature, HeavenVilla offers an unparalleled luxury retreat. Private villas, world-class service, unforgettable moments.',
  keywords: ['villa', 'luxury', 'retreat', 'vacation', 'nature', 'HeavenVilla'],
  openGraph: {
    title: 'HeavenVilla — Escape to Paradise',
    description: 'Private luxury villas nestled in nature.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-ivory font-body text-forest-dark antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}