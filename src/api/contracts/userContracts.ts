import { Id } from '../../types/propertyTypes'

export type UpdateTerms = {
    terms: boolean
}

export type UpdatePersonalInfo = {
    firstName:	string,
    lastName: string,
    role: string,
    linkedin?: string,
    country?: string | null,
    bio?: string,
}

export type AddUserToOrganization = {
    org: Id
}

export type CreateUser = {
    firstName:	string,
    lastName: string,
    email: string,
    password: string,
}