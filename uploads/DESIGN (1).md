# AI for Business — Style Reference
> Brutalist editorial showroom on warm gray

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Dayos runs on a brutalist-editorial logic: near-monochrome canvas (#e5e5e5 page, #ffffff cards, #000000 blocks), oversized uppercase display type squeezed into 0.9 line-height, and zero shadows or gradients. The single chromatic accent is a pale mint green (#d1ffca) used sparingly on tags and links, with yellow (#fff100) as a near-neon highlight on small elements. Components are heavy on border-radius (24-64px on cards, 48px on nav pills) and light on decoration — flat surfaces, thin or zero borders, no elevation effects. Typography does all the emotional work: compressed condensed headlines at 130px tower over 16px body text, creating a dramatic scale ratio. The hero pairs a massive black headline with a 3D physical object render (textured cubes with brand labels), establishing a tactile, material-product feel against the clinical canvas.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Carbon Black | `#000000` | `--color-carbon-black` | Primary text, inverted card surfaces, filled blocks — the structural dark that anchors the monochrome system |
| Paper White | `#ffffff` | `--color-paper-white` | Card surfaces, inverted text on dark blocks, icon fills — the bright counterpoint to carbon black |
| Warm Canvas | `#e5e5e5` | `--color-warm-canvas` | Page background, hero backdrop, section dividers — the slightly warm gray that distinguishes this from a clinical white canvas |
| Mist Gray | `#f3f3f3` | `--color-mist-gray` | Secondary surface, nav pill backgrounds, subtle panels — one step lighter than canvas for quiet layering |
| Ash | `#c6c6c6` | `--color-ash` | Borders, hairlines, disabled states — mid-tone neutral for structural lines |
| Smoke | `#979797` | `--color-smoke` | Body text secondary, meta labels, icon strokes — the muted text level for non-emphasized content |
| Slate | `#444444` | `--color-slate` | Secondary body text, navigation labels, and subdued headings. Do not promote it to the primary CTA color |
| Graphite | `#2f2f2f` | `--color-graphite` | Deep surface for code blocks or heavy accents — near-black alternative |
| Mint Chip | `#d1ffca` | `--color-mint-chip` | Link backgrounds, tag pills, accent highlights — the signature pale green that punctuates the monochrome system |
| Voltage Yellow | `#fff100` | `--color-voltage-yellow` | Email highlights, small accent dots, decorative bursts — the high-energy chromatic note on micro-elements |

## Tokens — Typography

### SuisseIntlCond — Display headlines — massive uppercase condensed at extreme sizes with tight 0.9 line-height creates the editorial brutalist voice; all-caps treatment amplifies authority · `--font-suisseintlcond`
- **Substitute:** Anton, Bebas Neue, Barlow Condensed Bold
- **Weights:** 700
- **Sizes:** 48px, 64px, 80px, 130px
- **Line height:** 0.90
- **Letter spacing:** -0.0300em
- **Role:** Display headlines — massive uppercase condensed at extreme sizes with tight 0.9 line-height creates the editorial brutalist voice; all-caps treatment amplifies authority

### SuisseIntl — Body text, nav, subheads, buttons, cards — the workhorse neo-grotesque that handles 90% of UI; weight 450 (a non-standard intermediate) carries mid-emphasis; 40px/450 uppercase serves as secondary headlines · `--font-suisseintl`
- **Substitute:** Inter, Söhne, Neue Haas Grotesk
- **Weights:** 400, 450, 500
- **Sizes:** 14px, 16px, 18px, 20px, 28px, 40px
- **Line height:** 1.10, 1.14, 1.20, 1.25, 1.30, 1.33
- **Letter spacing:** -0.0300em, -0.0200em, -0.0110em, -0.0100em
- **Role:** Body text, nav, subheads, buttons, cards — the workhorse neo-grotesque that handles 90% of UI; weight 450 (a non-standard intermediate) carries mid-emphasis; 40px/450 uppercase serves as secondary headlines

### SuisseIntlMono — Labels, tags, technical meta, small captions — monospace at 12px for system-level micro-copy and numbered annotations · `--font-suisseintlmono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, Geist Mono
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.30, 1.60
- **Letter spacing:** -0.0300em
- **Role:** Labels, tags, technical meta, small captions — monospace at 12px for system-level micro-copy and numbered annotations

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 12px | 1.6 | -0.36px | `--text-caption` |
| body-sm | — | — | 14px | 1.3 | -0.154px | `--text-body-sm` |
| body | — | — | 16px | 1.25 | — | `--text-body` |
| subheading | — | — | 18px | 1.33 | — | `--text-subheading` |
| subheading-lg | — | — | 20px | 1.2 | — | `--text-subheading-lg` |
| heading-sm | — | — | 28px | 1.3 | -0.84px | `--text-heading-sm` |
| heading | — | — | 40px | 1.1 | -0.8px | `--text-heading` |
| heading-lg | — | — | 48px | 0.9 | -1.44px | `--text-heading-lg` |
| display | — | — | 80px | 0.9 | -2.4px | `--text-display` |
| display-xl | — | — | 130px | 0.9 | -3.9px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 64px |
| cards | 24-32px |
| buttons | 4-8px |
| nav-pill | 48px |
| large-cards | 64px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16-24px

## Components

### Filled Dark Button
**Role:** Primary CTA — schedule demo, book intro

Black (#000000) background, white (#ffffff) text, 8px radius, 16px 24px padding. SuisseIntl 16px/500. The high-contrast inverted treatment makes it the strongest interactive element on any page.

### Ghost Border Button
**Role:** Secondary navigation action

Transparent background, 1.5px solid border in #444444, #444444 text, 4px radius, 16px horizontal padding. SuisseIntl 16px/500. Restrained outlined variant for less critical actions.

### Text Link Button
**Role:** Inline navigation, tertiary actions

No background, no border, #000000 text, 0-4px radius, underline on hover. SuisseIntl 16px/500. Used for 'More details' and similar low-weight navigation.

### Nav Pill
**Role:** Top navigation container

#ffffff background, 48px border-radius, wraps nav links in a floating capsule. Creates a physical 'pill' shape that separates nav from the canvas.

### Standard Card
**Role:** Content blocks, feature containers

#ffffff background, 24-32px border-radius, no shadow, no border. Padding 24px. The flat white surface against the warm gray canvas creates natural separation without elevation.

### Inverted Card
**Role:** Dark feature blocks, dramatic contrast zones

#000000 background, 32px border-radius, white text. No shadow. Used for high-impact sections that need to break the light canvas pattern.

### Top-Arc Card
**Role:** Hero-bottom rounded cards, section openers

64px 64px 0px 0px border-radius (top corners rounded, bottom corners flat). Creates a 'dome' shape that suggests the card emerges from below. Used in #000000 and #ffffff variants.

### Mint Tag
**Role:** Category labels, status indicators

#d1ffca background, #000000 text, 64px radius (fully pill-shaped), small padding. The pale green pill is the signature accent element — used sparingly for taxonomy.

### Voltage Highlight
**Role:** Email addresses, accent text, decorative bursts

#fff100 background or text on select elements. Applied to email links and small accent marks. The high-saturation yellow against monochrome creates visual sparks.

### 3D Product Render
**Role:** Hero imagery, product illustration

Textured concrete cubes with wood-grain and colored geometric protrusions, branded with SAP/Oracle/Workday logos. Photorealistic 3D renders on clean canvas. The physical/tactile material treatment contrasts with the flat UI.

### Uppercase Display Heading
**Role:** Hero, section titles

SuisseIntlCond 700 at 80-130px, line-height 0.9, letter-spacing -0.03em, uppercase. The extreme size + tight leading + condensed width creates massive visual blocks of text that dominate the page.

### Secondary Heading
**Role:** Sub-sections, card titles

SuisseIntl 450 at 40px, uppercase, line-height 1.1, letter-spacing -0.02em. Lighter weight than display but still uppercase, bridging the brutalist display voice with readable content.

### Mono Label
**Role:** Technical annotations, slide indicators, numbered markers

SuisseIntlMono 400 at 12px, letter-spacing -0.03em. Used for 'Slide 1/2/3' indicators, metadata, and system labels. The monospace creates a technical/editorial counterpoint to the neo-grotesque body.

## Do's and Don'ts

### Do
- Use SuisseIntlCond 700 at 48-130px with 0.9 line-height for all display headings — always uppercase, always tightly tracked
- Apply the warm canvas (#e5e5e5) as the page background, never pure white — the gray is the canvas tone that makes white cards feel lifted
- Use radius between 24-64px on cards; 48px on nav pills; 4-8px on buttons — the radius scale is large and deliberate
- Reserve #d1ffca (mint) for tags and link backgrounds; reserve #fff100 (yellow) for email highlights and micro-accents only
- Keep all cards flat — no shadows, no gradients. Depth comes from surface color contrast between canvas, white, and black
- Set nav height to 8rem with a floating pill-shaped container at 48px radius centered in the bar
- Use 16px/500 SuisseIntl for body text and button labels; 14px/500 for meta and list items

### Don't
- Never add box-shadows to cards or buttons — the system is explicitly flat
- Avoid pure white (#ffffff) as the page background — always use #e5e5e5 canvas beneath content
- Do not use chromatic colors for large surface fills — mint and yellow are accent-only, used on small elements
- Never set display heading line-height above 0.95 — the tight leading is what creates the compressed editorial block
- Do not use mixed-case for headings — all display and secondary headings are uppercase
- Avoid using SuisseIntlCond below 48px — the condensed face is designed for oversized display, not body text
- Never use subtle gray borders on cards — prefer surface color contrast over 1px borders for separation

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#e5e5e5` | Page background — warm gray that separates content from pure white |
| 1 | Card | `#ffffff` | Content cards, feature blocks — clean white lifted from canvas |
| 2 | Inverted | `#000000` | Dark feature blocks, inverted cards — dramatic contrast zones |
| 3 | Mist | `#f3f3f3` | Subtle panel layering, nav pill backgrounds |

## Elevation

Flat by design — zero shadows detected across all card variants. Depth is created through surface color contrast (canvas gray → white cards → black inverted blocks) and radius, not elevation. This is a deliberate editorial-print influence, not minimalism by omission.

## Imagery

Photorealistic 3D renders of physical objects — textured concrete cubes with wood-grain elements, protruding colored geometric shapes (green, yellow, pink), and branded labels (SAP, Oracle, Workday logos printed on surfaces). The renders sit on the warm gray canvas like product photography in a gallery. No lifestyle photography, no stock imagery, no abstract gradients. The material/tactile treatment (concrete texture, wood grain) creates a physical-product feel that contrasts with the flat typographic UI. Icons are minimal — mostly monoline strokes in black or white. No decorative illustrations or iconography beyond functional UI markers.

## Layout

Full-bleed warm gray (#e5e5e5) canvas with max-width ~1200px centered content. Hero is a split: massive 130px condensed headline on the left occupying ~50% width, 3D product render on the right. Nav is a floating pill centered in the 8rem top bar. Sections alternate between light canvas, white card surfaces, and full-width black inverted blocks. Content is primarily single-column or 2-column splits. Use case library is a card grid (2-3 columns). Footer is a compact dark band. Vertical rhythm uses 80px section gaps with 24px element spacing. No sidebar navigation. No sticky elements beyond the header.

## Agent Prompt Guide

Quick Color Reference:
- text: #000000
- background (canvas): #e5e5e5
- card surface: #ffffff
- border/hairline: #c6c6c6
- accent: #d1ffca (mint)
- primary action: no distinct CTA color

3 Example Component Prompts:

1. Create a hero headline: 130px SuisseIntlCond weight 700, uppercase, line-height 0.9, letter-spacing -3.9px, #000000 text on #e5e5e5 canvas background. The headline should read as 3-4 lines of compressed uppercase text occupying the left 50% of the viewport.

2. Create a content card: #ffffff background, 32px border-radius, no shadow, 24px padding, containing a 40px SuisseIntl weight 450 uppercase heading in #000000 and 16px body text in #444444. Place on #e5e5e5 canvas.

3. Create a mint tag pill: #d1ffca background, #000000 text, 64px border-radius, 8px 16px padding, 12px SuisseIntlMono weight 400 text. Use as a category label above card titles.

4. Create a top navigation bar: 8rem height, transparent #e5e5e5 background, containing a centered white pill at 48px border-radius with horizontal nav links in 16px SuisseIntl weight 500 #444444 text, 24px gap between links. Include a filled black 'Schedule a Demo' button (8px radius, #ffffff text) aligned right.

5. Create an inverted dark section: full-width #000000 background, 80px vertical padding, containing white text — a 80px SuisseIntlCond 700 uppercase headline followed by 16px #979797 body text. No shadows or gradients.

## Similar Brands

- **Linear** — Same approach of oversized condensed display type, monochrome canvas with single accent color, flat surfaces with zero shadows
- **Vercel** — Similar full-bleed hero with massive headline, monochromatic palette, and large-radius card surfaces
- **Cursor** — Same editorial-brutalist typographic voice with uppercase condensed headings and minimal color palette
- **Arc Browser** — Shared warm-gray canvas approach, oversized display type, and accent color used sparingly on small functional elements

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-carbon-black: #000000;
  --color-paper-white: #ffffff;
  --color-warm-canvas: #e5e5e5;
  --color-mist-gray: #f3f3f3;
  --color-ash: #c6c6c6;
  --color-smoke: #979797;
  --color-slate: #444444;
  --color-graphite: #2f2f2f;
  --color-mint-chip: #d1ffca;
  --color-voltage-yellow: #fff100;

  /* Typography — Font Families */
  --font-suisseintlcond: 'SuisseIntlCond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintl: 'SuisseIntl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintlmono: 'SuisseIntlMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.6;
  --tracking-caption: -0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.154px;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --text-subheading-lg: 20px;
  --leading-subheading-lg: 1.2;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.84px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -1.44px;
  --text-display: 80px;
  --leading-display: 0.9;
  --tracking-display: -2.4px;
  --text-display-xl: 130px;
  --leading-display-xl: 0.9;
  --tracking-display-xl: -3.9px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-w450: 450;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16-24px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-full: 48px;
  --radius-full-2: 64px;
  --radius-full-3: 9999px;

  /* Named Radii */
  --radius-tags: 64px;
  --radius-cards: 24-32px;
  --radius-buttons: 4-8px;
  --radius-nav-pill: 48px;
  --radius-large-cards: 64px;

  /* Surfaces */
  --surface-canvas: #e5e5e5;
  --surface-card: #ffffff;
  --surface-inverted: #000000;
  --surface-mist: #f3f3f3;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-carbon-black: #000000;
  --color-paper-white: #ffffff;
  --color-warm-canvas: #e5e5e5;
  --color-mist-gray: #f3f3f3;
  --color-ash: #c6c6c6;
  --color-smoke: #979797;
  --color-slate: #444444;
  --color-graphite: #2f2f2f;
  --color-mint-chip: #d1ffca;
  --color-voltage-yellow: #fff100;

  /* Typography */
  --font-suisseintlcond: 'SuisseIntlCond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintl: 'SuisseIntl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintlmono: 'SuisseIntlMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.6;
  --tracking-caption: -0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.154px;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --text-subheading-lg: 20px;
  --leading-subheading-lg: 1.2;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.84px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -1.44px;
  --text-display: 80px;
  --leading-display: 0.9;
  --tracking-display: -2.4px;
  --text-display-xl: 130px;
  --leading-display-xl: 0.9;
  --tracking-display-xl: -3.9px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-full: 48px;
  --radius-full-2: 64px;
  --radius-full-3: 9999px;
}
```
