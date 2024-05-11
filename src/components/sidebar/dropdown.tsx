'use client'

import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { SidebarNavigation } from "./navigation";

export function SidebarDropdown() {
    const [dropdown, setDropdown] = useState<boolean>(false)

    return (
        <>
            <LuAlignJustify
                size={35}
                className="hover:bg-white/15 rounded-md p-[0.15rem] cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
            />

            {dropdown &&
                <>
                    <div 
                        className="absolute left-0 h-screen w-full bg-black/15 top-10"
                        onClick={() => setDropdown(false)}
                    />

                    <div className="absolute bg-light-page dark:bg-dark-page border-b border-cyan-900 w-full left-0 top-10 p-4 overflow-y-auto">
                        <SidebarNavigation setDropdown={setDropdown} />
                    </div>
                </>
            }
        </>
    )
}