import { ownerData } from "@/data/owner";

export function MainStack() {
    return (
        <>
            {ownerData.mainStacks.map((stack, index) => (
                <span className="text-sm bg-cyan-500 dark:bg-cyan-800 px-2 rounded-[0.3rem] font-medium text-white" key={index}>{stack}</span>
            ))}
        </>
    )
}