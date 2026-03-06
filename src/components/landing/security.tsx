import { ShieldCheck, Lock, Timer, Users, Eye, KeyRound } from "lucide-react";

interface SecurityItem {
  title: string;
  description: string;
}

interface SecurityProps {
  dict: {
    title: string;
    subtitle: string;
    encryption: SecurityItem;
    passwords: SecurityItem;
    expiration: SecurityItem;
    isolation: SecurityItem;
    access: SecurityItem;
    auth: SecurityItem;
  };
}

export function Security({ dict }: SecurityProps) {
  const items = [
    { icon: ShieldCheck, ...dict.encryption },
    { icon: Lock, ...dict.passwords },
    { icon: Timer, ...dict.expiration },
    { icon: Users, ...dict.isolation },
    { icon: Eye, ...dict.access },
    { icon: KeyRound, ...dict.auth },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        {dict.subtitle}
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <item.icon className="mt-1 h-6 w-6 shrink-0 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
