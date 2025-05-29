import React, { useState } from "react"

import { IonInput } from "@ionic/react"
import clsx from "clsx"
import "./custom.css"
import style from "./style.module.css"

type IonTextInputProps = React.ComponentProps<typeof IonInput>

type TextInputProps = IonTextInputProps

const TextInput: React.FC<TextInputProps> = ({
    className,
    ...props
}: TextInputProps) => {
    const [isActive, setIsActive] = useState(false)

    const borderColor = isActive ? "border-primary" : "border-gray-300"

    return (
        <div className={clsx(style["container"], className, borderColor)}>
            <IonInput
                shape="round"
                class="custom"
                {...props}
                onIonFocus={() => setIsActive(true)}
                onIonBlur={() => setIsActive(false)}
            />
        </div>
    )
}

export default TextInput
