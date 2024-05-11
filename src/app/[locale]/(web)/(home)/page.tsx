import { Avatar } from "@/components/avatar";
import { FadeDiv } from "@/components/fade-div";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { MainStack } from "./components/main-stacks";
import { Experiences } from "./components/experiences";
import { Contacts } from "./components/contacts";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale)

    const [owner, about, experience, contact] = [
        await getTranslations("owner"),
        await getTranslations("pages.home.sections.about"),
        await getTranslations("pages.home.sections.experience"),
        await getTranslations("pages.home.sections.contact")
    ]

    return (
        <div className="px-96 max-[1860px]:px-60 max-2xl:px-44 max-xl:px-16 max-lg:px-4 py-16">
            <div>
                <FadeDiv className="flex gap-2 items-center">
                    <Avatar className="size-28 min-w-28 border border-cyan-500 dark:border-cyan-900 rounded-md" />

                    <FadeDiv className="flex flex-col">
                        <p className="text-3xl font-semibold">{owner("fullname")}</p>
                        <p className="text-lg text-neutral-500 font-medium">{owner("description")}</p>

                        <FadeDiv className="flex gap-1 mt-2 flex-wrap max-md:hidden">
                            <MainStack />
                        </FadeDiv>
                    </FadeDiv>
                </FadeDiv>

                <FadeDiv className="hidden gap-1 mt-2 flex-wrap max-md:flex">
                    <MainStack />
                </FadeDiv>
            </div>

            <FadeDiv delay={0.1} className="mt-6 border border-cyan-500 dark:border-cyan-900 rounded-md p-8">
                <FadeDiv delay={0.2}>
                    <h1 className="text-xl font-semibold">{about("title")}</h1>
                    <p className="mt-3 text-neutral-700 dark:text-neutral-300">{about("content")}</p>
                </FadeDiv>
            </FadeDiv>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 mt-6">
                <FadeDiv delay={0.2} className="w-full h-[26rem] border border-cyan-500 dark:border-cyan-900 rounded-md p-8 flex flex-col">
                    <FadeDiv as="h1" delay={0.3} className="text-xl font-semibold">{experience("title")}</FadeDiv>

                    <div className="mt-3 flex flex-col gap-3 overflow-y-auto overflow-x-hidden">
                        <Experiences />
                    </div>
                </FadeDiv>

                <FadeDiv to="left" delay={0.2} className="w-full h-[26rem] border border-cyan-500 dark:border-cyan-900 rounded-md p-8 flex flex-col">
                    <FadeDiv to="left" as="h1" delay={0.3} className="text-xl font-semibold">{contact("title")}</FadeDiv>

                    <div className="mt-6 flex flex-col gap-3 flex-1">
                        <Contacts />
                    </div>

                    <a href="/files/resume.pdf" target="_blank">
                        <FadeDiv to="top" as="button" delay={0.35} className="w-full bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-500 px-2 py-1 rounded-md text-white">{contact("download")}</FadeDiv>
                    </a>
                </FadeDiv>
            </div>
        </div>
    )
}