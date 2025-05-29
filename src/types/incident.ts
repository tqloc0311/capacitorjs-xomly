import type { Coordinate } from "./coordinate"

interface Incident {
    id: string
    summary: string
    description: string
    categoryId: string
    location: Coordinate
}

export type { Incident }
