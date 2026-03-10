import { Button } from "@/components/ui/button";

interface FinalCtaProps {
  dict: {
    title: string;
    subtitle: string;
    cta: string;
    ctaMicro: string;
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
        <div className="mt-8 flex flex-col items-center gap-2">
          <Button size="lg" variant="secondary" asChild>
            <a href="https://app.revievv.io/register">{dict.cta}</a>
          </Button>
          <p className="text-sm opacity-70">{dict.ctaMicro}</p>
        </div>
      </div>
    </section>
  );
}
