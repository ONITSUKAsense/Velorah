# Velorah

> Where dreams rise through the silence.

Velorah is a cinematic brand website for a design studio that crafts tools for deep thinkers, bold creators, and quiet rebels. Built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

![Hero Section](https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=630&fit=crop)
*Placeholder: Replace with Hero section screenshot*

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Routing | React Router DOM v7 |
| SEO | react-helmet-async |
| i18n | Custom React Context (EN / 中文) |

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Fullscreen video hero + brand story + features + selected works |
| `/studio` | Studio | Filterable grid of projects with visual placeholders |
| `/about` | About | Brand narrative + team member cards |
| `/journal` | Journal | Article listing with tags and dates |
| `/journal/:slug` | Journal Detail | Full article with rich text content |
| `/reach-us` | Reach Us | Contact form + location + social links |

---

## Features

### Cinematic Hero

![Hero](https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=800&h=400&fit=crop)
*Placeholder: Replace with Hero region screenshot*

- Fullscreen looping video background (autoPlay, loop, muted, playsInline)
- Animated headline with staggered fade-up entrance
- Liquid-glass CTA button with gradient border effect

### Liquid Glass UI

Custom CSS effect applied to buttons and interactive elements:

- `backdrop-filter: blur(4px)` with semi-transparent background
- Gradient border via `mask-composite: exclude` pseudo-element
- Inset box shadow for subtle depth

### Bilingual Support (EN / 中文)

Toggle switch in the navigation bar switches all content between English and Chinese, including:

- Navigation labels and CTAs
- All page content (Home, Studio, About, Journal, Reach Us)
- Article bodies (6 full articles per language)
- Footer and metadata

### Studio Grid with Visual Placeholders

![Studio Grid](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop)
*Placeholder: Replace with Studio page screenshot*

- Filterable by category (All / Tools / Experiences / Installations / Interfaces)
- `AnimatePresence` layout animations on filter change
- Gradient overlay on images for text readability

### Scroll-Triggered Reveal Animations

Sections and cards fade up on scroll using Framer Motion's `whileInView` with staggered delays.

### Page Transition

Route changes fade through `AnimatePresence mode="wait"` for smooth navigation.

### SEO

Each page has a unique `<title>` and `<meta description>` via react-helmet-async, with Open Graph tags.

### Journal Detail Pages

![Journal](https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop)
*Placeholder: Replace with Journal page screenshot*

- 6 articles in each language with full body content
- Rich text support (bold leads, ordered lists, paragraphs)
- Tag filtering and date formatting

### Contact Form (Formspree Ready)

Form submission integrated with Formspree — replace the endpoint ID in `src/pages/ReachUs.tsx` to activate.

---

## Color Theme

```
--background: 201 100% 13%   (deep navy)
--foreground: 0 0% 100%      (white)
--muted-foreground: 240 4% 66%
--border: 0 0% 18%
```

## Fonts

- **Display:** Instrument Serif (Google Fonts) — used for headings
- **Body:** Inter (Google Fonts) — weights 400 / 500

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Footer.tsx               # Site footer with nav + social + contact
│   ├── GradientPlaceholder.tsx   # Deterministic gradient background utility
│   ├── Layout.tsx                # Root layout
│   ├── Navbar.tsx                # Navigation + language toggle
│   ├── Reveal.tsx                # Scroll-triggered animation wrapper
│   └── SEO.tsx                   # Helmet meta tags component
├── i18n/
│   ├── context.tsx               # Language provider + useLanguage hook
│   ├── en.ts                     # English translations
│   └── zh.ts                     # Chinese translations
├── pages/
│   ├── Home.tsx                  # Hero + brand story + features + works
│   ├── Studio.tsx                # Filterable project grid
│   ├── About.tsx                 # Brand story + team
│   ├── Journal.tsx               # Article listing
│   ├── JournalDetail.tsx         # Single article page
│   └── ReachUs.tsx               # Contact form + info
├── App.tsx                       # Router + providers
├── index.css                     # Tailwind + custom styles + keyframes
└── main.tsx                      # Entry point
```

---

## Screenshots

![Home Page](https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&h=630&fit=crop)
*Placeholder: Replace with full Home page screenshot*

![Studio Grid](https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=630&fit=crop)
*Placeholder: Replace with Studio grid screenshot*

![About Page](https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=630&fit=crop)
*Placeholder: Replace with About page screenshot*

![Journal Page](https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=630&fit=crop)
*Placeholder: Replace with Journal page screenshot*

![Reach Us Page](https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=630&fit=crop)
*Placeholder: Replace with Reach Us page screenshot*

---

## Deployment

```bash
npm run build
# Deploy the `dist/` directory to any static host (Vercel, Netlify, Cloudflare Pages, etc.)
```

## License

MIT
