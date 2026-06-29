# 🏡 HeavenVilla

A luxury villa rental website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

🌐 **Live Demo:** [heaven-villa.vercel.app](https://heaven-villa.vercel.app)

## ✨ Features

- **Landing Page** — Full-bleed hero, booking widget, villa showcase, amenities, gallery, testimonials, and newsletter CTA
- **Villa Detail Page** — Photo gallery with lightbox, amenities, highlights, policies, and sticky booking card
- **Multi-step Booking Form** — Date picker, guest selector, personal details, price breakdown, and confirmation
- **Villa List Page** — All villas with ratings, pricing, and quick info
- **About Page** — Brand story, team, values, and stats
- **Gallery Page** — Masonry grid with filter by villa and lightbox
- **Contact Page** — Contact form with success state
- **WhatsApp Floating Button** — Direct chat to villa host
- **Scroll Reveal Animations** — Powered by Framer Motion
- **Custom 404 Page**
- **Fully Responsive** — Mobile, tablet, and desktop

## 🎨 Design

| Token | Value |
|-------|-------|
| Primary | Forest Green `#1A3329` |
| Accent | Gold `#C9A84C` |
| Background | Ivory `#F5EFE0` |
| Dark | Near-black `#0D1F1A` |
| Display Font | Playfair Display |
| Body Font | Inter |

## 🗂️ Project Structure

heavenvilla/

├── app/

│   ├── page.tsx              ← Landing page

│   ├── layout.tsx            ← Root layout

│   ├── not-found.tsx         ← 404 page

│   ├── about/page.tsx

│   ├── contact/page.tsx

│   ├── gallery/page.tsx

│   └── rooms/

│       ├── page.tsx          ← Villa list

│       └── [id]/page.tsx     ← Villa detail

├── components/

│   ├── booking/

│   │   └── BookingForm.tsx

│   ├── layout/

│   │   ├── Navbar.tsx

│   │   └── Footer.tsx

│   ├── sections/

│   │   ├── HeroSection.tsx

│   │   ├── BookingWidget.tsx

│   │   ├── VillasSection.tsx

│   │   ├── ExperienceSection.tsx

│   │   ├── GallerySection.tsx

│   │   ├── TestimonialsSection.tsx

│   │   └── CTASection.tsx

│   └── ui/

│       ├── ScrollReveal.tsx

│       └── WhatsAppButton.tsx

└── lib/

└── villas.ts             ← Villa data & types
