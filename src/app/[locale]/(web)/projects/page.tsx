import { FadeDiv } from "@/components/fade-div";
import { projectsData } from "@/data/projects";
import { socialsData } from "@/data/socials";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function Projects({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale)

    const [projects] = [
        await getTranslations("pages.projects")
    ]

    return (
        <div className="px-96 max-[1860px]:px-60 max-2xl:px-44 max-xl:px-16 max-lg:px-4 py-16">
            <FadeDiv>
                <h1 className="text-3xl font-semibold">{projects("title")}</h1>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                    {projects("description")} <a
                        href={socialsData.find(social => social.name.toLowerCase() == "github")?.href}
                        target="_blank"
                        className="text-cyan-600 dark:text-cyan-700"
                    >
                        GitHub
                    </a>.
                </p>
            </FadeDiv>

            <div className="flex justify-center">
                <div className="grid grid-cols-3 max-[1536px]:grid-cols-2 max-md:grid-cols-1 gap-5 mt-6">
                    {projectsData.map((project, index) => (
                        <FadeDiv key={index} delay={0.1} className="flex flex-col items-center border border-cyan-500 dark:border-cyan-900 rounded-md p-4 max-w-80">
                            <img
                                src={project.image_url ? project.image_url : "/images/projects/no-image.png"}
                                alt={`${project.name} Image`}
                                className="w-72 h-40 bg-white rounded-md border dark:border-dark-page"
                            />

                            <div className="mt-2">
                                <p>{project.name}</p>
                                <p className="text-neutral-600 dark:text-neutral-400">{projects(`${project.id}.description`)}</p>
                            </div>

                            <div className="mt-2 flex-1 flex ml-auto">
                                <div className="mt-auto ml-auto flex gap-2">
                                    {project.homepage &&
                                        <a href={project.homepage} target="_blank">
                                            <button className="bg-cyan-500 dark:bg-cyan-700 px-4 py-1 rounded-md text-white hover:bg-cyan-600 dark:hover:bg-cyan-600">{projects("buttons.visit")}</button>
                                        </a>
                                    }

                                    <a href={project.repository} target="_blank">
                                        <button className="border border-cyan-500 dark:border-cyan-900 px-4 py-1 rounded-md hover:border-cyan-700 dark:hover:border-cyan-500">{projects("buttons.code")}</button>
                                    </a>
                                </div>
                            </div>
                        </FadeDiv>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const [owner, page] = [
        await getTranslations({ locale, namespace: 'owner' }),
        await getTranslations({ locale, namespace: 'pages.projects' })
    ]

    return {
        title: `${owner("firstname")} - ${page("title")}`
    };
}