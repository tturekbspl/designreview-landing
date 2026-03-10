import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVideo } from "./hero-video";
import { ShieldCheck, Lock, CreditCard } from "lucide-react";

interface HeroProps {
  dict: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    ctaMicro: string;
    trustGdpr: string;
    trustEncryption: string;
    trustStripe: string;
  };
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 text-center">
      <Badge variant="secondary" className="mb-6 text-sm font-normal px-4 py-1.5">
        {dict.eyebrow}
      </Badge>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {dict.title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        {dict.subtitle}
      </p>
      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://app.revievv.io/register">{dict.cta}</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#flow">{dict.ctaSecondary}</a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{dict.ctaMicro}</p>
      </div>

      {/* Trust badges */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4" />
          {dict.trustGdpr}
        </span>
        <span className="flex items-center gap-1.5">
          <Lock className="h-4 w-4" />
          {dict.trustEncryption}
        </span>
        <span className="flex items-center gap-1.5">
          <CreditCard className="h-4 w-4" />
          {dict.trustStripe}
        </span>
      </div>

      <HeroVideo />
    </section>
  );
}
