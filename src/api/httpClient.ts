import axios, { AxiosResponse, AxiosInstance } from "axios"
import IHttpClient from "../types/httpClient";

class HttpClient<T> implements IHttpClient<T> {
    client: AxiosInstance

    constructor() {
        this.client = axios.create({
            baseURL: import.meta.env.VITE_APP_HOST_BACKEND,
        })
    }

    async get(query: string | null, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.get<T>(`${endpoint}?${query}`)
    }

    async put(id: string | number, obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.put<T>(`${endpoint}${id}/`, obj)
    }

    async patch(id: string | number, obj: any, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.patch<T>(`${endpoint}${id}/`, obj)
    }

    async post(obj: T, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.post<T>(`${endpoint}`, obj)
    }

    async delete(id: string | number, endpoint: string = ''): Promise<AxiosResponse<T>> {
        return await this.client.delete<T>(`${endpoint}${id}/`)
    }
}

export default HttpClient