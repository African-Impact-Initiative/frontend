import { AuthorizationHeader } from "../api/contracts/authorizationContracts"

export default interface ITokenStateManager {
    setTokensValidUntil(time: number): void
    setToken(newToken: string): void
    setRefreshToken(newRefreshToken: string): void
    getToken(): string | null
    getRefreshToken(): string | null
    getAuthorizationHeader(): AuthorizationHeader
    revokeTokens(): void
    isTokenValid(): boolean
}