# Buttercupp — Complete UI/UX Redesign Specification
> For AI agent / developer implementation. Every detail needed to code the full site.

---

## 1. Brand Analysis & Design Direction

### Who They Are
Buttercupp is Ahmedabad's most beloved artisan cupcake shop, located at 4 Advait Complex, Sandesh Press Road, Bodakdev. They've built a cult following on the promise of **no preservatives, no artificial flavours, no hydrogenated oils** — just fresh, handcrafted baked goods daily. Google rating: **4.5★**, Facebook: **86% recommend (2,695 reviews)**, MagicPin: **4.8★**.

### Brand Identity Keywords
Artisan · Warm · Luxurious without pretension · Fresh · Handcrafted · Nostalgic meets modern · Feminine but refined · Whimsical · Premium neighbourhood bakery

### Logo Analysis
The existing logo is a hand-lettered script wordmark in a warm golden-honey tone reading **"Buttercupp"** with a small cupcake illustration. The script is soft, rounded, and slightly playful — evoking a homey, artisan quality. The cupcake icon sits above or beside the text with a simple silhouette style.

### Design Direction: **"Warm Editorial Luxury"**
Think: a Paris pâtisserie discovered by a Vogue editor. Soft warm creams, deep browns, and dusty rose. Editorial whitespace. Organic curves. A serif display font that feels crafted but not stiff. This is NOT cold minimalism — it has warmth, texture, and soul. The design should feel like walking into the shop: that first waft of butter and vanilla.

---

## 2. Design System

### 2.1 Color Palette

```css
:root {
  /* Primary */
  --color-cream:       #FAF6EF;   /* background, base */
  --color-warm-white:  #FDF9F4;   /* card/panel background */
  --color-butter:      #E8C97A;   /* logo accent, highlights, CTAs */
  --color-caramel:     #C4853A;   /* hover states, warm accents */

  /* Deep / Rich */
  --color-cocoa:       #2C1A0E;   /* primary text, dark headlines */
  --color-espresso:    #1A0F07;   /* footer, dark sections background */
  --color-bark:        #5C3317;   /* secondary text, borders */

  /* Soft / Feminine Accents */
  --color-dusty-rose:  #E8B4A8;   /* accent, tags, badges */
  --color-blush:       #F2D9D2;   /* subtle section tint, hover backgrounds */
  --color-sage:        #A8B89A;   /* vegetarian badge, fresh accents */

  /* Utility */
  --color-border:      rgba(44, 26, 14, 0.10);
  --color-shadow:      rgba(44, 26, 14, 0.12);
}
```

### 2.2 Typography

```css
/* Import via Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&family=Sacramento&display=swap');

:root {
  /* Display / Hero Headlines */
  --font-display:    'Cormorant Garamond', Georgia, serif;  /* Elegant, editorial */

  /* Script accent (for decorative phrases, section labels) */
  --font-script:     'Sacramento', cursive;

  /* Body / UI */
  --font-body:       'Jost', sans-serif;  /* Clean, modern, slightly geometric */

  /* Scale */
  --text-xs:    0.75rem;    /* 12px */
  --text-sm:    0.875rem;   /* 14px */
  --text-base:  1rem;       /* 16px */
  --text-lg:    1.125rem;   /* 18px */
  --text-xl:    1.25rem;    /* 20px */
  --text-2xl:   1.5rem;     /* 24px */
  --text-3xl:   2rem;       /* 32px */
  --text-4xl:   2.75rem;    /* 44px */
  --text-5xl:   3.75rem;    /* 60px */
  --text-6xl:   5rem;       /* 80px */
  --text-hero:  7.5rem;     /* 120px — for large stacked hero text */

  /* Weight */
  --weight-light:   300;
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-semibold:600;

  /* Line height */
  --leading-tight:   1.1;
  --leading-snug:    1.3;
  --leading-normal:  1.6;
  --leading-relaxed: 1.8;

  /* Letter spacing */
  --tracking-tight:  -0.02em;
  --tracking-wide:   0.1em;
  --tracking-wider:  0.18em;
}
```

**Typography Rules for Agent:**
- All hero/display headlines: `font-family: var(--font-display)`, `font-weight: 300` or `400`, `letter-spacing: var(--tracking-tight)`
- Section labels / "eyebrow" text above headlines: `font-family: var(--font-body)`, `font-weight: 500`, `font-size: var(--text-xs)`, `text-transform: uppercase`, `letter-spacing: var(--tracking-wider)`, `color: var(--color-caramel)`
- Decorative accent phrases (e.g. "made with love"): `font-family: var(--font-script)`, `font-size: var(--text-3xl)`, `color: var(--color-butter)`
- Body copy: `font-family: var(--font-body)`, `font-weight: 300`, `font-size: var(--text-base)`, `line-height: var(--leading-relaxed)`, `color: var(--color-bark)`
- Price tags: `font-family: var(--font-display)`, `font-weight: 500`, `font-size: var(--text-xl)`, `color: var(--color-cocoa)`

### 2.3 Spacing & Layout

```css
:root {
  --space-1:    4px;
  --space-2:    8px;
  --space-3:    12px;
  --space-4:    16px;
  --space-6:    24px;
  --space-8:    32px;
  --space-10:   40px;
  --space-12:   48px;
  --space-16:   64px;
  --space-20:   80px;
  --space-24:   96px;
  --space-32:   128px;

  --max-width:        1200px;
  --max-width-narrow: 780px;

  --border-radius-sm:   6px;
  --border-radius-md:   12px;
  --border-radius-lg:   24px;
  --border-radius-full: 9999px;
}
```

**Grid:** 12-column grid on desktop, 4-column on mobile. Content max-width `1200px`, centered. Section padding `80px 0` desktop, `48px 0` mobile.

### 2.4 Elevation / Shadows

```css
:root {
  --shadow-xs:   0 1px 3px rgba(44, 26, 14, 0.06), 0 1px 2px rgba(44, 26, 14, 0.04);
  --shadow-sm:   0 4px 12px rgba(44, 26, 14, 0.08);
  --shadow-md:   0 8px 28px rgba(44, 26, 14, 0.12);
  --shadow-lg:   0 20px 60px rgba(44, 26, 14, 0.16);
  --shadow-card: 0 2px 16px rgba(44, 26, 14, 0.08), 0 0 0 1px rgba(44, 26, 14, 0.04);
}
```

### 2.5 Motion

```css
:root {
  --ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   600ms;
  --duration-lazy:   900ms;
}
```

**Animation principles:** Page load stagger (elements reveal with 80ms delay between each). Hover on cards: subtle `translateY(-4px)` + shadow increase. Image hover: `scale(1.03)`. Button hover: background shift + slight `translateY(-2px)`. No page transitions faster than 150ms. Use `will-change: transform` on animated elements.

---

## 3. Component Library

### 3.1 Navigation Bar

**Layout:** Fixed top. Full-width. Height `72px` desktop, `60px` mobile.

**Structure (left → center → right):**
- Left: Logo (SVG/PNG wordmark, height `48px`)
- Center: Nav links (desktop only)
- Right: CTA button + mobile hamburger

**Styling:**
```
Background: rgba(250, 246, 239, 0.92) with backdrop-filter: blur(16px) saturate(180%)
Border-bottom: 1px solid var(--color-border)
Box-shadow: 0 1px 0 rgba(44,26,14,0.06)
```

**Nav links:**
```
font-family: var(--font-body)
font-weight: 400
font-size: var(--text-sm)
letter-spacing: var(--tracking-wide)
text-transform: uppercase
color: var(--color-bark)
gap: 40px between links
Active state: color: var(--color-cocoa), underline using 1px bottom border in var(--color-butter)
Hover: color: var(--color-caramel), transition 200ms
```

**CTA Button (Order / Visit Us):**
```
Background: var(--color-butter)
Color: var(--color-cocoa)
Font: var(--font-body), weight 500, text-sm, uppercase, tracking-wider
Padding: 10px 24px
Border-radius: var(--border-radius-full)
Border: 1.5px solid var(--color-caramel)
Hover: background var(--color-caramel), color white, translateY(-1px)
```

**Mobile menu:** Full-screen overlay, background `var(--color-espresso)`, links in large Cormorant Garamond, white, vertical stacked with 32px gap. Include social icons at bottom.

---

### 3.2 Product Card

Used in Menu page grid and Homepage featured section.

```
Container:
  background: var(--color-warm-white)
  border-radius: var(--border-radius-lg)
  box-shadow: var(--shadow-card)
  overflow: hidden
  transition: transform 300ms ease-out-expo, box-shadow 300ms

Hover state:
  transform: translateY(-6px)
  box-shadow: var(--shadow-md)

Image section:
  aspect-ratio: 4/3
  overflow: hidden
  background: var(--color-blush)

  img:
    width: 100%, height: 100%, object-fit: cover
    transition: transform 500ms ease-out-expo
    Hover: scale(1.06)

Content section:
  padding: 20px 24px 24px

  Eyebrow (category):
    font: var(--font-body) 500 11px uppercase tracking-wider
    color: var(--color-caramel)
    margin-bottom: 6px

  Name:
    font: var(--font-display) 400 22px
    color: var(--color-cocoa)
    line-height: 1.25
    margin-bottom: 8px

  Description (optional, truncate at 2 lines):
    font: var(--font-body) 300 14px
    color: var(--color-bark)
    line-height: 1.6
    -webkit-line-clamp: 2
    margin-bottom: 12px

  Footer row (price + badge):
    display: flex, justify-content: space-between, align-items: center

    Price:
      font: var(--font-display) 500 20px
      color: var(--color-cocoa)

    Badge (Veg/Egg/GF):
      font: var(--font-body) 400 11px
      border-radius: var(--border-radius-full)
      padding: 3px 10px

      Veg: background #E8F5E9, color #388E3C, border 1px solid #A5D6A7
      Egg: background #FFF8E1, color #F57F17, border 1px solid #FFE082
      GF:  background #F3E5F5, color #7B1FA2, border 1px solid #CE93D8
```

---

### 3.3 Hero Section (Homepage)

**Layout:** Full-viewport-height (`100vh`). Overlapping text + image composition.

```
Container: position relative, overflow hidden
Background: var(--color-cream)

Left column (60% width desktop, 100% mobile):
  padding: 0 0 0 var(--space-16)
  display: flex, flex-direction: column, justify-content: center
  padding-top: 120px (below fixed nav)

  Eyebrow text:
    "Ahmedabad's finest since — everyday fresh"
    font: Jost 400 12px uppercase tracking-wider
    color: var(--color-caramel)
    letter-spacing: 0.2em
    margin-bottom: 24px

  Headline (stacked, two lines):
    Line 1: "Fresh"          — Cormorant Garamond 300, 96px, cocoa, italic
    Line 2: "from the oven"  — Cormorant Garamond 600, 80px, cocoa
    (On mobile: 52px / 44px)
    line-height: 1.0
    margin-bottom: 32px

  Subheadline:
    "No preservatives. No shortcuts. Just the finest cupcakes,
     bundt cakes, brownies, and biscuits — made fresh daily."
    font: Jost 300 17px
    color: var(--color-bark)
    max-width: 440px
    line-height: 1.8
    margin-bottom: 40px

  CTA row (two buttons side by side, gap 16px):
    Primary: "See Today's Menu" — filled butter background (see 3.1 button)
    Secondary: "Visit Us" — transparent, border 1.5px var(--color-bark), same padding, color var(--color-bark)

  Trust strip below CTA (margin-top: 48px):
    Three inline stats separated by a thin vertical bar (var(--color-border)):
    "4.5★ Google" | "4.8★ MagicPin" | "86% Recommended"
    font: Jost 400 12px, color var(--color-bark)

Right column (40% width desktop, hidden on mobile):
  position: absolute, right: 0, top: 0, bottom: 0
  width: 45%
  overflow: hidden

  Primary image (hero product shot):
    Full column height, object-fit: cover
    Subtle parallax: translateY on scroll (-0.15 * scrollY)

  Floating card overlay (bottom-left of image, hanging slightly onto left column):
    position: absolute, bottom: 80px, left: -40px
    background: var(--color-warm-white)
    border-radius: 16px
    padding: 20px 24px
    box-shadow: var(--shadow-lg)
    min-width: 200px
    Content: "Made Fresh Daily" in script font + small cupcake icon SVG
    Font: Sacramento 28px, color var(--color-cocoa)

  Decorative element: A thin curved SVG line (like a flour dusting arc) in var(--color-butter) at 20% opacity, top-right corner
```

**Animations on load (staggered):**
1. Eyebrow text: `opacity 0→1, translateY 20px→0`, delay 0ms
2. Line 1 headline: delay 80ms
3. Line 2 headline: delay 160ms
4. Subheadline: delay 240ms
5. Buttons: delay 320ms
6. Trust strip: delay 400ms
7. Hero image: `opacity 0→1`, delay 200ms, duration 800ms

---

### 3.4 "Our Story" / About Strip

**Layout:** Two-column, 50/50. Image left, text right. Or reversed on alternate sections.

```
Section: background var(--color-warm-white), padding var(--space-24) 0

Image column:
  Aspect ratio 3/4 (portrait)
  border-radius: var(--border-radius-lg)
  overflow: hidden
  Slight rotation: transform: rotate(-1.5deg) — gives organic, handcrafted feel

Text column:
  padding-left: var(--space-16) (desktop)
  display: flex, flex-direction: column, justify-content: center

  Eyebrow: "Our Story" — Jost 500 11px uppercase tracking-wider caramel
  Headline: "Made with love,\nnot shortcuts."
    Cormorant Garamond 300 italic 52px cocoa
  Body:
    "Buttercupp brings modern luxury to your table —
     cupcakes, bundt cakes, brownies, and biscuits
     crafted without preservatives, hydrogenated oils,
     or artificial flavours. Just the finest ingredients,
     fresh every single day."
    Jost 300 16px bark line-height 1.8
    margin-top: 20px

  Script accent (decorative, below body):
    "baked fresh daily" in Sacramento 36px var(--color-butter)

  Opening hours note (small):
    "Open 2pm until stocks last — daily"
    Jost 300 13px color var(--color-caramel)
    margin-top: 24px
```

---

### 3.5 Featured Products Section (Homepage)

**Layout:** Heading + horizontal scroll cards on mobile, 3-column grid on desktop.

```
Section: background var(--color-cream), padding var(--space-24) 0

Section header:
  display: flex, justify-content: space-between, align-items: flex-end
  margin-bottom: var(--space-12)

  Left:
    Eyebrow: "Fresh Today"
    Headline: "Our Signatures"
    Font: Cormorant Garamond 300 48px cocoa

  Right:
    "See full menu →" link
    Jost 400 14px caramel with arrow, hover underline

Grid: 3 columns, gap 28px desktop
      1 column on mobile with horizontal scroll (scroll-snap-type: x mandatory)

Featured items to show (from menu data):
  1. Double Dip (chocolate on chocolate, ₹100)
  2. Lemon Blueberry (₹110)
  3. D.C. Brownie (₹110)
  4. Classic Cheesecake (₹220/slice)
  5. Bundt Cake of the Day (₹110/slice)
  6. Red Velvet (₹100)
```

---

### 3.6 Marquee / Trust Banner

**A slow-scrolling infinite marquee strip** between sections.

```
Height: 52px
Background: var(--color-cocoa)
Content (repeating, separated by a small butter-colored cupcake icon ✦):
  "No Preservatives"  ✦  "Made Fresh Daily"  ✦  "Finest Ingredients"
  ✦  "Ahmedabad's Favourite"  ✦  "No Artificial Flavours"  ✦

Font: Jost 400 12px uppercase tracking-wider
Color: var(--color-butter)

Animation: CSS keyframes scroll left continuously, 30s linear infinite
```

---

### 3.7 Instagram / Gallery Strip

```
Section: background var(--color-espresso), padding var(--space-20) 0

Header:
  Centered
  Eyebrow: "Follow Along" — Jost 500 11px uppercase tracking-wider color: var(--color-butter) opacity 0.7
  Headline: "@buttercuppamd" — Cormorant Garamond 300 italic 44px color: var(--color-cream)

Gallery:
  5-column grid (desktop), 2-column (mobile), gap: 4px
  Square images (aspect-ratio: 1/1)
  On hover: overlay appears with butter-colored semi-transparent bg (rgba(232,201,122,0.35)) + Instagram icon centered
  transition: 300ms

CTA below:
  "View on Instagram" — ghost button (border var(--color-butter), color var(--color-butter))
  Centered, margin-top: 32px
```

---

### 3.8 Testimonials Section

```
Section: background var(--color-blush), padding var(--space-24) 0

Layout: 3 cards side by side desktop, 1 column mobile

Each card:
  background: var(--color-warm-white)
  border-radius: var(--border-radius-lg)
  padding: 32px 28px
  box-shadow: var(--shadow-sm)

  Stars: 5 × ★ in var(--color-butter), font-size 14px

  Quote (use real reviews):
    Cormorant Garamond 400 italic 20px cocoa line-height 1.6
    margin-top: 12px

  Reviewer name:
    Jost 500 14px bark margin-top 20px
    prefix: "— "

  Source badge: "Google" / "TripAdvisor" — tiny pill, Jost 400 11px

Sample quotes to pre-populate:
  "Freshly made cupcakes straight outta the oven. Soft, moist, rich
   with sumptuous frosting. At a price hard to believe."
   — Visitor via TripAdvisor

  "Double Choco Dip is a must-try. Perfectly baked, moist, with
   chocolate frosting bang on."
   — Customer via Google

  "Cupcakes better than this in Ahmedabad? Complete no.
   Melt in mouth. Reasonable rates."
   — Customer via TripAdvisor
```

---

### 3.9 Footer

```
Background: var(--color-espresso)
Color: var(--color-cream) (base)
Padding: var(--space-20) 0 var(--space-8)

Layout: 4 columns desktop, 2-column mobile, 1-column on small mobile

Column 1 — Brand:
  Logo (white/cream version), height 56px
  Tagline: "A Cupcake Shoppe" — Jost 300 13px opacity 0.6
  Social icons row (Instagram, Facebook): circular icon buttons
  border: 1px solid rgba(250,246,239,0.15), hover fill var(--color-butter)

Column 2 — Navigation:
  Heading: "Explore" — Jost 500 11px uppercase tracking-wider opacity 0.5
  Links: Home, Menu, Delivery, Visit Us, Social Media, Payment
  Jost 300 14px, opacity 0.7, hover opacity 1, hover color var(--color-butter)

Column 3 — Visit:
  Heading: "Find Us"
  Address:
    4, Advait Complex, Sandesh Press Road,
    Bodakdev, Ahmedabad 380054
  Hours: "Open 2pm daily until stocks last"
  Phone: +91 79 4032 5838
  Email: cupcake@buttercupp.com
  All: Jost 300 13px opacity 0.7

Column 4 — Newsletter:
  Heading: "Stay Sweet"
  Subtext: "Get updates on seasonal flavors."
  Input + Button row:
    Input: background rgba(255,255,255,0.08), border 1px rgba(255,255,255,0.15)
           border-radius var(--border-radius-md), padding 10px 16px
           placeholder color rgba(250,246,239,0.4)
    Button: background var(--color-butter), color var(--color-cocoa), font Jost 500 13px

Divider: 1px solid rgba(250,246,239,0.08), margin-top var(--space-12)

Bottom bar (copyright):
  "© 2035 Buttercupp — A Cupcake Shoppe"
  Jost 300 12px opacity 0.4
  Centered or space-between with legal links
```

---

## 4. Page-by-Page Specifications

---

### PAGE 1: Home (`/`)

**Section order:**
1. Navigation Bar (sticky)
2. Hero Section (full viewport)
3. Marquee Trust Banner
4. Featured Products Section ("Our Signatures")
5. About / Story Section (2-column)
6. Testimonials Section
7. Instagram Gallery Strip
8. Footer

**SEO meta:**
```html
<title>Buttercupp — Ahmedabad's Finest Cupcake Shoppe</title>
<meta name="description" content="Freshly baked cupcakes, bundt cakes, brownies & biscuits in Bodakdev, Ahmedabad. No preservatives. Made fresh daily. Open 2pm.">
```

---

### PAGE 2: Menu (`/menu`)

**Layout overview:** Page header → filter tabs → product grid

```
Page Header:
  Background: var(--color-cocoa)
  Height: 280px
  Content centered:
    Eyebrow: "What's Fresh Today"
    Headline: "Our Menu" — Cormorant 300 72px italic color cream
    Subtext: "Made fresh daily using the finest ingredients" — Jost 300 16px opacity 0.6

Category Filter Tabs (sticky below nav when scrolled):
  Background: var(--color-cream), border-bottom 1px solid var(--color-border)
  Tabs: "All" | "Cupcakes (Eggless)" | "Cupcakes (With Egg)" | "Biscuits" | "Bundt Cake" | "Cheesecake" | "Brownie" | "Chocolate Torte"

  Tab styling:
    Inactive: Jost 400 13px uppercase tracking-wide bark
    Active: color var(--color-cocoa), border-bottom 2px solid var(--color-butter)
    Padding: 16px 20px
    Transition: 200ms

Product Grid:
  4 columns desktop, 2 tablet, 1 mobile
  Gap: 24px
  Padding: var(--space-16) max-width container

  Cards: Use ProductCard component (section 3.2)

  Category section headers (appear between groups):
    Eyebrow label in caramel + thin divider line
    e.g. "Cupcake Flavors — Made Without Eggs"
    Below: a short italic description in Cormorant 300

Full menu items (pre-populate):

  EGGLESS CUPCAKES (₹100 each unless noted):
  - Double Dip (chocolate sponge + chocolate frosting)
  - Chocolate Vanilla
  - Oreo
  - Classic Vanilla
  - Banana Chocolate (wheat)
  - Mango / Chocolate Mango — ₹110, seasonal until June

  EGG CUPCAKES (₹100 each unless noted):
  - Red Velvet
  - Banana Chocolate (wheat)
  - Banana Creamcheese Honey
  - Mom's Pound Cake
  - Dark Knight — ₹110
  - Dark Chocolate with Caramel — ₹110
  - Lemon Blueberry — ₹110

  BISCUITS (butter, no vegetable fats):
  - Butter Biscuit: 200g Box ₹160 / 400g Tin ₹320
  - Orange Biscuit: 200g Box ₹160 / 400g Tin ₹320

  BUNDT CAKE:
  - Bundt Cake of the Day: 1 slice (100g) ₹110 / Uncut 1kg ₹1,100
  - Note: Reserve 1 day ahead for whole cake

  CHEESECAKE:
  - Classic Cheesecake: 1 slice (100g) ₹220 / Uncut 1kg ₹2,640

  BROWNIE:
  - D.C. Brownie: ₹110 (confirm availability with associate)

  CHOCOLATE TORTE:
  - Chocolate Torte: ₹240/slice — Gluten Free, no flour/added sugar

Allergen legend bar (sticky bottom or just below filter tabs):
  Row of icon+label pills: 🌿 Vegetarian | 🥚 Contains Eggs | 🌾 Contains Wheat | ✦ Gluten Free
```

---

### PAGE 3: Delivery (`/delivery-in-ahmedabad`)

```
Page Header: Same dark header style as Menu page
  Headline: "Delivery in Ahmedabad"

Hero info card (centered, large):
  background: var(--color-warm-white)
  border-radius: var(--border-radius-lg)
  padding: var(--space-12) var(--space-16)
  max-width: 640px, centered
  shadow: var(--shadow-md)

  Icon + text rows:
  📍 "We deliver across Ahmedabad"
  ⏰ "Order by 12pm for same-day delivery"
  📦 "Minimum order may apply — contact us"
  📞 "+91 79 4032 5838"

Delivery platforms section:
  Heading: "Order Through" — Cormorant 300 italic 36px
  3 platform cards (horizontal row):
    Swiggy | Zomato | Direct (WhatsApp/Call)
    Each: logo + platform name + "Order Now →" link
    Card styling: border 1.5px var(--color-border), border-radius var(--border-radius-md), padding 24px, hover border-color var(--color-butter)

Map embed:
  Google Maps iframe showing shop location
  border-radius: var(--border-radius-lg), overflow: hidden

FAQ accordion (3–4 items):
  Q: Do you deliver outside Ahmedabad?
  Q: What is the delivery time?
  Q: Can I order in advance for a special occasion?
  Q: Do you deliver whole cakes / bundt cakes?

  Accordion style:
    Border-bottom 1px var(--color-border)
    Question: Jost 400 16px cocoa
    Answer: Jost 300 15px bark line-height 1.8
    Toggle: "+" / "−" in var(--color-caramel)
```

---

### PAGE 4: Visit Us (`/contact-us`)

```
Page Header: Dark header, Headline: "Come Say Hello"

Two-column layout:

Left — Info:
  Address card:
    Large map pin icon (SVG, var(--color-butter))
    "4, Advait Complex\nSandesh Press Road\nBodakdev, Ahmedabad 380054"
    Cormorant 300 26px line-height 1.4

  Hours:
    "Open 2:00 PM — Until Stocks Last"
    "Monday to Sunday"
    Jost 400 15px caramel

  Contact:
    Phone: +91 79 4032 5838
    Email: cupcake@buttercupp.com

  Parking note:
    "Street parking available on Sandesh Press Road"
    Jost 300 13px bark italic

  "Find us near Vastrapur Lake" — subtle location context

Right — Embedded Map:
  Google Maps embed for "Buttercupp Ahmedabad"
  width: 100%, height: 480px
  border-radius: var(--border-radius-lg)
  border: 1px solid var(--color-border)

Contact form (below two-column):
  Heading: "Get in Touch" — Cormorant 300 italic 36px
  Fields:
    Name (text input)
    Email (email input)
    Message (textarea, 5 rows)
  Submit: "Send Message" — primary CTA button
  Form max-width: 560px centered

  Input styling:
    border: 1.5px solid var(--color-border)
    border-radius: var(--border-radius-md)
    padding: 12px 16px
    font: Jost 300 15px
    background: var(--color-warm-white)
    Focus: border-color var(--color-butter), box-shadow 0 0 0 3px rgba(232,201,122,0.2)
```

---

### PAGE 5: Social Media (`/social-media`)

```
Page Header: Headline "Follow Our Sweet Life"

Social platform grid (2 columns desktop, 1 mobile):

Instagram card:
  Background: subtle warm gradient cream→blush
  Large Instagram logo + "@buttercuppamd"
  Follower count / bio snippet
  "Follow on Instagram →" CTA button

Facebook card:
  Similar treatment, Facebook logo + page name
  Review count: "86% recommend · 2,695 reviews"
  "Follow on Facebook →" CTA button

Embedded Instagram feed (if plugin available):
  3×3 grid of latest posts
  Fallback: static gallery grid with hover effects

Headline between grid + feed:
  "Taste it first on Instagram" — Sacramento script 40px
```

---

### PAGE 6: Payment QR Code (`/payment-qr-code`)

```
Centered page layout, clean and minimal

Background: var(--color-cream)

Header:
  Headline: "Pay with Ease" — Cormorant 300 italic 52px
  Subtext: "Scan to pay directly at the counter"
  Jost 300 15px bark

QR Code card:
  background: var(--color-warm-white)
  border: 1.5px solid var(--color-border)
  border-radius: var(--border-radius-lg)
  padding: var(--space-12)
  max-width: 320px, centered
  box-shadow: var(--shadow-md)

  QR image: 240×240px, centered
  Below QR: "Buttercupp — A Cupcake Shoppe" — Jost 400 14px
  UPI badge or accepted payment icons

Accepted payments strip:
  Icons: UPI, Google Pay, PhonePe, Paytm
  Jost 400 12px bark
```

---

## 5. Responsive Breakpoints

```css
/* Breakpoints */
--bp-mobile:  480px;
--bp-tablet:  768px;
--bp-desktop: 1024px;
--bp-wide:    1280px;

/* Usage in media queries */
@media (max-width: 768px)  { /* tablet and below */ }
@media (max-width: 480px)  { /* mobile only */ }
@media (min-width: 1280px) { /* wide desktop */ }
```

**Responsive rules:**
- Navigation: links hidden below 1024px, hamburger shown
- Hero: single column below 768px, image hidden below 640px
- Product grid: 4-col → 2-col (768px) → 1-col (480px)
- Footer: 4-col → 2-col (768px) → 1-col (480px)
- Font sizes: Scale down by ~20% on mobile for display fonts
- Padding: Half desktop padding on mobile

---

## 6. Micro-interactions & Details

```
Scroll behavior: smooth scroll throughout (scroll-behavior: smooth)

Nav active state: detect current page, apply active class

Product card add-to-wishlist (optional): heart icon, top-right of card image,
  opacity 0 → 1 on hover, click toggles filled/unfilled

Button ripple effect on click: pseudo-element radial gradient expands and fades

Image lazy loading: All below-fold images use loading="lazy"

Custom cursor (desktop only): Replace default with a small round dot (6px)
  in var(--color-butter) that follows with slight lag (JS lerp)

404 page: Toppled cupcake illustration (SVG) + "Oops, this page got eaten."
  Cormorant italic. Link back home.

Loading state for menu fetch: Skeleton cards (animated shimmer using CSS gradient)
  skeleton background: linear-gradient(90deg, var(--color-blush) 25%, var(--color-cream) 50%, var(--color-blush) 75%)
  background-size: 200% 100%
  animation: shimmer 1.5s infinite

Seasonal badge on product card:
  "Seasonal" pill: background var(--color-dusty-rose), color white
  Absolute positioned top-left corner of card image
  Jost 500 10px uppercase tracking-wider
```

---

## 7. Asset References

```
Logo URL (existing, use as-is or request SVG):
https://static.wixstatic.com/media/0a15d0_94d98268292c43d9a152a1c9e9f0fd0d~mv2.png

Product images (existing CDN — replace with high-res in production):
Double Dip:      https://static.wixstatic.com/media/0a15d0_f4f74405cad34186aa9d4c34ecbd4503~mv2.jpg
Lemon Blueberry: https://static.wixstatic.com/media/0a15d0_407467e41e724d2e82927ed0e3fd0d96~mv2.jpg
Oreo:            https://static.wixstatic.com/media/0a15d0_08f5b8c4d0544114b40e1f871770d002~mv2.jpg
ChocVanilla:     https://static.wixstatic.com/media/0a15d0_eda33912dfc7456395fa94a21be4b164~mv2.jpg
Banana Choc:     https://static.wixstatic.com/media/0a15d0_945e77bf2bd140d2a633de75da0ddfa1~mv2.jpg
Bundt Cake:      https://static.wixstatic.com/media/0a15d0_dddb495902b24e8fa2ff41c99d3b3d61~mv2.jpg
Cheesecake:      https://static.wixstatic.com/media/0a15d0_e05a454fc68b4516aeb833fafcfbd95c~mv2.jpg
D.C. Brownie:    https://static.wixstatic.com/media/0a15d0_0c207b827fed4facb90ac53dafca1536~mv2.jpg
Choc Torte:      https://static.wixstatic.com/media/0a15d0_9be10c87a3b04c40a0b9910273f6ebd6~mv2.jpg
Red Velvet:      https://static.wixstatic.com/media/0a15d0_a132b853c3a9415996dfe4a87d879629~mv2.jpg
```

---

## 8. Tech Stack Recommendation

```
Framework:    Next.js 14 (App Router) — for SSG/SSR, SEO, image optimization
Styling:      Tailwind CSS + CSS Modules for custom animation
Fonts:        Next.js Google Fonts (next/font/google) — Cormorant_Garamond, Jost, Sacramento
Animations:   Framer Motion (for page transitions, scroll reveals, card hovers)
Images:       next/image with priority on hero, lazy for cards
Icons:        Lucide React
Maps:         Google Maps Embed API (iframe approach, no SDK needed)
Form:         React Hook Form + simple email API (Resend / EmailJS)
Deployment:   Vercel
```

---

## 9. Key Design Principles for Agent

1. **Never use Inter, Roboto, or Arial** — always Cormorant Garamond for display, Jost for UI.
2. **Warmth over coldness** — every section should feel like a warm bakery, not a tech startup.
3. **Generous whitespace** — sections breathe; don't crowd elements.
4. **The colour butter (#E8C97A) is sacred** — use it for CTAs, accents, hover states, active indicators. Never overuse.
5. **Images carry weight** — always use object-fit: cover, never stretch, always use the correct aspect ratio.
6. **Mobile-first CSS** — write base styles for mobile, expand at breakpoints.
7. **Accessibility** — all images have alt text. Colour contrast AA minimum. Focus states visible. ARIA labels on icon buttons.
8. **Logo always links to homepage** — never open in new tab.
9. **External links** (Swiggy, Zomato, Instagram) — `target="_blank" rel="noopener noreferrer"`.
10. **Price formatting** — always display as `₹100.00` with rupee symbol, Devanagari-compatible font.
