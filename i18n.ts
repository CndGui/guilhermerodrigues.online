import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'pt'];

export default getRequestConfig(async ({ locale }) => {
    return {
        messages: (await import(`./src/dicionaries/${locale}.json`)).default
    };
});