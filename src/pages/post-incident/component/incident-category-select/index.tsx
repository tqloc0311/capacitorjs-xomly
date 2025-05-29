import { IonSelect } from "@ionic/react"
import { IonSelectOption } from "@ionic/react"
import type { IncidentCategory } from "../../../../types/incident-category"
import styles from "./incident-category-select.module.css"

interface IncidentCategorySelectProps {
    incidentCategories: IncidentCategory[]
    selectedCategoryId: string | null
    onSelect: (categoryId: string) => void
}

const IncidentCategorySelect = ({
    incidentCategories,
    selectedCategoryId,
    onSelect,
}: IncidentCategorySelectProps) => {
    return (
        <IonSelect
            interface="action-sheet"
            placeholder={textConstants.placeholder}
            class="custom"
            onIonChange={(e) => e.detail.value && onSelect(e.detail.value)}
        >
            {selectedCategoryId && (
                <div
                    className={styles.indicator}
                    style={{
                        backgroundColor: selectedCategoryId
                            ? incidentCategories.find(
                                  (category) =>
                                      category.id === selectedCategoryId
                              )?.color
                            : "transparent",
                    }}
                    slot="start"
                    aria-hidden="true"
                />
            )}
            {incidentCategories.map((category) => (
                <IonSelectOption key={category.id} value={category.id}>
                    {category.name}
                </IonSelectOption>
            ))}
        </IonSelect>
    )
}

export default IncidentCategorySelect

const textConstants = {
    placeholder: "Select incident category",
}
