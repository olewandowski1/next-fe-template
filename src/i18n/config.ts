// A list of all locales that are supported
export const LOCALES = ['en', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];

// Used when no locale matches
export const DEFAULT_LOCALE: Locale = 'en';

export const i18nConfig = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
} as const;
