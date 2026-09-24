# MANGO — Modern Advocates for New Global Opinions

A cinematic, multi-page website for MANGO, a student-led Model United Nations and public speaking organization.

## Structure

The entire site is a single self-contained `index.html` (no build step, no dependencies beyond a Google Fonts import) using hash-based client-side routing to behave like a real multi-page site:

- `#/` — Home
- `#/impact` — Our Impact
- `#/model-un` — Model UN
- `#/public-speaking` — Public Speaking
- `#/about` — About
- `#/people` — Our People
- `#/achievements` — Achievements
- `#/gallery` — Gallery
- `#/join` — Join the Future

## Running locally

Just open `index.html` in a browser, or serve the directory:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content

All statistics, awards, names, quotes, and photos are placeholders (clearly bracketed, e.g. `[YEAR]`, `[Conference Name]`) pending real MANGO content — see inline comments and bracketed text throughout `index.html` for where to plug in real data.
