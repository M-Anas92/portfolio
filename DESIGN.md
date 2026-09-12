---
name: Obsidian Kinetic
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00a572'
  on-tertiary-container: '#00311f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-xl:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  metric-number:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-tag:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system defines a high-precision, hyper-modern portfolio experience crafted for an elite Senior Mobile Application & iOS Engineer. It merges engineering rigor with executive-level aesthetic refinement, creating an immediate perception of mastery, architectural depth, and taste.

The design movement blends **Dark-Mode Precision Minimalism** with **Subtle Glassmorphism and Luminescent Depth**. The interface relies on deep obsidian canvases, razor-sharp translucent borders, structured grid alignments, and focused optical glows. Every component mirrors the meticulous ergonomics of native iOS design while elevating it for high-density web and desktop presentation. 

### Visual Tenets
- **Obsidian Density:** Backgrounds are deep, neutral, and cinematic (#0B0F17 to #111827), eliminating visual noise to let mockups and dynamic code metrics command primary focus.
- **Electric Luminescence:** Gradients of electric sapphire, indigo, and violet are deployed sparingly as energy sources—powering interactive states, focal highlights, and active telemetry.
- **iOS Skeuomorphic Precision in Flat Space:** Device mockups, Dynamic Island frames, and tactile preview surfaces mimic Apple-grade hardware tolerances with high-fidelity bevels, glass reflections, and inner strokes.

## Colors
The palette is built around deep spatial layers, vibrant vector light, and utilitarian status cues.

### Palette Architecture
- **Canvas & Obsidian Base:**
  - `canvas-default`: `#0B0F17` (Deep Obsidian / Black Canvas)
  - `canvas-subtle`: `#111827` (Card & Section Surface)
  - `canvas-elevated`: `#1E293B` (Floating Toolbars, Segmented Controls)
  - `canvas-overlay`: `rgba(17, 24, 39, 0.75)` (Frosted Backdrop Blur)

- **Luminescent Accents:**
  - `brand-primary`: `#3B82F6` (Electric Sapphire)
  - `brand-secondary`: `#8B5CF6` (Vibrant Violet)
  - `brand-indigo`: `#6366F1` (Mid-tone Interpolation for Gradients)
  - `brand-gradient`: `linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)`
  - `brand-gradient-glow`: `linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)`

- **Functional & Telemetry:**
  - `status-active`: `#10B981` (Live Status / App Store Published)
  - `status-active-glow`: `rgba(16, 185, 129, 0.25)`

- **Monochrome & Text Hierarchy:**
  - `text-primary`: `#F9FAFB` (High contrast, 98% brightness)
  - `text-secondary`: `#94A3B8` (Muted technical details, labels)
  - `text-tertiary`: `#64748B` (Inactive indicators, micro copy)
  - `border-glass`: `rgba(255, 255, 255, 0.08)`
  - `border-glass-hover`: `rgba(255, 255, 255, 0.18)`
  - `border-accent-focus`: `rgba(59, 130, 246, 0.5)`

## Typography
The typographic architecture pairs technical precision with commanding architectural titles.

- **Headline System (Space Grotesk):** Provides structured geometric energy with technical grotesque nuances. Used for project titles, hero statements, and engineering metric readouts. Letter spacing for headlines above 32px should be tracked tightly (`-0.03em`).
- **Body System (Inter):** Ensures neutral, high-legibility rendering across all pixel densities. Used for case study narratives, architecture breakdowns, and descriptions.
- **Data & Micro System (JetBrains Mono):** Reserved for technical stack tags, commit timestamps, Swift/Objective-C snippets, frame rates, and telemetry badges. Sets an explicit engineering tone. Tracked slightly wide (`+0.04em`).

## Layout & Spacing
The layout model employs a responsive 12-column fluid grid system pinned to a maximum canvas width of `1280px` for optimal reading line length and device frame proportion.

### Form Factor Behavior
- **Desktop (1024px+):** 12 columns with `1.5rem` (`24px`) gutters and `3rem` (`48px`) exterior margins. Allows side-by-side positioning of full-bleed interactive iOS viewport frames alongside engineering case study copy.
- **Tablet (768px - 1023px):** 8 columns with `1.25rem` (`20px`) gutters and `2rem` (`32px`) margins. Device mockups transition to centered elevated views with tab navigation repositioned below the frame.
- **Mobile (320px - 767px):** 4 columns with `1rem` (`16px`) gutters and `1.25rem` (`20px`) page margins. Content stacks strictly vertically; phone mockup scale adjusts to 85% viewport width with horizontal snap-scrolling for multi-screen feature tours.

### Vertical Rhythm
Section transitions use consistent `5rem` (80px) to `7.5rem` (120px) offsets to reinforce spacious, luxury pacing. Micro-elements inside cards and interactive modules adhere strictly to the 4px baseline (`space-xs` through `space-xl`).

## Elevation & Depth
Depth is constructed through optical transparency, multi-layer glass composition, and chromatic radiance rather than standard heavy drop shadows.

### Elevation Architecture
- **Layer 0 (Canvas Base):** Solid `#0B0F17` supplemented with fixed radial gradient energy orbs (`rgba(59, 130, 246, 0.08)` and `rgba(139, 92, 246, 0.06)`) blurred at 120px to provide background spatial depth.
- **Layer 1 (Card & Module Surfaces):** Translucent fill `rgba(17, 24, 39, 0.7)` with `backdrop-filter: blur(16px)` and an exterior stroke of `1px solid rgba(255, 255, 255, 0.08)`.
- **Layer 2 (Interactive Floating Elements & Toolbars):** Background fill `rgba(30, 41, 59, 0.85)` with `backdrop-filter: blur(24px)`, crisp top-edge highlight (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12)`), and an ambient drop shadow: `0 12px 32px -4px rgba(0, 0, 0, 0.5)`.
- **Layer 3 (Modals & Mockup Stage Overlays):** Deep dark scrim `rgba(11, 15, 23, 0.8)` with backdrop blur `20px`. The foreground container features a primary gradient edge glow: `0 0 0 1px rgba(59, 130, 246, 0.3), 0 20px 48px -10px rgba(0, 0, 0, 0.7)`.

## Shapes
The shape system mirrors Apple's continuous curvature (squircle) design language to evoke an authentic native iOS feel.

### Curvature Tokens
- **Standard Controls & Tags (`rounded-sm` / `0.5rem`):** Applied to micro-pills, inline code containers, metrics sub-labels, and segmented control tabs.
- **Cards & Panes (`rounded-lg` / `1rem`):** Standard for feature display cards, project architectural diagrams, and floating code blocks.
- **Section Enclosures & Outer Cards (`rounded-xl` / `1.5rem`):** Used for large featured case study cards and elevated showcase wrappers.
- **Device Silhouette:** Native iOS device containers apply high-curvature bounds (`48px` to `54px` border radius on phone hardware frames) to reproduce physical iPhone form factors accurately.

## Components

### Buttons
- **Primary Action:** Solid electric sapphire to violet gradient (`linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)`), pure white text, 0.5rem radius, padding `0.75rem 1.5rem`. States include an elevated luminous halo (`box-shadow: 0 0 20px rgba(59, 130, 246, 0.45)`) on hover and subtle scale compression (`0.98`) on click.
- **Secondary / Glass Button:** `rgba(255, 255, 255, 0.04)` fill, `1px solid rgba(255, 255, 255, 0.1)` border, `text-primary` font. Transitions to `rgba(255, 255, 255, 0.08)` and border `rgba(255, 255, 255, 0.2)` on hover.
- **Icon / Utility Button:** 40x40px square, `0.5rem` radius, glass background with centered SVG icon. Hover reveals primary gradient border stroke.

### iOS Hardware Mockup Frame
- **Device Body:** Custom ratio frame modeled on modern flagship iPhones. Obsidian bezel (`#030712`) bordered by a dual-stroke system: exterior `1px solid rgba(255, 255, 255, 0.12)`, interior `1px solid rgba(0, 0, 0, 0.8)`.
- **Dynamic Island:** Positioned precisely at top center (`32px` width ratio, `28px` height on standard mockups, pill shape `9999px`). Features a subtle glossy rim reflection, status icons (WiFi, Battery, Time) set in 10px SF Pro / Inter.
- **Interactive App Preview Tabs:** Segmented pill dock anchored at the bottom of the device mockup. Allows instantaneous toggling between "UI Flow", "Swift Architecture", and "Benchmark Metrics" within the screen viewport.

### Chips & Technical Stack Pills
- Pill-shaped (`rounded-full`) or `rounded-sm` with `JetBrains Mono` at `11px`.
- Fill: `rgba(255, 255, 255, 0.03)` with `1px solid rgba(255, 255, 255, 0.08)`. Text in `text-secondary`.
- **Status Indicator Pill (Live / Availability):** Contains an animated pulsing status dot (`#10B981`) paired with radial bloom (`box-shadow: 0 0 8px #10B981`), signaling active development availability or live App Store status.

### Metric Counter Blocks
- Structured cards with deep `#111827` glass background.
- Giant value readout in `metric-number` (`Space Grotesk`, bold) using gradient text fill (`#F9FAFB` transitioning to `#94A3B8`).
- Label positioned underneath in `label-tag` (`JetBrains Mono`, uppercase, `text-tertiary`).

### Lists & Code Breakdowns
- Clean modular rows separated by subtle dividers (`rgba(255, 255, 255, 0.05)`).
- Leading element: Monospaced numeric indicator (`01`, `02`) or framework badge (e.g., `SwiftUI`, `Combine`, `Metal`).
- Hover state: Entire list row surfaces a subtle luminous slide transition (`translateX(4px)`) and background tint (`rgba(59, 130, 246, 0.04)`).

### Input & Contact Fields
- Fill `rgba(17, 24, 39, 0.6)` with inset border `1px solid rgba(255, 255, 255, 0.1)`. Radius `0.5rem`.
- Focus state: Border transitions to `#3B82F6` with an external glow ring: `0 0 0 3px rgba(59, 130, 246, 0.2)`. Typography renders in `body-md` with `#F9FAFB`.