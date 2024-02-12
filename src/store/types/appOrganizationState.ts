import Organization from "../../types/organization"

export type SetAppOrganizationState = {
    type: string,
    payload: Organization | null
}

export type UpdateAppOrganizationState = {
    type: string,
    payload: Organization
}