'use client'

import { settingsData } from "@/data/settings"
import { Link, usePathname } from "@/navigation"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { useState } from "react"
import { PiGear } from "react-icons/pi"
import { twMerge } from "tailwind-merge"

export function SidebarSettings() {
    const [configModel, setConfigModel] = useState<boolean>(false)
    const settings = useTranslations("sidebar.settings")

    const { theme, setTheme } = useTheme()
    const currentLocale = useLocale()
    const pathname = usePathname()

    return (
        <>
            <PiGear
                size={35}
                className="mt-auto ml-auto min-h-8 hover:bg-white/15 p-1 rounded-md cursor-pointer z-10"
                onClick={() => setConfigModel(!configModel)}
            />

            {configModel &&
                <>
                    <div
                        className="absolute top-0 left-0 h-screen w-screen bg-black/15"
                        onClick={() => setConfigModel(false)}
                    />

                    <div className="bg-light-page dark:bg-dark-page absolute md:bottom-2 md:left-16 max-md:right-24 py-2 px-4 rounded-md border border-cyan-500 dark:border-cyan-900">
                        <p className="mb-1">{settings("categorys.themes")}</p>
                        <div className="flex flex-col gap-1">
                            {settingsData.themes.map((themeData, index) => (
                                <button
                                    key={index}
                                    className={twMerge("text-sm px-2 py-1 rounded-md text-start", theme === themeData ? "disabled:text-neutral-400" : "hover:bg-black/15 dark:hover:bg-white/15")}
                                    disabled={theme == themeData}
                                    onClick={() => {
                                        setTheme(themeData)
                                        setConfigModel(false)
                                    }}
                                >
                                    {settings(`themes.${themeData}`)}
                                </button>
                            ))}
                        </div>

                        <p className="mt-4 mb-1">{settings("categorys.languages")}</p>
                        <div className="flex flex-col gap-1">
                            {settingsData.languages.map((language, index) => (
                                currentLocale == language
                                    ?
                                    <button
                                        key={index}
                                        className="cursor-default text-sm px-2 py-1 rounded-md text-neutral-400 text-start"
                                    >
                                        {settings(`languages.${language}`)}
                                    </button>
                                    :
                                    <Link
                                        key={index}
                                        href={pathname}
                                        locale={language}
                                        className="text-sm px-2 py-1 rounded-md hover:bg-black/15 dark:hover:bg-white/15 text-start"
                                    >
                                        {settings(`languages.${language}`)}
                                    </Link>
                            ))}
                        </div>
                    </div>
                </>
            }
        </>
    )
}