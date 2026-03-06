import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  dict: {
    features: string;
    pricing: string;
    login: string;
    cta: string;
  };
  locale: string;
  otherLocale: string;
}

export function Navbar({ dict, locale, otherLocale }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="text-xl font-bold">
          DesignReview
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {dict.features}
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {dict.pricing}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.designreview.com/login">{dict.login}</a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://app.designreview.com/register">{dict.cta}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
