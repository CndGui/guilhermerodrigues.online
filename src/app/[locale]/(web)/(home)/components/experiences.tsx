import { FadeDiv } from "@/components/fade-div";
import { experiencesData } from "@/data/experiences";
import { ownerData } from "@/data/owner";

export function Experiences() {
    return (
        <>
            {experiencesData.map((experience, index) => (
                <FadeDiv key={index} delay={0.3} className="flex gap-4 bg-black/15 dark:bg-white/5 rounded-md px-4 py-2 items-center">
                    <img src={experience.image} alt={`${experience.name} Image`} className="size-14 min-w-14" />

                    <div className="flex flex-col">
                        <p className="text-">{experience.name}</p>
                        <span className="text-xs text-neutral-700 dark:text-neutral-400">{experience.function}</span>
                        <span className="text-xs text-neutral-700 dark:text-neutral-400">{experience.period}</span>
                    </div>
                </FadeDiv>
            ))}
        </>
    )
}