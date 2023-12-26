import axios, { AxiosResponse, AxiosInstance, Method, AxiosHeaders } from 'axios'
import IHttpClient from './types/httpClient'
import { Id } from '../types/propertyTypes'
import ITokenStateManager from './types/tokenStateManager'
import TokenStateManager from './tokenStateManager'
import { getCookie } from './utils'
import { Empty } from './contracts/generalContracts'

class HttpClient<T> implements IHttpClient<T> {
    client: AxiosInstance
    stateManager: ITokenStateManager

    constructor(root: string) {
        this.client = axios.create({
            baseURL: `${import.meta.env.VITE_APP_HOST_BACKEND}/${root}`,
        })
        this.stateManager = new TokenStateManager()
    }

    getAuthorizationHeader = (): AxiosHeaders => {
        const token = this.stateManager.getToken()
        const cookie = getCookie('csrftoken')

        const header: AxiosHeaders = new AxiosHeaders()
        if(cookie) header.set('X-CSRFToken', cookie)
        if(token) header.setAuthorization(token)

        return header
    }

    async get(query?: string, endpoint: string = ''): Promise<AxiosResponse<Array<T>>> {
        const url = query === undefined? endpoint : `${endpoint}?${query}`
        return await this.client.get<Array<T>>(url, { headers: this.getAuthorizationHeader() })
    }

    async getSingle(endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.get<T>(endpoint, { headers: this.getAuthorizationHeader() })
    }

    async put(id: Id, obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.put<T>(`${endpoint}${id}/`, obj, { headers: this.getAuthorizationHeader() })
    }

    async patch(id: Id, obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.patch<T>(`${endpoint}${id}/`, obj, { headers: this.getAuthorizationHeader() })
    }

    async post(obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.post<T>(`${endpoint}`, obj, { headers: this.getAuthorizationHeader() })
    }

    async delete(id: Id, endpoint: string = ''): Promise<AxiosResponse<Empty>> {
        return await this.client.delete<Empty>(`${endpoint}${id}/`, { headers: this.getAuthorizationHeader() })
    }

    async request<K>(method: Method, data?: K, endpoint?: string | undefined): Promise<AxiosResponse<K>> {
        return this.requestWith<K, K>(method, data, endpoint)
    }

    async requestWith<K, V>(method: Method, data?: V, endpoint?: string | undefined): Promise<AxiosResponse<K>> {
        return await this.client.request<K>({
            method,
            url: endpoint,
            data: data,
            headers: this.getAuthorizationHeader()
        })
    }
}

export default HttpClient