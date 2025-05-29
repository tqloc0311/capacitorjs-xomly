import firebaseService from "../../../services/firebase/firebase-service"
import type { IncidentState } from ".."
import type { PostIncidentParams } from "../../../types/post-incident-params"
import type { Incident } from "../../../types/incident"

const postIncident =
    (set: (state: IncidentState) => void, get: () => IncidentState) =>
    async (params: PostIncidentParams) => {
        const incidents = get().incidents
        const newId = await firebaseService.postIncident(params)

        const newIncident: Incident = {
            id: newId,
            summary: params.incidentSummary,
            description: params.incidentDescription,
            categoryId: params.incidentCategoryId,
            location: params.incidentLocation,
        }

        set({ incidents: [...incidents, newIncident] })
    }

export default postIncident
