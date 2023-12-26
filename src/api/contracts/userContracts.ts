import { Id } from "../../types/propertyTypes"

export type UpdateTerms = {
    terms: boolean
}

export type UpdatePersonalInfo = {
    first_name:	string
    last_name: string
    role: string
    linkedin?: string
    country?:	string
    bio?:	string
}

export type AddUserToOrganization = {
    org: Id
}