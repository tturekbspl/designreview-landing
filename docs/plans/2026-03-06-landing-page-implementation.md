# DesignReview Landing Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a bilingual (PL/EN) landing page for DesignReview — a visual feedback platform for 3D models, PDFs, and images.

**Architecture:** Next.js 16 App Router with `[locale]` dynamic segment for i18n. All text lives in JSON dictionaries (`messages/pl.json`, `messages/en.json`). Page is composed of section components, all using shadcn/ui + Tailwind with the same OKLCH color tokens as the main app. No external i18n library — simple dictionary lookup via a helper function.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, shadcn/ui (new-york style), lucide-react icons, Geist font

---

### Task 1: Project scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `src/app/globals.css`
- Create: `src/lib/utils.ts`
- Create: `components.json`

**Step 1: Initialize Next.js project**

```bash
cd /Users/tomek/Tomstack/designreview_landing
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
```

If the directory is not empty (docs folder exists), move docs temporarily:
```bash
mv docs /tmp/designreview_landing_docs
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
mv /tmp/designreview_landing_docs docs
```

**Step 2: Install shadcn/ui**

```bash
npx shadcn@latest init -d
```

Select: New York style, Neutral base color, CSS variables: yes.

**Step 3: Copy globals.css color tokens from the main app**

Replace `src/app/globals.css` with the exact OKLCH color tokens from the main DesignReview app (copied below). This ensures visual consistency.

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**Step 4: Install shadcn/ui components needed**

```bash
npx shadcn@latest add button card badge separator
```

**Step 5: Verify it runs**

```bash
npm run dev
```

Open http://localhost:3000 — should show Next.js default page with correct fonts.

**Step 6: Commit**

```bash
git init
git add -A
git commit -m "chore: scaffold Next.js project with Tailwind + shadcn/ui"
```

---

### Task 2: i18n system

**Files:**
- Create: `src/lib/i18n.ts`
- Create: `src/messages/pl.json`
- Create: `src/messages/en.json`
- Create: `src/app/[locale]/layout.tsx`
- Create: `src/app/[locale]/page.tsx`
- Create: `src/middleware.ts`
- Delete: `src/app/layout.tsx` (replaced by `[locale]/layout.tsx`)
- Delete: `src/app/page.tsx` (replaced by `[locale]/page.tsx`)

**Step 1: Create i18n helper**

`src/lib/i18n.ts`:

```typescript
import type { ReactNode } from "react";

export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

type Messages = Record<string, string | Record<string, string | Record<string, string>>>;

const dictionaries: Record<Locale, () => Promise<Messages>> = {
  pl: () => import("@/messages/pl.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Messages> {
  const loader = dictionaries[locale];
  if (!loader) return dictionaries[defaultLocale]();
  return loader();
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
```

**Step 2: Create middleware for locale redirect**

`src/middleware.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0];

  const detectedLocale = locale && locales.includes(locale as any) ? locale : defaultLocale;

  request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
```

**Step 3: Create initial message files**

`src/messages/pl.json`:

```json
{
  "nav": {
    "features": "Funkcje",
    "pricing": "Cennik",
    "login": "Zaloguj sie",
    "cta": "Zacznij za darmo"
  },
  "hero": {
    "title": "Udostepnij. Zbierz feedback. Gotowe.",
    "subtitle": "Uniwersalna platforma do zbierania wizualnego feedbacku od klientow — na plikach 3D, PDF i obrazach. Bez kont dla recenzentow, bez skomplikowanych narzedzi.",
    "cta": "Zacznij za darmo",
    "ctaSecondary": "Zobacz jak to dziala"
  },
  "formats": {
    "title": "Jeden tool. Trzy formaty.",
    "step": {
      "title": "Modele 3D (STEP)",
      "description": "Przegladaj modele CAD bezposrednio w przegladarce. Bez instalacji, bez pluginow."
    },
    "pdf": {
      "title": "Dokumenty PDF",
      "description": "Wielostronicowe PDF-y z nawigacja miedzy stronami i pinami w dowolnym miejscu."
    },
    "image": {
      "title": "Obrazy",
      "description": "Rendery, zdjecia, szkice — do 20 plikow w jednym review z galeria i nawigacja."
    }
  },
  "flow": {
    "title": "Feedback w 3 prostych krokach",
    "step1": {
      "title": "Wgraj plik",
      "description": "Przeciagnij i upusc dowolny plik. Automatyczne rozpoznanie typu — STEP, PDF czy obraz."
    },
    "step2": {
      "title": "Udostepnij link",
      "description": "Skopiuj link jednym kliknieciem. Ustaw haslo, date wygasniecia i poziom dostepu."
    },
    "step3": {
      "title": "Zbieraj feedback",
      "description": "Recenzent klika w konkretne miejsce, stawia pin i pisze komentarz. Wszystko w jednym miejscu."
    }
  },
  "features": {
    "title": "Wszystko, czego potrzebujesz",
    "pins": {
      "title": "Piny z komentarzami",
      "description": "Wskaz dokladne miejsce na modelu, stronie PDF czy obrazie. Kazdy pin ma watek komentarzy."
    },
    "sharing": {
      "title": "Udostepnianie linkiem",
      "description": "Haslo, wygasanie, kontrola dostepu — Viewer lub Commenter. Zaproszenia email."
    },
    "realtime": {
      "title": "Real-time",
      "description": "Komentarze pojawiaja sie natychmiast dzieki WebSocket. Bez odswiezania strony."
    },
    "orgs": {
      "title": "Organizacje",
      "description": "Zarzadzaj zespolem, projektami i dostepami w jednym miejscu."
    },
    "browser": {
      "title": "Bez instalacji",
      "description": "Wszystko dziala w przegladarce — rowniez modele 3D. Wystarczy link."
    },
    "security": {
      "title": "Bezpieczenstwo",
      "description": "Szyfrowane hasla, wygasajace linki, izolacja danych miedzy organizacjami."
    }
  },
  "audience": {
    "title": "Dla kogo?",
    "teams": {
      "title": "Firmy i zespoly",
      "items": [
        "Biura projektowe wysylajace projekty do akceptacji",
        "Zespoly inzynierskie recenzujace modele CAD",
        "Agencje kreatywne zbierajace feedback na renderach"
      ]
    },
    "freelancers": {
      "title": "Freelancerzy i male firmy",
      "items": [
        "Projektanci potrzebujacy szybkiego OK od klienta",
        "Fotografowie wysylajacy zdjecia do wyboru",
        "Architekci prezentujacy wizualizacje"
      ]
    }
  },
  "security": {
    "title": "Twoje dane sa bezpieczne",
    "subtitle": "Bezpieczenstwo jest wbudowane w kazda warstwe aplikacji — od przechowywania plikow po kontrole dostepu.",
    "encryption": {
      "title": "Szyfrowane polaczenia",
      "description": "Cala komunikacja odbywa sie przez HTTPS/TLS. Pliki przechowywane w szyfrowanej chmurze."
    },
    "passwords": {
      "title": "Hashowane hasla",
      "description": "Hasla uzytkownikow i linkow udostepniania sa hashowane algorytmem bcrypt — nigdy nie przechowujemy ich w postaci jawnej."
    },
    "expiration": {
      "title": "Wygasajace linki",
      "description": "Ustaw date waznosci linku udostepniania — po jej uplynieciu dostep zostaje automatycznie zablokowany."
    },
    "isolation": {
      "title": "Izolacja danych",
      "description": "Dane kazdej organizacji sa calkowicie odizolowane. Nie ma mozliwosci dostepu do cudzych review."
    },
    "access": {
      "title": "Kontrola dostepu",
      "description": "Precyzyjne poziomy dostepu — Viewer (tylko podglad) lub Commenter (podglad + komentarze)."
    },
    "auth": {
      "title": "Autoryzacja na kazdym kroku",
      "description": "Kazde zadanie API weryfikuje sesje, czlonkostwo w organizacji i uprawnienia do konkretnego review."
    }
  },
  "pricing": {
    "title": "Prosty cennik",
    "free": {
      "name": "Free",
      "price": "0 zl",
      "period": "",
      "features": [
        "1 uzytkownik",
        "2 aktywne review",
        "100 MB przestrzeni",
        "Udostepnianie linkiem"
      ],
      "cta": "Zacznij za darmo"
    },
    "pro": {
      "name": "Pro",
      "price": "X zl",
      "period": "/mies.",
      "popular": "Najpopularniejszy",
      "features": [
        "Do 10 uzytkownikow",
        "Bez limitu review",
        "10 GB przestrzeni",
        "Zaproszenia email",
        "Priorytetowe wsparcie"
      ],
      "cta": "Wybierz Pro"
    },
    "enterprise": {
      "name": "Enterprise",
      "price": "Kontakt",
      "period": "",
      "features": [
        "Bez limitu uzytkownikow",
        "Bez limitu review",
        "Dedykowana przestrzen",
        "SSO / SAML",
        "Dedykowane wsparcie"
      ],
      "cta": "Skontaktuj sie"
    }
  },
  "finalCta": {
    "title": "Zacznij zbierac feedback w 30 sekund",
    "subtitle": "Bez karty kredytowej. Bez zobowiazan.",
    "cta": "Stworz darmowe konto"
  },
  "footer": {
    "privacy": "Polityka prywatnosci",
    "terms": "Regulamin",
    "contact": "Kontakt"
  }
}
```

`src/messages/en.json`:

```json
{
  "nav": {
    "features": "Features",
    "pricing": "Pricing",
    "login": "Log in",
    "cta": "Start for free"
  },
  "hero": {
    "title": "Share. Get feedback. Done.",
    "subtitle": "A universal platform for collecting visual feedback from clients — on 3D files, PDFs, and images. No reviewer accounts needed, no complicated tools.",
    "cta": "Start for free",
    "ctaSecondary": "See how it works"
  },
  "formats": {
    "title": "One tool. Three formats.",
    "step": {
      "title": "3D Models (STEP)",
      "description": "Browse CAD models directly in the browser. No installation, no plugins."
    },
    "pdf": {
      "title": "PDF Documents",
      "description": "Multi-page PDFs with page navigation and annotation pins anywhere."
    },
    "image": {
      "title": "Images",
      "description": "Renders, photos, sketches — up to 20 files in a single review with gallery navigation."
    }
  },
  "flow": {
    "title": "Feedback in 3 simple steps",
    "step1": {
      "title": "Upload a file",
      "description": "Drag and drop any file. Automatic type detection — STEP, PDF, or image."
    },
    "step2": {
      "title": "Share a link",
      "description": "Copy a link with one click. Set a password, expiration date, and access level."
    },
    "step3": {
      "title": "Collect feedback",
      "description": "Reviewer clicks on a specific spot, places a pin, and writes a comment. Everything in one place."
    }
  },
  "features": {
    "title": "Everything you need",
    "pins": {
      "title": "Pins with comments",
      "description": "Point to the exact spot on a model, PDF page, or image. Each pin has a comment thread."
    },
    "sharing": {
      "title": "Link sharing",
      "description": "Password, expiration, access control — Viewer or Commenter. Email invitations."
    },
    "realtime": {
      "title": "Real-time",
      "description": "Comments appear instantly via WebSocket. No page refresh needed."
    },
    "orgs": {
      "title": "Organizations",
      "description": "Manage your team, projects, and access in one place."
    },
    "browser": {
      "title": "No installation",
      "description": "Everything works in the browser — including 3D models. Just a link."
    },
    "security": {
      "title": "Security",
      "description": "Encrypted passwords, expiring links, data isolation between organizations."
    }
  },
  "audience": {
    "title": "Who is it for?",
    "teams": {
      "title": "Companies and teams",
      "items": [
        "Design studios sending projects for client approval",
        "Engineering teams reviewing CAD models",
        "Creative agencies collecting feedback on renders"
      ]
    },
    "freelancers": {
      "title": "Freelancers and small businesses",
      "items": [
        "Designers needing a quick OK from a client",
        "Photographers sending photos for selection",
        "Architects presenting visualizations"
      ]
    }
  },
  "security": {
    "title": "Your data is safe",
    "subtitle": "Security is built into every layer of the application — from file storage to access control.",
    "encryption": {
      "title": "Encrypted connections",
      "description": "All communication happens over HTTPS/TLS. Files are stored in encrypted cloud storage."
    },
    "passwords": {
      "title": "Hashed passwords",
      "description": "User and share link passwords are hashed with bcrypt — never stored in plain text."
    },
    "expiration": {
      "title": "Expiring links",
      "description": "Set an expiration date for share links — access is automatically blocked after it passes."
    },
    "isolation": {
      "title": "Data isolation",
      "description": "Each organization's data is completely isolated. No access to other organizations' reviews."
    },
    "access": {
      "title": "Access control",
      "description": "Precise access levels — Viewer (view only) or Commenter (view + comments)."
    },
    "auth": {
      "title": "Authorization at every step",
      "description": "Every API request verifies session, organization membership, and permissions for the specific review."
    }
  },
  "pricing": {
    "title": "Simple pricing",
    "free": {
      "name": "Free",
      "price": "$0",
      "period": "",
      "features": [
        "1 user",
        "2 active reviews",
        "100 MB storage",
        "Link sharing"
      ],
      "cta": "Start for free"
    },
    "pro": {
      "name": "Pro",
      "price": "$X",
      "period": "/mo",
      "popular": "Most popular",
      "features": [
        "Up to 10 users",
        "Unlimited reviews",
        "10 GB storage",
        "Email invitations",
        "Priority support"
      ],
      "cta": "Choose Pro"
    },
    "enterprise": {
      "name": "Enterprise",
      "price": "Contact",
      "period": "",
      "features": [
        "Unlimited users",
        "Unlimited reviews",
        "Dedicated storage",
        "SSO / SAML",
        "Dedicated support"
      ],
      "cta": "Contact us"
    }
  },
  "finalCta": {
    "title": "Start collecting feedback in 30 seconds",
    "subtitle": "No credit card. No commitment.",
    "cta": "Create a free account"
  },
  "footer": {
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "contact": "Contact"
  }
}
```

**Step 4: Create locale layout**

`src/app/[locale]/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignReview — Visual Feedback Platform",
  description:
    "Collect visual feedback on 3D models, PDFs, and images. Share a link, get pin-point comments.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

**Step 5: Create placeholder page**

`src/app/[locale]/page.tsx`:

```tsx
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <h1>{(dict.hero as any).title}</h1>
    </main>
  );
}
```

**Step 6: Delete old files, verify, commit**

```bash
rm src/app/layout.tsx src/app/page.tsx
npm run dev
```

Visit http://localhost:3000 — should redirect to `/pl` and show the Polish hero title.
Visit http://localhost:3000/en — should show the English hero title.

```bash
git add -A
git commit -m "feat: add i18n system with PL/EN dictionaries and locale routing"
```

---

### Task 3: Navbar component

**Files:**
- Create: `src/components/landing/navbar.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create Navbar**

`src/components/landing/navbar.tsx`:

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  dict: {
    features: string;
    pricing: string;
    login: string;
    cta: string;
  };
  locale: string;
  otherLocale: string;
}

export function Navbar({ dict, locale, otherLocale }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="text-xl font-bold">
          DesignReview
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {dict.features}
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {dict.pricing}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.designreview.com/login">{dict.login}</a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://app.designreview.com/register">{dict.cta}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
```

**Step 2: Wire into page**

Update `src/app/[locale]/page.tsx` to import and render `<Navbar />` with the nav dict section. Pass `locale` and `otherLocale` (pl↔en).

**Step 3: Verify and commit**

```bash
npm run dev
```

Check both `/pl` and `/en` — navbar should render with correct translations and language switcher.

```bash
git add -A
git commit -m "feat: add navbar with language switcher"
```

---

### Task 4: Hero section

**Files:**
- Create: `src/components/landing/hero.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create Hero component**

`src/components/landing/hero.tsx`:

```tsx
import { Button } from "@/components/ui/button";

interface HeroProps {
  dict: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {dict.title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        {dict.subtitle}
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Button size="lg" asChild>
          <a href="https://app.designreview.com/register">{dict.cta}</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#flow">{dict.ctaSecondary}</a>
        </Button>
      </div>
      {/* Placeholder for app screenshot/mockup */}
      <div className="mx-auto mt-16 max-w-4xl rounded-xl border bg-muted/50 p-8">
        <div className="aspect-video rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
          App Screenshot Placeholder
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add hero section"
```

---

### Task 5: Supported Formats section

**Files:**
- Create: `src/components/landing/formats.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create Formats component**

`src/components/landing/formats.tsx`:

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Box, FileText, Image } from "lucide-react";

interface FormatsProps {
  dict: {
    title: string;
    step: { title: string; description: string };
    pdf: { title: string; description: string };
    image: { title: string; description: string };
  };
}

export function Formats({ dict }: FormatsProps) {
  const formats = [
    { icon: Box, ...dict.step },
    { icon: FileText, ...dict.pdf },
    { icon: Image, ...dict.image },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {formats.map((format) => (
          <Card key={format.title} className="text-center">
            <CardContent className="pt-6">
              <format.icon className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">{format.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {format.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

**Step 2: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add supported formats section"
```

---

### Task 6: Flow Steps section

**Files:**
- Create: `src/components/landing/flow-steps.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create FlowSteps component**

`src/components/landing/flow-steps.tsx`:

```tsx
import { Upload, Link2, MessageSquare } from "lucide-react";

interface FlowStepsProps {
  dict: {
    title: string;
    step1: { title: string; description: string };
    step2: { title: string; description: string };
    step3: { title: string; description: string };
  };
}

export function FlowSteps({ dict }: FlowStepsProps) {
  const steps = [
    { icon: Upload, number: "1", ...dict.step1 },
    { icon: Link2, number: "2", ...dict.step2 },
    { icon: MessageSquare, number: "3", ...dict.step3 },
  ];

  return (
    <section id="flow" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                {step.number}
              </div>
              <step.icon className="mx-auto mt-6 h-8 w-8 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add flow steps section"
```

---

### Task 7: Features grid section

**Files:**
- Create: `src/components/landing/features.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create Features component**

`src/components/landing/features.tsx`:

```tsx
import {
  MapPin,
  Link2,
  Zap,
  Building2,
  Globe,
  ShieldCheck,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesProps {
  dict: {
    title: string;
    pins: FeatureItem;
    sharing: FeatureItem;
    realtime: FeatureItem;
    orgs: FeatureItem;
    browser: FeatureItem;
    security: FeatureItem;
  };
}

export function Features({ dict }: FeaturesProps) {
  const features = [
    { icon: MapPin, ...dict.pins },
    { icon: Link2, ...dict.sharing },
    { icon: Zap, ...dict.realtime },
    { icon: Building2, ...dict.orgs },
    { icon: Globe, ...dict.browser },
    { icon: ShieldCheck, ...dict.security },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex gap-4">
            <feature.icon className="mt-1 h-6 w-6 shrink-0 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Step 2: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add features grid section"
```

---

### Task 8: Audience section

**Files:**
- Create: `src/components/landing/audience.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create Audience component**

`src/components/landing/audience.tsx`:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User } from "lucide-react";

interface AudienceProps {
  dict: {
    title: string;
    teams: { title: string; items: string[] };
    freelancers: { title: string; items: string[] };
  };
}

export function Audience({ dict }: AudienceProps) {
  const groups = [
    { icon: Building2, ...dict.teams },
    { icon: User, ...dict.freelancers },
  ];

  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <group.icon className="h-6 w-6" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add audience section"
```

---

### Task 9: Security / Trust section

**Files:**
- Create: `src/components/landing/security.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create Security component**

`src/components/landing/security.tsx`:

```tsx
import { ShieldCheck, Lock, Timer, Users, KeyRound, Eye } from "lucide-react";

interface SecurityItem {
  title: string;
  description: string;
}

interface SecurityProps {
  dict: {
    title: string;
    subtitle: string;
    encryption: SecurityItem;
    passwords: SecurityItem;
    expiration: SecurityItem;
    isolation: SecurityItem;
    access: SecurityItem;
    auth: SecurityItem;
  };
}

export function Security({ dict }: SecurityProps) {
  const items = [
    { icon: ShieldCheck, ...dict.encryption },
    { icon: Lock, ...dict.passwords },
    { icon: Timer, ...dict.expiration },
    { icon: Users, ...dict.isolation },
    { icon: Eye, ...dict.access },
    { icon: KeyRound, ...dict.auth },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        {dict.subtitle}
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <item.icon className="mt-1 h-6 w-6 shrink-0 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Step 2: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add security/trust section"
```

---

### Task 10: Pricing section

**Files:**
- Create: `src/components/landing/pricing.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create Pricing component**

`src/components/landing/pricing.tsx`:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  popular?: string;
  features: string[];
  cta: string;
}

interface PricingProps {
  dict: {
    title: string;
    free: PricingTier;
    pro: PricingTier;
    enterprise: PricingTier;
  };
}

export function Pricing({ dict }: PricingProps) {
  const tiers = [dict.free, dict.pro, dict.enterprise];

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {tiers.map((tier) => {
          const isPopular = !!tier.popular;
          return (
            <Card
              key={tier.name}
              className={isPopular ? "border-primary shadow-lg relative" : "relative"}
            >
              {isPopular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {tier.popular}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={isPopular ? "default" : "outline"}
                  asChild
                >
                  <a href="https://app.designreview.com/register">
                    {tier.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
```

**Step 2: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add pricing section"
```

---

### Task 11: Final CTA + Footer

**Files:**
- Create: `src/components/landing/final-cta.tsx`
- Create: `src/components/landing/footer.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Create FinalCta component**

`src/components/landing/final-cta.tsx`:

```tsx
import { Button } from "@/components/ui/button";

interface FinalCtaProps {
  dict: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export function FinalCta({ dict }: FinalCtaProps) {
  return (
    <section className="bg-primary text-primary-foreground py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <p className="mt-4 text-lg opacity-90">{dict.subtitle}</p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-8"
          asChild
        >
          <a href="https://app.designreview.com/register">{dict.cta}</a>
        </Button>
      </div>
    </section>
  );
}
```

**Step 2: Create Footer component**

`src/components/landing/footer.tsx`:

```tsx
import Link from "next/link";

interface FooterProps {
  dict: {
    privacy: string;
    terms: string;
    contact: string;
  };
  locale: string;
  otherLocale: string;
}

export function Footer({ dict, locale, otherLocale }: FooterProps) {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <Link href={`/${locale}`} className="text-lg font-bold">
          DesignReview
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            {dict.privacy}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {dict.terms}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {dict.contact}
          </a>
          <Link
            href={`/${otherLocale}`}
            className="hover:text-foreground transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
```

**Step 3: Add to page, verify, commit**

```bash
git add -A
git commit -m "feat: add final CTA and footer sections"
```

---

### Task 12: Assemble full page

**Files:**
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Wire all sections into page**

`src/app/[locale]/page.tsx`:

```tsx
import { getDictionary, type Locale } from "@/lib/i18n";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Formats } from "@/components/landing/formats";
import { FlowSteps } from "@/components/landing/flow-steps";
import { Features } from "@/components/landing/features";
import { Audience } from "@/components/landing/audience";
import { Pricing } from "@/components/landing/pricing";
import { Security } from "@/components/landing/security";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const otherLocale = locale === "pl" ? "en" : "pl";

  return (
    <>
      <Navbar
        dict={dict.nav as any}
        locale={locale}
        otherLocale={otherLocale}
      />
      <main>
        <Hero dict={dict.hero as any} />
        <Formats dict={dict.formats as any} />
        <FlowSteps dict={dict.flow as any} />
        <Features dict={dict.features as any} />
        <Audience dict={dict.audience as any} />
        <Pricing dict={dict.pricing as any} />
        <Security dict={dict.security as any} />
        <FinalCta dict={dict.finalCta as any} />
      </main>
      <Footer
        dict={dict.footer as any}
        locale={locale}
        otherLocale={otherLocale}
      />
    </>
  );
}
```

**Step 2: Full visual check**

```bash
npm run dev
```

Check both `/pl` and `/en`:
- All 8 sections render in correct order
- Language switcher works (navbar + footer)
- Smooth scroll to `#flow`, `#features`, `#pricing` works
- Responsive: check at mobile (375px), tablet (768px), desktop (1280px)

**Step 3: Build check**

```bash
npm run build
```

Should pass without errors.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: assemble full landing page with all sections"
```

---

### Task 13: Polish and responsive fine-tuning

**Files:**
- Modify: Various component files as needed

**Step 1: Mobile menu**

Add a hamburger menu for mobile to `navbar.tsx` — show/hide nav links on small screens. Use a simple state toggle (make navbar a client component with `"use client"`).

**Step 2: Smooth scroll behavior**

Add `scroll-smooth` to the `<html>` tag in `layout.tsx`.

**Step 3: Final responsive check**

- Hero: text sizes scale down properly on mobile
- Format cards: stack vertically on mobile (`grid-cols-1` → `sm:grid-cols-3`)
- Flow steps: stack vertically on mobile
- Features grid: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3`
- Pricing cards: stack on mobile
- Footer: centered on mobile, row on desktop

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add mobile menu and responsive polish"
```
