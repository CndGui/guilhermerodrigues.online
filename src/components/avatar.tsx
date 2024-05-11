import { useTranslations } from "next-intl";
import { ImgHTMLAttributes } from "react";

export function Avatar({ ...props }: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">) {
    const owner = useTranslations("owner")

    return <img src={owner("image_url")} alt={owner("firstname") + " Image"} {...props} />
}