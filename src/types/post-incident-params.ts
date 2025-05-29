import type { Coordinate } from "./coordinate"

interface PostIncidentParams {
    incidentSummary: string
    incidentDescription: string
    incidentCategoryId: string
    incidentLocation: Coordinate
}

export type { PostIncidentParams }
