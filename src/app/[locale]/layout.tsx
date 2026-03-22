import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const metaByLocale = {
  pl: {
    title: "Revievv – Wizualny feedback na modelach 3D, PDF i obrazach",
    description:
      "Przeglądaj modele 3D CAD, PDF-y i obrazy w przeglądarce. Udostępnij link, zbieraj precyzyjny feedback. Bez licencji CAD. Za darmo.",
  },
  en: {
    title: "Revievv – 3D Model Review & Visual Feedback Tool",
    description:
      "Review 3D CAD models, PDFs and images in your browser. Share a link, collect pinpointed feedback. No CAD license needed. Free to start.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta =
    metaByLocale[locale as keyof typeof metaByLocale] ?? metaByLocale.pl;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://revievv.io/${locale}`,
      languages: {
        pl: "https://revievv.io/pl",
        en: "https://revievv.io/en",
        "x-default": "https://revievv.io/pl",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://revievv.io/${locale}`,
      siteName: "Revievv",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      alternateLocale: locale === "pl" ? "en_US" : "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function JsonLd({ locale }: { locale: string }) {
  const meta =
    metaByLocale[locale as keyof typeof metaByLocale] ?? metaByLocale.pl;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Revievv",
    url: `https://revievv.io/${locale}`,
    description: meta.description,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "0",
        priceCurrency: "EUR",
        description: "3 active reviews, 500 MB storage",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "19",
        priceCurrency: "EUR",
        description: "15 active reviews, 5 GB storage",
      },
      {
        "@type": "Offer",
        name: "Team",
        price: "49",
        priceCurrency: "EUR",
        description: "50 active reviews, 50 GB storage",
      },
    ],
    creator: {
      "@type": "Organization",
      name: "Tomstack Tomasz Turek",
      url: "https://revievv.io",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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
    <html lang={locale} className="scroll-smooth">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="c7e12fb4-c019-43c9-9041-e1e1f497c081"
          strategy="beforeInteractive"
        />
        <JsonLd locale={locale} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          defer
          data-domain="revievv.io"
          src="https://analytics.tomstack.dev/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
          data-cookieconsent="statistics"
          strategy="afterInteractive"
        />
        <Script
          id="plausible-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
          }}
        />
      </body>
    </html>
  );
}
