import { create } from "zustand"
import type { Incident } from "../../types/incident"
import type { PostIncidentParams } from "../../types/post-incident-params"
import postIncident from "./actions/post-incident"

export interface IncidentState {
    incidents: Incident[]
}

interface IncidentActions {
    postIncident: (params: PostIncidentParams) => Promise<void>
}

const initialState: IncidentState = {
    incidents: [],
}

const useIncidentStore = create<IncidentState & IncidentActions>(
    (set, get) => ({
        ...initialState,
        postIncident: postIncident(set, get),
    })
)

export default useIncidentStore
