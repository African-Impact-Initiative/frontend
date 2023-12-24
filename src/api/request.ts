import axios, { Method, AxiosResponse } from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_HOST_BACKEND,
})

const request = <T>(method: Method, url: string, params: any): Promise<AxiosResponse<T>> => {
    return api.request<T>({
        method,
        url,
        params,
    })
}

export default request;