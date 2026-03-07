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

export const metadata: Metadata = {
  title: "revievv — Visual Feedback Platform",
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
    <html lang={locale} className="scroll-smooth">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="c7e12fb4-c019-43c9-9041-e1e1f497c081"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_8YBKCViKXp5rLTXcEGCJD"
          data-domain="revievv.io"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
