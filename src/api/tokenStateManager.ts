import ITokenStateManager from '../types/tokenStateManager'

class TokenStateManager implements ITokenStateManager {
    private static token: string | null
    private static refreshToken: string | null
    private static tokensValidUntil: Date | null

    setTokensValidUntil = (time: number): void => {
        TokenStateManager.tokensValidUntil = new Date(new Date().getTime() + time * 1000)
    }

    setToken = (newToken: string): void => {
        TokenStateManager.token = newToken
    }

    setRefreshToken = (newRefreshToken: string): void => {
        TokenStateManager.refreshToken = newRefreshToken
    }

    getToken = (): string | null => (TokenStateManager.token !== null)? `Bearer ${TokenStateManager.token}` : null

    getRefreshToken = (): string | null => TokenStateManager.refreshToken

    isTokenValid = (): boolean => TokenStateManager.tokensValidUntil === null? false : (new Date().getTime() < TokenStateManager.tokensValidUntil.getTime())

    revokeTokens(): void {
        TokenStateManager.refreshToken = null
        TokenStateManager.token = null
    }
}

export default TokenStateManager