'use client'

import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion"
import { ReactHTML } from "react"

interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode,
    to?: "top" | "right" | "bottom" | "left"
    duration?: number,
    delay?: number,
    as?: keyof ReactHTML
}

export function FadeDiv({ children, to = "right", duration = 1, delay = 0, as = "div", ...props }: Props) {
    const options = {
        left: {
            direction: "x",
            value: 50
        },
        right: {
            direction: "x",
            value: -50
        },
        top: {
            direction: "y",
            value: 50
        },
        bottom: {
            direction: "y",
            value: -50
        },
    }[to]

    // @ts-expect-error
    const Component = motion[as] as ForwardRefComponent<
        HTMLDivElement,
        HTMLMotionProps<"div">
    >;

    return (
        <Component
            initial={{
                opacity: 0,
                [options.direction]: [options.value]
            }}
            whileInView={{
                opacity: 1,
                [options.direction]: 0
            }}
            transition={{
                type: "spring",
                duration: duration,
                delay: delay
            }}
            viewport={{ once: true }}

            {...props}
        >
            {children}
        </Component>
    )
}