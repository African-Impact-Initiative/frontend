export type UserCredentials = {
    username: string,
    password: string,
    grantType: 'password',
    clientId: string,
    clientSecret: string
}

export type GoogleCredentials = {
    token: string,
    backend: 'google-oauth2',
    grantType: 'convert_token',
    clientId: string,
    clientSecret: string
}

export type RefreshToken = {
    grantType: 'refresh_token',
    clientId: string,
    clientSecret: string,
    refreshToken: string
}

export type RevokeAuthorization = {
    clientId: string
}

export type AuthorizationHeader = {
    header: {
        'X-CSRFToken': string | null,
        Authorization?: string
    }
}

export type LoginResponse = {
    accessToken: string,
    expiresIn: number,
    tokenType: string,
    scope: string,
    refreshToken: string
}