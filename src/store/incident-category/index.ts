import { create } from "zustand"
import type { IncidentCategory } from "../../types/incident-category"
import fetchIncidentCategories from "./actions/fetch-incident-category"

export interface IncidentCategoryState {
    incidentCategories: IncidentCategory[]
}

interface IncidentCategoryActions {
    fetchIncidentCategories: () => Promise<void>
}

const initialState: IncidentCategoryState = {
    incidentCategories: [],
}

const useIncidentCategoryStore = create<
    IncidentCategoryState & IncidentCategoryActions
>((set) => ({
    ...initialState,
    fetchIncidentCategories: fetchIncidentCategories(set),
}))

export default useIncidentCategoryStore
