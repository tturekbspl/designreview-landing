"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface StickyCtaBarProps {
  cta: string;
  ctaMicro: string;
}

export function StickyCtaBar({ cta, ctaMicro }: StickyCtaBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <p className="hidden text-sm text-muted-foreground sm:block">
          {ctaMicro}
        </p>
        <Button size="sm" asChild className="ml-auto">
          <a href="https://app.revievv.io/register">{cta}</a>
        </Button>
      </div>
    </div>
  );
}
