import ITokenStateManager from '../types/tokenStateManager'

class TokenStateManager implements ITokenStateManager {
    private static stateManager: TokenStateManager

    token: string | null
    refreshToken: string | null
    tokensValidUntil: Date | null

    private constructor() {
        this.token = null
        this.refreshToken = null
        this.tokensValidUntil = null
    }

    static getStateManager(): TokenStateManager {
        if (TokenStateManager.stateManager === undefined)
            TokenStateManager.stateManager = new TokenStateManager()

        return TokenStateManager.stateManager
    }

    setTokensValidUntil = (time: number): void => {
        TokenStateManager.stateManager.tokensValidUntil = new Date(new Date().getTime() + time * 1000)
    }

    setToken = (newToken: string): void => {
        TokenStateManager.stateManager.token = newToken
    }

    setRefreshToken = (newRefreshToken: string): void => {
        TokenStateManager.stateManager.refreshToken = newRefreshToken
    }

    getToken = (): string | null => (TokenStateManager.stateManager.token !== null)? `Bearer ${TokenStateManager.stateManager.token}` : null

    getRefreshToken = (): string | null => TokenStateManager.stateManager.refreshToken

    isTokenValid = (): boolean => TokenStateManager.stateManager.tokensValidUntil === null? false : (new Date().getTime() < TokenStateManager.stateManager.tokensValidUntil.getTime())

    revokeTokens(): void {
        this.refreshToken = null
        this.token = null
    }
}

export default TokenStateManager