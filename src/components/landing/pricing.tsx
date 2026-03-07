"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlyDiscount?: string;
  popular?: string;
  features: string[];
  cta: string;
}

interface PricingProps {
  dict: {
    title: string;
    monthly: string;
    yearly: string;
    perMonth: string;
    starter: PricingTier;
    pro: PricingTier;
    team: PricingTier;
  };
}

export function Pricing({ dict }: PricingProps) {
  const [yearly, setYearly] = useState(false);
  const tiers = [dict.starter, dict.pro, dict.team];

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>

      {/* Toggle */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          {dict.monthly}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          onClick={() => setYearly(!yearly)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
            yearly ? "bg-primary" : "bg-muted-foreground/30"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
              yearly ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          {dict.yearly}
        </span>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {tiers.map((tier) => {
          const isPopular = !!tier.popular;
          const price = yearly ? tier.yearlyPrice : tier.monthlyPrice;

          return (
            <Card
              key={tier.name}
              className={
                isPopular
                  ? "border-primary shadow-lg relative"
                  : "relative"
              }
            >
              {isPopular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {tier.popular}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{price}</span>
                  {price !== "€0" && (
                    <span className="text-muted-foreground">
                      {dict.perMonth}
                    </span>
                  )}
                </div>
                {yearly && tier.yearlyDiscount && (
                  <p className="mt-1 text-sm font-medium text-green-600 dark:text-green-400">
                    {tier.yearlyDiscount}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" />
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
                  <a href="https://app.revievv.io/register">{tier.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
