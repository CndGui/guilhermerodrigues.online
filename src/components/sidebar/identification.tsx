'use client'

import { useTranslations } from "next-intl"
import { Avatar } from "../avatar"
import { Link, usePathname } from "@/navigation"
import { twMerge } from "tailwind-merge"

export function SidebarIdentification() {
    const owner = useTranslations("owner")
    const pathname = usePathname()

    return (
        <Link
            href={"/"}
            className={
                twMerge(
                    "flex md:py-2 md:px-2 md:h-min md:w-full gap-3 transition-all duration-500 origin-top",
                    (pathname == "/" && "scale-y-0 py-0 -mt-12")
                )
            }
        >
            <Avatar className="size-10 rounded-md max-md:size-8" />

            <div className="flex flex-col">
                <span className="text-sm max-md:text-xs font-medium -tracking-tight">{owner("fullname")}</span>
                <span className="text-xs max-md:text-[0.60rem] max-md:-mt-1 text-neutral-600 dark:text-neutral-400">{owner("description")}</span>
            </div>
        </Link>
    )
}