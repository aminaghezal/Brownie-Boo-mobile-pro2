# Brownie Boo Design System

## Overview

**Brownie Boo** is an Algerian artisan brownie brand (based in Oran/Algiers) specialising in handcrafted, premium brownies sold in customisable gift boxes. The brand is warm, playful and family-friendly — centred on a loveable polar bear mascot who bakes, boxes, and savours brownies.

### Products / Surfaces
| Surface | Description |
|---|---|
| **Landing page** (`index.html`) | Marketing homepage with hero, flavours, menu sections, and contact |
| **Choose flow** (`choose.html`) | Box-type selection (Personalized, Party, Special) |
| **Order flow** (`order.html`) | Flavour picker + cart + checkout |
| **Party orders** (`party.html`) | Party pack ordering (30+ brownies) |
| **Special boxes** (`special.html`) | Gift box ordering |

### Sources
- **GitHub repo**: `https://github.com/aminaghezal/Brownie-Boo` (branch: `index`)
- **Brand imagery**: 4 AI-generated brand asset PNGs provided in `uploads/`
- **No Figma link provided**

---

## Content Fundamentals

### Tone & Voice
- **Warm, indulgent, and joyful** — copy reads like a friend recommending their favourite treat
- **Second person ("you")** — "Treat yourself", "Experience the perfect blend"
- **Elevated but approachable** — words like "artisanal", "premium", "masterpiece" sit alongside "love", "goodness", "yummy"
- **No emoji in body copy** (emoji used sparingly in footer contact info only: 📧 📞 📍)
- **Title Case** for headings and section labels
- **Sentence case** for body paragraphs

### Example Copy
- Hero: *"Indulge in Our Premium Brownies"* / *"Experience the perfect blend of rich chocolate, premium ingredients, and artisanal craftsmanship."*
- Badge: *"Handcrafted with Love"*
- CTA buttons: *"Make an Order"*, *"Order Now"*, *"View Menu"*
- Features: *"Made with love and premium ingredients"*, *"Handcrafted in small batches for freshness"*
- Section headers: *"Our Signature Flavours"*, *"Share Your Thoughts"*

### Casing Rules
- Headings: Title Case
- Navigation: Title Case
- Buttons: Title Case
- Body: Sentence case
- Badges/labels: Title Case or ALL CAPS for emphasis

---

## Visual Foundations

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--bb-orange` | `#FF8C00` | Primary CTA, accents, hover states, icons |
| `--bb-orange-dark` | `#e67e00` | Gradient end, pressed states |
| `--bb-brown` | `#8B4513` | Headings, primary text, borders |
| `--bb-brown-dark` | `#654321` | Footer bg, dark gradient |
| `--bb-brown-black` | `#020100` | Body text (near-black) |
| `--bb-light-brown` | `#ddcdb9` | Borders, muted dividers |
| `--bb-tan` | `#D2B48C` | Decorative patterns |
| `--bb-yellow` | `#edfd0b` | "Popular" badge backgrounds |
| `--bb-cream` | `#FFF8DC` | Page background base |
| `--bb-cream-light` | `#FFFEF7` | Gradient end of background |
| `--bb-white` | `#FFFFFF` | Card surfaces, form fields |

### Typography
- **Display / Headings**: `cursive` → substituted with **Playfair Display** (Google Fonts). Hero titles are 3.5–4rem, weight 900.
- **Body**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` → substituted with **Nunito** for better web rendering
- **Line height**: 1.6 (body), 1.1–1.2 (headings)
- **Nav links**: 1.1rem, weight 600
- **Buttons**: 1rem–1.2rem, weight 600

> ⚠️ **Font substitution**: The codebase uses generic `cursive` for headings. The logos suggest a rounded bold serif (similar to Playfair Display or Calistoga). Please supply the original font files if available.

### Spacing & Layout
- Container max-width: **1200px**, padding 0 20px
- Section padding: **6rem 0**
- Grid gaps: 2.5–3rem
- Card padding: **2–2.5rem**

### Backgrounds
- Page: cream-to-light-cream gradient (`#FFF8DC → #FFFEF7`)
- Dot/grain patterns (SVG inlined) on hero and menu sections — very subtle
- Footer: dark brown gradient (`#020100 → #654321`)
- No full-bleed photography backgrounds; imagery is contained within cards

### Cards
- Background: `#FFFFFF`
- Border-radius: **1.5rem** (24px) — very rounded
- Shadow: `0 10px 30px rgba(139, 69, 19, 0.1)`
- Hover shadow: `0 20px 40px rgba(139, 69, 19, 0.2)` + `translateY(-10px)`
- Overflow hidden on image containers

### Borders & Radii
- Buttons: 12px (standard), 15px (large), 8px (small)
- Inputs: 10px
- Badges/pills: 20–25px (fully rounded)
- Cards: 24px

### Shadows
- Default: `0 10px 30px rgba(139, 69, 19, 0.1)` (brown-tinted)
- Hover: `0 20px 40px rgba(139, 69, 19, 0.2)`
- CTA orange shadow: `0 4px 15px rgba(255, 140, 0, 0.3)`

### Hover & Press States
- Cards: `translateY(-10px)` + deeper shadow
- Buttons (primary): `translateY(-3px)` + deeper orange shadow
- Nav links: `color → orange` + `translateY(-2px)` + underline fill animation
- Info cards: `translateX(10px)`
- Hover overlays on card images: dark brown `rgba(139, 69, 19, 0.85)` fade-in

### Animations
- **Entrance**: `fadeInUp` (from translateY(30px), staggered with `animation-delay`)
- **Slide in**: `slideInLeft` / `slideInRight` for hero columns
- **Float**: `translateY(0 → -10px) rotate(0 → 5deg)` — used on icons and logo
- **Pulse**: box-shadow expansion on CTA buttons
- **Spin**: loading spinner
- **BouncIn**: rating badge entrance
- Easing: `ease`, `ease-out`, `ease-in-out` — no cubic-bezier; all soft
- Durations: 0.3s (interactions), 0.4s (card hovers), 1s (entrance), 3s (float loops)

### Imagery
- **Color vibe**: warm-toned photography — rich chocolate browns, amber caramel, creamy whites
- **Style**: close-up food photography; occasional lifestyle/bakery images
- **Aspect ratios**: square (200×200) for menu cards, 250px-height hero cards
- **Overlays**: subtle warm gradient `rgba(139,69,19,0.1) → rgba(255,140,0,0.1)` on card images

### Iconography
- **Icon library**: Font Awesome 6.0.0 (CDN: `cdnjs.cloudflare.com`)
- **Usage**: `fas fa-heart`, `fas fa-star`, `fas fa-sparkles`, `fas fa-bars`, `fas fa-shopping-cart`
- Emoji used only in footer contact: 📧 📞 📍
- No custom icon SVGs or icon fonts beyond FA

### Mascots / Illustrations
- **Polar bear mascot**: appears in multiple styles:
  - `assets/logo-bear-circle.png` — circle badge logo with bear holding brownie
  - `assets/logo-cute-brownie.png` — cute kawaii brownie character (separate from bear)
  - `assets/illustration-bear-box.png` — line-art bear opening brownie box
  - `assets/illustration-bear-chef.png` — line-art bear with chef hat baking
- All illustrations use the same **dark brown `#5C3A0D`** line stroke on off-white/cream backgrounds
- Style: minimal line-art with gentle curves; kawaii-adjacent but not childish

---

## Iconography

Font Awesome 6.0.0 loaded from CDN. No custom icon font. Common icons:
- `fas fa-heart` — love/favourites
- `fas fa-star` — ratings
- `fas fa-sparkles` — premium/special
- `fas fa-shopping-cart` — cart
- `fas fa-bars` — mobile menu
- `fas fa-check` — features list
- `fas fa-arrow-left` — back navigation

---

## File Index

```
/
├── README.md                        ← This file
├── SKILL.md                         ← Agent skill descriptor
├── colors_and_type.css              ← CSS design tokens (vars + semantic styles)
├── assets/
│   ├── logo.png                     ← Primary logo (bear in circle + wordmark)
│   ├── logo-no-bg.png               ← Logo, transparent background
│   ├── logo-bear-circle.png         ← Alt logo: bear circle badge
│   ├── logo-cute-brownie.png        ← Kawaii brownie character logo
│   ├── illustration-bear-box.png    ← Bear opening brownie box (line art)
│   ├── illustration-bear-chef.png   ← Bear baking with chef hat (line art)
│   ├── hero-brownies.png            ← Hero section brownie photo
│   ├── brownie-*.jpg                ← Flavour photos (classic, caramel, walnut, double, bueno, oreo)
│   ├── box-*.jpg                    ← Box product photos (classic, party, special)
│   ├── bakery.png                   ← Bakery/contact section image
│   └── menu.png                     ← Full menu image
├── preview/                         ← Design System card previews
│   ├── colors-primary.html
│   ├── colors-neutral.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-scale.html
│   ├── spacing-tokens.html
│   ├── shadows.html
│   ├── radii.html
│   ├── buttons.html
│   ├── cards.html
│   ├── badges.html
│   ├── forms.html
│   ├── nav.html
│   ├── logo-brand.html
│   └── illustrations.html
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html               ← Full website kit (interactive)
        ├── Header.jsx
        ├── Hero.jsx
        ├── FlavourGrid.jsx
        ├── MenuCards.jsx
        ├── OrderFlow.jsx
        └── Footer.jsx
```
