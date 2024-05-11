import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "../i18n";

const { Link, useRouter, usePathname, redirect } = createSharedPathnamesNavigation({ locales })

export { Link, useRouter, usePathname, redirect }