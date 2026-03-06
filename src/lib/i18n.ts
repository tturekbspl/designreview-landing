export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

type Messages = Record<string, string | Record<string, string | Record<string, string | string[]>>>;

const dictionaries: Record<Locale, () => Promise<Messages>> = {
  pl: () => import("@/messages/pl.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Messages> {
  const loader = dictionaries[locale];
  if (!loader) return dictionaries[defaultLocale]();
  return loader();
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
