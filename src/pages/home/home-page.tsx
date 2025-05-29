import React from "react"
import { IonPage } from "@ionic/react"
import PostIncidentButton from "./components/post-incident-button"
import MapView from "../../components/map-view"

import style from "./home-page.module.css"

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <div className={style["container"]}>
                <PostIncidentButton />
                <MapView className={style["map-container"]} />
            </div>
        </IonPage>
    )
}

export default HomePage
