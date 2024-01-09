import AppUser from '../../types/appUser'
import User from '../../types/user'

export type UpdateUserState = {
    type: string,
    payload: User
}

export type UpdateAppUserState = {
    type: string,
    payload: AppUser
}

export type AnyUpdateUserState = {
    type: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any
}

export type SetLoadingState = {
    type: string,
    payload: boolean
}