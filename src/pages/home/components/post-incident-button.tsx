import { IonFabButton, IonIcon } from "@ionic/react"
import { IonFab } from "@ionic/react"
import React from "react"
import { add } from "ionicons/icons"
import useSafeAreaInsets from "../../../hooks/use-safe-area-insets"
import { useHistory } from "react-router-dom"

const PostIncidentButton: React.FC = () => {
    const { insets } = useSafeAreaInsets()
    const history = useHistory()

    const handleClick = () => {
        history.push("/post-incident")
    }

    return (
        <IonFab
            slot="fixed"
            vertical="bottom"
            horizontal="end"
            style={{
                marginBottom: insets.bottom,
            }}
        >
            <IonFabButton onClick={handleClick}>
                <IonIcon icon={add}></IonIcon>
            </IonFabButton>
        </IonFab>
    )
}

export default PostIncidentButton
