'use client'

import { socialsData } from "@/data/socials";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { PiArrowUpRight, PiCode, PiDevices, PiHouse } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export function SidebarNavigation({ setDropdown }: { setDropdown?: Dispatch<SetStateAction<boolean>> }) {
    const pathname = usePathname()
    const [nav, separators] = [useTranslations("sidebar.navegations"), useTranslations("sidebar.separators")]

    return (
        <nav>
            <Link
                href={"/"}
                className={twMerge("flex gap-2 p-2 items-center hover:bg-black/15 dark:hover:bg-white/15 rounded-md", pathname == "/" && "bg-white/15 text-cyan-500")}
                onClick={() => typeof setDropdown == "function" && setDropdown(false)}
            >
                <PiHouse size={20} />
                <span>{nav("home")}</span>
            </Link>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4 mb-2">{separators("me")}</p>

            <div className="flex flex-col gap-3">
                <Link
                    href={"/projects"}
                    className={twMerge("flex gap-2 p-2 items-center hover:bg-black/15 dark:hover:bg-white/15 rounded-md", pathname == "/projects" && "bg-white/15 text-cyan-500")}
                    onClick={() => typeof setDropdown == "function" && setDropdown(false)}
                >
                    <PiDevices size={20} />
                    <span>{nav("projects")}</span>
                </Link>

                <Link
                    href={"/stacks"}
                    className={twMerge("flex gap-2 p-2 items-center hover:bg-black/15 dark:hover:bg-white/15 rounded-md", pathname == "/stacks" && "bg-white/15 text-cyan-500")}
                    onClick={() => typeof setDropdown == "function" && setDropdown(false)}
                >
                    <PiCode size={20} />
                    <span>{nav("stacks")}</span>
                </Link>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4 mb-2">{separators("socials")}</p>

            <div className="flex flex-col gap-3">
                {socialsData.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        className="flex gap-2 p-2 items-center hover:bg-black/15 dark:hover:bg-white/15 rounded-md"
                    >
                        <social.icon size={20} />
                        <span>{social.name}</span>

                        <PiArrowUpRight size={10} className="ml-auto -mt-5 text-cyan-500" />
                    </a>
                ))}
            </div>
        </nav>
    )
}