import React, { useState } from "react"

import { IonTextarea } from "@ionic/react"
import clsx from "clsx"
import "./custom.css"
import style from "./style.module.css"

type IonTextAreaProps = React.ComponentProps<typeof IonTextarea>

type TextAreaProps = IonTextAreaProps

const TextArea: React.FC<TextAreaProps> = ({
    className,
    ...props
}: TextAreaProps) => {
    const [isActive, setIsActive] = useState(false)

    const borderColor = isActive ? "border-primary" : "border-gray-300"

    return (
        <div className={clsx(style["container"], className, borderColor)}>
            <IonTextarea
                shape="round"
                class="custom"
                rows={3}
                onIonFocus={() => setIsActive(true)}
                onIonBlur={() => setIsActive(false)}
                {...props}
            />
        </div>
    )
}

export default TextArea
