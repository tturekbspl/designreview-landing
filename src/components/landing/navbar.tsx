"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`}>
          <Image src="/logo.svg" alt="revievv" width={120} height={28} priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {dict.features}
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {dict.pricing}
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`/${otherLocale}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.revievv.io/login">{dict.login}</a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://app.revievv.io/register">{dict.cta}</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {dict.features}
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {dict.pricing}
            </a>
            <Link
              href={`/${otherLocale}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://app.revievv.io/login">{dict.login}</a>
              </Button>
              <Button size="sm" asChild>
                <a href="https://app.revievv.io/register">{dict.cta}</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
