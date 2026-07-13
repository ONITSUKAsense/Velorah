# Velorah

> Where dreams rise through the silence.

<p align="right">
  <a href="README.zh-CN.md">中文</a>
</p>

Velorah is a cinematic brand website for a design studio that crafts tools for deep thinkers, bold creators, and quiet rebels. Built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

<img width="800" height="589" alt="image" src="https://github.com/user-attachments/assets/15aea233-0209-45ff-a841-cf967f8a3a0e" />


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

<img width="1891" height="984" alt="image" src="https://github.com/user-attachments/assets/794658d7-af8a-4df1-8399-3aa92dab2120" />


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

<img width="1887" height="987" alt="image" src="https://github.com/user-attachments/assets/a575d2d1-1af5-427e-8184-ada621711f0f" />


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

<img width="1880" height="988" alt="image" src="https://github.com/user-attachments/assets/c5a43369-e3ea-4419-a263-bf28f5950c6d" />


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

<img width="1889" height="990" alt="image" src="https://github.com/user-attachments/assets/c64e3221-ca48-4e7f-a277-379eef9a00c5" />


<img width="1886" height="985" alt="image" src="https://github.com/user-attachments/assets/bbafadfc-0551-4702-b7e3-b6af5e48d190" />


<img width="1885" height="984" alt="image" src="https://github.com/user-attachments/assets/3173ae7a-4d87-4b3f-b5c5-64744800056b" />

<img width="1885" height="984" alt="image" src="https://github.com/user-attachments/assets/15297622-9373-48b7-a81e-49fbc2b6e7aa" />



<img width="1889" height="987" alt="image" src="https://github.com/user-attachments/assets/4bd57bd2-788b-4adc-b4bf-b9ed81c17e84" />


---

## Deployment

```bash
npm run build
# Deploy the `dist/` directory to any static host (Vercel, Netlify, Cloudflare Pages, etc.)
```

## License

MIT
