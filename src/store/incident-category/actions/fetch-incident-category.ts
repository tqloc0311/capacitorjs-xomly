import firebaseService from "../../../services/firebase/firebase-service"
import type { IncidentCategoryState } from ".."

const fetchIncidentCategories =
    (set: (state: IncidentCategoryState) => void) => async () => {
        const categories = await firebaseService.getIncidentCategories()
        set({ incidentCategories: categories })
    }

export default fetchIncidentCategories
