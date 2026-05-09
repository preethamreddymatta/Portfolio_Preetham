# preetham-reddy-portfolio

Personal portfolio website for **Preetham Reddy Matta** — Data Scientist specializing in ML pipelines, predictive modeling, time-series forecasting, and geospatial ML.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS variables
- **Fonts:** Syne (display) · DM Sans (body) · JetBrains Mono (mono)
- **Language:** TypeScript
- **Rendering:** Client-side animations with IntersectionObserver

## Design

- Dark analytical aesthetic — inspired by real-time data dashboards
- Teal + Amber accent palette with grain texture overlay
- Animated skill bars, staggered section reveals, live chart in hero
- Fully responsive (mobile-first)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (assembles sections)
│   └── globals.css      # Global styles + design tokens
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx     # 5 featured projects
│   ├── Experience.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
└── lib/
    └── data.ts          # All portfolio content (single source of truth)
```

## Local Setup

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customization

All content lives in `src/lib/data.ts`. Edit that file to update personal info, links, projects, experience, and skills.

No environment variables required.

## Build

```bash
npm run build
npm start
```
