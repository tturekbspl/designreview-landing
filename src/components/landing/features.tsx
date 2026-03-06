import {
  MapPin,
  Link2,
  Zap,
  Building2,
  Globe,
  ShieldCheck,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesProps {
  dict: {
    title: string;
    pins: FeatureItem;
    sharing: FeatureItem;
    realtime: FeatureItem;
    orgs: FeatureItem;
    browser: FeatureItem;
    security: FeatureItem;
  };
}

export function Features({ dict }: FeaturesProps) {
  const features = [
    { icon: MapPin, ...dict.pins },
    { icon: Link2, ...dict.sharing },
    { icon: Zap, ...dict.realtime },
    { icon: Building2, ...dict.orgs },
    { icon: Globe, ...dict.browser },
    { icon: ShieldCheck, ...dict.security },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex gap-4">
            <feature.icon className="mt-1 h-6 w-6 shrink-0 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
