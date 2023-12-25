export type Id = string | number

type User = {
    // personal data
    id: Id
    email: string
    firstName: string
    lastName: string
    role: string
    linkedin: null | string
    photo: null | string
    country: null | string
    bio: null | string

    // permissions
    staff: boolean
    admin: boolean
    anon: null | boolean
    termsOfUse: null | boolean

    // organizations
    organizations: [number]

    // meta data
    joined: string
    lastLogin: string
}

export default User