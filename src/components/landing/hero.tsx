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
          <a href="https://app.revievv.io/register">{dict.cta}</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#flow">{dict.ctaSecondary}</a>
        </Button>
      </div>
      <div className="mx-auto mt-16 max-w-4xl rounded-xl border bg-muted/50 p-8">
        <div className="aspect-video rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
          App Screenshot Placeholder
        </div>
      </div>
    </section>
  );
}
