import { i18nConfig, Locale } from '@/i18n/config';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = (await requestLocale) as Locale | undefined;

  // Ensure that a valid locale is used
  if (!locale || !i18nConfig.locales.includes(locale)) {
    locale = i18nConfig.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
