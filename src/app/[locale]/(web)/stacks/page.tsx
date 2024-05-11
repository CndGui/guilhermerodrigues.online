import { FadeDiv } from "@/components/fade-div";
import { stacksData } from "@/data/stacks";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { StacksFiltred } from "./components/stacks-filtred";

export default async function Stacks({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale)

    const [stacks, categories] = [
        await getTranslations("pages.stacks"),
        await getTranslations("pages.stacks.categories")
    ]

    const categoriesArray = ["front", "back", "db", "vc", "tool"]

    return (
        <div className="px-96 max-[1860px]:px-60 max-2xl:px-44 max-xl:px-16 max-lg:px-4 py-16">
            <FadeDiv>
                <h1 className="text-3xl font-semibold">{stacks("title")}</h1>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">{stacks("description")}</p>
            </FadeDiv>

            {categoriesArray.map((category, index) => (
                <div key={index} className="mt-10">
                    <FadeDiv as="h1" className="text-2xl font-semibold">{categories(category)}</FadeDiv>
                    <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-2">
                        <StacksFiltred category={category as "front" | "back" | "db" | "vc" | "tool"} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const [owner, page] = [
        await getTranslations({ locale, namespace: 'owner' }),
        await getTranslations({ locale, namespace: 'pages.stacks' })
    ]

    return {
        title: `${owner("firstname")} - ${page("title")}`
    };
}