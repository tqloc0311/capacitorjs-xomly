import React from "react"
import clsx from "clsx"
import { IonImg } from "@ionic/react"

import "./style.css"

type MapViewProps = React.HTMLAttributes<HTMLDivElement>

const MapView: React.FC<MapViewProps> = (props: MapViewProps) => {
    return (
        <div className={clsx("map-view", props.className)} {...props}>
            <IonImg
                className="h-full w-full object-cover"
                src="/assets/map.jpg"
            />
        </div>
    )
}

export default MapView
