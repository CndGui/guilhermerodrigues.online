import { FadeDiv } from "@/components/fade-div"
import { stacksData } from "@/data/stacks"

interface Props {
    category: "front" | "back" | "db" | "vc" | "tool"
}

export async function StacksFiltred({ category }: Props) {
    return (
        stacksData.map((stack, index) => (
            stack.category == category && (stack.url
                ? <FadeDiv>
                    <a href={stack.url} key={index} className="flex gap-2 items-center p-2 bg-cyan-800/10 dark:bg-cyan-900/10 hover:bg-cyan-800/30 dark:hover:bg-cyan-900/30 rounded-md">
                        <img
                            src={stack.image_url}
                            alt={`${stack.name} Image`}
                            className="size-10 p-1 bg-black/15 dark:bg-white/15 rounded-md"
                        />

                        <p>{stack.name}</p>
                    </a>
                </FadeDiv>
                : <FadeDiv key={index} className="flex gap-2 items-center p-2 bg-cyan-900/10 dark:bg-cyan-900/10 rounded-md">
                    <img
                        src={stack.image_url}
                        alt={`${stack.name} Image`}
                        className="size-10 p-1 bg-black/15 dark:bg-white/15 rounded-md"
                    />

                    <p>{stack.name}</p>
                </FadeDiv>)
        ))
    )
}