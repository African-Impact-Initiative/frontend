import ServiceResponse from '../types/serviceResponse'
import User from '../types/user'
import apiRoutes from './apiRoutes'
import { AuthorizationHeader, RefreshToken, UserCredentials, GoogleCredentials, LoginResponse, RevokeAuthorization } from './contracts/authorizationContracts'
import Service from './service'
import { METHODS, getCookie } from './utils'
import { EmptyResponse } from './contracts/generalContracts'

const authorizationService = new Service<User>(apiRoutes.authorizationOperations.baseUrl)
const googleId = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID
const googleSecret = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_SECRET
const passwordId = import.meta.env.VITE_REGULAR_LOGIN_CLIENT_ID
const passwordSecret = import.meta.env.VITE_REGULAR_LOGIN_CLIENT_SECRET

let token: string | null = null
let refreshToken: string | null = null
let tokensValidUntil: Date | null = null

const setTokensValidUntil = (time: number) => {
    tokensValidUntil = new Date(new Date().getTime() + time * 1000)
}

const setToken = (newToken: string) => {
    token = newToken
}

const setRefreshToken = (newRefreshToken: string) => {
    refreshToken = newRefreshToken
}

const getToken = (): string | null => (token !== null)? `Bearer ${token}` : null

const getAuthorizationHeader = (): AuthorizationHeader => {
    const token = getToken()

    const header: AuthorizationHeader = {
        header: {
            'X-CSRFToken': getCookie('csrftoken'),
        }
    }
    if(token) header.header.Authorization = token

    return header
}

const refresh = async (): Promise<ServiceResponse<User>> => {
    const data: RefreshToken = {
        grantType: 'refresh_token',
        clientId: passwordId,
        clientSecret: passwordSecret,
        refreshToken: refreshToken!
    }

    return await authorizationService.requestWith<User, RefreshToken>(METHODS.post, data, apiRoutes.authorizationOperations.password)
}

const refreshGoogle = async (): Promise<ServiceResponse<User>> => {
    const data: RefreshToken = {
        grantType: 'refresh_token',
        clientId: googleId,
        clientSecret: googleSecret,
        refreshToken: refreshToken!
    }

    return await authorizationService.requestWith<User, RefreshToken>(METHODS.post, data, apiRoutes.authorizationOperations.password)
}

const isTokenValid = (): boolean => tokensValidUntil === null? false : (new Date().getTime() < tokensValidUntil.getTime())

const revokeTokens = async (): Promise<boolean> => {
    const res = await authorizationService.requestWith<EmptyResponse, RevokeAuthorization>(METHODS.post, { clientId: passwordId }, apiRoutes.authorizationOperations.kill)
    return res.success
}

const revokeGoogleTokens = async (): Promise<boolean> => {
    const res = await authorizationService.requestWith<EmptyResponse, RevokeAuthorization>(METHODS.post, { clientId: googleId }, apiRoutes.authorizationOperations.kill)
    return res.success
}

const regularLogin = async (username: string, password: string): Promise<ServiceResponse<LoginResponse>> => {
    const credentials: UserCredentials = {
        username,
        password,
        grantType: 'password',
        clientId: passwordId,
        clientSecret: passwordSecret
    }

    const res = await authorizationService.requestWith<LoginResponse, UserCredentials>(METHODS.post, credentials, apiRoutes.authorizationOperations.password)
    setTokensValidUntil((res.data as LoginResponse).expiresIn)
    return res
}

const googleLogin = async (token: string): Promise<ServiceResponse<LoginResponse>> => {
    const credentials: GoogleCredentials = {
        token,
        backend: 'google-oauth2',
        grantType: 'convert_token',
        clientId: googleId,
        clientSecret: googleSecret
    }

    const res = await authorizationService.requestWith<LoginResponse, GoogleCredentials>(METHODS.post, credentials, apiRoutes.authorizationOperations.google)
    setTokensValidUntil((res.data as LoginResponse).expiresIn)
    return res
}

export default {
    regularLogin,
    googleLogin,
    setToken,
    setRefreshToken,
    getToken,
    getAuthorizationHeader,
    refresh,
    isTokenValid,
    revokeTokens,
    revokeGoogleTokens,
    refreshGoogle,
}