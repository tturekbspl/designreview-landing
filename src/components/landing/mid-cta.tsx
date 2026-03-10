import { Button } from "@/components/ui/button";

interface MidCtaProps {
  dict: {
    cta: string;
    ctaMicro: string;
  };
}

export function MidCta({ dict }: MidCtaProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="flex flex-col items-center gap-2">
          <Button size="lg" asChild>
            <a href="https://app.revievv.io/register">{dict.cta}</a>
          </Button>
          <p className="text-sm text-muted-foreground">{dict.ctaMicro}</p>
        </div>
      </div>
    </section>
  );
}
