import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const skipPaths = ["/privacy", "/terms"];
  if (skipPaths.some((p) => pathname.startsWith(p))) return;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0];

  const detectedLocale = locale && locales.includes(locale as any) ? locale : defaultLocale;

  request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
