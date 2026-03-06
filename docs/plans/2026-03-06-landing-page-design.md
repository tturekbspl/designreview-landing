# DesignReview Landing Page - Design Document

## Overview

Landing page for DesignReview - a universal visual feedback platform supporting 3D CAD (STEP), PDF, and image files. The page targets both companies/teams and individual freelancers who need client approval and feedback on visual assets.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui (new-york style, OKLCH colors) - matching the main app
- Bilingual: PL + EN with `[locale]` dynamic segment
- Logo: text placeholder (in progress)

## Sections

### 1. Hero

Headline: "Udostepnij. Zbierz feedback. Gotowe." / "Share. Get feedback. Done."

Subheadline: Universal platform for collecting visual feedback from clients - on 3D files, PDFs, and images. No accounts for reviewers, no complicated tools.

CTAs:
- Primary: "Zacznij za darmo" / "Start for free" -> app registration
- Secondary: "Zobacz jak to dziala" / "See how it works" -> scroll to flow section

Visual: App mockup/screenshot showing the 3D viewer with pins and comment panel. Optionally animated showcase of 3 file types (STEP -> PDF -> Image).

### 2. Supported Formats

Three cards side by side:

- **3D Models (STEP)**: Browse CAD models in the browser. No installation needed.
- **PDF Documents**: Multi-page PDFs with navigation and annotation pins.
- **Images**: Renders, photos, sketches - up to 20 files in a single review.

Each card with an icon and short description. Shows this is a universal platform, not a niche CAD tool.

### 3. Flow in 3 Steps (key differentiator)

The heart of the landing page. Shows how simple the process is:

1. **Upload a file** - Drag & drop any file. Automatic type detection.
2. **Share a link** - One click to copy the link. Optional: password, expiration date, access level (Viewer/Commenter).
3. **Collect feedback** - Reviewer clicks on the model/document/image, places a pin, writes a comment. You get everything in one place.

Each step with UI illustration/screenshot. Visual: horizontal timeline or vertical cards with arrows.

### 4. Key Features

2x3 grid with icons:

- **Pins with comments** - Point to the exact spot on a model, PDF page, or image
- **Link sharing** - Password, expiration, access control (Viewer/Commenter)
- **Real-time** - Comments appear instantly via WebSocket
- **Organizations** - Manage team, projects, and access
- **No installation** - Everything works in the browser, including 3D models
- **Security** - Encrypted passwords, expiring links, data isolation

### 5. Who Is It For

Two columns:

**For companies and teams:**
- Design studios sending projects for client approval
- Engineering teams reviewing CAD models
- Creative agencies collecting feedback on renders

**For freelancers and small businesses:**
- Designers needing a quick "OK" from a client
- Photographers sending photos for selection
- Architects presenting visualizations

### 6. Security / Trust

A dedicated section showing how data is protected. Based on implemented features:

- **Encrypted connections** — HTTPS/TLS, encrypted cloud storage (Cloudflare R2)
- **Hashed passwords** — bcrypt for user passwords and share link passwords
- **Expiring links** — automatic access revocation after expiration date
- **Data isolation** — full tenant isolation between organizations
- **Access control** — Viewer (read-only) vs Commenter access levels
- **Authorization at every step** — session, org membership, and review-level permission checks on every API call

### 7. Pricing

Three tiers based on OrgPlan enum:

| | Free | Pro | Enterprise |
|---|---|---|---|
| Users | 1 | Up to 10 | Unlimited |
| Active reviews | 2 | Unlimited | Unlimited |
| Storage | 100 MB | 10 GB | Custom |
| Link sharing | Yes | Yes | Yes |
| Email invitations | No | Yes | Yes |
| SSO/SAML | No | No | Yes |
| Priority support | No | Yes | Yes |
| Dedicated support | No | No | Yes |
| Price | 0 PLN | X PLN/mo | Contact |

Pro column visually highlighted as "Most popular".

### 8. Final CTA

Banner: "Zacznij zbierac feedback w 30 sekund" / "Start collecting feedback in 30 seconds" with registration button.

### 9. Footer

Logo placeholder, links: Privacy Policy, Terms, Contact, language switcher PL/EN.

## Technical Architecture

- **i18n routing:** `app/[locale]/page.tsx` with JSON dictionaries in `messages/pl.json` and `messages/en.json`
- **Components:** One page with section components (Hero, Formats, Flow, Features, Audience, Security, Pricing, CTA, Footer)
- **Design system:** Reuse shadcn/ui components (Button, Card, Badge), Tailwind OKLCH color tokens from the main app
- **Structure:**
  ```
  src/
    app/
      [locale]/
        page.tsx          # Main landing page
        layout.tsx        # Root layout with locale
    components/
      landing/
        hero.tsx
        formats.tsx
        flow-steps.tsx
        features.tsx
        audience.tsx
        pricing.tsx
        final-cta.tsx
        footer.tsx
        navbar.tsx
      ui/                 # shadcn/ui components
    lib/
      i18n.ts             # Locale utilities
    messages/
      pl.json
      en.json
  ```
