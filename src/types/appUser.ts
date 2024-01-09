import User from './user'

export const VBLocalStorage = 'VBLocalStorageKey'
export type VBUser = 'VBUser'
export type VBGoogle = 'VBGoogle'

export type LocalStorageUser = {
    token: string,
    refreshToken: string,
    type: VBUser | VBGoogle,
    expiry: number
}

type AppUser = {
    loading: boolean,
    anon: boolean,
    data: User | null,
}

export default AppUser