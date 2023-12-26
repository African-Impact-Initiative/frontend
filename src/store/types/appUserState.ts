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