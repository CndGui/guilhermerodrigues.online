import { FadeDiv } from "@/components/fade-div";
import { ownerData } from "@/data/owner";

export function Contacts() {
    return (
        <>
            {ownerData.contacts.map((contact, index) => (
                <FadeDiv key={index} to="left" delay={0.3} className="flex flex-col">
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">{contact.prefix}</span>
                    <p className="text-neutral-700 dark:text-neutral-300 -mt-1">{contact.contact}</p>
                </FadeDiv>
            ))}
        </>
    )
}