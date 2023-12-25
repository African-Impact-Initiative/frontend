type UserCredentials = {
    username: string,
    password: string,
    grantType: 'password',
    clientId: string,
    clientSecret: string
}

type GoogleCredentials = {
    token: string,
    backend: 'google-oauth2',
    grantType: 'convert_token',
    clientId: string,
    clientSecret: string
}

type RefreshToken = {
    grantType: 'refresh_token',
    clientId: string,
    clientSecret: string,
    refreshToken: string
}

type RevokeAuthorization = {
    clientId: string
}

type AuthorizationHeader = {
    header: {
        'X-CSRFToken': string,
        Authorization?: string
    }
}