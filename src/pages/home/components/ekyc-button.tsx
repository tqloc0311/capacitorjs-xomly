import { IonFab, IonIcon } from "@ionic/react"
import React from "react"
import { IonFabButton } from "@ionic/react"
import useSafeAreaInsets from "../../../hooks/use-safe-area-insets"
import { fingerPrint } from "ionicons/icons"
import { EkycNative } from "../../../plugin"

const EkycButton: React.FC = () => {
    const { insets } = useSafeAreaInsets()

    const handleClick = async () => {
        const result = await EkycNative.doEkyc({ userId: "123" })
        console.log(result)
    }

    return (
        <IonFab
            slot="fixed"
            vertical="top"
            horizontal="end"
            style={{
                marginTop: insets.top,
            }}
        >
            <IonFabButton onClick={handleClick}>
                <IonIcon icon={fingerPrint}></IonIcon>
            </IonFabButton>
        </IonFab>
    )
}

export default EkycButton
