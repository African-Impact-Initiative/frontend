import Organization from "../../types/organization"
import { Id } from "../../types/propertyTypes"

export type AppOrganizations = Array<Organization>

export type AppSetOrganizationsAction = {
    type: string
    payload: Array<Organization>
}

export type AppUpdateOrAddOrganizationAction = {
    type: string
    payload: Organization
}

export type AppDestroyOrganizationAction = {
    type: string
    payload: Id
}
