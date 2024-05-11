import { NextIntlClientProvider } from "next-intl"

interface IntlConfig {
    children: React.ReactNode,
    locale: string
};

export async function InternalizationProvider({ children, locale }: IntlConfig) {
    let messages;
    try {
        messages = (await import(`../dicionaries/${locale}.json`)).default
    } catch (error) {
        console.log("Error in loading dicionaries.")
    }

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="America/Sao_Paulo"
        >
            {children}
        </NextIntlClientProvider>
    )
}