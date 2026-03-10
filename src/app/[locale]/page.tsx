import { getDictionary, type Locale } from "@/lib/i18n";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Formats } from "@/components/landing/formats";
import { FlowSteps } from "@/components/landing/flow-steps";
import { Features } from "@/components/landing/features";
import { Audience } from "@/components/landing/audience";
import { Security } from "@/components/landing/security";
import { Pricing } from "@/components/landing/pricing";
import { MidCta } from "@/components/landing/mid-cta";
import { StickyCtaBar } from "@/components/landing/sticky-cta-bar";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const otherLocale = locale === "pl" ? "en" : "pl";

  return (
    <>
      <Navbar
        dict={dict.nav as any}
        locale={locale}
        otherLocale={otherLocale}
      />
      <StickyCtaBar
        cta={(dict.hero as any).cta}
        ctaMicro={(dict.hero as any).ctaMicro}
      />
      <main>
        <Hero dict={dict.hero as any} />
        <Formats dict={dict.formats as any} />
        <FlowSteps dict={dict.flow as any} />
        <Features dict={dict.features as any} />
        <MidCta dict={dict.midCta as any} />
        <Audience dict={dict.audience as any} />
        <Security dict={dict.security as any} />
        <Pricing dict={dict.pricing as any} />
        <FinalCta dict={dict.finalCta as any} />
      </main>
      <Footer
        dict={dict.footer as any}
        locale={locale}
        otherLocale={otherLocale}
      />
    </>
  );
}
