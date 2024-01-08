import { ForeignRelation, Id } from './propertyTypes'

type User = {
    // personal data
    id: null | Id,
    email: string,
    firstName: string,
    lastName: string,
    role: null | string,
    linkedin: null | string,
    photo: null | string,
    country: null | string,
    bio: null | string,

    // only on creation
    password?: string

    // permissions
    staff: null | boolean,
    admin: null | boolean,
    anon: null | boolean,
    termsOfUse: null | boolean,

    // organizations
    organizations: ForeignRelation,

    // meta data
    joined: string,
    lastLogin: string,
}

export const emptyUser: User = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    id: null,
    role: null,
    linkedin: null,
    photo: null,
    country: null,
    bio: null,
    staff: null,
    admin: null,
    anon: null,
    termsOfUse: null,
    organizations: [],
    joined: '',
    lastLogin: ''
}

export default User