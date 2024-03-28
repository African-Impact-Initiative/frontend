import { Id } from './propertyTypes'

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
    leadership: null | boolean,
    team: Array<String>,

    // only on creation
    password?: string

    // permissions
    staff: null | boolean,
    admin: null | boolean,
    owner: null | boolean,
    anon: null | boolean,
    termsOfUse: null | boolean,

    // organization
    organization: Id | null,

    // meta data
    joined: string,
    lastLogin: string,
}

export const emptyUser: User = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    id: '',
    role: null,
    linkedin: null,
    photo: null,
    country: null,
    bio: null,
    leadership: null,
    team: [],
    staff: null,
    admin: null,
    owner: null,
    anon: null,
    termsOfUse: null,
    organization: null,
    joined: '',
    lastLogin: ''
}

export default User