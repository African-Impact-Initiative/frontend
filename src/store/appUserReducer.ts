import authorizationService from '../api/authorizationService'
import userService from '../api/userService'
import { createSlice } from '@reduxjs/toolkit'

import { setSuccessNotification, setErrorNotification } from './notificationReducer'
import AppUser, { LocalStorageUser, VBLocalStorage } from '../types/appUser'
import { UpdateUserState, UpdateAppUserState, AnyUpdateUserState, SetLoadingState } from './types/appUserState'
import { LoginResponse } from '../api/contracts/authorizationContracts'
import User from '../types/user'
import { Id } from '../types/propertyTypes'
import TokenStateManager from '../api/tokenStateManager'
import ITokenStateManager from '../api/types/tokenStateManager'
import ServiceResponse from '../types/serviceResponse'
import { UpdatePersonalInfo, UpdateTerms } from '../api/contracts/userContracts'
import { AppDispatch } from './store'

const stateManager: ITokenStateManager = new TokenStateManager()

const initialState: AppUser = {
    loading: true,
    anon: true,
    data: null
}

// toolkit sets up the redux and state
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAppUser(_state: AppUser, action: UpdateAppUserState) {
            return action.payload
        },
        setUser(_state: AppUser, action: UpdateUserState) {
            return {
                anon: action.payload === null,
                loading: false,
                data: action.payload
            }
        },
        updateUserState(state: AppUser, action: AnyUpdateUserState) {
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            }
        },
        setLoading(state: AppUser, action: SetLoadingState) {
            return {
                ...state,
                loading: action.payload
            }
        }
    }
})

export const { setUser, updateUserState, setAppUser, setLoading } = userSlice.actions

export const login = (username: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await authorizationService.regularLogin(username, password)
            const tokens = res.data as LoginResponse
            const localStorageUser: LocalStorageUser = {
                token: tokens.accessToken,
                refreshToken: tokens.refreshToken,
                type: 'VBUser',
                expiry: new Date(new Date().getTime() + tokens.expiresIn * 1000).getTime()
            }

            window.localStorage.setItem(VBLocalStorage, JSON.stringify(localStorageUser))

            const user = await userService.getCurrent()
            dispatch(setUser(user.data as User))
            dispatch(setSuccessNotification('Logged in successfully'))
        } catch {
            dispatch(setErrorNotification('Invalid username or password'))
        }
    }
}

export const googleLogin = (token: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await authorizationService.googleLogin(token)
            const tokens = res.data as LoginResponse
            const localStorageUser: LocalStorageUser = {
                token: tokens.accessToken,
                refreshToken: tokens.refreshToken,
                type: 'VBGoogle',
                expiry: new Date(new Date().getTime() + tokens.expiresIn * 1000).getTime()
            }

            window.localStorage.setItem(VBLocalStorage, JSON.stringify(localStorageUser))

            const user = await userService.getCurrent()
            dispatch(setUser(user.data as User))
            dispatch(setSuccessNotification('Logged in successfully'))
        } catch {
            dispatch(setErrorNotification('Error logging in, please try again later'))
        }
    }
}

export const logout = (expired: boolean = false) => {
    return async (dispatch: AppDispatch) => {
        try {
            const user = window.localStorage.getItem(VBLocalStorage)
            if (user) {
                const localStorageUser: LocalStorageUser = JSON.parse(user)

                if(localStorageUser.type === 'VBGoogle')
                    await authorizationService.revokeGoogleTokens()
                else
                    await authorizationService.revokeTokens()
            }
            window.localStorage.removeItem(VBLocalStorage)
        } catch (err) {
            window.localStorage.removeItem(VBLocalStorage)
        } finally {
            if(!expired)
                dispatch(setSuccessNotification('Logged out successfully'))

            dispatch(setAppUser({ anon: true, data: null, loading: false }))
        }
    }
}

export const setUserOnRefresh = () => {
    return async (dispatch: AppDispatch) => {
        const tokens = window.localStorage.getItem(VBLocalStorage)

        if(tokens) {
            const data: LocalStorageUser = JSON.parse(tokens)
            stateManager.setToken(data.token)
            stateManager.setRefreshToken(data.refreshToken)

            if(!(new Date().getTime() < data.expiry)) {
                try {
                    let tokens: ServiceResponse<LoginResponse> | null = null

                    if(data.type === 'VBGoogle')
                        tokens = await authorizationService.refreshGoogle()
                    else
                        tokens = await authorizationService.refresh()

                    window.localStorage.setItem(VBLocalStorage, JSON.stringify(tokens.data))
                    const user = await userService.getCurrent()
                    dispatch(setUser(user.data as User))
                } catch {
                    dispatch(setErrorNotification('Session has expired'))
                    dispatch(logout(true))
                }
            } else {
                const user = await userService.getCurrent()
                dispatch(setUser(user.data as User))
            }
        } else
            dispatch(setAppUser({ anon: true, data: null, loading: false }))

    }
}

export const createUser = (user: User) => {
    return async (dispatch: AppDispatch) => {
        const res = await userService.create(user)
        if(!res.success)
            dispatch(setErrorNotification('Error creating account please try again later'))
        else
            dispatch(setSuccessNotification('Account created successfully'))
    }
}

export const updateUser = (data: User) => {
    return async (dispatch: AppDispatch) => {
        try {
            const user = await userService.update(data.id!, data)
            dispatch(setUser(user.data as User))
            dispatch(setSuccessNotification('Profile updated'))
        } catch {
            dispatch(setErrorNotification('Error updating profile'))
        }
    }
}

export const userAgreeToTerms = () => {
    return async (dispatch: AppDispatch) => {
        const terms = await userService.agreeToTerms()
        dispatch(updateUserState(terms.data as UpdateTerms))
        dispatch(setSuccessNotification('Terms agreed'))
    }
}

export const userAddToOrg = (id: Id) => {
    return async (dispatch: AppDispatch) => {
        await userService.addOrganizationToUser(id)
        const user = await userService.getCurrent()
        dispatch(setUser(user.data as User))
    }
}

export const updatePersonalInfo = (personalInfo: UpdatePersonalInfo) => {
    return async (dispatch: AppDispatch) => {
        await userService.updatePersonalInformation(personalInfo)
        dispatch(updateUserState(personalInfo))
        dispatch(setSuccessNotification('Personal information updated'))
    }
}

export const deleteUser = (id: Id) => {
    return async (dispatch: AppDispatch) => {
        try {
            await userService.destroy(id)
            dispatch(setSuccessNotification('Your account was deleted!'))
            dispatch(logout())
            window.location.reload()
        } catch {
            dispatch(setErrorNotification('There was an error deleting your account, please verify your password is correct'))
        }
    }
}

export default userSlice.reducer