import { AxiosResponse } from "axios"

interface IHttpClient<T> {
    get(query: null | string, endpoint: string):  Promise<AxiosResponse<T>>
    put(id: string | number, obj: T, endpoint: string):  Promise<AxiosResponse<T>>
    patch(id: string | number, obj: any, endpoint: string):  Promise<AxiosResponse<T>>
    post(obj: T, endpoint: string):  Promise<AxiosResponse<T>>
    delete(id: string | number, endpoint: string):  Promise<AxiosResponse<T>>
}

export default IHttpClient