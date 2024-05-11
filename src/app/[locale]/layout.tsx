import { ThemeProvider } from "@/providers/theme";
import "@/styles/globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";
import { InternalizationProvider } from "@/providers/i18n";
import { ownerData } from "@/data/owner";

export default function RootLayout(
    { children, params: { locale } }: Readonly<{ children: React.ReactNode, params: { locale: string } }>
) {
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body className="font-inter bg-light-page dark:bg-dark-page text-black dark:text-white">
                <ThemeProvider>
                    <InternalizationProvider locale={locale}>
                        {children}
                    </InternalizationProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const [owner, metadata] = [
        await getTranslations({ locale, namespace: 'owner' }),
        await getTranslations({ locale, namespace: 'metadata' })
    ]

    const title = `${owner("firstname")} - ${owner("description")}`
    const websiteURL = "https://www.guilhermerodrigues.online/"

    let languages: Record<string, URL> = {};

    locales.map((loc) => {
        languages[loc] = new URL(`${websiteURL}/${loc}`);
    })


    return {
        title: title,
        description: metadata("description"),
        authors: [
            {
                name: owner("fullname"),
                url: websiteURL
            }
        ],
        metadataBase: new URL(websiteURL),
        creator: owner("fullname"),
        publisher: owner("fullname"),
        alternates: {
            canonical: websiteURL,
            languages,
        },
        twitter: {
            title: title,
            description: metadata("description"),
            siteId: ownerData.twitter.id,
            creator: ownerData.twitter.username,
            creatorId: ownerData.twitter.id,
            card: "summary_large_image",
          },
          openGraph: {
            type: "website",
            title: title,
            description: metadata("description"),
            // url: "/opengraph-image",
          },
          applicationName: title,
    }
}