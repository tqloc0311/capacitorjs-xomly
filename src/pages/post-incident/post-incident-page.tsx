import React from "react"
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react"
import { chevronBack } from "ionicons/icons"
import { useHistory } from "react-router-dom"
import usePostIncidentPage from "./post-incident-page.hook"
import Text from "../../components/text"
import TextInput from "../../components/text-input"
import TextArea from "../../components/text-area"
import { openAppSettings } from "../../util/util"
import Button from "../../components/button"

const PostIncidentPage: React.FC = () => {
    const history = useHistory()
    const {
        sendIncident,
        permissionStatus,
        coordinate,
        isSendButtonEnabled,
        incidentSummary,
        incidentDescription,
        setIncidentSummary,
        setIncidentDescription,
    } = usePostIncidentPage()

    const handleBack = () => {
        history.goBack()
    }

    const handleSendIncident = async () => {
        await sendIncident()
        history.goBack()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <Button onClick={handleBack}>
                            <IonIcon icon={chevronBack} />
                        </Button>
                    </IonButtons>
                    <IonTitle>Post Incident</IonTitle>
                    <IonButtons slot="end">
                        <Button
                            onClick={handleSendIncident}
                            disabled={!isSendButtonEnabled}
                        >
                            <p>{textConstants.send}</p>
                        </Button>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <Text className="text-lg font-bold">Incident summary</Text>
                <TextInput
                    placeholder={textConstants.incidentSummaryPlaceholder}
                    className="ion-margin-top"
                    maxlength={32}
                    counter
                    value={incidentSummary}
                    onIonInput={(e) => {
                        setIncidentSummary(e.detail.value ?? "")
                    }}
                />

                <p className="h-3" />

                <Text className="text-lg font-bold">Incident description</Text>
                <TextArea
                    placeholder={textConstants.incidentDescriptionPlaceholder}
                    className="ion-margin-top"
                    rows={5}
                    maxlength={500}
                    counter
                    value={incidentDescription}
                    onIonInput={(e) => {
                        setIncidentDescription(e.detail.value ?? "")
                    }}
                />

                <p className="h-3" />

                <Text className="text-lg font-bold">
                    {textConstants.incidentLocationPlaceholder}
                </Text>
                {permissionStatus?.location === "denied" && (
                    <DeniedLocationPermission />
                )}
                {permissionStatus?.location === "granted" && coordinate && (
                    <LocationDescription
                        address={`${coordinate.latitude}, ${coordinate.longitude}`}
                    />
                )}
            </IonContent>
        </IonPage>
    )
}

const LocationDescription = ({ address }: { address: string }) => {
    return (
        <div className="flex items-center justify-between">
            <Text>{address}</Text>
        </div>
    )
}

const DeniedLocationPermission = () => {
    return (
        <div className="flex items-center justify-between">
            <Text>{textConstants.deniedLocationPermission}</Text>
            <Button fill="clear" onClick={openAppSettings}>
                <Text>{textConstants.settings}</Text>
            </Button>
        </div>
    )
}

export default PostIncidentPage

const textConstants = {
    deniedLocationPermission: "Location permission denied",
    settings: "Settings",
    incidentSummaryPlaceholder: "Enter incident summary",
    incidentDescriptionPlaceholder: "Enter incident description",
    incidentLocationPlaceholder: "Enter incident location",
    send: "Send",
}
