import Organization from "../../types/organization"

export type SetUserOrganizationState = {
    type: string,
    payload: Organization | null
}

export type UpdateUserOrganizationState = {
    type: string,
    payload: Organization
}