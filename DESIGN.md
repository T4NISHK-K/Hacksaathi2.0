# HackSaathi Design System

## 1. Design Philosophy

HackSaathi adheres to a bold **Neo-Brutalist & Tactile Editorial** design language:
- **Hard Offsets**: High-contrast, 0-blur hard drop-shadows (`4px 4px 0 #050505`, `6px 6px 0 #050505`).
- **Heavy Borders**: Prominent solid black outlines (`3.5px` to `5px` stroke thickness).
- **Vibrant Color Accents**: Saturated primary red (`#FF1F1F`), punchy purple (`#7650E8`), bright yellow (`#FFC928`), and vivid pink (`#F06FAE`) set against a warm, editorial cream background (`#F5F0E8`).
- **Tactile UI Physics**: Physical button depression physics on hover (`translate(2px, 2px)` with `2px 2px` shadow) and active click state (`translate(4px, 4px)` with `0 0` shadow).
- **Asymmetrical & Dynamic Composition**: Layered 3D-like visual elements with rotational transforms (`-4deg`, `-2deg`, `5deg`, `-8deg`), overlapping cards, hanging tags, and illustrated team characters.

---

## 2. Color Palette

| Token / Usage | Hex Code | Description |
| :--- | :--- | :--- |
| **Off-White / Cream Base** | `#F5F0E8` | Primary background canvas, card surfaces, secondary buttons |
| **Pure Black** | `#050505` | Primary text, heavy borders, hard offset shadows, avatar borders |
| **Primary Red** | `#FF1F1F` | Accent color, brand logo text, primary CTA buttons, hero backdrop polygon |
| **Dark Red** | `#c41818` | Right side face shade of the 3D SVG cube logo |
| **Purple** | `#7650E8` | Top-left "FIND THE RIGHT PEOPLE" circular badge background |
| **Yellow** | `#FFC928` | Code sticker card (`</>`) background |
| **Pink** | `#F06FAE` | Hanging asterisk tag (`*`) background |
| **White** | `#FFFFFF` | Primary CTA button text, badge counter text |

---

## 3. Typography

- **Display & Heading Font**: `'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif`
  - Weights: `700` (Bold), `800` (Extra Bold), `900` (Black)
  - Letter Spacing: `-0.02em` for headlines, `0.06em` - `0.08em` for badges and button CTAs.
  - Text Transform: `uppercase` used extensively across CTAs, badges, and section labels.
- **Body & Subtitle Font**: `'Barlow Condensed', 'Courier New', Courier, monospace` / `system-ui, sans-serif`
  - Weight: `600` (Semi-Bold)
  - Line Height: `1.45`
  - Max Width: `500px` for optimal reading length.

---

## 4. Borders & Shadows

- **Outer Skeleton Stroke**: `5px solid #050505`
- **Component & Card Stroke**: `3.5px` to `4px solid #050505`
- **Corner Radii**:
  - SVG Canvas: `rx="36"`, Outer Border: `rx="33"`, Hero Panel: `rx="26"`
  - Cards & Badges: `7px`, `8px`, `10px`, `12px`, `20px`
  - Badges & Avatars: `50%` (Circular)
- **Hard Off-Set Shadows**:
  - Buttons & Badges: `box-shadow: 4px 4px 0 #050505`
  - Floating Cards: `box-shadow: 5px 5px 0 #050505`
  - Bottom Card & Main Frame: `drop-shadow(6px 6px 0px #050505)`

---

## 5. Layout System

The website relies on an exact **1536×864 (16:9 ratio)** vector canvas:
- **OuterFrame**: `OuterFrame.jsx` draws the structural skeleton with rounded corners, horizontal header divider at `y=110`, sidebar divider at `x=195`, and rounded hero panel inset overlay.
- **Navbar**: Full-width header spanning `x=2, y=2` to `y=110` with brand logo left-anchored, nav links centered, and CTAs right-anchored.
- **Sidebar**: Left 195px column rendering decorative 4x4 black dot grids, red/black D-shape cutouts, and red bottom corner block.
- **Hero**: Placed inside `<foreignObject x="200" y="115" width="1334" height="747">`, split into bounded Left Hero Column (`510px` wide) and Right Hero Visual (`650px × 620px` master container).

---

## 6. Components Breakdown

### Layout Components (`src/components/layout/`)
- `OuterFrame.jsx`: SVG skeleton, cream background, thick black borders, header/sidebar dividers, hero inset panel.
- `Navbar.jsx`: Brand wordmark, 3D cube logo, hash-based navigation links, physical action buttons, and mobile hamburger drawer.
- `Sidebar.jsx`: Left decorative column graphics (dot grids, D-shapes, red corner block).

### Hero Components (`src/components/hero/`)
- `Hero.jsx`: Main hero section coordinator and foreignObject wrapper.
- `HeroBadge.jsx`: Top label badge (`* YOUR PERFECT HACKATHON TEAM AWAITS`).
- `HeroHeadline.jsx`: Primary headline text (`FIND. CONNECT. BUILD. WIN TOGETHER.`).
- `HeroDescription.jsx`: Subtitle description text.
- `HeroActions.jsx`: Neo-brutalist CTA buttons (`GET STARTED - IT'S FREE`, `WATCH DEMO`).
- `CommunityAvatars.jsx`: Active community section with 3 cropped face avatars, `+2K` badge, and curved SVG arrow.
- `HeroVisual.jsx`: Master right-side relative container for 3D visual composition.
- `HeroRedPanel.jsx`: Zone B red backdrop polygon (`#FF1F1F`).
- `HeroCharacters.jsx`: Zone C 3-person team group illustrations (messy bun rafiki, thinking face purple hoodie, mathematics bro) with laptop & coffee props.
- `HeroSmartMatchingCard.jsx`: Zone A smart matching card (`95% MATCH SCORE`).
- `HeroCodeSticker.jsx`: Zone E yellow code sticker (`</>`).
- `HeroBottomCard.jsx`: Zone D card (`BUILD AMAZING THINGS TOGETHER` + scribble + avatars).
- `HeroTag.jsx`: Zone E pink hanging tag (`*` asterisk) with black string attachment.

### UI Helper Components (`src/components/ui/`)
- `AvatarCropFace.jsx`: Reusable circular cropped face avatar component.

---

## 7. Animation & Interactive Physics

- **Button Hover State**:
  - `transform: translate(2px, 2px)`
  - `box-shadow: 2px 2px 0 #050505`
- **Button Press (Click) State**:
  - `transform: translate(4px, 4px)`
  - `box-shadow: 0 0 0 #050505`
- **Transitions**: `transform 160ms ease-out, box-shadow 160ms ease-out`.

---

## 8. Responsive Behavior

- **Desktop (1536×864)**: Full SVG vector canvas rendering with 16:9 proportion.
- **Tablet & Scaled Views**: Vector SVG aspect ratio preserves composition integrity.
- **Mobile (< 760px)**: Desktop navigation links and action buttons hide gracefully; top hamburger icon displays to toggle an overlay drawer with active page tracking.

---

## 9. Assets Organization

All project assets are structured inside `src/assets/`:
- `src/assets/illustrations/`: SVG characters (`Mathematics-bro.svg`, `Thinking face-cuate.svg`, `messy bun-pana.svg`, `messy bun-rafiki.svg`).
- `src/assets/icons/`: Vector graphics (`handwritten-arrow-1786448327383.svg`).
- `public/`: Web manifest icon (`favicon.svg`).

---

## 10. Development Guidelines

1. **Preserve Visual Consistency**: Never alter calculated positions, rotation angles, stroke widths, or hard shadow offsets.
2. **Reuse Design Tokens**: Utilize established colors (`#F5F0E8`, `#050505`, `#FF1F1F`) and typography font families.
3. **Respect Neo-Brutalist Physics**: Maintain existing hover/press handlers (`translate(2px, 2px)` / `translate(4px, 4px)`).
4. **Clean Modular Structure**: Keep presentation separate from static data constants (`NAV_LINKS`).
