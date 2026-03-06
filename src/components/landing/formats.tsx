import { Card, CardContent } from "@/components/ui/card";
import { Box, FileText, Image } from "lucide-react";

interface FormatsProps {
  dict: {
    title: string;
    step: { title: string; description: string };
    pdf: { title: string; description: string };
    image: { title: string; description: string };
  };
}

export function Formats({ dict }: FormatsProps) {
  const formats = [
    { icon: Box, ...dict.step },
    { icon: FileText, ...dict.pdf },
    { icon: Image, ...dict.image },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.title}
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {formats.map((format) => (
          <Card key={format.title} className="text-center">
            <CardContent className="pt-6">
              <format.icon className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">{format.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {format.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
