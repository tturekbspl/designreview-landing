import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  dict: {
    privacy: string;
    terms: string;
    contact: string;
  };
  locale: string;
  otherLocale: string;
}

export function Footer({ dict, locale, otherLocale }: FooterProps) {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <Link href={`/${locale}`}>
          <Image src="/logo.svg" alt="revievv" width={100} height={23} />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            {dict.privacy}
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            {dict.terms}
          </Link>
          <a href="#" className="hover:text-foreground transition-colors">
            {dict.contact}
          </a>
          <Link
            href={`/${otherLocale}`}
            className="hover:text-foreground transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-8">
        <p className="text-center text-xs text-muted-foreground/60">
          revievv.io by Tomstack Tomasz Turek, Szkolna 2K, 42-512 Preczów, NIP: 6010041104
        </p>
      </div>
    </footer>
  );
}
