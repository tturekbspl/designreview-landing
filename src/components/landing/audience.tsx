import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User } from "lucide-react";

interface AudienceProps {
  dict: {
    title: string;
    teams: { title: string; items: string[] };
    freelancers: { title: string; items: string[] };
  };
}

export function Audience({ dict }: AudienceProps) {
  const groups = [
    { icon: Building2, ...dict.teams },
    { icon: User, ...dict.freelancers },
  ];

  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <group.icon className="h-6 w-6" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
