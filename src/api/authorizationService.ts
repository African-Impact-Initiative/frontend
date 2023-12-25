import ServiceResponse from '../types/serviceResponse'
import User from '../types/user'
import apiRoutes from './apiRoutes'
import { RefreshToken, UserCredentials, GoogleCredentials, LoginResponse, RevokeAuthorization } from './contracts/authorizationContracts'
import Service from './service'
import { METHODS } from './utils'
import { EmptyResponse } from './contracts/generalContracts'
import ITokenStateManager from '../types/tokenStateManager'
import TokenStateManager from './tokenStateManager'

const authorizationService = new Service<User>(apiRoutes.authorizationOperations.baseUrl)
const stateManager: ITokenStateManager = TokenStateManager.getStateManager()

const googleId = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID
const googleSecret = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_SECRET
const passwordId = import.meta.env.VITE_REGULAR_LOGIN_CLIENT_ID
const passwordSecret = import.meta.env.VITE_REGULAR_LOGIN_CLIENT_SECRET

const updateStateManager = (tokenData: LoginResponse) => {
    stateManager.setTokensValidUntil(tokenData.expiresIn)
    stateManager.setToken(tokenData.accessToken)
    stateManager.setRefreshToken(tokenData.refreshToken)
}

const refresh = async (): Promise<ServiceResponse<LoginResponse>> => {
    const data: RefreshToken = {
        grantType: 'refresh_token',
        clientId: passwordId,
        clientSecret: passwordSecret,
        refreshToken: stateManager.getRefreshToken()!
    }

    const res = await authorizationService.requestWith<LoginResponse, RefreshToken>(METHODS.post, data, apiRoutes.authorizationOperations.password)
    updateStateManager(res.data as LoginResponse)
    return res
}

const refreshGoogle = async (): Promise<ServiceResponse<LoginResponse>> => {
    const data: RefreshToken = {
        grantType: 'refresh_token',
        clientId: googleId,
        clientSecret: googleSecret,
        refreshToken: stateManager.getRefreshToken()!
    }

    const res = await authorizationService.requestWith<LoginResponse, RefreshToken>(METHODS.post, data, apiRoutes.authorizationOperations.password)
    updateStateManager(res.data as LoginResponse)
    return res
}

const revokeTokens = async (): Promise<boolean> => {
    const res = await authorizationService.requestWith<EmptyResponse, RevokeAuthorization>(METHODS.post, { clientId: passwordId }, apiRoutes.authorizationOperations.kill)
    stateManager.revokeTokens()
    return res.success
}

const revokeGoogleTokens = async (): Promise<boolean> => {
    const res = await authorizationService.requestWith<EmptyResponse, RevokeAuthorization>(METHODS.post, { clientId: googleId }, apiRoutes.authorizationOperations.kill)
    stateManager.revokeTokens()
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
    updateStateManager(res.data as LoginResponse)
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
    updateStateManager(res.data as LoginResponse)
    return res
}

export default {
    regularLogin,
    googleLogin,
    refresh,
    revokeTokens,
    revokeGoogleTokens,
    refreshGoogle,
}