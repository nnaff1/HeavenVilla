# HeavenVilla 🌿

> Luxury villa rental website built with Next.js 14, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (display) + Inter (body)
- **Icons:** Lucide React
- **Language:** TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
heavenvilla/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata
│   ├── page.tsx            # Landing page (homepage)
│   ├── globals.css         # Tailwind + global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── rooms/
│   │   └── page.tsx        # Villa listing page
│   ├── gallery/
│   │   └── page.tsx        # Photo gallery page
│   └── contact/
│       └── page.tsx        # Contact page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Scroll-aware transparent → solid navbar
│   │   └── Footer.tsx      # Links, contact info, social
│   └── sections/
│       ├── HeroSection.tsx       # Full-bleed hero with parallax
│       ├── BookingWidget.tsx     # Check-in / check-out / guests widget
│       ├── VillasSection.tsx     # 3-villa card grid
│       ├── ExperienceSection.tsx # Amenities 6-grid (dark bg)
│       ├── GallerySection.tsx    # Mosaic photo grid preview
│       ├── TestimonialsSection.tsx  # Guest reviews
│       └── CTASection.tsx        # Newsletter signup
│
├── lib/                    # Utilities / helpers (add here)
├── public/                 # Static assets
├── tailwind.config.js      # Design tokens (colors, fonts, spacing)
└── next.config.js
```

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `forest` | `#1A3329` | Primary brand green |
| `forest-dark` | `#0D1F1A` | Darkest backgrounds |
| `ivory` | `#F5EFE0` | Light backgrounds |
| `gold` | `#C9A84C` | Accent, CTA highlights |
| `terra` | `#D4846A` | Warm secondary accent |

**Fonts:**
- `font-display` → Playfair Display (headings, italic accents)
- `font-body` → Inter (all body text)

---

## Next Steps

- [ ] Connect real booking/payment system (Stripe / Midtrans)
- [ ] Add individual villa detail pages (`/rooms/[id]`)
- [ ] Build full gallery with lightbox
- [ ] Add CMS (Sanity / Contentful) for villa content
- [ ] Integrate WhatsApp / email contact form
- [ ] Add animations with Framer Motion
- [ ] SEO: sitemap, structured data (schema.org)
- [ ] Deploy to Vercel
