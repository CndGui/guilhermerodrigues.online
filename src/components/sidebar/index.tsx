import { SidebarSettings } from "./settings";
import { SidebarDropdown } from "./dropdown";
import { SidebarIdentification } from "./identification";
import { SidebarNavigation } from "./navigation";

export function Sidebar() {
    return (
        <>
            <aside className="fixed top-0 left-0 md:border-r max-md:border-b border-cyan-500 dark:border-cyan-900 h-screen max-md:h-12 w-60 max-md:w-full flex max-md:items-center max-md:px-1 md:flex-col dark:bg-dark-page bg-light-page z-10">
                <SidebarIdentification />

                <div className="max-md:hidden flex-1 flex flex-col p-2 overflow-y-auto">
                    <div className="overflow-y-auto">
                        <SidebarNavigation />
                    </div>
                    <SidebarSettings />
                </div>

                <div className="md:hidden flex-1 flex gap-3">
                    <SidebarSettings />
                    <SidebarDropdown />
                </div>
            </aside>
        </>
    )
}