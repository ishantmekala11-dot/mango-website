# MANGO — Modern Advocates for New Global Opinions

A student-led Model United Nations and public speaking organization. This is the source for the marketing site: a real React application with real component architecture and a GSAP-driven motion system, not a simulated multi-page site.

## Stack

- **Vite + React 19 + TypeScript**
- **React Router v7**, every route code-split via `React.lazy()`
- **Tailwind CSS v4**, design tokens as CSS custom properties (`src/styles/tokens.css`)
- **GSAP + ScrollTrigger + SplitText** via `@gsap/react`'s `useGSAP()`, all motion gated behind `prefers-reduced-motion`
- **Lenis** for inertia smooth scroll
- Plain `<canvas>` for the network visualization and speech waveform

## Structure

```
src/
  main.tsx, App.tsx          # router root
  styles/                    # design tokens, globals
  lib/                       # gsap/lenis setup, routes, reduced-motion hook
  content/                   # typed placeholder data (stats, timeline, people, gallery, testimonials)
  components/
    layout/                  # Nav, MobileMenu, Footer, PageTransition, Cursor
    motion/                  # SplitHeadline, RevealOnScroll, Counter, PinnedSequence, NetworkCanvas, Waveform, Marquee, MagneticButton
    ui/                      # Button, Tag, FilterBar, Lightbox, StatGrid, Timeline, AchievementRow, PersonCard, StoryRow
  pages/                     # Home, Impact, ModelUN, PublicSpeaking, About, People, Achievements, Gallery, Join
```

Routes:

- `/` — Home
- `/impact` — Impact
- `/model-un` — Model UN
- `/public-speaking` — Public Speaking
- `/about` — About
- `/people` — People
- `/achievements` — Achievements
- `/gallery` — Gallery
- `/join` — Join

## Running locally

```
npm install
npm run dev
```

## Building

```
npm run build   # typecheck + production bundle to dist/
npm run preview # serve the production build locally
```

Deploys automatically to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

## Content

All statistics, awards, names, quotes, and gallery entries in `src/content/` are placeholders pending real MANGO data. The acronym meaning, mission, vision, and values on the About page reflect MANGO's actual brand identity.
