import React from "react"

import clsx from "clsx"
import style from "./style.module.css"

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string
}

const Text: React.FC<TextProps> = (props: TextProps) => {
    const mergedClassName = clsx(style["text"], props.className)
    return (
        <p {...props} className={mergedClassName}>
            {props.children}
        </p>
    )
}

export default Text
