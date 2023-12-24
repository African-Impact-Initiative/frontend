import { AxiosResponse } from "axios"

interface IHttpClient<T> {
    get(query: null | string):  Promise<AxiosResponse<T>>
    put(id: string | number, obj: T):  Promise<AxiosResponse<T>>
    patch(id: string | number, obj: any):  Promise<AxiosResponse<T>>
    post(obj: T):  Promise<AxiosResponse<T>>
    delete(id: string | number):  Promise<AxiosResponse<T>>
}

export default IHttpClient