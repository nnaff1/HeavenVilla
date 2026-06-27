export interface Villa {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  gallery: string[]
  price: number
  guests: number
  sqm: number
  bedrooms: number
  bathrooms: number
  rating: number
  reviewCount: number
  badge: string | null
  amenities: { icon: string; label: string }[]
  highlights: string[]
  policies: string[]
}

export const villas: Villa[] = [
  {
    id: 'forest-suite',
    name: 'Forest Suite',
    tagline: 'Immersed in the canopy',
    description:
      'Tucked beneath the forest canopy, Forest Suite is designed for those who seek stillness. Floor-to-ceiling glass walls dissolve the boundary between inside and out — you wake to birdsong, light filtered through ancient trees, and a view of green that stretches further than you can follow. Designed with natural materials: raw teak, volcanic stone, handwoven rattan. Nothing is superfluous.',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
    ],
    price: 3500000,
    guests: 2,
    sqm: 80,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.9,
    reviewCount: 148,
    badge: 'Most Popular',
    amenities: [
      { icon: '🌿', label: 'Forest view' },
      { icon: '🛁', label: 'Soaking tub' },
      { icon: '☕', label: 'Nespresso machine' },
      { icon: '📶', label: 'High-speed Wi-Fi' },
      { icon: '❄️', label: 'AC & ceiling fan' },
      { icon: '🍳', label: 'Kitchenette' },
      { icon: '🚲', label: 'Bicycle rental' },
      { icon: '🧖', label: 'In-villa spa' },
    ],
    highlights: [
      'Private forest-facing terrace with daybed',
      'Open-air shower surrounded by tropical plants',
      'Daily housekeeping & turndown service',
      'Complimentary welcome amenity & fruit basket',
    ],
    policies: [
      'Check-in: 2:00 PM · Check-out: 12:00 PM',
      'No smoking inside the villa',
      'Pets not allowed',
      'Late checkout available (subject to availability)',
    ],
  },
  {
    id: 'jungle-pool-villa',
    name: 'Jungle Pool Villa',
    tagline: 'Private pool meets wild forest',
    description:
      'Our most requested villa. A 10-metre private infinity pool disappears into the treeline, creating the illusion that water and jungle are one. The architecture is deliberately open — the main pavilion connects to the bedroom through a covered walkway that invites the outside in. Designed for those who want luxury without interruption.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
    ],
    price: 5800000,
    guests: 4,
    sqm: 140,
    bedrooms: 2,
    bathrooms: 2,
    rating: 5.0,
    reviewCount: 203,
    badge: 'Premium',
    amenities: [
      { icon: '🏊', label: 'Private infinity pool' },
      { icon: '🌴', label: 'Jungle panorama' },
      { icon: '🛁', label: 'Rain shower & tub' },
      { icon: '📶', label: 'High-speed Wi-Fi' },
      { icon: '🍽️', label: 'Private chef (on request)' },
      { icon: '🍳', label: 'Full kitchen' },
      { icon: '🎶', label: 'Bose sound system' },
      { icon: '🧖', label: 'Daily spa credit' },
    ],
    highlights: [
      '10-metre private infinity pool overlooking jungle',
      'Separate living pavilion with open-air dining',
      'Dedicated villa host available 8am–10pm',
      'Complimentary airport transfers for stays 3+ nights',
    ],
    policies: [
      'Check-in: 2:00 PM · Check-out: 12:00 PM',
      'No smoking inside the villa',
      'Pets not allowed',
      'Early check-in available from 10:00 AM (IDR 500.000)',
    ],
  },
  {
    id: 'highland-escape',
    name: 'Highland Escape',
    tagline: 'Panoramic rice terrace views',
    description:
      'Perched at 680 metres above sea level, Highland Escape commands a view over terraced rice paddies that changes by the hour — gold at sunrise, emerald at midday, copper and violet at dusk. The design is restrained by intention: natural stone floors, linen curtains, hand-thrown ceramics. This is a place to slow down.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
      'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      'https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=80',
    ],
    price: 4200000,
    guests: 2,
    sqm: 100,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.8,
    reviewCount: 97,
    badge: null,
    amenities: [
      { icon: '🌾', label: 'Rice terrace view' },
      { icon: '☁️', label: 'Highland air (no AC needed)' },
      { icon: '🛁', label: 'Copper soaking tub' },
      { icon: '📶', label: 'Wi-Fi (Starlink)' },
      { icon: '🔥', label: 'Firepit terrace' },
      { icon: '🍳', label: 'Full kitchen' },
      { icon: '🌄', label: 'Private sunrise deck' },
      { icon: '🚿', label: 'Outdoor stone shower' },
    ],
    highlights: [
      'Sunrise & sunset view deck with hammock',
      'Highland morning mist experience (seasonal)',
      'Complimentary welcome basket with local produce',
      'Guided rice terrace walk available daily at 6:30 AM',
    ],
    policies: [
      'Check-in: 2:00 PM · Check-out: 12:00 PM',
      'No smoking inside the villa',
      'Pets allowed (small dogs only — IDR 200.000/night)',
      'Minimum 2-night stay on weekends',
    ],
  },
]

export function getVilla(id: string): Villa | undefined {
  return villas.find((v) => v.id === id)
}

export function formatIDR(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}