import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'dk'] as const;

type LocaleTypes = typeof locales[number];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as LocaleTypes
    )) notFound();
 
  console.log("current locale applied: ", locale);

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});