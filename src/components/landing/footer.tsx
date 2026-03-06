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
          <a href="#" className="hover:text-foreground transition-colors">
            {dict.privacy}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {dict.terms}
          </a>
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
    </footer>
  );
}
