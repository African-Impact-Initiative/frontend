import { ForeignRelation, Id } from './propertyTypes'

type User = {
    // personal data
    id: Id,
    email: string,
    firstName: string,
    lastName: string,
    role: null | string,
    linkedin: null | string,
    photo: null | string,
    country: null | string,
    bio: null | string,

    // permissions
    staff: boolean,
    admin: boolean,
    anon: null | boolean,
    termsOfUse: null | boolean,

    // organizations
    organizations: ForeignRelation,

    // meta data
    joined: string,
    lastLogin: string,
}

export default User