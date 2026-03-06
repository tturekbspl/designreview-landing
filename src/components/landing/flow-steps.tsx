import { Upload, Link2, MessageSquare } from "lucide-react";

interface FlowStepsProps {
  dict: {
    title: string;
    step1: { title: string; description: string };
    step2: { title: string; description: string };
    step3: { title: string; description: string };
  };
}

export function FlowSteps({ dict }: FlowStepsProps) {
  const steps = [
    { icon: Upload, number: "1", ...dict.step1 },
    { icon: Link2, number: "2", ...dict.step2 },
    { icon: MessageSquare, number: "3", ...dict.step3 },
  ];

  return (
    <section id="flow" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                {step.number}
              </div>
              <step.icon className="mx-auto mt-6 h-8 w-8 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
