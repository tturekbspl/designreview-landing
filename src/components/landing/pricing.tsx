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
                  <a href="https://app.revievv.io/register">
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
