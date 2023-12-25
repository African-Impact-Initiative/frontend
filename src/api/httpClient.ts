import axios, { AxiosResponse, AxiosInstance, Method } from 'axios'
import IHttpClient from '../types/httpClient'
import { Id } from "../types/propertyTypes"

class HttpClient<T> implements IHttpClient<T> {
    client: AxiosInstance

    constructor(root: string) {
        this.client = axios.create({
            baseURL: `${import.meta.env.VITE_APP_HOST_BACKEND}/${root}`,
        })
    }

    async get(query?: string, endpoint: string = ''): Promise<AxiosResponse<T>> {
        const url = query === undefined? endpoint : `${endpoint}?${query}`
        return await this.client.get<T>(url)
    }

    async put(id: Id, obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.put<T>(`${endpoint}${id}/`, obj)
    }

    async patch(id: Id, obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.patch<T>(`${endpoint}${id}/`, obj)
    }

    async post(obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.post<T>(`${endpoint}`, obj)
    }

    async delete(id: Id, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.delete<T>(`${endpoint}${id}/`)
    }

    async request<K>(method: Method, data?: K, endpoint?: string | undefined): Promise<AxiosResponse<K, any>> {
        return await this.client.request<K>({
            method,
            url: endpoint,
            data: data
        })
    }
}

export default HttpClient