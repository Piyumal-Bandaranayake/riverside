# Design System

## Theme

Luxury tropical resort with a peaceful riverside atmosphere.

## Color Palette

The colors below are defined using HSL and CSS custom properties:

- **Primary (River Blue)**: `#0E7490` (HSL `193deg 85% 31%`) — Used for branding, dominant accents, and deep water tones.
- **Secondary (Tropical Green)**: `#15803D` (HSL `142deg 72% 29%`) — Used for secondary elements, badges, and tropical foliage accents.
- **Accent (Golden Sand)**: `#F59E0B` (HSL `38deg 92% 50%`) — Used for interactive highlights, stars, ratings, and selective CTA details.
- **Background**: `#FAF7F2` (HSL `38deg 33% 96%`) — Warm, soft, non-sterile background reminiscent of natural riverbed sand and stone.
- **Text**: `#1F2937` (HSL `215deg 28% 17%`) — High-contrast charcoal for excellent readability.
- **Cards**: `#FFFFFF` (HSL `0deg 0% 100%`) — Crisp white background for cards with subtle shadows.
- **Dark Overlay**: `rgba(15, 23, 42, 0.45)` — Used over full-screen backgrounds to guarantee text legibility.
- **Footer Dark**: `#0A1118` (HSL `210deg 41% 7%`) — Deep charcoal-blue for the premium dark footer.

## Typography

- **Headings (Display)**: `Playfair Display`, serif. Used for page-level headers and major section titles. High contrast, elegant tracking, and letter-spacing floors of `-0.02em`.
- **Body / Interface**: `Poppins`, sans-serif. Clean, highly legible, modern sans-serif for body copy, navigational links, labels, and forms.
- **Line Length**: Capped at `70ch` for all narrative or description blocks to prevent reader fatigue.

## Layout & Spacing

- **Standard Grid**: Responsive `12-column` grids and responsive flex layouts.
- **Paddings**: Large section paddings (`py-24` to `py-32` / `6rem` to `8rem`) to provide generous breathing room.
- **Card Radius**: Card corners capped at `12px` to `16px` for a soft, premium feel (avoiding the over-rounded look).
- **Shadows**: Soft, expansive, low-opacity shadows (`box-shadow: 0 10px 30px -10px rgba(14, 116, 144, 0.08)`) and zero border-plus-large-shadow combinations.

## Motion & Transitions

- **Transitions**: Smooth duration/easing (`transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)` / Ease Out Expo) for interactive buttons, links, and cards.
- **Page Entrances**: Progressive fade-in and slide-up animations on load.
- **Reduced Motion**: Fallbacks to direct crossfades or instant transitions when `@media (prefers-reduced-motion: reduce)` is active.
