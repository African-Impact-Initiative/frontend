import { AxiosResponse, Method } from 'axios'
import { Id } from './propertyTypes'

interface IHttpClient<T> {
    get(query?: string, endpoint?: string):  Promise<AxiosResponse<T>>
    put(id: Id, obj: T, endpoint?: string):  Promise<AxiosResponse<T>>
    patch(id: Id, obj: T, endpoint?: string):  Promise<AxiosResponse<T>>
    post(obj: T, endpoint?: string):  Promise<AxiosResponse<T>>
    delete(id: Id, endpoint?: string):  Promise<AxiosResponse<T>>

    request<K>(method: Method, data?: K, endpoint?: string): Promise<AxiosResponse<K>>
    requestWith<K, V>(method: Method, data?: V, endpoint?: string | undefined): Promise<AxiosResponse<K>>
}

export default IHttpClient