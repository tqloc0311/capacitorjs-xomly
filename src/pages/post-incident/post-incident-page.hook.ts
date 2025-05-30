import { useCallback, useEffect, useMemo, useState } from "react"
import { Geolocation, type PermissionStatus } from "@capacitor/geolocation"
import useAlertPresenter from "../../hooks/use-alert-presenter"
import type { Coordinate } from "../../types/coordinate"
import useIncidentCategoryStore from "../../store/incident-category"
import useIncidentStore from "../../store/incident"

const usePostIncidentPage = () => {
    const { showLoading, showErrorAlert, showSuccessAlert, dismissLoading } =
        useAlertPresenter()
    const [coordinate, setCoordinate] = useState<Coordinate | null>(null)
    const [isFetchingLocation, setIsFetchingLocation] = useState(false)
    const [permissionStatus, setPermissionStatus] =
        useState<PermissionStatus | null>(null)
    const [incidentSummary, setIncidentSummary] = useState("")
    const [incidentDescription, setIncidentDescription] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
        null
    )

    const isSendButtonEnabled = useMemo(() => {
        return (
            incidentSummary.length > 0 &&
            selectedCategoryId !== null &&
            coordinate !== null
        )
    }, [incidentSummary, selectedCategoryId, coordinate])

    const { incidentCategories, fetchIncidentCategories } =
        useIncidentCategoryStore((state) => state)

    const { postIncident } = useIncidentStore((state) => state)

    const checkLocationPermission = useCallback(async () => {
        try {
            const permission = await Geolocation.checkPermissions()
            setPermissionStatus(permission)
            if (
                permission.location === "denied" ||
                permission.location === "prompt"
            ) {
                const permission = await Geolocation.requestPermissions()
                setPermissionStatus(permission)
                return permission.location === "granted"
            }
            return permission.location === "granted"
        } catch (error) {
            console.error(error)
        }

        return false
    }, [])

    const fetchLocation = useCallback(async () => {
        const hasPermission = await checkLocationPermission()
        if (!hasPermission) {
            return
        }

        try {
            setIsFetchingLocation(true)
            const location = await Geolocation.getCurrentPosition()
            setCoordinate({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })
        } catch (error) {
            console.error(error)
        } finally {
            setIsFetchingLocation(false)
        }
    }, [checkLocationPermission])

    useEffect(() => {
        fetchLocation()
        fetchIncidentCategories()
    }, [fetchLocation, fetchIncidentCategories])

    const sendIncident = async () => {
        try {
            await showLoading(textConstants.sendingIncident)
            await postIncident({
                incidentSummary,
                incidentDescription,
                incidentCategoryId: incidentCategories[0].id,
                incidentLocation: coordinate!,
            })
            await showSuccessAlert(textConstants.incidentSentSuccessfully)
        } catch (error) {
            console.error(error)
            await showErrorAlert(textConstants.failedToSendIncident)
            throw error
        } finally {
            await dismissLoading()
        }
    }

    return {
        sendIncident,
        coordinate,
        isFetchingLocation,
        fetchLocation,
        permissionStatus,
        isSendButtonEnabled,
        incidentSummary,
        incidentDescription,
        setIncidentSummary,
        setIncidentDescription,
        incidentCategories,
        selectedCategoryId,
        setSelectedCategoryId,
    }
}

export default usePostIncidentPage

const textConstants = {
    sendingIncident: "Sending incident...",
    incidentSentSuccessfully: "Incident sent successfully",
    failedToSendIncident: "Failed to send incident. Please try again.",
}
