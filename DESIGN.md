---
name: Terra Heritage
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#434843'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#feb557'
  on-secondary-container: '#734700'
  tertiary: '#0c1728'
  on-tertiary: '#ffffff'
  tertiary-container: '#212c3d'
  on-tertiary-container: '#8893a8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
  deep-forest: '#1B3022'
  warm-clay: '#B7791F'
  slate-stone: '#4A5568'
  soft-sand: '#F7FAFC'
  heritage-blue: '#01678B'
  ochre-earth: '#D6A170'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system embodies "Natural Professionalism," a design philosophy that bridges the gap between the raw stability of the earth and the polished precision of institutional finance. The target audience includes long-term investors, families seeking generational wealth, and conservation-minded individuals. 

The visual style is **Corporate / Modern** with a **Minimalist** focus on spatial clarity. It avoids the fleeting trends of fintech, instead opting for a "permanent" aesthetic that feels as though it has existed for decades and will remain relevant for decades more. The emotional response is one of calm, unshakeable credibility and stewardship.

## Colors

The palette is anchored by **Deep Forest Green**, used for high-level branding and essential headings to signify growth and environmental roots. **Warm Clay** serves as a sophisticated accent for interactive elements, providing a human, sun-drenched contrast to the cooler tones.

**Soft Sand** provides a low-strain background foundation, while **Slate Gray** handles the secondary information architecture. We have integrated **Heritage Blue** and **Ochre Earth** from the source material as specialized "Legacy" colors, to be used sparingly for data visualization or status indicators (e.g., "Verified Assets").

## Typography

The typographic scale relies on a high-contrast pairing: **Playfair Display** provides an authoritative, editorial weight to headlines, suggesting tradition and literary permanence. **Inter** is utilized for all functional text to ensure maximum legibility for complex land data and legal disclosures.

Large "Display" sizes should utilize tighter letter spacing to maintain a cohesive visual block. For mobile devices, the display sizes aggressively downscale to ensure headlines do not break awkwardly, maintaining the "clean" aesthetic across all viewports.

## Layout & Spacing

This system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The philosophy is "Generous Breathing Room"—white space is not empty space; it is a tool used to denote premium value and clarity.

- **Desktop:** 1280px max-width, center-aligned, with 64px outer margins.
- **Vertical Rhythm:** Components are spaced in multiples of 8px. Section containers should use 120px–160px of vertical padding to allow the eye to rest between different content types.
- **Data Density:** While the overall brand is airy, data tables and property specs should use a tighter 8px/12px internal padding for efficient comparison.

## Elevation & Depth

To maintain a grounded feel, we avoid floating elements. Instead, we use **Tonal Layers** and **Ambient Shadows**.

- **Surfaces:** Most content sits on `soft-sand` (#F7FAFC). High-priority cards use a pure white (#FFFFFF) background to subtly lift off the page.
- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `box-shadow: 0 4px 20px rgba(27, 48, 34, 0.04)`). The shadow color should be a tint of the `deep-forest` green rather than pure black, making the elevation feel natural and atmospheric.
- **Dividers:** Use 1px borders in `slate-stone` at 10% opacity for subtle containment without creating visual clutter.

## Shapes

The shape language is **Soft** (4px–12px radius). We avoid sharp, aggressive corners to appear approachable, but we also avoid pill-shapes or hyper-roundedness which can feel too "tech-startup" or casual. A subtle 4px radius on buttons and 8px on cards conveys a sense of architectural stability—like cut stone.

## Components

### Buttons
- **Primary:** Deep Forest Green background, White text. No gradients. Solid, dependable.
- **Secondary:** Transparent background with a 1.5px Warm Clay border. Used for "Learn More" or secondary explorations.
- **Tertiary:** Text-only with an underline that appears on hover, used for low-priority navigation.

### Cards
Cards are the primary vehicle for land listings. They should feature high-quality photography, with a metadata footer (e.g., acreage, price, location) using `label-caps` for clarity.

### Testimonial Blocks
Large-format typography using `headline-sm` in italics. Include a small, circular avatar and a "Verified Investor" badge in `heritage-blue`.

### Input Fields
Minimalist design with a Soft Sand background and a bottom-border only that transitions to a full outline in Warm Clay when focused.

### Process Diagrams
Use thin `slate-stone` lines and Deep Forest Green nodes. Avoid "cartoonish" icons; use technical, fine-line iconography or high-quality macro photography of soil and nature elements.