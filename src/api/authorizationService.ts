import ServiceResponse from "../types/serviceResponse";
import User from "../types/user";
import apiRoutes from "./apiRoutes";
import Service from "./service";
import { METHODS } from "./utils";

const authorizationService = new Service<User>(apiRoutes.authorizationOperations.baseUrl)

const regularLogin = async (username: string, password: string): Promise<ServiceResponse<User>> => {
    const id = import.meta.env.VITE_REGULAR_LOGIN_CLIENT_ID
    const secret = import.meta.env.VITE_REGULAR_LOGIN_CLIENT_SECRET
    const credentials: UserCredentials = {
        username,
        password,
        grantType: 'password',
        clientId: id,
        clientSecret: secret
    }

    return await authorizationService.requestWith<User, UserCredentials>(METHODS.post, credentials, apiRoutes.authorizationOperations.password)
}

const googleLogin = async (token: string): Promise<ServiceResponse<User>> => {
    const id = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID
    const secret = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_SECRET
    const credentials: GoogleCredentials = {
        token,
        backend: 'google-oauth2',
        grantType: 'convert_token',
        clientId: id,
        clientSecret: secret
    }

    return await authorizationService.requestWith<User, GoogleCredentials>(METHODS.post, credentials, apiRoutes.authorizationOperations.google)
}

export default {
    regularLogin,
    googleLogin
}